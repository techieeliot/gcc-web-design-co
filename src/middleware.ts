import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { domains } from '@/config/domains';
import { runtimeLogger } from '@/lib/logger';

export async function middleware(request: NextRequest) {
  const startTime = performance.now();
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host');

  runtimeLogger.request(request, {
    startTime,
    routeType: 'middleware',
  });

  try {
    runtimeLogger.info('Middleware processing request:', {
      url: url.toString(),
      hostname,
      pathname: url.pathname,
      userAgent: request.headers.get('user-agent'),
    });

    // Handle www to non-www redirect
    if (hostname?.startsWith('www.')) {
      const newHostname = hostname.replace('www.', '');
      const redirectUrl = `https://${newHostname}${url.pathname}${url.search}`;

      runtimeLogger.info('Redirecting www to non-www:', {
        from: hostname,
        to: newHostname,
      });
      return NextResponse.redirect(redirectUrl, 301);
    }

    // Handle alternate domains redirect to primary
    if (hostname && domains.alternateHostnames.includes(hostname)) {
      const redirectUrl = `${domains.primary}${url.pathname}${url.search}`;

      runtimeLogger.info('Redirecting alternate domain:', {
        from: hostname,
        to: domains.primary,
      });
      return NextResponse.redirect(redirectUrl, 301);
    }

    const response = NextResponse.next();

    // Add security headers
    response.headers.set('X-DNS-Prefetch-Control', 'on');
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains'
    );
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');

    // Add caching headers for static assets
    if (
      request.nextUrl.pathname.match(/\.(jpg|jpeg|gif|png|ico|svg|css|js)$/)
    ) {
      response.headers.set(
        'Cache-Control',
        'public, max-age=31536000, immutable'
      );
    }

    // Add caching headers
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
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
  ],
};
