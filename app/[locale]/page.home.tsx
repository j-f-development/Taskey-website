import Hero from "@/components/home/Hero";
import CommunicationUSP from "@/components/CommunicationUSP";
import AllInOneUSP from "@/components/AllInOneUSP";
import TestimonialReviews from "@/components/schema/TestimonialReviews";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

// Above-the-fold / initial: Hero + CommunicationUSP + AllInOneUSP statisch.
// Alles darunter wird dynamisch nachgeladen für schnellere First Paint / LCP.
const AufEinenBlick = dynamic(() => import("@/components/home/AufEinenBlick"));
const BookMeeting = dynamic(() => import("@/components/home/BookMeeting"));
const IntroVideo = dynamic(() => import("@/components/home/IntroVideo"));
const FeaturePreview = dynamic(() => import("@/components/home/FeaturePreview"));
const LiveMargen = dynamic(() => import("@/components/home/LiveMargen"));
const TaskeyShare = dynamic(() => import("@/components/home/TaskeyShare"));
const TargetAudiences = dynamic(() => import("@/components/TargetAudiences"));
const SoloPackageMention = dynamic(() => import("@/components/home/SoloPackageMention"));
const MigrationPromise = dynamic(() => import("@/components/home/MigrationPromise"));
const Branchen = dynamic(() => import("@/components/home/Branchen"));
const IOSAppSection = dynamic(() => import("@/components/home/iOSAppSection"));
const AblaufSection = dynamic(() => import("@/components/home/AblaufSection"));
const FAQ = dynamic(() => import("@/components/home/FAQ"));

const HOME_COPY: PageCopy = {
  de: {
    title: "Gebäudereinigungssoftware | NFC Zeiterfassung & Live-Margen | Taskey",
    description:
      "Reinigungssoftware Made in Germany: NFC-Zeiterfassung, Einsatzplanung, Live-Margen & Auftraggeber-Portal. DSGVO-konform. Kostenlosen Account erstellen.",
  },
  en: {
    title: "Cleaning management software | NFC time tracking & live margins | Taskey",
    description:
      "Cleaning software made in Germany: NFC time tracking, scheduling, live margins and a client portal. GDPR-compliant. Create your free account.",
  },
  fr: {
    title: "Logiciel de gestion de nettoyage | Pointage NFC & marges en direct | Taskey",
    description:
      "Logiciel de nettoyage made in Germany : pointage NFC, planification, marges en direct et portail client. Conforme RGPD. Créez votre compte gratuit.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: HOME_COPY,
    locale: pickLocale(locale),
    path: "/",
  });
}

const SOFTWARE_DESC: Record<"de" | "en" | "fr", string> = {
  de: "All-in-One Reinigungssoftware für Gebäudereinigung mit NFC-Zeiterfassung, Einsatzplanung, Live-Margen und DATEV-Export.",
  en: "All-in-one cleaning management software with NFC time tracking, scheduling, live margins and DATEV export.",
  fr: "Logiciel de gestion de nettoyage tout-en-un avec pointage NFC, planification, marges en direct et export DATEV.",
};

