import type { Metadata } from "next";
import FeaturesClient from "./features-client";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { buildMetadata, pickLocale, canonical, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Funktionen · Reinigungssoftware, Zeiterfassung, Einsatzplanung & Rechnungsprogramm | Taskey",
    description:
      "Alle Funktionen von Taskey: Reinigungssoftware mit NFC Zeiterfassung, Einsatzplanung, Rechnungsprogramm, Kundenportal, digitalem Leistungsnachweis, Kalkulationssoftware, Ausschreibungen und DATEV Export. Für Gebäudereinigung und Facility Management.",
  },
  en: {
    title: "Features · cleaning management software, time tracking, scheduling & invoicing | Taskey",
    description:
      "All Taskey features: cleaning management software with NFC time tracking, staff scheduling, invoicing, client portal, proof of service, estimating and DATEV export. Cleaning business software for commercial and janitorial operations.",
  },
  fr: {
    title: "Fonctionnalités · logiciel de propreté, pointage, planning & facturation | Taskey",
    description:
      "Toutes les fonctionnalités Taskey : logiciel de propreté avec pointage NFC des agents de nettoyage, planning, facturation, portail client, contrôle qualité, devis et export DATEV. Pour entreprises de nettoyage et facility management.",
  },
};

const FAQ_BY_LOCALE: Record<"de" | "en" | "fr", { q: string; a: string }[]> = {
  de: [
    { q: "Wie funktioniert die NFC-Zeiterfassung in Taskey?", a: "Am Objekt wird ein wetterfester NFC-Tag platziert. Die Reinigungskraft hält das Smartphone daran und Taskey erfasst Zeitstempel, GPS-Standort und Mitarbeiter automatisch – ohne dass eine App-Bedienung nötig ist." },
    { q: "Kann ich Einsatzpläne für mehrere Kolonnen gleichzeitig erstellen?", a: "Ja. Taskey unterstützt mehrere Kolonnen, Schichten und wiederkehrende Touren parallel. Vertretungen, Krankmeldungen und kurzfristige Änderungen lassen sich in Sekunden umplanen." },
    { q: "Funktioniert der DATEV-Export aus Taskey direkt mit dem Steuerberater?", a: "Ja. Taskey exportiert Lohn- und Buchungsdaten im DATEV-Standardformat. Ihr Steuerberater kann die Datei direkt importieren – ohne Nachbearbeitung." },
    { q: "Wie sieht der Auftraggeber-Zugang (Taskey Share) aus?", a: "Jeder Auftraggeber bekommt einen eigenen Login mit Live-Übersicht aller Einsätze, Nachweise und Beanstandungen für seine Objekte. Das reduziert Rückfragen und schafft Vertrauen." },
    { q: "Lassen sich Angebote und Rechnungen aus Taskey heraus erstellen?", a: "Ja, vollständig. Aus dem Einsatzplan oder Objekt heraus lassen sich Angebote, Wartungsverträge und Rechnungen mit einem Klick erzeugen, versenden und nachverfolgen." },
    { q: "Wie viele Mitarbeitende kann ich in Taskey verwalten?", a: "Unbegrenzt. Alle Tarife enthalten unbegrenzt viele Mitarbeitende – Sie zahlen nur pro aktivem Objekt. Damit skaliert Taskey vom Soloselbstständigen bis zum Großbetrieb." },
  ],
  en: [
    { q: "How does NFC time tracking work in Taskey?", a: "A weatherproof NFC tag sits at the site. The cleaner taps it with their phone and Taskey records timestamp, GPS location and employee automatically – no app interaction needed." },
    { q: "Can I schedule multiple teams at the same time?", a: "Yes. Taskey supports multiple teams, shifts and recurring routes in parallel. Substitutions, sick leave and last-minute changes can be rescheduled in seconds." },
    { q: "Does the DATEV export work directly with my accountant?", a: "Yes. Taskey exports payroll and accounting data in the standard DATEV format. Your accountant can import the file directly – no rework needed." },
    { q: "What does the client portal (Taskey Share) look like?", a: "Each client gets their own login with a live view of all jobs, proofs and complaints for their sites. That cuts back-and-forth and builds trust." },
    { q: "Can I create quotes and invoices from Taskey?", a: "Yes, fully. From the schedule or a site, you can generate, send and track quotes, maintenance contracts and invoices in one click." },
    { q: "How many employees can I manage in Taskey?", a: "Unlimited. All plans include unlimited employees – you only pay per active site. So Taskey scales from solo operators to large enterprises." },
  ],
  fr: [
    { q: "Comment fonctionne le pointage NFC dans Taskey ?", a: "Un tag NFC résistant aux intempéries est placé sur le site. L'agent approche son smartphone et Taskey enregistre l'horodatage, la position GPS et l'employé automatiquement – sans interaction avec l'application." },
    { q: "Puis-je planifier plusieurs équipes en parallèle ?", a: "Oui. Taskey gère plusieurs équipes, plannings et tournées récurrentes en parallèle. Remplacements, arrêts maladie et changements de dernière minute se replanifient en quelques secondes." },
    { q: "L'export DATEV fonctionne-t-il directement avec mon expert-comptable ?", a: "Oui. Taskey exporte les données de paie et de comptabilité au format DATEV standard. Votre comptable peut importer le fichier directement – sans retouche." },
    { q: "À quoi ressemble le portail client (Taskey Share) ?", a: "Chaque client obtient son propre accès avec une vue en direct de toutes les missions, preuves et réclamations pour ses sites. Cela réduit les allers-retours et renforce la confiance." },
    { q: "Puis-je créer devis et factures depuis Taskey ?", a: "Oui, entièrement. Depuis le planning ou un site, vous générez, envoyez et suivez devis, contrats de maintenance et factures en un clic." },
    { q: "Combien d'employés puis-je gérer dans Taskey ?", a: "Illimité. Tous les plans incluent un nombre illimité d'employés – vous payez uniquement par site actif. Taskey s'adapte du travailleur indépendant à la grande entreprise." },
  ],
};

const CRUMB_LABELS: Record<"de" | "en" | "fr", { home: string; features: string }> = {
  de: { home: "Home", features: "Funktionen" },
  en: { home: "Home", features: "Features" },
  fr: { home: "Accueil", features: "Fonctionnalités" },
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
    path: "/features",
  });
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const featuresFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_BY_LOCALE[loc].map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
  };
  const crumbs = CRUMB_LABELS[loc];

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: crumbs.home, url: canonical("/", loc) },
          { name: crumbs.features, url: canonical("/features", loc) },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresFaqSchema) }}
      />
      <FeaturesClient />
    </>
  );
}
