import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  IBM_Plex_Sans,
  IBM_Plex_Sans_Arabic,
  Noto_Sans_SC,
  Source_Serif_4,
} from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import { site, siteUrl } from "@/lib/site";
import {
  direction,
  getDictionary,
  htmlLang,
  isLocale,
  locales,
  ogLocale,
  t,
} from "@/lib/i18n";
import { alternatesFor } from "@/lib/i18n/metadata";
import "../globals.css";

// "latin-ext" is what carries Turkish's ğ ş ı İ — without it those fall to a
// system font mid-word, which shows as a visible mismatch inside a sentence.
const plex = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

/**
 * The Arabic face. The Latin faces above carry the Latin subset only, so
 * without this the Arabic pages fell back to whatever the operating system
 * chose. It is the single face the whole Arabic site is set in — headings
 * included — and it is the same type family as the Latin IBM Plex Sans, so
 * both languages read as one brand.
 */
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-arabic",
  display: "swap",
});

/**
 * The Chinese face, on the same single-face principle as the Arabic one: CJK
 * has no serif/sans pairing that mirrors the Latin one, so weight and size
 * carry the hierarchy instead. next/font splits it into unicode-range chunks
 * and the browser fetches only the ranges a page actually uses, which is what
 * keeps a CJK face affordable here.
 */
const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

/**
 * Both locales are known at build time, so every page of both sites is
 * prerendered rather than server-rendered on demand.
 */
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const tagline = t(site.tagline, lang);
  const description = t(site.description, lang);

  return {
    // Drives every absolute URL Next generates — canonicals, og:image,
    // twitter:image. Sourced from site.ts so the domain is stated once.
    metadataBase: new URL(siteUrl),
    alternates: alternatesFor(lang, "/"),
    title: {
      default: `${site.name} — ${tagline}`,
      template: `%s | ${site.shortName}`,
    },
    description,
    keywords: [
      "import export company Nigeria",
      "agricultural commodity export",
      "solid minerals export",
      "freight forwarding",
      "customs clearing",
      "sesame seeds export",
      "raw cashew nuts",
      "M/W Global Services Limited",
    ],
    // og:image and twitter:image are supplied by the opengraph-image.jpg /
    // twitter-image.jpg files in app/, with their .alt.txt companions.
    openGraph: {
      title: `${site.name} — ${tagline}`,
      description,
      siteName: site.name,
      type: "website",
      locale: ogLocale[lang],
      // No `url` here on purpose: it would be inherited verbatim by every child
      // page, pointing all of them at the homepage. The per-page
      // `alternates.canonical` carries that signal correctly instead.
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${tagline}`,
      description,
    },
    robots: { index: true, follow: true },
  };
}

/**
 * The root layout. It lives under `[lang]` rather than at `app/` so that
 * `<html lang>` and `dir` can be set from the URL — the two attributes that
 * decide how a screen reader pronounces the page and which way the whole
 * layout flows. Unmatched routes are served by `app/global-not-found.tsx`,
 * which owns its own `<html>` because it renders outside this layout.
 */
export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const d = getDictionary(lang);

  return (
    <html
      lang={htmlLang[lang]}
      dir={direction(lang)}
      className={`${plex.variable} ${sourceSerif.variable} ${plexArabic.variable} ${notoSC.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-100 focus:bg-brand-700 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          {d.common.skipToContent}
        </a>
        <Navbar locale={lang} nav={d.nav} common={d.common} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer locale={lang} />
        {/* Company identity for search engines — see lib/schema.ts. */}
        <JsonLd
          data={graph(organizationSchema(lang), websiteSchema(lang))}
        />
      </body>
    </html>
  );
}
