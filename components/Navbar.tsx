"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui";
import { contact, nav, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
          <p>{site.tagline}</p>
          <div className="flex items-center gap-7">
            <span>{site.hours}</span>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="text-white/85 transition-colors hover:text-white"
            >
              {site.phone}
            </a>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-paper/95 backdrop-blur-sm">
        <Container>
          <div className="flex h-[4.75rem] items-center justify-between gap-6">
            <Logo />

            <nav
              className="hidden items-center gap-9 lg:flex"
              aria-label="Main"
            >
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative py-1 text-[0.92rem] font-medium transition-colors ${
                      active
                        ? "text-ink-900"
                        : "text-ink-500 hover:text-ink-900"
                    }`}
                  >
                    {item.label}
                    {active ? (
                      <span className="absolute -bottom-0.5 left-0 h-[2px] w-full bg-crimson-600" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact#quote"
              className="hidden bg-brand-700 px-6 py-3 text-[0.88rem] font-semibold text-white transition-colors hover:bg-brand-800 lg:inline-flex"
            >
              Request a Quote
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 grid h-11 w-11 place-items-center text-ink-900 lg:hidden"
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
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`border-b border-ink-900/8 py-3.5 text-[1.05rem] font-medium ${
                      active ? "text-crimson-600" : "text-ink-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/contact#quote"
              className="mt-5 flex items-center justify-center bg-brand-700 px-6 py-3.5 text-[0.92rem] font-semibold text-white"
            >
              Request a Quote
            </Link>
            <div className="mt-5 pb-2 text-[0.85rem] text-ink-500">
              <a className="block py-1" href={contact.telHref}>
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
