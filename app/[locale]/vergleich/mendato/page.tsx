import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/mendato";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs Mendato · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder Mendato für Ihre Reinigungssoftware? Fairer Vergleich zu Funktionen, Einsatzplanung, NFC-Zeiterfassung, Live-Margen und Subunternehmer-Portal.",
    ogTitle: "Taskey vs Mendato · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: Funktionen, Planung, NFC, Live-Margen, DATEV.",
    twitterTitle: "Taskey vs Mendato",
    twitterDescription: "Vergleich der Reinigungssoftware.",
  },
  en: {
    title: "Taskey vs Mendato · Cleaning software comparison | Taskey",
    description: "Taskey or Mendato? Fair comparison of features, planning and pricing.",
  },
  fr: {
    title: "Taskey vs Mendato · Comparatif nettoyage | Taskey",
    description: "Taskey ou Mendato? Comparaison fonctionnalités, planification et prix.",
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
  h1: "Taskey vs Mendato · Reinigungssoftware im Vergleich",
  h1Accent: "Zwei Branchensoftwares aus Deutschland. Wo liegen die Unterschiede.",
  lead:
    "Mendato ist eine Berliner Branchensoftware für Gebäudereinigung mit Zeiterfassung, Personalplanung, Abrechnung und Subunternehmer-Portal in einem System. Taskey verfolgt denselben All-in-One-Anspruch, legt den Fokus aber auf NFC-Objektnachweis, Live-Margen pro Objekt und ein Auftraggeber-Portal ohne Login.",
  disclaimer:
    "Alle Angaben zu Mendato beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung und Facility Management mit NFC-Zeiterfassung, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und dem Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland.",
  overviewRightTitle: "Mendato",
  overviewRightBody:
    "Mendato ist eine Berliner Branchensoftware für Gebäudereinigung. Kernmodule sind Zeiterfassung, Personalplanung, Abrechnung und ein Subunternehmer-Portal. Anwenderschwerpunkt sind Reinigungsbetriebe im Mittelstand.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "NFC-Objektnachweis", taskey: "Serienmäßig, inkl. GPS und Foto", competitor: "Mobile Zeiterfassung" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Auswertungen im Reporting" },
    { feature: "Einsatzplanung Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Personalplanung" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenbereich" },
    { feature: "Subunternehmer-Portal", taskey: "Nachweispflicht pro Partner", competitor: "Eigenes Portal" },
    { feature: "DATEV-Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Lohnvorbereitung" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Auf Anfrage" },
    { feature: "Zielgruppe", taskey: "Solo bis 500 Mitarbeiter", competitor: "Mittelstand" },
  ],

  whenTheirsH2: "Wann Mendato besser passt",
  whenTheirs: [
    "Sie haben einen hohen Anteil an Subunternehmern und brauchen deren Portal als Kernprozess.",
    "Sie suchen ein Produkt mit Berliner Herkunft und direkter Nähe zum Hauptstadt-Vertrieb.",
    "Live-Margen pro Objekt sind für Sie kein priorisierter Steuerungsindikator.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie wollen Zahlen pro Objekt in Echtzeit, nicht nur im Monatsreport.",
    "Sie wollen dem Auftraggeber einen Live-Link schicken, ohne dass dieser einen Account anlegt.",
    "Sie wollen NFC als physischen Beweis, dass der Mitarbeiter wirklich im Objekt war.",
    "Sie suchen eine App, die im Kellerraum und in der Tiefgarage offline funktioniert.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Ist Taskey auf denselben Betriebsgrößen zu Hause wie Mendato?",
      a: "Taskey begleitet Betriebe vom Solo-Selbständigen bis 500 Mitarbeiter. Der Mittelstand ist die Zone, in der beide Produkte direkt konkurrieren.",
    },
    {
      q: "Kann Taskey Subunternehmer abbilden?",
      a: "Ja. Jeder Subunternehmer bekommt eigenen Zugriff auf seine Objekte und liefert NFC-Nachweise, die direkt in die Abrechnung einfließen.",
    },
    {
      q: "Kann ich von Mendato zu Taskey migrieren?",
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
    { href: "/marktvergleich/einsatzplanung-software", label: "Einsatzplanung im Markt", desc: "Übersicht der führenden Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/mendato" },
    { name: "Taskey vs Mendato", href: "/vergleich/mendato" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-mendato" />;
}
