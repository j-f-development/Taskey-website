"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Interaktive Zeit-&-Buchhaltung-Demo für die Features-Seite.
 * Timeline eines Arbeitstages (Check-in, Pausen, Objekt-Wechsel, Check-out).
 * Der Nutzer kann durch die Zeit springen. Status und Rentabilität
 * (Ist-Arbeitszeit, Lohnkosten, Umsatz, Marge) aktualisieren sich live.
 */

type Lang = "de" | "en" | "fr";

type EventKind = "checkin" | "break-start" | "break-end" | "switch" | "checkout";
type TimelineEvent = {
  time: string;       // "07:00"
  minutesOfDay: number; // 7 * 60
  kind: EventKind;
  label: string;
  detail?: string;
};

type Copy = {
  chip: string;
  title: string;
  intro: string;
  hint: string;
  employee: string;
  employeeSub: string;
  moments: string[];
  labelHours: string;
  labelBreak: string;
  labelWages: string;
  labelRevenue: string;
  labelMargin: string;
  statusCheckedIn: string;
  statusOnBreak: string;
  statusCheckedOut: string;
  timelineLabel: string;
  siteLabels: [string, string];
  eventLabels: {
    checkin: string;
    breakStart: string;
    breakEnd: string;
    switch: string;
    checkout: string;
  };
  breakDetail: string;
  siteDetail: (from: string, to: string) => string;
  contract: string;
  contractSub: string;
};

const DE: Copy = {
  chip: "Zeiterfassung · Live-Simulation",
  title: "Ein Tag, ein Klick, und Sie sehen jede Stunde und was sie kostet.",
  intro:
    "Anna arbeitet heute an zwei Objekten. Wählen Sie eine Uhrzeit im Tag, die Zeiterfassung, die Pausen und die Rentabilität aktualisieren sich sofort. Genau so entstehen in Taskey Stundenzettel und Objektauswertung nebenbei.",
  hint: "Beispieltag, keine Kunden-Daten.",
  employee: "Anna",
  employeeSub: "Reinigungskraft · Team Nord",
  moments: ["Vor der Schicht", "Vormittag", "Mittagspause", "Nach der Pause", "Vor Feierabend", "Feierabend"],
  labelHours: "Ist-Arbeitszeit",
  labelBreak: "Pausen (gesetzlich)",
  labelWages: "Lohnkosten heute",
  labelRevenue: "Kalkulierter Umsatz",
  labelMargin: "Marge heute",
  statusCheckedIn: "Eingecheckt",
  statusOnBreak: "In Pause",
  statusCheckedOut: "Ausgecheckt",
  timelineLabel: "Tagesverlauf",
  siteLabels: ["Bürohaus Kaiserstraße 12", "Wohnanlage Lindenhof"],
  eventLabels: {
    checkin: "Check-in",
    breakStart: "Pause",
    breakEnd: "Weiter",
    switch: "Wechsel",
    checkout: "Check-out",
  },
  breakDetail: "Automatisch gesetzt · § ArbZG",
  siteDetail: (from, to) => `${from} → ${to}`,
  contract: "Vertragswert Tag (kalkuliert)",
  contractSub: "Basis: kalkulierter Objekt-Umsatz anteilig",
};

const EN: Copy = {
  chip: "Time tracking · live simulation",
  title: "One day, one click, see every hour and what it costs.",
  intro:
    "Anna works two sites today. Pick a time during the day, time tracking, breaks and margins update instantly. That's how timesheets and site P&L come out of Taskey on the side.",
  hint: "Sample day, no customer data.",
  employee: "Anna",
  employeeSub: "Cleaner · Team North",
  moments: ["Before shift", "Morning", "Lunch break", "After break", "Late afternoon", "End of shift"],
  labelHours: "Actual working time",
  labelBreak: "Breaks (statutory)",
  labelWages: "Wage cost today",
  labelRevenue: "Calculated revenue",
  labelMargin: "Margin today",
  statusCheckedIn: "Checked in",
  statusOnBreak: "On break",
  statusCheckedOut: "Checked out",
  timelineLabel: "Day timeline",
  siteLabels: ["Office Kaiserstraße 12", "Residential Lindenhof"],
  eventLabels: {
    checkin: "Check-in",
    breakStart: "Break",
    breakEnd: "Resume",
    switch: "Switch",
    checkout: "Check-out",
  },
  breakDetail: "Set automatically · working hours act",
  siteDetail: (from, to) => `${from} → ${to}`,
  contract: "Day contract value (calculated)",
  contractSub: "Base: calculated site revenue pro rata",
};

