import React from "react";

// Shared JSON-LD building blocks for GEO / AI-search visibility.
// Rendered server-side so answer-engine crawlers (which don't run JS) see them.
// Legal entity per Impressum: "Schulz & Stosse GbR" trading as "Taskey".

type FaqItem = { q: string; a: string };
type Crumb = { name: string; url: string };

const SITE_URL = "https://www.taskeyapp.com";
const LOGO_URL = "https://www.taskeyapp.com/logo_transparent.png";

function jsonLdScript(id: string, data: unknown) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      id={id}
    />
  );
}

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: "Taskey",
    alternateName: ["Taskey App", "Taskey Software", "Schulz & Stosse GbR"],
    legalName: "Schulz & Stosse GbR",
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    description:
      "Taskey ist eine All-in-One-Software für Gebäudereinigungsbetriebe im DACH-Raum mit NFC-Objektnachweis, Zeiterfassung, Einsatzplanung, Kalkulation, Angeboten, Rechnungen und DATEV-Export.",
    slogan: "Betriebssoftware für Gebäudereinigung und Facility Management.",
    email: "info@taskeyapp.com",
    telephone: "+49-151-68488999",
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Völklingen, Saarland, Deutschland",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "In der Acht 44",
      postalCode: "66333",
      addressLocality: "Völklingen",
      addressRegion: "SL",
      addressCountry: "DE",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+49-151-68488999",
        email: "info@taskeyapp.com",
        contactType: "customer service",
        areaServed: ["DE", "AT", "CH"],
        availableLanguage: ["German", "English", "French"],
      },
      {
        "@type": "ContactPoint",
        email: "info@taskeyapp.com",
        contactType: "sales",
        areaServed: ["DE", "AT", "CH"],
        availableLanguage: ["German", "English"],
      },
    ],
    founder: [
      {
        "@type": "Person",
        name: "Fynn-Luca Schulz",
        jobTitle: "Co-Founder & CEO",
        email: "info@taskeyapp.com",
        worksFor: { "@id": `${SITE_URL}#organization` },
      },
      {
        "@type": "Person",
        name: "Julian Stosse",
        jobTitle: "Co-Founder & CTO",
        worksFor: { "@id": `${SITE_URL}#organization` },
      },
    ],
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
    ],
    knowsLanguage: ["de", "en", "fr", "tr", "ru", "pl"],
    knowsAbout: [
      "Gebäudereinigung",
      "Facility Management",
      "NFC-Zeiterfassung",
      "Leistungsnachweis Gebäudereinigung",
      "Einsatzplanung Reinigung",
      "DATEV-Export",
      "Mindestlohn-Dokumentation §17 MiLoG",
      "Live-Margen pro Objekt",
      "Auftraggeber-Portal",
      "ÖPNV-Reinigung",
      "Klinik- und Hygienereinigung",
      "Hotel-Housekeeping",
      "Glasreinigung",
      "Industriereinigung",
    ],
    naics: "561720",
    sameAs: [
      "https://www.linkedin.com/company/taskey",
      "https://twitter.com/taskey",
      "https://apps.apple.com/de/app/taskey/id6748812720",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Taskey Beginner",
        url: `${SITE_URL}/pricing`,
        price: "69",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "69",
          priceCurrency: "EUR",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Taskey Professional",
        url: `${SITE_URL}/pricing`,
        price: "179",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "179",
          priceCurrency: "EUR",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Taskey Business",
        url: `${SITE_URL}/pricing`,
        price: "249",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "249",
          priceCurrency: "EUR",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Taskey Enterprise",
        url: `${SITE_URL}/enterprise`,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Individuelles Angebot",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Taskey Tarife",
      url: `${SITE_URL}/pricing`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Taskey Beginner" },
          price: "69",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Taskey Professional" },
          price: "179",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Taskey Business" },
          price: "249",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Taskey Enterprise" },
          priceCurrency: "EUR",
        },
      ],
    },
    subjectOf: [
      { "@type": "CreativeWork", url: `${SITE_URL}/llms.txt`, name: "AI briefing (short)" },
      { "@type": "CreativeWork", url: `${SITE_URL}/llms-full.txt`, name: "AI briefing (full reference)" },
    ],
  };
  return jsonLdScript("ld-organization", data);
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: "Taskey",
    alternateName: ["Taskey App", "Taskey Software"],
    url: SITE_URL,
    inLanguage: ["de-DE", "en-US", "fr-FR"],
    publisher: { "@id": `${SITE_URL}#organization` },
    about: { "@id": `${SITE_URL}#software` },
  };
  return jsonLdScript("ld-website", data);
}

