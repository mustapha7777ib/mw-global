import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[78rem] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Small uppercase marker with a crimson rule. The recurring section stamp. */
export function Label({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`label flex items-center gap-3 ${
        tone === "light" ? "text-white/70" : "text-ink-500"
      }`}
    >
      <span className="h-[2px] w-6 bg-crimson-600" />
      {children}
    </p>
  );
}

export function SectionHeading({
  label,
  title,
  intro,
  tone = "dark",
  className = "",
}: {
  label?: string;
  title: ReactNode;
  intro?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {label ? <Label tone={tone}>{label}</Label> : null}
      <h2
        className={`display mt-5 text-[2rem] sm:text-[2.6rem] ${
          tone === "light" ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-[1.0625rem] leading-[1.7] ${
            tone === "light" ? "text-white/75" : "text-ink-600"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light" | "quiet";
  className?: string;
  /** File name to save as. Forces a plain `<a>` so the browser downloads the
   * file instead of Next's router trying to client-side-navigate to it. */
  download?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
  download,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[0.9rem] font-semibold transition-colors duration-200";

  const variants = {
    solid: "bg-brand-700 text-white hover:bg-brand-800",
    outline:
      "border border-ink-900/25 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white",
    light: "bg-white text-ink-900 hover:bg-paper-dark",
    quiet: "border border-white/30 text-white hover:bg-white hover:text-ink-900",
  } as const;

  const isExternal =
    download !== undefined ||
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:");

  if (isExternal) {
    return (
      <a
        href={href}
        download={download}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-[1.05em] w-[1.05em] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M3.5 10h13m0 0L11 4.5M16.5 10 11 15.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Expand/collapse marker for a <details> disclosure — rotates to a cross when open. */
export function Plus({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Download({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-[1.05em] w-[1.05em] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M10 3v10m0 0-4-4m4 4 4-4M4 16.5h12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
    </svg>
  );
}

export function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={`h-5 w-5 ${className}`}
      aria-hidden="true"
    >
      <path
        d="m4 10.5 4 4 8-9"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="square"
      />
    </svg>
  );
}

/**
 * Page masthead: full-bleed photograph, dark green wash, serif headline.
 */
export function PageHeader({
  label,
  title,
  intro,
  image,
  position = "center",
}: {
  label: string;
  title: string;
  intro: string;
  image: string;
  position?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="photo absolute inset-0 h-full w-full object-cover opacity-35"
        style={{ objectPosition: position }}
      />
      <div
        className="absolute inset-0 bg-linear-to-r from-brand-950 via-brand-950/85 to-brand-950/35"
        aria-hidden="true"
      />
      <Container className="relative pb-20 pt-24 sm:pb-28 sm:pt-32">
        <div className="max-w-3xl">
          <Label tone="light">{label}</Label>
          <h1 className="display mt-6 text-[2.6rem] text-white sm:text-[3.6rem]">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-[1.7] text-white/75">
            {intro}
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Closing call-to-action band, dark green. */
export function CtaBand({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-brand-900">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="display text-[2rem] text-white sm:text-[2.6rem]">
              {title}
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-[1.7] text-white/75">
              {intro}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
