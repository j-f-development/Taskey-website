import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/wowflow";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs Wowflow · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder Wowflow für Ihre Reinigungs- und FM-Software? Fairer Vergleich zu Mobile Facility Management, NFC-Nachweis, Live-Margen und DATEV.",
    ogTitle: "Taskey vs Wowflow · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: Mobile FM vs Reinigungs-Spezialist mit NFC-Nachweis.",
    twitterTitle: "Taskey vs Wowflow",
    twitterDescription: "Vergleich der Reinigungs- und FM-Software.",
  },
  en: {
    title: "Taskey vs Wowflow · Cleaning and FM software comparison | Taskey",
    description: "Taskey or Wowflow? Fair comparison of mobile FM vs cleaning specialist.",
  },
  fr: {
    title: "Taskey vs Wowflow · Comparatif nettoyage et FM | Taskey",
    description: "Taskey ou Wowflow? FM mobile vs spécialiste nettoyage.",
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
  h1: "Taskey vs Wowflow · Reinigungssoftware im Vergleich",
  h1Accent: "Mobile FM-Software gegen Reinigungs-Spezialist mit NFC-Nachweis.",
  lead:
    "Wowflow positioniert sich als Mobile Facility Management Software für den DACH-Raum, mit Fokus auf Tickets, Objekte und Dienstleister-Steuerung. Taskey ist die Branchensoftware für Reinigungsbetriebe mit NFC-Objektnachweis, Live-Margen pro Objekt, Kalkulation, DATEV-Export und einem Auftraggeber-Portal ohne Login.",
  disclaimer:
    "Alle Angaben zu Wowflow beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung mit NFC-Objektnachweis, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland. Tarife ab 59 € pro Monat.",
  overviewRightTitle: "Wowflow",
  overviewRightBody:
    "Wowflow ist eine Mobile Facility Management Software mit Tickets, Objekten und Dienstleister-Steuerung. Fokus liegt auf FM-Dienstleistern und Objektbetreibern, nicht primär auf der Kalkulation einer Reinigung.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Objektnachweis", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "Nachweis per App-Check-in" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Ticket- und Objektsicht" },
    { feature: "Kalkulation und Angebot", taskey: "Integriert, mit Deckungsbeitrag", competitor: "Nicht Kernmodul" },
    { feature: "Einsatzplanung Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Ticket- und Aufgabenplanung" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kunden- und Dienstleisterportal" },
    { feature: "DATEV-Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Lohn über Drittanbieter" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Auf Anfrage" },
    { feature: "Zielgruppe", taskey: "Reinigungs- und FM-Betriebe", competitor: "FM-Dienstleister und Objektbetreiber" },
  ],

  whenTheirsH2: "Wann Wowflow besser passt",
  whenTheirs: [
    "Sie sind primär FM-Dienstleister oder Objektbetreiber mit vielen unterschiedlichen Gewerken und einem starken Ticket-Prozess.",
    "Ihre Reinigung ist nur ein Teilbereich von vielen und Sie steuern über Tickets, nicht über Deckungsbeitrag pro Objekt.",
    "Kalkulation und Rechnungen laufen bei Ihnen in einem separaten ERP.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie führen einen Reinigungsbetrieb und wollen Kalkulation, Nachweis und Marge in einer App.",
    "Sie wollen Zahlen pro Objekt in Echtzeit statt im Ticket-System.",
    "Sie wollen dem Auftraggeber einen Live-Link schicken, ohne dass dieser einen Account anlegt.",
    "Sie wollen NFC als physischen Beweis, dass der Mitarbeiter wirklich im Objekt war.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Ist Taskey auch für Facility Management geeignet?",
      a: "Ja. Taskey wird in FM-Betrieben eingesetzt, bei denen Reinigung einen zentralen Teil des Portfolios ausmacht. Für reine Multi-Gewerk-FM-Modelle mit Ticketschwerpunkt sind spezialisierte CAFM-Systeme die passendere Wahl.",
    },
    {
      q: "Hat Taskey ein Ticketsystem?",
      a: "Ja. Objektbezogene Tickets und Mängelmeldungen zwischen Objekt und Büro sind Kernbestandteil der App.",
    },
    {
      q: "Kann ich von Wowflow zu Taskey migrieren?",
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
    { href: "/loesungen/facility-management", label: "Lösung für Facility Management", desc: "Wie Taskey FM-Prozesse abbildet." },
    { href: "/marktvergleich/gebaeudereinigung-software", label: "Gebäudereinigung-Software im Markt", desc: "Überblick der Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/wowflow" },
    { name: "Taskey vs Wowflow", href: "/vergleich/wowflow" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-wowflow" />;
}
