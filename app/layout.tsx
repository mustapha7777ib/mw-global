import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  // Drives every absolute URL Next generates — canonicals, og:image, twitter:image.
  // Sourced from site.ts so the domain is stated in exactly one place.
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
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
  // twitter-image.jpg files in this directory, with their .alt.txt companions.
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
    locale: "en_NG",
    // No `url` here on purpose: it would be inherited verbatim by every child
    // page, pointing all of them at the homepage. The per-page
    // `alternates.canonical` carries that signal correctly instead.
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plex.variable} ${sourceSerif.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:bg-brand-700 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {/* Company identity for search engines — see lib/schema.ts. */}
        <JsonLd data={graph(organizationSchema, websiteSchema)} />
      </body>
    </html>
  );
}
