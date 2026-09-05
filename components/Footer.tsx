import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Container } from "@/components/ui";
import { contact, nav, site } from "@/lib/site";
import { services } from "@/lib/content";
import {
  getDictionary,
  localeHref,
  translator,
  type Locale,
} from "@/lib/i18n";

const year = new Date().getFullYear();

export function Footer({ locale }: { locale: Locale }) {
  const tr = translator(locale);
  const d = getDictionary(locale);
  const href = (path: string) => localeHref(locale, path);

  return (
    <footer className="bg-ink-950 text-white/60">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-[2.34rem]" />
              <span className="flex flex-col leading-none">
                <span className="display text-[1.15rem] font-bold text-white">
                  M/W Global
                </span>
                <span className="mt-[3px] text-[0.78rem] font-semibold text-crimson-400">
                  Services Limited
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-[0.92rem] leading-[1.7]">
              {tr(site.description)}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label text-white">{d.footer.company}</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {nav.map((path) => (
                <li key={path}>
                  <Link
                    href={href(path)}
                    className="transition-colors hover:text-white"
                  >
                    {d.nav[path]}
                  </Link>
                </li>
              ))}
              {/* Not in `nav` — it's a section of /about, not a page of its
                  own, but buyers look for it by name so it earns a link. */}
              <li>
                <Link
                  href={href("/about#certifications")}
                  className="transition-colors hover:text-white"
                >
                  {d.footer.certifications}
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label text-white">{d.footer.services}</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={href(`/services#${s.slug}`)}
                    className="transition-colors hover:text-white"
                  >
                    {tr(s.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label text-white">{d.footer.contact}</h3>
            <ul className="mt-5 space-y-5 text-[0.92rem]">
              <li>
                {site.office.lines[locale].map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </li>
              <li>
                {contact.email ? (
                  <a
                    href={`mailto:${contact.email}`}
                    className="block transition-colors hover:text-white"
                  >
                    {contact.email}
                  </a>
                ) : null}
                {/* Phone numbers stay left-to-right on the Arabic page too:
                    without `dir="ltr"` the leading + is reordered to the wrong
                    end of the number. */}
                <a
                  href={contact.telHref}
                  dir="ltr"
                  className="block transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-light mt-14 flex flex-col gap-4 pt-7 text-[0.82rem] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. {d.footer.rcPrefix} {site.rc}.{" "}
            {d.footer.rights}
          </p>
          {contact.email ? (
            <a href={`mailto:${contact.email}`} className="hover:text-white">
              {contact.email}
            </a>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
