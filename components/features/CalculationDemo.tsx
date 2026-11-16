"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Interaktive Kalkulations-Demo für die Features-Seite.
 * Slider: Fläche m², Frequenz pro Woche, Stundenlohn, Zielmarge.
 * Live-Berechnung: Zeitaufwand, Lohnkosten, empfohlener Preis, Marge in €.
 * Basierend auf branchen-üblicher Reinigungsleistung (100 m²/h Unterhaltsreinigung).
 */

type Lang = "de" | "en" | "fr";

type Copy = {
  chip: string;
  title: string;
  intro: string;
  inputsLabel: string;
  outputsLabel: string;
  area: string;
  areaUnit: string;
  frequency: string;
  frequencyUnit: (n: number) => string;
  hourly: string;
  targetMargin: string;
  time: string;
  timeUnit: string;
  timeSub: (visits: number) => string;
  wage: string;
  wageSub: string;
  price: string;
  priceSub: string;
  margin: string;
  marginSub: string;
  marginNegative: string;
  ruleLabel: string;
  ruleBody: string;
  hint: string;
  hintValues: string;
};

const COPY: Record<Lang, Copy> = {
  de: {
    chip: "Live-Kalkulation · Beispiel",
    title: "Bewegen Sie die Regler. Sie sehen, was ein Objekt kostet.",
    intro:
      "Vier Angaben, nämlich Fläche, Frequenz, Stundenlohn und Zielmarge. Sie sehen den empfohlenen Monatspreis, die tatsächlichen Lohnkosten und die Marge in Euro. So wie es in Taskey pro Objekt läuft, nur mit Beispiel-Werten.",
    inputsLabel: "Ihre Eingaben",
    outputsLabel: "Ergebnis",
    area: "Fläche",
    areaUnit: "m²",
    frequency: "Reinigungsfrequenz",
    frequencyUnit: (n) => (n === 1 ? "1× pro Woche" : `${n}× pro Woche`),
    hourly: "Stundenlohn",
    targetMargin: "Zielmarge",
    time: "Zeitaufwand pro Monat",
    timeUnit: "h",
    timeSub: (v) => `Ø ${v} Einsätze im Monat`,
    wage: "Lohnkosten pro Monat",
    wageSub: "auf Basis Ihres Stundensatzes",
    price: "Empfohlener Monatspreis",
    priceSub: "damit die Zielmarge erreicht wird",
    margin: "Marge pro Monat",
    marginSub: "Ihr Gewinn nach Lohnkosten",
    marginNegative: "unter Zielmarge",
    ruleLabel: "Rechenregel",
    ruleBody:
      "100 m²/h Unterhaltsreinigung als Branchen-Richtwert · Monat = 4,33 Wochen · Preis so gesetzt, dass Zielmarge nach Lohn erreicht wird. Weitere Kosten (Material, Fahrt, Fixanteil) hinterlegen Sie in Taskey pro Objekt individuell.",
    hint: "Beispiel-Werte, keine Kunden-Daten.",
    hintValues: "Bewegen Sie die Regler, die Zahlen aktualisieren sich sofort.",
  },
  en: {
    chip: "Live calculation · sample",
    title: "Move the sliders. You see what a site really costs.",
    intro:
      "Four inputs: area, frequency, hourly rate, target margin. You see the recommended monthly price, the actual wage cost and the margin in Euros. Same logic as inside Taskey per site, just with sample values.",
    inputsLabel: "Your inputs",
    outputsLabel: "Result",
    area: "Area",
    areaUnit: "m²",
    frequency: "Cleaning frequency",
    frequencyUnit: (n) => (n === 1 ? "1× per week" : `${n}× per week`),
    hourly: "Hourly wage",
    targetMargin: "Target margin",
    time: "Time per month",
    timeUnit: "h",
    timeSub: (v) => `Ø ${v} visits per month`,
    wage: "Wage cost per month",
    wageSub: "based on your hourly rate",
    price: "Recommended monthly price",
    priceSub: "so target margin is reached",
    margin: "Margin per month",
    marginSub: "your profit after wages",
    marginNegative: "below target margin",
    ruleLabel: "Calculation rule",
    ruleBody:
      "100 m²/h general cleaning as an industry benchmark · month = 4.33 weeks · price set so target margin is reached after wages. Additional costs (material, travel, fixed share) are handled per site inside Taskey.",
    hint: "Sample values, no customer data.",
    hintValues: "Move the sliders, the numbers update immediately.",
  },
  fr: {
    chip: "Calcul en direct · exemple",
    title: "Déplacez les curseurs. Vous voyez ce qu'un site coûte vraiment.",
    intro:
      "Quatre saisies : surface, fréquence, taux horaire, marge cible. Vous voyez le prix mensuel recommandé, le coût salarial réel et la marge en euros. Même logique qu'à l'intérieur de Taskey par site, avec des valeurs d'exemple.",
    inputsLabel: "Vos saisies",
    outputsLabel: "Résultat",
    area: "Surface",
    areaUnit: "m²",
    frequency: "Fréquence de nettoyage",
    frequencyUnit: (n) => (n === 1 ? "1× par semaine" : `${n}× par semaine`),
    hourly: "Taux horaire",
    targetMargin: "Marge cible",
    time: "Temps par mois",
    timeUnit: "h",
    timeSub: (v) => `Ø ${v} interventions par mois`,
    wage: "Coût salarial par mois",
    wageSub: "sur la base de votre taux horaire",
    price: "Prix mensuel recommandé",
    priceSub: "pour atteindre la marge cible",
    margin: "Marge par mois",
    marginSub: "votre bénéfice après salaires",
    marginNegative: "sous la marge cible",
    ruleLabel: "Règle de calcul",
    ruleBody:
      "100 m²/h en nettoyage courant comme référence sectorielle · mois = 4,33 semaines · prix défini pour atteindre la marge cible après salaires. Coûts supplémentaires (matériel, trajet, part fixe) à définir par site dans Taskey.",
    hint: "Valeurs d'exemple, aucune donnée client.",
    hintValues: "Déplacez les curseurs, les chiffres se mettent à jour immédiatement.",
  },
};

