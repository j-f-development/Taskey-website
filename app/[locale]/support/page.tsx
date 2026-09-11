import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HandbookSearch from "@/components/HandbookSearch";
import { buildMetadata, pickLocale, type Locale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Support & Hilfe | Persönlicher Kontakt zum Taskey-Team | Taskey",
    description:
      "Direkter Draht zum Taskey-Team in Völklingen. E-Mail, Telefon und Hilfecenter für alle Fragen rund um Ihre Reinigungssoftware – Montag bis Freitag.",
  },
  en: {
    title: "Support & help | Talk to the Taskey team | Taskey",
    description:
      "A direct line to the Taskey team in Völklingen. Email, phone and help center for any question about your cleaning software – Monday to Friday.",
  },
  fr: {
    title: "Support & aide | Contact direct avec l'équipe Taskey | Taskey",
    description:
      "Ligne directe avec l'équipe Taskey à Völklingen. E-mail, téléphone et centre d'aide pour toutes vos questions sur votre logiciel de nettoyage – du lundi au vendredi.",
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
    path: "/support",
  });
}

const FAQ_BY_LOCALE: Record<Locale, { name: string; text: string }[]> = {
  de: [
    {
      name: "Wie schnell antwortet der Taskey-Support?",
      text: "In der Regel innerhalb weniger Stunden an Werktagen. Enterprise-Kunden haben einen dedizierten Account-Manager mit garantierten Reaktionszeiten per SLA.",
    },
    {
      name: "Bekomme ich Hilfe beim Onboarding?",
      text: "Ja. Mit unserem Done-for-You Setup importieren wir Ihre Objekte, Mitarbeiter und Verträge für Sie. Ihr Betrieb ist in 48 Stunden einsatzbereit – ohne Aufwand für Sie.",
    },
    {
      name: "Wo finde ich die NFC-Anleitung und Schulungsmaterial?",
      text: "Im Hilfecenter stellen wir Schritt-für-Schritt-Anleitungen und Kurzvideos zur Verfügung. Auf Wunsch übernehmen wir auch eine Live-Schulung für Ihr Team per Videocall.",
    },
    {
      name: "Gibt es Support auch in anderen Sprachen?",
      text: "Die Taskey-App ist auf Deutsch, Türkisch, Russisch, Polnisch und weiteren Sprachen verfügbar. Der Support für Inhaber und Verwaltung erfolgt auf Deutsch und Englisch.",
    },
  ],
  en: [
    {
      name: "How quickly does Taskey support respond?",
      text: "Usually within a few hours on business days. Enterprise customers get a dedicated account manager with guaranteed response times via SLA.",
    },
    {
      name: "Do I get help with onboarding?",
      text: "Yes. With our Done-for-You setup, we import your sites, employees and contracts for you. Your operation is up and running within 48 hours – with no effort on your side.",
    },
    {
      name: "Where can I find the NFC guide and training material?",
      text: "Our help center has step-by-step guides and short videos. On request we'll also run a live training for your team via video call.",
    },
    {
      name: "Is support available in other languages?",
      text: "The Taskey app is available in German, Turkish, Russian, Polish and other languages. Support for owners and administration is provided in German and English.",
    },
  ],
  fr: [
    {
      name: "À quelle vitesse le support Taskey répond-il ?",
      text: "Généralement en quelques heures les jours ouvrés. Les clients Enterprise bénéficient d'un account manager dédié avec des temps de réponse garantis par SLA.",
    },
    {
      name: "Suis-je accompagné lors de l'onboarding ?",
      text: "Oui. Avec notre Done-for-You Setup, nous importons vos sites, employés et contrats pour vous. Votre activité est opérationnelle en 48 heures – sans effort de votre part.",
    },
    {
      name: "Où trouver le guide NFC et les supports de formation ?",
      text: "Notre centre d'aide propose des guides pas-à-pas et des vidéos courtes. Sur demande, nous animons aussi une formation en direct pour votre équipe en visio.",
    },
    {
      name: "Le support est-il disponible dans d'autres langues ?",
      text: "L'application Taskey est disponible en allemand, turc, russe, polonais et d'autres langues. Le support pour les dirigeants et l'administration est assuré en allemand et en anglais.",
    },
  ],
};