const FR: Copy = {
  chip: "Pointage · simulation en direct",
  title: "Un jour, un clic, voyez chaque heure et ce qu'elle coûte.",
  intro:
    "Anna travaille aujourd'hui sur deux sites. Choisissez une heure dans la journée, pointage, pauses et marges se mettent à jour instantanément. C'est ainsi que Taskey génère les feuilles d'heures et les comptes par site en arrière-plan.",
  hint: "Journée d'exemple, aucune donnée client.",
  employee: "Anna",
  employeeSub: "Agent de propreté · Équipe Nord",
  moments: ["Avant la vacation", "Matinée", "Pause déjeuner", "Après la pause", "Fin d'après-midi", "Fin de journée"],
  labelHours: "Temps de travail effectif",
  labelBreak: "Pauses (légales)",
  labelWages: "Coût salarial du jour",
  labelRevenue: "Chiffre calculé",
  labelMargin: "Marge du jour",
  statusCheckedIn: "En poste",
  statusOnBreak: "En pause",
  statusCheckedOut: "Fin de poste",
  timelineLabel: "Déroulé de la journée",
  siteLabels: ["Bureau Kaiserstraße 12", "Résidence Lindenhof"],
  eventLabels: {
    checkin: "Arrivée",
    breakStart: "Pause",
    breakEnd: "Reprise",
    switch: "Changement",
    checkout: "Départ",
  },
  breakDetail: "Défini automatiquement · code du travail",
  siteDetail: (from, to) => `${from} → ${to}`,
  contract: "Valeur contrat / jour (calculée)",
  contractSub: "Base : chiffre calculé du site au prorata",
};

const COPY: Record<Lang, Copy> = { de: DE, en: EN, fr: FR };

const HOURLY_WAGE = 22; // €/h
const DAY_CONTRACT_VALUE = 340; // €/Tag (kalkulierter Umsatz für den simulierten Tag)

const MOMENT_MINUTES = [6 * 60 + 30, 9 * 60 + 45, 12 * 60 + 10, 13 * 60 + 15, 15 * 60 + 30, 16 * 60 + 30];

function buildTimeline(t: Copy): TimelineEvent[] {
  return [
    { time: "07:00", minutesOfDay: 7 * 60, kind: "checkin", label: t.eventLabels.checkin, detail: t.siteLabels[0] },
    { time: "09:30", minutesOfDay: 9 * 60 + 30, kind: "break-start", label: t.eventLabels.breakStart, detail: t.breakDetail },
    { time: "09:45", minutesOfDay: 9 * 60 + 45, kind: "break-end", label: t.eventLabels.breakEnd },
    { time: "12:00", minutesOfDay: 12 * 60, kind: "break-start", label: t.eventLabels.breakStart, detail: t.breakDetail },
    { time: "12:30", minutesOfDay: 12 * 60 + 30, kind: "break-end", label: t.eventLabels.breakEnd },
    { time: "13:00", minutesOfDay: 13 * 60, kind: "switch", label: t.eventLabels.switch, detail: t.siteDetail(t.siteLabels[0], t.siteLabels[1]) },
    { time: "16:30", minutesOfDay: 16 * 60 + 30, kind: "checkout", label: t.eventLabels.checkout, detail: t.siteLabels[1] },
  ];
}

function formatDuration(minutes: number, lang: Lang) {
  const h = Math.floor(minutes / 60);
  const m = Math.max(0, Math.round(minutes % 60));
  const hUnit = lang === "en" ? "h" : lang === "fr" ? "h" : "h";
  const mUnit = "min";
  if (h === 0) return `${m} ${mUnit}`;
  if (m === 0) return `${h} ${hUnit}`;
  return `${h} ${hUnit} ${String(m).padStart(2, "0")} ${mUnit}`;
}

