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
    title: "Reinigungssoftware · Städte im DACH-Raum | Taskey",
    description:
      "Reinigungssoftware für Betriebe im DACH-Raum. Standortlisten für die wichtigsten Städte in Deutschland, Österreich und der Schweiz. NFC, Live-Margen, DSGVO konform.",
  },
  en: {
    title: "Cleaning software · cities in the DACH region | Taskey",
    description:
      "Cleaning software for operators across the DACH region. Location lists for the main cities in Germany, Austria and Switzerland. NFC, live margin, GDPR compliant.",
  },
  fr: {
    title: "Logiciel de nettoyage · villes DACH | Taskey",
    description:
      "Logiciel de nettoyage pour prestataires DACH. Villes principales en Allemagne, Autriche et Suisse. NFC, marge en direct, conforme RGPD.",
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
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-reinigungssoftware" crumbs={crumbs} />

      <section className="mx-auto max-w-5xl px-6 pt-24 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">{c.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-700" data-speakable>{c.lead}</p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <h2 className="text-2xl font-semibold tracking-tight">{c.topH2}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topCities.map((r) => (
            <Link
              key={r.slug}
              href={lhref(locale, `${path}/${r.slug}`)}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-400"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500">{r.country}</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{r.city}</p>
              <p className="mt-1 text-sm text-slate-600">{r.region}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="text-2xl font-semibold tracking-tight">{c.extendedH2}</h2>
        <ul className="mt-8 flex flex-wrap gap-3 text-sm">
          {extendedCities.map((r) => (
            <li key={r.slug}>
              <Link
                href={lhref(locale, `${path}/${r.slug}`)}
                className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 hover:border-slate-400 hover:text-slate-900"
              >
                {r.city}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
