/**
 * SINGLE SOURCE OF TRUTH FOR COMPANY DETAILS.
 *
 * Everything wrapped in [SQUARE BRACKETS] is still a placeholder — replace it
 * with the real value and it updates everywhere on the site at once.
 */

export const site = {
  name: "M/W Global Services Limited",
  shortName: "M/W Global",
  tagline: "Import • Export • Logistics",
  description:
    "M/W Global Services Limited is an international trade company sourcing and shipping agricultural commodities, solid minerals and industrial goods between Africa and world markets.",
  url: "https://[YOUR-DOMAIN].com",

  founded: "[2008]",

  // ── Contact ─────────────────────────────────────────────────────────────
  email: "[info@mwglobal.org.ng]",
  salesEmail: "[trade@yourdomain.com]",
  phone: "+234 905 617 1492",
  whatsapp: "2349056171492", // digits only, country code first
  hours: "24/7",

  // ── Office ──────────────────────────────────────────────────────────────
  office: {
    label: "Office",
    lines: [
      "2 Emeritus Umaru Shehu Ave",
      "Abuja 900108, Federal Capital Territory",
    ],
  },

  // ── Social ──────────────────────────────────────────────────────────────
  social: {
    linkedin: "[https://linkedin.com/company/your-company]",
    instagram: "[https://instagram.com/yourhandle]",
    x: "[https://x.com/yourhandle]",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/commodities", label: "Commodities" },
  { href: "/contact", label: "Contact" },
] as const;
