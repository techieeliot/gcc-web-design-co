import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { domains } from "@/config/domains";
import { logger } from "@/lib/logger";

export async function middleware(request: NextRequest) {
  const startTime = performance.now();
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  logger.request(request, {
    startTime,
    routeType: "middleware",
  });

  try {
    logger.info("Middleware processing request:", {
      url: url.toString(),
      hostname,
      pathname: url.pathname,
      userAgent: request.headers.get("user-agent"),
    });

    // Handle www to non-www redirect
    if (hostname?.startsWith("www.")) {
      const newHostname = hostname.replace("www.", "");
      const redirectUrl = `https://${newHostname}${url.pathname}${url.search}`;

      logger.info("Redirecting www to non-www:", {
        from: hostname,
        to: newHostname,
      });
      return NextResponse.redirect(redirectUrl, 301);
    }

    // Handle alternate domains redirect to primary
    if (hostname && domains.alternateHostnames.includes(hostname)) {
      const redirectUrl = `${domains.primary}${url.pathname}${url.search}`;

      logger.info("Redirecting alternate domain:", {
        from: hostname,
        to: domains.primary,
      });
      return NextResponse.redirect(redirectUrl, 301);
    }

    const response = NextResponse.next();

    logger.info("Middleware completed", {
      duration: performance.now() - startTime,
      status: response.status,
      path: url.pathname,
      headers: Object.fromEntries(response.headers),
    });

    return response;
  } catch (error) {
    logger.error("Middleware error", {
      duration: performance.now() - startTime,
      path: url.pathname,
      error: {
        name: error instanceof Error ? error.name : "Unknown error",
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
    "/((?!api|_next|static|[\\w-]+\\.\\w+).*)",
  ],
};
