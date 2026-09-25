/**
 * SEO helpers: tier gating + indexability logic per silo.
 *
 * Regel: Wer noindex ist, wandert nicht in die Sitemap und nicht in
 * "Related"-Cross-Links, bleibt aber crawlbar (follow: true), damit Google
 * die Ankertexte auf der Seite selbst weiter versteht.
 */

import type { Locale } from "@/lib/i18n-metadata";

export type Tier = "top" | "extended";

export type SeoRelated = {
  href: string;
  label: string;
  description?: string;
};

export type LocalizedString = Record<Locale, string>;
export type LocalizedList<T> = Record<Locale, T[]>;

/**
 * ICP-Gate für Branchen. Slugs, die Taskey nicht aktiv bespielt, bleiben
 * inhaltlich erreichbar, aber noindex. Damit fangen wir Long-Tail-Anfragen ab,
 * ohne für sie zu ranken.
 */
export const OFF_ICP_BRANCH_SLUGS = new Set<string>([
  "solo-freelancer",
  "reinigungshilfe-privat",
  "haushaltshilfe",
]);

export function isIndexableBranch(slug: string, indexable?: boolean): boolean {
  if (indexable === false) return false;
  return !OFF_ICP_BRANCH_SLUGS.has(slug);
}

export function isIndexableCity(tier: Tier, indexable?: boolean): boolean {
  if (indexable === false) return false;
  return tier === "top";
}

export function isIndexableGuide(indexable?: boolean): boolean {
  return indexable !== false;
}

export function isIndexableProblem(indexable?: boolean): boolean {
  return indexable !== false;
}

export function isIndexableCase(indexable?: boolean): boolean {
  return indexable !== false;
}

export function isIndexableComparison(indexable?: boolean): boolean {
  return indexable !== false;
}
