import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/hero-software";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs Hero Software · Gebäudereinigung im Vergleich | Taskey",
    description:
      "Taskey oder Hero Software für Gebäudereiniger? Fairer Vergleich zu Funktionen, Preisen, NFC-Zeiterfassung, Live-Margen und Auftraggeber-Portal.",
    ogTitle: "Taskey vs Hero Software · Gebäudereinigung im Vergleich",
    ogDescription: "Fairer Vergleich: Funktionen, Preise, NFC, Live-Margen.",
    twitterTitle: "Taskey vs Hero Software",
    twitterDescription: "Vergleich für Gebäudereiniger.",
  },
  en: {
    title: "Taskey vs Hero Software · Cleaning comparison | Taskey",
    description: "Taskey or Hero Software for cleaning operations? Fair comparison of features and pricing.",
  },
  fr: {
    title: "Taskey vs Hero Software · Comparatif nettoyage | Taskey",
    description: "Taskey ou Hero Software pour le nettoyage? Comparaison des fonctionnalités et prix.",
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
  h1: "Taskey vs Hero Software · Vergleich für Gebäudereiniger",
  h1Accent: "Handwerker-Wurzeln vs Reinigungs-Spezialist. Wo die Unterschiede liegen.",
  lead:
    "Hero Software aus Aachen ist bekannt aus dem Handwerks-Segment und bedient auch Gebäudereiniger. Taskey wurde von Anfang an nur für die Gebäudereinigung entwickelt. Der Vergleich zeigt, was Spezialisierung im Alltag ausmacht.",
  disclaimer:
    "Alle Angaben zu Hero Software beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Reine Gebäudereinigungssoftware mit NFC-Nachweis, Live-Margen pro Objekt, Einsatzplanung, DATEV Export und Auftraggeber-Portal ohne Login. Hosting und Support in Deutschland.",
  overviewRightTitle: "Hero Software",
  overviewRightBody:
    "Hero Software ist eine bekannte Handwerker-Software aus Aachen mit Fokus auf Angebote, Rechnungen, Aufmaß und Zeiterfassung. Für Gebäudereiniger sind branchenspezifische Module verfügbar.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Zeiterfassung", taskey: "Serienmäßig, mit GPS und Foto", competitor: "Zeiterfassung per App" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Nachkalkulation" },
    { feature: "Einsatzplanung Reinigung", taskey: "Board mit Konflikthinweisen für Kolonnen", competitor: "Terminplanung Handwerk" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenportal" },
    { feature: "DATEV Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Vorhanden" },
    { feature: "Reinigungs-spezifische Vorlagen", taskey: "Von Grund auf für Reinigung", competitor: "Handwerks-Basis mit Anpassung" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Nach Modulen, siehe Anbieter" },
    { feature: "Zielgruppe", taskey: "Reinigungsbetriebe", competitor: "Handwerker inkl. Reinigung" },
  ],

  whenTheirsH2: "Wann Hero Software besser passt",
  whenTheirs: [
    "Sie sind eigentlich ein Handwerksbetrieb, der auch Reinigung anbietet.",
    "Sie schätzen die klassischen Handwerks-Module wie Aufmaß, LV und Nachtragsverwaltung.",
    "Sie brauchen keine reinigungsspezifische Live-Marge oder tiefe Kolonnen-Planung.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie sind reiner Gebäudereinigungsbetrieb und wollen keine Software, die für Handwerker gebaut wurde.",
    "Sie brauchen Live-Margen, Kolonnen-Planung und ein Auftraggeber-Portal, das Kunden ohne Login nutzen.",
    "Sie wollen Vokabular, Vorlagen und Reports in der Sprache Ihrer Branche.",
    "Sie wollen ein transparentes Preismodell ab 59 € pro Monat.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Ist Hero Software nicht eher für Handwerker?",
      a: "Ursprünglich ja. Es gibt spezifische Anpassungen für Reinigungsbetriebe, aber die Basis-DNA ist Handwerk.",
    },
    {
      q: "Bedeutet Spezialisierung, dass Taskey weniger kann?",
      a: "Im Handwerksbereich, ja. Für die Gebäudereinigung ist es umgekehrt. Live-Margen, NFC-Nachweis und Kolonnen-Planung sind bei Taskey Standard.",
    },
    {
      q: "Kann Taskey Angebote und Rechnungen ersetzen?",
      a: "Ja. Kalkulation, Angebot, Rechnung und DATEV Export sind Kernmodule.",
    },
    {
      q: "Wie einfach ist der Wechsel?",
      a: "Objekt-, Mitarbeiter- und Vertragsdaten werden im Done-for-you Setup übernommen. In 48 Stunden produktiv.",
    },
  ],

  ctaH2: "Sehen Sie den Unterschied in fünf Minuten",
  ctaBody:
    "Legen Sie ein Objekt an, ordnen Sie einen NFC-Tag zu, sehen Sie die Live-Marge pro Objekt. Sie brauchen keine Präsentation, das Produkt zeigt es selbst.",
  ctaPrimary: "Kostenlosen Account erstellen",
  ctaSecondary: "Alle Funktionen",
  pricingLabel: "Preise ansehen",

  relatedH2: "Weiter im Vergleich",
  related: [
    { href: "/vergleich/blink", label: "Taskey vs Blink", desc: "Enterprise-Ansatz vs modernes All-in-One." },
    { href: "/vergleich/fortytools", label: "Taskey vs fortytools", desc: "Kleinbetriebs-Fokus vs Reinigung Vollausstattung." },
    { href: "/features/live-margen", label: "Live-Margen", desc: "Warum Reinigungsbetriebe die Zahlen brauchen." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/hero-software" },
    { name: "Taskey vs Hero Software", href: "/vergleich/hero-software" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-hero-software" />;
}
