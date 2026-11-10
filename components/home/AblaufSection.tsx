"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";

/**
 * AblaufSection
 *
 * Erklärt in vier klaren Schritten, wie der Ablauf mit Taskey für Neukunden
 * konkret aussieht. Wird auf der Startseite vor der FAQ eingebunden, damit
 * Besucher vor dem Fragen-Abschnitt wissen, worauf sie sich einlassen.
 */

type StepCopy = {
  eyebrow: string;
  title: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
  scroll?: boolean;
};

type Copy = {
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  steps: StepCopy[];
};

const COPY: Record<Language, Copy> = {
  de: {
    badge: "In 4 Schritten zu Taskey",
    title1: "So läuft es",
    title2: "mit uns ab.",
    subtitle:
      "Klar strukturiert, ohne Überraschungen. Vom ersten Gespräch bis zum passenden Tarif begleiten wir Sie persönlich.",
    steps: [
      {
        eyebrow: "Schritt 1",
        title: "Kennenlerngespräch",
        body:
          "Komplett kostenlos und unverbindlich. Wir hören zu, verstehen Ihren Betrieb und beantworten Ihre Fragen. Kein Verkaufsdruck.",
        ctaLabel: "Jetzt Termin buchen",
        ctaHref: "#book-meeting-heading",
        scroll: true,
      },
      {
        eyebrow: "Schritt 2",
        title: "Einrichtungstermin",
        body:
          "Sie bekommen von uns einen Upload-Link. Im gemeinsamen Zoom-Meeting laden Sie alle bestehenden Daten per Drag & Drop hoch. Innerhalb von 48 Stunden ist alles vollständig in Taskey übertragen.",
      },
      {
        eyebrow: "Schritt 3",
        title: "14 Tage kostenlos testen",
        body:
          "Ihr Team nutzt Taskey mit echten Daten und im echten Alltag. Wir bleiben in dieser Zeit für Sie erreichbar, klären Rückfragen und helfen beim Feintuning.",
      },
      {
        eyebrow: "Schritt 4",
        title: "Tarif-Beratung",
        body:
          "Wir kommen aktiv auf Sie zu und besprechen gemeinsam, welcher Tarif von der Preise-Seite am besten zu Ihrem Betrieb passt. Keine automatische Verlängerung ohne Absprache.",
        ctaLabel: "Abonnements ansehen",
        ctaHref: "/pricing",
      },
    ],
  },
  en: {
    badge: "How it works in 4 steps",
    title1: "This is how",
    title2: "we work with you.",
    subtitle:
      "Clearly structured, no surprises. From the first call to the right plan, we accompany you personally throughout.",
    steps: [
      {
        eyebrow: "Step 1",
        title: "Discovery call",
        body:
          "Fully free and non-binding. We listen, understand your business and answer your questions. No sales pressure.",
        ctaLabel: "Book a call now",
        ctaHref: "#book-meeting-heading",
        scroll: true,
      },
      {
        eyebrow: "Step 2",
        title: "Setup session",
        body:
          "You receive an upload link from us. In a shared Zoom meeting, you drag and drop all existing data. Within 48 hours everything is fully transferred to Taskey.",
      },
      {
        eyebrow: "Step 3",
        title: "14 days free trial",
        body:
          "Your team uses Taskey with real data and in real daily operations. We remain reachable, answer questions and help with fine-tuning.",
      },
      {
        eyebrow: "Step 4",
        title: "Plan consultation",
        body:
          "We proactively reach out and discuss together which plan from the pricing page best fits your business. No automatic renewal without alignment.",
        ctaLabel: "See pricing",
        ctaHref: "/pricing",
      },
    ],
  },
  fr: {
    badge: "Comment ça marche en 4 étapes",
    title1: "Voici comment",
    title2: "nous travaillons avec vous.",
    subtitle:
      "Cadre clair, sans surprise. Du premier échange au tarif adapté, nous vous accompagnons personnellement.",
    steps: [
      {
        eyebrow: "Étape 1",
        title: "Prise de contact",
        body:
          "Entièrement gratuit et sans engagement. Nous écoutons, comprenons votre entreprise et répondons à vos questions. Aucune pression commerciale.",
        ctaLabel: "Réserver un créneau",
        ctaHref: "#book-meeting-heading",
        scroll: true,
      },
      {
        eyebrow: "Étape 2",
        title: "Séance d'installation",
        body:
          "Vous recevez un lien d'upload de notre part. Lors d'une réunion Zoom commune, vous téléversez toutes les données existantes par glisser-déposer. Sous 48 heures, tout est transféré dans Taskey.",
      },
      {
        eyebrow: "Étape 3",
        title: "14 jours d'essai gratuit",
        body:
          "Votre équipe utilise Taskey avec de vraies données et au quotidien. Nous restons disponibles, répondons aux questions et aidons au réglage fin.",
      },
      {
        eyebrow: "Étape 4",
        title: "Conseil sur le tarif",
        body:
          "Nous revenons vers vous activement et discutons ensemble du tarif de la page Prix le mieux adapté à votre entreprise. Aucun renouvellement automatique sans accord.",
        ctaLabel: "Voir les tarifs",
        ctaHref: "/pricing",
      },
    ],
  },
};

