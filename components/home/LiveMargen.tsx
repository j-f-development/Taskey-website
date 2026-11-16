'use client';

import Link from 'next/link';
import RevealBlur from './RevealBlur';
import { useLanguage } from "@/context/LanguageContext";

const CONTENT = {
  de: {
    BADGE: "Die Marge im grünen Bereich",
    HEAD_1: "Die Marge sehen Sie,",
    HEAD_2: "bevor der Monat ",
    HEAD_3: "sie versteckt.",
    LEAD: "Den Anruf vom Steuerberater, der Ihnen sagt, dass ein Auftrag ein Verlust war — den kennen Sie. Mit Taskey passiert der nicht mehr. Sie sehen es, während es passiert, und drehen bei, solange es noch etwas nützt.",
    KPI1_LABEL: "Gesamt-Marge",
    KPI1_SUB: "Ø aus 3 Objekten",
    KPI2_LABEL: "Warnung",
    KPI2_VALUE: "1 Objekt",
    KPI2_SUB: "Personalkosten 18% ↑",
    KPI3_LABEL: "In Echtzeit",
    KPI3_SUB: "Update-Latenz",
    DASH_EYEBROW: "Objekt-Übersicht",
    DASH_META: "3 aktive Verträge · heute 14:07 Uhr",
    LIVE_TAG: "LIVE",
    ROW1_NAME: "Bürogebäude Müller GmbH",
    ROW1_MARGIN_LABEL: "4.773 € Marge",
    ROW2_NAME: "Treppenhaus Hausverwaltung Krause",
    ROW2_MARGIN_LABEL: "1.804 € Marge",
    ROW3_NAME: "Klinikreinigung Waldklinik",
    ROW3_MARGIN_LABEL: "−1.587 € Verlust",
    ROW3_WARNING: "Achtung: Personalkosten 18% über Plan",
    CTA_PRIMARY: "Kostenlosen Account erstellen",
    CTA_SECONDARY: "Mehr erfahren",
    CONTRACT_SUM_LABEL: "Vertragssumme",
    COST_LABEL: "Kosten",
    PROGRESS_DONE: "abgeschlossen",
  },
  en: {
    BADGE: "The margin in the green",
    HEAD_1: "You see the margin",
    HEAD_2: "before the month ",
    HEAD_3: "hides it.",
    LEAD: "The call from your tax advisor telling you a contract was a loss — you know it. With Taskey it doesn't happen anymore. You see it while it's happening and adjust while it still matters.",
    KPI1_LABEL: "Total margin",
    KPI1_SUB: "Avg. across 3 sites",
    KPI2_LABEL: "Warning",
    KPI2_VALUE: "1 site",
    KPI2_SUB: "Labour costs 18% ↑",
    KPI3_LABEL: "Real-time",
    KPI3_SUB: "Update latency",
    DASH_EYEBROW: "Site overview",
    DASH_META: "3 active contracts · today 14:07",
    LIVE_TAG: "LIVE",
    ROW1_NAME: "Office building Müller GmbH",
    ROW1_MARGIN_LABEL: "€4,773 margin",
    ROW2_NAME: "Stairwell Hausverwaltung Krause",
    ROW2_MARGIN_LABEL: "€1,804 margin",
    ROW3_NAME: "Clinical cleaning Waldklinik",
    ROW3_MARGIN_LABEL: "−€1,587 loss",
    ROW3_WARNING: "Caution: labour costs 18% over plan",
    CTA_PRIMARY: "Create free account",
    CTA_SECONDARY: "Learn more",
    CONTRACT_SUM_LABEL: "Contract value",
    COST_LABEL: "Costs",
    PROGRESS_DONE: "complete",
  },
  fr: {
    BADGE: "La marge au vert",
    HEAD_1: "Vous voyez la marge",
    HEAD_2: "avant que le mois ",
    HEAD_3: "ne la cache.",
    LEAD: "L'appel du comptable qui vous annonce qu'un contrat a été déficitaire — vous connaissez. Avec Taskey ça n'arrive plus. Vous le voyez pendant que ça se passe et vous ajustez tant que ça sert encore.",
    KPI1_LABEL: "Marge globale",
    KPI1_SUB: "Moy. sur 3 sites",
    KPI2_LABEL: "Alerte",
    KPI2_VALUE: "1 site",
    KPI2_SUB: "Coûts de personnel 18 % ↑",
    KPI3_LABEL: "En temps réel",
    KPI3_SUB: "Latence de mise à jour",
    DASH_EYEBROW: "Vue des sites",
    DASH_META: "3 contrats actifs · aujourd'hui 14h07",
    LIVE_TAG: "LIVE",
    ROW1_NAME: "Immeuble de bureaux Müller GmbH",
    ROW1_MARGIN_LABEL: "4 773 € de marge",
    ROW2_NAME: "Cage d'escalier Hausverwaltung Krause",
    ROW2_MARGIN_LABEL: "1 804 € de marge",
    ROW3_NAME: "Nettoyage clinique Waldklinik",
    ROW3_MARGIN_LABEL: "−1 587 € de perte",
    ROW3_WARNING: "Attention : coûts de personnel 18 % au-dessus du plan",
    CTA_PRIMARY: "Créer un compte gratuit",
    CTA_SECONDARY: "En savoir plus",
    CONTRACT_SUM_LABEL: "Montant du contrat",
    COST_LABEL: "Coûts",
    PROGRESS_DONE: "achevé",
  },
} as const;

