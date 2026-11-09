import AboutClient from "./about-client-apple";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { pickLocale, canonical } from "@/lib/i18n-metadata";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Taskey",
  "legalName": "Schulz & Stosse GbR",
  "url": "https://www.taskeyapp.com",
  "logo": "https://www.taskeyapp.com/logobittt.png",
  "foundingDate": "2024", // Gründungsjahr
  "description":
    "Taskey ist eine Reinigungssoftware Made in Germany. Entwickelt für Gebäudereiniger im DACH-Raum: NFC-Zeiterfassung, Einsatzplanung, Live-Margen und DATEV-Export.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "In der Acht 44",
    "addressLocality": "Völklingen",
    "postalCode": "66333",
    "addressCountry": "DE",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+49-151-68488999",
    "email": "info@taskeyapp.com",
    "contactType": "customer service",
    "availableLanguage": ["German"],
  },
  "founder": [
    { "@type": "Person", "name": "Fynn-Luca Schulz", "jobTitle": "CEO" },
    { "@type": "Person", "name": "Julian Stosse", "jobTitle": "CTO" },
  ],
  "areaServed": ["DE", "AT", "CH"],
  "sameAs": [
    "https://www.linkedin.com/company/taskey",
    "https://twitter.com/taskey",
  ],
};

const founderFynn = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Fynn-Luca Schulz",
  "jobTitle": "CEO & Mitgründer",
  "worksFor": { "@type": "Organization", "name": "Taskey", "url": "https://www.taskeyapp.com" },
  "knowsAbout": ["Gebäudereinigungssoftware", "NFC-Zeiterfassung", "Digitalisierung Reinigungsbranche", "Einsatzplanung"],
  "url": "https://www.taskeyapp.com/about",
  "email": "info@taskeyapp.com",
  "nationality": "DE",
};

const founderJulian = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Julian Stosse",
  "jobTitle": "CTO & Mitgründer",
  "worksFor": { "@type": "Organization", "name": "Taskey", "url": "https://www.taskeyapp.com" },
  "knowsAbout": ["Softwarearchitektur", "iOS- & Android-Entwicklung", "DSGVO-konforme Cloud-Infrastruktur", "Reinigungssoftware"],
  "url": "https://www.taskeyapp.com/about",
  "nationality": "DE",
};

const CRUMB_LABELS: Record<"de" | "en" | "fr", { home: string; about: string }> = {
  de: { home: "Home", about: "Über uns" },
  en: { home: "Home", about: "About" },
  fr: { home: "Accueil", about: "À propos" },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const crumbs = CRUMB_LABELS[loc];

  return (
    <>
      <BreadcrumbSchema crumbs={[
        { name: crumbs.home, url: canonical("/", loc) },
        { name: crumbs.about, url: canonical("/about", loc) },
      ]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderFynn) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJulian) }} />
      <AboutClient />
    </>
  );
}
