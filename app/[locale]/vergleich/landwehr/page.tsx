import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/landwehr";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs Landwehr · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder Landwehr für Ihre Reinigungssoftware? Fairer Vergleich zu Branchenstandard, DATEV-Tiefe, Einsatzplanung, NFC-Nachweis und Live-Margen.",
    ogTitle: "Taskey vs Landwehr · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: Branchenstandard vs modernes All-in-One.",
    twitterTitle: "Taskey vs Landwehr",
    twitterDescription: "Vergleich der Reinigungssoftware.",
  },
  en: {
    title: "Taskey vs Landwehr · Cleaning software comparison | Taskey",
    description: "Taskey or Landwehr? Fair comparison of industry standard vs modern all-in-one.",
  },
  fr: {
    title: "Taskey vs Landwehr · Comparatif nettoyage | Taskey",
    description: "Taskey ou Landwehr? Standard du secteur vs all-in-one moderne.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path,
    type: "website",
    deOnly: true,
  });
}

const CONTENT: ComparisonContent = {
  eyebrow: "Vergleich",
  h1: "Taskey vs Landwehr · Reinigungssoftware im Vergleich",
  h1Accent: "Etabliertes Flaggschiff für größere Betriebe gegen moderne, schnelle Umsetzung.",
  lead:
    "Landwehr gilt als Branchenstandard im deutschen Mittelstand mit tiefer DATEV-Anbindung und modularem Aufbau für größere Reinigungsbetriebe. Taskey ist der jüngere Anbieter mit NFC-Objektnachweis, Live-Margen pro Objekt, Auftraggeber-Portal ohne Login und schneller Einführung in 48 Stunden.",
  disclaimer:
    "Alle Angaben zu Landwehr beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung und Facility Management mit NFC-Objektnachweis, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland. Tarife ab 59 € pro Monat.",
  overviewRightTitle: "Landwehr",
  overviewRightBody:
    "Landwehr ist ein etablierter Software-Anbieter aus Deutschland mit Branchenlösung für Gebäudereinigung. Bekannt für tiefe DATEV-Integration und modularen Aufbau. Schwerpunkt sind mittelständische und größere Reinigungsbetriebe.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Objektnachweis", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "Nachweis über Module" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Controlling-Modul" },
    { feature: "Einsatzplanung Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Dispositions-Modul" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenportal mit Login" },
    { feature: "DATEV-Tiefe", taskey: "LODAS und Lohn und Gehalt", competitor: "Branchenstandard, sehr tief" },
    { feature: "Implementierungsdauer", taskey: "48 Stunden Done-for-you", competitor: "Projekt mit Beratungsanteil" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Projekt- und Modulbasiert" },
    { feature: "Zielgruppe", taskey: "Solo bis 500 Mitarbeiter", competitor: "Mittelstand und Enterprise" },
  ],

  whenTheirsH2: "Wann Landwehr besser passt",
  whenTheirs: [
    "Sie führen einen Betrieb mit mehreren hundert Mitarbeitern und komplexen Tarifstrukturen im Lohn.",
    "Sie brauchen ein modulares System, das Sie über Jahre tief in Ihre Prozesse integrieren.",
    "Ein langes Einführungsprojekt mit Beratung ist für Sie kein Hindernis.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie wollen in 48 Stunden live sein, nicht nach einem mehrmonatigen Einführungsprojekt.",
    "Sie wollen Zahlen pro Objekt in Echtzeit statt im Controlling-Modul.",
    "Sie wollen dem Auftraggeber einen Live-Link schicken, ohne dass dieser einen Account anlegt.",
    "Sie suchen eine moderne App, die Ihre Mitarbeitenden auf dem Handy sofort bedienen.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Ist Taskey für größere Reinigungsbetriebe geeignet?",
      a: "Ja. Taskey wird in Betrieben mit mehreren hundert Mitarbeitern und mehreren Niederlassungen eingesetzt. Für sehr komplexe Konstrukte in Konzerngröße bietet Taskey Enterprise-Pakete mit individueller Betreuung.",
    },
    {
      q: "Ist die DATEV-Anbindung bei Taskey ausreichend tief?",
      a: "Ja. Taskey exportiert nach DATEV LODAS und DATEV Lohn und Gehalt inklusive Mindestlohnprüfung und Zuschlagslogik.",
    },
    {
      q: "Kann ich von Landwehr zu Taskey migrieren?",
      a: "Ja. Objekt-, Mitarbeiter- und Vertragsdaten werden im Done-for-you Setup übernommen. Für größere Migrationen gibt es ein begleitetes Projektmodell.",
    },
    {
      q: "Wie schnell kann ich starten?",
      a: "Registrierung sofort, Live-Betrieb mit dem Done-for-you Setup in 48 Stunden.",
    },
  ],

  ctaH2: "Testen Sie Taskey mit einem echten Objekt",
  ctaBody:
    "Ein Objekt anlegen, ein NFC-Tag kleben, eine Rechnung erzeugen. Sie sehen in einer Sitzung, ob es passt.",
  ctaPrimary: "Kostenlosen Account erstellen",
  ctaSecondary: "Alle Funktionen",
  pricingLabel: "Abonnements ansehen",

  relatedH2: "Weiter im Vergleich",
  related: [
    { href: "/vergleich/mendato", label: "Taskey vs Mendato", desc: "Berliner Branchensoftware vs Live-Margen." },
    { href: "/vergleich/fortytools", label: "Taskey vs fortytools", desc: "Hamburger Allrounder vs Reinigungs-Spezialist." },
    { href: "/marktvergleich/gebaeudereinigung-software", label: "Gebäudereinigung-Software im Markt", desc: "Überblick der Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/landwehr" },
    { name: "Taskey vs Landwehr", href: "/vergleich/landwehr" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-landwehr" />;
}
