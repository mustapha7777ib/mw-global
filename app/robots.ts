import type { MetadataRoute } from "next";
import { absolute, siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The quote endpoint only answers POST, so there is nothing to index and
      // a crawler hitting it just produces noise in the logs.
      disallow: "/api/",
    },
    sitemap: absolute("/sitemap.xml"),
    host: siteUrl,
  };
}
