"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { contact, nav, site } from "@/lib/site";
import {
  localeHref,
  locales,
  localeName,
  splitLocale,
  translator,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

/**
 * A Client Component, so the locale and its copy arrive as props rather than
 * through `next/root-params` — root parameters are server-only. Only the two
 * dictionary slices this needs are passed, so the whole dictionary does not
 * cross into the browser bundle.
 */
export function Navbar({
  locale,
  nav: navLabels,
  common,
}: {
  locale: Locale;
  nav: Dictionary["nav"];
  common: Dictionary["common"];
}) {
  const tr = translator(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const href = (path: string) => localeHref(locale, path);

  // The same page in the other language. `splitLocale` tolerates both the
  // rewritten `/en/about` the server sees and the `/about` the browser shows,
  // so the toggle points at the right page from either.
  const { path: barePath } = splitLocale(pathname);
  const other = locales.find((l) => l !== locale) ?? locale;

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility strip */}
      <div className="hidden bg-ink-950 py-2.5 text-[0.78rem] text-white/60 lg:block">
        <Container className="flex items-center justify-between">
          <p>{tr(site.tagline)}</p>
          <div className="flex items-center gap-7">
            <span>{tr(site.hours)}</span>
            <a
              href={contact.telHref}
              dir="ltr"
              className="text-white/85 transition-colors hover:text-white"
            >
              {site.phone}
            </a>
            {/* `lang` and `hrefLang` tell a screen reader and a crawler that
                this link's text and target are in the other language. */}
            <Link
              href={localeHref(other, barePath)}
              lang={other}
              hrefLang={other}
              aria-label={common.switchLanguage}
              className="font-semibold text-white/85 transition-colors hover:text-white"
            >
              {localeName[other]}
            </Link>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-paper/95 backdrop-blur-sm">
        <Container>
          <div className="flex h-[4.75rem] items-center justify-between gap-6">
            <Logo locale={locale} homeAriaSuffix={common.homeAriaSuffix} />

            <nav
              className="hidden items-center gap-9 lg:flex"
              aria-label={common.mainNavLabel}
            >
              {nav.map((path) => {
                const active =
                  path === "/" ? barePath === "/" : barePath.startsWith(path);
                return (
                  <Link
                    key={path}
                    href={href(path)}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-1 text-[0.92rem] font-medium transition-colors ${
                      active
                        ? "text-ink-900"
                        : "text-ink-500 hover:text-ink-900"
                    }`}
                  >
                    {navLabels[path]}
                    {active ? (
                      <span className="absolute -bottom-0.5 start-0 h-[2px] w-full bg-crimson-600" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <Link
              href={href("/contact#quote")}
              className="hidden bg-brand-700 px-6 py-3 text-[0.88rem] font-semibold text-white transition-colors hover:bg-brand-800 lg:inline-flex"
            >
              {common.requestQuote}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? common.closeMenu : common.openMenu}
              className="-me-2 grid h-11 w-11 place-items-center text-ink-900 lg:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                ) : (
                  <path
                    d="M3 7h18M3 12h18M3 17h18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                )}
              </svg>
            </button>
          </div>
        </Container>

        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-ink-900/10 bg-paper transition-[max-height] duration-300 lg:hidden ${
            open ? "max-h-[34rem]" : "max-h-0"
          }`}
        >
          <Container className="py-4">
            <nav className="flex flex-col" aria-label={common.mobileNavLabel}>
              {nav.map((path) => {
                const active =
                  path === "/" ? barePath === "/" : barePath.startsWith(path);
                return (
                  <Link
                    key={path}
                    href={href(path)}
                    aria-current={active ? "page" : undefined}
                    className={`border-b border-ink-900/8 py-3.5 text-[1.05rem] font-medium ${
                      active ? "text-crimson-600" : "text-ink-800"
                    }`}
                  >
                    {navLabels[path]}
                  </Link>
                );
              })}
            </nav>
            <Link
              href={href("/contact#quote")}
              className="mt-5 flex items-center justify-center bg-brand-700 px-6 py-3.5 text-[0.92rem] font-semibold text-white"
            >
              {common.requestQuote}
            </Link>
            <div className="mt-5 pb-2 text-[0.85rem] text-ink-500">
              <Link
                href={localeHref(other, barePath)}
                lang={other}
                hrefLang={other}
                aria-label={common.switchLanguage}
                className="block py-1 font-semibold text-ink-800"
              >
                {localeName[other]}
              </Link>
              <a className="block py-1" href={contact.telHref} dir="ltr">
                {site.phone}
              </a>
              {contact.email ? (
                <a className="block py-1" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              ) : null}
            </div>
          </Container>
        </div>
      </header>
    </>
  );
}
