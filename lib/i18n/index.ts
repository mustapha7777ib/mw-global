import type { Locale } from "./config";
import { ar } from "./ar";
import { en, type Dictionary } from "./en";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

/**
 * Page copy for a locale.
 *
 * Both dictionaries are plain objects rather than dynamic imports: together
 * they are a few kilobytes, and keeping the lookup synchronous means layouts,
 * pages and `generateMetadata` can all read copy without an await.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
export * from "./config";
export * from "./text";
