"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { contact, nav, site } from "@/lib/site";
import {
  htmlLang,
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
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const href = (path: string) => localeHref(locale, path);

  // This same page in each other language. `splitLocale` tolerates both the
  // rewritten `/en/about` the server sees and the `/about` the browser shows,
  // so the links point at the right page from either.
  const { path: barePath } = splitLocale(pathname);
  const others = locales.filter((l) => l !== locale);

  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  // A menu that only closes on its own links strands the keyboard and anyone
  // who clicks elsewhere expecting it to dismiss.
  useEffect(() => {
    if (!langOpen) return;
    function onPointerDown(event: PointerEvent) {
      if (!langRef.current?.contains(event.target as Node)) setLangOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setLangOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [langOpen]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Utility strip */}
      {/* `relative z-60` puts the strip above the sticky header's z-50. The
          header is later in the DOM, so without this the language menu opens
          *underneath* it and is clipped. */}
      <div className="relative z-60 hidden bg-ink-950 py-2.5 text-[0.78rem] text-white/60 lg:block">
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
            {/* Four languages laid out as a row crowded the strip, so they
                collapse behind the current one. The menu is still real links
                with `lang`/`hrefLang`, so a crawler following them reaches
                every translation; only the visual weight is reduced. */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                aria-expanded={langOpen}
                aria-haspopup="true"
                aria-controls="language-menu"
                aria-label={common.language}
                className="flex items-center gap-1.5 font-semibold text-white/85 transition-colors hover:text-white"
              >
                {localeName[locale]}
                <svg
                  viewBox="0 0 12 12"
                  className={`h-2.5 w-2.5 transition-transform ${langOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path
                    d="M2 4.5 6 8.5 10 4.5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    fill="none"
                  />
                </svg>
              </button>
              <ul
                id="language-menu"
                hidden={!langOpen}
                className="absolute end-0 top-full mt-2 min-w-32 border border-white/15 bg-ink-950 py-1 shadow-lg"
              >
                {others.map((l) => (
                  <li key={l}>
                    <Link
                      href={localeHref(l, barePath)}
                      lang={htmlLang[l]}
                      hrefLang={htmlLang[l]}
                      className="block px-4 py-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {localeName[l]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
              <nav
                aria-label={common.language}
                className="flex flex-wrap gap-x-5 gap-y-1 pb-2"
              >
                {others.map((l) => (
                  <Link
                    key={l}
                    href={localeHref(l, barePath)}
                    lang={htmlLang[l]}
                    hrefLang={htmlLang[l]}
                    className="py-1 font-semibold text-ink-800"
                  >
                    {localeName[l]}
                  </Link>
                ))}
              </nav>
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