/**
 * LiveMargen — Revolut-Style Bühne:
 * Zentrierte Headline, großes Dashboard-Center-Piece, floating KPI-Chips drumherum.
 * Kein Split-Layout – ein Hero-Moment mit einem einzigen Dashboard als Star.
 */
export default function LiveMargen() {
  const { language } = useLanguage();
  const c = CONTENT[language];
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-16 sm:py-20 md:py-36 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[72px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[500px] bg-red-500/10 rounded-full blur-[72px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — zentriert */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-slate-200 text-emerald-700 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-6 backdrop-blur-md">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            {c.BADGE}
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
            {c.HEAD_1}
            <br />
            <span className="text-slate-500">{c.HEAD_2}</span>
            <span className="text-emerald-600">{c.HEAD_3}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {c.LEAD}
          </p>
        </div>

        {/* Dashboard Stage — großes Center-Piece */}
        <div className="relative max-w-5xl mx-auto">
          {/* Floating KPI Chips — desktop only */}
          <div className="hidden lg:block absolute -left-8 top-20 z-20 animate-[float_6s_ease-in-out_infinite]">
            <KpiChip tone="emerald" label={c.KPI1_LABEL} value="+9,8%" sub={c.KPI1_SUB} />
          </div>
          <div className="hidden lg:block absolute -right-8 top-8 z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
            <KpiChip tone="red" label={c.KPI2_LABEL} value={c.KPI2_VALUE} sub={c.KPI2_SUB} pulse />
          </div>
          <div className="hidden lg:block absolute -right-4 bottom-16 z-20 animate-[float_8s_ease-in-out_infinite]">
            <KpiChip tone="neutral" label={c.KPI3_LABEL} value="0,3 s" sub={c.KPI3_SUB} />
          </div>

          {/* Dashboard Card */}
          <RevealBlur>
          <div className="relative rounded-3xl bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-2xl shadow-blue-900/15 p-4 sm:p-6 md:p-8 backdrop-blur-sm">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between gap-3 mb-6 md:mb-8 pb-5 border-b border-slate-200/60">
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-bold">{c.DASH_EYEBROW}</p>
                <p className="text-xs sm:text-sm md:text-base text-slate-900 font-bold mt-1 leading-tight">{c.DASH_META}</p>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold flex-shrink-0">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                {c.LIVE_TAG}
              </div>
            </div>

            {/* Contracts */}
            <div className="space-y-3">
              <ContractRow
                name={c.ROW1_NAME}
                sum="38.500 €"
                margin="+12,4%"
                marginLabel={c.ROW1_MARGIN_LABEL}
                tone="emerald"
                progress={68}
                cost="26.120 €"
                sumLabel={c.CONTRACT_SUM_LABEL}
                costLabel={c.COST_LABEL}
                progressLabel={c.PROGRESS_DONE}
              />
              <ContractRow
                name={c.ROW2_NAME}
                sum="22.000 €"
                margin="+8,2%"
                marginLabel={c.ROW2_MARGIN_LABEL}
                tone="emerald"
                progress={45}
                cost="9.350 €"
                sumLabel={c.CONTRACT_SUM_LABEL}
                costLabel={c.COST_LABEL}
                progressLabel={c.PROGRESS_DONE}
              />
              <ContractRow
                name={c.ROW3_NAME}
                sum="51.200 €"
                margin="−3,1%"
                marginLabel={c.ROW3_MARGIN_LABEL}
                tone="red"
                progress={82}
                cost="43.280 €"
                warning={c.ROW3_WARNING}
                sumLabel={c.CONTRACT_SUM_LABEL}
                costLabel={c.COST_LABEL}
                progressLabel={c.PROGRESS_DONE}
              />
            </div>
          </div>
          </RevealBlur>

          {/* Shadow / Glow */}
          <div className="absolute -inset-8 rounded-[3rem] bg-emerald-500/5 blur-3xl -z-10" />
        </div>

        {/* CTA unter dem Dashboard */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-14">
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-blue-500 transition-colors"
          >
            {c.CTA_PRIMARY}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-blue-100 transition-colors"
          >
            {c.CTA_SECONDARY}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

function KpiChip({
  tone,
  label,
  value,
  sub,
  pulse,
}: {
  tone: 'emerald' | 'red' | 'neutral';
  label: string;
  value: string;
  sub: string;
  pulse?: boolean;
}) {
  const colors = {
    emerald: { ring: 'border-emerald-300', val: 'text-emerald-700', dot: 'bg-emerald-400' },
    red: { ring: 'border-red-400/30', val: 'text-red-300', dot: 'bg-red-400' },
    neutral: { ring: 'border-slate-200', val: 'text-white', dot: 'bg-white/60' },
  }[tone];
  return (
    <div className={`relative px-4 py-3 rounded-2xl bg-white/95 border ${colors.ring} backdrop-blur-md shadow-2xl shadow-blue-900/18 min-w-[180px]`}>
      <div className="flex items-center gap-2 mb-1">
        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} ${pulse ? 'animate-pulse' : ''}`} />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">{label}</span>
      </div>
      <div className={`text-2xl font-black ${colors.val} leading-none mb-1`}>{value}</div>
      <div className="text-[11px] text-slate-500">{sub}</div>
    </div>
  );
}

function ContractRow({
  name,
  sum,
  margin,
  marginLabel,
  tone,
  progress,
  cost,
  warning,
  sumLabel,
  costLabel,
  progressLabel,
}: {
  name: string;
  sum: string;
  margin: string;
  marginLabel: string;
  tone: 'emerald' | 'red';
  progress: number;
  cost: string;
  warning?: string;
  sumLabel: string;
  costLabel: string;
  progressLabel: string;
}) {
  const isRed = tone === 'red';
  return (
    <div
      className={`rounded-2xl p-4 md:p-5 border ${
        isRed
          ? 'bg-red-950/30 border-red-500/20'
          : 'bg-blue-50/70 border-slate-200/60 hover:border-slate-200'
      } transition-colors relative overflow-hidden`}
    >
      {isRed && <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-500 animate-pulse" />}
      <div className="flex items-center justify-between mb-3 gap-3">
        <div className="min-w-0">
          <p className="text-slate-900 font-bold text-sm md:text-base truncate">{name}</p>
          <p className="text-slate-500 text-xs mt-0.5">{sumLabel}: {sum}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className={`font-black text-xl md:text-2xl leading-none ${isRed ? 'text-red-400' : 'text-emerald-600'}`}>
            {margin}
          </p>
          <p className={`text-[11px] mt-1 ${isRed ? 'text-red-400/70' : 'text-emerald-600/70'}`}>{marginLabel}</p>
        </div>
      </div>
      <div className="w-full bg-blue-50 rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-full rounded-full ${
            isRed ? 'bg-gradient-to-r from-red-500 to-red-400' : 'bg-gradient-to-r from-emerald-500 to-emerald-400'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="flex justify-between mt-2 text-[10px] text-slate-500">
        <span>{costLabel}: {cost}</span>
        <span>{progress}% {progressLabel}</span>
      </div>
      {warning && (
        <div className="mt-3 flex items-start gap-2 text-red-400 text-xs font-bold">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
          {warning}
        </div>
      )}
    </div>
  );
}
