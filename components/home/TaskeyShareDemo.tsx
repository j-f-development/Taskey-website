"use client";

import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  de: {
    EYEBROW: "Live-Demo · Taskey Share",
    HEAD_1: "Sehen Sie Taskey Share",
    HEAD_2: "aus Auftraggeber-Sicht.",
    LEAD: "Taskey Share ist das schlanke Portal, in dem Ihre Auftraggeber jederzeit selbst sehen, was im Objekt passiert. Live-Status, Fotos, Protokolle und Budget — ohne Anrufe, ohne E-Mails, ohne Wartezeit. Werfen Sie selbst einen Blick rein.",
    FEAT1_TAG: "Live-Status",
    FEAT1_TITLE: "Fortschritt in Echtzeit",
    FEAT1_DESC: "Auftraggeber sehen jederzeit, wo gerade gearbeitet wird und wann der nächste Einsatz ansteht.",
    FEAT2_TAG: "Nachweise",
    FEAT2_TITLE: "Fotos & Protokolle",
    FEAT2_DESC: "Bilder vom Einsatz landen automatisch im Portal — kein E-Mail-Anhang, kein Hinterherlaufen.",
    FEAT3_TAG: "Budget",
    FEAT3_TITLE: "Volle Transparenz",
    FEAT3_DESC: "Monatsbudget, gelieferte Leistungen und offene Posten sind jederzeit einsehbar.",
    FEAT4_TAG: "Kommunikation",
    FEAT4_TITLE: "Direkt im Portal",
    FEAT4_DESC: "Fragen, Freigaben und Reklamationen werden geklärt — mit einem Klick statt einem Anruf.",
    CTA: "Live-Demo öffnen",
    FOOTER: "Eigener Login pro Auftraggeber. Direkt im Browser, ohne App.",
  },
  en: {
    EYEBROW: "Live demo · Taskey Share",
    HEAD_1: "See Taskey Share",
    HEAD_2: "from your client's perspective.",
    LEAD: "Taskey Share is the lightweight portal where your clients can see for themselves at any time what's happening on site. Live status, photos, reports and budget — no calls, no emails, no waiting. Take a look for yourself.",
    FEAT1_TAG: "Live status",
    FEAT1_TITLE: "Progress in real time",
    FEAT1_DESC: "Clients see at any moment where work is happening and when the next visit is due.",
    FEAT2_TAG: "Proof of work",
    FEAT2_TITLE: "Photos & reports",
    FEAT2_DESC: "Photos from the job land automatically in the portal — no email attachments, no chasing.",
    FEAT3_TAG: "Budget",
    FEAT3_TITLE: "Full transparency",
    FEAT3_DESC: "Monthly budget, delivered services and open items are visible at any time.",
    FEAT4_TAG: "Communication",
    FEAT4_TITLE: "Right in the portal",
    FEAT4_DESC: "Questions, approvals and complaints are resolved — one click instead of one call.",
    CTA: "Open live demo",
    FOOTER: "Own login per client. Right in the browser, no app install.",
  },
  fr: {
    EYEBROW: "Démo en direct · Taskey Share",
    HEAD_1: "Découvrez Taskey Share",
    HEAD_2: "du point de vue du client.",
    LEAD: "Taskey Share est le portail léger dans lequel vos clients voient eux-mêmes à tout moment ce qui se passe sur le site. Statut en direct, photos, rapports et budget — sans appels, sans e-mails, sans attente. Jetez-y un œil par vous-même.",
    FEAT1_TAG: "Statut en direct",
    FEAT1_TITLE: "Avancement en temps réel",
    FEAT1_DESC: "Le client voit à tout moment où l'on travaille et quand la prochaine intervention est prévue.",
    FEAT2_TAG: "Justificatifs",
    FEAT2_TITLE: "Photos & rapports",
    FEAT2_DESC: "Les photos des interventions arrivent automatiquement dans le portail — fini les pièces jointes, fini la relance.",
    FEAT3_TAG: "Budget",
    FEAT3_TITLE: "Transparence totale",
    FEAT3_DESC: "Budget mensuel, prestations livrées et postes ouverts sont consultables à tout moment.",
    FEAT4_TAG: "Communication",
    FEAT4_TITLE: "Directement dans le portail",
    FEAT4_DESC: "Questions, validations et réclamations se règlent — d'un clic plutôt que d'un appel.",
    CTA: "Ouvrir la démo en direct",
    FOOTER: "Un login dédié par client. Directement dans le navigateur, sans app.",
  },
} as const;

/**
 * TaskeyShareDemo — Erklärt das Auftraggeber-Portal "Taskey Share"
 * und leitet zur Live-Demo unter demo.kunden.taskeyapp.com weiter.
 */
export default function TaskeyShareDemo() {
  const { language } = useLanguage();
  const c = CONTENT[language];
  const features = [
    {
      tag: c.FEAT1_TAG,
      title: c.FEAT1_TITLE,
      desc: c.FEAT1_DESC,
    },
    {
      tag: c.FEAT2_TAG,
      title: c.FEAT2_TITLE,
      desc: c.FEAT2_DESC,
    },
    {
      tag: c.FEAT3_TAG,
      title: c.FEAT3_TITLE,
      desc: c.FEAT3_DESC,
    },
    {
      tag: c.FEAT4_TAG,
      title: c.FEAT4_TITLE,
      desc: c.FEAT4_DESC,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-16 sm:py-20 md:py-36 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-cyan-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[500px] bg-blue-100 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-5">
            {c.EYEBROW}
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
            {c.HEAD_1}
            <br />
            <span className="text-slate-500">{c.HEAD_2}</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            {c.LEAD}
          </p>
        </div>

        {/* Feature-Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-14 md:mb-20">
          {features.map((f) => (
            <div
              key={f.tag}
              className="relative rounded-2xl bg-blue-50/60 border border-slate-200 backdrop-blur-sm p-6 md:p-7"
            >
              <span className="inline-flex text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-full bg-cyan-50 border border-cyan-300 text-blue-700 mb-5">
                {f.tag}
              </span>
              <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight mb-2">
                {f.title}
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="https://demo.kunden.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white text-base md:text-lg font-bold rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
          >
            {c.CTA}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
          <p className="text-sm text-slate-500 mt-5">
            {c.FOOTER}
          </p>
        </div>
      </div>
    </section>
  );
}
