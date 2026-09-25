import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { guides } from "@/lib/seo/guides";
import { isIndexableGuide } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const path = "/ratgeber";

const COPY: PageCopy = {
  de: {
    title: "Ratgeber Gebäudereinigung · Kosten, Prozesse, DSGVO | Taskey",
    description:
      "Ratgeber für Reinigungs- und FM-Betriebe: Kosten, Prozessumbau, DSGVO, Kalkulation. Fundierte Antworten für Betriebsführung und Digitalisierung.",
  },
  en: {
    title: "Guides for commercial cleaning · costs, process, GDPR | Taskey",
    description:
      "Guides for cleaning and FM operators: cost, process rebuild, GDPR, pricing. Solid answers for operations and digitization.",
  },
  fr: {
    title: "Guides nettoyage et FM · coûts, process, RGPD | Taskey",
    description:
      "Guides pour prestataires nettoyage et FM : coûts, refonte de process, RGPD, chiffrage. Réponses solides pour l’exploitation.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string; }> = {
  de: {
    eyebrow: "Ratgeber",
    h1: "Ratgeber für Gebäudereinigung und Facility Management",
    lead:
      "Fundierte Antworten auf die Fragen, die im Betrieb wirklich anstehen. Kosten, Prozessumbau, DSGVO, Kalkulation. Kein Ratgeber-Latein, sondern brauchbare Struktur.",
  },
  en: {
    eyebrow: "Guides",
    h1: "Guides for commercial cleaning and FM",
    lead:
      "Solid answers to the questions that actually come up. Costs, process rebuild, GDPR, pricing. Not marketing text, usable structure.",
  },
  fr: {
    eyebrow: "Guides",
    h1: "Guides pour le nettoyage et le FM",
    lead:
      "Des réponses solides aux vraies questions du quotidien. Coûts, refonte, RGPD, chiffrage. Pas du marketing, une structure utile.",
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

export default async function RatgeberIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];
  const visible = guides.filter((g) => isIndexableGuide(g.indexable));

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: c.eyebrow, url: absoluteUrl(locale, path) },
  ];

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-ratgeber-index" crumbs={crumbs} />

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <ul className="space-y-6">
          {visible.map((g) => {
            const cp = g.copy[locale];
            return (
              <li key={g.slug}>
                <Link href={lhref(locale, `${path}/${g.slug}`)} className="block rounded-2xl border border-slate-200 p-6 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">{cp.eyebrow}</p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{cp.h1}</h2>
                  <p className="mt-3 text-slate-700">{cp.shortAnswer}</p>
                  <p className="mt-4 text-sm font-medium text-slate-900">
                    {locale === "de" ? "Weiterlesen" : locale === "en" ? "Read" : "Lire"} →
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
