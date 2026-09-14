import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/fortytools";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs fortytools · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder fortytools für Ihre Reinigungssoftware? Fairer Vergleich zu Funktionen, Preisen, NFC-Zeiterfassung, Live-Margen und DATEV Export.",
    ogTitle: "Taskey vs fortytools · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: Funktionen, Preise, NFC, Live-Margen, DATEV.",
    twitterTitle: "Taskey vs fortytools",
    twitterDescription: "Vergleich der Reinigungssoftware.",
  },
  en: {
    title: "Taskey vs fortytools · Cleaning software comparison | Taskey",
    description: "Taskey or fortytools? Fair comparison of features, pricing and integrations.",
  },
  fr: {
    title: "Taskey vs fortytools · Comparatif nettoyage | Taskey",
    description: "Taskey ou fortytools? Comparaison fonctionnalités, prix et intégrations.",
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
  h1: "Taskey vs fortytools · Reinigungssoftware im Vergleich",
  h1Accent: "Beide zielen auf Reinigungsfirmen. Wer passt zu welcher Betriebsgröße.",
  lead:
    "fortytools ist seit 2015 eine etablierte Software für kleine und mittlere Handwerks- und Reinigungsbetriebe mit starkem Fokus auf Angebot, Rechnung und Zeiterfassung. Taskey ist der jüngere Anbieter mit Live-Margen pro Objekt, Auftraggeber-Portal ohne Login und tiefer Einsatzplanung. Der Vergleich zeigt, wo jedes Produkt seine Stärke hat.",
  disclaimer:
    "Alle Angaben zu fortytools beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung mit NFC-Zeiterfassung, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV Export und dem Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland.",
  overviewRightTitle: "fortytools",
  overviewRightBody:
    "fortytools ist eine Software für Handwerker und Reinigungsbetriebe aus Hamburg. Kernmodule sind Angebote, Rechnungen, Zeiterfassung und Objektverwaltung. Anwenderschwerpunkt sind Kleinbetriebe und Familienunternehmen.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Zeiterfassung", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "Zeiterfassung per App" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Auswertungen im Reporting" },
    { feature: "Einsatzplanung Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Terminplanung" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenportal" },
    { feature: "DATEV Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Vorhanden" },
    { feature: "Rechnungen und Angebote", taskey: "Kalkulation und Angebot integriert", competitor: "Starker Fokus" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Ab kleinem Monatspreis, siehe Anbieter" },
    { feature: "Zielgruppe", taskey: "Solo bis 500 Mitarbeiter", competitor: "Klein und Mittel" },
  ],

  whenTheirsH2: "Wann fortytools besser passt",
  whenTheirs: [
    "Sie sind ein kleines Familienunternehmen mit klarem Fokus auf Angebote und Rechnungen.",
    "Sie brauchen keine Live-Margen-Analyse pro Objekt und keine tiefe Einsatzplanung.",
    "Sie schätzen den langjährigen Track-Record eines Hamburger Anbieters.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie wollen Zahlen pro Objekt, nicht nur Rechnungen pro Kunde.",
    "Sie planen mit mehreren Kolonnen und wollen Ausfälle in Sekunden umbuchen.",
    "Sie wollen dem Auftraggeber einen Live-Link zeigen, statt ihm Reports zu mailen.",
    "Sie wachsen und wollen keine zweite Software einführen müssen.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Sind Taskey und fortytools für die gleiche Zielgruppe?",
      a: "Es gibt Überlappung im Small-Business-Segment. Ab etwa 20 bis 50 Mitarbeitern spielt Taskey mit Live-Margen und Einsatzplanung seine Stärken aus.",
    },
    {
      q: "Kann ich Angebote und Rechnungen in Taskey wirklich abbilden?",
      a: "Ja. Kalkulation, Angebot und Rechnung sind Kernmodule und mit dem NFC-Leistungsnachweis verknüpft.",
    },
    {
      q: "Kann ich von fortytools zu Taskey migrieren?",
      a: "Ja. Objekt-, Mitarbeiter- und Vertragsdaten werden im Done-for-you Setup übernommen.",
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
  pricingLabel: "Preise ansehen",

  relatedH2: "Weiter im Vergleich",
  related: [
    { href: "/vergleich/blink", label: "Taskey vs Blink", desc: "Enterprise-Ansatz vs modernes All-in-One." },
    { href: "/vergleich/hero-software", label: "Taskey vs Hero Software", desc: "Handwerker-Wurzeln vs Reinigungs-Spezialist." },
    { href: "/features/live-margen", label: "Live-Margen", desc: "Warum das Feature den Unterschied macht." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/fortytools" },
    { name: "Taskey vs fortytools", href: "/vergleich/fortytools" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-fortytools" />;
}