function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  if (!href.startsWith("#")) return;
  const target = document.getElementById(href.slice(1));
  if (!target) return;
  e.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function StepIcon({ index }: { index: number }) {
  const common =
    "w-6 h-6 md:w-7 md:h-7 text-white";
  switch (index) {
    case 0:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      );
    case 1:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.9 5 5 0 019.9-1A5.5 5.5 0 0118.5 16H13m-1-4v9m0 0l-3-3m3 3l3-3" />
        </svg>
      );
    case 2:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 3:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h10v10H7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l3 3m10-3l-3 3m3 10l3 3M7 17l-3 3" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AblaufSection() {
  const { language } = useLanguage();
  const copy = COPY[language] ?? COPY.de;

  return (
    <section
      id="ablauf"
      aria-labelledby="ablauf-heading"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-white/90 uppercase">
              {copy.badge}
            </span>
          </div>

          <h2
            id="ablauf-heading"
            className="text-[clamp(2rem,5.5vw,4rem)] font-black leading-[0.98] tracking-tight text-white mb-5"
          >
            {copy.title1}
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
              {copy.title2}
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            {copy.subtitle}
          </p>
        </div>

        {/* Steps */}
        <ol className="relative grid gap-6 md:gap-8 md:grid-cols-2">
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
          />

          {copy.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-white/10"
            >
              <div className="relative rounded-[calc(1.5rem-1.5px)] bg-slate-900/80 backdrop-blur-sm border border-white/5 p-7 md:p-8 h-full flex flex-col">
                {/* Number + Icon row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300/90">
                      {step.eyebrow}
                    </span>
                    <span className="w-8 h-px bg-cyan-300/40" />
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <StepIcon index={i} />
                  </div>
                </div>

                {/* Huge step number as watermark */}
                <div
                  aria-hidden
                  className="absolute top-4 right-6 text-6xl md:text-7xl font-black text-white/[0.04] tracking-tight leading-none pointer-events-none select-none"
                >
                  0{i + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black text-white leading-tight tracking-tight mb-3">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 flex-1">
                  {step.body}
                </p>

                {/* Optional CTA */}
                {step.ctaLabel && step.ctaHref && (
                  <div className="mt-auto">
                    {step.scroll ? (
                      <a
                        href={step.ctaHref}
                        onClick={(e) => handleAnchorClick(e, step.ctaHref!)}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-bold hover:from-cyan-300 hover:to-blue-400 transition-colors shadow-lg shadow-blue-500/25"
                      >
                        {step.ctaLabel}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={step.ctaHref}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white text-sm font-bold hover:bg-white/15 transition-colors"
                      >
                        {step.ctaLabel}
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
