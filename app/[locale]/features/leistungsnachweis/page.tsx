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

const path = "/features/leistungsnachweis";

const COPY: PageCopy = {
  de: {
    title: "Leistungsnachweis für die Gebäudereinigung | Taskey",
    description:
      "Digitaler Leistungsnachweis für Reinigungsbetriebe. NFC-Scan, Zeit, Ort und Foto pro Objekt. Der Auftraggeber sieht die Leistung direkt im Portal. DSGVO konform, Made in Germany.",
    ogTitle: "Leistungsnachweis für die Gebäudereinigung | Taskey",
    ogDescription:
      "NFC, Zeit, Ort, Foto pro Objekt. Der Auftraggeber sieht die Leistung im Portal.",
    twitterTitle: "Leistungsnachweis für die Gebäudereinigung",
    twitterDescription:
      "NFC, Zeit, Ort, Foto. Der Auftraggeber sieht die Leistung direkt.",
  },
  en: {
    title: "Proof of service for commercial cleaning | Taskey",
    description:
      "Digital proof of service for cleaning operations. NFC scan, time, place and photo per site. Clients see the service directly in the portal. GDPR compliant.",
    ogTitle: "Proof of service for commercial cleaning | Taskey",
    ogDescription: "NFC, time, place, photo per site. Clients see the service in the portal.",
    twitterTitle: "Proof of service for commercial cleaning",
    twitterDescription: "NFC, time, place, photo. Clients see the service directly.",
  },
  fr: {
    title: "Preuve de prestation pour le nettoyage | Taskey",
    description:
      "Preuve de prestation numérique pour les entreprises de nettoyage. Scan NFC, heure, lieu et photo par site. Le client voit la prestation dans le portail. Conforme RGPD.",
    ogTitle: "Preuve de prestation pour le nettoyage | Taskey",
    ogDescription: "NFC, heure, lieu, photo par site. Le client voit la prestation.",
    twitterTitle: "Preuve de prestation pour le nettoyage",
    twitterDescription: "NFC, heure, lieu, photo. Le client voit la prestation.",
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
    eyebrow: "Leistungsnachweis",
    h1: "Leistungsnachweis für die Gebäudereinigung",
    h1Accent: "Vom NFC-Scan bis zum lesbaren Report. Ohne Papier.",
    lead:
      "Jede Reinigung ist automatisch mit Zeit, Ort, Person und optional Foto dokumentiert. Der Auftraggeber sieht die Leistung im eigenen Portal, in Echtzeit. Reklamationen fallen weg, weil die Antwort schon da ist.",
    problemH2: "Warum Papier-Nachweise Kunden verlieren",
    problemBody:
      "Unterschriebene Reinigungslisten hängen im Putzraum, gehen verloren oder werden nachträglich ausgefüllt. Auftraggeber vertrauen dem nicht mehr. In Ausschreibungen wird digitale, manipulationssichere Dokumentation zunehmend Voraussetzung.",
    howH2: "So entsteht der digitale Leistungsnachweis",
    howIntro:
      "Der Nachweis ist ein Nebenprodukt der laufenden Reinigung. Kein zusätzlicher Aufwand für das Team.",
    steps: [
      {
        title: "1. NFC-Scan am Objekt",
        body: "Der Scan am Objekt-Tag setzt Zeit, Ort, Person. Beweis, dass jemand vor Ort war.",
      },
      {
        title: "2. Optionales Foto",
        body: "Reinigungsleitung kann pro Objekt Fotopflicht setzen. Vor und nach der Reinigung, oder nur nach Bedarf.",
      },
      {
        title: "3. Ticket bei Auffälligkeit",
        body: "Findet der Mitarbeiter etwas Ungewöhnliches, öffnet er in einem Tap ein Ticket mit Foto. Das Büro sieht es sofort.",
      },
      {
        title: "4. Report für den Auftraggeber",
        body: "Alle Nachweise landen in einem Report pro Objekt und Zeitraum. Auftraggeber sieht es im Portal oder als PDF.",
      },
    ],
    benefitsH2: "Was der digitale Leistungsnachweis bringt",
    benefits: [
      {
        title: "Weniger Reklamationen",
        body: "Wenn der Kunde fragt, ob heute gereinigt wurde, sehen Sie es und antworten in Sekunden.",
      },
      {
        title: "Wettbewerbsvorteil in Ausschreibungen",
        body: "Große Auftraggeber verlangen digitale Nachweise. Sie können liefern, andere nicht.",
      },
      {
        title: "Bessere Preise durchsetzen",
        body: "Wer Leistung transparent macht, kann Preise besser verhandeln.",
      },
      {
        title: "Interner Qualitätsspiegel",
        body: "Objekte mit häufigen Auffälligkeiten oder Nachbesserungen fallen auf. Sie steuern gezielt.",
      },
    ],
    complianceH2: "DSGVO und Beweiskraft",
    complianceBody:
      "Die Nachweise werden auf deutschen Servern gespeichert, verschlüsselt übertragen und mit Zugriffskontrolle geschützt. Fotos sind rollenbasiert freigegeben. Beweiskraft im Streitfall entsteht durch Zeitstempel, Geokoordinaten und Personenzuordnung.",
    faqH2: "Häufige Fragen zum Leistungsnachweis",
    faqs: [
      {
        q: "Muss der Auftraggeber sich registrieren?",
        a: "Nein. Taskey Share liefert einen Live-Link ins Kundenportal ohne Login. Der Auftraggeber sieht Leistungen, offene Tickets und Rechnungen.",
      },
      {
        q: "Kann ich Fotos verpflichtend machen?",
        a: "Ja, pro Objekt oder Reinigungsart. Ohne Foto lässt sich die Reinigung nicht abschließen.",
      },
      {
        q: "Was passiert bei Datenschutzanfragen von Mitarbeitern?",
        a: "Rechte sind in Taskey abgebildet. Auskunft, Löschung, Widerspruch. DSGVO-Rechte sind ohne Extra-Tool erfüllbar.",
      },
      {
        q: "Kann der Nachweis als PDF exportiert werden?",
        a: "Ja. Monatsreport, Quartalsreport oder freier Zeitraum, als PDF, CSV oder Excel.",
      },
      {
        q: "Fließen Tickets in Rechnungen ein?",
        a: "Ja. Zusatzleistungen aus Tickets können automatisch in die nächste Rechnung übernommen werden.",
      },
    ],
    ctaH2: "Machen Sie den Nachweis zum Verkaufsargument",
    ctaBody:
      "Erstellen Sie einen kostenlosen Account, kleben Sie einen NFC-Tag an ein Objekt, schalten Sie den Live-Link für Ihren Kunden frei.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen ansehen",
    pricingLabel: "Preise ansehen",
    relatedH2: "Weiter im Cluster Gebäudereinigungssoftware",
    related: [
      {
        href: "/features/nfc-zeiterfassung",
        label: "NFC Zeiterfassung",
        desc: "Die Grundlage für jeden digitalen Nachweis.",
      },
      {
        href: "/features/taskey-share",
        label: "Taskey Share",
        desc: "Der Live-Link für Ihren Auftraggeber, ohne Login.",
      },
      {
        href: "/features/einsatzplanung",
        label: "Einsatzplanung",
        desc: "Sollzeiten und Nachweise passen zusammen.",
      },
    ],
    breadcrumbs: [
      { name: "Start", href: "/" },
      { name: "Funktionen", href: "/features" },
      { name: "Leistungsnachweis", href: "/features/leistungsnachweis" },
    ],
  },
  en: {
    eyebrow: "Proof of service",
    h1: "Proof of service for commercial cleaning",
    h1Accent: "From NFC scan to client-ready report. No paper.",
    lead:
      "Every clean is automatically documented with time, place, person and optionally a photo. Clients see the service in their own portal, in real time. Complaints disappear because the answer is already there.",
    problemH2: "Why paper proofs lose clients",
    problemBody:
      "Signed cleaning sheets hang in the store room, get lost, or are filled in later. Clients no longer trust them. Tenders increasingly require digital, tamper-resistant documentation.",
    howH2: "How the digital proof is created",
    howIntro: "Proof is a byproduct of the running cleaning. No extra work for the team.",
    steps: [
      { title: "1. NFC scan on site", body: "The scan sets time, place, person." },
      { title: "2. Optional photo", body: "Photo requirement can be enforced per site." },
      { title: "3. Ticket on anomaly", body: "Team can open a ticket with a photo in one tap." },
      { title: "4. Client report", body: "All proofs consolidate into a report per site and period." },
    ],
    benefitsH2: "What digital proof brings",
    benefits: [
      { title: "Fewer complaints", body: "If the client asks, you answer in seconds." },
      { title: "Advantage in tenders", body: "Large clients require digital proof. You deliver." },
      { title: "Better prices", body: "Transparent service supports pricing power." },
      { title: "Internal quality mirror", body: "Sites with frequent anomalies stand out." },
    ],
    complianceH2: "Privacy and evidentiary value",
    complianceBody:
      "Proofs live on German servers, encrypted, access-controlled. Timestamps, geo and person mapping deliver evidentiary weight.",
    faqH2: "Frequently asked questions",
    faqs: [
      { q: "Does the client need to register?", a: "No. Taskey Share provides a live link without login." },
      { q: "Can photos be mandatory?", a: "Yes, per site or cleaning type." },
      { q: "How are employee GDPR requests handled?", a: "Access, deletion and objection are mapped in Taskey." },
      { q: "Can the proof be exported as PDF?", a: "Yes, per month, quarter or custom range." },
      { q: "Do tickets flow into invoices?", a: "Yes, add-on work can be picked up automatically." },
    ],
    ctaH2: "Turn proof into a sales argument",
    ctaBody: "Create a free account, tag a site, share the live link with your client.",
    ctaPrimary: "Create free account",
    ctaSecondary: "See all features",
    pricingLabel: "See pricing",
    relatedH2: "More in the cluster",
    related: [
      { href: "/features/nfc-zeiterfassung", label: "NFC time tracking", desc: "The base for every digital proof." },
      { href: "/features/taskey-share", label: "Taskey Share", desc: "The live link for your client, no login." },
      { href: "/features/einsatzplanung", label: "Scheduling", desc: "Plan and proof fit together." },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "Proof of service", href: "/features/leistungsnachweis" },
    ],
  },
  fr: {
    eyebrow: "Preuve de prestation",
    h1: "Preuve de prestation pour le nettoyage",
    h1Accent: "Du scan NFC au rapport client. Sans papier.",
    lead:
      "Chaque prestation est documentée automatiquement avec heure, lieu, personne et photo optionnelle. Le client voit la prestation dans son portail.",
    problemH2: "Pourquoi les preuves papier perdent des clients",
    problemBody:
      "Les feuilles se perdent ou sont remplies après coup. Les clients ne font plus confiance. Les appels d’offres exigent de plus en plus la preuve numérique.",
    howH2: "Comment la preuve numérique est créée",
    howIntro: "La preuve est un sous-produit de la prestation en cours.",
    steps: [
      { title: "1. Scan NFC sur site", body: "Heure, lieu, personne." },
      { title: "2. Photo en option", body: "Peut être obligatoire par site." },
      { title: "3. Ticket en cas d’anomalie", body: "En un tap avec photo." },
      { title: "4. Rapport client", body: "Consolidé par site et période." },
    ],
    benefitsH2: "Ce que la preuve apporte",
    benefits: [
      { title: "Moins de réclamations", body: "Vous répondez en secondes." },
      { title: "Avantage en appel d’offres", body: "La preuve numérique est requise." },
      { title: "Meilleurs prix", body: "La transparence soutient la négociation." },
      { title: "Miroir qualité interne", body: "Les sites problématiques ressortent." },
    ],
    complianceH2: "RGPD et valeur probante",
    complianceBody:
      "Preuves sur serveurs allemands, chiffrées, contrôlées par rôle. Horodatage, géolocalisation et personne pour la valeur probante.",
    faqH2: "Questions fréquentes",
    faqs: [
      { q: "Le client doit-il s’inscrire ?", a: "Non, Taskey Share fournit un lien direct." },
      { q: "Photos obligatoires ?", a: "Oui, par site." },
      { q: "Demandes RGPD des employés ?", a: "Accès, suppression, opposition intégrés." },
      { q: "Export PDF ?", a: "Oui, mensuel, trimestriel ou libre." },
      { q: "Tickets dans les factures ?", a: "Oui, automatiquement." },
    ],
    ctaH2: "Faites de la preuve un argument commercial",
    ctaBody: "Créez un compte, taguez un site, partagez le lien avec votre client.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Voir toutes les fonctionnalités",
    pricingLabel: "Voir les tarifs",
    relatedH2: "Autres pages du cluster",
    related: [
      { href: "/features/nfc-zeiterfassung", label: "Pointage NFC", desc: "La base de la preuve." },
      { href: "/features/taskey-share", label: "Taskey Share", desc: "Le lien direct pour votre client." },
      { href: "/features/einsatzplanung", label: "Planification", desc: "Prévu et preuve alignés." },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Fonctionnalités", href: "/features" },
      { name: "Preuve de prestation", href: "/features/leistungsnachweis" },
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
      serviceType="Digitaler Leistungsnachweis Gebäudereinigung"
      ldPrefix="leistungsnachweis"
    />
  );
}
