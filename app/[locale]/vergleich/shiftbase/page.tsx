import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/shiftbase";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs Shiftbase · Dienstplan für die Reinigung im Vergleich | Taskey",
    description:
      "Taskey oder Shiftbase für Ihre Reinigungsfirma? Fairer Vergleich zu branchenfremder Dienstplan-Software gegen Reinigungs-Spezialist mit NFC und Kalkulation.",
    ogTitle: "Taskey vs Shiftbase · Dienstplan Reinigung",
    ogDescription: "Fairer Vergleich: generischer Dienstplan vs Branchen-All-in-One.",
    twitterTitle: "Taskey vs Shiftbase",
    twitterDescription: "Vergleich der Reinigungs- und Dienstplan-Software.",
  },
  en: {
    title: "Taskey vs Shiftbase · Scheduling for cleaning compared | Taskey",
    description: "Taskey or Shiftbase? Fair comparison of generic scheduling vs cleaning specialist.",
  },
  fr: {
    title: "Taskey vs Shiftbase · Planning nettoyage | Taskey",
    description: "Taskey ou Shiftbase? Planning générique vs spécialiste nettoyage.",
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
  h1: "Taskey vs Shiftbase · Dienstplan für die Reinigung im Vergleich",
  h1Accent: "Branchenfremder Dienstplan gegen Branchensoftware für Reinigung.",
  lead:
    "Shiftbase ist eine generische Dienstplan- und Zeiterfassungs-Software für viele Branchen. Taskey ist Branchensoftware für Gebäudereinigung und Facility Management mit NFC-Objektnachweis, Kalkulation, Live-Margen pro Objekt, Rechnungen, DATEV-Export und Auftraggeber-Portal ohne Login.",
  disclaimer:
    "Alle Angaben zu Shiftbase beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung mit NFC-Objektnachweis, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland. Tarife ab 59 € pro Monat.",
  overviewRightTitle: "Shiftbase",
  overviewRightBody:
    "Shiftbase ist eine branchenübergreifende Dienstplan- und Zeiterfassungs-Software für Gastronomie, Einzelhandel, Pflege und Dienstleistung. Der Reinigungsbezug ist nicht Kernpositionierung.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "Branchenfokus Reinigung", taskey: "Zu 100 Prozent", competitor: "Branchenübergreifend" },
    { feature: "NFC-Objektnachweis", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "Nicht branchentypisch" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Nicht enthalten" },
    { feature: "Kalkulation und Angebot", taskey: "Integriert in Angebot", competitor: "Nicht Kernmodul" },
    { feature: "Rechnungen", taskey: "Integriert", competitor: "Über Drittsystem" },
    { feature: "Dienstplan Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Starker Fokus" },
    { feature: "DATEV-Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Lohn über Drittsystem" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Nicht branchentypisch" },
  ],

  whenTheirsH2: "Wann Shiftbase besser passt",
  whenTheirs: [
    "Sie führen einen Betrieb außerhalb der Reinigung, zum Beispiel Gastronomie oder Pflege, und nutzen Dienstplan branchenübergreifend.",
    "Ihre Reinigung ist ein Nebenbereich und Sie brauchen keine Kalkulation, keinen NFC-Nachweis und keine Live-Margen pro Objekt.",
    "Ihre Rechnungen laufen ausschließlich in einem separaten ERP.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie führen einen Reinigungsbetrieb und wollen ein Produkt, das Branchenlogik serienmäßig mitbringt.",
    "Sie wollen Kalkulation, NFC-Nachweis, Rechnung und Marge in einer App statt in vier Systemen.",
    "Sie wollen Zahlen pro Objekt in Echtzeit, nicht nur pro Mitarbeiter.",
    "Sie wollen dem Auftraggeber einen Live-Link schicken, ohne dass dieser einen Account anlegt.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Kann ich mit einem branchenfremden Dienstplan eine Reinigung sauber steuern?",
      a: "Grundsätzlich ja. Was fehlt, sind Objekt-Logik, Leistungsnachweise, Kalkulation pro Objekt und branchentypische Reports. Diese Lücke füllen Sie dann mit Excel oder weiteren Tools, was den Nutzen eines Dienstplans wieder relativiert.",
    },
    {
      q: "Hat Taskey eine ähnlich starke Dienstplan-Oberfläche?",
      a: "Ja. Taskey liefert ein Wochen-Board mit Drag and Drop, Konflikthinweisen, Urlaubs- und Krankheitslogik sowie Benachrichtigungen an die Mitarbeitenden.",
    },
    {
      q: "Kann ich von Shiftbase zu Taskey migrieren?",
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
  pricingLabel: "Abonnements ansehen",

  relatedH2: "Weiter im Vergleich",
  related: [
    { href: "/vergleich/cleanmanager", label: "Taskey vs CleanManager", desc: "Reinigungs-Dienstplan vs All-in-One." },
    { href: "/vergleich/crewly", label: "Taskey vs Crewly", desc: "GPS-Stempeluhr vs NFC-Nachweis." },
    { href: "/marktvergleich/einsatzplanung-software", label: "Einsatzplanung im Markt", desc: "Überblick der Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/shiftbase" },
    { name: "Taskey vs Shiftbase", href: "/vergleich/shiftbase" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-shiftbase" />;
}
