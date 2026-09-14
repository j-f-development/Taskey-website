import type { Metadata } from "next";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import FeatureLandingPage, {
  type FeatureContent,
} from "@/components/seo/FeatureLandingPage";

const path = "/features/datev-export";

const COPY: PageCopy = {
  de: {
    title: "DATEV Export für die Gebäudereinigung | Taskey",
    description:
      "DATEV Export für Lohnabrechnung und Buchhaltung. Zeiten, Zuschläge und Fehlzeiten aus Taskey landen direkt beim Steuerberater. Kein Nachtippen, keine Fehler.",
    ogTitle: "DATEV Export für die Gebäudereinigung | Taskey",
    ogDescription:
      "Zeiten, Zuschläge und Fehlzeiten laufen sauber in DATEV. Kein Nachtippen, keine Fehler.",
    twitterTitle: "DATEV Export für die Gebäudereinigung",
    twitterDescription:
      "Zeiten und Zuschläge aus Taskey direkt in DATEV. Kein Nachtippen.",
  },
  en: {
    title: "DATEV export for commercial cleaning | Taskey",
    description:
      "DATEV export for payroll and accounting. Times, premiums and absences from Taskey flow straight to your tax advisor. No re-typing, no errors.",
    ogTitle: "DATEV export for commercial cleaning | Taskey",
    ogDescription: "Times, premiums and absences straight into DATEV.",
    twitterTitle: "DATEV export for cleaning",
    twitterDescription: "From Taskey straight into DATEV. No re-typing.",
  },
  fr: {
    title: "Export DATEV pour le nettoyage | Taskey",
    description:
      "Export DATEV pour la paie et la comptabilité. Heures, primes et absences depuis Taskey arrivent directement chez votre comptable. Zéro ressaisie.",
    ogTitle: "Export DATEV pour le nettoyage | Taskey",
    ogDescription: "Heures, primes et absences directement dans DATEV.",
    twitterTitle: "Export DATEV pour le nettoyage",
    twitterDescription: "De Taskey vers DATEV, sans ressaisie.",
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
  });
}

