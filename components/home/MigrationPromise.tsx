"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/context/LanguageContext";

/**
 * MigrationPromise
 *
 * Verspricht Neukunden einen reibungslosen Wechsel von der bestehenden
 * Software zu Taskey: Uploadlink nach Zusage, 48 Stunden Setup, sofort
 * produktiv nutzbar. Rein additive Section, wird in page.home.tsx nach
 * AllInOneUSP eingebunden.
 */

type Beat = {
  eyebrow: string;
  title: string;
  body: string;
  metric?: string;
};

type Copy = {
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  beats: Beat[];
  reassure: string;
  ctaLabel: string;
};

const COPY: Record<Language, Copy> = {
  de: {
    badge: "Wechsel ohne Ausfall",
    title1: "Reibungsloser Wechsel.",
    title2: "In 48 Stunden übernommen.",
    subtitle:
      "Sobald Sie zusagen, kümmern wir uns um den kompletten Umzug. Ihre Daten aus der alten Software landen bei uns, wir bauen den identischen Stand in Taskey nach, und Ihr Team arbeitet weiter, als wäre nichts gewesen.",
    beats: [
      {
        eyebrow: "Schritt 1",
        title: "Sicherer Uploadlink",
        body:
          "Direkt nach Ihrer Zusage bekommen Sie einen persönlichen Uploadlink. Sie legen dort alle Daten Ihrer aktuellen Software ab, per Drag and Drop. Kein Export-Chaos, keine Excel-Verwirrung, keine offene Baustelle.",
        metric: "0 IT-Aufwand für Sie",
      },
      {
        eyebrow: "Schritt 2",
        title: "48 Stunden Übernahme",
        body:
          "Wir bringen Objekte, Mitarbeiter, Verträge, Touren und Kunden in Taskey auf exakt denselben Stand wie in Ihrer alten Software. Sauber strukturiert, vollständig übernommen, jederzeit nachvollziehbar.",
        metric: "48 h bis Go-live",
      },
      {
        eyebrow: "Schritt 3",
        title: "Sofort produktiv",
        body:
          "Ab dem Go-live nutzen Sie Taskey direkt im Alltag. Keine Parallelbetriebsphase, kein Datenverlust, keine Wartezeit. Ihr Team startet mit dem gewohnten Datenstand und kann die neuen Funktionen nach und nach ausschöpfen.",
        metric: "Direkt einsatzbereit",
      },
    ],
    reassure:
      "Der komplette Wechsel läuft betreut. Kein Copy-Paste durch Ihre Buchhaltung, kein Selbstbau am Wochenende.",
    ctaLabel: "Kennenlerngespräch buchen",
  },
  en: {
    badge: "Switch without downtime",
    title1: "Seamless switch.",
    title2: "Fully migrated in 48 hours.",
    subtitle:
      "Once you say yes, we handle the entire move. Your data from the old software comes to us, we rebuild the exact same state inside Taskey, and your team keeps working as if nothing changed.",
    beats: [
      {
        eyebrow: "Step 1",
        title: "Secure upload link",
        body:
          "Right after your green light you receive a personal upload link. You drop all data from your current software in there, drag and drop. No export mess, no spreadsheet chaos, no half-finished handover.",
        metric: "0 IT effort on your side",
      },
      {
        eyebrow: "Step 2",
        title: "48-hour migration",
        body:
          "We bring sites, employees, contracts, routes and clients into Taskey in the exact same state as in your old software. Cleanly structured, fully transferred, traceable at any time.",
        metric: "48 h to go-live",
      },
      {
        eyebrow: "Step 3",
        title: "Productive from day one",
        body:
          "From go-live on, you use Taskey in your daily operations. No parallel-run phase, no data loss, no waiting time. Your team starts with the familiar data set and unlocks the new features step by step.",
        metric: "Ready on day one",
      },
    ],
    reassure:
      "The whole switch is handled for you. No copy-paste marathon in your back office, no weekend do-it-yourself project.",
    ctaLabel: "Book a discovery call",
  },
  fr: {
    badge: "Bascule sans interruption",
    title1: "Bascule fluide.",
    title2: "Reprise complète en 48 heures.",
    subtitle:
      "Dès votre accord, nous prenons en charge la migration complète. Les données de votre logiciel actuel arrivent chez nous, nous recréons exactement le même état dans Taskey, et votre équipe continue à travailler comme si de rien n'était.",
    beats: [
      {
        eyebrow: "Étape 1",
        title: "Lien d'upload sécurisé",
        body:
          "Juste après votre accord, vous recevez un lien d'upload personnel. Vous y déposez toutes les données de votre logiciel actuel, par glisser-déposer. Pas de galère d'export, pas de chaos Excel, pas de chantier ouvert.",
        metric: "0 charge IT pour vous",
      },
      {
        eyebrow: "Étape 2",
        title: "Reprise en 48 heures",
        body:
          "Nous transférons sites, employés, contrats, tournées et clients dans Taskey, exactement dans le même état que dans votre ancien logiciel. Bien structuré, entièrement repris, traçable à tout moment.",
        metric: "48 h jusqu'au go-live",
      },
      {
        eyebrow: "Étape 3",
        title: "Opérationnel dès le premier jour",
        body:
          "Dès le go-live, vous utilisez Taskey au quotidien. Pas de phase parallèle, pas de perte de données, pas d'attente. Votre équipe démarre avec les données habituelles et exploite les nouvelles fonctions progressivement.",
        metric: "Prêt dès le jour 1",
      },
    ],
    reassure:
      "La bascule complète est prise en charge par nos soins. Pas de copier-coller par votre comptabilité, pas de bricolage le week-end.",
    ctaLabel: "Réserver un échange",
  },
};

