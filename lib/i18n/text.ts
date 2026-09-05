import type { Locale } from "./config";

/**
 * A string that exists in every language the site publishes.
 *
 * Keyed off `locales`, so adding a language turns every partially-translated
 * value into a compile error rather than letting an English sentence appear on
 * a Turkish page.
 */
export type Text = { readonly [L in Locale]: string };

/**
 * A value written once when it is identical in every language.
 *
 * Trade specifications are the reason this exists: "≥ 99%", "25 kg / 50 kg
 * bags" and "7,000–8,000 kcal/kg" read the same in every market, and a number
 * stated four times is a number that can drift. Write a plain string for
 * those, and a full `Text` only where the value is actually prose.
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
