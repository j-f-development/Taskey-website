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
    <>
      <BreadcrumbJsonLd id="ld-breadcrumb-ratgeber-index" crumbs={crumbs} />

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
            {visible.map((g) => {
              const cp = g.copy[locale];
              return (
                <Link
                  key={g.slug}
                  href={lhref(locale, `${path}/${g.slug}`)}
                  className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                  style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
                >
                  <div className="apl-tile-inner items-start text-left">
                    <p className="apl-eyebrow">{cp.eyebrow}</p>
                    <h2 className="apl-display apl-display-md mt-1" style={{ maxWidth: "24ch" }}>
                      {cp.h1}
                    </h2>
                    <p className="apl-body mt-2 max-w-[48ch]">{cp.shortAnswer}</p>
                    <span className="apl-link mt-3">
                      {locale === "de" ? "Weiterlesen" : locale === "en" ? "Read" : "Lire"}
                    </span>
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
