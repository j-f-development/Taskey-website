import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/cleanmanager";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs CleanManager · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder CleanManager für Ihre Reinigungssoftware? Fairer Vergleich zu Einsatzplanung, Zeiterfassung, NFC-Nachweis, Live-Margen und DATEV.",
    ogTitle: "Taskey vs CleanManager · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: Planung, Zeiterfassung, NFC, Live-Margen.",
    twitterTitle: "Taskey vs CleanManager",
    twitterDescription: "Vergleich der Reinigungssoftware.",
  },
  en: {
    title: "Taskey vs CleanManager · Cleaning software comparison | Taskey",
    description: "Taskey or CleanManager? Fair comparison of planning, time tracking and pricing.",
  },
  fr: {
    title: "Taskey vs CleanManager · Comparatif nettoyage | Taskey",
    description: "Taskey ou CleanManager? Planification, pointage et prix.",
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
  h1: "Taskey vs CleanManager · Reinigungssoftware im Vergleich",
  h1Accent: "Dienstplan und Mobile-App auf beiden Seiten. Der Unterschied liegt in Marge, Kalkulation und Rechnung.",
  lead:
    "CleanManager ist eine Reinigungssoftware mit Schwerpunkt auf Einsatzplanung und mobiler App, verbreitet im DACH-Raum und darüber hinaus. Taskey verfolgt denselben Anspruch, bündelt aber zusätzlich Kalkulation, Rechnungen, Live-Margen pro Objekt und ein Auftraggeber-Portal ohne Login in derselben App.",
  disclaimer:
    "Alle Angaben zu CleanManager beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung mit NFC-Objektnachweis, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland. Tarife ab 59 € pro Monat.",
  overviewRightTitle: "CleanManager",
  overviewRightBody:
    "CleanManager ist eine Reinigungssoftware mit Einsatzplanung, mobiler App für Mitarbeitende, Zeiterfassung und Qualitätskontrolle. Anwenderschwerpunkt sind kleine und mittlere Reinigungsbetriebe.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Objektnachweis", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "Check-in per App" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Reporting" },
    { feature: "Einsatzplanung Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Starker Fokus" },
    { feature: "Kalkulation vor dem Angebot", taskey: "Integriert in Angebot", competitor: "Nicht Kernmodul" },
    { feature: "Rechnungen", taskey: "Integriert", competitor: "Über Export oder Drittsystem" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenbereich" },
    { feature: "DATEV-Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Lohnvorbereitung" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Auf Anfrage" },
  ],

  whenTheirsH2: "Wann CleanManager besser passt",
  whenTheirs: [
    "Sie brauchen hauptsächlich Dienstplan und Mobile-App und rechnen in einem separaten Buchhaltungssystem.",
    "Ihre Prozesse sind seit Jahren auf CleanManager aufgebaut und ein Wechsel bringt aktuell keinen operativen Gewinn.",
    "Live-Margen pro Objekt und Kalkulation in derselben App sind für Sie nachrangig.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie wollen Kalkulation, Nachweis, Rechnung und Marge in einer App statt in drei Systemen.",
    "Sie wollen Zahlen pro Objekt in Echtzeit statt im Monatsreport.",
    "Sie wollen dem Auftraggeber einen Live-Link schicken, ohne dass dieser einen Account anlegt.",
    "Sie wollen NFC als physischen Beweis, dass der Mitarbeiter wirklich im Objekt war.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Kann ich mit Taskey auch Rechnungen schreiben?",
      a: "Ja. Kalkulation, Angebot und Rechnung sind Kernmodule und direkt mit dem NFC-Leistungsnachweis verknüpft.",
    },
    {
      q: "Hat Taskey eine Qualitätskontrolle pro Reinigung?",
      a: "Ja. Fotos, Tickets und Mängelmeldungen pro Objekt sind integriert. Ergänzt wird das durch Live-Margen als harte KPI.",
    },
    {
      q: "Kann ich von CleanManager zu Taskey migrieren?",
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
    { href: "/vergleich/shiftbase", label: "Taskey vs Shiftbase", desc: "Branchenfremde Dienstplan-Tools vs Reinigungs-Spezialist." },
    { href: "/vergleich/fortytools", label: "Taskey vs fortytools", desc: "Hamburger Allrounder vs Reinigungs-Spezialist." },
    { href: "/marktvergleich/einsatzplanung-software", label: "Einsatzplanung im Markt", desc: "Überblick der Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/cleanmanager" },
    { name: "Taskey vs CleanManager", href: "/vergleich/cleanmanager" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-cleanmanager" />;
}
