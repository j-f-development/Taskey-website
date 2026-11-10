import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignupButton from "@/components/landing/SignupButton";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";

const path = "/erstgespraech";

const COPY: PageCopy = {
  de: {
    title: "Erstgespräch Taskey · 30 Min Live-Demo buchen",
    description:
      "30 Minuten Live-Demo der Gebäudereinigungs-Software: NFC-Zeiterfassung, Einsatzplanung, Nachweise, DATEV-Export. Termin direkt im Kalender buchen.",
  },
  en: {
    title: "Taskey discovery call · 30-min live demo",
    description:
      "30-minute live demo of the cleaning operations software: NFC time tracking, scheduling, proof of service, DATEV export. Book a slot directly.",
  },
  fr: {
    title: "Échange Taskey · démo live 30 minutes",
    description:
      "Démo live de 30 minutes du logiciel de propreté : pointage NFC, planning, preuves, export DATEV. Réservez un créneau directement.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path });
}

type Block = {
  eyebrow: string;
  h1: string;
  lead: string;
  heroAlt: string;
  bookH2: string;
  bookBody: string;
  agendaH2: string;
  agenda: { title: string; body: string; image: string; alt: string }[];
  signupH2: string;
  signupBody: string;
  signupCta: string;
  bookCta: string;
  relatedH2: string;
  relatedLinks: { label: string; href: string; body: string }[];
  faqH2: string;
  faq: { q: string; a: string }[];
  ctaNote: string;
};

const BODY: Record<Locale, Block> = {
  de: {
    eyebrow: "Erstgespräch",
    h1: "30 Minuten Live-Demo von Taskey.",
    lead:
      "Live-Demo der Software, zugeschnitten auf Ihre Objekte, Ihr Team und Ihre Prozesse. Alternativ erstellen Sie direkt einen kostenlosen Account und arbeiten sofort im Workspace.",
    heroAlt:
      "Erstgespräch Taskey · Live-Demo der Gebäudereinigungs-Software für Facility-Service-Betriebe",
    bookH2: "Termin direkt im Kalender buchen",
    bookBody:
      "Wählen Sie einen Slot im Kalender. Antwort werktags innerhalb von 24 Stunden, in der Regel noch am selben Tag.",
    agendaH2: "Agenda für das Erstgespräch",
    agenda: [
      {
        title: "Ihr Betrieb",
        body:
          "Kurze Standortaufnahme. Objekte, Teamgröße, Auftraggeberstruktur und bestehende Systeme.",
        image: "/sections/transparenz-kunde.png",
        alt: "Standortaufnahme eines Gebäudereinigungs-Betriebs im Erstgespräch mit Taskey",
      },
      {
        title: "Live-Demo mit Ihren Daten",
        body:
          "Wir öffnen einen Testworkspace mit Beispielobjekten in Ihrer Struktur. NFC-Zeiterfassung, Einsatzplanung, Angebote, Rechnungen und Kundenportal im realen Flow.",
        image: "/sections/einsatzplanung.png",
        alt: "Live-Demo der Taskey-Einsatzplanung mit Beispielobjekten eines Gebäudereinigers",
      },
      {
        title: "Rollout und Integration",
        body:
          "Wir klären, ob und wie SSO, DATEV, HR und ERP eingebunden werden. Konkreter Rollout-Plan am Ende des Calls.",
        image: "/sections/datev-export.webp",
        alt: "Integration von DATEV, SSO, HR und ERP in Taskey besprechen",
      },
      {
        title: "Nächster Schritt",
        body:
          "Account erstellen und loslegen oder Pilot auf zwei bis drei Objekten. Keine Entscheidung im Call nötig.",
        image: "/sections/nachweisbarkeit.png",
        alt: "Nächster Schritt nach dem Taskey-Erstgespräch · Account anlegen oder Pilot starten",
      },
    ],
    signupH2: "Direkt im Workspace starten",
    signupBody:
      "Der schnellste Weg ins System: Account anlegen und direkt im Workspace arbeiten. Objekte, Teams, erste Einsätze und Nachweise sind in unter zehn Minuten live.",
    signupCta: "Kostenlosen Account erstellen",
    bookCta: "Erstgespräch buchen",
    relatedH2: "Verwandte Themen",
    relatedLinks: [
      { label: "Kostenlos starten", href: "/kostenlos-starten", body: "Account anlegen und direkt im Workspace arbeiten, ohne Call." },
      { label: "Alle Funktionen", href: "/features", body: "Einsatzplanung, Zeiterfassung, Angebote, Rechnungen und Kundenportal." },
      { label: "Preise", href: "/pricing", body: "Alle Pläne, inklusive der kostenlosen Variante und Enterprise-Konditionen." },
      { label: "Enterprise", href: "/erstgespraech", body: "SSO, RBAC, Audit Log, REST API, Webhooks und native ERP-Integration." },
    ],
    faqH2: "Häufige Fragen zum Erstgespräch",
    faq: [
      {
        q: "Was wird im Erstgespräch gezeigt?",
        a:
          "Live-Demo an Beispielobjekten in Ihrer Struktur: Einsatz anlegen, Mitarbeitende disponieren, NFC-Scan am Objekt, Nachweis und Rechnung. Technische Fragen zu NFC, SSO, DATEV, API oder Hosting werden direkt beantwortet.",
      },
      {
        q: "Muss ich mich für Taskey entscheiden, wenn ich einen Termin buche?",
        a:
          "Nein. Unverbindlich. Nach dem Call entscheiden Sie in Ruhe und können jederzeit einen kostenlosen Account anlegen.",
      },
      {
        q: "Wie läuft die Demo konkret ab?",
        a:
          "Wir öffnen einen Testworkspace, legen Beispielobjekte in Ihrer Struktur an und zeigen den Alltag: Einsatz anlegen, Mitarbeitende disponieren, am Objekt per NFC einstempeln, Nachweis und Rechnung erzeugen.",
      },
      {
        q: "Was ist, wenn ich jetzt schon einfach loslegen möchte?",
        a:
          "Dann erstellen Sie oben einen kostenlosen Account. Workspace wird in Sekunden provisioniert, Mobile App und Login sind sofort nutzbar. Das Erstgespräch ist dann nicht nötig.",
      },
      {
        q: "Welche Objektgrößen deckt Taskey ab?",
        a:
          "Taskey wird eingesetzt in Betrieben zwischen 10 und 1.000+ Mitarbeitenden. Für die Enterprise-Spur gibt es SSO, RBAC, Audit Log, REST API und native ERP-Integration.",
      },
      {
        q: "Welche Branchen deckt Taskey ab?",
        a:
          "Unterhaltsreinigung, Glasreinigung, Industriereinigung, Klinikreinigung, Hotel-Housekeeping, Bauendreinigung und Facility Management im DACH-Raum.",
      },
    ],
    ctaNote: "Unverbindlich. Keine Kreditkarte. 30 Minuten reichen.",
  },
  en: {
    eyebrow: "Discovery call",
    h1: "A 30-minute Taskey live demo.",
    lead:
      "Live demo tailored to your sites, your team and your processes. Alternatively create a free account and work in the workspace right away.",
    heroAlt:
      "Taskey discovery call · live demo of cleaning operations software for facility-service operators",
    bookH2: "Pick a slot in the calendar",
    bookBody:
      "Choose a slot in the calendar. Reply within 24 hours on business days, usually the same day.",
    agendaH2: "Discovery call agenda",
    agenda: [
      {
        title: "Your operation",
        body:
          "Short snapshot. Sites, team size, client structure and existing systems.",
        image: "/sections/transparenz-kunde.png",
        alt: "Snapshot of a cleaning operation on a Taskey discovery call",
      },
      {
        title: "Live demo with your data",
        body:
          "We open a test workspace with example sites in your structure. NFC time tracking, scheduling, quotes, invoicing and client portal in the real flow.",
        image: "/sections/einsatzplanung.png",
        alt: "Live demo of Taskey scheduling with example sites of a cleaning operator",
      },
      {
        title: "Rollout and integration",
        body:
          "SSO, DATEV, HR and ERP integration options. Concrete rollout plan by the end of the call.",
        image: "/sections/datev-export.webp",
        alt: "Discussing DATEV, SSO, HR and ERP integration with Taskey",
      },
      {
        title: "Next step",
        body:
          "Create an account and start, or run a pilot on two or three sites. No decision required in the call.",
        image: "/sections/nachweisbarkeit.png",
        alt: "Next step after a Taskey discovery call · create an account or run a pilot",
      },
    ],
    signupH2: "Straight into the workspace",
    signupBody:
      "Fastest path into the system: create an account and work in the workspace. Sites, teams, first assignments and proof of service are live in under ten minutes.",
    signupCta: "Create free account",
    bookCta: "Book a discovery call",
    relatedH2: "Related topics",
    relatedLinks: [
      { label: "Start for free", href: "/kostenlos-starten", body: "Create an account and work in the workspace right away, without a call." },
      { label: "All features", href: "/features", body: "Scheduling, time tracking, quotes, invoicing and the client portal." },
      { label: "Pricing", href: "/pricing", body: "All plans including the free tier and enterprise terms." },
      { label: "Enterprise", href: "/erstgespraech", body: "SSO, RBAC, audit log, REST API, webhooks and native ERP integration." },
    ],
    faqH2: "Frequently asked about the discovery call",
    faq: [
      {
        q: "What is shown in the call?",
        a:
          "A live demo on example sites mapped to your structure: create an assignment, dispatch staff, NFC scan on site, generate proof of service and invoice. Technical questions on NFC, SSO, DATEV, API or hosting are answered directly.",
      },
      {
        q: "Do I have to commit if I book a call?",
        a:
          "No. The call is non-binding. You decide afterwards and can create a free account whenever you like.",
      },
      {
        q: "How does the demo work?",
        a:
          "We open a test workspace, add example sites in your structure and run the day-to-day: create an assignment, dispatch staff, scan NFC on site, generate proof of service and invoice.",
      },
      {
        q: "What if I just want to start now?",
        a:
          "Create a free account above. The workspace is provisioned in seconds, the mobile app and login are immediately usable. The discovery call is optional.",
      },
      {
        q: "Which operation sizes does Taskey fit?",
        a:
          "Taskey runs in operations between 10 and 1,000+ staff. Enterprise plans include SSO, RBAC, audit log, REST API and native ERP integration.",
      },
      {
        q: "Which segments?",
        a:
          "Recurring cleaning, window cleaning, industrial cleaning, clinical cleaning, hotel housekeeping, post-construction cleaning and facility management across the DACH region.",
      },
    ],
    ctaNote: "No commitment. No credit card. 30 minutes are enough.",
  },
  fr: {
    eyebrow: "Échange de découverte",
    h1: "Une démo live Taskey de 30 minutes.",
    lead:
      "Démo live adaptée à vos sites, votre équipe et vos processus. Vous pouvez aussi créer un compte gratuit et travailler immédiatement.",
    heroAlt:
      "Échange découverte Taskey · démo live du logiciel de propreté pour les prestataires de facility services",
    bookH2: "Choisissez un créneau dans le calendrier",
    bookBody:
      "Sélectionnez un créneau. Réponse en 24 heures les jours ouvrés, souvent le jour même.",
    agendaH2: "Ordre du jour",
    agenda: [
      {
        title: "Votre exploitation",
        body:
          "Point court. Sites, taille d’équipe, structure clients et systèmes existants.",
        image: "/sections/transparenz-kunde.png",
        alt: "Point sur une exploitation de propreté lors d’un échange Taskey",
      },
      {
        title: "Démo live avec vos données",
        body:
          "Nous ouvrons un workspace de test avec des sites d’exemple à votre structure. Pointage NFC, planning, devis, facturation et portail client dans le flux réel.",
        image: "/sections/einsatzplanung.png",
        alt: "Démo live du planning Taskey avec sites d’exemple d’une entreprise de propreté",
      },
      {
        title: "Déploiement et intégration",
        body:
          "SSO, DATEV, RH et ERP. Plan de déploiement concret à la fin de l’échange.",
        image: "/sections/datev-export.webp",
        alt: "Discussion des intégrations DATEV, SSO, RH et ERP avec Taskey",
      },
      {
        title: "Prochaine étape",
        body:
          "Créer un compte et démarrer, ou lancer un pilote sur deux ou trois sites. Aucune décision requise pendant l’échange.",
        image: "/sections/nachweisbarkeit.png",
        alt: "Prochaine étape après l’échange Taskey · créer un compte ou lancer un pilote",
      },
    ],
    signupH2: "Directement dans le workspace",
    signupBody:
      "Le plus rapide pour entrer dans le système : créer un compte et travailler dans le workspace. Sites, équipes, premières interventions et preuves sont en ligne en moins de dix minutes.",
    signupCta: "Créer un compte gratuit",
    bookCta: "Réserver un échange",
    relatedH2: "Sujets liés",
    relatedLinks: [
      { label: "Démarrer gratuitement", href: "/kostenlos-starten", body: "Créer un compte et travailler dans le workspace, sans échange préalable." },
      { label: "Toutes les fonctionnalités", href: "/features", body: "Planning, pointage, devis, facturation et portail client." },
      { label: "Tarifs", href: "/pricing", body: "Tous les plans dont la version gratuite et les conditions entreprise." },
      { label: "Entreprise", href: "/erstgespraech", body: "SSO, RBAC, journal d’audit, REST API, webhooks et intégration ERP native." },
    ],
    faqH2: "Questions fréquentes sur l’échange",
    faq: [
      {
        q: "Que montrez-vous pendant l’échange ?",
        a:
          "Une démo live sur des sites d’exemple à votre structure : créer une intervention, affecter du personnel, scan NFC sur site, preuve et facture. Les questions techniques sur NFC, SSO, DATEV, API ou hébergement sont traitées directement.",
      },
      {
        q: "Suis-je engagé si je réserve ?",
        a:
          "Non. L’échange est sans engagement. Vous décidez ensuite et pouvez créer un compte gratuit quand vous le souhaitez.",
      },
      {
        q: "Comment se déroule la démo ?",
        a:
          "Nous ouvrons un workspace de test, ajoutons des sites d’exemple à votre structure et déroulons le quotidien : créer une intervention, affecter du personnel, scanner NFC sur site, générer preuve et facture.",
      },
      {
        q: "Et si je veux démarrer tout de suite ?",
        a:
          "Créez un compte gratuit ci-dessus. Le workspace est actif en quelques secondes. L’échange devient optionnel.",
      },
      {
        q: "Quelles tailles d’exploitation ?",
        a:
          "Taskey fonctionne de 10 à plus de 1 000 agents. Les plans entreprise incluent SSO, RBAC, journal d’audit, REST API et intégration ERP native.",
      },
      {
        q: "Quels segments ?",
        a:
          "Nettoyage récurrent, vitrerie, industriel, clinique, housekeeping hôtelier, fin de chantier et facility management en zone DACH.",
      },
    ],
    ctaNote: "Sans engagement. Sans carte bancaire. 30 minutes suffisent.",
  },
};

export default async function ErstgespraechPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  const c = BODY[locale];

  const crumbs = [
    {
      name: "Taskey",
      url: locale === "de" ? "https://www.taskeyapp.com" : `https://www.taskeyapp.com/${locale}`,
    },
    {
      name: c.h1,
      url:
        locale === "de"
          ? `https://www.taskeyapp.com${path}`
          : `https://www.taskeyapp.com/${locale}${path}`,
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-crumbs-erstgespraech" />
      <FaqJsonLd items={c.faq} id="ld-faq-erstgespraech" />
      <script
        type="application/ld+json"
        id="ld-reserve-erstgespraech"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: c.h1,
            description:
              locale === "de"
                ? "30 Minuten Live-Demo der Gebäudereinigungs-Software Taskey. Termin direkt im Kalender buchen."
                : locale === "en"
                ? "30-minute live demo of Taskey cleaning operations software. Book directly in the calendar."
                : "Démo live de 30 minutes du logiciel de propreté Taskey. Réservation directe dans le calendrier.",
            inLanguage: locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR",
            url:
              locale === "de"
                ? `https://www.taskeyapp.com${path}`
                : `https://www.taskeyapp.com/${locale}${path}`,
            isPartOf: { "@id": "https://www.taskeyapp.com#website" },
            about: { "@id": "https://www.taskeyapp.com#software" },
            publisher: { "@id": "https://www.taskeyapp.com#organization" },
          }),
        }}
      />

      {/* Hero */}
      <section className="apl-surface-noir apl-on-noir pt-14 pb-10">
        <div className="apl-container-wide text-center">
          <p className="apl-eyebrow mb-2" style={{ color: "#2997ff" }}>
            {c.eyebrow}
          </p>
          <h1 className="apl-display apl-display-xl mx-auto text-white" style={{ maxWidth: "20ch" }}>
            {c.h1}
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "58ch", color: "#d2d2d7" }}>
            {c.lead}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            <SignupButton size="lg" label={c.signupCta} utm="erstgespraech_hero" />
            <Link href="#kalender" className="apl-btn apl-btn-ghost apl-btn-lg">
              {c.bookCta}
            </Link>
          </div>
          <p className="mt-5 apl-caption" style={{ color: "#8d8d92" }}>
            {c.ctaNote}
          </p>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kalender" className="apl-surface-canvas apl-section-sm">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            {c.bookH2}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "58ch" }}>
            {c.bookBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Link href="mailto:info@taskeyapp.com" className="apl-btn apl-btn-primary apl-btn-lg">
              info@taskeyapp.com
            </Link>
            <Link href="tel:+4915168488999" className="apl-btn apl-btn-secondary apl-btn-lg">
              +49 151 68488999
            </Link>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="apl-surface-soft apl-section">
        <div className="apl-container-wide">
          <div className="text-center mb-10">
            <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
              {c.agendaH2}
            </h2>
          </div>
          <div className="apl-duo">
            {c.agenda.map((a) => (
              <article key={a.title} className="apl-tile apl-tile-canvas overflow-hidden p-0">
                <div style={{ position: "relative", aspectRatio: "16 / 9", background: "var(--apl-canvas-soft)" }}>
                  <Image src={a.image} alt={a.alt} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                </div>
                <div className="apl-tile-inner items-start text-left">
                  <h3 className="apl-headline" style={{ fontSize: "1.25rem" }}>
                    {a.title}
                  </h3>
                  <p className="apl-body mt-2">{a.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signup block */}
      <section className="apl-surface-canvas apl-section-sm">
        <div className="apl-container text-center">
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            {c.signupH2}
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "58ch" }}>
            {c.signupBody}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
            <SignupButton size="lg" label={c.signupCta} utm="erstgespraech_signup_block" />
            <Link href="#kalender" className="apl-btn apl-btn-secondary apl-btn-lg">
              {c.bookCta}
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="apl-surface-soft apl-section-sm">
        <div className="apl-container-wide">
          <h2 className="apl-display apl-display-md text-center mx-auto mb-8" style={{ maxWidth: "22ch" }}>
            {c.relatedH2}
          </h2>
          <div className="apl-quad">
            {c.relatedLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="apl-tile apl-tile-canvas hover:-translate-y-[2px]"
                style={{ transitionProperty: "transform", transitionDuration: "250ms" }}
              >
                <div className="apl-tile-inner items-start text-left">
                  <h3 className="apl-headline" style={{ fontSize: "1.0625rem" }}>
                    {l.label}
                  </h3>
                  <p className="apl-small mt-2">{l.body}</p>
                  <span className="apl-link mt-3">Mehr</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="apl-surface-canvas apl-section-sm apl-hairline-top">
        <div className="apl-container">
          <h2 className="apl-display apl-display-lg" style={{ maxWidth: "22ch" }}>
            {c.faqH2}
          </h2>
          <div className="mt-8 flex flex-col divide-y divide-[color:var(--apl-hairline-soft)]">
            {c.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 apl-headline" style={{ fontSize: "1.0625rem" }}>
                  <span className="faq-question">{f.q}</span>
                  <span className="apl-small text-[color:var(--apl-accent)] transition-transform duration-300 group-open:rotate-45">+</span>
                </summary>
                <p className="faq-answer apl-body mt-3 max-w-[70ch]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
