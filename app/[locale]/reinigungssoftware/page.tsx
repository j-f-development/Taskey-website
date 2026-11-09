import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd } from "@/components/StructuredData";
import { regions } from "@/lib/seo/regions";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const path = "/reinigungssoftware";

const COPY: PageCopy = {
  de: {
    title: "Reinigungssoftware · Software für Gebäudereinigung nach Stadt | Taskey",
    description:
      "Reinigungssoftware für Gebäudereiniger und Reinigungsfirmen im DACH-Raum. Software für Gebäudereinigung mit NFC Zeiterfassung, Einsatzplanung, Rechnungsprogramm und Kundenportal, regional zugeschnitten für Städte in Deutschland, Österreich und der Schweiz.",
  },
  en: {
    title: "Cleaning software · cleaning company software by city (DACH) | Taskey",
    description:
      "Cleaning company software for commercial cleaning and janitorial operators across the DACH region. Cleaning management software with NFC time tracking, scheduling, invoicing and client portal, mapped to key cities in Germany, Austria and Switzerland.",
  },
  fr: {
    title: "Logiciel entreprise de nettoyage · logiciel de propreté par ville (DACH) | Taskey",
    description:
      "Logiciel pour société de nettoyage et de propreté dans la région DACH. Pointage NFC, planning, facturation et portail client pour les principales villes d'Allemagne, d'Autriche et de Suisse.",
  },
};

const COPY_PAGE: Record<Locale, { eyebrow: string; h1: string; lead: string; topH2: string; extendedH2: string; }> = {
  de: {
    eyebrow: "Reinigungssoftware nach Region",
    h1: "Reinigungssoftware für den DACH-Raum",
    lead:
      "Taskey wird deutschlandweit, in Österreich und in der Schweiz eingesetzt. Wählen Sie Ihre Stadt für die regionale Sicht auf Objektmarkt, Auftraggeber und passende Prozesse.",
    topH2: "Städte im Fokus",
    extendedH2: "Weitere Städte",
  },
  en: {
    eyebrow: "Cleaning software by city",
    h1: "Cleaning software across the DACH region",
    lead:
      "Taskey is used across Germany, Austria and Switzerland. Pick your city for a regional view on the site market, clients and matching processes.",
    topH2: "Focus cities",
    extendedH2: "Further cities",
  },
  fr: {
    eyebrow: "Logiciel de nettoyage par ville",
    h1: "Logiciel de nettoyage pour la région DACH",
    lead:
      "Taskey est utilisé en Allemagne, en Autriche et en Suisse. Choisissez votre ville pour une vue régionale du marché, des clients et des processus.",
    topH2: "Villes en focus",
    extendedH2: "Autres villes",
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

export default async function ReinigungssoftwareIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = pickLocale(rawLocale);
  const c = COPY_PAGE[locale];
  const topCities = regions.filter((r) => r.tier === "top");
  const extendedCities = regions.filter((r) => r.tier === "extended");

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    { name: c.eyebrow, url: absoluteUrl(locale, path) },
  ];

  return (
    <>
      <BreadcrumbJsonLd id="ld-breadcrumb-reinigungssoftware" crumbs={crumbs} />

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
          <h2 className="apl-display apl-display-md text-center mx-auto mb-8" style={{ maxWidth: "22ch" }}>
            {c.topH2}
          </h2>
          <div className="apl-triple">
            {topCities.map((r) => (
              <Link
                key={r.slug}
                href={lhref(locale, `${path}/${r.slug}`)}
                className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
              >
                <div className="apl-tile-inner items-start text-left">
                  <p className="apl-eyebrow">{r.country}</p>
                  <h3 className="apl-display apl-display-md mt-1">{r.city}</h3>
                  <p className="apl-small mt-1 text-[color:var(--apl-ink-muted)]">{r.region}</p>
                  <span className="apl-link mt-3">Stadtsicht öffnen</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="apl-surface-canvas apl-section-sm">
        <div className="apl-container-wide">
          <h2 className="apl-display apl-display-md text-center mx-auto mb-6" style={{ maxWidth: "22ch" }}>
            {c.extendedH2}
          </h2>
          <ul className="flex flex-wrap gap-2.5 justify-center">
            {extendedCities.map((r) => (
              <li key={r.slug}>
                <Link
                  href={lhref(locale, `${path}/${r.slug}`)}
                  className="inline-flex items-center rounded-full bg-[color:var(--apl-canvas-soft)] px-4 h-9 apl-small text-[color:var(--apl-ink-soft)] hover:bg-[color:var(--apl-canvas-mid)] hover:text-[color:var(--apl-ink)] transition"
                >
                  {r.city}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