export function SoftwareApplicationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}#software`,
    name: "Taskey",
    alternateName: ["Taskey App", "Taskey Software"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Cleaning Management Software",
    operatingSystem: "iOS, Android, Web",
    url: SITE_URL,
    downloadUrl: "https://apps.apple.com/de/app/taskey/id6748812720",
    installUrl: "https://signup.taskeyapp.com",
    releaseNotes: `${SITE_URL}/news`,
    softwareHelp: `${SITE_URL}/support`,
    inLanguage: ["de-DE", "en-US", "fr-FR", "tr", "ru", "pl"],
    availableOnDevice: ["iPhone", "iPad", "Android", "Web Browser"],
    countriesSupported: ["DE", "AT", "CH"],
    description:
      "All-in-One-Branchensoftware für Gebäudereinigung und Facility Management im DACH-Raum mit NFC-Objektnachweis, Mindestlohn-konformer Zeiterfassung, Einsatzplanung, Kalkulation, Angeboten, Rechnungen, DATEV-Export und Live-Margen pro Objekt.",
    featureList: [
      "NFC-basierter Leistungsnachweis pro Objekt",
      "Automatische Zeiterfassung, Mindestlohn-konform (§17 MiLoG)",
      "Drag-and-drop Einsatzplanung für Kolonnen und Touren",
      "Live-Margen pro Objekt in Echtzeit",
      "DATEV-Export für die Lohnabrechnung",
      "Offline-fähige Mitarbeiter-App für Kellerräume und Tiefgaragen",
      "Mehrsprachige Mitarbeiter-App (Deutsch, Türkisch, Russisch, Polnisch)",
      "Auftraggeber-Portal (Taskey Share) mit Leserechten",
      "Hosting in Deutschland, DSGVO-konform",
      "Kalkulation, Angebote und Rechnungen",
      "Ticket- und Mängelfunktion zwischen Objekt und Büro",
    ],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "59",
      highPrice: "249",
      priceCurrency: "EUR",
      offerCount: "4",
      url: `${SITE_URL}/pricing`,
    },
    publisher: { "@id": `${SITE_URL}#organization` },
    provider: { "@id": `${SITE_URL}#organization` },
    author: { "@id": `${SITE_URL}#organization` },
    sameAs: [
      "https://apps.apple.com/de/app/taskey/id6748812720",
      "https://www.linkedin.com/company/taskey",
    ],
    isRelatedTo: [
      { "@type": "Thing", name: "NFC-Zeiterfassung" },
      { "@type": "Thing", name: "Einsatzplanung Reinigung" },
      { "@type": "Thing", name: "Leistungsnachweis Gebäudereinigung" },
      { "@type": "Thing", name: "DATEV-Export" },
      { "@type": "Thing", name: "Auftraggeber-Portal" },
    ],
  };
  return jsonLdScript("ld-software", data);
}

export function ProfessionalServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}#service`,
    name: "Taskey",
    url: SITE_URL,
    image: LOGO_URL,
    priceRange: "€€",
    telephone: "+49-151-68488999",
    email: "info@taskeyapp.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "In der Acht 44",
      postalCode: "66333",
      addressLocality: "Völklingen",
      addressRegion: "SL",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
    ],
    provider: { "@id": `${SITE_URL}#organization` },
    serviceType: "SaaS für Gebäudereinigung und Facility Management",
    description:
      "Softwareanbieter für Gebäudereinigungs- und Facility-Management-Betriebe im DACH-Raum. Betrieb, Hosting und Support in Deutschland.",
  };
  return jsonLdScript("ld-professional-service", data);
}

export function GlobalStructuredData() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <SoftwareApplicationJsonLd />
      <ProfessionalServiceJsonLd />
    </>
  );
}

export function FaqJsonLd({
  items,
  id,
  speakable = true,
}: {
  items: FaqItem[];
  id?: string;
  speakable?: boolean;
}) {
  if (!items.length) return null;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: ["de-DE", "en-US", "fr-FR"],
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  if (speakable) {
    data.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".faq-question", ".faq-answer"],
    };
  }
  return jsonLdScript(id ?? "ld-faq", data);
}

export function ServiceJsonLd({
  name,
  description,
  serviceType,
  areaServed,
  audienceType,
  url,
  id,
}: {
  name: string;
  description: string;
  serviceType?: string;
  areaServed?: string[];
  audienceType?: string;
  url?: string;
  id?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType ?? "Software as a Service",
    ...(url ? { url } : {}),
    provider: {
      "@type": "Organization",
      name: "Taskey",
      url: SITE_URL,
    },
    areaServed: areaServed ?? ["DE", "AT", "CH"],
    ...(audienceType
      ? {
          audience: {
            "@type": "Audience",
            audienceType,
          },
        }
      : {}),
  };
  return jsonLdScript(id ?? "ld-service", data);
}

export function HowToJsonLd({
  name,
  description,
  steps,
  inLanguage,
  url,
  id,
}: {
  name: string;
  description?: string;
  steps: { title: string; body: string }[];
  inLanguage?: string;
  url?: string;
  id?: string;
}) {
  if (!steps.length) return null;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
    ...(description ? { description } : {}),
    ...(inLanguage ? { inLanguage } : {}),
    ...(url ? { url } : {}),
    ...(url
      ? {
          isPartOf: { "@id": `${SITE_URL}#website` },
          about: { "@id": `${SITE_URL}#software` },
          publisher: { "@id": `${SITE_URL}#organization` },
        }
      : {}),
  };
  return jsonLdScript(id ?? "ld-howto", data);
}

export function BreadcrumbJsonLd({ crumbs, id }: { crumbs: Crumb[]; id?: string }) {
  if (!crumbs.length) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
  return jsonLdScript(id ?? "ld-breadcrumb", data);
}
