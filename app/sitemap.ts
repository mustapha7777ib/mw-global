import type { MetadataRoute } from "next";
import { nav, siteUrl } from "@/lib/site";

/**
 * Derived from `nav` rather than hand-listed, so a page added to the navigation
 * is submitted to search engines automatically and the two cannot drift apart.
 *
 * Priorities are relative to each other only — they say nothing to Google about
 * this site versus any other. The homepage leads, the contact page ranks just
 * behind it because it carries the enquiry form and the LocalBusiness markup.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // Evaluated at build time: every deploy stamps the current date.
  const lastModified = new Date();

  return nav.map(({ href }) => ({
    url: href === "/" ? siteUrl : `${siteUrl}${href}`,
    lastModified,
    changeFrequency: href === "/" ? "weekly" : "monthly",
    priority: href === "/" ? 1 : href === "/contact" ? 0.9 : 0.8,
  }));
}
