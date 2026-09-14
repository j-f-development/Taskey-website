import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/blink";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs Blink · Gebäudereinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder Blink für Ihre Gebäudereinigungssoftware? Fairer Vergleich zu Funktionen, Preisen, NFC-Zeiterfassung, Live-Margen, DATEV Export und Support. Made in Germany.",
    ogTitle: "Taskey vs Blink · Vergleich für Gebäudereiniger",
    ogDescription:
      "Fairer Vergleich: Funktionen, Preise, NFC-Zeiterfassung, Live-Margen, DATEV Export.",
    twitterTitle: "Taskey vs Blink",
    twitterDescription: "Vergleich der Gebäudereinigungssoftware.",
  },
  en: {
    title: "Taskey vs Blink · Cleaning software comparison | Taskey",
    description:
      "Taskey or Blink for your cleaning management software? Fair comparison of features, pricing, NFC time tracking, live margins, DATEV export.",
  },
  fr: {
    title: "Taskey vs Blink · Comparatif logiciel nettoyage | Taskey",
    description:
      "Taskey ou Blink pour votre logiciel de nettoyage? Comparaison des fonctionnalités, prix, pointage NFC, marges, export DATEV.",
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
  h1: "Taskey vs Blink · Gebäudereinigungssoftware im Vergleich",
  h1Accent: "Beide Anbieter kommen aus der DACH-Region. Wo sie sich unterscheiden.",
  lead:
    "Blink ist eine etablierte Plattform für Reinigungs- und Facility-Betriebe mit App-First-Ansatz. Taskey ist der neuere Anbieter aus dem Saarland, gebaut für Betriebe, die Live-Margen pro Objekt, NFC-Nachweise und ein Auftraggeber-Portal ohne Kunden-Login wollen. Der Vergleich zeigt, wann welches Produkt passt.",
  disclaimer:
    "Alle Angaben zu Blink beruhen auf öffentlich zugänglichen Informationen zum Stand 2026. Preise und Funktionen ändern sich. Prüfen Sie beim Anbieter selbst nach.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Gebäudereinigungssoftware Made in Germany, Fokus auf NFC-Zeiterfassung, Live-Margen pro Objekt, Einsatzplanung und Auftraggeber-Portal ohne Login. Betrieben von Schulz & Stosse GbR, Saarland. Hosting und Support in Deutschland. Preise ab 59 € pro Monat für Einzelunternehmer, 179 € für Professional, 249 € für Business, Enterprise auf Anfrage.",
  overviewRightTitle: "Blink",
  overviewRightBody:
    "Blink ist eine der bekannteren Cleaning-Suites im DACH-Raum. Fokus auf Zeiterfassung, Objektmanagement und Kommunikation zwischen Reinigungsleitung und Team über eine Mitarbeiter-App. Angeboten wird eine breite Modul-Palette bis in den Enterprise-Bereich.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den jeweiligen Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Zeiterfassung", taskey: "Serienmäßig, inkl. GPS-Nachweis", competitor: "Vorhanden" },
    { feature: "Live-Marge pro Objekt", taskey: "Live, in Echtzeit im Dashboard", competitor: "Reporting nach Zeitraum" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link, ohne Registrierung", competitor: "Kundenzugang mit Login" },
    { feature: "DATEV Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Vorhanden" },
    { feature: "Offline-fähige App", taskey: "Ja, mit lokalem Zwischenspeicher", competitor: "Ja" },
    { feature: "Mehrsprachige Mitarbeiter-App", taskey: "DE, EN, FR, TR, RU, PL", competitor: "Mehrsprachig" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat, Einzelunternehmer", competitor: "Auf Anfrage" },
    { feature: "Hosting", taskey: "Deutschland", competitor: "Deutschland" },
    { feature: "Zielgruppe", taskey: "Small und Mid-Market Reinigungsbetriebe", competitor: "Small bis Enterprise" },
  ],

  whenTheirsH2: "Wann Blink besser passt",
  whenTheirs: [
    "Sie sind ein sehr großer Konzern mit über 1.000 Mitarbeitern und suchen ein tief integriertes Enterprise-System.",
    "Ihr Betrieb hat bereits einen langfristigen Vertrag oder eingespielte Prozesse mit dem Anbieter.",
    "Sie wollen die breite Modul-Landschaft eines Marktführers und sind bereit, den entsprechenden Preis zu zahlen.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie sind Reinigungsbetrieb mit 5 bis 500 Mitarbeitern und wollen ein modernes System ohne monatelange Einführung.",
    "Sie wollen Live-Margen pro Objekt sehen, nicht am Monatsende in der BWA.",
    "Sie wollen Ihrem Auftraggeber einen sofortigen Live-Link geben, ohne dass der Kunde sich registrieren muss.",
    "Sie wollen einen transparenten Einstiegspreis ab 59 € pro Monat und keinen Enterprise-Vertrag als Voraussetzung.",
  ],

  faqH2: "Häufige Fragen zum Vergleich Taskey vs Blink",
  faqs: [
    {
      q: "Ist Taskey günstiger als Blink?",
      a: "Der Einstieg liegt bei Taskey öffentlich ausgewiesen bei 59 € pro Monat. Blink kommuniziert seine Preise nicht öffentlich und erstellt Angebote individuell. Ein direkter Preisvergleich ist nur im konkreten Angebot möglich.",
    },
    {
      q: "Bietet Blink auch NFC-Zeiterfassung?",
      a: "Ja, Blink bietet Zeiterfassung inklusive NFC. Der Unterschied liegt in der Tiefe der Integration mit Live-Margen und Auftraggeber-Portal.",
    },
    {
      q: "Kann ich von Blink zu Taskey migrieren?",
      a: "Ja. Taskey übernimmt Objektdaten, Mitarbeiterdaten und Verträge im Rahmen eines Done-for-you Setups innerhalb weniger Tage.",
    },
    {
      q: "Ist Blink eher für Enterprise oder auch für kleine Betriebe?",
      a: "Blink bedient beides, ist historisch aber stark im mittleren bis Enterprise-Bereich. Taskey ist explizit für den Bereich Solo bis 500 Mitarbeiter zugeschnitten.",
    },
  ],

  ctaH2: "Testen Sie Taskey mit Ihrem eigenen Objekt",
  ctaBody:
    "Kostenlosen Account erstellen, ein Objekt anlegen, in weniger als zehn Minuten läuft die erste Zeitbuchung mit NFC-Nachweis.",
  ctaPrimary: "Kostenlosen Account erstellen",
  ctaSecondary: "Alle Funktionen",
  pricingLabel: "Preise ansehen",

  relatedH2: "Weiter im Vergleich",
  related: [
    {
      href: "/vergleich/fortytools",
      label: "Taskey vs fortytools",
      desc: "Kleinbetriebs-Fokus vs modernes All-in-One.",
    },
    {
      href: "/vergleich/hero-software",
      label: "Taskey vs Hero Software",
      desc: "Handwerker-Wurzeln vs Reinigungs-Spezialist.",
    },
    {
      href: "/features/nfc-zeiterfassung",
      label: "NFC Zeiterfassung",
      desc: "Der harte Kern der Reinigungssoftware.",
    },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/blink" },
    { name: "Taskey vs Blink", href: "/vergleich/blink" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-blink" />;
}
