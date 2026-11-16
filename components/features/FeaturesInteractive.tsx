"use client";

import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import { EASE_OUT, durations } from "@/lib/motion";
import PhotoZoom from "@/components/share/PhotoZoom";
import { BrandDot } from "@/components/BrandDot";
import { FEATURE_SCREENSHOTS, type FeatureScreenshot } from "./screenshots";
import fd from "./FeaturesDemo.module.css";

/** Auto-Wechsel der Tabs: so lange bleibt jeder Tab offen, in Sekunden. Ein eigener Klick beendet den Auto-Wechsel. */
const TAB_SECONDS = 8;

type ModuleKey =
  | "zeiterfassung"
  | "einsatzplanung"
  | "nachweise"
  | "live-margen"
  | "rechnungen"
  | "auftraggeber"
  | "mobile"
  | "sicherheit";

type Module = {
  key: ModuleKey;
  index: string;
  tab: string;
  eyebrow: string;
  title: string;
  copy: string;
};

const MODULES: Module[] = [
  {
    key: "zeiterfassung",
    index: "01",
    tab: "NFC-Zeiterfassung",
    eyebrow: "Zeiterfassung",
    title: "NFC-Check-in direkt am Objekt",
    copy: "Mitarbeitende halten das Telefon an einen NFC-Tag am Objekt. Taskey schreibt Start, Ende und Pause minutengenau, mit Standort und Gerät protokolliert.",
  },
  {
    key: "einsatzplanung",
    index: "02",
    tab: "Einsatzplanung",
    eyebrow: "Personal und Einsatz",
    title: "Objekte, Teams und Schichten in einer Fläche",
    copy: "Pläne pro Objekt und Team, Vertretungen und Krank gleich sichtbar, Push-Benachrichtigung direkt auf das Mitarbeiterhandy.",
  },
  {
    key: "nachweise",
    index: "03",
    tab: "Nachweise",
    eyebrow: "Qualität",
    title: "Nachweise mit Foto, Zeit und Ort",
    copy: "Jeder Raum, jede Leistung, dokumentiert mit Foto, Uhrzeit und Mitarbeiterkürzel. Als PDF für Audit und Kunde exportierbar, revisionsfest.",
  },
  {
    key: "live-margen",
    index: "04",
    tab: "Live-Margen",
    eyebrow: "Finanzen",
    title: "Deckungsbeitrag pro Objekt in Echtzeit",
    copy: "Stundensatz, Fahrzeit und Material fließen in die Objektkalkulation. Sie sehen täglich, welches Objekt verdient und welches nicht.",
  },
  {
    key: "rechnungen",
    index: "05",
    tab: "Rechnungen",
    eyebrow: "Buchhaltung",
    title: "Rechnungen und DATEV-Export",
    copy: "Angebote, Rechnungen, Mahnungen und Lohnlisten in einem System. ZUGFeRD E-Rechnung inklusive, DATEV-Format für das Lohnbüro.",
  },
  {
    key: "auftraggeber",
    index: "06",
    tab: "Auftraggeber",
    eyebrow: "Kundenportal",
    title: "Taskey Share für Auftraggeber",
    copy: "Ihre Kunden sehen Pläne, Nachweise und Beanstandungen in einem eigenen Zugang. Kein E-Mail-Pingpong, ein geteilter Stand.",
  },
  {
    key: "mobile",
    index: "07",
    tab: "Mobile App",
    eyebrow: "App",
    title: "Für Reinigungskräfte und Subunternehmer",
    copy: "Offlinefest, klar, auf das Nötige reduziert. iOS-App für Mitarbeiter, Objektleitung und Subunternehmer mit getrennten Rollen.",
  },
  {
    key: "sicherheit",
    index: "08",
    tab: "Sicherheit",
    eyebrow: "Betrieb",
    title: "Server in Deutschland, Audit-Trail inklusive",
    copy: "Hosting ausschließlich in Deutschland. Rollen granular, jede Aktion protokolliert, dokumentierte Prozesse für Ausschreibung und Audit.",
  },
];

