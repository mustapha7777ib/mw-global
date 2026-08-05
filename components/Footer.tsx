import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Container } from "@/components/ui";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/content";

const year = new Date().getFullYear();

export function Footer() {
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
              {site.description}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="label text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="label text-white">Contact</h3>
            <ul className="mt-5 space-y-5 text-[0.92rem]">
              <li>
                {site.office.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </li>
              <li>
                <a
                  href={`mailto:${site.email.replace(/[[\]]/g, "")}`}
                  className="block transition-colors hover:text-white"
                >
                  {site.email}
                </a>
                <a
                  href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
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
            © {year} {site.name}. All rights reserved.
          </p>
          <a
            href={`mailto:${site.email.replace(/[[\]]/g, "")}`}
            className="hover:text-white"
          >
            {site.email}
          </a>
        </div>
      </Container>
    </footer>
  );
}
