import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { domains } from '@/config/domains';
import { runtimeLogger } from '@/lib/logger';

// Define cache control settings
const CACHE_CONTROL = {
  static: 'public, max-age=31536000, immutable', // 1 year for static assets
  dynamic: 'public, max-age=3600, s-maxage=60', // 1 hour browser, 1 minute CDN
};

// Define security headers
const SECURITY_HEADERS = {
  'X-DNS-Prefetch-Control': 'on',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
} as const;

export async function middleware(request: NextRequest) {
  const startTime = performance.now();
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  runtimeLogger.request(request, {
    startTime,
    routeType: 'middleware',
  });

  try {
    // Handle redirects
    const redirectResponse = handleRedirects(hostname, url);
    if (redirectResponse) return redirectResponse;

    const response = NextResponse.next();

    // Add security headers
    Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    // Set appropriate cache control based on path
    const isStaticAsset = request.nextUrl.pathname.match(
      /\.(jpg|jpeg|gif|png|ico|svg|css|js)$/
    );
    response.headers.set(
      'Cache-Control',
      isStaticAsset ? CACHE_CONTROL.static : CACHE_CONTROL.dynamic
    );

    runtimeLogger.info('Middleware completed', {
      duration: performance.now() - startTime,
      status: response.status,
      path: url.pathname,
      headers: Object.fromEntries(response.headers),
    });

    return response;
  } catch (error) {
    runtimeLogger.error('Middleware error', {
      duration: performance.now() - startTime,
      path: url.pathname,
      error: {
        name: error instanceof Error ? error.name : 'Unknown error',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
    });
    throw error;
  }
}

// Helper function to handle redirects
function handleRedirects(hostname: string | null, url: URL) {
  if (!hostname) return null;

  // Handle www to non-www redirect
  if (hostname.startsWith('www.')) {
    const newHostname = hostname.replace('www.', '');
    const redirectUrl = `https://${newHostname}${url.pathname}${url.search}`;

    runtimeLogger.info('Redirecting www to non-www:', {
      from: hostname,
      to: newHostname,
    });
    return NextResponse.redirect(redirectUrl, 301);
  }

  // Handle alternate domains redirect to primary
  if (domains.alternateHostnames.includes(hostname)) {
    const redirectUrl = `${domains.primary}${url.pathname}${url.search}`;

    runtimeLogger.info('Redirecting alternate domain:', {
      from: hostname,
      to: domains.primary,
    });
    return NextResponse.redirect(redirectUrl, 301);
  }

  return null;
}

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api|_next|static|[\\w-]+\\.\\w+).*)',
    '/images/:path*',
  ],
};
