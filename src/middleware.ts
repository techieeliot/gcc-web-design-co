import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { domains } from "@/config/domains";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");

  // Handle www to non-www redirect
  if (hostname?.startsWith("www.")) {
    const newHostname = hostname.replace("www.", "");
    return NextResponse.redirect(
      `https://${newHostname}${url.pathname}${url.search}`,
      301,
    );
  }

  // Handle alternate domains redirect to primary
  if (hostname && domains.alternateHostnames.includes(hostname)) {
    return NextResponse.redirect(
      `${domains.primary}${url.pathname}${url.search}`,
      301,
    );
  }

  return NextResponse.next();
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
