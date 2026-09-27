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

const path = "/features/rechnungsprogramm";

const COPY: PageCopy = {
  de: {
    title: "Rechnungsprogramm für Gebäudereinigung & Reinigungsfirma | Taskey",
    description:
      "Rechnungsprogramm für Gebäudereinigung und Reinigungsfirma. Aus Einsatzplan, Nachweisen und Zusatzleistungen entsteht die Rechnung mit einem Klick. GoBD und DSGVO konform, Made in Germany, integriert in Ihre Reinigungssoftware. Kein Zusatztool nötig.",
    ogTitle: "Rechnungsprogramm für Gebäudereinigung | Taskey",
    ogDescription:
      "Rechnungsprogramm Gebäudereinigung: aus Einsatzplan und Leistungsnachweis entsteht die Rechnung mit einem Klick. GoBD konform.",
    twitterTitle: "Rechnungsprogramm für Gebäudereinigung",
    twitterDescription:
      "Rechnungsprogramm für Reinigungsfirma. Aus Einsatzplan und Nachweis wird die Rechnung. GoBD konform.",
  },
  en: {
    title: "Cleaning invoicing software · invoicing software for cleaning business | Taskey",
    description:
      "Cleaning invoicing software integrated with scheduling, proof of service and add-on tickets. Invoices generate from what actually happened on site, not from re-typed spreadsheets. Invoicing software for cleaning business with audit trail, VAT logic and DATEV export.",
    ogTitle: "Cleaning invoicing software | Taskey",
    ogDescription:
      "Invoicing software for cleaning business. Invoices generate from schedule and proof of service in one click.",
    twitterTitle: "Cleaning invoicing software",
    twitterDescription:
      "Invoicing software for cleaning business, integrated with proof of service and scheduling.",
  },
  fr: {
    title: "Logiciel de facturation pour entreprise de nettoyage | Taskey",
    description:
      "Logiciel de facturation intégré pour les entreprises de nettoyage et de propreté. Les factures se génèrent à partir du planning, des preuves de prestation et des tickets additionnels, en un clic. Piste d'audit, logique TVA et export DATEV. Fait partie de votre logiciel de nettoyage, sans outil supplémentaire.",
    ogTitle: "Logiciel de facturation pour entreprise de nettoyage | Taskey",
    ogDescription:
      "Facturation intégrée pour entreprise de nettoyage. Les factures partent du planning et de la preuve de prestation.",
    twitterTitle: "Logiciel de facturation pour entreprise de nettoyage",
    twitterDescription:
      "Facturation intégrée : la facture part du planning et de la preuve de prestation.",
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
    eyebrow: "Rechnungsprogramm",
    h1: "Rechnungsprogramm für Gebäudereinigung",
    h1Accent: "Rechnungen aus dem Einsatzplan, nicht aus Excel.",
    lead:
      "In Taskey entsteht die Rechnung aus dem, was tatsächlich am Objekt passiert ist. Einsatzplan, Leistungsnachweis, Zusatzleistungen und Wartungsvertrag fließen automatisch in den Rechnungslauf. Kein Umtippen, kein Vergessen, kein Zweitsystem.",
    problemH2: "Warum das klassische Rechnungsprogramm für Reinigungsfirmen bremst",
    problemBody:
      "In vielen Reinigungsbetrieben laufen zwei getrennte Welten. Auf der einen Seite die operative Steuerung mit Dienstplänen, Objekten und Nachweisen. Auf der anderen Seite ein separates Rechnungsprogramm, in dem monatlich die gleichen Objektdaten neu getippt werden. Zusatzleistungen aus Tickets werden vergessen, Wartungsverträge laufen an einer anderen Stelle, die Rechnung geht drei Wochen später raus. Ein Rechnungsprogramm für Gebäudereinigung, das die operative Realität nicht kennt, ist im Grunde eine bessere Schreibmaschine.",
    howH2: "So läuft der Rechnungslauf in Taskey",
    howIntro:
      "Das Rechnungsprogramm ist keine Insel. Es liest die Daten, die ohnehin im Betrieb entstehen.",
    steps: [
      {
        title: "1. Vertrag hinterlegen",
        body: "Pro Objekt legen Sie den Wartungsvertrag mit Rhythmus, Preis und Leistungsverzeichnis ab. Taskey weiß, was pro Monat gehört.",
      },
      {
        title: "2. Leistung entsteht am Objekt",
        body: "NFC-Nachweise, Zusatzleistungen aus Tickets und Sonderreinigungen werden automatisch dem Objekt zugeordnet und für die Rechnung markiert.",
      },
      {
        title: "3. Rechnungslauf mit einem Klick",
        body: "Am Monatsende starten Sie den Rechnungslauf. Taskey erzeugt PDF-Rechnungen mit Positionen aus Wartungsvertrag und Zusatzleistungen, versendet sie per E-Mail und legt sie im Kundenportal ab.",
      },
      {
        title: "4. Kontrolle und DATEV-Export",
        body: "Offene Posten sehen Sie im Dashboard. Buchungsdaten exportieren Sie im DATEV-Standardformat direkt an Ihren Steuerberater.",
      },
    ],
    benefitsH2: "Was ein integriertes Rechnungsprogramm für Gebäudereinigung bringt",
    benefits: [
      {
        title: "Zusatzleistungen gehen nicht mehr verloren",
        body: "Jedes Ticket aus dem Objekt landet automatisch als Rechnungsposition. Bislang unentdeckte Umsätze werden abrechenbar.",
      },
      {
        title: "Rechnungen gehen pünktlich raus",
        body: "Der Rechnungslauf dauert Minuten, nicht Tage. Cashflow verschiebt sich zurück in die erste Woche des Monats.",
      },
      {
        title: "Ein System für Operation und Buchhaltung",
        body: "Rechnungsprogramm, Einsatzplanung und Leistungsnachweis in einer Software. Kein doppeltes Stammdatenmanagement, keine Import-Fehler.",
      },
      {
        title: "Belegfluss für den Steuerberater",
        body: "GoBD-konforme Ablage der Rechnungen und DATEV-Export der Buchungsdaten. Der Steuerberater importiert die Datei ohne Nachbearbeitung.",
      },
    ],
    complianceH2: "GoBD, DSGVO und E-Rechnung",
    complianceBody:
      "Rechnungen werden unveränderbar auf deutschen Servern archiviert, mit revisionssicherem Zeitstempel. Die Ausgabe ist als PDF und als XRechnung/ZUGFeRD möglich, sodass Sie öffentliche Auftraggeber bedienen können. Datenzugriff ist rollenbasiert geschützt.",
    faqH2: "Häufige Fragen zum Rechnungsprogramm",
    faqs: [
      {
        q: "Ist Taskey ein eigenständiges Rechnungsprogramm oder ein Modul?",
        a: "Beides. Sie können Taskey als Rechnungsprogramm für Ihre Reinigungsfirma nutzen, ohne die Einsatzplanung. Sinnvoll wird es aber erst, wenn Rechnungen aus dem operativen System kommen. Dann verschwinden Doppelerfassungen und vergessene Positionen.",
      },
      {
        q: "Kann ich Wartungsverträge automatisch abrechnen lassen?",
        a: "Ja. Pro Objekt hinterlegen Sie den Rhythmus, Preis und die enthaltenen Leistungen. Taskey erzeugt monatlich die Rechnungen aus dem Vertrag heraus.",
      },
      {
        q: "Kann ich XRechnung oder ZUGFeRD ausgeben?",
        a: "Ja. Für öffentliche Auftraggeber und größere Kunden liefert Taskey elektronische Rechnungsformate. Sie können pro Kunde festlegen, ob die Ausgabe als PDF, XRechnung oder ZUGFeRD erfolgt.",
      },
      {
        q: "Wie werden Zusatzleistungen aus Tickets in die Rechnung übernommen?",
        a: "Jedes Ticket kann als abrechenbar markiert werden. Beim nächsten Rechnungslauf für dieses Objekt taucht die Position automatisch mit Beschreibung, Zeit und optional Foto auf.",
      },
      {
        q: "Erfüllt Taskey die GoBD-Anforderungen?",
        a: "Ja. Rechnungen werden unveränderbar archiviert, Zeitstempel sind revisionssicher, Änderungen laufen über Storno und Neuausstellung. Ihr Steuerberater erhält die Daten im DATEV-Standardformat.",
      },
    ],
    ctaH2: "Rechnungen aus dem Einsatzplan, nicht aus Excel",
    ctaBody:
      "Testen Sie Taskey 14 Tage kostenlos. Legen Sie einen Wartungsvertrag an, dokumentieren Sie eine Reinigung, erzeugen Sie die Rechnung mit einem Klick.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen ansehen",
    pricingLabel: "Preise ansehen",
    relatedH2: "Weiter im Cluster Reinigungssoftware",
    related: [
      {
        href: "/features/leistungsnachweis",
        label: "Digitaler Leistungsnachweis",
        desc: "Die Basis jeder abrechenbaren Zusatzleistung.",
      },
      {
        href: "/features/kalkulation",
        label: "Kalkulationssoftware",
        desc: "Vom Angebot zur Rechnung ohne Datensprung.",
      },
      {
        href: "/features/datev-export",
        label: "DATEV-Export",
        desc: "Buchungsdaten direkt zum Steuerberater.",
      },
    ],
    breadcrumbs: [
      { name: "Start", href: "/" },
      { name: "Funktionen", href: "/features" },
      { name: "Rechnungsprogramm", href: "/features/rechnungsprogramm" },
    ],
  },
  en: {
    eyebrow: "Invoicing",
    h1: "Cleaning invoicing software",
    h1Accent: "Invoices out of the schedule, not out of Excel.",
    lead:
      "In Taskey the invoice comes from what actually happened on site. The schedule, proof of service, add-on tickets and maintenance contracts feed the invoice run automatically. No re-typing, no forgetting, no second system.",
    problemH2: "Why a stand-alone invoicing tool holds cleaning companies back",
    problemBody:
      "Many cleaning operators run two separate worlds. Operations with schedules, sites and proof on one side. A stand-alone invoicing program where the same site data is re-typed every month on the other. Add-on work from tickets gets forgotten, maintenance contracts sit somewhere else, the invoice goes out three weeks late. Invoicing software that does not know operations is essentially a better typewriter.",
    howH2: "How the invoice run works in Taskey",
    howIntro: "Invoicing is not an island. It reads the data that already exists in operations.",
    steps: [
      {
        title: "1. Contract on the site",
        body: "For each site you set the maintenance contract with cadence, price and scope. Taskey knows what belongs to each month.",
      },
      {
        title: "2. Service happens on site",
        body: "NFC proof, add-on tickets and special cleans are attached to the site automatically and marked as billable.",
      },
      {
        title: "3. Invoice run in one click",
        body: "At month end you start the invoice run. Taskey produces PDF invoices with lines from contract and add-ons, sends them by email and files them in the client portal.",
      },
      {
        title: "4. Control and DATEV export",
        body: "Open items appear in the dashboard. Booking data exports in the DATEV standard format directly to your accountant.",
      },
    ],
    benefitsH2: "What an integrated invoicing tool brings",
    benefits: [
      {
        title: "Add-ons no longer vanish",
        body: "Every ticket lands as a billable line. Revenue that used to fall through the cracks becomes visible.",
      },
      {
        title: "Invoices go out on time",
        body: "The invoice run takes minutes, not days. Cashflow shifts back into the first week of the month.",
      },
      {
        title: "One system for ops and finance",
        body: "Invoicing, scheduling and proof of service in one tool. No duplicated master data, no import errors.",
      },
      {
        title: "Clean handover for your accountant",
        body: "Audit-safe archive of invoices and DATEV export of booking data. Your accountant imports the file without rework.",
      },
    ],
    complianceH2: "GoBD, GDPR and e-invoicing",
    complianceBody:
      "Invoices are archived immutable on German servers with an audit-grade timestamp. Output supports PDF as well as XRechnung and ZUGFeRD for public and enterprise clients. Data access is role-based.",
    faqH2: "Frequently asked questions",
    faqs: [
      {
        q: "Is Taskey a stand-alone invoicing tool or a module?",
        a: "Both. You can use Taskey as invoicing software for a cleaning business without the scheduling side. It shines when invoices come out of the operational system, because duplicated entry and forgotten items disappear.",
      },
      {
        q: "Can maintenance contracts bill automatically?",
        a: "Yes. For each site you set the cadence, price and included scope. Taskey generates the invoices from the contract every month.",
      },
      {
        q: "Can I output XRechnung or ZUGFeRD?",
        a: "Yes. Taskey supports electronic invoice formats for public and enterprise clients. Output per client can be PDF, XRechnung or ZUGFeRD.",
      },
      {
        q: "How do add-on tickets end up on the invoice?",
        a: "Each ticket can be flagged billable. On the next invoice run for that site the line appears automatically with description, time and optional photo.",
      },
      {
        q: "Does Taskey meet GoBD requirements?",
        a: "Yes. Invoices are archived immutable, timestamps are audit-safe and changes go through credit note and reissue. Your accountant receives the data in the DATEV standard format.",
      },
    ],
    ctaH2: "Invoices out of the schedule, not out of Excel",
    ctaBody:
      "Try Taskey free for 14 days. Set up a maintenance contract, log a clean, produce the invoice in one click.",
    ctaPrimary: "Create free account",
    ctaSecondary: "See all features",
    pricingLabel: "See pricing",
    relatedH2: "More in the cleaning software cluster",
    related: [
      {
        href: "/features/leistungsnachweis",
        label: "Proof of service",
        desc: "The base of every billable add-on.",
      },
      {
        href: "/features/kalkulation",
        label: "Estimating software",
        desc: "From quote to invoice without a data jump.",
      },
      {
        href: "/features/datev-export",
        label: "DATEV export",
        desc: "Booking data straight to your accountant.",
      },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Invoicing", href: "/features/rechnungsprogramm" },
    ],
  },
  fr: {
    eyebrow: "Facturation",
    h1: "Logiciel de facturation pour entreprise de nettoyage",
    h1Accent: "La facture sort du planning, pas d'Excel.",
    lead:
      "Dans Taskey, la facture naît de ce qui s'est réellement passé sur site. Planning, preuve de prestation, tickets additionnels et contrat de maintenance alimentent le lancement de facturation automatiquement. Pas de resaisie, pas d'oubli, pas de second outil.",
    problemH2: "Pourquoi un logiciel de facturation isolé freine les entreprises de propreté",
    problemBody:
      "Beaucoup de sociétés de nettoyage vivent avec deux mondes séparés. D'un côté le pilotage opérationnel avec plannings, sites et preuves. De l'autre un logiciel de facturation isolé où les mêmes données sont ressaisies chaque mois. Les prestations supplémentaires issues de tickets sont oubliées, les contrats de maintenance vivent ailleurs, la facture part trois semaines plus tard. Un logiciel de facturation qui ignore l'opérationnel n'est au fond qu'une meilleure machine à écrire.",
    howH2: "Comment le lancement de facturation fonctionne dans Taskey",
    howIntro:
      "La facturation n'est pas une île. Elle lit les données qui existent déjà dans l'opérationnel.",
    steps: [
      {
        title: "1. Contrat sur le site",
        body: "Pour chaque site vous posez le contrat de maintenance avec fréquence, prix et périmètre. Taskey sait ce qui revient chaque mois.",
      },
      {
        title: "2. La prestation se déroule sur site",
        body: "Preuves NFC, tickets additionnels et interventions spéciales sont rattachés au site et marqués facturables.",
      },
      {
        title: "3. Lancement en un clic",
        body: "En fin de mois vous lancez la facturation. Taskey produit des factures PDF avec les lignes du contrat et des tickets, les envoie par mail et les dépose dans le portail client.",
      },
      {
        title: "4. Contrôle et export DATEV",
        body: "Les créances en cours apparaissent au tableau de bord. Les écritures s'exportent au format DATEV pour votre comptable.",
      },
    ],
    benefitsH2: "Ce qu'apporte un logiciel de facturation intégré au nettoyage",
    benefits: [
      {
        title: "Les prestations additionnelles ne disparaissent plus",
        body: "Chaque ticket devient une ligne facturable. Le chiffre d'affaires oublié redevient visible.",
      },
      {
        title: "Les factures partent à l'heure",
        body: "Le lancement prend des minutes, pas des jours. La trésorerie revient dans la première semaine du mois.",
      },
      {
        title: "Un seul système pour l'opération et la finance",
        body: "Facturation, planning et preuve de prestation dans le même outil. Aucune donnée maître dédoublée, aucune erreur d'import.",
      },
      {
        title: "Un dossier propre pour votre comptable",
        body: "Archivage sécurisé des factures et export des écritures. Votre comptable importe sans retouche.",
      },
    ],
    complianceH2: "Conformité et facturation électronique",
    complianceBody:
      "Les factures sont archivées de façon inaltérable sur des serveurs allemands avec horodatage d'audit. Sortie en PDF, XRechnung ou ZUGFeRD pour donneurs d'ordre publics et grands comptes. Accès protégé par rôle.",
    faqH2: "Questions fréquentes",
    faqs: [
      {
        q: "Taskey est-il un logiciel de facturation autonome ou un module ?",
        a: "Les deux. Vous pouvez utiliser Taskey uniquement pour la facturation. Il prend toute sa valeur quand la facture sort du système opérationnel, car doubles saisies et oublis disparaissent.",
      },
      {
        q: "Les contrats de maintenance sont-ils facturés automatiquement ?",
        a: "Oui. Chaque site porte un contrat avec fréquence, prix et périmètre. Taskey génère les factures mensuelles à partir du contrat.",
      },
      {
        q: "Puis-je émettre en XRechnung ou ZUGFeRD ?",
        a: "Oui. Taskey supporte les formats électroniques pour les donneurs d'ordre publics et les grands comptes. Format défini par client.",
      },
      {
        q: "Comment les tickets deviennent-ils des lignes de facture ?",
        a: "Chaque ticket peut être marqué facturable. Au lancement suivant pour ce site, la ligne apparaît avec description, temps et photo optionnelle.",
      },
      {
        q: "Taskey répond-il aux exigences comptables ?",
        a: "Oui. Factures archivées de façon inaltérable, horodatage sécurisé, modifications par avoir et réémission. Export DATEV pour le comptable.",
      },
    ],
    ctaH2: "La facture sort du planning, pas d'Excel",
    ctaBody:
      "Essayez Taskey 14 jours. Créez un contrat, documentez une prestation, produisez la facture en un clic.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Voir toutes les fonctionnalités",
    pricingLabel: "Voir les tarifs",
    relatedH2: "Autres pages du cluster nettoyage",
    related: [
      {
        href: "/features/leistungsnachweis",
        label: "Preuve de prestation",
        desc: "La base de chaque prestation additionnelle facturable.",
      },
      {
        href: "/features/kalkulation",
        label: "Calcul et devis",
        desc: "Du devis à la facture sans rupture.",
      },
      {
        href: "/features/datev-export",
        label: "Export DATEV",
        desc: "Écritures directement chez votre comptable.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Fonctionnalités", href: "/features" },
      { name: "Facturation", href: "/features/rechnungsprogramm" },
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
      serviceType="Rechnungsprogramm für Gebäudereinigung"
      ldPrefix="rechnungsprogramm"
    />
  );
}
