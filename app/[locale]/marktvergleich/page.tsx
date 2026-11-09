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
    <>
      <BreadcrumbJsonLd id="ld-breadcrumb-marktvergleich-index" crumbs={crumbs} />

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
          <div className="apl-duo">
            {visible.map((cmp) => {
              const cp = cmp.copy[locale];
              return (
                <Link
                  key={cmp.slug}
                  href={lhref(locale, `${path}/${cmp.slug}`)}
                  className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                  style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
                >
                  <div className="apl-tile-inner items-start text-left">
                    <p className="apl-eyebrow">{cmp.branch}</p>
                    <h3 className="apl-display apl-display-md mt-1" style={{ maxWidth: "24ch" }}>
                      {cp.h1}
                    </h3>
                    <p className="apl-body mt-2 max-w-[48ch]">{cp.lead}</p>
                    <span className="apl-link mt-4">Vergleich öffnen</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