function formatEuro(value: number, lang: Lang) {
  return new Intl.NumberFormat(lang === "en" ? "en-US" : lang === "fr" ? "fr-FR" : "de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(value);
}

export default function TimeAccountingDemo() {
  const { language } = useLanguage();
  const lang = (language ?? "de") as Lang;
  const t = COPY[lang];

  const [momentIdx, setMomentIdx] = useState(1);
  const currentMinutes = MOMENT_MINUTES[momentIdx];

  const timeline = useMemo(() => buildTimeline(t), [t]);

  const { workedMinutes, breakMinutes, status, activeSiteIndex } = useMemo(() => {
    let worked = 0;
    let breakMins = 0;
    let currentStatus: "before" | "checked-in" | "on-break" | "checked-out" = "before";
    let siteIdx = 0;
    let checkinTime: number | null = null;
    let breakStart: number | null = null;

    for (const ev of timeline) {
      if (ev.minutesOfDay > currentMinutes) {
        break;
      }
      if (ev.kind === "checkin") {
        checkinTime = ev.minutesOfDay;
        currentStatus = "checked-in";
      } else if (ev.kind === "break-start") {
        if (checkinTime != null) {
          worked += ev.minutesOfDay - checkinTime;
        }
        breakStart = ev.minutesOfDay;
        checkinTime = null;
        currentStatus = "on-break";
      } else if (ev.kind === "break-end") {
        if (breakStart != null) {
          breakMins += ev.minutesOfDay - breakStart;
        }
        checkinTime = ev.minutesOfDay;
        breakStart = null;
        currentStatus = "checked-in";
      } else if (ev.kind === "switch") {
        siteIdx = 1;
      } else if (ev.kind === "checkout") {
        if (checkinTime != null) {
          worked += ev.minutesOfDay - checkinTime;
        }
        checkinTime = null;
        currentStatus = "checked-out";
      }
    }

    if (checkinTime != null && currentStatus === "checked-in") {
      worked += currentMinutes - checkinTime;
    }
    if (breakStart != null && currentStatus === "on-break") {
      breakMins += currentMinutes - breakStart;
    }

    return { workedMinutes: worked, breakMinutes: breakMins, status: currentStatus, activeSiteIndex: siteIdx };
  }, [timeline, currentMinutes]);

  const workedHours = workedMinutes / 60;
  const wageCost = workedHours * HOURLY_WAGE;
  const revenueSoFar = status === "before" ? 0 : DAY_CONTRACT_VALUE;
  const margin = revenueSoFar - wageCost;
  const marginPct = revenueSoFar > 0 ? Math.round((margin / revenueSoFar) * 100) : 0;

  const dayStart = 6 * 60;
  const dayEnd = 18 * 60;
  const dayTotalMinutes = dayEnd - dayStart;
  const cursorPercent = ((currentMinutes - dayStart) / dayTotalMinutes) * 100;

  const statusLabel =
    status === "on-break"
      ? t.statusOnBreak
      : status === "checked-in"
      ? t.statusCheckedIn
      : status === "checked-out"
      ? t.statusCheckedOut
      : "-";
  const statusColor =
    status === "checked-in"
      ? "#10b981"
      : status === "on-break"
      ? "#f59e0b"
      : status === "checked-out"
      ? "#64748b"
      : "#cbd5e1";

  return (
    <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-cyan-400/50 via-blue-500/30 to-purple-500/20 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
      <div className="relative rounded-[calc(28px-1.5px)] bg-white/95 backdrop-blur-md border border-blue-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 px-6 md:px-10 pt-8 md:pt-10 pb-6 border-b border-blue-100">
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

        {/* Employee status bar */}
        <div className="px-6 md:px-10 py-5 border-b border-blue-100 bg-slate-50/60 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center h-11 w-11 rounded-full bg-indigo-500 text-white text-sm font-black shadow-md">
              A
            </span>
            <div>
              <p className="text-sm font-black text-slate-900 leading-tight">{t.employee}</p>
              <p className="text-[11.5px] text-slate-500 leading-tight">{t.employeeSub}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:ml-auto">
            <span
              className="grid place-items-center h-2.5 w-2.5 rounded-full"
              style={{ background: statusColor, boxShadow: `0 0 12px ${statusColor}80` }}
            />
            <div className="min-w-0">
              <p className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
                {statusLabel}
              </p>
              <p className="text-[12px] text-slate-700 font-semibold leading-tight">
                {status === "before"
                  ? "-"
                  : status === "checked-out"
                  ? t.siteLabels[activeSiteIndex]
                  : t.siteLabels[activeSiteIndex]}
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-6 md:px-10 py-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500">
              {t.timelineLabel}
            </span>
            <span className="font-mono text-sm font-black text-slate-900 tabular-nums">
              {String(Math.floor(currentMinutes / 60)).padStart(2, "0")}:
              {String(currentMinutes % 60).padStart(2, "0")}
            </span>
          </div>

          {/* Track */}
          <div className="relative h-16 mb-4">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-[width] duration-[var(--motion-reveal)]"
                style={{ width: `${cursorPercent}%` }}
              />
            </div>
            {/* Events */}
            {timeline.map((ev, i) => {
              const pos = ((ev.minutesOfDay - dayStart) / dayTotalMinutes) * 100;
              const isPast = ev.minutesOfDay <= currentMinutes;
              const dotColor =
                ev.kind === "checkin"
                  ? "#10b981"
                  : ev.kind === "checkout"
                  ? "#64748b"
                  : ev.kind === "break-start"
                  ? "#f59e0b"
                  : ev.kind === "break-end"
                  ? "#3b82f6"
                  : "#8b5cf6";
              return (
                <div
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
                  style={{ left: `${pos}%` }}
                >
                  <span
                    className={`h-3.5 w-3.5 rounded-full border-2 border-white transition-transform ${
                      isPast ? "scale-110 shadow-md" : "opacity-60"
                    }`}
                    style={{ background: isPast ? dotColor : "#cbd5e1" }}
                  />
                  <span
                    className={`text-[9.5px] font-mono font-bold whitespace-nowrap ${
                      isPast ? "text-slate-700" : "text-slate-400"
                    }`}
                  >
                    {ev.time}
                  </span>
                </div>
              );
            })}
            {/* Cursor */}
            <div
              className="absolute -top-2 bottom-0 w-[3px] bg-slate-900 rounded-full transition-[left] duration-[var(--motion-reveal)] shadow-md"
              style={{ left: `calc(${cursorPercent}% - 1.5px)` }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-slate-900 shadow-md" />
            </div>
          </div>

          {/* Time selector */}
          <div className="flex flex-wrap gap-2">
            {t.moments.map((m, i) => (
              <button
                key={m}
                type="button"
                onClick={() => setMomentIdx(i)}
                className={`text-[11.5px] font-bold px-3.5 py-1.5 rounded-full border transition ${
                  i === momentIdx
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Live stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 px-6 md:px-10 pb-8">
          <StatCard
            label={t.labelHours}
            value={formatDuration(workedMinutes, lang)}
            sub={`${(workedHours).toFixed(1).replace(".", lang === "de" || lang === "fr" ? "," : ".")} h`}
            tone="highlight"
          />
          <StatCard
            label={t.labelBreak}
            value={formatDuration(breakMinutes, lang)}
            sub={t.breakDetail}
            tone="warn"
          />
          <StatCard
            label={t.labelWages}
            value={formatEuro(wageCost, lang)}
            sub={`${formatEuro(HOURLY_WAGE, lang)}/h`}
            tone="neutral"
          />
          <StatCard
            label={t.contract}
            value={formatEuro(revenueSoFar, lang)}
            sub={t.contractSub}
            tone="neutral"
          />
          <StatCard
            label={t.labelMargin}
            value={formatEuro(margin, lang)}
            sub={`${marginPct}%`}
            tone={margin >= 0 ? "good" : "warn"}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  sub,
  tone,
}: {
  label: string;
  value: string;
  sub?: string;
  tone: "neutral" | "highlight" | "warn" | "good";
}) {
  const styleMap = {
    neutral: { bg: "bg-slate-50", border: "border-slate-200", labelClr: "text-slate-500", valueClr: "text-slate-900" },
    highlight: { bg: "bg-blue-50", border: "border-blue-200", labelClr: "text-blue-700", valueClr: "text-blue-900" },
    warn: { bg: "bg-amber-50", border: "border-amber-200", labelClr: "text-amber-700", valueClr: "text-amber-900" },
    good: { bg: "bg-emerald-50", border: "border-emerald-200", labelClr: "text-emerald-700", valueClr: "text-emerald-900" },
  } as const;
  const s = styleMap[tone];
  return (
    <div className={`rounded-2xl px-4 py-4 border ${s.bg} ${s.border} flex flex-col gap-1`}>
      <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${s.labelClr}`}>{label}</span>
      <span className={`text-lg md:text-xl font-black font-mono tabular-nums ${s.valueClr}`}>{value}</span>
      {sub ? <span className="text-[11.5px] text-slate-500">{sub}</span> : null}
    </div>
  );
}
