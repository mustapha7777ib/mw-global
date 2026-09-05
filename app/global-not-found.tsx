import type { Metadata } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import { ArrowRight, Button, Container } from "@/components/ui";
import { defaultLocale, direction, getDictionary, htmlLang } from "@/lib/i18n";
import "./globals.css";

/**
 * The 404 for URLs that match no route at all.
 *
 * The root layout lives under `app/[lang]`, so an unmatched URL has no locale
 * segment to render inside it — Next skips layouts entirely here. That is why
 * this file owns its own `<html>`, imports the stylesheet and loads the fonts:
 * nothing above it runs. It answers in the default locale, since a URL that
 * matched nothing told us nothing about which language was wanted.
 */

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

const d = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: d.notFound.title,
  description: d.notFound.text,
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html
      lang={htmlLang[defaultLocale]}
      dir={direction(defaultLocale)}
      className={`${plex.variable} ${sourceSerif.variable}`}
    >
      <body className="bg-paper">
        <section className="relative isolate overflow-hidden bg-brand-950">
          <img
            src="/images/ship-docked.jpg"
            alt=""
            aria-hidden="true"
            className="photo absolute inset-0 h-full w-full object-cover opacity-25"
          />
          <Container className="relative py-32 sm:py-44">
            <div className="max-w-xl">
              <p className="display text-[4.5rem] text-crimson-400 sm:text-[5.5rem]">
                404
              </p>
              <h1 className="display mt-4 text-[2.2rem] text-white sm:text-[2.8rem]">
                {d.notFound.title}
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-[1.7] text-white/75">
                {d.notFound.text}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button href="/" variant="light">
                  {d.notFound.home} <ArrowRight />
                </Button>
                <Button href="/contact" variant="quiet">
                  {d.notFound.contact}
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </body>
    </html>
  );
}
