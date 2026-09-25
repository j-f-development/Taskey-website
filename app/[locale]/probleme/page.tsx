import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { problems } from "@/lib/seo/problems";
import { isIndexableProblem } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const path = "/probleme";

const COPY: PageCopy = {
  de: {
    title: "Probleme in der Gebäudereinigung · Ursachen und Lösungen | Taskey",
    description:
      "Wenn Objekte vergessen, Zeiten geschönt, Reklamationen offen oder Rechnungen verspätet sind: hier stehen die Ursachen und die strukturellen Auswege.",
  },
  en: {
    title: "Problems in commercial cleaning · causes and fixes | Taskey",
    description:
      "When sites are forgotten, time is misreported, complaints stay open or invoices go out late: the causes and structural fixes.",
  },
  fr: {
    title: "Problèmes en nettoyage · causes et solutions | Taskey",
    description:
      "Sites oubliés, temps mal déclarés, réclamations ouvertes, factures en retard : causes et solutions structurelles.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string; }> = {
  de: {
    eyebrow: "Probleme",
    h1: "Wenn im Betrieb etwas nicht mehr trägt",
    lead:
      "Vier typische Probleme und ihre strukturellen Auswege. Kein Bashing, kein Motivationstext. Ein System, das dieselben Fehler nicht mehr provoziert.",
  },
  en: {
    eyebrow: "Problems",
    h1: "When something in operations no longer holds",
    lead:
      "Four typical problems and their structural fixes. No bashing, no motivational text. A system that no longer invites the same faults.",
  },
  fr: {
    eyebrow: "Problèmes",
    h1: "Quand l’exploitation ne tient plus",
    lead:
      "Quatre problèmes typiques et leurs solutions structurelles. Pas de reproche, pas de motivation. Un système qui n’invite plus les mêmes défauts.",
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

export default async function ProblemeIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];
  const visible = problems.filter((p) => isIndexableProblem(p.indexable));

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: c.eyebrow, url: absoluteUrl(locale, path) },
  ];

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-probleme-index" crumbs={crumbs} />

      <section className="mx-auto max-w-4xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24">
        <ul className="space-y-6">
          {visible.map((p) => {
            const cp = p.copy[locale];
            return (
              <li key={p.slug}>
                <Link href={lhref(locale, `${path}/${p.slug}`)} className="block rounded-2xl border border-slate-200 p-6 hover:border-slate-400">
                  <p className="text-xs uppercase tracking-widest text-slate-500">{cp.eyebrow}</p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-900">{cp.h1}</h2>
                  <p className="mt-3 text-slate-700">{cp.keyFinding}</p>
                  <p className="mt-4 text-sm font-medium text-slate-900">
                    {locale === "de" ? "Ursachen und Ausweg" : locale === "en" ? "Causes and fix" : "Causes et solution"} →
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
