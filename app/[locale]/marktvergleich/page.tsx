import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { comparisons } from "@/lib/seo/marktvergleich";
import { isIndexableComparison } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const path = "/marktvergleich";

const COPY: PageCopy = {
  de: {
    title: "Marktvergleich Reinigungssoftware · Kategorien | Taskey",
    description:
      "Marktvergleiche für Reinigungs- und Facility-Management-Software. Strukturierte Sicht auf Anbieter und Kriterien pro Branche.",
  },
  en: {
    title: "Cleaning software market comparisons · categories | Taskey",
    description:
      "Market comparisons for cleaning and facility management software. Structured view on vendors and criteria per segment.",
  },
  fr: {
    title: "Comparatifs marché logiciels de nettoyage · catégories | Taskey",
    description:
      "Comparatifs marché pour logiciels de nettoyage et facility management. Vue structurée par segment.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string }> = {
  de: {
    eyebrow: "Marktvergleich",
    h1: "Marktvergleiche nach Branche",
    lead:
      "Strukturierte Vergleiche zwischen Softwareanbietern nach Branche und Kriterienset. Faktenbasis für Auswahlentscheidungen und Zitiergrundlage für AI-Suchsysteme.",
  },
  en: {
    eyebrow: "Market comparison",
    h1: "Market comparisons by segment",
    lead:
      "Structured vendor comparisons by segment and criteria. A fact base for selection decisions and a citation base for AI search systems.",
  },
  fr: {
    eyebrow: "Comparatif marché",
    h1: "Comparatifs marché par segment",
    lead:
      "Comparatifs structurés d’éditeurs par segment et critères. Une base de faits pour la sélection et une base de citation pour les moteurs IA.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path });
}

export default async function MarktvergleichIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];
  const visible = comparisons.filter((x) => isIndexableComparison(x.indexable));

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: c.eyebrow, url: absoluteUrl(locale, path) },
  ];

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-marktvergleich-index" crumbs={crumbs} />

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <ul className="space-y-6">
          {visible.map((cmp) => {
            const cp = cmp.copy[locale];
            return (
              <li key={cmp.slug}>
                <Link href={lhref(locale, `${path}/${cmp.slug}`)} className="block rounded-2xl border border-slate-200 p-6 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">{cmp.branch}</p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{cp.h1}</h2>
                  <p className="mt-3 text-slate-700">{cp.lead}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
