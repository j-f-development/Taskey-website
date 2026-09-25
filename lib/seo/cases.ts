/**
 * Case-Silo für /kunden/[slug].
 *
 * WICHTIG: Cases werden nur mit ausdrücklicher Freigabe durch Referenzkunden
 * veröffentlicht. Wir erfinden keine Namen, keine Zahlen, keine Zitate.
 * Solange keine echten Cases freigegeben sind, bleibt das Array leer.
 * Die Types sind vollständig, sodass die spätere Freigabe nur eine
 * Datenspende ist und keine Code-Änderung.
 */

import type { Locale } from "@/lib/i18n-metadata";
import type { SeoRelated } from "./helpers";

export type CaseCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  situationH2: string;
  situationBody: string;
  problemH2: string;
  problemBody: string;
  strategyH2: string;
  strategyBody: string;
  implementationH2: string;
  implementation: { title: string; body: string }[];
  outcomeH2: string;
  outcome: { title: string; body: string }[];
  learningsH2: string;
  learnings: string[];
  quote?: { text: string; author: string; role?: string };
};

export type Case = {
  slug: string;
  clientName: string;
  clientIndustry: string;
  services: string[];
  publishedAt: string;
  updatedAt: string;
  indexable?: boolean;
  relatedBranch?: string;
  serviceLinks?: SeoRelated[];
  copy: Record<Locale, CaseCopy>;
};

// Leeres Array bis freigegebene Kunden-Cases vorliegen.
// Sobald ein Kunde die Veröffentlichung schriftlich bestätigt hat, wird
// hier ein Objekt gemäß Type ergänzt.
export const cases: Case[] = [];

export function getCaseBySlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByBranch(branchSlug: string): Case[] {
  return cases.filter((c) => c.relatedBranch === branchSlug);
}
