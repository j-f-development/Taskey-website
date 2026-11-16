"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/**
 * Interaktive NFC-Scan-Demo für die Features-Seite.
 * Links: NFC-Tag am Objekt (SVG-Illustration). Rechts: Phone-Mockup mit Scan-CTA.
 * Klick auf „Scannen" → kurze Animation → Nachweis erscheint (Objekt, Zeitstempel,
 * GPS, Mitarbeiter, Aufgaben). Vier Presets zum Durchwechseln (verschiedene Räume).
 */

type Lang = "de" | "en" | "fr";

type ScanPreset = {
  id: string;
  location: string;
  address: string;
  gps: string;
  time: string;
  date: string;
  employee: { name: string; initials: string; color: string };
  tasks: string[];
  status: string;
};

type Copy = {
  chip: string;
  title: string;
  intro: string;
  hint: string;
  scanCta: string;
  scanning: string;
  scannedLabel: string;
  presetsLabel: string;
  fields: {
    location: string;
    time: string;
    gps: string;
    employee: string;
    tasks: string;
    status: string;
  };
  tapHint: string;
  proofLabel: string;
  proofSub: string;
  presets: ScanPreset[];
};

const EMP_COLORS = { anna: "#6366f1", mehmet: "#0ea5e9", daniel: "#f59e0b", klara: "#ec4899" };

const DE: Copy = {
  chip: "NFC-Scan · interaktiv",
  title: "Handy an den Tag halten. Nachweis fertig.",
  intro:
    "Jedes Objekt bekommt einen wetterfesten NFC-Aufkleber. Ein kurzer Kontakt mit dem Handy startet den Einsatz, erfasst Zeit, GPS und Mitarbeiter, und legt den Nachweis unveränderlich ab. Tippen Sie unten auf Scannen, um zu sehen, was dabei automatisch entsteht.",
  hint: "Beispiel-Werte, keine Kunden-Daten.",
  scanCta: "Scannen",
  scanning: "Erkenne Tag …",
  scannedLabel: "Scan aktiv",
  presetsLabel: "Beispiel-Objekte",
  fields: {
    location: "Objekt",
    time: "Zeitstempel",
    gps: "Standort",
    employee: "Mitarbeiter",
    tasks: "Aufgaben heute",
    status: "Status",
  },
  tapHint: "Tippen Sie auf den Scan-Button, um den nächsten Tag zu simulieren.",
  proofLabel: "Nachweis",
  proofSub: "unveränderlich · serverseitig signiert",
  presets: [
    {
      id: "kaiser-eg",
      location: "Bürohaus Kaiserstraße 12 · Treppenhaus EG",
      address: "Kaiserstraße 12, 66333 Völklingen",
      gps: "49.2492° N · 6.8542° E",
      time: "07:12",
      date: "Mo, 04.09.2026",
      employee: { name: "Anna", initials: "A", color: EMP_COLORS.anna },
      tasks: ["Feucht wischen", "Handläufe desinfizieren", "Fußmatte tauschen"],
      status: "Einsatz gestartet",
    },
    {
      id: "linden-2og",
      location: "Wohnanlage Lindenhof · Aufgang C · 2. OG",
      address: "Lindenhofstraße 8, 66333 Völklingen",
      gps: "49.2508° N · 6.8571° E",
      time: "09:34",
      date: "Mo, 04.09.2026",
      employee: { name: "Daniel", initials: "D", color: EMP_COLORS.daniel },
      tasks: ["Treppen kehren", "Fensterbänke abwischen"],
      status: "Einsatz gestartet",
    },
    {
      id: "kraus-wc",
      location: "Praxis Dr. Kraus · Sanitärbereich",
      address: "Rathausplatz 3, 66333 Völklingen",
      gps: "49.2481° N · 6.8523° E",
      time: "16:45",
      date: "Do, 07.09.2026",
      employee: { name: "Klara", initials: "K", color: EMP_COLORS.klara },
      tasks: ["Sanitärgrundreinigung", "Desinfektion nach Plan", "Verbrauchsmaterial auffüllen"],
      status: "Sonderreinigung",
    },
    {
      id: "sonnen-tg",
      location: "Wohnpark Sonnenfeld · Tiefgarage Ebene 1",
      address: "Sonnenfelder Weg 22, 66333 Völklingen",
      gps: "49.2467° N · 6.8598° E",
      time: "06:04",
      date: "Di, 05.09.2026",
      employee: { name: "Mehmet", initials: "M", color: EMP_COLORS.mehmet },
      tasks: ["Kehren", "Ölflecken markieren", "Ecken absaugen"],
      status: "Einsatz gestartet",
    },
  ],
};