export default function FeaturesInteractive() {
  /** dir: aus welcher Richtung der neue Inhalt kommt (1 = Tab liegt rechts, -1 = links). */
  const [{ active, dir }, setTab] = useState<{ active: ModuleKey; dir: number }>({ active: "zeiterfassung", dir: 0 });
  const m = MODULES.find((x) => x.key === active)!;
  const reduced = useReducedMotion();
  const d = durations(reduced);
  const select = useCallback(
    (key: ModuleKey, forceDir?: number) =>
      setTab((t) => {
        if (t.active === key) return t;
        const from = MODULES.findIndex((x) => x.key === t.active);
        const to = MODULES.findIndex((x) => x.key === key);
        return { active: key, dir: forceDir ?? Math.sign(to - from) };
      }),
    [],
  );

  /* ---------- Auto-Wechsel (wie das Funktionen-Fenster auf der Startseite) ---------- */
  const rootRef = useRef<HTMLElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const autoRef = useRef(true); // false, sobald der Besucher selbst klickt (endgültig)
  const stepRef = useRef(0); // Index des aktiven Tabs
  const stepStart = useRef(0);
  const pauseAt = useRef(0);
  const inView = useRef(false);

  /** Lade-Strich unter dem AKTIVEN Tab: zeigt, wie lange er noch bleibt. */
  const setBars = useCallback((k: number) => {
    const active = autoRef.current ? stepRef.current : -1;
    barRefs.current.forEach((b, i) => {
      if (b) b.style.transform = `scaleX(${i === active ? Math.min(Math.max(k, 0), 1) : 0})`;
    });
  }, []);

  useEffect(() => {
    let raf = 0;
    stepStart.current = performance.now();
    pauseAt.current = performance.now();
    const tick = (now: number) => {
      const running = autoRef.current && inView.current && !document.hidden;
      if (running) {
        if (pauseAt.current) {
          stepStart.current += now - pauseAt.current; // dort weiter, wo pausiert wurde
          pauseAt.current = 0;
        }
        const k = (now - stepStart.current) / 1000 / TAB_SECONDS;
        if (k >= 1) {
          stepRef.current = (stepRef.current + 1) % MODULES.length;
          stepStart.current = now;
          select(MODULES[stepRef.current].key, 1); // Auto-Wechsel geht immer „weiter“
          setBars(0);
        } else setBars(k);
      } else if (!pauseAt.current) pauseAt.current = now;
      if (autoRef.current) raf = requestAnimationFrame(tick); // nach eigenem Klick: vorbei
    };
    raf = requestAnimationFrame(tick);

    // Läuft nur, solange der Bereich gut sichtbar ist (60 % des Bereichs oder des Bildschirms)
    const io = new IntersectionObserver(
      ([e]) => {
        const need = Math.min(e.boundingClientRect.height, window.innerHeight) * 0.6;
        inView.current = e.isIntersecting && e.intersectionRect.height >= need;
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
    );
    if (rootRef.current) io.observe(rootRef.current);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [select, setBars]);

  /** Eigener Klick: Auto-Wechsel endet endgültig, alle Striche bleiben leer. */
  const pick = (key: ModuleKey) => {
    autoRef.current = false;
    setBars(0);
    select(key);
  };

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden"
      style={{
        background: "var(--ts-canvas-elev)",
        paddingBlock: "var(--ts-section-py)",
        borderTop: "1px solid var(--ts-line)",
      }}
    >
      <div className="ts-container-wide">
        {/* Tab buttons */}
        <div
          className="flex flex-wrap items-center gap-2 mb-8 p-2"
          style={{
            background: "var(--ts-canvas)",
            border: "1px solid var(--ts-line)",
            borderRadius: "var(--ts-r-panel)",
          }}
          role="tablist"
          aria-label="Taskey Module"
        >
          <LayoutGroup id="features-tabs">
          {MODULES.map((mod, i) => {
            const isActive = mod.key === active;
            return (
              <button
                key={mod.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => pick(mod.key)}
                className="relative px-3 py-2 text-[0.85rem] font-medium flex items-center gap-2 whitespace-nowrap transition-[color,transform] active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-signal-blue)]"
                style={{
                  color: isActive ? "var(--brand-white)" : "var(--ts-ink-soft)",
                  border: "1px solid transparent",
                  borderRadius: "var(--ts-r-chip)",
                }}
              >
                {/* Blauer Hintergrund gleitet zum gewählten Tab */}
                {isActive && (
                  <motion.span
                    layoutId="features-tab-bg"
                    aria-hidden
                    transition={{ layout: { duration: d.REVEAL, ease: EASE_OUT } }}
                    style={{
                      position: "absolute",
                      inset: -1,
                      zIndex: 0,
                      background: "var(--brand-signal-blue)",
                      borderRadius: "var(--ts-r-chip)",
                      boxShadow: "0 1px 2px rgba(47, 91, 148, 0.28)",
                    }}
                  />
                )}
                <span
                  className="relative z-[1] font-mono text-[0.68rem] transition-colors"
                  style={{
                    color: isActive ? "rgba(247,249,252,0.7)" : "var(--ts-ink-faint)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {mod.index}
                </span>
                <span className="relative z-[1]">{mod.tab}</span>
                <span className={fd.tabTrack} aria-hidden>
                  <span
                    className={fd.tabBar}
                    ref={(el) => {
                      barRefs.current[i] = el;
                    }}
                  />
                </span>
              </button>
            );
          })}
          </LayoutGroup>
        </div>

        {/* Content: gleitet leicht aus der Richtung des gewählten Tabs herein */}
        <motion.div
          key={active}
          role="tabpanel"
          aria-label={m.tab}
          initial={dir === 0 ? false : { opacity: 0, x: reduced ? 0 : dir * 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: d.REVEAL, ease: EASE_OUT }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          {/* Copy */}
          <div className="lg:col-span-5 min-w-0 flex flex-col gap-4">
            <span className="ts-eyebrow">{m.eyebrow}</span>
            <h2
              className="ts-headline"
              style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.4rem)", color: "var(--ts-ink)" }}
            >
              {m.title}
              <BrandDot />
            </h2>
            <p
              className="text-[1rem] md:text-[1.05rem] leading-[1.65]"
              style={{ color: "var(--ts-ink-muted)", maxWidth: "48ch" }}
            >
              {m.copy}
            </p>
          </div>

          {/* Demo */}
          <div className="lg:col-span-7 min-w-0">
            <DemoFrame moduleKey={active} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────
   Dashboard-Fenster
   Alle acht Fenster sind exakt gleich groß (Höhe fest in
   FeaturesDemo.module.css), damit beim Tab-Wechsel nichts springt.
   Begriffe, Spalten, Karten und Farben stammen aus den Aufnahmen
   des echten Dashboards (2-animationen-html, 5-taskey-share.mp4).
   ────────────────────────────────────────────────────────────── */

/** Farben wie im echten Dashboard. */
const C = {
  ink: "#18181b",
  mut: "#71717a",
  faint: "#a1a1aa",
  line: "#e4e4e7",
  soft: "#fafafa",
  blue: "#197caf",
  blueBg: "#e8f3f9",
  green: "#2f9e5f",
  greenBg: "#eaf6ef",
  red: "#d33f55",
  redBg: "#fdeef0",
  orange: "#e38b0b",
} as const;

function DemoFrame({ moduleKey }: { moduleKey: ModuleKey }) {
  // Echter Screenshot, sobald einer in components/features/screenshots.ts eingetragen ist
  const shot: FeatureScreenshot = FEATURE_SCREENSHOTS[moduleKey];
  return (
    <div
      data-demo-frame
      className="relative overflow-hidden"
      style={{
        borderRadius: "var(--ts-r-panel)",
        border: "1px solid var(--ts-line-strong)",
        boxShadow: "var(--ts-shadow-lg)",
        background: "#fff",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-3"
        style={{
          height: 36,
          borderBottom: "1px solid var(--ts-line)",
          background: "rgba(255,255,255,0.75)",
        }}
      >
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#E94B6A" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#F59E0B" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#22C55E" }} />
        <span
          className="ml-3 text-[0.72rem] truncate"
          style={{ color: "var(--ts-ink-muted)", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}
        >
          dashboard.taskeyapp.com{shot.path ?? `/${moduleKey}`}
        </span>
        {!shot.src && (
          <span className="ml-auto ts-chip shrink-0" style={{ fontSize: "0.58rem", padding: "0.18rem 0.5rem" }}>
            Demo
          </span>
        )}
      </div>

      <div className={fd.body}>
        {shot.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={shot.src}
            alt={shot.alt}
            loading="lazy"
            decoding="async"
            style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left" }}
          />
        ) : (
          <>
            {moduleKey === "zeiterfassung" && <DemoZeiterfassung />}
            {moduleKey === "einsatzplanung" && <DemoEinsatzplanung />}
            {moduleKey === "nachweise" && <DemoNachweise />}
            {moduleKey === "live-margen" && <DemoLiveMargen />}
            {moduleKey === "rechnungen" && <DemoRechnungen />}
            {moduleKey === "auftraggeber" && <DemoAuftraggeber />}
            {moduleKey === "mobile" && <DemoMobile />}
            {moduleKey === "sicherheit" && <DemoSicherheit />}
          </>
        )}
      </div>
    </div>
  );
}

/* ── Bausteine im Stil des Dashboards ───────────────────────── */

const FINANZ_TABS = ["Übersicht", "Rechnungen", "Auto-Rechnungen", "Angebote", "Ausgaben", "Gehaltsübersicht", "Nach Objekt", "Dokumente"];

function Crumb({ page }: { page: string }) {
  return (
    <div className={fd.crumb}>
      <span style={{ color: C.mut }}>Workspace</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.mut} strokeWidth="2" aria-hidden>
        <path d="m9 18 6-6-6-6" />
      </svg>
      <b>{page}</b>
    </div>
  );
}

function SubTabs({ items, active }: { items: string[]; active: string }) {
  return (
    <div className={fd.subtabs}>
      {items.map((t) => (
        <span key={t} className={t === active ? fd.subtabOn : undefined}>
          {t}
        </span>
      ))}
    </div>
  );
}

type Action = { label: string; kind?: "primary" | "outline" | "text"; plus?: boolean };
function PageHead({ title, sub, meta, actions }: { title: string; sub: string; meta?: string; actions?: Action[] }) {
  return (
    <div className={fd.head}>
      <div className="min-w-0">
        <h3 className={fd.title}>{title}</h3>
        <p className={fd.sub}>{sub}</p>
        {meta && <p className={fd.meta}>{meta}</p>}
      </div>
      {actions && (
        <div className={fd.actions}>
          {actions.map((a) => (
            <span key={a.label} className={`${fd.btn} ${a.kind === "primary" ? fd.btnPr : a.kind === "text" ? fd.btnTx : ""}`}>
              {a.plus && <span aria-hidden>+</span>}
              {a.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

type Kpi = { label: string; value: string; foot?: string; tone?: "green" | "red" };
/** Kennzahl-Kästen: alle Kästen einer Reihe exakt gleich groß. */
function Kpis({ items }: { items: Kpi[] }) {
  return (
    <div className={`${fd.kpis} ${items.length === 4 ? fd.kpis4 : ""}`} style={{ ["--n" as string]: items.length }}>
      {items.map((k) => (
        <div key={k.label} data-kpi className={fd.kpi}>
          <div className={fd.kpiLabel}>{k.label}</div>
          <div className={fd.kpiValue} style={{ color: k.tone ? C[k.tone] : C.ink }}>
            {k.value}
          </div>
          <div className={fd.kpiFoot}>{k.foot ?? " "}</div>
        </div>
      ))}
    </div>
  );
}

function Pill({ label, tone }: { label: string; tone: "green" | "blue" | "grey" }) {
  const t = {
    green: { bg: C.greenBg, fg: C.green, bd: "#bfe3cd" },
    blue: { bg: C.blue, fg: "#fff", bd: C.blue },
    grey: { bg: "#f4f4f5", fg: "#3f3f46", bd: C.line },
  }[tone];
  return (
    <span className={fd.pill} style={{ background: t.bg, color: t.fg, borderColor: t.bd }}>
      {tone === "green" && <i style={{ background: C.green }} />}
      {label}
    </span>
  );
}

/* ── Demo 1 · Zeiterfassung (Referenz: 4-taskey-zeiterfassung) ── */

function DemoZeiterfassung() {
  const rows = [
    { who: "Ramona Biewer", obj: "Treppenhaus Moselstraße 49, Trier", room: "Treppenhaus", start: "07:42", dur: "0h 0m 08s" },
    { who: "Mehmet Arslan", obj: "Geschäftshaus Brotstraße 17", room: "Foyer", start: "07:38", dur: "0h 4m 14s" },
    { who: "Ahmad Haidari", obj: "EDEKA Erfurt Goethestraße", room: "Kassenzone", start: "07:31", dur: "0h 11m 14s" },
    { who: "Angela Fischer", obj: "dm Bielefeld Mühlenweg", room: "Lager", start: "07:24", dur: "0h 18m 14s" },
    { who: "Stefan Becker", obj: "REWE Regensburg Poststraße", room: "Verkaufsfläche", start: "07:12", dur: "0h 30m 14s" },
    { who: "Anna Katharina Berger", obj: "E WERK Saarbrücken", room: "WC Herren", start: "06:58", dur: "0h 44m 14s" },
    { who: "Svenja Hansen", obj: "Wohnanlage Mühlbach", room: "Treppenhaus", start: "06:45", dur: "0h 57m 14s" },
  ];
  return (
    <div className={fd.page}>
      <Crumb page="Zeiterfassung" />
      <PageHead
        title="Zeiterfassung"
        sub="Arbeitszeiten transparent erfassen und prüfen."
        actions={[{ label: "Nachgetragene Einsätze", kind: "text" }, { label: "Stunden erfassen", plus: true }]}
      />
      <Kpis
        items={[
          { label: "Aktive Sitzungen", value: "8" },
          { label: "Heute abgeschlossen", value: "3" },
          { label: "Gesamt Sessions", value: "129" },
        ]}
      />
      <SubTabs items={["Einsätze", "Stempelprotokoll"]} active="Einsätze" />
      <div className={`${fd.table} ${fd.tZeit}`}>
        <div className={fd.th}>
          <span>Mitarbeiter</span>
          <span>Objekt / Auftrag</span>
          <span className={fd.hideSm}>Startzeit</span>
          <span className={fd.r}>Dauer</span>
          <span>Status</span>
        </div>
        {rows.map((r) => (
          <div key={r.who} className={fd.tr}>
            <b className="truncate">{r.who}</b>
            <span className="truncate" style={{ color: C.mut }}>
              {r.obj} <small>· {r.room}</small>
            </span>
            <span className={fd.hideSm} style={{ color: C.mut }}>
              14.11.2026 · {r.start}–
            </span>
            <b className={fd.r}>{r.dur}</b>
            <span>
              <Pill label="Aktiv" tone="green" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Demo 2 · Personalplanung (Referenz: 2-taskey-personalplanung) ── */

type Shift = { day: number; time: string; obj: string; tone: "green" | "blue" | "orange" } | { day: number; sick: true };
function DemoEinsatzplanung() {
  const days = [
    ["Montag", "16.11."],
    ["Dienstag", "17.11."],
    ["Mittwoch", "18.11."],
    ["Donnerstag", "19.11."],
    ["Freitag", "20.11."],
    ["Samstag", "21.11."],
    ["Sonntag", "22.11."],
  ];
  const team: { who: string; hours: string; pct: number; shifts: Shift[] }[] = [
    {
      who: "Agnieszka Nowicka",
      hours: "7,5 h / 9,3 h",
      pct: 81,
      shifts: [
        { day: 0, time: "08:00 → 09:30", obj: "Treppenhaus Eschenweg", tone: "green" },
        { day: 1, time: "08:00 → 11:00", obj: "Wohnanlage Mühlbach", tone: "green" },
        { day: 4, time: "08:00 → 11:00", obj: "Wohnanlage Mühlbach", tone: "green" },
      ],
    },
    {
      who: "Ahmad Haidari",
      hours: "6 h / 9,3 h",
      pct: 65,
      shifts: [
        { day: 1, time: "05:00 → 07:00", obj: "EDEKA Erfurt Goethestraße", tone: "blue" },
        { day: 3, time: "05:00 → 07:00", obj: "EDEKA Erfurt Goethestraße", tone: "blue" },
        { day: 5, time: "05:00 → 07:00", obj: "EDEKA Erfurt Goethestraße", tone: "blue" },
      ],
    },
    {
      who: "Andrea Huber",
      hours: "6 h / 6,5 h",
      pct: 92,
      shifts: [
        { day: 0, time: "05:00 → 07:00", obj: "REWE Regensburg", tone: "blue" },
        { day: 2, sick: true },
        { day: 4, time: "05:00 → 07:00", obj: "REWE Regensburg", tone: "blue" },
      ],
    },
    {
      who: "Angela Fischer",
      hours: "10 h / 10,6 h",
      pct: 94,
      shifts: [0, 1, 2, 3, 4].map((day) => ({ day, time: "08:00 → 10:00", obj: "dm Bielefeld Mitte", tone: "orange" as const })),
    },
  ];
  const toneColor = { green: C.green, blue: C.blue, orange: C.orange };
  return (
    <div className={fd.page}>
      <Crumb page="Personalplanung" />
      <PageHead
        title="Personalplanung"
        sub="Die richtige Besetzung für jeden Standort und jede Schicht."
        actions={[{ label: "Schicht planen", plus: true }, { label: "Plan exportieren", kind: "primary" }]}
      />
      <div className={fd.toolbar}>
        <span className={fd.btn}>Heute</span>
        <span className={fd.btn}>16.11.2026 → 22.11.2026</span>
        <span className={fd.seg}>
          <span>Tag</span>
          <span className={fd.segOn}>Woche</span>
          <span>Monat</span>
        </span>
      </div>
      <div className={fd.legend}>
        <span style={{ color: C.red }}>Fehlt</span>
        <span style={{ color: C.red }}>Nicht erschienen</span>
        <span style={{ color: C.blue }}>Läuft</span>
        <span style={{ color: C.green }}>Erledigt</span>
        <span style={{ color: C.mut }}>Abwesend</span>
      </div>
      <div className={fd.plan}>
        <div className={fd.planHd} style={{ color: C.blue }}>
          Mitarbeiter
        </div>
        {days.map(([d, dt]) => (
          <div key={d} className={fd.planHd}>
            <b>{d}</b>
            <span style={{ color: C.mut }}>{dt}</span>
          </div>
        ))}
        {team.map((p) => (
          <Fragment key={p.who}>
            <div className={fd.planWho}>
              <b className="truncate">{p.who}</b>
              <span style={{ color: C.mut }}>Reinigungskraft</span>
              <span className={fd.planHours}>
                <span style={{ color: C.mut }}>{p.hours}</span>
                <b style={{ color: p.pct > 92 ? C.orange : C.green }}>{p.pct}%</b>
              </span>
              <i className={fd.planBar}>
                <i style={{ transform: `scaleX(${p.pct / 100})`, background: p.pct > 92 ? C.orange : C.green }} />
              </i>
            </div>
            {days.map(([d], di) => {
              const sh = p.shifts.find((x) => x.day === di);
              return (
                <div key={`${p.who}-${d}`} className={fd.planCell}>
                  {sh && "sick" in sh ? (
                    <div className={fd.sick}>
                      <b>Krank</b>
                      <span className="truncate">{p.who.split(" ")[0]} {p.who.split(" ")[1]} fehlt</span>
                    </div>
                  ) : sh ? (
                    <div className={fd.shift} style={{ borderLeftColor: toneColor[sh.tone] }}>
                      <span style={{ color: C.mut }}>{sh.time}</span>
                      <b className="truncate">{sh.obj}</b>
                      <span className="truncate" style={{ color: C.mut }}>
                        Reinigungskraft
                      </span>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

/* ── Demo 3 · Nachweise ─────────────────────────────────────── */
/* In den Dashboard-Aufnahmen nicht enthalten: Inhalt unverändert. */

function DemoNachweise() {
  const items = [
    { obj: "Rheinallee · 3. OG", task: "Grundreinigung", time: "08:42", who: "MK", status: "ok" as const,
      img: "nachweis-1-rheinallee-3og-flur", alt: "Gereinigter Büroflur mit Glastüren, Rheinallee 3. OG" },
    { obj: "Süd · Halle B", task: "Unterhaltsreinigung", time: "10:14", who: "YD", status: "ok" as const,
      img: "nachweis-2-sued-halle-b", alt: "Gereinigte Lagerhalle mit Betonboden, Halle B" },
    { obj: "Behrens · Behandlung 2", task: "Desinfektion", time: "06:55", who: "AW", status: "ok" as const,
      img: "nachweis-3-behrens-behandlung-2", alt: "Desinfizierter Behandlungsraum einer Praxis" },
    { obj: "Lindenthal · Kasse", task: "Fensterreinigung", time: "22:48", who: "TR", status: "warn" as const,
      img: "nachweis-4-lindenthal-kasse", alt: "Gereinigte Glasfront im Kassenbereich am Abend" },
    // Beleg fehlt noch: kein Foto, Streifenmuster bleibt
    { obj: "Sonnenblume · Flur", task: "Grundreinigung", time: "Offen", who: "EP", status: "bad" as const,
      img: null, alt: "" },
    { obj: "Rheinallee · 2. OG", task: "Unterhaltsreinigung", time: "09:03", who: "MK", status: "ok" as const,
      img: "nachweis-6-rheinallee-2og-buero", alt: "Gereinigtes Großraumbüro, Rheinallee 2. OG" },
  ];
  const statusTint: Record<"ok" | "warn" | "bad", { fg: string; label: string }> = {
    ok: { fg: "var(--ts-good)", label: "Freigegeben" },
    warn: { fg: "var(--ts-warn)", label: "Prüfen" },
    bad: { fg: "var(--ts-bad)", label: "Ausstehend" },
  };

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <SectionHeadline eyebrow="Heute · 41 Belege" title="Leistungsnachweise mit Foto" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((it) => {
          const s = statusTint[it.status];
          return (
            <div
              key={it.obj + it.task}
              style={{ border: "1px solid var(--ts-line)", borderRadius: 8, overflow: "hidden", background: "#fff" }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background: it.img ? "#e9edf2" : "repeating-linear-gradient(45deg, #ECF0F5, #ECF0F5 8px, #DDE4EC 8px, #DDE4EC 16px)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {it.img && (
                  <PhotoZoom
                    img={`/images/nachweise/${it.img}`}
                    alt={it.alt}
                    width={1000}
                    height={750}
                    radius={8}
                    caption={`${it.obj} · ${it.task} · ${it.time} · ${it.who}`}
                  />
                )}
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    fontSize: "0.65rem",
                    padding: "0.18rem 0.45rem",
                    borderRadius: 999,
                    // Heller, leicht deckender Grund mit Blur: auf jedem Foto lesbar
                    background: "rgba(255,255,255,.85)",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)",
                    color: s.fg,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 8,
                    fontSize: "0.65rem",
                    padding: "0.18rem 0.45rem",
                    borderRadius: 999,
                    background: "rgba(16, 35, 60, 0.75)",
                    color: "#fff",
                    fontFamily: "ui-monospace, monospace",
                  }}
                >
                  {it.time} · {it.who}
                </div>
              </div>
              <div style={{ padding: "0.6rem 0.7rem" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--ts-ink)" }}>{it.obj}</div>
                <div style={{ fontSize: "0.72rem", color: "var(--ts-ink-muted)", marginTop: 2 }}>{it.task}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Demo 4 · Live-Margen → Finanzübersicht (Referenz: 3-taskey-finanzen) ── */

function DemoLiveMargen() {
  const gv: { label: string; value: string; kind?: "head-in" | "head-out" | "sum-in" | "sum-out"; note?: string }[] = [
    { label: "I. Einnahmen", value: "", kind: "head-in" },
    { label: "Rechnungen", value: "26.230,00 €" },
    { label: "Objekt-Einnahmen", value: "33.830,00 €" },
    { label: "Gesamt Einnahmen", value: "60.060,00 €", kind: "sum-in" },
    { label: "II. Ausgaben", value: "", kind: "head-out" },
    { label: "Personalkosten Netto", value: "-618,75 €", note: "Tatsächlicher Lohn aus Objekt-Vergütungen" },
    { label: "Betriebsausgaben", value: "-22.901,00 €" },
    { label: "Gesamt Ausgaben", value: "-23.736,31 €", kind: "sum-out" },
  ];
  return (
    <div className={fd.page}>
      <Crumb page="Finanzübersicht" />
      <SubTabs items={FINANZ_TABS} active="Übersicht" />
      <PageHead
        title="Finanzen mit Überblick."
        sub="Zahlen, die dir zeigen, wo dein Unternehmen steht."
        meta="21 Arbeitstage · 0 Feiertage · Saarland"
        actions={[{ label: "November 2026" }]}
      />
      <Kpis
        items={[
          { label: "Einnahmen", value: "60.060,00 €", foot: "Objekte: 33.830,00 €", tone: "green" },
          { label: "Ausgaben", value: "23.736,31 €", foot: "Ausgaben: 22.901,00 €", tone: "red" },
          { label: "Ergebnis (EBITDA)", value: "36.323,69 €", foot: "Marge: 60.5%", tone: "green" },
          { label: "Rechnungen", value: "35", foot: "7 Angebote (11.412,10 €)" },
        ]}
      />
      <div className={fd.gvHead}>
        <b>Gewinn- & Verlustrechnung</b>
        <span className={fd.actions}>
          <span className={fd.btn}>PDF</span>
          <span className={fd.btn}>CSV</span>
        </span>
      </div>
      <div className={fd.gv}>
        {gv.map((r) => (
          <div
            key={r.label}
            className={fd.gvRow}
            style={{
              background: r.kind === "head-in" ? C.greenBg : r.kind === "head-out" ? C.redBg : undefined,
              fontWeight: r.kind ? 600 : 400,
            }}
          >
            <span className="min-w-0">
              {r.label}
              {r.note && <small className="block truncate" style={{ color: C.mut, fontWeight: 400 }}>{r.note}</small>}
            </span>
            <span style={{ color: r.kind === "sum-in" ? C.green : r.kind === "sum-out" ? C.red : C.ink }}>{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Demo 5 · Rechnungen (Referenz: 3-taskey-finanzen, Tab „Rechnungen“) ── */

function DemoRechnungen() {
  const rows = [
    { client: "Lagerlogistik Ruhr GmbH", nr: "RE0046", amount: "1.523,20 €" },
    { client: "EDEKA Zentrale Stiftung & Co. KG", nr: "RE0045", amount: "2.677,50 €" },
    { client: "REWE Markt GmbH", nr: "RE0044", amount: "2.737,00 €" },
    { client: "dm-drogerie markt GmbH + Co. KG", nr: "RE0043", amount: "1.630,30 €" },
    { client: "IT-Haus Kessler GmbH", nr: "RE0042", amount: "2.034,90 €" },
  ];
  return (
    <div className={fd.page}>
      <Crumb page="Rechnungen" />
      <SubTabs items={FINANZ_TABS} active="Rechnungen" />
      <PageHead
        title="Rechnungen"
        sub="Leistungen abrechnen und Zahlungseingänge verfolgen."
        actions={[{ label: "DATEV Export" }, { label: "Angebote" }, { label: "Neue Rechnung", kind: "primary", plus: true }]}
      />
      <Kpis
        items={[
          { label: "Entwürfe", value: "6", foot: "10.400,60 € Wert" },
          { label: "Finalisiert", value: "18" },
          { label: "Umsatz (bezahlt)", value: "0,00 €", foot: "46.656,33 € offen", tone: "green" },
          { label: "Gesamt", value: "52" },
        ]}
      />
      <div className={fd.chips}>
        <span className={fd.chipOn}>Alle</span>
        <span>Entwurf</span>
        <span>Zur Prüfung</span>
        <span>Finalisiert</span>
        <span>Storniert</span>
      </div>
      <div className={fd.list}>
        <div className={fd.listHd}>
          <span>Alle</span>
          <span style={{ color: C.mut }}>24 Rechnungen</span>
        </div>
        {rows.map((r) => (
          <div key={r.nr} className={fd.listRow}>
            <i className={fd.check} aria-hidden />
            <span className="min-w-0 flex-1">
              <b className="block truncate">{r.client}</b>
              <small className="block truncate" style={{ color: C.mut }}>
                Rechnung · {r.nr} · vom 11.11.2026 · Leistung 30.11.2026
              </small>
            </span>
            <span className="flex flex-col items-end gap-1 shrink-0">
              <b>{r.amount}</b>
              <Pill label="Finalisiert" tone="grey" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Demo 6 · Taskey Share (Referenz: 5-taskey-share.mp4) ── */

function DemoAuftraggeber() {
  const reduced = useReducedMotion();
  return (
    <video
      className={fd.video}
      src="/videos/funktionen/5-taskey-share.mp4"
      autoPlay={!reduced}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label="Taskey Share: Grundriss, in dem gereinigte Räume grün aufleuchten"
    />
  );
}

/* ── Demo 7 · Mobile App (Referenz: App-Ansicht in 4-taskey-zeiterfassung) ── */

function DemoMobile() {
  const nav = ["Tagesplan", "Einsatz", "Monatsplan", "Objekte", "Profil"];
  return (
    <div className="p-5 md:p-6 grid md:grid-cols-[1fr_260px] gap-6 items-start">
      <div className="hidden md:flex flex-col gap-3">
        <SectionHeadline eyebrow="iOS · 1-Hand-Bedienung" title="Reinigungskraft-Ansicht" />
        <ul className="flex flex-col gap-2.5">
          {[
            "Einen Tap am NFC-Tag · Schicht startet",
            "Foto schießen · Nachweis angehängt",
            "Offline erfassen · synchronisiert bei Netz",
            "Krankmeldung direkt an Objektleitung",
            "Rollen für Mitarbeiter und Subunternehmer",
          ].map((t) => (
            <li key={t} className="flex items-start gap-2 text-[0.92rem] leading-[1.55]" style={{ color: "var(--ts-ink-soft)" }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 shrink-0">
                <path d="M3.5 8.2l3 3L12.5 5" stroke="var(--brand-signal-blue)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className={fd.phone}>
        <div className={fd.screen}>
          <div className={fd.status}>
            <b>07:42</b>
            <i aria-hidden />
          </div>
          <div style={{ textAlign: "center", padding: "1.1rem 0.8rem 0" }}>
            <div style={{ fontSize: "0.56rem", letterSpacing: "0.12em", color: C.mut, fontWeight: 600 }}>EINSATZ STARTEN</div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: C.ink, marginTop: 4 }}>Check-in</div>
            <div style={{ fontSize: "0.68rem", color: C.mut, marginTop: 2 }}>Moselstraße 49, Trier · Treppenhaus</div>
          </div>
          <div style={{ flex: 1, display: "grid", placeItems: "center" }}>
            <div className={fd.nfc}>
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden>
                <circle cx="24" cy="24" r="4" fill={C.blue} />
                <path d="M16 24a8 8 0 0116 0" stroke={C.blue} strokeWidth="2.5" strokeLinecap="round" />
                <path d="M10 24a14 14 0 0128 0" stroke={C.blue} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
              </svg>
            </div>
          </div>
          <div style={{ textAlign: "center", fontSize: "0.72rem", color: C.mut, padding: "0 1rem 1rem", lineHeight: 1.4 }}>
            Halte dein Handy
            <br />
            an den NFC-Tag
          </div>
          <div className={fd.tabbar}>
            {nav.map((n) => (
              <span key={n} style={{ color: n === "Einsatz" ? C.blue : C.mut }}>
                <i style={{ background: n === "Einsatz" ? C.blue : "#c4c4c9" }} />
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Demo 8 · Sicherheit / Audit-Trail ──────────────────────── */
/* In den Dashboard-Aufnahmen nicht enthalten: Aufbau bleibt, Namen,
   Rollen, Objekte und Rechnungsnummern wie im Dashboard. */

function DemoSicherheit() {
  const entries = [
    { time: "11:42:03", actor: "Geschäftsführer", what: "Rolle 'Reinigungskraft' an Selin Aydın zugewiesen", kind: "perm" as const },
    { time: "11:39:17", actor: "System", what: "Backup erstellt · EU-DE-1 · 1,8 GB", kind: "sys" as const },
    { time: "11:35:42", actor: "Geschäftsführer", what: "Rechnung RE0046 finalisiert", kind: "data" as const },
    { time: "11:21:08", actor: "System", what: "DATEV Export 10/2026 erzeugt", kind: "sys" as const },
    { time: "11:05:52", actor: "Reinigungskraft · Ramona Biewer", what: "Check-in NFC · Treppenhaus Moselstraße 49, Trier", kind: "track" as const },
    { time: "10:58:14", actor: "Geschäftsführer", what: "IP-Allowlist aktualisiert · +1 Eintrag", kind: "sec" as const },
    { time: "10:44:30", actor: "System", what: "Session-Token rotiert", kind: "sys" as const },
  ];
  const kindTint: Record<"perm" | "sys" | "data" | "track" | "sec", { bg: string; fg: string; label: string }> = {
    perm: { bg: C.blueBg, fg: C.blue, label: "Berechtigung" },
    sys: { bg: "#f4f4f5", fg: C.mut, label: "System" },
    data: { bg: C.greenBg, fg: C.green, label: "Daten" },
    track: { bg: C.blueBg, fg: C.blue, label: "Tracking" },
    sec: { bg: C.redBg, fg: C.red, label: "Sicherheit" },
  };

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <Kpis
        items={[
          { label: "Server", value: "DE", foot: "zertifizierte RZ" },
          { label: "Rollen", value: "6", foot: "granular konfigurierbar" },
          { label: "Audit-Einträge heute", value: "248", foot: "unveränderlich" },
        ]}
      />
      <SectionHeadline eyebrow="Letzte 24 Stunden · 248 Ereignisse" title="Audit-Trail" />
      <div style={{ border: `1px solid ${C.line}`, borderRadius: 8, overflow: "hidden", background: "#fff" }}>
        {entries.map((e, i) => {
          const t = kindTint[e.kind];
          return (
            <div key={e.time} className={fd.audit} style={{ borderTop: i === 0 ? "none" : `1px solid ${C.line}` }}>
              <span style={{ color: C.faint, fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>{e.time}</span>
              <span className={fd.auditKind} style={{ background: t.bg, color: t.fg }}>
                {t.label}
              </span>
              <span className="min-w-0 truncate" style={{ color: C.ink }}>
                <span style={{ color: C.mut }}>{e.actor} · </span>
                {e.what}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Helpers ────────────────────────────────────────────────── */

function SectionHeadline({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-3 flex-wrap">
      <div>
        <span className="ts-eyebrow block mb-1" style={{ fontSize: "0.62rem" }}>
          {eyebrow}
        </span>
        <h3 className="ts-headline" style={{ fontSize: "1.1rem", color: "var(--ts-ink)" }}>
          {title}
        </h3>
      </div>
      <span className="text-[0.72rem]" style={{ color: "var(--ts-ink-faint)" }}>
        Aktualisiert vor 2 Min.
      </span>
    </div>
  );
}
