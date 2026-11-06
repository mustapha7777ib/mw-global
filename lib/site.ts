/**
 * SINGLE SOURCE OF TRUTH FOR COMPANY DETAILS.
 *
 * Everything wrapped in [SQUARE BRACKETS] is still a placeholder — replace it
 * with the real value and it updates everywhere on the site at once.
 *
 * Values a visitor reads as prose are `Text` — one string per published
 * language, side by side — so the language sites can never disagree about a
 * fact. Identifiers a machine reads —
 * the domain, the phone number, the postal address behind the map — stay in
 * one Latin form, because that is what dialers, mail clients and Google Maps
 * expect regardless of the language the page is written in.
 */

import type { Locale } from "@/lib/i18n/config";
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
    tr: "İthalat • İhracat • Lojistik",
    zh: "进口 • 出口 • 物流",
    fr: "Import • Export • Logistique",
  } satisfies Text,
  description: {
    en: "M/W Global Services Limited is an international trade company sourcing and shipping agricultural commodities, solid minerals and industrial goods between Africa and world markets.",
    ar: "شركة M/W Global Services Limited شركة تجارة دولية تتولّى توريد وشحن السلع الزراعية والمعادن الصلبة والبضائع الصناعية بين أفريقيا وأسواق العالم.",
    tr: "M/W Global Services Limited; Afrika ile dünya pazarları arasında tarımsal emtia, katı mineraller ve sınai ürünlerin tedarikini ve sevkiyatını yapan bir dış ticaret şirketidir.",
    zh: "M/W Global Services Limited 是一家国际贸易公司，在非洲与全球市场之间采购并运输农产品、固体矿产及工业品。",
    fr: "M/W Global Services Limited est une société de commerce international qui source et expédie des produits agricoles, des minerais solides et des biens industriels entre l'Afrique et les marchés du monde.",
  } satisfies Text,
  url: "https://mwglobal.org.ng",

  // ── Contact ─────────────────────────────────────────────────────────────
  email: "mwglobal.team@gmail.com",
  salesEmail: "mwglobal.team@gmail.com",
  phone: "+234 911 013 8293",
  whatsapp: "2349056171492", // digits only, country code first
  hours: {
    en: "24/7",
    ar: "على مدار الساعة",
    tr: "7/24",
    zh: "全天候",
    fr: "24h/24, 7j/7",
  } satisfies Text,

  // ── Office ──────────────────────────────────────────────────────────────
  // `postal` is the structured form, used for the LocalBusiness schema that
  // search engines read. `lines` is derived from it so the address a visitor
  // sees and the address Google indexes can never disagree.
  office: {
    label: {
      en: "Office",
      ar: "المكتب",
      tr: "Ofis",
      zh: "办公室",
      fr: "Bureau",
    } satisfies Text,
    postal,
    mapQuery,
    lines: {
      en: [
        postal.street,
        `${postal.locality} ${postal.postalCode}, ${postal.region}`,
      ],
      ar: ["2 شارع إميريتوس عمر شيهو", "أبوجا 900108، إقليم العاصمة الاتحادي"],
      tr: [
        "2 Emeritus Umaru Shehu Ave",
        "Abuja 900108, Federal Başkent Bölgesi",
      ],
      zh: ["2 Emeritus Umaru Shehu Ave", "阿布贾 900108，联邦首都辖区"],
      fr: [
        "2 Emeritus Umaru Shehu Ave",
        "Abuja 900108, Territoire de la Capitale Fédérale",
      ],
    },
  },

  // ── Social ──────────────────────────────────────────────────────────────
  social: {
    linkedin: "[https://linkedin.com/company/your-company]",
    instagram: "[https://instagram.com/yourhandle]",
    x: "[https://x.com/yourhandle]",
  },

  // ── Downloadable catalogue ─────────────────────────────────────────────
  // One edition per language, each its own PDF. Replacing one? Keep its
  // `pages` and `fileSize` in step — they drive the copy on the /catalogue
  // page and the homepage download banner. `downloadAs` is the filename the
  // visitor's browser saves, so editions never overwrite each other in a
  // downloads folder.
  catalogue: {
    year: "2026",
    // Keyed by the language the PDF is *written in*, not by the pages that
    // link it. Every published language has its own edition today;
    // `catalogueFor` still falls back to English so a language added later
    // gets a working download before its own PDF exists.
    editions: {
      en: {
        locale: "en",
        href: "/downloads/mw-global-catalogue-2026.pdf",
        downloadAs: "MW-Global-Catalogue-2026.pdf",
        label: "Product & Commodity Catalogue — 2026",
        pages: 15,
        fileSize: "0.7 MB",
      },
      ar: {
        locale: "ar",
        href: "/downloads/mw-global-catalogue-2026-ar.pdf",
        downloadAs: "MW-Global-Catalogue-2026-AR.pdf",
        label: "كتالوج المنتجات والسلع — 2026",
        pages: 15,
        fileSize: "0.2 MB",
      },
      tr: {
        locale: "tr",
        href: "/downloads/mw-global-catalogue-2026-tr.pdf",
        downloadAs: "MW-Global-Catalogue-2026-TR.pdf",
        label: "Ürün ve Emtia Kataloğu — 2026",
        pages: 15,
        fileSize: "0.1 MB",
      },
      zh: {
        locale: "zh",
        href: "/downloads/mw-global-catalogue-2026-zh.pdf",
        downloadAs: "MW-Global-Catalogue-2026-ZH.pdf",
        label: "产品与商品目录 — 2026",
        pages: 15,
        fileSize: "0.8 MB",
      },
      fr: {
        locale: "fr",
        href: "/downloads/mw-global-catalogue-2026-fr.pdf",
        downloadAs: "MW-Global-Catalogue-2026-FR.pdf",
        label: "Catalogue Produits & Matières Premières — 2026",
        pages: 15,
        fileSize: "0.7 MB",
      },
    },
  },
} as const;

