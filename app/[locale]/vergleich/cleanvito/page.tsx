import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/cleanvito";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs cleanvito · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder cleanvito von vitodata für Ihre Reinigungssoftware? Fairer Vergleich zu Dispo, Zeiterfassung, NFC-Nachweis, Live-Margen und DATEV.",
    ogTitle: "Taskey vs cleanvito · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: Schweizer Cloud-Software vs deutsche Branchen-App.",
    twitterTitle: "Taskey vs cleanvito",
    twitterDescription: "Vergleich der Reinigungssoftware.",
  },
  en: {
    title: "Taskey vs cleanvito · Cleaning software comparison | Taskey",
    description: "Taskey or cleanvito by vitodata? Fair comparison of dispatch, time tracking and pricing.",
  },
  fr: {
    title: "Taskey vs cleanvito · Comparatif nettoyage | Taskey",
    description: "Taskey ou cleanvito? Dispatch, pointage et prix.",
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
  h1: "Taskey vs cleanvito · Reinigungssoftware im Vergleich",
  h1Accent: "Cloud-Software aus der Schweiz gegen Branchen-App mit deutschen Servern.",
  lead:
    "cleanvito ist die Cloud-Branchensoftware von vitodata mit starkem Fokus auf Disposition und Zeiterfassung, verbreitet in der Schweiz und in Deutschland. Taskey ist die deutsche Antwort mit NFC-Objektnachweis, Live-Margen pro Objekt, Auftraggeber-Portal ohne Login und Hosting in Deutschland.",
  disclaimer:
    "Alle Angaben zu cleanvito und vitodata beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung mit NFC-Objektnachweis, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland. Tarife ab 59 € pro Monat.",
  overviewRightTitle: "cleanvito",
  overviewRightBody:
    "cleanvito ist eine Cloud-Software von vitodata für Reinigungsbetriebe. Kernmodule sind Disposition, Zeiterfassung, Abrechnung und mobile App. Anwenderschwerpunkt sind Schweizer und deutsche Betriebe im Mittelstand.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Objektnachweis", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "Zeiterfassung per App" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Auswertungen" },
    { feature: "Dispo und Einsatzplanung", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Starker Fokus" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenbereich" },
    { feature: "Hosting", taskey: "Deutschland, DSGVO-konform", competitor: "Schweizer Anbieter" },
    { feature: "DATEV-Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Lohnvorbereitung" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Auf Anfrage" },
    { feature: "Zielgruppe", taskey: "Solo bis 500 Mitarbeiter", competitor: "Mittelstand DACH" },
  ],

  whenTheirsH2: "Wann cleanvito besser passt",
  whenTheirs: [
    "Sie führen einen Betrieb mit Schwerpunkt Schweiz und benötigen eine lokale Dispo-Logik mit Schweizer Lohnthematik.",
    "Ihre Prozesse sind auf cleanvito aufgebaut und ein Wechsel auf ein anderes Produkt bietet aktuell keinen operativen Gewinn.",
    "Live-Margen pro Objekt und ein Auftraggeber-Portal ohne Login sind für Sie nachrangig.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie führen einen Betrieb in Deutschland und wollen Hosting und Support ausschließlich in Deutschland.",
    "Sie wollen Zahlen pro Objekt in Echtzeit statt im Monatsreport.",
    "Sie wollen dem Auftraggeber einen Live-Link schicken, ohne dass dieser einen Account anlegt.",
    "Sie wollen NFC als physischen Beweis, dass der Mitarbeiter wirklich im Objekt war.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Läuft Taskey auch in der Schweiz und in Österreich?",
      a: "Ja. Taskey wird in DE, AT und CH eingesetzt. Für Schweizer Lohnthematiken liefert Taskey Exporte, die Ihr Treuhänder weiterverarbeitet.",
    },
    {
      q: "Wo werden meine Daten gespeichert?",
      a: "Ausschließlich auf Servern in Deutschland. Konform mit DSGVO.",
    },
    {
      q: "Kann ich von cleanvito zu Taskey migrieren?",
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
    { href: "/vergleich/landwehr", label: "Taskey vs Landwehr", desc: "Branchenstandard vs modernes All-in-One." },
    { href: "/vergleich/mendato", label: "Taskey vs Mendato", desc: "Berliner Branchensoftware vs Live-Margen." },
    { href: "/marktvergleich/einsatzplanung-software", label: "Einsatzplanung im Markt", desc: "Überblick der Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/cleanvito" },
    { name: "Taskey vs cleanvito", href: "/vergleich/cleanvito" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-cleanvito" />;
}