const UI: Record<Locale, {
  supportBadge: string;
  headlineLine1: string;
  headlineLine2: string;
  intro: string;
  emailLabel: string;
  emailBody: string;
  phoneLabel: string;
  phoneBody: string;
  faqHeading: string;
  ctaHeadline: string;
  ctaBody: string;
  ctaButton: string;
  homeCrumb: string;
}> = {
  de: {
    supportBadge: "Support",
    headlineLine1: "Persönlicher Support",
    headlineLine2: "für Reinigungsbetriebe.",
    intro:
      "Direkter Draht zum Team in Völklingen. Keine Tickets in einer Warteschlange, keine Hotline aus dem Ausland – Sie schreiben uns, wir antworten.",
    emailLabel: "E-Mail",
    emailBody:
      "Schreiben Sie uns Ihre Frage – wir antworten in der Regel innerhalb weniger Stunden an Werktagen.",
    phoneLabel: "Telefon",
    phoneBody:
      "Lieber direkt sprechen? Rufen Sie uns an. Montag bis Freitag von 9 bis 18 Uhr.",
    faqHeading: "Häufige Fragen zum Support",
    ctaHeadline: "Noch kein Taskey-Konto?",
    ctaBody: "Legen Sie in wenigen Minuten Ihren kostenlosen Account an. Keine Kreditkarte, danach Jahresvertrag oder monatlich kündbar.",
    ctaButton: "Jetzt starten",
    homeCrumb: "Home",
  },
  en: {
    supportBadge: "Support",
    headlineLine1: "Personal support",
    headlineLine2: "for cleaning businesses.",
    intro:
      "A direct line to the team in Völklingen. No tickets in a queue, no overseas hotline – you write to us, we reply.",
    emailLabel: "Email",
    emailBody:
      "Send us your question – we usually reply within a few hours on business days.",
    phoneLabel: "Phone",
    phoneBody:
      "Prefer to talk? Give us a call. Monday to Friday, 9am to 6pm.",
    faqHeading: "Frequently asked support questions",
    ctaHeadline: "No Taskey account yet?",
    ctaBody: "Create your free Taskey account in minutes. No credit card, then an annual contract or monthly rolling.",
    ctaButton: "Get started",
    homeCrumb: "Home",
  },
  fr: {
    supportBadge: "Support",
    headlineLine1: "Un support humain",
    headlineLine2: "pour les entreprises de nettoyage.",
    intro:
      "Ligne directe avec l'équipe à Völklingen. Pas de tickets en file d'attente, pas de hotline à l'étranger – vous écrivez, nous répondons.",
    emailLabel: "E-mail",
    emailBody:
      "Écrivez-nous votre question – nous répondons en général en quelques heures les jours ouvrés.",
    phoneLabel: "Téléphone",
    phoneBody:
      "Vous préférez parler ? Appelez-nous. Du lundi au vendredi, de 9 h à 18 h.",
    faqHeading: "Questions fréquentes sur le support",
    ctaHeadline: "Pas encore de compte Taskey ?",
    ctaBody: "Créez votre compte Taskey gratuit en quelques minutes. Sans carte de crédit, puis contrat annuel ou résiliation mensuelle.",
    ctaButton: "Commencer",
    homeCrumb: "Accueil",
  },
};

export default async function SupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = pickLocale(locale);
  const ui = UI[loc];
  const faq = FAQ_BY_LOCALE[loc];

  const supportFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map((item) => ({
      "@type": "Question",
      "name": item.name,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.text,
      },
    })),
  };

  const baseUrl =
    loc === "de" ? "https://www.taskeyapp.com" : `https://www.taskeyapp.com/${loc}`;

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <BreadcrumbSchema
        crumbs={[
          { name: ui.homeCrumb, url: baseUrl },
          { name: "Support", url: `${baseUrl}/support` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(supportFaqSchema) }}
      />

      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-cyan-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
              {ui.supportBadge}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-tight mb-6">
            {ui.headlineLine1}
            <br />
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {ui.headlineLine2}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            {ui.intro}
          </p>
        </div>
      </section>

      {loc === "de" && <HandbookSearch />}

      <section className="relative pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          <a
            href="mailto:info@taskeyapp.com"
            className="group rounded-3xl bg-blue-50/70 border border-slate-200 hover:border-cyan-400 p-8 md:p-10 transition-colors"
          >
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 mb-4">
              {ui.emailLabel}
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-blue-700 transition-colors">
              info@taskeyapp.com
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {ui.emailBody}
            </p>
          </a>

          <a
            href="tel:+4915168488999"
            className="group rounded-3xl bg-blue-50/70 border border-slate-200 hover:border-cyan-400 p-8 md:p-10 transition-colors"
          >
            <p className="text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 mb-4">
              {ui.phoneLabel}
            </p>
            <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-blue-700 transition-colors">
              +49 151 68488999
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {ui.phoneBody}
            </p>
          </a>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black mb-10 text-center">
            {ui.faqHeading}
          </h2>
          <div className="space-y-4">
            {supportFaqSchema.mainEntity.map((faq) => (
              <details
                key={faq.name}
                className="group rounded-2xl bg-blue-50/70 border border-slate-200 p-6"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-base md:text-lg font-bold">
                  <span>{faq.name}</span>
                  <span className="text-blue-700 transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed text-sm md:text-base">
                  {faq.acceptedAnswer.text}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3">
                  {ui.ctaHeadline}
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  {ui.ctaBody}
                </p>
              </div>
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap"
              >
                {ui.ctaButton}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