const EN: Copy = {
  chip: "NFC scan · interactive",
  title: "Tap the tag. Proof is done.",
  intro:
    "Every site gets a weatherproof NFC sticker. A short tap with the phone starts the job, records time, GPS and employee, and files the proof, immutable. Click Scan to see what happens automatically.",
  hint: "Sample values, no customer data.",
  scanCta: "Scan",
  scanning: "Reading tag …",
  scannedLabel: "Scan active",
  presetsLabel: "Sample sites",
  fields: {
    location: "Site",
    time: "Timestamp",
    gps: "Location",
    employee: "Employee",
    tasks: "Tasks today",
    status: "Status",
  },
  tapHint: "Tap the scan button to simulate the next tag.",
  proofLabel: "Proof",
  proofSub: "immutable · server-signed",
  presets: [
    {
      id: "kaiser-eg",
      location: "Office Kaiserstraße 12 · Staircase ground floor",
      address: "Kaiserstraße 12, 66333 Völklingen",
      gps: "49.2492° N · 6.8542° E",
      time: "07:12",
      date: "Mon, 04 Sep 2026",
      employee: { name: "Anna", initials: "A", color: EMP_COLORS.anna },
      tasks: ["Wet-mop floors", "Disinfect handrails", "Change doormat"],
      status: "Job started",
    },
    {
      id: "linden-2og",
      location: "Lindenhof residential · Entrance C · 2nd floor",
      address: "Lindenhofstraße 8, 66333 Völklingen",
      gps: "49.2508° N · 6.8571° E",
      time: "09:34",
      date: "Mon, 04 Sep 2026",
      employee: { name: "Daniel", initials: "D", color: EMP_COLORS.daniel },
      tasks: ["Sweep stairs", "Wipe window sills"],
      status: "Job started",
    },
    {
      id: "kraus-wc",
      location: "Dr. Kraus practice · Sanitary area",
      address: "Rathausplatz 3, 66333 Völklingen",
      gps: "49.2481° N · 6.8523° E",
      time: "16:45",
      date: "Thu, 07 Sep 2026",
      employee: { name: "Klara", initials: "K", color: EMP_COLORS.klara },
      tasks: ["Deep clean sanitary", "Disinfection per plan", "Refill consumables"],
      status: "Special cleaning",
    },
    {
      id: "sonnen-tg",
      location: "Sonnenfeld park · Underground level 1",
      address: "Sonnenfelder Weg 22, 66333 Völklingen",
      gps: "49.2467° N · 6.8598° E",
      time: "06:04",
      date: "Tue, 05 Sep 2026",
      employee: { name: "Mehmet", initials: "M", color: EMP_COLORS.mehmet },
      tasks: ["Sweep", "Mark oil spots", "Vacuum corners"],
      status: "Job started",
    },
  ],
};

const FR: Copy = {
  chip: "Scan NFC · interactif",
  title: "Approchez le téléphone. La preuve est faite.",
  intro:
    "Chaque site reçoit une étiquette NFC résistante aux intempéries. Un bref contact avec le téléphone lance l'intervention, enregistre l'heure, le GPS et l'employé, et archive la preuve, inaltérable. Cliquez sur Scanner pour voir ce qui se passe automatiquement.",
  hint: "Valeurs d'exemple, aucune donnée client.",
  scanCta: "Scanner",
  scanning: "Lecture de l'étiquette …",
  scannedLabel: "Scan actif",
  presetsLabel: "Sites d'exemple",
  fields: {
    location: "Site",
    time: "Horodatage",
    gps: "Position",
    employee: "Employé",
    tasks: "Tâches du jour",
    status: "Statut",
  },
  tapHint: "Appuyez sur le bouton scan pour simuler l'étiquette suivante.",
  proofLabel: "Preuve",
  proofSub: "inaltérable · signée côté serveur",
  presets: [
    {
      id: "kaiser-eg",
      location: "Bureau Kaiserstraße 12 · Cage d'escalier RDC",
      address: "Kaiserstraße 12, 66333 Völklingen",
      gps: "49.2492° N · 6.8542° E",
      time: "07:12",
      date: "Lun, 04.09.2026",
      employee: { name: "Anna", initials: "A", color: EMP_COLORS.anna },
      tasks: ["Serpillière humide", "Désinfecter les mains courantes", "Changer le paillasson"],
      status: "Intervention démarrée",
    },
    {
      id: "linden-2og",
      location: "Résidence Lindenhof · Entrée C · 2e étage",
      address: "Lindenhofstraße 8, 66333 Völklingen",
      gps: "49.2508° N · 6.8571° E",
      time: "09:34",
      date: "Lun, 04.09.2026",
      employee: { name: "Daniel", initials: "D", color: EMP_COLORS.daniel },
      tasks: ["Balayer les escaliers", "Essuyer les appuis"],
      status: "Intervention démarrée",
    },
    {
      id: "kraus-wc",
      location: "Cabinet Dr. Kraus · Sanitaires",
      address: "Rathausplatz 3, 66333 Völklingen",
      gps: "49.2481° N · 6.8523° E",
      time: "16:45",
      date: "Jeu, 07.09.2026",
      employee: { name: "Klara", initials: "K", color: EMP_COLORS.klara },
      tasks: ["Nettoyage sanitaire", "Désinfection selon plan", "Réapprovisionner"],
      status: "Nettoyage spécial",
    },
    {
      id: "sonnen-tg",
      location: "Parc Sonnenfeld · Sous-sol niveau 1",
      address: "Sonnenfelder Weg 22, 66333 Völklingen",
      gps: "49.2467° N · 6.8598° E",
      time: "06:04",
      date: "Mar, 05.09.2026",
      employee: { name: "Mehmet", initials: "M", color: EMP_COLORS.mehmet },
      tasks: ["Balayer", "Marquer les taches d'huile", "Aspirer les coins"],
      status: "Intervention démarrée",
    },
  ],
};

