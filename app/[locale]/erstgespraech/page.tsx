import type { Metadata } from "next";
import Link from "next/link";
import SignupButton from "@/components/landing/SignupButton";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/StructuredData";
import CalendlyInline from "@/components/home/redesign/CalendlyInline";

const path = "/erstgespraech";

const COPY: PageCopy = {
  de: {
    title: "Erstgespräch mit Taskey · 30 Minuten mit dem Gründerteam | Taskey",
    description:
      "Erstgespräch mit Taskey: 30 Minuten Live-Demo der Gebäudereinigungs-Software, direkt mit dem Gründerteam. NFC-Zeiterfassung, Einsatzplanung, Angebote, DATEV-Export, Kundenportal. Alternativ sofort einen kostenlosen Account erstellen.",
  },
  en: {
    title: "Taskey discovery call · 30 minutes with the founding team | Taskey",
    description:
      "Discovery call with Taskey: 30-minute live demo of the cleaning operations software, directly with the founding team. NFC time tracking, scheduling, quotes, DATEV export, client portal. Or create a free account right away.",
  },
  fr: {
    title: "Échange avec Taskey · 30 minutes avec l’équipe fondatrice | Taskey",
    description:
      "Échange Taskey : démo live de 30 minutes du logiciel de propreté, avec l’équipe fondatrice. Pointage NFC, planning, devis, export DATEV, portail client. Ou créez tout de suite un compte gratuit.",
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
  bookH2: string;
  bookBody: string;
  agendaH2: string;
  agenda: { title: string; body: string }[];
  signupH2: string;
  signupBody: string;
  signupCta: string;
  bookCta: string;
  faqH2: string;
  faq: { q: string; a: string }[];
  ctaNote: string;
};

const BODY: Record<Locale, Block> = {
  de: {
    eyebrow: "Erstgespräch",
    h1: "30 Minuten mit dem Taskey-Gründerteam.",
    lead:
      "Live-Demo der Software, zugeschnitten auf Ihre Objekte, Ihr Team und Ihre Prozesse. Alternativ erstellen Sie direkt einen kostenlosen Account und arbeiten sofort im Workspace.",
    bookH2: "Termin direkt im Kalender buchen",
    bookBody:
      "Wählen Sie einen Slot im Kalender. Antwort werktags innerhalb von 24 Stunden, in der Regel noch am selben Tag.",
    agendaH2: "Agenda für das Erstgespräch",
    agenda: [
      {
        title: "Ihr Betrieb",
        body:
          "Kurze Standortaufnahme. Objekte, Teamgröße, Auftraggeberstruktur und bestehende Systeme.",
      },
      {
        title: "Live-Demo mit Ihren Daten",
        body:
          "Wir öffnen einen Testworkspace mit Beispielobjekten in Ihrer Struktur. NFC-Zeiterfassung, Einsatzplanung, Angebote, Rechnungen und Kundenportal im realen Flow.",
      },
      {
        title: "Rollout und Integration",
        body:
          "Wir klären, ob und wie SSO, DATEV, HR und ERP eingebunden werden. Konkreter Rollout-Plan am Ende des Calls.",
      },
      {
        title: "Nächster Schritt",
        body:
          "Account erstellen und loslegen oder Pilot auf zwei bis drei Objekten. Keine Entscheidung im Call nötig.",
      },
    ],
    signupH2: "Direkt im Workspace starten",
    signupBody:
      "Der schnellste Weg ins System: Account anlegen und direkt im Workspace arbeiten. Objekte, Teams, erste Einsätze und Nachweise sind in unter zehn Minuten live.",
    signupCta: "Kostenlosen Account erstellen",
    bookCta: "Erstgespräch buchen",
    faqH2: "Häufige Fragen zum Erstgespräch",
    faq: [
      {
        q: "Mit wem spreche ich im Erstgespräch?",
        a:
          "Direkt mit dem Gründerteam von Taskey. Keine Vertriebsmitarbeiter, keine Agentur. Technische Fragen zu NFC, SSO, DATEV, API oder Hosting werden im Call beantwortet.",
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
    h1: "30 minutes with the Taskey founding team.",
    lead:
      "Live demo tailored to your sites, your team and your processes. Alternatively create a free account and work in the workspace right away.",
    bookH2: "Pick a slot in the calendar",
    bookBody:
      "Choose a slot in the calendar. Reply within 24 hours on business days, usually the same day.",
    agendaH2: "Discovery call agenda",
    agenda: [
      {
        title: "Your operation",
        body:
          "Short snapshot. Sites, team size, client structure and existing systems.",
      },
      {
        title: "Live demo with your data",
        body:
          "We open a test workspace with example sites in your structure. NFC time tracking, scheduling, quotes, invoicing and client portal in the real flow.",
      },
      {
        title: "Rollout and integration",
        body:
          "SSO, DATEV, HR and ERP integration options. Concrete rollout plan by the end of the call.",
      },
      {
        title: "Next step",
        body:
          "Create an account and start, or run a pilot on two or three sites. No decision required in the call.",
      },
    ],
    signupH2: "Straight into the workspace",
    signupBody:
      "Fastest path into the system: create an account and work in the workspace. Sites, teams, first assignments and proof of service are live in under ten minutes.",
    signupCta: "Create free account",
    bookCta: "Book a discovery call",
    faqH2: "Frequently asked about the discovery call",
    faq: [
      {
        q: "Who will I talk to?",
        a:
          "Directly with the Taskey founding team. No sales reps, no agency. Technical questions on NFC, SSO, DATEV, API or hosting are answered in the call.",
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
    h1: "30 minutes avec l’équipe fondatrice de Taskey.",
    lead:
      "Démo live adaptée à vos sites, votre équipe et vos processus. Vous pouvez aussi créer un compte gratuit et travailler immédiatement.",
    bookH2: "Choisissez un créneau dans le calendrier",
    bookBody:
      "Sélectionnez un créneau. Réponse en 24 heures les jours ouvrés, souvent le jour même.",
    agendaH2: "Ordre du jour",
    agenda: [
      {
        title: "Votre exploitation",
        body:
          "Point court. Sites, taille d’équipe, structure clients et systèmes existants.",
      },
      {
        title: "Démo live avec vos données",
        body:
          "Nous ouvrons un workspace de test avec des sites d’exemple à votre structure. Pointage NFC, planning, devis, facturation et portail client dans le flux réel.",
      },
      {
        title: "Déploiement et intégration",
        body:
          "SSO, DATEV, RH et ERP. Plan de déploiement concret à la fin de l’échange.",
      },
      {
        title: "Prochaine étape",
        body:
          "Créer un compte et démarrer, ou lancer un pilote sur deux ou trois sites. Aucune décision requise pendant l’échange.",
      },
    ],
    signupH2: "Directement dans le workspace",
    signupBody:
      "Le plus rapide pour entrer dans le système : créer un compte et travailler dans le workspace. Sites, équipes, premières interventions et preuves sont en ligne en moins de dix minutes.",
    signupCta: "Créer un compte gratuit",
    bookCta: "Réserver un échange",
    faqH2: "Questions fréquentes sur l’échange",
    faq: [
      {
        q: "Avec qui est-ce que j’échange ?",
        a:
          "Directement avec l’équipe fondatrice de Taskey. Pas de commerciaux, pas d’agence. Les questions techniques sur NFC, SSO, DATEV, API ou hébergement sont traitées.",
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
    <main className="tkc-canvas">
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-crumbs-erstgespraech" />
      <FaqJsonLd items={c.faq} id="ld-faq-erstgespraech" />

      <section className="tkc-section" style={{ background: "var(--tkc-canvas-dark)", color: "#fff" }}>
        <div className="tkc-container">
          <div className="tkc-mono" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            {c.eyebrow}
          </div>
          <h1
            className="tkc-display mt-5"
            style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.2rem)", color: "#fff", lineHeight: 1.07, letterSpacing: "-0.015em", maxWidth: "22ch" }}
          >
            {c.h1}
          </h1>
          <p className="tkc-lead mt-6" style={{ color: "rgba(238,241,245,0.86)", maxWidth: "60ch" }}>
            {c.lead}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <SignupButton size="lg" label={c.signupCta} utm="erstgespraech_hero" />
            <Link href="#kalender" className="tk-cta-secondary tk-cta-secondary--onink">
              {c.bookCta}
            </Link>
          </div>
          <p className="mt-5 tkc-mono" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem" }}>
            {c.ctaNote}
          </p>
        </div>
      </section>

      <section id="kalender" className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.bookH2}
          </h2>
          <p className="tkc-body mt-4" style={{ maxWidth: "60ch" }}>{c.bookBody}</p>
          <div
            className="mt-8 rounded-[12px] overflow-hidden"
            style={{ border: "1px solid var(--tkc-line-strong)", background: "#fff", minHeight: "700px" }}
          >
            <CalendlyInline
              url="https://calendly.com/fynn-taskeyapp/new-meeting"
              height={720}
            />
          </div>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.agendaH2}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.agenda.map((a) => (
              <div key={a.title} className="tkc-card-strong">
                <h3 className="tkc-headline" style={{ fontSize: "1.15rem" }}>{a.title}</h3>
                <p className="tkc-body mt-2">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.signupH2}
          </h2>
          <p className="tkc-body mt-5" style={{ maxWidth: "60ch" }}>{c.signupBody}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SignupButton size="lg" label={c.signupCta} utm="erstgespraech_signup_block" />
            <Link href="#kalender" className="tk-cta-secondary">
              {c.bookCta}
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.faqH2}
          </h2>
          <div className="mt-8 space-y-4">
            {c.faq.map((f) => (
              <details key={f.q} className="tkc-card-strong">
                <summary className="faq-question" style={{ fontWeight: 600, cursor: "pointer" }}>
                  {f.q}
                </summary>
                <p className="faq-answer tkc-body mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
