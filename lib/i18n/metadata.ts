import type { Metadata } from "next";
import { defaultLocale, htmlLang, localeHref, locales, type Locale } from "./config";

/**
 * Canonical + hreflang for one page, in one locale.
 *
 * Every localised page must point at itself as canonical and list every
 * translation of itself as an alternate — including itself. Search engines
 * treat a one-sided hreflang as unconfirmed and quietly drop it, so the pair
 * has to be emitted from both sides, which falls out of generating the whole
 * set from the same `path` on each locale's page.
 *
 * `x-default` points at English: it is the version served without a prefix and
 * the one to show a visitor whose language we do not publish.
 *
 * `path` is the locale-free page path, e.g. "/about" or "/".
 */
export function alternatesFor(
  locale: Locale,
  path: string,
): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[htmlLang[l]] = localeHref(l, path);
  languages["x-default"] = localeHref(defaultLocale, path);

  return { canonical: localeHref(locale, path), languages };
}
