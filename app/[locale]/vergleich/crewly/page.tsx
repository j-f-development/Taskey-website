import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/crewly";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs Crewly · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder Crewly für Ihre Reinigungssoftware? Fairer Vergleich zu GPS- und NFC-Zeiterfassung, automatischen Rechnungen, Einsatzplanung und Live-Margen.",
    ogTitle: "Taskey vs Crewly · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: GPS vs NFC, Rechnungen, Planung, Live-Margen.",
    twitterTitle: "Taskey vs Crewly",
    twitterDescription: "Vergleich der Reinigungssoftware.",
  },
  en: {
    title: "Taskey vs Crewly · Cleaning software comparison | Taskey",
    description: "Taskey or Crewly? Fair comparison of GPS vs NFC, invoicing, planning.",
  },
  fr: {
    title: "Taskey vs Crewly · Comparatif nettoyage | Taskey",
    description: "Taskey ou Crewly? GPS vs NFC, facturation, planification.",
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
  h1: "Taskey vs Crewly · Reinigungssoftware im Vergleich",
  h1Accent: "All-in-One auf beiden Seiten. Der Unterschied liegt im Nachweis und in der Marge.",
  lead:
    "Crewly ist eine All-in-One-Lösung für Reinigungsbetriebe mit GPS-Zeiterfassung, NFC-Stempeluhr, automatischen Rechnungen und gestaffelten Preisen statt per-User-Kosten. Taskey verfolgt denselben All-in-One-Anspruch, legt den Fokus aber auf Live-Margen pro Objekt und ein Auftraggeber-Portal, das ohne Login auskommt.",
  disclaimer:
    "Alle Angaben zu Crewly beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung mit NFC-Objektnachweis, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland. Tarife ab 59 € pro Monat.",
  overviewRightTitle: "Crewly",
  overviewRightBody:
    "Crewly ist eine All-in-One-Software für Reinigungsbetriebe mit GPS-Zeiterfassung, NFC-Stempeluhr, Einsatzplanung und automatischer Rechnungserstellung. Preismodell nach Stufen statt pro Nutzer.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Objektnachweis", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "NFC-Stempeluhr" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Auswertungen im Reporting" },
    { feature: "Einsatzplanung Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Schichtplanung" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenbereich" },
    { feature: "Kalkulation vor dem Angebot", taskey: "Integriert in Angebot", competitor: "Rechnungen automatisch" },
    { feature: "DATEV-Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Lohnvorbereitung" },
    { feature: "Preismodell", taskey: "Flat, drei Stufen", competitor: "Gestaffelt, nicht pro Nutzer" },
    { feature: "Zielgruppe", taskey: "Solo bis 500 Mitarbeiter", competitor: "Klein und Mittel" },
  ],

  whenTheirsH2: "Wann Crewly besser passt",
  whenTheirs: [
    "Ein Preismodell ohne Pro-Nutzer-Komponente ist für Sie das zentrale Auswahlkriterium.",
    "GPS-Stempeluhr mit einfachem Rechnungsworkflow deckt Ihren Bedarf bereits ab.",
    "Live-Margen pro Objekt und ein Auftraggeber-Portal ohne Login sind für Sie nachrangig.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie wollen Zahlen pro Objekt in Echtzeit statt im Monatsreport.",
    "Sie wollen dem Auftraggeber einen Live-Link schicken, ohne dass dieser einen Account anlegt.",
    "Sie wollen NFC als physischen Beweis, dass der Mitarbeiter wirklich im Objekt war.",
    "Sie kalkulieren Angebote und wollen den Deckungsbeitrag pro Objekt direkt sehen.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Sind Taskey und Crewly für die gleiche Betriebsgröße?",
      a: "Beide Produkte adressieren Klein- und Mittelbetriebe. Taskey skaliert bis zu Betrieben mit mehreren hundert Mitarbeitern und mehreren Niederlassungen.",
    },
    {
      q: "Hat Taskey ein Preismodell pro Nutzer?",
      a: "Nein. Taskey hat drei feste Stufen, zu jedem Tarif ist die Anzahl der Mitarbeitenden definiert. Keine Überraschungen bei Wachstum.",
    },
    {
      q: "Kann ich von Crewly zu Taskey migrieren?",
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
    { href: "/vergleich/fortytools", label: "Taskey vs fortytools", desc: "Hamburger Allrounder vs Reinigungs-Spezialist." },
    { href: "/vergleich/certiscan", label: "Taskey vs CERTISCAN", desc: "QR-Dokumentation vs NFC-Objektnachweis." },
    { href: "/marktvergleich/zeiterfassung-software", label: "Zeiterfassung im Markt", desc: "Überblick der Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/crewly" },
    { name: "Taskey vs Crewly", href: "/vergleich/crewly" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-crewly" />;
}