const FAQ_BY_LOCALE: Record<"de" | "en" | "fr", { q: string; a: string }[]> = {
  de: [
    { q: "Ist Taskey DSGVO-konform?", a: "Ja, Taskey ist vollständig DSGVO-konform. Alle Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen." },
    { q: "Ist die App auch für Mitarbeiter ohne Deutschkenntnisse geeignet?", a: "Absolut. Taskey ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch u.a.) und so einfach gestaltet, dass jeder Mitarbeiter sofort damit arbeiten kann, auch ohne Schulung." },
    { q: "Wie funktioniert der Leistungsnachweis per NFC?", a: "Ihr Mitarbeiter hält das Handy an den NFC-Tag am Objekt oder Werkzeug. Taskey protokolliert automatisch Zeitstempel, GPS-Standort und Mitarbeiter. Sie haben den Nachweis schwarz auf weiß." },
    { q: "Erfüllt Taskey die Mindestlohn-Dokumentationspflicht?", a: "Ja. Die automatische Zeiterfassung dokumentiert alle Arbeitszeiten Mindestlohn-konform. Keine manuellen Stundenzettel, keine Fehler. Alles digital und nachvollziehbar." },
    { q: "Funktioniert die App auch in Kellern und Tiefgaragen (offline)?", a: "Ja, Taskey funktioniert vollständig offline. Alle Daten werden lokal gespeichert und automatisch synchronisiert, sobald wieder Netz vorhanden ist." },
    { q: "Kann ich bestehende Objekte und Mitarbeiterdaten importieren?", a: "Ja, wir importieren alle Ihre Objekte, Mitarbeiter und Verträge für Sie, schlüsselfertig. Das ist unser Done-for-You Setup." },
    { q: "Kann ich Daten exportieren?", a: "Ja, Taskey bietet umfangreiche Export-Funktionen. Zeitdaten und Abrechnungen können als PDF, CSV oder Excel exportiert werden." },
    { q: "Wie schnell kann ich starten?", a: "Sofort nach der Registrierung. Mit unserem Done-for-You Setup ist Ihr kompletter Betrieb in 48 Stunden einsatzbereit." },
    { q: "Wie funktioniert die Schlüsselverwaltung?", a: "Taskey dokumentiert, welcher Mitarbeiter Zugang zu welchem Objekt hat. Per NFC-Tag am Schlüsselkasten wird jede Entnahme und Rückgabe protokolliert." },
    { q: "Was kostet Taskey?", a: "Taskey bietet flexible Preismodelle ab 69 € pro Monat, vom Soloselbstständigen bis zum Großbetrieb. Die Details finden Sie auf der Preisseite." },
  ],
  en: [
    { q: "Is Taskey GDPR-compliant?", a: "Yes, Taskey is fully GDPR-compliant. All data is stored on German servers and transmitted encrypted." },
    { q: "Is the app suitable for employees who don't speak German?", a: "Absolutely. Taskey is multilingual (German, Turkish, Russian, Polish and more) and designed to be simple enough that any team member can use it immediately, no training needed." },
    { q: "How does the NFC proof of service work?", a: "Your team holds their phone against the NFC tag at the site or on a tool. Taskey automatically logs the timestamp, GPS location and employee. You have proof in black and white." },
    { q: "Does Taskey meet the minimum-wage documentation requirements?", a: "Yes. Automatic time tracking documents all working hours in line with German minimum-wage law. No paper timesheets, no errors. Fully digital and auditable." },
    { q: "Does the app also work offline (basements, underground garages)?", a: "Yes, Taskey works fully offline. All data is stored locally and syncs automatically as soon as connectivity returns." },
    { q: "Can I import existing sites and employee data?", a: "Yes, we import all your sites, employees and contracts for you, turnkey. That's our Done-for-You setup." },
    { q: "Can I export data?", a: "Yes, Taskey offers extensive export options. Time data and billing can be exported as PDF, CSV or Excel." },
    { q: "How fast can I get started?", a: "Right after sign-up. With our Done-for-You setup, your entire operation is up and running within 48 hours." },
    { q: "How does key management work?", a: "Taskey documents which employee has access to which site. An NFC tag on the key cabinet logs every pickup and return." },
    { q: "How much does Taskey cost?", a: "Taskey offers flexible plans starting at €69 per month, from solo operators to large enterprises. Details on the pricing page." },
  ],
  fr: [
    { q: "Taskey est-il conforme au RGPD ?", a: "Oui, Taskey est entièrement conforme au RGPD. Toutes les données sont stockées sur des serveurs allemands et transmises de manière chiffrée." },
    { q: "L'application convient-elle aux employés qui ne parlent pas allemand ?", a: "Absolument. Taskey est multilingue (allemand, turc, russe, polonais et plus) et conçu pour être si simple que tout employé peut l'utiliser immédiatement, sans formation." },
    { q: "Comment fonctionne la preuve de service NFC ?", a: "Votre employé approche son téléphone du tag NFC sur le site ou un outil. Taskey enregistre automatiquement l'horodatage, la position GPS et l'employé. Vous avez la preuve noir sur blanc." },
    { q: "Taskey répond-il aux obligations de documentation du salaire minimum ?", a: "Oui. Le pointage automatique documente toutes les heures conformément à la loi. Pas de fiches papier, pas d'erreurs. Tout est numérique et auditable." },
    { q: "L'application fonctionne-t-elle hors ligne (caves, parkings souterrains) ?", a: "Oui, Taskey fonctionne entièrement hors ligne. Les données sont stockées localement et synchronisées dès que le réseau revient." },
    { q: "Puis-je importer mes sites et données employés existants ?", a: "Oui, nous importons tous vos sites, employés et contrats pour vous, clé en main. C'est notre Done-for-You Setup." },
    { q: "Puis-je exporter les données ?", a: "Oui, Taskey offre de nombreuses options d'export. Les données de temps et de facturation s'exportent en PDF, CSV ou Excel." },
    { q: "À quelle vitesse puis-je démarrer ?", a: "Immédiatement après l'inscription. Avec notre Done-for-You Setup, toute votre activité est opérationnelle en 48 heures." },
    { q: "Comment fonctionne la gestion des clés ?", a: "Taskey documente quel employé a accès à quel site. Un tag NFC sur l'armoire à clés enregistre chaque retrait et restitution." },
    { q: "Combien coûte Taskey ?", a: "Taskey propose des forfaits flexibles à partir de 69 €/mois, du travailleur indépendant aux grandes entreprises. Détails sur la page tarifs." },
  ],
};

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const baseUrl = loc === "de" ? "https://www.taskeyapp.com" : `https://www.taskeyapp.com/${loc}`;

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://www.taskeyapp.com#software-home",
    "name": "Taskey",
    "alternateName": ["Taskey App", "Taskey Software"],
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Cleaning Management Software",
    "operatingSystem": "iOS, Android, Web",
    "url": baseUrl,
    "downloadUrl": "https://apps.apple.com/de/app/taskey/id6748812720",
    "installUrl": "https://signup.taskeyapp.com",
    "releaseNotes": "https://www.taskeyapp.com/news",
    "softwareHelp": "https://www.taskeyapp.com/support",
    "screenshot": [
      "https://www.taskeyapp.com/hero-app-mockup.webp",
      "https://www.taskeyapp.com/feature-zeiterfassung.webp",
    ],
    "availableOnDevice": ["iPhone", "iPad", "Android", "Web Browser"],
    "countriesSupported": ["DE", "AT", "CH"],
    "description": SOFTWARE_DESC[loc],
    "inLanguage": [loc === "de" ? "de-DE" : loc === "en" ? "en-US" : "fr-FR", "tr", "ru", "pl"],
    "publisher": {
      "@type": "Organization",
      "name": "Schulz & Stosse GbR",
      "url": "https://www.taskeyapp.com",
    },
    "provider": { "@id": "https://www.taskeyapp.com#organization" },
    "sameAs": [
      "https://apps.apple.com/de/app/taskey/id6748812720",
      "https://www.linkedin.com/company/taskey",
      "https://twitter.com/taskey",
    ],
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "59",
      "highPrice": "249",
      "priceCurrency": "EUR",
      "offerCount": "4",
      "url": "https://www.taskeyapp.com/pricing",
      "priceValidUntil": "2026-12-31",
    },
    "softwareVersion": "2.0",
    "keywords": loc === "de"
      ? "beste Software für Gebäudereiniger, Software Gebäudereinigung, Reinigungssoftware, NFC Zeiterfassung, Einsatzplanung Reinigung, Leistungsnachweis Gebäudereinigung, Software für kleine Reinigungsfirmen, DSGVO Reinigungssoftware, All-in-One Reinigungssoftware, Facility Management Software"
      : loc === "en"
      ? "best cleaning company software, cleaning management software, janitorial software, NFC time tracking, cleaning scheduling, proof of service, DSGVO compliant cleaning software, all-in-one cleaning software, facility management software"
      : "meilleur logiciel entreprise de nettoyage, logiciel de nettoyage, gestion nettoyage, pointage NFC, planification nettoyage, preuve de service, logiciel nettoyage RGPD, logiciel tout-en-un nettoyage, logiciel facility management",
    "featureList": loc === "de"
      ? [
          "NFC-basierter Leistungsnachweis pro Objekt",
          "Automatische Zeiterfassung, Mindestlohn-konform (§17 MiLoG)",
          "Drag-and-drop Einsatzplanung für Kolonnen und Touren",
          "Live-Margen pro Objekt in Echtzeit",
          "DATEV-Export für die Lohnabrechnung",
          "Offline-fähige Mitarbeiter-App für Kellerräume und Tiefgaragen",
          "Mehrsprachig: Deutsch, Türkisch, Russisch, Polnisch u.a.",
          "Auftraggeber-Portal mit Leserechten",
          "Hosting in Deutschland, DSGVO-konform",
        ]
      : loc === "en"
      ? [
          "NFC-based proof of service per site",
          "Automatic time tracking, compliant with German minimum-wage law",
          "Drag-and-drop crew scheduling and routing",
          "Live margins per site in real time",
          "DATEV export for payroll",
          "Offline-capable mobile app for basements and underground garages",
          "Multilingual: German, Turkish, Russian, Polish and more",
          "Client portal with read access",
          "Hosted in Germany, GDPR-compliant",
        ]
      : [
          "Preuve de service NFC par site",
          "Pointage automatique conforme au salaire minimum allemand",
          "Planification drag-and-drop des équipes et tournées",
          "Marges en direct par site",
          "Export DATEV pour la paie",
          "Application mobile hors-ligne pour caves et parkings souterrains",
          "Multilingue : allemand, turc, russe, polonais et plus",
          "Portail client en lecture",
          "Hébergement en Allemagne, conforme RGPD",
        ],
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taskey",
    "legalName": "Schulz & Stosse GbR",
    "url": "https://www.taskeyapp.com",
    "logo": "https://www.taskeyapp.com/logobittt.png",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "In der Acht 44",
      "addressLocality": "Völklingen",
      "postalCode": "66333",
      "addressCountry": "DE",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-151-68488999",
      "email": "info@taskeyapp.com",
      "contactType": "customer service",
      "areaServed": ["DE", "AT", "CH"],
      "availableLanguage": ["German", "English", "French"],
    },
    "founder": [
      { "@type": "Person", "name": "Fynn-Luca Schulz" },
      { "@type": "Person", "name": "Julian Stosse" },
    ],
    "areaServed": ["DE", "AT", "CH"],
    "sameAs": [
      "https://www.linkedin.com/company/taskey",
      "https://twitter.com/taskey",
    ],
  };

  // FAQPage-Schema – per-locale answers
  const GEO_QA: Record<"de" | "en" | "fr", { q: string; a: string }[]> = {
    de: [
      {
        q: "Was ist die beste Software für Gebäudereiniger?",
        a: "Taskey ist eine der führenden All-in-One-Softwarelösungen für Gebäudereinigungsbetriebe im DACH-Raum. Die Plattform bündelt NFC-Leistungsnachweis, Mindestlohn-konforme Zeiterfassung, Einsatzplanung, Live-Margen pro Objekt und DATEV-Export in einer einzigen App. Taskey wird in Deutschland entwickelt und gehostet, ist DSGVO-konform und ab 69 € pro Monat verfügbar. Kostenlosen Account erstellen, ohne Kreditkarte.",
      },
      {
        q: "Welche Software eignet sich für kleine Reinigungsfirmen?",
        a: "Für kleine Reinigungsfirmen und Soloselbstständige ist Taskey das passende System. Das Beginner-Paket startet bei 69 € pro Monat, die Mitarbeiter-App ist mehrsprachig (Deutsch, Türkisch, Russisch, Polnisch), und die Einrichtung dauert unter 10 Minuten. Alternativ übernimmt das Done-for-You-Setup die komplette Konfiguration in 48 Stunden.",
      },
      {
        q: "Welche Reinigungssoftware ist DSGVO-konform?",
        a: "Taskey ist vollständig DSGVO-konform. Alle Daten werden ausschließlich auf deutschen Servern gespeichert und verschlüsselt übertragen. Die Zeiterfassung erfüllt zusätzlich die Mindestlohn-Dokumentationspflicht nach §17 MiLoG sowie das EuGH-Urteil von 2019 zur Arbeitszeiterfassung.",
      },
      {
        q: "Was macht Taskey besser als andere Reinigungssoftware?",
        a: "Taskey unterscheidet sich in vier Punkten: (1) manipulationssicherer NFC-Leistungsnachweis pro Objekt statt reiner Zeiterfassung, (2) Live-Margen in Echtzeit pro Objekt, (3) Offline-Betrieb in Tiefgaragen und Kellerräumen mit automatischer Synchronisation, (4) mehrsprachige Mitarbeiter-App, die ohne Schulung funktioniert. Alles in einem System, statt Einsatzplanung, Zeiterfassung und Abrechnung auf drei bis fünf Tools zu verteilen.",
      },
      {
        q: "Welche Software für die Reinigungsbranche unterstützt NFC-Nachweise?",
        a: "Taskey bietet als eine der wenigen Lösungen im DACH-Raum einen vollintegrierten NFC-Objektnachweis. Ein NFC-Tag am Objekt oder Schlüsselkasten wird per Handy gescannt, Taskey protokolliert Zeitstempel, GPS-Standort und Mitarbeiter automatisch. Damit ist der Nachweis der erbrachten Leistung rechtssicher und manipulationsgeschützt.",
      },
    ],
    en: [
      {
        q: "What is the best software for cleaning companies?",
        a: "Taskey is one of the leading all-in-one software solutions for cleaning businesses in the DACH region. The platform combines NFC proof of service, minimum-wage-compliant time tracking, scheduling, real-time margins per site and DATEV export in a single app. Taskey is built and hosted in Germany, GDPR-compliant, and starts at €69 per month. Create your free account, no credit card required.",
      },
      {
        q: "Which software is right for small cleaning companies?",
        a: "For small cleaning companies and solo operators, Taskey is the right fit. The Beginner plan starts at €69 per month, the mobile app is multilingual (German, Turkish, Russian, Polish), and setup takes under 10 minutes. The optional Done-for-You setup takes over the entire configuration within 48 hours.",
      },
      {
        q: "Which cleaning software is GDPR-compliant?",
        a: "Taskey is fully GDPR-compliant. All data is stored exclusively on German servers and transmitted encrypted. Time tracking also meets German minimum-wage documentation requirements under §17 MiLoG and the 2019 EU court ruling on working-time records.",
      },
      {
        q: "What makes Taskey better than other cleaning software?",
        a: "Taskey stands out on four points: (1) tamper-proof NFC proof of service per site instead of plain time tracking, (2) real-time margins per site, (3) offline operation in basements and underground garages with automatic sync, (4) a multilingual mobile app that works without training. Everything in one system, rather than spreading scheduling, time tracking and billing across three to five tools.",
      },
      {
        q: "Which cleaning industry software supports NFC proof of service?",
        a: "Taskey is one of the few DACH-region solutions with a fully integrated NFC proof of service. An NFC tag on the site or key cabinet is scanned by phone, Taskey automatically logs timestamp, GPS location and employee. The proof of service is legally sound and tamper-protected.",
      },
    ],
    fr: [
      {
        q: "Quel est le meilleur logiciel pour une entreprise de nettoyage ?",
        a: "Taskey est l'une des principales solutions tout-en-un pour les entreprises de nettoyage dans la région DACH. La plateforme combine preuve de service NFC, pointage conforme au salaire minimum, planification, marges en temps réel par site et export DATEV dans une seule application. Taskey est développé et hébergé en Allemagne, conforme RGPD, à partir de 69 € par mois. Créez votre compte gratuit, sans carte bancaire.",
      },
      {
        q: "Quel logiciel convient aux petites entreprises de nettoyage ?",
        a: "Pour les petites entreprises et les travailleurs indépendants, Taskey est la solution adaptée. Le forfait Beginner démarre à 69 € par mois, l'application mobile est multilingue (allemand, turc, russe, polonais) et la mise en place prend moins de 10 minutes. Le Done-for-You Setup prend en charge la configuration complète en 48 heures.",
      },
      {
        q: "Quel logiciel de nettoyage est conforme au RGPD ?",
        a: "Taskey est entièrement conforme au RGPD. Toutes les données sont stockées exclusivement sur des serveurs allemands et transmises de manière chiffrée. Le pointage répond également à la loi allemande sur le salaire minimum (§17 MiLoG) et à l'arrêt de la CJUE de 2019 sur l'enregistrement du temps de travail.",
      },
      {
        q: "Qu'est-ce qui distingue Taskey des autres logiciels de nettoyage ?",
        a: "Taskey se distingue sur quatre points : (1) preuve de service NFC infalsifiable par site au lieu d'un simple pointage, (2) marges en temps réel par site, (3) fonctionnement hors ligne en caves et parkings souterrains avec synchronisation automatique, (4) application mobile multilingue qui fonctionne sans formation. Tout dans un seul système, au lieu de répartir planification, pointage et facturation sur trois à cinq outils.",
      },
      {
        q: "Quel logiciel pour entreprise de nettoyage prend en charge la preuve NFC ?",
        a: "Taskey est l'une des rares solutions de la région DACH avec une preuve de service NFC entièrement intégrée. Un tag NFC sur le site ou l'armoire à clés est scanné par téléphone, Taskey enregistre automatiquement l'horodatage, la position GPS et l'employé. La preuve est juridiquement solide et protégée contre la manipulation.",
      },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": loc === "de" ? "de-DE" : loc === "en" ? "en-US" : "fr-FR",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "h2", ".faq-question", ".faq-answer"],
    },
    "mainEntity": [...GEO_QA[loc], ...FAQ_BY_LOCALE[loc]].map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
      },
    })),
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": loc === "fr" ? "Accueil" : loc === "en" ? "Home" : "Home",
        "item": baseUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <TestimonialReviews />
      <main>
        {/* 1. Hook: Hero (Wert-Versprechen + CTA) */}
        <Hero />

        {/* 1a. Direkter Weg zum Kennenlerngespräch — Calendly */}
        <BookMeeting />

        {/* 1b. End-State-Sektion: das Gefühl, alles im Griff zu haben */}
        <AufEinenBlick />

        {/* 1c. Einstiegsvideo: kurzer Software-Überblick */}
        <IntroVideo />

        {/* 2. Kern-USP #1: Kommunikation Feld ↔ Büro (zentraler Schmerz) */}
        <CommunicationUSP variant="full" />

        {/* 3. Kern-USP #2: Alles in einem System statt 5 Abos */}
        <AllInOneUSP variant="dark" />

        {/* 3aa. Migrations-Versprechen: Uploadlink, 48h Umzug, sofort produktiv */}
        <MigrationPromise />

        {/* 3a. Kleine Erwähnung: neues Einzelunternehmer-Paket → /pricing */}
        <SoloPackageMention />

        {/* 4. Soziale Validierung: Für wen ist Taskey? */}
        <TargetAudiences variant="dark" />

        {/* 5. Testimonials aus der Reinigungsbranche */}
        <Branchen />

        {/* 6. Produkt-Show: konkrete Features im Einsatz */}
        <FeaturePreview />

        {/* 7. Money-Argument: Live-Margen → harter ROI-Beweis */}
        <LiveMargen />

        {/* 8. Auftraggeber-Portal: differenzierendes USP */}
        <TaskeyShare />

        {/* 10. Mobile App: Alltag des Teams */}
        <IOSAppSection />

        {/* 10a. Ablauf: 4 Schritte vom Kennenlernen bis zum Tarif */}
        <AblaufSection />

        {/* 11. Einwände abbauen */}
        <FAQ />
      </main>
    </>
  );
}