const CONTENT: Record<Locale, FeatureContent> = {
  de: {
    eyebrow: "DATEV Export",
    h1: "DATEV Export für die Gebäudereinigung",
    h1Accent: "Zeit, Zuschlag, Fehlzeit. Sauber beim Steuerberater.",
    lead:
      "Am Ende des Monats knirschen viele Reinigungsbetriebe: Stundenzettel abtippen, Zuschläge nachrechnen, Fehlzeiten sortieren. Taskey exportiert alles im DATEV-kompatiblen Format direkt in die Lohnabrechnung. Ein Klick statt drei Tage.",
    problemH2: "Der Monatsende-Marathon im Büro",
    problemBody:
      "Zettel einsammeln, Excel füllen, Zuschläge per Hand berechnen, an den Steuerberater faxen. Der Vorgang kostet in mittelgroßen Reinigungsbetrieben zwei bis drei Personentage pro Monat und ist fehleranfällig. Fehler bei Zuschlägen sind arbeitsrechtlich riskant.",
    howH2: "So läuft der DATEV Export in Taskey",
    howIntro:
      "Alle Zeiten, Fehlzeiten und Zuschläge sind bereits im System, weil Taskey sie im laufenden Monat erfasst.",
    steps: [
      {
        title: "1. Zeitraum wählen",
        body: "Kalendermonat, freier Zeitraum oder abweichender Lohnmonat. Filter nach Mandant, Betriebsstätte oder Team.",
      },
      {
        title: "2. Regelwerk prüfen",
        body: "Zuschläge Nacht, Sonn- und Feiertag, Überstunden. Regeln sind hinterlegt, Ausnahmen werden hervorgehoben.",
      },
      {
        title: "3. DATEV-Datei erzeugen",
        body: "Der Export erzeugt LODAS oder Lohn und Gehalt kompatible Dateien. Personalnummern werden gemapped.",
      },
      {
        title: "4. An den Steuerberater übergeben",
        body: "Datei per Portal, E-Mail oder DATEV Unternehmen online übergeben. Rückmeldungen werden importiert.",
      },
    ],
    benefitsH2: "Was der DATEV Export im Büro bewirkt",
    benefits: [
      {
        title: "Zwei bis drei Tage pro Monat gespart",
        body: "Kein Abtippen, kein Kopieren, kein Nachrechnen von Zuschlägen.",
      },
      {
        title: "Weniger Nachfragen vom Steuerberater",
        body: "Der Export ist vollständig, sortiert und maschinenlesbar. Ihr Berater arbeitet direkt weiter.",
      },
      {
        title: "Rechtssicher bei Prüfungen",
        body: "Bei Zoll oder Rentenversicherung ist die Kette Zeiterfassung → Lohnabrechnung nachvollziehbar.",
      },
      {
        title: "Skalierbar mit dem Team",
        body: "50 oder 500 Mitarbeiter, die Abrechnung bleibt gleich schnell.",
      },
    ],
    complianceH2: "Was Sie mit dem Export dokumentieren",
    complianceBody:
      "Die Übergabe an DATEV enthält Personalnummer, Zeiträume, Sollstunden, Iststunden, Zuschläge, Fehlzeitenarten und Kostenstellenkennzeichen. Alles ist rückverfolgbar auf den zugrunde liegenden NFC-Check-in oder die manuelle Buchung.",
    faqH2: "Häufige Fragen zum DATEV Export",
    faqs: [
      {
        q: "Welche DATEV-Produkte werden unterstützt?",
        a: "LODAS und Lohn und Gehalt. Andere Formate wie ADDISON, Sage oder Personio auf Anfrage.",
      },
      {
        q: "Muss der Steuerberater etwas installieren?",
        a: "Nein. Er importiert die Datei wie gewohnt in sein DATEV-System.",
      },
      {
        q: "Können Zuschläge automatisch berechnet werden?",
        a: "Ja. Nacht, Sonntag, Feiertag, Überstunden. Regeln sind konfigurierbar pro Tarif oder Personengruppe.",
      },
      {
        q: "Was ist mit Fehlzeiten wie Krank oder Urlaub?",
        a: "Werden im Kalender geführt und mit den passenden DATEV-Lohnarten exportiert.",
      },
      {
        q: "Können mehrere Mandanten getrennt exportiert werden?",
        a: "Ja. Mandanten-Split ist Standard. Konzern-Struktur mit Betriebsstätten wird unterstützt.",
      },
    ],
    ctaH2: "Wechseln Sie das Monatsende auf Autopilot",
    ctaBody:
      "Legen Sie einen Testmandanten an, erzeugen Sie einen Beispiel-Export. Ihr Steuerberater sieht das Ergebnis, bevor Sie unterschreiben.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen ansehen",
    pricingLabel: "Preise ansehen",
    relatedH2: "Weiter im Cluster Gebäudereinigungssoftware",
    related: [
      {
        href: "/features/nfc-zeiterfassung",
        label: "NFC Zeiterfassung",
        desc: "Die Grundlage für den DATEV Export.",
      },
      {
        href: "/features/einsatzplanung",
        label: "Einsatzplanung",
        desc: "Sollzeiten aus dem Plan gegen Ist aus der Zeit.",
      },
      {
        href: "/features/live-margen",
        label: "Live-Margen",
        desc: "Personalkosten sofort sichtbar, nicht erst im Monatsende.",
      },
    ],
    breadcrumbs: [
      { name: "Start", href: "/" },
      { name: "Funktionen", href: "/features" },
      { name: "DATEV Export", href: "/features/datev-export" },
    ],
  },
  en: {
    eyebrow: "DATEV export",
    h1: "DATEV export for commercial cleaning",
    h1Accent: "Time, premiums, absences. Clean for the tax advisor.",
    lead:
      "Month-end is painful in many cleaning operations: retyping timesheets, calculating premiums, sorting absences. Taskey exports everything in DATEV-compatible format straight to payroll. One click instead of three days.",
    problemH2: "The month-end marathon",
    problemBody:
      "Collecting slips, filling spreadsheets, calculating premiums by hand, faxing to the tax advisor. Two to three person-days per month and error-prone. Premium errors are legally risky.",
    howH2: "How the DATEV export works in Taskey",
    howIntro: "All times, absences and premiums already sit in the system.",
    steps: [
      { title: "1. Pick period", body: "Calendar month, custom range or offset payroll month." },
      { title: "2. Review rules", body: "Night, Sunday, holiday, overtime. Rules stored, exceptions highlighted." },
      { title: "3. Generate DATEV file", body: "LODAS or Lohn und Gehalt compatible files, personnel numbers mapped." },
      { title: "4. Hand over to the tax advisor", body: "Via portal, email or DATEV Unternehmen online." },
    ],
    benefitsH2: "What DATEV export changes",
    benefits: [
      { title: "2 to 3 days saved per month", body: "No retyping, no copying, no premium math." },
      { title: "Fewer advisor callbacks", body: "Complete, sorted, machine-readable." },
      { title: "Audit-safe", body: "Chain from time entry to payroll is traceable." },
      { title: "Scales with team", body: "50 or 500 employees, same speed." },
    ],
    complianceH2: "What the export documents",
    complianceBody:
      "The DATEV handover contains personnel numbers, periods, target hours, actual hours, premiums, absence types and cost centres. Everything traceable to the underlying NFC check-in or manual entry.",
    faqH2: "Frequently asked questions",
    faqs: [
      { q: "Which DATEV products?", a: "LODAS and Lohn und Gehalt. Others like ADDISON on request." },
      { q: "Does the tax advisor need to install anything?", a: "No. Import as usual." },
      { q: "Are premiums calculated automatically?", a: "Yes, per tariff or group." },
      { q: "Absences?", a: "Managed in a calendar and exported with correct wage types." },
      { q: "Multiple clients?", a: "Yes, split by client is standard." },
    ],
    ctaH2: "Put month-end on autopilot",
    ctaBody: "Add a test client, generate a sample export. Your advisor sees the result before you commit.",
    ctaPrimary: "Create free account",
    ctaSecondary: "See all features",
    pricingLabel: "See pricing",
    relatedH2: "More in the cluster",
    related: [
      { href: "/features/nfc-zeiterfassung", label: "NFC time tracking", desc: "The base for DATEV export." },
      { href: "/features/einsatzplanung", label: "Scheduling", desc: "Plan vs. actual." },
      { href: "/features/live-margen", label: "Live margins", desc: "Labour cost visible instantly." },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "DATEV export", href: "/features/datev-export" },
    ],
  },
  fr: {
    eyebrow: "Export DATEV",
    h1: "Export DATEV pour le nettoyage",
    h1Accent: "Heures, primes, absences. Prêt pour l’expert-comptable.",
    lead:
      "La fin de mois pèse: retaper les feuilles, calculer les primes, trier les absences. Taskey exporte tout au format compatible DATEV. Un clic au lieu de trois jours.",
    problemH2: "Le marathon de fin de mois",
    problemBody: "Deux à trois jours-personne par mois, source d’erreurs et de risque juridique sur les primes.",
    howH2: "Comment fonctionne l’export DATEV",
    howIntro: "Tout est déjà dans le système, saisi au fil du mois.",
    steps: [
      { title: "1. Choisir la période", body: "Mois civil, plage personnalisée ou mois de paie décalé." },
      { title: "2. Vérifier les règles", body: "Nuit, dimanche, jours fériés, heures supplémentaires." },
      { title: "3. Générer le fichier DATEV", body: "Compatible LODAS et Lohn und Gehalt." },
      { title: "4. Transférer au comptable", body: "Portail, e-mail ou DATEV Unternehmen online." },
    ],
    benefitsH2: "Ce que change l’export",
    benefits: [
      { title: "2 à 3 jours économisés", body: "Plus de ressaisie ni de calculs manuels." },
      { title: "Moins de relances", body: "Complet, trié, lisible par machine." },
      { title: "Prêt pour un contrôle", body: "Chaîne traçable de bout en bout." },
      { title: "Passe à l’échelle", body: "50 ou 500 employés, même vitesse." },
    ],
    complianceH2: "Ce que documente l’export",
    complianceBody: "Matricule, période, heures prévues et réelles, primes, absences, centres de coûts.",
    faqH2: "Questions fréquentes",
    faqs: [
      { q: "Quels produits DATEV ?", a: "LODAS et Lohn und Gehalt." },
      { q: "Le comptable doit-il installer quelque chose ?", a: "Non." },
      { q: "Primes automatiques ?", a: "Oui, par tarif ou groupe." },
      { q: "Absences ?", a: "Gérées dans un calendrier, exportées." },
      { q: "Plusieurs clients ?", a: "Oui, split standard." },
    ],
    ctaH2: "Mettez la fin de mois en pilote automatique",
    ctaBody: "Créez un client test, générez un export exemple.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Voir toutes les fonctionnalités",
    pricingLabel: "Voir les tarifs",
    relatedH2: "Autres pages du cluster",
    related: [
      { href: "/features/nfc-zeiterfassung", label: "Pointage NFC", desc: "La base pour l’export." },
      { href: "/features/einsatzplanung", label: "Planification", desc: "Prévu vs. réel." },
      { href: "/features/live-margen", label: "Marges en direct", desc: "Coûts personnel visibles." },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Fonctionnalités", href: "/features" },
      { name: "Export DATEV", href: "/features/datev-export" },
    ],
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  return (
    <FeatureLandingPage
      content={CONTENT[locale]}
      locale={locale}
      path={path}
      serviceType="DATEV Export Gebäudereinigung"
      ldPrefix="datev-export"
    />
  );
}
