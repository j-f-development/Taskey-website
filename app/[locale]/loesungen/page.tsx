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
import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareStatementBand,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

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
    h1: "Für Ihre Branche gebaut, nicht angepasst",
    lead:
      "Reinigungs- und Facility-Management-Betriebe arbeiten in sehr unterschiedlichen Objektwelten. Taskey liefert für jede Branche eine eigene Prozess-Sicht statt einer generischen Vorlage. Wählen Sie Ihre Branche und sehen Sie, wie der Alltag mit Taskey aussieht.",
    sectionH2: "Branchen in Taskey",
    ctaH2: "Ihre Branche fehlt",
    ctaBody: "Wir schauen mit Ihnen, wie Taskey Ihre Objekte abbildet. Kein Vertrieb, ein Gespräch.",
    ctaPrimary: "Beratung anfragen",
  },
  en: {
    eyebrow: "Segments",
    h1: "Built for your segment, not adapted to it",
    lead:
      "Cleaning and FM operators run very different site worlds. Taskey delivers a segment-specific process view instead of a generic template. Pick your segment and see how the day-to-day looks with Taskey.",
    sectionH2: "Segments in Taskey",
    ctaH2: "Your segment is missing",
    ctaBody: "We look at your sites together. Not a sales call, a conversation.",
    ctaPrimary: "Ask for a call",
  },
  fr: {
    eyebrow: "Segments",
    h1: "Conçu pour votre segment, non adapté",
    lead:
      "Les prestataires opèrent dans des mondes de sites très différents. Taskey livre une vue processus par segment plutôt qu'un modèle générique. Choisissez votre segment et voyez le quotidien avec Taskey.",
    sectionH2: "Segments dans Taskey",
    ctaH2: "Votre segment manque",
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

      <section className="ts-scope relative overflow-hidden pt-8 md:pt-16 pb-12 md:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(85% 60% at 85% 0%, rgba(47, 91, 148, 0.08) 0%, transparent 55%), linear-gradient(180deg, #F7F9FC 0%, #ECF0F5 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[50vh] -z-10 opacity-30 ts-dot-grid pointer-events-none"
        />
        <div className="ts-container">
          <div className="flex flex-col gap-5 max-w-3xl">
            <ShareEyebrow>{c.eyebrow}</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="20ch">
              {c.h1}
            </ShareHeadline>
            <ShareLede maxWidth="58ch">{c.lead}</ShareLede>
          </div>
        </div>
      </section>

      <ShareSection tone="tinted" size="md" container="wide">
        <div className="mb-10">
          <ShareHeadline level={2} size="lg" maxWidth="22ch">
            {c.sectionH2}
          </ShareHeadline>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleBranches.map((b) => {
            const copy = b.copy[locale];
            return (
              <Link
                key={b.slug}
                href={lhref(locale, `${path}/${b.slug}`)}
                className="ts-card ts-card-hover p-6 flex flex-col gap-3 h-full group"
                style={{ textDecoration: "none" }}
              >
                <ShareEyebrow>{copy.eyebrow}</ShareEyebrow>
                <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)", maxWidth: "22ch" }}>
                  {copy.h1}
                  <BrandDot />
                </h3>
                <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)", maxWidth: "42ch" }}>
                  {copy.lead.split(". ").slice(0, 2).join(". ") + "."}
                </p>
                <span className="mt-auto pt-2 text-[0.85rem] font-medium inline-flex items-center gap-1" style={{ color: "var(--brand-signal-blue)" }}>
                  {locale === "de" ? "Zur Branche" : locale === "en" ? "Open segment" : "Voir le segment"}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </ShareSection>

      <ShareStatementBand
        title={c.ctaH2}
        body={c.ctaBody}
        primaryHref={lhref(locale, "/erstgespraech")}
        primaryLabel={c.ctaPrimary}
        secondaryHref={lhref(locale, "/erstgespraech")}
        secondaryLabel={locale === "de" ? "Erstgespräch buchen" : locale === "en" ? "Book intro call" : "Premier échange"}
      />
    </>
  );
}
