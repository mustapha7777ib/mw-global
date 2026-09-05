/**
 * SINGLE SOURCE OF TRUTH FOR COMPANY DETAILS.
 *
 * Everything wrapped in [SQUARE BRACKETS] is still a placeholder — replace it
 * with the real value and it updates everywhere on the site at once.
 *
 * Values a visitor reads as prose are `{ en, ar }` pairs, so the English and
 * Arabic sites can never disagree about a fact. Identifiers a machine reads —
 * the domain, the phone number, the postal address behind the map — stay in
 * one Latin form, because that is what dialers, mail clients and Google Maps
 * expect regardless of the language the page is written in.
 */

import type { MaybeText, Text } from "@/lib/i18n/text";

/** Structured office address — hoisted so `site.office` can derive from it. */
const postal = {
  street: "2 Emeritus Umaru Shehu Ave",
  locality: "Abuja",
  postalCode: "900108",
  region: "Federal Capital Territory",
  country: "NG", // ISO 3166-1 alpha-2
} as const;

/** The address as Google Maps and the LocalBusiness schema want it. */
const mapQuery = `${postal.street}, ${postal.locality} ${postal.postalCode}, ${postal.region}`;

export const site = {
  name: "M/W Global Services Limited",
  shortName: "M/W Global",
  /** CAC registration number, from the certificate of incorporation. */
  rc: "776881",
  tagline: {
    en: "Import • Export • Logistics",
    ar: "استيراد • تصدير • خدمات لوجستية",
  } satisfies Text,
  description: {
    en: "M/W Global Services Limited is an international trade company sourcing and shipping agricultural commodities, solid minerals and industrial goods between Africa and world markets.",
    ar: "شركة M/W Global Services Limited شركة تجارة دولية تتولّى توريد وشحن السلع الزراعية والمعادن الصلبة والبضائع الصناعية بين أفريقيا وأسواق العالم.",
  } satisfies Text,
  url: "https://mwglobal.org.ng",

  // ── Contact ─────────────────────────────────────────────────────────────
  email: "mwglobal.team@gmail.com",
  salesEmail: "mwglobal.team@gmail.com",
  phone: "+234 911 013 8293",
  whatsapp: "2349056171492", // digits only, country code first
  hours: { en: "24/7", ar: "على مدار الساعة" } satisfies Text,

  // ── Office ──────────────────────────────────────────────────────────────
  // `postal` is the structured form, used for the LocalBusiness schema that
  // search engines read. `lines` is derived from it so the address a visitor
  // sees and the address Google indexes can never disagree.
  office: {
    label: { en: "Office", ar: "المكتب" } satisfies Text,
    postal,
    mapQuery,
    lines: {
      en: [
        postal.street,
        `${postal.locality} ${postal.postalCode}, ${postal.region}`,
      ],
      ar: ["2 شارع إميريتوس عمر شيهو", "أبوجا 900108، إقليم العاصمة الاتحادي"],
    },
  },

  // ── Social ──────────────────────────────────────────────────────────────
  social: {
    linkedin: "[https://linkedin.com/company/your-company]",
    instagram: "[https://instagram.com/yourhandle]",
    x: "[https://x.com/yourhandle]",
  },

  // ── Downloadable catalogue ─────────────────────────────────────────────
  // One edition per language, each its own PDF. Regenerating either? Keep its
  // `pages` and `fileSize` in step — they drive the copy on the /catalogue
  // page and the homepage download banner. `downloadAs` is the filename the
  // visitor's browser saves, so the two editions never overwrite each other in
  // a downloads folder.
  catalogue: {
    en: {
      href: "/downloads/mw-global-catalogue-2026.pdf",
      downloadAs: "MW-Global-Catalogue-2026.pdf",
      label: "Product & Commodity Catalogue — 2026",
      pages: 15,
      fileSize: "0.7 MB",
    },
    ar: {
      href: "/downloads/mw-global-catalogue-2026-ar.pdf",
      downloadAs: "MW-Global-Catalogue-2026-AR.pdf",
      label: "كتالوج المنتجات والسلع — 2026",
      pages: 15,
      fileSize: "0.1 MB",
    },
    year: "2026",
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
 * `name` and `issuer` stay in English in both languages: that is how they read
 * on the certificate a buyer is handed, and translating them would make the
 * page and the document disagree.
 *
 * The catalogue PDF links to these same files by absolute URL, so if a filename
 * changes here, regenerate the catalogue from `catalogue/` too.
 */
export type Certification = {
  name: string;
  issuer: string;
  description: Text;
  /** Registration/reference number, where the certificate carries one. */
  reference?: MaybeText;
  file?: string;
};

export const certifications: Certification[] = [
  {
    name: "NEPC Export Certification",
    issuer: "Nigerian Export Promotion Council",
    description: {
      en: "Authorisation to export Nigerian goods to international markets.",
      ar: "ترخيص بتصدير البضائع النيجيرية إلى الأسواق الدولية.",
    },
    reference: {
      en: "RE 0045048 · valid to 12 August 2028",
      ar: "RE 0045048 · سارٍ حتى 12 أغسطس 2028",
    },
    file: "/certificates/nepc-export-certificate.pdf",
  },
  {
    name: "Halal Certification",
    issuer: "Accredited Halal certification body",
    description: {
      en: "Products meet Islamic dietary and processing standards, required by buyers across the Middle East and parts of Asia.",
      ar: "المنتجات مطابقة للاشتراطات الإسلامية في الغذاء والتصنيع، وهي مطلوبة لدى المشترين في الشرق الأوسط وأجزاء من آسيا.",
    },
  },
  {
    name: "GACC Registration",
    issuer:
      "General Administration of Customs of the People's Republic of China",
    description: {
      en: "Registration with China's customs authority, required for food and agricultural consignments entering the Chinese market.",
      ar: "تسجيل لدى هيئة الجمارك الصينية، وهو شرط لدخول الشحنات الغذائية والزراعية إلى السوق الصينية.",
    },
  },
  {
    name: "CAC Registration",
    issuer: "Corporate Affairs Commission, Nigeria",
    description: {
      en: "Legally registered Nigerian business entity, incorporated 6 October 2008.",
      ar: "كيان تجاري نيجيري مسجّل قانونياً، تأسّس في 6 أكتوبر 2008.",
    },
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

/**
 * Navigation, as locale-free paths. Labels live in `lib/i18n/{en,ar}.ts` keyed
 * by these same paths, and `localeHref` prefixes them for the Arabic site.
 */
export const nav = [
  "/",
  "/about",
  "/services",
  "/commodities",
  "/catalogue",
  "/contact",
] as const;

export type NavHref = (typeof nav)[number];
