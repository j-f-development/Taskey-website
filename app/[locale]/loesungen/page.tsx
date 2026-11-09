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
    <>
      <BreadcrumbJsonLd id="ld-breadcrumb-loesungen-index" crumbs={crumbs} />

      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">{c.eyebrow}</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "20ch" }}>
            {c.h1}
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "58ch" }} data-speakable>
            {c.lead}
          </p>
        </div>
      </section>

      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <div className="text-center mb-10">
            <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
              {c.sectionH2}
            </h2>
          </div>
          <div className="apl-triple">
            {visibleBranches.map((b) => {
              const copy = b.copy[locale];
              return (
                <Link
                  key={b.slug}
                  href={lhref(locale, `${path}/${b.slug}`)}
                  className="apl-tile apl-tile-canvas group transition hover:-translate-y-[2px]"
                  style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
                >
                  <div className="apl-tile-inner items-start text-left">
                    <p className="apl-eyebrow">{copy.eyebrow}</p>
                    <h3 className="apl-display apl-display-md mt-1" style={{ maxWidth: "22ch" }}>
                      {copy.h1}
                    </h3>
                    <p className="apl-body mt-2 max-w-[42ch]">
                      {copy.lead.split(". ").slice(0, 2).join(". ") + "."}
                    </p>
                    <span className="apl-link mt-4">
                      {locale === "de" ? "Zur Branche" : locale === "en" ? "Open segment" : "Voir le segment"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="apl-surface-noir apl-on-noir apl-section">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "22ch" }}>
            {c.ctaH2}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "50ch", color: "#d2d2d7" }}>
            {c.ctaBody}
          </p>
          <div className="mt-7 flex justify-center">
            <Link href={lhref(locale, "/enterprise")} className="apl-btn apl-btn-primary apl-btn-lg">
              {c.ctaPrimary}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
