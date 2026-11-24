import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
} from "@/lib/i18n-metadata";
import ComparisonPage, {
  type ComparisonContent,
} from "@/components/seo/ComparisonPage";

const path = "/vergleich/certiscan";

const COPY: PageCopy = {
  de: {
    title: "Taskey vs CERTISCAN · Reinigungssoftware im Vergleich | Taskey",
    description:
      "Taskey oder CERTISCAN für Ihre Reinigungssoftware? Fairer Vergleich zu QR- und NFC-Nachweis, Einsatzplanung, Live-Margen und Kundenportal.",
    ogTitle: "Taskey vs CERTISCAN · Reinigungssoftware im Vergleich",
    ogDescription: "Fairer Vergleich: QR vs NFC, Planung, Live-Margen, DATEV.",
    twitterTitle: "Taskey vs CERTISCAN",
    twitterDescription: "Vergleich der Reinigungssoftware.",
  },
  en: {
    title: "Taskey vs CERTISCAN · Cleaning software comparison | Taskey",
    description: "Taskey or CERTISCAN? Fair comparison of QR vs NFC proof, planning and pricing.",
  },
  fr: {
    title: "Taskey vs CERTISCAN · Comparatif nettoyage | Taskey",
    description: "Taskey ou CERTISCAN? Comparaison QR vs NFC, planification et prix.",
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
  h1: "Taskey vs CERTISCAN · Reinigungssoftware im Vergleich",
  h1Accent: "QR-Code und AI-Score auf der einen Seite. Physischer NFC-Nachweis und Live-Marge auf der anderen.",
  lead:
    "CERTISCAN positioniert sich mit QR-basierter Dokumentation, einem CleanScore-Qualitätsindex und einem Kundenportal für Betriebe ab etwa 50 Mitarbeitern. Taskey setzt auf physische NFC-Tags pro Objekt, Live-Margen pro Objekt und ein Auftraggeber-Portal, das ohne Login auskommt. Beide Systeme wollen den Beweis erbringen, dass ein Objekt gereinigt wurde. Die Wege dahin sind unterschiedlich.",
  disclaimer:
    "Alle Angaben zu CERTISCAN beruhen auf öffentlich zugänglichen Informationen zum Stand 2026.",

  overviewH2: "Beide Produkte auf einen Blick",
  overviewLeftTitle: "Taskey",
  overviewLeftBody:
    "Betriebssoftware für Reinigung mit NFC-Objektnachweis, Einsatzplanung, Live-Margen pro Objekt, Kalkulation, DATEV-Export und Auftraggeber-Portal Taskey Share. Hosting und Support in Deutschland. Tarife ab 59 € pro Monat.",
  overviewRightTitle: "CERTISCAN",
  overviewRightBody:
    "CERTISCAN ist eine Dokumentations- und Qualitäts-Software für die Gebäudereinigung. Kernmodule sind QR-Code-basierte Objektdokumentation, CleanScore AI, Kundenportal und Compliance-Module. Sprachunterstützung in zwölf Sprachen.",

  matrixH2: "Funktionsvergleich",
  matrixNote:
    "Bewertung zum Stand 2026 auf Basis öffentlich zugänglicher Informationen. Für aktuelle Details bitte den Anbieter kontaktieren.",
  matrixRows: [
    { feature: "Objektnachweis", taskey: "NFC, physisch am Objekt verklebt", competitor: "QR-Code-Scan" },
    { feature: "Qualitäts-Score", taskey: "Marge pro Objekt als KPI", competitor: "CleanScore AI" },
    { feature: "Live-Marge pro Objekt", taskey: "Live-Dashboard pro Objekt", competitor: "Reporting" },
    { feature: "Einsatzplanung Drag and Drop", taskey: "Wochen-Board mit Konflikthinweisen", competitor: "Planung integriert" },
    { feature: "Auftraggeber-Portal ohne Login", taskey: "Taskey Share Link", competitor: "Kundenportal mit Login" },
    { feature: "Sprachen in der App", taskey: "Deutsch, Türkisch, Russisch, Polnisch", competitor: "12 Sprachen" },
    { feature: "DATEV-Export", taskey: "LODAS und Lohn und Gehalt", competitor: "Lohnvorbereitung" },
    { feature: "Preiseinstieg", taskey: "59 € pro Monat", competitor: "Auf Anfrage" },
  ],

  whenTheirsH2: "Wann CERTISCAN besser passt",
  whenTheirs: [
    "Sie führen ein international aufgestelltes Team und brauchen zwölf Sprachen in der App.",
    "Ein KI-basierter Qualitäts-Score pro Reinigung ist für Ihre Auftraggeber ein Pflichtkriterium.",
    "QR-Codes am Objekt sind in Ihrer Ausschreibungslandschaft gesetzt und NFC wird nicht akzeptiert.",
  ],
  whenOursH2: "Wann Taskey besser passt",
  whenOurs: [
    "Sie wollen den physischen Beweis, dass der Mitarbeiter wirklich im Objekt war. NFC ist kontaktlos und manipulationssicher.",
    "Sie steuern Ihr Geschäft über Marge pro Objekt, nicht über Qualitäts-Scores.",
    "Sie wollen dem Auftraggeber einen Link schicken, ohne dass dieser einen Account anlegt.",
    "Sie suchen eine App, die im Kellerraum offline funktioniert.",
  ],

  faqH2: "Häufige Fragen zum Vergleich",
  faqs: [
    {
      q: "Ist NFC wirklich besser als QR?",
      a: "NFC lässt sich nicht einfach kopieren und funktioniert auch ohne Licht. QR-Codes können abfotografiert und auf einem zweiten Blatt angebracht werden. Für den Nachweis vor Gericht und Auftraggebern ist NFC der härtere Beweis.",
    },
    {
      q: "Hat Taskey einen Qualitäts-Score pro Reinigung?",
      a: "Nein. Taskey liefert Fotos pro Objekt, Ticketsystem für Reklamationen und Live-Margen als harte Steuerungs-KPI. Ein algorithmischer Score ist nicht Kern der Steuerung.",
    },
    {
      q: "Kann ich von CERTISCAN zu Taskey migrieren?",
      a: "Ja. Objekt-, Mitarbeiter- und Vertragsdaten werden im Done-for-you Setup übernommen. NFC-Tags werden bei der Umstellung mitgeliefert.",
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
    { href: "/vergleich/crewly", label: "Taskey vs Crewly", desc: "GPS-Stempeluhr vs NFC-Nachweis." },
    { href: "/marktvergleich/nfc-zeiterfassung-reinigung", label: "NFC-Zeiterfassung im Markt", desc: "Überblick über die Anbieter." },
  ],
  breadcrumbs: [
    { name: "Start", href: "/" },
    { name: "Vergleich", href: "/vergleich/certiscan" },
    { name: "Taskey vs CERTISCAN", href: "/vergleich/certiscan" },
  ],
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return <ComparisonPage content={CONTENT} locale={locale} ldPrefix="vergleich-certiscan" />;
}
