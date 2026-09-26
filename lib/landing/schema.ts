/**
 * JSON-LD builders for landing pages. Every builder returns a plain object
 * you can drop into <script type="application/ld+json"> — the LandingSchema
 * component below does exactly that. Only mark up content that is actually
 * visible on the page; no schema spam.
 */

const BASE = "https://www.taskeyapp.com";

export type Locale = "de" | "en" | "fr";

function localizedUrl(path: string, locale: Locale): string {
  if (locale === "de") return `${BASE}${path}`;
  return `${BASE}/${locale}${path}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}#organization`,
    name: "Taskey",
    legalName: "Schulz & Stosse GbR",
    url: BASE,
    logo: `${BASE}/logo-512.png`,
    email: "info@taskeyapp.com",
    telephone: "+49-151-68488999",
    address: {
      "@type": "PostalAddress",
      streetAddress: "In der Acht 44",
      postalCode: "66333",
      addressLocality: "Völklingen",
      addressRegion: "Saarland",
      addressCountry: "DE",
    },
    areaServed: "DE",
    sameAs: [
      "https://www.linkedin.com/company/taskeyapp",
    ],
  };
}

export function breadcrumbSchema(
  crumbs: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

export function webPageSchema({
  name,
  description,
  path,
  locale,
  primaryImage,
}: {
  name: string;
  description: string;
  path: string;
  locale: Locale;
  primaryImage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${localizedUrl(path, locale)}#webpage`,
    name,
    description,
    url: localizedUrl(path, locale),
    inLanguage: locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR",
    isPartOf: { "@id": `${BASE}#website` },
    primaryImageOfPage: primaryImage ? { "@type": "ImageObject", url: primaryImage } : undefined,
  };
}

export function serviceSchema({
  name,
  description,
  areaServed = "DE",
  serviceType,
  path,
  locale,
}: {
  name: string;
  description: string;
  areaServed?: string;
  serviceType: string;
  path: string;
  locale: Locale;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    provider: { "@id": `${BASE}#organization` },
    areaServed,
    url: localizedUrl(path, locale),
  };
}

export function softwareApplicationSchema({
  name,
  description,
  applicationCategory = "BusinessApplication",
  operatingSystem = "iOS, Android, Web",
}: {
  name: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
      },
    },
    provider: { "@id": `${BASE}#organization` },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

export function howToSchema({
  name,
  description,
  steps,
}: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}
