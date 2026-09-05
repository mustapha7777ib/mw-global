/**
 * Locale configuration — the one place that knows which languages exist.
 *
 * URL scheme: English is served unprefixed (`/about`) so every URL that was
 * already indexed keeps working, and every other language sits under its own
 * segment (`/ar/about`, `/tr/about`, `/zh/about`). `proxy.ts` rewrites the
 * unprefixed English URLs onto the `[lang]` segment.
 *
 * Adding a language is deliberately a type error until it is finished: extend
 * this array and TypeScript will demand the new entry in every record below,
 * a dictionary in `lib/i18n/`, and a translation of every `Text` value in
 * `lib/site.ts` and `lib/content.ts`. Nothing ships half-translated.
 */

export const locales = ["en", "ar", "tr", "zh"] as const;

export type Locale = (typeof locales)[number];

/** Served without a URL prefix. */
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function direction(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * BCP-47 tag for <html lang> and hreflang. Chinese is tagged by script rather
 * than region — the copy is Simplified, which is what "zh-Hans" states, and it
 * serves readers in Singapore and Malaysia as correctly as those in China.
 */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  ar: "ar",
  tr: "tr",
  zh: "zh-Hans",
};

/** Open Graph wants language_TERRITORY. */
export const ogLocale: Record<Locale, string> = {
  en: "en_NG",
  ar: "ar_AE",
  tr: "tr_TR",
  zh: "zh_CN",
};

/** Native name of each language, for the language menu. */
export const localeName: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  tr: "Türkçe",
  zh: "中文",
};

/**
 * Paths that are not localised pages — static files, the quote endpoint and
 * anything with an extension. `localeHref` hands these back untouched so a
 * PDF link never becomes `/ar/downloads/....pdf`.
 */
const NON_PAGE = /^\/(?:api|images|downloads|certificates)\/|\.[a-z0-9]+$/i;

/**
 * Site-relative href for a page in a given locale.
 *
 *   localeHref("en", "/about")           → "/about"
 *   localeHref("ar", "/about")           → "/ar/about"
 *   localeHref("ar", "/")                → "/ar"
 *   localeHref("ar", "/services#export") → "/ar/services#export"
 *
 * Absolute URLs, mailto:, tel: and static files pass through unchanged.
 */
export function localeHref(locale: Locale, path: string): string {
  if (!path.startsWith("/") || NON_PAGE.test(path)) return path;
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Splits a pathname into its locale and the locale-free page path.
 *
 * Tolerates the `/en/...` form as well as the unprefixed one, because a
 * rewritten request is `/en/about` on the server and `/about` in the browser —
 * normalising both to `/about` keeps server and client markup identical.
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return { locale, path: "/" };
    if (pathname.startsWith(`/${locale}/`)) {
      return { locale, path: pathname.slice(locale.length + 1) };
    }
  }
  return { locale: defaultLocale, path: pathname };
}