function BeatIcon({ index }: { index: number }) {
  const common = "w-6 h-6 md:w-7 md:h-7 text-white";
  switch (index) {
    case 0:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
        </svg>
      );
    case 1:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 2:
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      );
    default:
      return null;
  }
}

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

export default function MigrationPromise() {
  const { language } = useLanguage();
  const copy = COPY[language] ?? COPY.de;

  return (
    <section
      id="migration-promise"
      aria-labelledby="migration-promise-heading"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-[45%] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[360px] h-[360px] bg-purple-500/10 blur-[110px] rounded-full" />
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
            id="migration-promise-heading"
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

        {/* Beats: 3-column flow */}
        <ol className="relative grid gap-6 md:gap-8 md:grid-cols-3">
          {/* Connector line on desktop, between the 3 cards */}
          <div
            aria-hidden
            className="hidden md:block absolute top-[4.75rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
          />

          {copy.beats.map((beat, i) => (
            <li
              key={beat.title}
              className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-white/15 via-white/5 to-white/10"
            >
              <div className="relative rounded-[calc(1.5rem-1.5px)] bg-slate-900/80 backdrop-blur-sm border border-white/5 p-7 md:p-8 h-full flex flex-col">
                {/* Eyebrow row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black tracking-[0.3em] uppercase text-cyan-300/90">
                      {beat.eyebrow}
                    </span>
                    <span className="w-8 h-px bg-cyan-300/40" />
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <BeatIcon index={i} />
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
                  {beat.title}
                </h3>

                {/* Body */}
                <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6 flex-1">
                  {beat.body}
                </p>

                {/* Metric chip */}
                {beat.metric && (
                  <div className="mt-auto inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-300/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                    <span className="text-[11px] md:text-xs font-bold tracking-wide text-cyan-100/90">
                      {beat.metric}
                    </span>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        {/* Reassurance line + CTA */}
        <div className="mt-14 md:mt-16 flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl text-sm md:text-base text-white/60 leading-relaxed">
            {copy.reassure}
          </p>
          <a
            href="#book-meeting-heading"
            onClick={(e) => handleAnchorClick(e, "#book-meeting-heading")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm md:text-base font-bold hover:from-cyan-300 hover:to-blue-400 transition-colors shadow-lg shadow-blue-500/25"
          >
            {copy.ctaLabel}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
