import type { Metadata } from "next";
import Link from "@/components/LocaleLink";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import HandbookSearch from "@/components/HandbookSearch";
import { buildMetadata, pickLocale, type Locale, type PageCopy } from "@/lib/i18n-metadata";
import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareAccordion,
  ShareStatementBand,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

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
    { name: "Wie schnell antwortet der Taskey-Support?", text: "In der Regel innerhalb weniger Stunden an Werktagen. Enterprise-Kunden haben einen dedizierten Account-Manager mit garantierten Reaktionszeiten per SLA." },
    { name: "Bekomme ich Hilfe beim Onboarding?", text: "Ja. Mit unserem Done-for-You Setup importieren wir Ihre Objekte, Mitarbeiter und Verträge für Sie. Ihr Betrieb ist in 48 Stunden einsatzbereit, ohne Aufwand für Sie." },
    { name: "Wo finde ich die NFC-Anleitung und Schulungsmaterial?", text: "Im Hilfecenter stellen wir Schritt-für-Schritt-Anleitungen und Kurzvideos zur Verfügung. Auf Wunsch übernehmen wir auch eine Live-Schulung für Ihr Team per Videocall." },
    { name: "Gibt es Support auch in anderen Sprachen?", text: "Die Taskey-App ist auf Deutsch, Türkisch, Russisch, Polnisch und weiteren Sprachen verfügbar. Der Support für Inhaber und Verwaltung erfolgt auf Deutsch und Englisch." },
  ],
  en: [
    { name: "How quickly does Taskey support respond?", text: "Usually within a few hours on business days. Enterprise customers get a dedicated account manager with guaranteed response times via SLA." },
    { name: "Do I get help with onboarding?", text: "Yes. With our Done-for-You setup, we import your sites, employees and contracts for you. Your operation is up and running within 48 hours, with no effort on your side." },
    { name: "Where can I find the NFC guide and training material?", text: "Our help center has step-by-step guides and short videos. On request we'll also run a live training for your team via video call." },
    { name: "Is support available in other languages?", text: "The Taskey app is available in German, Turkish, Russian, Polish and other languages. Support for owners and administration is provided in German and English." },
  ],
  fr: [
    { name: "À quelle vitesse le support Taskey répond-il ?", text: "Généralement en quelques heures les jours ouvrés. Les clients Enterprise bénéficient d'un account manager dédié avec des temps de réponse garantis par SLA." },
    { name: "Suis-je accompagné lors de l'onboarding ?", text: "Oui. Avec notre Done-for-You Setup, nous importons vos sites, employés et contrats pour vous. Votre activité est opérationnelle en 48 heures, sans effort de votre part." },
    { name: "Où trouver le guide NFC et les supports de formation ?", text: "Notre centre d'aide propose des guides pas-à-pas et des vidéos courtes. Sur demande, nous animons aussi une formation en direct pour votre équipe en visio." },
    { name: "Le support est-il disponible dans d'autres langues ?", text: "L'application Taskey est disponible en allemand, turc, russe, polonais et d'autres langues. Le support pour les dirigeants et l'administration est assuré en allemand et en anglais." },
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
    headlineLine2: "für Reinigungsbetriebe",
    intro:
      "Direkter Draht zum Team in Völklingen. Keine Tickets in einer Warteschlange, keine Hotline aus dem Ausland. Sie schreiben uns, wir antworten.",
    emailLabel: "E-Mail",
    emailBody:
      "Schreiben Sie uns Ihre Frage. Wir antworten in der Regel innerhalb weniger Stunden an Werktagen.",
    phoneLabel: "Telefon",
    phoneBody:
      "Lieber direkt sprechen? Rufen Sie uns an. Montag bis Freitag von 9 bis 18 Uhr.",
    faqHeading: "Häufige Fragen zum Support",
    ctaHeadline: "Noch kein Taskey-Konto",
    ctaBody: "Legen Sie in wenigen Minuten Ihren kostenlosen Account an. Keine Kreditkarte, danach Jahresvertrag oder monatlich kündbar.",
    ctaButton: "Jetzt starten",
    homeCrumb: "Home",
  },
  en: {
    supportBadge: "Support",
    headlineLine1: "Personal support",
    headlineLine2: "for cleaning businesses",
    intro:
      "A direct line to the team in Völklingen. No tickets in a queue, no overseas hotline. You write to us, we reply.",
    emailLabel: "Email",
    emailBody:
      "Send us your question. We usually reply within a few hours on business days.",
    phoneLabel: "Phone",
    phoneBody:
      "Prefer to talk? Give us a call. Monday to Friday, 9am to 6pm.",
    faqHeading: "Frequently asked support questions",
    ctaHeadline: "No Taskey account yet",
    ctaBody: "Create your free Taskey account in minutes. No credit card, then an annual contract or monthly rolling.",
    ctaButton: "Get started",
    homeCrumb: "Home",
  },
  fr: {
    supportBadge: "Support",
    headlineLine1: "Un support humain",
    headlineLine2: "pour les entreprises de nettoyage",
    intro:
      "Ligne directe avec l'équipe à Völklingen. Pas de tickets en file d'attente, pas de hotline à l'étranger. Vous écrivez, nous répondons.",
    emailLabel: "E-mail",
    emailBody:
      "Écrivez-nous votre question. Nous répondons en général en quelques heures les jours ouvrés.",
    phoneLabel: "Téléphone",
    phoneBody:
      "Vous préférez parler ? Appelez-nous. Du lundi au vendredi, de 9 h à 18 h.",
    faqHeading: "Questions fréquentes sur le support",
    ctaHeadline: "Pas encore de compte Taskey",
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
      "acceptedAnswer": { "@type": "Answer", "text": item.text },
    })),
  };

  const baseUrl = loc === "de" ? "https://www.taskeyapp.com" : `https://www.taskeyapp.com/${loc}`;

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { name: ui.homeCrumb, url: baseUrl },
          { name: "Support", url: `${baseUrl}/support` },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(supportFaqSchema) }} />

      {/* Hero */}
      <section className="ts-scope relative overflow-hidden pt-8 md:pt-16 pb-12 md:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(85% 60% at 85% 0%, rgba(47, 91, 148, 0.08) 0%, transparent 55%), linear-gradient(180deg, #F7F9FC 0%, #ECF0F5 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[50vh] -z-10 opacity-30 ts-dot-grid pointer-events-none"
        />
        <div className="ts-container">
          <div className="flex flex-col gap-5 max-w-3xl">
            <ShareEyebrow>{ui.supportBadge}</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="22ch">
              {ui.headlineLine1} {ui.headlineLine2}
            </ShareHeadline>
            <ShareLede maxWidth="48ch">{ui.intro}</ShareLede>
          </div>
        </div>
      </section>

      {loc === "de" && <HandbookSearch />}

      {/* Contact tiles */}
      <ShareSection tone="tinted" size="md" container="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a href="mailto:info@taskeyapp.com" className="ts-card ts-card-hover p-7 flex flex-col gap-3 group" style={{ textDecoration: "none" }}>
            <ShareEyebrow>{ui.emailLabel}</ShareEyebrow>
            <h2 className="ts-headline" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", color: "var(--ts-ink)", maxWidth: "20ch" }}>
              info@taskeyapp.com
              <BrandDot />
            </h2>
            <p className="mt-2 text-[0.98rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
              {ui.emailBody}
            </p>
          </a>
          <a href="tel:+4915168488999" className="ts-card ts-card-hover p-7 flex flex-col gap-3 group" style={{ textDecoration: "none" }}>
            <ShareEyebrow>{ui.phoneLabel}</ShareEyebrow>
            <h2 className="ts-headline" style={{ fontSize: "clamp(1.4rem, 2.6vw, 1.9rem)", color: "var(--ts-ink)", maxWidth: "20ch" }}>
              +49 151 68488999
              <BrandDot />
            </h2>
            <p className="mt-2 text-[0.98rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
              {ui.phoneBody}
            </p>
          </a>
        </div>
      </ShareSection>

      {/* FAQ */}
      <ShareSection tone="canvas" size="md">
        <div className="mb-8">
          <ShareHeadline level={2} size="lg" maxWidth="22ch">
            {ui.faqHeading}
          </ShareHeadline>
        </div>
        <ShareAccordion
          items={faq.map((f) => ({ q: f.name, a: f.text }))}
          idPrefix="faq-support"
        />
      </ShareSection>

      {/* CTA */}
      <ShareStatementBand
        title={ui.ctaHeadline}
        body={ui.ctaBody}
        primaryHref="https://signup.taskeyapp.com"
        primaryLabel={ui.ctaButton}
        primaryExternal
        secondaryHref="/pricing"
        secondaryLabel={loc === "de" ? "Preise ansehen" : loc === "en" ? "See pricing" : "Voir les tarifs"}
      />
    </>
  );
}
