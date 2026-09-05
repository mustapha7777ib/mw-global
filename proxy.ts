import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n/config";

/**
 * Locale routing.
 *
 * Every page lives under `app/[lang]`, but English is served without a prefix
 * so the URLs already indexed at mwglobal.org.ng — `/about`, `/services` — keep
 * working exactly as they did. This rewrites those onto the `en` segment
 * invisibly, and lets `/ar/...` through untouched.
 *
 * Nothing here sniffs `Accept-Language`: a visitor always lands on English and
 * switches with the toggle, so a shared link and a crawler always see the same
 * page as the person who sent it.
 */

const prefixed = new RegExp(`^/(${locales.join("|")})(/|$)`);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // `/en/about` and `/about` would otherwise be two URLs for one page. Redirect
  // the prefixed form so each page has exactly one address a crawler can index.
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // `/ar/...` addresses the segment directly.
  if (prefixed.test(pathname)) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skips the quote endpoint, Next internals, and anything with a file
  // extension — which covers public/ assets, sitemap.xml and robots.txt.
  matcher: ["/((?!api/|_next/|.*\\.).*)"],
};