export type CatalogueEdition = {
  /** The language the PDF itself is written in. */
  locale: Locale;
  href: string;
  downloadAs: string;
  label: string;
  pages: number;
  fileSize: string;
};

/**
 * The catalogue edition to offer a visitor reading `locale`.
 *
 * Falls back to the English edition for a language without its own PDF, so a
 * newly added language gets a working download rather than a dead link — and
 * because the returned edition carries the language it is written in, the
 * page can say so instead of letting the visitor find out after downloading.
 */
export function catalogueFor(locale: Locale): CatalogueEdition {
  const editions: Readonly<Partial<Record<Locale, CatalogueEdition>>> =
    site.catalogue.editions;
  return editions[locale] ?? site.catalogue.editions.en;
}

/**
 * Registrations and certifications the company actually holds.
 *
 * `file` points at a scanned copy in `public/certificates/` and is what makes
 * the entry a download rather than a claim — a buyer can verify it without
 * emailing anyone. Leave `file` undefined until the scan is actually in that
 * folder: the UI then says the copy is released on request instead of
 * publishing a link that 404s.
 *
 * `name` and `issuer` stay in English in every language: that is how they read
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
      tr: "Nijerya menşeli ürünlerin uluslararası pazarlara ihracatı için yetki belgesi.",
      zh: "尼日利亚商品出口至国际市场的授权资质。",
      fr: "Autorisation d'exporter des marchandises nigérianes vers les marchés internationaux.",
    },
    reference: {
      en: "RE 0045048 · valid to 12 August 2028",
      ar: "RE 0045048 · سارٍ حتى 12 أغسطس 2028",
      tr: "RE 0045048 · 12 Ağustos 2028 tarihine kadar geçerli",
      zh: "RE 0045048 · 有效期至 2028 年 8 月 12 日",
      fr: "RE 0045048 · valable jusqu'au 12 août 2028",
    },
    file: "/certificates/nepc-export-certificate.pdf",
  },
  {
    name: "Halal Certification",
    issuer: "Accredited Halal certification body",
    description: {
      en: "Products meet Islamic dietary and processing standards, required by buyers across the Middle East and parts of Asia.",
      ar: "المنتجات مطابقة للاشتراطات الإسلامية في الغذاء والتصنيع، وهي مطلوبة لدى المشترين في الشرق الأوسط وأجزاء من آسيا.",
      tr: "Ürünler, Orta Doğu ve Asya'nın bazı bölgelerindeki alıcıların talep ettiği İslami gıda ve üretim standartlarına uygundur.",
      zh: "产品符合伊斯兰饮食与加工标准，中东及部分亚洲市场的买家通常要求此项认证。",
      fr: "Les produits respectent les normes islamiques alimentaires et de transformation, exigées par les acheteurs du Moyen-Orient et d'une partie de l'Asie.",
    },
  },
  {
    name: "GACC Registration",
    issuer:
      "General Administration of Customs of the People's Republic of China",
    description: {
      en: "Registration with China's customs authority, required for food and agricultural consignments entering the Chinese market.",
      ar: "تسجيل لدى هيئة الجمارك الصينية، وهو شرط لدخول الشحنات الغذائية والزراعية إلى السوق الصينية.",
      tr: "Çin gümrük idaresi nezdinde kayıt — gıda ve tarım sevkiyatlarının Çin pazarına girişi için zorunludur.",
      zh: "中华人民共和国海关总署注册，食品及农产品进入中国市场的必要条件。",
      fr: "Enregistrement auprès de l'autorité douanière chinoise, requis pour les denrées alimentaires et agricoles entrant sur le marché chinois.",
    },
  },
  {
    name: "CAC Registration",
    issuer: "Corporate Affairs Commission, Nigeria",
    description: {
      en: "Legally registered Nigerian business entity, incorporated 6 October 2008.",
      ar: "كيان تجاري نيجيري مسجّل قانونياً، تأسّس في 6 أكتوبر 2008.",
      tr: "6 Ekim 2008'de kurulmuş, yasal olarak tescilli Nijerya şirketi.",
      zh: "依法注册的尼日利亚企业实体，成立于 2008 年 10 月 6 日。",
      fr: "Entité commerciale nigériane légalement immatriculée, constituée le 6 octobre 2008.",
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
