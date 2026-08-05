import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Recreation of the M/W Global Services Limited mark: green square holding two
 * interlocking diamond outlines, with the GSL bar beneath.
 *
 * If you have the original artwork as SVG or PNG, drop it in `public/` and
 * swap the <svg> below for an <Image> — the surrounding layout will still fit.
 */
export function LogoMark({
  className = "",
  withBar = true,
}: {
  className?: string;
  withBar?: boolean;
}) {
  return (
    <svg
      viewBox={withBar ? "0 0 100 118" : "0 0 100 100"}
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <rect width="100" height="100" fill="var(--color-brand-700)" />
      <rect
        x="6"
        y="6"
        width="88"
        height="88"
        stroke="#fff"
        strokeWidth="3.5"
        fill="none"
      />
      {/* Two interlocking diamonds */}
      <path
        d="M37 24 61 50 37 76 13 50Z"
        stroke="#fff"
        strokeWidth="5"
        fill="none"
        strokeLinejoin="miter"
      />
      <path
        d="M63 24 87 50 63 76 39 50Z"
        stroke="#fff"
        strokeWidth="5"
        fill="none"
        strokeLinejoin="miter"
      />
      {withBar ? (
        <>
          <rect y="102" width="100" height="16" fill="var(--color-ink-950)" />
          <text
            x="50"
            y="114.5"
            textAnchor="middle"
            fill="#fff"
            fontSize="12"
            fontWeight="700"
            letterSpacing="2"
            fontFamily="var(--font-sans)"
          >
            GSL
          </text>
        </>
      ) : null}
    </svg>
  );
}

export function Logo({ variant = "dark" }: { variant?: "light" | "dark" }) {
  const primary = variant === "light" ? "text-white" : "text-ink-900";
  const secondary =
    variant === "light" ? "text-brand-200" : "text-crimson-600";

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label={`${site.name} — home`}
    >
      <LogoMark withBar={false} className="h-[2.6rem] w-[2.6rem] shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`display text-[1.25rem] font-bold tracking-tight ${primary}`}
        >
          M/W Global
        </span>
        <span
          className={`mt-[4px] text-[0.8rem] font-semibold tracking-tight ${secondary}`}
        >
          Services Limited
        </span>
      </span>
    </Link>
  );
}
