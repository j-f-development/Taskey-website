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

const path = "/kostenlos-starten";

const COPY: PageCopy = {
  de: {
    title: "Taskey kostenlos starten · Gebäudereinigungs-Software direkt im Browser | Taskey",
    description:
      "Kostenlosen Account erstellen, Workspace öffnen und sofort mit NFC-Zeiterfassung, Einsatzplanung, Angeboten, Rechnungen und Kundenportal arbeiten. Keine Kreditkarte, keine Installation, DSGVO-konform, Made in Germany.",
  },
  en: {
    title: "Start Taskey for free · Cleaning operations software in your browser | Taskey",
    description:
      "Create a free account, open the workspace and start with NFC time tracking, scheduling, quotes, invoicing and the client portal. No credit card, no installation, GDPR compliant.",
  },
  fr: {
    title: "Démarrer Taskey gratuitement · Logiciel de propreté dans votre navigateur | Taskey",
    description:
      "Créez un compte gratuit, ouvrez le workspace et travaillez avec pointage NFC, planning, devis, facturation et portail client. Sans carte bancaire, sans installation, conforme RGPD.",
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

type PageCopyBlock = {
  eyebrow: string;
  h1: string;
  lead: string;
  ctaLabel: string;
  ctaSecondary: string;
  ctaNote: string;
  stepsH2: string;
  steps: { title: string; body: string }[];
  valueH2: string;
  valueBullets: { title: string; body: string }[];
  softwareH2: string;
  softwareBody: string;
  softwareBullets: string[];
  trustH2: string;
  trustBullets: string[];
  faqH2: string;
  faq: { q: string; a: string }[];
  ctaFinalH2: string;
  ctaFinalBody: string;
};

const BODY: Record<Locale, PageCopyBlock> = {
  de: {
    eyebrow: "Kostenlos starten",
    h1: "Account erstellen und direkt im Workspace arbeiten.",
    lead:
      "Account erstellen, Workspace öffnen, loslegen. Zeiterfassung, Einsatzplanung, Objekte, Nachweise, Angebote und Rechnungen sind ab Minute eins da.",
    ctaLabel: "Kostenlosen Account erstellen",
    ctaSecondary: "Erstgespräch buchen",
    ctaNote: "Keine Kreditkarte. Keine Installation. Setup unter 10 Minuten.",
    stepsH2: "In drei Schritten im Betrieb",
    steps: [
      {
        title: "1 — Account erstellen",
        body:
          "E-Mail und Firma angeben. Workspace wird in Sekunden provisioniert, SSO und Rollen stehen bereit.",
      },
      {
        title: "2 — Objekte und Team anlegen",
        body:
          "Objekte, Teams, Mitarbeitende und Auftraggeber in das System einlesen. Import aus CSV oder manuell.",
      },
      {
        title: "3 — Loslegen",
        body:
          "Erste Einsätze planen, NFC-Tags am Objekt verteilen, erste Nachweise liegen am gleichen Tag im System.",
      },
    ],
    valueH2: "Was Sie ab dem ersten Login haben",
    valueBullets: [
      {
        title: "NFC-Zeiterfassung mit Objektbezug",
        body:
          "Mitarbeitende scannen den NFC-Tag am Objekt. Zeit, Ort, Person sind nachweisbar erfasst, ohne Zettel, ohne Rückfrage.",
      },
      {
        title: "Einsatzplanung als Kalender",
        body:
          "Teams, Touren und Objekte in einer Oberfläche. Krankheitsausfälle über Drag & Drop in Sekunden umgeplant.",
      },
      {
        title: "Angebote, Rechnungen, DATEV-Export",
        body:
          "Vom Auftrag zur Rechnung in einem Flow. DATEV-Export für den Steuerberater ist Bestandteil.",
      },
      {
        title: "Kundenportal für Auftraggeber",
        body:
          "Auftraggeber sehen Status, Protokolle und Fotos live. Reklamationen werden strukturiert erfasst, nicht per Anruf.",
      },
    ],
    softwareH2: "Was in Ihrem Workspace steht",
    softwareBody:
      "Alles auf dieser Seite ist Bestandteil des Produkts. Nach dem Login finden Sie dieselben Module in Ihrem Workspace. Kein Projektplan, kein Workshop vorab.",
    softwareBullets: [
      "Login, Workspace, Mobile App ab Minute eins",
      "Admin-Konsole mit Rollen, Rechten und Audit-Log",
      "REST API, Webhooks, SSO und RBAC auf Enterprise-Plänen",
      "DSGVO-konform, Hosting in Deutschland",
    ],
    trustH2: "Was Betriebe davon haben",
    trustBullets: [
      "Papierloser Nachweis für jeden Einsatz",
      "Weniger Rückfragen aus dem Büro und vom Auftraggeber",
      "Transparente Marge pro Objekt in Echtzeit",
      "Keine Doppelerfassung in Excel, DATEV oder dem CRM",
    ],
    faqH2: "Häufige Fragen",
    faq: [
      {
        q: "Ist Taskey wirklich kostenlos nutzbar?",
        a:
          "Ja. Der Account ist kostenlos. Sie können Objekte, Mitarbeitende und erste Einsätze anlegen, Zeiten erfassen und Nachweise erstellen. Erweiterte Pläne mit mehr Mitarbeitenden, DATEV-Export, SSO und API sind kostenpflichtig.",
      },
      {
        q: "Brauche ich eine Installation oder einen Server?",
        a:
          "Nein. Taskey läuft im Browser und in der mobilen App. Es gibt keine Installation, kein lokales Setup und keinen eigenen Server. Hosting ist in Deutschland, Betrieb nach DSGVO.",
      },
      {
        q: "Wie lange dauert das Setup wirklich?",
        a:
          "Der Workspace steht in Sekunden. Erste produktive Einsätze mit NFC-Zeiterfassung und Einsatzplanung sind typischerweise am gleichen Tag im System. Keine Berater, keine Workshops.",
      },
      {
        q: "Muss ich eine Kreditkarte hinterlegen?",
        a:
          "Nein. Für den kostenlosen Account ist keine Zahlungsinformation nötig. Ein Upgrade auf einen bezahlten Plan ist jederzeit möglich.",
      },
      {
        q: "Kann ich meine bisherigen Daten übernehmen?",
        a:
          "Ja. Objekte, Mitarbeitende und Auftraggeber lassen sich per CSV importieren. Für ERP, HR, Payroll und BI stehen REST API und Webhooks bereit.",
      },
      {
        q: "Lohnt sich dann noch ein Erstgespräch?",
        a:
          "Nur wenn Sie es möchten. Taskey funktioniert aus dem Account heraus. Ein 30-Minuten-Erstgespräch ist für Betriebe sinnvoll, die Rollout, SSO-Setup, Integrationen oder einen Umzug aus einer bestehenden Lösung planen.",
      },
    ],
    ctaFinalH2: "Direkt im Workspace.",
    ctaFinalBody:
      "Account erstellen und in zehn Minuten sehen, wie Ihr Betrieb in Taskey aussieht.",
  },
  en: {
    eyebrow: "Start for free",
    h1: "Create an account and work in the workspace right away.",
    lead:
      "Create an account, open the workspace, start. Time tracking, scheduling, sites, proof of service, quotes and invoicing are there from minute one.",
    ctaLabel: "Create free account",
    ctaSecondary: "Book a discovery call",
    ctaNote: "No credit card. No installation. Setup under 10 minutes.",
    stepsH2: "In the operation in three steps",
    steps: [
      {
        title: "1 — Create an account",
        body:
          "Email and company. Workspace is provisioned in seconds, SSO and roles are ready.",
      },
      {
        title: "2 — Add sites and team",
        body:
          "Load sites, teams, staff and clients. Import from CSV or add manually.",
      },
      {
        title: "3 — Go live",
        body:
          "Plan the first assignments, hand out NFC tags on site, the first proofs land in the system the same day.",
      },
    ],
    valueH2: "What you get from the first login",
    valueBullets: [
      {
        title: "NFC time tracking tied to the site",
        body:
          "Staff scan the NFC tag on site. Time, place, person are captured and provable, without paper and without follow-up.",
      },
      {
        title: "Scheduling as a calendar",
        body:
          "Teams, routes and sites in one interface. Sick calls are reassigned by drag and drop in seconds.",
      },
      {
        title: "Quotes, invoices, DATEV export",
        body:
          "From job to invoice in one flow. DATEV export for the accountant is included.",
      },
      {
        title: "Client portal",
        body:
          "Clients see status, records and photos live. Complaints are captured in a structured way, not by phone.",
      },
    ],
    softwareH2: "What is in your workspace",
    softwareBody:
      "Everything on this page is part of the product. After login you find the same modules in your workspace. No project plan, no upfront workshop.",
    softwareBullets: [
      "Login, workspace, mobile app from minute one",
      "Admin console with roles, permissions and audit log",
      "REST API, webhooks, SSO and RBAC on enterprise plans",
      "GDPR compliant, hosting in Germany",
    ],
    trustH2: "What operators get out of it",
    trustBullets: [
      "Paperless proof for every assignment",
      "Fewer calls from the office and from the client",
      "Transparent margin per site in real time",
      "No double entry in Excel, DATEV or the CRM",
    ],
    faqH2: "Frequently asked",
    faq: [
      {
        q: "Is Taskey really free to use?",
        a:
          "Yes. The account is free. You can add sites, staff and first assignments, track hours and generate proof of service. Larger plans with more staff, DATEV export, SSO and the API are paid.",
      },
      {
        q: "Do I need to install anything?",
        a:
          "No. Taskey runs in the browser and in the mobile app. No installation, no local setup, no own server. Hosting is in Germany, operated under GDPR.",
      },
      {
        q: "How long does setup really take?",
        a:
          "The workspace is up in seconds. First productive runs with NFC time tracking and scheduling are typically on the same day. No consultants, no workshops.",
      },
      {
        q: "Do I need to leave a credit card?",
        a:
          "No. The free account does not require payment information. You can upgrade later.",
      },
      {
        q: "Can I bring existing data?",
        a:
          "Yes. Sites, staff and clients can be imported via CSV. For ERP, HR, payroll and BI there is a REST API and webhooks.",
      },
      {
        q: "Then why would I book a call?",
        a:
          "Only if you want to. Taskey works straight out of the account. A 30-minute discovery call is useful for operators planning rollout, SSO, integrations or a migration from a legacy system.",
      },
    ],
    ctaFinalH2: "Straight into the workspace.",
    ctaFinalBody:
      "Create an account and see what your operation looks like in Taskey within ten minutes.",
  },
  fr: {
    eyebrow: "Démarrer gratuitement",
    h1: "Créer un compte et travailler dans le workspace immédiatement.",
    lead:
      "Créez un compte, ouvrez le workspace, commencez. Pointage, planification, sites, preuves, devis et factures sont là dès la première minute.",
    ctaLabel: "Créer un compte gratuit",
    ctaSecondary: "Réserver un échange",
    ctaNote: "Sans carte bancaire. Sans installation. Mise en route en moins de 10 minutes.",
    stepsH2: "En trois étapes dans l’exploitation",
    steps: [
      {
        title: "1 — Créer un compte",
        body:
          "E-mail et entreprise. Le workspace est provisionné en quelques secondes, SSO et rôles sont prêts.",
      },
      {
        title: "2 — Ajouter sites et équipe",
        body:
          "Importez sites, équipes, personnel et clients. Import CSV ou saisie manuelle.",
      },
      {
        title: "3 — Lancer",
        body:
          "Planifier les premières interventions, poser les tags NFC, les premières preuves tombent le jour même.",
      },
    ],
    valueH2: "Ce que vous avez dès la première connexion",
    valueBullets: [
      {
        title: "Pointage NFC lié au site",
        body:
          "Les agents scannent le tag NFC sur site. Heure, lieu, personne sont enregistrés et prouvables, sans papier.",
      },
      {
        title: "Planning calendrier",
        body:
          "Équipes, tournées et sites dans une seule interface. Les absences se replanifient en quelques secondes.",
      },
      {
        title: "Devis, factures, export DATEV",
        body:
          "De l’intervention à la facture dans un seul flux. Export DATEV inclus.",
      },
      {
        title: "Portail client",
        body:
          "Les donneurs d’ordre voient statut, rapports et photos en direct. Les réclamations sont structurées, non téléphoniques.",
      },
    ],
    softwareH2: "Ce qu’il y a dans votre workspace",
    softwareBody:
      "Tout ce qui figure sur cette page fait partie du produit. Après connexion, vous retrouvez les mêmes modules dans votre workspace. Pas de plan projet, pas d’atelier préalable.",
    softwareBullets: [
      "Login, workspace, app mobile dès la première minute",
      "Console d’administration avec rôles, droits et journal d’audit",
      "REST API, webhooks, SSO et RBAC sur les plans entreprise",
      "Conforme RGPD, hébergement en Allemagne",
    ],
    trustH2: "Ce qu’en tirent les exploitations",
    trustBullets: [
      "Preuve sans papier pour chaque intervention",
      "Moins d’appels du bureau et du client",
      "Marge transparente par site en temps réel",
      "Pas de double saisie dans Excel, DATEV ou le CRM",
    ],
    faqH2: "Questions fréquentes",
    faq: [
      {
        q: "Taskey est-il réellement gratuit ?",
        a:
          "Oui. Le compte est gratuit. Vous pouvez ajouter sites, personnel, premières interventions, suivre les heures et générer les preuves. Les plans élargis avec plus de personnel, export DATEV, SSO et API sont payants.",
      },
      {
        q: "Faut-il installer quelque chose ?",
        a:
          "Non. Taskey tourne dans le navigateur et dans l’app mobile. Pas d’installation, pas de serveur local. Hébergement en Allemagne, exploitation RGPD.",
      },
      {
        q: "Combien de temps prend réellement le setup ?",
        a:
          "Le workspace est actif en quelques secondes. Les premières interventions NFC et planification se font typiquement le jour même. Pas de consultant, pas d’atelier.",
      },
      {
        q: "Faut-il laisser une carte bancaire ?",
        a:
          "Non. Le compte gratuit ne demande pas d’information de paiement.",
      },
      {
        q: "Puis-je reprendre mes données ?",
        a:
          "Oui. Sites, personnel et clients s’importent par CSV. Pour ERP, RH, paie et BI, une REST API et des webhooks sont disponibles.",
      },
      {
        q: "Alors pourquoi réserver un échange ?",
        a:
          "Seulement si vous le souhaitez. Taskey fonctionne directement depuis le compte. Un échange de 30 minutes est utile pour un déploiement SSO, des intégrations ou une migration depuis un système ancien.",
      },
    ],
    ctaFinalH2: "Directement dans le workspace.",
    ctaFinalBody:
      "Créez un compte et voyez à quoi ressemble votre exploitation dans Taskey en dix minutes.",
  },
};

export default async function KostenlosStartenPage({
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
      <BreadcrumbJsonLd crumbs={crumbs} id="ld-crumbs-kostenlos" />
      <FaqJsonLd items={c.faq} id="ld-faq-kostenlos" />

      <section className="tkc-section" style={{ background: "var(--tkc-canvas-dark)", color: "#fff" }}>
        <div className="tkc-container">
          <div className="tkc-mono" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            {c.eyebrow}
          </div>
          <h1
            className="tkc-display mt-5"
            style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.2rem)", color: "#fff", lineHeight: 1.07, letterSpacing: "-0.015em", maxWidth: "20ch" }}
          >
            {c.h1}
          </h1>
          <p className="tkc-lead mt-6" style={{ color: "rgba(238,241,245,0.86)", maxWidth: "60ch" }}>
            {c.lead}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <SignupButton size="lg" label={c.ctaLabel} utm="kostenlos_starten_hero" />
            <a
              href="https://calendly.com/fynn-taskeyapp/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="tk-cta-secondary tk-cta-secondary--onink"
            >
              {c.ctaSecondary}
            </a>
          </div>
          <p className="mt-5 tkc-mono" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.78rem" }}>
            {c.ctaNote}
          </p>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.stepsH2}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {c.steps.map((s) => (
              <div key={s.title} className="tkc-card-strong">
                <div className="tkc-mono" style={{ color: "var(--tkc-accent)", fontSize: "0.78rem", letterSpacing: "0.1em" }}>
                  {s.title}
                </div>
                <p className="tkc-body mt-3">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.valueH2}
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.valueBullets.map((b) => (
              <div key={b.title} className="tkc-card-strong">
                <h3 className="tkc-headline" style={{ fontSize: "1.15rem" }}>{b.title}</h3>
                <p className="tkc-body mt-2">{b.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <SignupButton label={c.ctaLabel} utm="kostenlos_starten_value" />
            <a
              href="https://calendly.com/fynn-taskeyapp/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="tk-cta-secondary"
            >
              {c.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.softwareH2}
          </h2>
          <p className="tkc-body mt-5" style={{ maxWidth: "60ch" }}>
            {c.softwareBody}
          </p>
          <ul className="mt-6 space-y-2 tkc-mono" style={{ fontSize: "0.9rem", color: "var(--tkc-ink)" }}>
            {c.softwareBullets.map((b) => (
              <li key={b}>· {b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }}>
            {c.trustH2}
          </h2>
          <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 tkc-body">
            {c.trustBullets.map((b) => (
              <li key={b} className="tkc-card">· {b}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="faq" className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
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

      <section id="erstgespraech" className="tkc-section" style={{ background: "var(--tkc-canvas-dark)", color: "#fff" }}>
        <div className="tkc-container">
          <h2 className="tkc-headline" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#fff" }}>
            {c.ctaFinalH2}
          </h2>
          <p className="tkc-lead mt-5" style={{ color: "rgba(238,241,245,0.85)", maxWidth: "58ch" }}>
            {c.ctaFinalBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <SignupButton size="lg" label={c.ctaLabel} utm="kostenlos_starten_final" />
            <Link
              href="https://calendly.com/fynn-taskeyapp/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="tk-cta-secondary tk-cta-secondary--onink"
            >
              {c.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
