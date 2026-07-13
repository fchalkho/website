import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Canonicalize URLs to lowercase (industry standard). Redirects only fire when
// the path isn't already lowercase, so there's no loop — e.g. /ASCII -> /ascii,
// /Frambuesa -> /frambuesa. Config redirects (next.config.ts) run afterwards.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = request.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  // Run on page paths only; skip _next internals and any file with an extension
  // (icons, images, static assets).
  matcher: ["/((?!_next/|.*\\..*).*)"],
};
