import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { branches } from "@/lib/seo/branches";
import { isIndexableBranch } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const path = "/loesungen";

const COPY: PageCopy = {
  de: {
    title: "Branchenlösungen · Software für Reinigung und Facility Management | Taskey",
    description:
      "Branchenlösungen von Taskey: Software für Unterhaltsreinigung, Glasreinigung, Industriereinigung, Klinikreinigung, Hotel-Housekeeping, Bauendreinigung und Facility Management. DSGVO konform, Made in Germany.",
  },
  en: {
    title: "Segment solutions · software for cleaning and FM | Taskey",
    description:
      "Taskey segment solutions: software for recurring cleaning, window cleaning, industrial, clinical, hotel housekeeping, post-construction and facility management. GDPR compliant, made in Germany.",
  },
  fr: {
    title: "Solutions sectorielles · logiciel nettoyage et FM | Taskey",
    description:
      "Solutions sectorielles Taskey : logiciel pour nettoyage récurrent, vitres, industriel, clinique, housekeeping hôtelier, fin de chantier et facility management. Conforme RGPD.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string; sectionH2: string; ctaH2: string; ctaBody: string; ctaPrimary: string; }> = {
  de: {
    eyebrow: "Branchen",
    h1: "Für Ihre Branche gebaut, nicht daran angepasst",
    lead:
      "Reinigungs- und Facility-Management-Betriebe arbeiten in sehr unterschiedlichen Objektwelten. Taskey liefert für jede Branche eine eigene Prozess-Sicht statt einer generischen Vorlage. Wählen Sie Ihre Branche und sehen Sie, wie der Alltag mit Taskey aussieht.",
    sectionH2: "Branchen in Taskey",
    ctaH2: "Ihre Branche fehlt?",
    ctaBody: "Wir schauen mit Ihnen, wie Taskey Ihre Objekte abbildet. Kein Vertrieb, ein Gespräch.",
    ctaPrimary: "Beratung anfragen",
  },
  en: {
    eyebrow: "Segments",
    h1: "Built for your segment, not adapted to it",
    lead:
      "Cleaning and FM operators run very different site worlds. Taskey delivers a segment-specific process view instead of a generic template. Pick your segment and see how the day-to-day looks with Taskey.",
    sectionH2: "Segments in Taskey",
    ctaH2: "Your segment is missing?",
    ctaBody: "We look at your sites together. Not a sales call, a conversation.",
    ctaPrimary: "Ask for a call",
  },
  fr: {
    eyebrow: "Segments",
    h1: "Conçu pour votre segment, non adapté à celui-ci",
    lead:
      "Les prestataires opèrent dans des mondes de sites très différents. Taskey livre une vue processus par segment plutôt qu’un modèle générique. Choisissez votre segment et voyez le quotidien avec Taskey.",
    sectionH2: "Segments dans Taskey",
    ctaH2: "Votre segment manque ?",
    ctaBody: "Nous regardons vos sites ensemble. Pas un pitch, un échange.",
    ctaPrimary: "Demander un échange",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path, type: "website" });
}

export default async function LoesungenIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];
  const visibleBranches = branches.filter((b) => isIndexableBranch(b.slug, b.indexable));

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: c.eyebrow, url: absoluteUrl(locale, path) },
  ];

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-loesungen-index" crumbs={crumbs} />

      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">{c.sectionH2}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {visibleBranches.map((b) => {
            const copy = b.copy[locale];
            return (
              <Link
                key={b.slug}
                href={lhref(locale, `${path}/${b.slug}`)}
                className="group rounded-2xl border border-slate-200 p-6 transition hover:border-slate-400"
              >
                <p className="text-xs uppercase tracking-widest text-slate-500">{copy.eyebrow}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{copy.h1}</h3>
                <p className="mt-3 text-sm text-slate-600">{copy.lead.split(". ").slice(0, 2).join(". ") + "."}</p>
                <p className="mt-4 text-sm font-medium text-slate-900 group-hover:text-slate-600">
                  {locale === "de" ? "Zur Branche" : locale === "en" ? "Open segment" : "Voir le segment"} →
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-32">
        <div className="rounded-3xl bg-slate-900 p-10 text-white sm:p-14">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{c.ctaH2}</h2>
          <p className="mt-4 max-w-2xl text-slate-200">{c.ctaBody}</p>
          <Link
            href={lhref(locale, "/enterprise")}
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
          >
            {c.ctaPrimary}
          </Link>
        </div>
      </section>
    </main>
  );
}
