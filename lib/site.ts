/**
 * SINGLE SOURCE OF TRUTH FOR COMPANY DETAILS.
 *
 * Everything wrapped in [SQUARE BRACKETS] is still a placeholder — replace it
 * with the real value and it updates everywhere on the site at once.
 */

/** Structured office address — hoisted so `site.office.lines` can derive from it. */
const postal = {
  street: "2 Emeritus Umaru Shehu Ave",
  locality: "Abuja",
  postalCode: "900108",
  region: "Federal Capital Territory",
  country: "NG", // ISO 3166-1 alpha-2
} as const;

export const site = {
  name: "M/W Global Services Limited",
  shortName: "M/W Global",
  /** CAC registration number, from the certificate of incorporation. */
  rc: "776881",
  tagline: "Import • Export • Logistics",
  description:
    "M/W Global Services Limited is an international trade company sourcing and shipping agricultural commodities, solid minerals and industrial goods between Africa and world markets.",
  url: "https://mwglobal.org.ng",


  // ── Contact ─────────────────────────────────────────────────────────────
  email: "mwglobal.team@gmail.com",
  salesEmail: "mwglobal.team@gmail.com",
  phone: "+234 911 013 8293",
  whatsapp: "2349056171492", // digits only, country code first
  hours: "24/7",

  // ── Office ──────────────────────────────────────────────────────────────
  // `postal` is the structured form, used for the LocalBusiness schema that
  // search engines read. `lines` is derived from it so the address a visitor
  // sees and the address Google indexes can never disagree.
  office: {
    label: "Office",
    postal,
    lines: [
      postal.street,
      `${postal.locality} ${postal.postalCode}, ${postal.region}`,
    ],
  },

  // ── Social ──────────────────────────────────────────────────────────────
  social: {
    linkedin: "[https://linkedin.com/company/your-company]",
    instagram: "[https://instagram.com/yourhandle]",
    x: "[https://x.com/yourhandle]",
  },

  // ── Downloadable catalogue ─────────────────────────────────────────────
  // Regenerating the PDF? Keep this in step — pages/size drive the copy on
  // the /catalogue page and the homepage download banner.
  catalogue: {
    href: "/downloads/mw-global-catalogue-2026.pdf",
    label: "Product & Commodity Catalogue — 2026",
    year: "2026",
    pages: 15,
    fileSize: "0.7 MB",
  },
} as const;

/**
 * Registrations and certifications the company actually holds.
 *
 * `file` points at a scanned copy in `public/certificates/` and is what makes
 * the entry a download rather than a claim — a buyer can verify it without
 * emailing anyone. Leave `file` undefined until the scan is actually in that
 * folder: the UI then says the copy is released on request instead of
 * publishing a link that 404s.
 *
 * The catalogue PDF links to these same files by absolute URL, so if a filename
 * changes here, regenerate the catalogue from `catalogue/` too.
 */
export type Certification = {
  name: string;
  issuer: string;
  description: string;
  /** Registration/reference number, where the certificate carries one. */
  reference?: string;
  file?: string;
};

export const certifications: Certification[] = [
  {
    name: "NEPC Export Certification",
    issuer: "Nigerian Export Promotion Council",
    description:
      "Authorisation to export Nigerian goods to international markets.",
    reference: "RE 0045048 · valid to 12 August 2028",
    file: "/certificates/nepc-export-certificate.pdf",
  },
  {
    name: "Halal Certification",
    issuer: "Accredited Halal certification body",
    description:
      "Products meet Islamic dietary and processing standards, required by buyers across the Middle East and parts of Asia.",
  },
  {
    name: "GACC Registration",
    issuer:
      "General Administration of Customs of the People's Republic of China",
    description:
      "Registration with China's customs authority, required for food and agricultural consignments entering the Chinese market.",
  },
  {
    name: "CAC Registration",
    issuer: "Corporate Affairs Commission, Nigeria",
    description:
      "Legally registered Nigerian business entity, incorporated 6 October 2008.",
    reference: `RC ${site.rc}`,
    file: "/certificates/cac-certificate-of-incorporation.pdf",
  },
];

/**
 * Absolute origin, no trailing slash. Set NEXT_PUBLIC_SITE_URL in the hosting
 * environment to point a preview or staging deploy somewhere else without
 * editing code — otherwise this falls back to `site.url` above.
 */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || site.url).replace(
  /\/+$/,
  "",
);

/** Turn a site-relative path into a full URL, for metadata and structured data. */
export function absolute(path: string): string {
  return new URL(path, siteUrl).toString();
}

/**
 * Returns the value with its [BRACKETS] stripped, or `undefined` if it is still
 * an unfilled placeholder.
 *
 * Structured data is worse than absent when it is wrong — a fake email or a
 * dead social profile handed to Google undermines the whole entity. So the
 * schema drops anything unconfirmed rather than publishing a guess.
 */
const UNFILLED = /YOUR-DOMAIN|yourdomain|yourhandle|your-company/i;

export function confirmed(value: string | undefined): string | undefined {
  const cleaned = value?.replace(/[[\]]/g, "").trim();
  return !cleaned || UNFILLED.test(cleaned) ? undefined : cleaned;
}

/**
 * Display-ready contact details.
 *
 * Render these, never `site.email` / `site.salesEmail` directly — those still
 * carry their [BRACKETS], which is a fine authoring convention but was ending
 * up verbatim on the page. A value that is still an unfilled placeholder comes
 * back `undefined` so the caller can omit the link rather than publish a dead
 * mailto.
 */
export const contact = {
  email: confirmed(site.email),
  salesEmail: confirmed(site.salesEmail),
  telHref: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
  whatsappHref: `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`,
};

/** Whether the trade-desk address is worth showing as a separate contact. */
export const hasDistinctSalesEmail =
  Boolean(contact.salesEmail) && contact.salesEmail !== contact.email;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/commodities", label: "Commodities" },
  { href: "/catalogue", label: "Catalogue" },
  { href: "/contact", label: "Contact" },
] as const;
