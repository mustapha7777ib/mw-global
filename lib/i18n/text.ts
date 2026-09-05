import type { Locale } from "./config";

/** A string that exists in both languages. */
export type Text = { readonly en: string; readonly ar: string };

/**
 * A value that is written once when it is identical in both languages.
 *
 * Trade specifications are the reason this exists: "≥ 99%", "25 kg / 50 kg
 * bags" and "7,000–8,000 kcal/kg" read the same in Arabic, and a number that
 * is stated twice is a number that can drift. Write a plain string for those,
 * and a `{ en, ar }` pair only where the value is actually prose.
 */
export type MaybeText = string | Text;

export function t(value: MaybeText, locale: Locale): string {
  return typeof value === "string" ? value : value[locale];
}

/** Binds a locale once so pages can write `tr(service.title)`. */
export function translator(locale: Locale) {
  return (value: MaybeText) => t(value, locale);
}

export type Translate = ReturnType<typeof translator>;
