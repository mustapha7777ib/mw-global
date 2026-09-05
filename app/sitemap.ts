import type { MetadataRoute } from "next";
import { nav, siteUrl } from "@/lib/site";
import { defaultLocale, htmlLang, localeHref, locales } from "@/lib/i18n";

/**
 * Derived from `nav` rather than hand-listed, so a page added to the navigation
 * is submitted to search engines automatically and the two cannot drift apart.
 *
 * Every page is listed once per locale, and each entry carries the full set of
 * `alternates.languages` — the sitemap equivalent of the hreflang tags in the
 * page head. Stating it in both places is redundant but conventional, and
 * costs nothing.
 *
 * Priorities are relative to each other only — they say nothing to Google about
 * this site versus any other. The homepage leads, the contact page ranks just
 * behind it because it carries the enquiry form and the LocalBusiness markup.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Evaluated at build time: every deploy stamps the current date.
  const lastModified = new Date();

  const absolute = (locale: (typeof locales)[number], path: string) => {
    const href = localeHref(locale, path);
    return href === "/" ? siteUrl : `${siteUrl}${href}`;
  };

  return locales.flatMap((locale) =>
    nav.map((path) => ({
      url: absolute(locale, path),
      lastModified,
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : path === "/contact" ? 0.9 : 0.8,
      alternates: {
        languages: Object.fromEntries([
          ...locales.map((l) => [htmlLang[l], absolute(l, path)]),
          ["x-default", absolute(defaultLocale, path)],
        ]),
      },
    })),
  );
}
