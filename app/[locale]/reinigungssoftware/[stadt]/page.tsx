import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  buildMetadata,
  pickLocale,
  type Locale,
} from "@/lib/i18n-metadata";
import {
  BreadcrumbJsonLd,
  ServiceJsonLd,
  FaqJsonLd,
} from "@/components/StructuredData";
import { regions, getRegionBySlug } from "@/lib/seo/regions";
import { isIndexableCity } from "@/lib/seo/helpers";
import { lhref, absoluteUrl } from "@/lib/seo/href";

const SUPPORTED: Locale[] = ["de", "en", "fr"];

export function generateStaticParams() {
  return regions.flatMap((r) =>
    SUPPORTED.map((locale) => ({ locale, stadt: r.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; stadt: string }>;
}): Promise<Metadata> {
  const { locale, stadt } = await params;
  const r = getRegionBySlug(stadt);
  if (!r) return {};
  const loc = pickLocale(locale);
  const indexable = isIndexableCity(r.tier, r.indexable);
  const isTop = r.tier === "top";
  const path = `/reinigungssoftware/${r.slug}`;

  const titleDe = isTop
    ? `Reinigungssoftware ${r.city} · NFC, Live-Margen, DSGVO | Taskey`
    : `Reinigungssoftware für ${r.city} | Taskey`;
  const titleEn = isTop
    ? `Cleaning software ${r.city} · NFC, live margin, GDPR | Taskey`
    : `Cleaning software for ${r.city} | Taskey`;
  const titleFr = isTop
    ? `Logiciel de nettoyage ${r.city} · NFC, marge en direct, RGPD | Taskey`
    : `Logiciel de nettoyage pour ${r.city} | Taskey`;

  const descDe = isTop
    ? `Taskey ist die Software für Reinigungs- und FM-Betriebe in ${r.city}. NFC-Objektnachweis, Live-Margen und Auftraggeber-Portal. DSGVO konform, Hosting in Deutschland.`
    : `Taskey unterstützt Reinigungsbetriebe in ${r.city}. Einsatzplanung, NFC-Zeiterfassung und Leistungsnachweis in einer App.`;
  const descEn = isTop
    ? `Taskey is the software for cleaning and FM operators in ${r.city}. NFC proof, live margin, client portal. GDPR compliant, hosted in Germany.`
    : `Taskey supports cleaning operators in ${r.city}. Planning, NFC time tracking and proof of service in one app.`;
  const descFr = isTop
    ? `Taskey est le logiciel pour prestataires de nettoyage et FM à ${r.city}. Preuve NFC, marge en direct, portail client. RGPD, hébergement en Allemagne.`
    : `Taskey accompagne les prestataires à ${r.city}. Planification, pointage NFC et preuve dans une application.`;

  return buildMetadata({
    copyByLocale: {
      de: { title: titleDe, description: descDe },
      en: { title: titleEn, description: descEn },
      fr: { title: titleFr, description: descFr },
    },
    locale: loc,
    path,
    indexable,
  });
}

export default async function ReinigungssoftwareCityPage({
  params,
}: {
  params: Promise<{ locale: string; stadt: string }>;
}) {
  const { locale: rawLocale, stadt } = await params;
  const locale = pickLocale(rawLocale);
  const r = getRegionBySlug(stadt);
  if (!r) return notFound();
  const c = r.copy[locale];
  const isTop = r.tier === "top";
  const path = `/reinigungssoftware/${r.slug}`;

  const crumbs = [
    { name: "Home", url: absoluteUrl(locale, "/") },
    {
      name: locale === "de" ? "Reinigungssoftware" : locale === "en" ? "Cleaning software" : "Logiciel de nettoyage",
      url: absoluteUrl(locale, "/reinigungssoftware"),
    },
    { name: r.city, url: absoluteUrl(locale, path) },
  ];

  const h1 =
    locale === "de"
      ? `Reinigungssoftware ${r.city}`
      : locale === "en"
      ? `Cleaning software in ${r.city}`
      : `Logiciel de nettoyage à ${r.city}`;

  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl(locale, path)}#localbusiness`,
    name: `Taskey · ${r.city}`,
    description: c.intro,
    url: absoluteUrl(locale, path),
    provider: { "@id": "https://www.taskeyapp.com#organization" },
    areaServed: {
      "@type": "City",
      name: r.city,
      containedInPlace: { "@type": "AdministrativeArea", name: r.region },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: r.lat,
      longitude: r.lng,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: r.city,
      addressRegion: r.region,
      addressCountry: r.country,
    },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "[data-speakable]"] },
  };

  const faqs = isTop
    ? [
        {
          q: locale === "de" ? `Ist Taskey für Betriebe in ${r.city} geeignet?` : locale === "en" ? `Is Taskey a fit for operators in ${r.city}?` : `Taskey convient-il aux prestataires à ${r.city} ?`,
          a: locale === "de"
            ? `Ja. Taskey wird deutschlandweit, in Österreich und in der Schweiz eingesetzt und passt zur Objektstruktur von Reinigungs- und FM-Betrieben in ${r.city}.`
            : locale === "en"
            ? `Yes. Taskey is used across Germany, Austria and Switzerland and fits the site structure of cleaning and FM operators in ${r.city}.`
            : `Oui. Taskey est utilisé en Allemagne, en Autriche et en Suisse et s’adapte à la structure de sites à ${r.city}.`,
        },
        {
          q: locale === "de" ? "Wo werden Daten gespeichert?" : locale === "en" ? "Where is data stored?" : "Où les données sont-elles stockées ?",
          a: locale === "de"
            ? "Ausschließlich auf Servern in Deutschland. Konform mit DSGVO."
            : locale === "en"
            ? "Only on servers in Germany. GDPR compliant."
            : "Uniquement sur des serveurs en Allemagne. Conforme RGPD.",
        },
      ]
    : [];

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id={`ld-breadcrumb-city-${r.slug}`} crumbs={crumbs} />
      <ServiceJsonLd
        id={`ld-service-city-${r.slug}`}
        name={h1}
        description={c.intro}
        serviceType="Software as a Service für Gebäudereinigung und Facility Management"
        url={absoluteUrl(locale, path)}
        areaServed={[r.country]}
      />
      {isTop && (
        <script
          type="application/ld+json"
          id={`ld-localbusiness-${r.slug}`}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessLd) }}
        />
      )}
      {faqs.length > 0 && <FaqJsonLd id={`ld-faq-city-${r.slug}`} items={faqs} />}

      <section className="mx-auto max-w-4xl px-6 pt-20 pb-12">
        <nav className="text-sm text-slate-500">
          <Link href={lhref(locale, "/")} className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href={lhref(locale, "/reinigungssoftware")} className="hover:text-slate-900">
            {locale === "de" ? "Reinigungssoftware" : locale === "en" ? "Cleaning software" : "Logiciel de nettoyage"}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{r.city}</span>
        </nav>
        <p className="mt-8 text-sm uppercase tracking-widest text-slate-500">
          {r.region} · {r.country}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{h1}</h1>
        <p className="mt-6 text-lg text-slate-700" data-speakable>{c.intro}</p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-8 space-y-6">
        {c.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-700">{p}</p>
        ))}
      </section>

      {isTop && (c.economy || c.topIndustries || c.localFact) && (
        <section className="mx-auto max-w-4xl px-6 py-12">
          <div className="grid gap-6 sm:grid-cols-2">
            {c.economy && (
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold">
                  {locale === "de" ? "Wirtschaftlicher Kontext" : locale === "en" ? "Economic context" : "Contexte économique"}
                </h2>
                <p className="mt-3 text-slate-700">{c.economy}</p>
              </div>
            )}
            {c.topIndustries && (
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-lg font-semibold">
                  {locale === "de" ? "Zielbranchen vor Ort" : locale === "en" ? "Local target segments" : "Segments cibles locaux"}
                </h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {c.topIndustries.map((t) => <li key={t}>· {t}</li>)}
                </ul>
              </div>
            )}
            {c.localFact && (
              <div className="rounded-2xl border border-slate-200 p-6 sm:col-span-2">
                <h2 className="text-lg font-semibold">
                  {locale === "de" ? "Regionale Besonderheit" : locale === "en" ? "Regional specificity" : "Spécificité régionale"}
                </h2>
                <p className="mt-3 text-slate-700">{c.localFact}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {r.nearbyCities.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            {locale === "de" ? "Städte in der Nähe" : locale === "en" ? "Nearby cities" : "Villes proches"}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {r.nearbyCities.map((slug) => {
              const nb = regions.find((x) => x.slug === slug);
              if (!nb) return null;
              return (
                <li key={slug}>
                  <Link
                    href={lhref(locale, `/reinigungssoftware/${slug}`)}
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900"
                  >
                    {nb.city}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {isTop && (
        <section className="mx-auto max-w-4xl px-6 pb-24">
          <div className="rounded-3xl bg-slate-900 p-10 text-white sm:p-14">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {locale === "de" ? `Taskey testen in ${r.city}` : locale === "en" ? `Try Taskey in ${r.city}` : `Essayer Taskey à ${r.city}`}
            </h2>
            <p className="mt-4 max-w-2xl text-slate-200">
              {locale === "de"
                ? "14 Tage kostenlos, ohne Kreditkarte. Alle Funktionen im Beginner-Umfang."
                : locale === "en"
                ? "14 days free, no credit card. Full Beginner scope."
                : "14 jours gratuits, sans carte. Périmètre Beginner complet."}
            </p>
            <a
              href="https://signup.taskeyapp.com"
              className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
            >
              {locale === "de" ? "Kostenlos testen" : locale === "en" ? "Start free trial" : "Essai gratuit"}
            </a>
          </div>
        </section>
      )}
    </main>
  );
}