const COPY: Record<Lang, Copy> = { de: DE, en: EN, fr: FR };

export default function NfcDemo() {
  const { language } = useLanguage();
  const lang = (language ?? "de") as Lang;
  const t = COPY[lang];

  const [presetIdx, setPresetIdx] = useState(0);
  const [phase, setPhase] = useState<"idle" | "scanning" | "done">("done");

  const current = t.presets[presetIdx];

  const triggerScan = () => {
    setPhase("scanning");
    setTimeout(() => setPhase("done"), 900);
  };

  const goNext = () => {
    setPresetIdx((i) => (i + 1) % t.presets.length);
    triggerScan();
  };

  const selectPreset = (i: number) => {
    setPresetIdx(i);
    triggerScan();
  };

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

        {/* Body */}
        <div className="grid lg:grid-cols-[380px_1fr] gap-0">
          {/* Phone + tag illustration */}
          <div className="relative bg-slate-50/60 border-b lg:border-b-0 lg:border-r border-blue-100 py-8 px-6 flex items-center justify-center overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-8 left-8 h-32 w-32 rounded-full bg-cyan-200/40 blur-3xl" />
              <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />
            </div>

            <div className="relative flex flex-col items-center gap-5">
              {/* Phone mockup */}
              <div className="relative">
                <div className="w-[220px] rounded-[36px] bg-slate-900 p-[10px] shadow-[0_25px_60px_-20px_rgba(15,23,42,0.5)]">
                  <div className="rounded-[28px] bg-white overflow-hidden aspect-[9/16] relative">
                    {/* Notch */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 rounded-full bg-slate-900 z-10" />
                    {/* Screen content */}
                    <div className="pt-8 pb-4 px-4 h-full flex flex-col">
                      <div className="text-center pb-3 border-b border-slate-100">
                        <p className="text-[8px] font-black tracking-[0.28em] uppercase text-blue-700">
                          Taskey
                        </p>
                        <p className="text-[9px] text-slate-500 mt-0.5">{current.date}</p>
                      </div>
                      {phase === "scanning" ? (
                        <div className="flex-1 flex flex-col items-center justify-center gap-3">
                          <div className="relative h-16 w-16">
                            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
                            <div className="absolute inset-2 rounded-full bg-blue-500/40" />
                            <div className="absolute inset-4 rounded-full bg-blue-600" />
                          </div>
                          <p className="text-[11px] font-black text-blue-700 tracking-wide">
                            {t.scanning}
                          </p>
                        </div>
                      ) : (
                        <div className="flex-1 flex flex-col items-center justify-center gap-3 px-2 text-center">
                          <div
                            className="grid place-items-center h-12 w-12 rounded-full text-white text-sm font-black shadow-md"
                            style={{ background: current.employee.color }}
                          >
                            {current.employee.initials}
                          </div>
                          <p className="text-[10.5px] font-bold text-slate-900 leading-tight">
                            {current.location}
                          </p>
                          <p className="text-[9.5px] text-slate-500">{current.time}</p>
                          <span className="mt-1 inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[8.5px] font-black tracking-wider uppercase text-emerald-700">
                            {t.scannedLabel}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* NFC Tag graphic */}
              <div className="flex items-center gap-3 text-slate-500">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" aria-hidden="true">
                  <rect
                    x="1"
                    y="1"
                    width="40"
                    height="40"
                    rx="10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M13 21c0-4.4 3.6-8 8-8M17 21c0-2.2 1.8-4 4-4M21 21h.03"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                  <path
                    d="M29 21c0-4.4-3.6-8-8-8M25 21c0-2.2-1.8-4-4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    opacity="0.55"
                  />
                </svg>
                <div className="text-[10.5px] leading-tight">
                  <p className="font-black tracking-[0.18em] uppercase text-slate-600">NFC-Tag</p>
                  <p className="text-slate-400">{current.location.split("·")[0].trim()}</p>
                </div>
              </div>

              {/* Scan CTA */}
              <button
                type="button"
                onClick={triggerScan}
                disabled={phase === "scanning"}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 text-white text-sm font-bold px-6 py-3 shadow-[0_18px_40px_-18px_rgba(37,99,235,0.7)] hover:bg-blue-500 transition disabled:opacity-70 disabled:cursor-wait"
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M3 10c0-3.9 3.1-7 7-7M6 10c0-2.2 1.8-4 4-4M10 10h.03"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M17 10c0-3.9-3.1-7-7-7M14 10c0-2.2-1.8-4-4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
                {t.scanCta}
              </button>
              <p className="text-[10.5px] text-slate-400 text-center max-w-[240px] leading-relaxed">
                {t.tapHint}
              </p>
            </div>
          </div>

          {/* Proof card */}
          <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col gap-5">
            <div className="flex items-baseline justify-between gap-3">
              <div>
                <p className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500">
                  {t.proofLabel}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">{t.proofSub}</p>
              </div>
              <span className="text-[11px] font-mono text-slate-400">#{current.id.toUpperCase()}</span>
            </div>

            <div className={`transition-opacity duration-[var(--motion-reveal)] ${phase === "scanning" ? "opacity-40" : "opacity-100"}`}>
              <div className="flex flex-col gap-3">
                <ProofRow icon="location" label={t.fields.location} value={current.location} sub={current.address} />
                <ProofRow icon="clock" label={t.fields.time} value={`${current.time} · ${current.date}`} />
                <ProofRow icon="gps" label={t.fields.gps} value={current.gps} />
                <ProofRow
                  icon="employee"
                  label={t.fields.employee}
                  value={current.employee.name}
                  employeeColor={current.employee.color}
                  employeeInitials={current.employee.initials}
                />
              </div>

              <div className="mt-5 rounded-2xl bg-blue-50/70 border border-blue-200 px-4 py-4">
                <p className="text-[10px] font-black tracking-[0.2em] uppercase text-blue-700 mb-2">
                  {t.fields.tasks}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {current.tasks.map((task) => (
                    <li key={task} className="flex items-start gap-2 text-[13px] text-slate-800">
                      <svg
                        className="w-3.5 h-3.5 mt-0.5 text-blue-600 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11.5px] text-emerald-700 font-semibold">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                {current.status}
              </div>
            </div>
          </div>
        </div>

        {/* Preset selector */}
        <div className="px-6 md:px-10 py-4 border-t border-blue-100 bg-slate-50/60">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <span className="text-[10px] font-black tracking-[0.28em] uppercase text-slate-500">
              {t.presetsLabel}
            </span>
            <div className="flex flex-wrap gap-2 flex-1">
              {t.presets.map((p, i) => {
                const isActive = i === presetIdx;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => selectPreset(i)}
                    className={`text-[11.5px] font-bold px-3 py-1.5 rounded-full border transition ${
                      isActive
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
                    }`}
                  >
                    {p.location.split("·")[0].trim()}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="text-[11.5px] font-bold px-3 py-1.5 rounded-full text-blue-700 hover:text-blue-600 transition inline-flex items-center gap-1.5"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProofRow({
  icon,
  label,
  value,
  sub,
  employeeColor,
  employeeInitials,
}: {
  icon: "location" | "clock" | "gps" | "employee";
  label: string;
  value: string;
  sub?: string;
  employeeColor?: string;
  employeeInitials?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="grid place-items-center h-8 w-8 rounded-lg bg-slate-100 text-slate-500 flex-shrink-0 mt-0.5">
        {icon === "location" ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 12s4-3.4 4-6.5A4 4 0 0 0 3 5.5C3 8.6 7 12 7 12z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <circle cx="7" cy="5.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        ) : icon === "clock" ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.4" />
            <path d="M7 4v3l2 1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ) : icon === "gps" ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.4" />
            <circle cx="7" cy="7" r="1.6" fill="currentColor" />
            <line x1="7" y1="1" x2="7" y2="3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="7" y1="11" x2="7" y2="13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="1" y1="7" x2="3" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="11" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ) : employeeColor && employeeInitials ? (
          <span
            className="grid place-items-center h-6 w-6 rounded-full text-white text-[10px] font-black"
            style={{ background: employeeColor }}
          >
            {employeeInitials}
          </span>
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10.5px] font-black tracking-[0.18em] uppercase text-slate-500">{label}</p>
        <p className="text-sm font-semibold text-slate-900 leading-tight break-words">{value}</p>
        {sub ? <p className="text-[11.5px] text-slate-500 mt-0.5">{sub}</p> : null}
      </div>
    </div>
  );
}