const CLEANING_RATE_M2_PER_HOUR = 100;
const WEEKS_PER_MONTH = 4.33;

function formatNumber(value: number, lang: Lang, decimals = 0) {
  return new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "de-DE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function formatEuro(value: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export default function CalculationDemo() {
  const { language } = useLanguage();
  const lang = (language ?? "de") as Lang;
  const t = COPY[lang];

  const [area, setArea] = useState(420);
  const [frequency, setFrequency] = useState(3);
  const [hourly, setHourly] = useState(22);
  const [margin, setMargin] = useState(25);

  const result = useMemo(() => {
    const hoursPerVisit = area / CLEANING_RATE_M2_PER_HOUR;
    const visitsPerMonth = frequency * WEEKS_PER_MONTH;
    const hoursPerMonth = hoursPerVisit * visitsPerMonth;
    const wageCost = hoursPerMonth * hourly;
    const targetMarginFraction = Math.min(0.95, Math.max(0, margin / 100));
    const recommendedPrice = wageCost / (1 - targetMarginFraction);
    const marginEuro = recommendedPrice - wageCost;
    const marginPercentActual = recommendedPrice > 0 ? (marginEuro / recommendedPrice) * 100 : 0;
    return {
      hoursPerMonth,
      visitsPerMonth,
      wageCost,
      recommendedPrice,
      marginEuro,
      marginPercentActual,
    };
  }, [area, frequency, hourly, margin]);

  return (
    <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/20 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="relative rounded-[calc(28px-1.5px)] bg-white/95 backdrop-blur-md border border-blue-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-6 md:px-10 pt-8 md:pt-10 pb-6 md:pb-8 border-b border-blue-100">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 border border-cyan-300 px-3 py-1 text-[10px] font-black tracking-[0.28em] uppercase text-blue-700 mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              {t.chip}
            </span>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
              {t.title}
            </h3>
            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              {t.intro}
            </p>
          </div>
          <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">
            {t.hint}
          </span>
        </div>

        {/* Body: Inputs + Outputs side by side on desktop */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-0">
          {/* Inputs */}
          <div className="px-6 md:px-10 py-8 md:py-10 border-r-0 lg:border-r border-b lg:border-b-0 border-blue-100 bg-slate-50/50 flex flex-col gap-7">
            <p className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500">
              {t.inputsLabel}
            </p>

            <SliderField
              label={t.area}
              value={area}
              min={50}
              max={2000}
              step={10}
              onChange={setArea}
              formatValue={(v) => `${formatNumber(v, lang)} ${t.areaUnit}`}
              accentFrom="#22d3ee"
              accentTo="#3b82f6"
            />

            <SliderField
              label={t.frequency}
              value={frequency}
              min={1}
              max={7}
              step={1}
              onChange={setFrequency}
              formatValue={(v) => t.frequencyUnit(v)}
              accentFrom="#22d3ee"
              accentTo="#3b82f6"
            />

            <SliderField
              label={t.hourly}
              value={hourly}
              min={15}
              max={35}
              step={0.5}
              onChange={setHourly}
              formatValue={(v) => `${formatEuro(v, lang)}/h`}
              accentFrom="#22d3ee"
              accentTo="#3b82f6"
            />

            <SliderField
              label={t.targetMargin}
              value={margin}
              min={5}
              max={45}
              step={1}
              onChange={setMargin}
              formatValue={(v) => `${v} %`}
              accentFrom="#22d3ee"
              accentTo="#3b82f6"
            />

            <p className="text-[11px] text-slate-500 leading-relaxed italic">
              {t.hintValues}
            </p>
          </div>

          {/* Outputs */}
          <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col gap-5">
            <p className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500">
              {t.outputsLabel}
            </p>

            <ResultRow
              label={t.time}
              value={`${formatNumber(result.hoursPerMonth, lang, 1)} ${t.timeUnit}`}
              sub={t.timeSub(Math.round(result.visitsPerMonth))}
              tone="neutral"
            />

            <ResultRow
              label={t.wage}
              value={formatEuro(result.wageCost, lang)}
              sub={t.wageSub}
              tone="neutral"
            />

            <ResultRow
              label={t.price}
              value={formatEuro(result.recommendedPrice, lang)}
              sub={t.priceSub}
              tone="highlight"
            />

            <MarginBar
              marginEuro={result.marginEuro}
              marginPercent={result.marginPercentActual}
              targetPercent={margin}
              label={t.margin}
              subLabel={t.marginSub}
              lang={lang}
              formatEuroFn={formatEuro}
            />

            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-4 flex items-start gap-3">
              <div className="grid place-items-center h-8 w-8 rounded-full bg-slate-100 text-slate-500 flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="5.6" stroke="currentColor" strokeWidth="1.3" />
                  <path d="M7 9.8v-3.3M7 4.6v.05" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[10.5px] font-black tracking-[0.2em] uppercase text-slate-500 mb-1">
                  {t.ruleLabel}
                </p>
                <p className="text-[12.5px] text-slate-600 leading-relaxed">{t.ruleBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  formatValue,
  accentFrom,
  accentTo,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  formatValue: (v: number) => string;
  accentFrom: string;
  accentTo: string;
}) {
  const percent = ((value - min) / (max - min)) * 100;
  const trackBackground = `linear-gradient(to right, ${accentFrom} 0%, ${accentTo} ${percent}%, #e2e8f0 ${percent}%, #e2e8f0 100%)`;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-sm font-semibold text-slate-700">{label}</label>
        <span className="font-mono text-sm font-black text-slate-900 tabular-nums">
          {formatValue(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="calc-slider w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{ background: trackBackground }}
        aria-label={label}
      />
      <style jsx>{`
        .calc-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 999px;
          background: #ffffff;
          border: 2px solid ${accentTo};
          box-shadow: 0 4px 10px -2px rgba(15, 23, 42, 0.18);
          cursor: pointer;
          transition: transform var(--motion-press) var(--ease-out);
        }
        .calc-slider::-webkit-slider-thumb:hover {
          transform: scale(1.12);
        }
        .calc-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 999px;
          background: #ffffff;
          border: 2px solid ${accentTo};
          box-shadow: 0 4px 10px -2px rgba(15, 23, 42, 0.18);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function ResultRow({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  tone: "neutral" | "highlight";
}) {
  const isHighlight = tone === "highlight";
  return (
    <div
      className={`rounded-2xl px-4 py-3 flex flex-col gap-0.5 border ${
        isHighlight
          ? "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200"
          : "bg-slate-50 border-slate-200"
      }`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span
          className={`text-[11px] font-black tracking-[0.18em] uppercase ${
            isHighlight ? "text-blue-700" : "text-slate-500"
          }`}
        >
          {label}
        </span>
        <span
          className={`font-mono font-black tabular-nums ${
            isHighlight ? "text-blue-900 text-lg md:text-xl" : "text-slate-900 text-base"
          }`}
        >
          {value}
        </span>
      </div>
      {sub ? <span className="text-[11.5px] text-slate-500">{sub}</span> : null}
    </div>
  );
}

function MarginBar({
  marginEuro,
  marginPercent,
  targetPercent,
  label,
  subLabel,
  lang,
  formatEuroFn,
}: {
  marginEuro: number;
  marginPercent: number;
  targetPercent: number;
  label: string;
  subLabel: string;
  lang: Lang;
  formatEuroFn: (v: number, l: Lang) => string;
}) {
  const isGood = marginPercent >= targetPercent - 0.1;
  const fillPct = Math.max(0, Math.min(100, marginPercent / 0.45));
  return (
    <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-cyan-50 px-4 py-4 flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <div className="min-w-0">
          <span className="text-[11px] font-black tracking-[0.18em] uppercase text-emerald-700">
            {label}
          </span>
          <p className="text-[11.5px] text-slate-500 mt-0.5">{subLabel}</p>
        </div>
        <div className="text-right shrink-0">
          <span className="font-mono font-black text-emerald-900 text-lg md:text-xl tabular-nums block">
            {formatEuroFn(marginEuro, lang)}
          </span>
          <span
            className={`text-[11px] font-mono font-semibold ${
              isGood ? "text-emerald-700" : "text-amber-700"
            }`}
          >
            {marginPercent.toFixed(1)} %
          </span>
        </div>
      </div>
      <div className="relative h-2 rounded-full bg-white/70 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-[var(--motion-reveal)] ease-[var(--ease-out)]"
          style={{
            width: `${fillPct}%`,
            background: "linear-gradient(90deg, #22c55e, #10b981)",
          }}
        />
        <div
          className="absolute inset-y-0 w-[2px] bg-amber-500"
          style={{ left: `${(targetPercent / 45) * 100}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
