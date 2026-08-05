/**
 * schema.org / JSON-LD structured data.
 *
 * This is what lets Google treat "M/W Global Services Limited" as an *entity*
 * rather than a string that happens to appear on a page — it feeds the name,
 * logo, Abuja address, phone number and opening hours behind a knowledge panel.
 *
 * Everything here is derived from `lib/site.ts` and `lib/content.ts`; nothing is
 * restated. Values still bracketed in site.ts are dropped by `confirmed()`
 * rather than published as placeholders.
 *
 * Validate changes at https://validator.schema.org and Google's Rich Results
 * Test before deploying.
 */

import { commodities, services } from "@/lib/content";
import { absolute, confirmed, site, siteUrl } from "@/lib/site";

export const ORGANIZATION_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;
export const OFFICE_ID = `${siteUrl}/#office`;
const LOGO_ID = `${siteUrl}/#logo`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.office.postal.street,
  addressLocality: site.office.postal.locality,
  postalCode: site.office.postal.postalCode,
  addressRegion: site.office.postal.region,
  addressCountry: site.office.postal.country,
} as const;

/** site.hours is "24/7" — spelled out the way schema.org expects it. */
const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
} as const;

/** Confirmed social profiles only — an unfilled handle is a broken signal. */
const sameAs = Object.values(site.social)
  .map((profile) => confirmed(profile))
  .filter((profile): profile is string => Boolean(profile));

/**
 * Organization — the company itself. `@id` is a stable identifier that the
 * other nodes point at, so search engines merge them into one entity instead
 * of reading three unrelated businesses.
 */
export const organizationSchema = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: site.name,
  alternateName: site.shortName,
  legalName: site.name,
  url: siteUrl,
  description: site.description,
  slogan: site.tagline,
  telephone: site.phone,
  email: confirmed(site.email),
  address: postalAddress,
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: absolute("/logo.png"),
    contentUrl: absolute("/logo.png"),
    width: 512,
    height: 605,
    caption: site.name,
  },
  image: { "@id": LOGO_ID },
  sameAs: sameAs.length ? sameAs : undefined,
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Place", name: "Worldwide" },
  ],
  knowsAbout: [
    ...services.map((service) => service.title),
    ...commodities.map((group) => group.category),
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${site.shortName} services`,
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.short,
        provider: { "@id": ORGANIZATION_ID },
      },
    })),
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phone,
      email: confirmed(site.salesEmail) ?? confirmed(site.email),
      availableLanguage: ["English"],
      areaServed: site.office.postal.country,
    },
  ],
};

/** WebSite — ties the domain to the company, and names the publisher. */
export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: siteUrl,
  name: site.name,
  description: site.description,
  publisher: { "@id": ORGANIZATION_ID },
  inLanguage: "en",
};

/**
 * LocalBusiness — the physical Abuja office. Kept as its own node, and emitted
 * only on the contact page where the address and hours are actually shown, so
 * the markup always matches what a visitor can see.
 */
export const localBusinessSchema = {
  "@type": "LocalBusiness",
  "@id": OFFICE_ID,
  name: site.name,
  url: absolute("/contact"),
  parentOrganization: { "@id": ORGANIZATION_ID },
  description: site.description,
  telephone: site.phone,
  email: confirmed(site.email),
  address: postalAddress,
  image: { "@id": LOGO_ID },
  openingHoursSpecification: [openingHours],
  // Deliberately no priceRange / currenciesAccepted: both are optional, and
  // neither is established anywhere in this codebase. Structured data is a
  // factual claim to search engines, so it only states what is actually known.
};

/**
 * Wraps nodes in a single @graph. One script tag per page keeps the entity
 * graph unambiguous — repeated standalone blocks tend to get read as duplicates.
 */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
