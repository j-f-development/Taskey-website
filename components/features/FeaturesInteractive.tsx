"use client";

import { useState } from "react";
import { BrandDot } from "@/components/BrandDot";

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
  const [active, setActive] = useState<ModuleKey>("zeiterfassung");
  const m = MODULES.find((x) => x.key === active)!;

  return (
    <section
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
          {MODULES.map((mod) => {
            const isActive = mod.key === active;
            return (
              <button
                key={mod.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(mod.key)}
                className="px-3 py-2 text-[0.85rem] font-medium flex items-center gap-2 whitespace-nowrap transition-all"
                style={{
                  background: isActive ? "var(--brand-signal-blue)" : "transparent",
                  color: isActive ? "var(--brand-white)" : "var(--ts-ink-soft)",
                  border: "1px solid transparent",
                  borderRadius: "var(--ts-r-chip)",
                  boxShadow: isActive ? "0 1px 2px rgba(47, 91, 148, 0.28)" : undefined,
                }}
              >
                <span
                  className="font-mono text-[0.68rem]"
                  style={{
                    color: isActive ? "rgba(247,249,252,0.7)" : "var(--ts-ink-faint)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {mod.index}
                </span>
                {mod.tab}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Copy */}
          <div className="lg:col-span-5 flex flex-col gap-4">
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
          <div className="lg:col-span-7">
            <DemoFrame moduleKey={active} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoFrame({ moduleKey }: { moduleKey: ModuleKey }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        borderRadius: "var(--ts-r-panel)",
        border: "1px solid var(--ts-line-strong)",
        boxShadow: "var(--ts-shadow-lg)",
        background: "var(--ts-canvas-elev)",
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
          className="ml-3 text-[0.72rem]"
          style={{ color: "var(--ts-ink-muted)", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}
        >
          dashboard.taskeyapp.com/{moduleKey}
        </span>
        <span className="ml-auto ts-chip" style={{ fontSize: "0.58rem", padding: "0.18rem 0.5rem" }}>
          Demo
        </span>
      </div>

      <div style={{ minHeight: 460 }}>
        {moduleKey === "zeiterfassung" && <DemoZeiterfassung />}
        {moduleKey === "einsatzplanung" && <DemoEinsatzplanung />}
        {moduleKey === "nachweise" && <DemoNachweise />}
        {moduleKey === "live-margen" && <DemoLiveMargen />}
        {moduleKey === "rechnungen" && <DemoRechnungen />}
        {moduleKey === "auftraggeber" && <DemoAuftraggeber />}
        {moduleKey === "mobile" && <DemoMobile />}
        {moduleKey === "sicherheit" && <DemoSicherheit />}
      </div>
    </div>
  );
}

/* ── Demo 1 · Zeiterfassung ─────────────────────────────────── */

function DemoZeiterfassung() {
  const rows = [
    { name: "Marina Köhler", obj: "Bürohaus Rheinallee", nfc: "08:02", dur: "02:14 h", status: "ok" as const, label: "Aktiv" },
    { name: "Yusuf Demir", obj: "Logistikhalle Süd", nfc: "05:58", dur: "04:18 h", status: "ok" as const, label: "Aktiv" },
    { name: "Anja Winter", obj: "Praxis Behrens", nfc: "06:30", dur: "01:45 h", status: "ok" as const, label: "Beendet" },
    { name: "Tobias Reuß", obj: "Supermarkt Lindenthal", nfc: "22:12", dur: "03:02 h", status: "ok" as const, label: "Beendet" },
    { name: "Elena Popescu", obj: "Kita Sonnenblume", nfc: "–", dur: "–", status: "bad" as const, label: "Scan fehlt" },
  ];

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <StatRow stats={[
        { label: "Aktive Sitzungen", value: "2", foot: "Live" },
        { label: "Heute abgeschlossen", value: "28", foot: "±0 ggü. Vortag" },
        { label: "Durchschnittliche Dauer", value: "02:48 h", foot: "pro Einsatz" },
      ]} />
      <SectionHeadline eyebrow="Heute · 34 Einsätze" title="Zeiterfassung live" />
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <DemoRow
            key={r.name}
            status={r.status}
            title={r.name}
            sub={`${r.obj} · NFC ${r.nfc}`}
            statusLabel={r.label}
            trailing={r.dur}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Demo 2 · Einsatzplanung ────────────────────────────────── */

function DemoEinsatzplanung() {
  const days = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const grid: { who: string; shifts: { day: number; obj: string; start: string; dur: number }[] }[] = [
    { who: "Marina K.", shifts: [{ day: 0, obj: "Rheinallee", start: "08", dur: 3 }, { day: 2, obj: "Rheinallee", start: "08", dur: 3 }, { day: 4, obj: "Lindenthal", start: "22", dur: 2 }] },
    { who: "Yusuf D.", shifts: [{ day: 0, obj: "Süd", start: "06", dur: 4 }, { day: 1, obj: "Süd", start: "06", dur: 4 }, { day: 2, obj: "Süd", start: "06", dur: 4 }, { day: 4, obj: "Süd", start: "06", dur: 4 }] },
    { who: "Anja W.", shifts: [{ day: 1, obj: "Behrens", start: "06", dur: 2 }, { day: 3, obj: "Behrens", start: "06", dur: 2 }, { day: 5, obj: "Behrens", start: "06", dur: 2 }] },
    { who: "Tobias R.", shifts: [{ day: 4, obj: "Lindenthal", start: "22", dur: 3 }] },
    { who: "Elena P.", shifts: [{ day: 0, obj: "Sonnenblume", start: "14", dur: 2 }, { day: 2, obj: "Sonnenblume", start: "14", dur: 2 }] },
  ];

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <SectionHeadline eyebrow="KW 46 · 5 Mitarbeitende · 15 Schichten" title="Wochenplan" />
      <div
        className="grid"
        style={{
          gridTemplateColumns: "140px repeat(7, minmax(0, 1fr))",
          border: "1px solid var(--ts-line)",
          borderRadius: 8,
          overflow: "hidden",
          background: "#fff",
        }}
      >
        <div style={{ background: "var(--ts-canvas-tinted)", padding: "0.5rem 0.75rem", fontSize: "0.72rem", fontWeight: 600, color: "var(--ts-ink-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Team
        </div>
        {days.map((d) => (
          <div key={d} style={{ background: "var(--ts-canvas-tinted)", padding: "0.5rem 0.5rem", fontSize: "0.72rem", fontWeight: 600, color: "var(--ts-ink-muted)", textAlign: "center", borderLeft: "1px solid var(--ts-line)" }}>
            {d}
          </div>
        ))}
        {grid.map((row) => (
          <>
            <div key={row.who} style={{ padding: "0.6rem 0.75rem", fontSize: "0.82rem", fontWeight: 500, color: "var(--ts-ink)", borderTop: "1px solid var(--ts-line)" }}>
              {row.who}
            </div>
            {days.map((_, di) => {
              const shift = row.shifts.find((s) => s.day === di);
              return (
                <div
                  key={`${row.who}-${di}`}
                  style={{
                    padding: "0.4rem",
                    borderTop: "1px solid var(--ts-line)",
                    borderLeft: "1px solid var(--ts-line)",
                    minHeight: 54,
                  }}
                >
                  {shift && (
                    <div
                      style={{
                        background: "rgba(47, 91, 148, 0.1)",
                        border: "1px solid rgba(47, 91, 148, 0.25)",
                        borderRadius: 4,
                        padding: "0.3rem 0.4rem",
                        fontSize: "0.7rem",
                        color: "var(--brand-signal-blue)",
                        fontWeight: 500,
                        lineHeight: 1.3,
                      }}
                    >
                      <div>{shift.obj}</div>
                      <div style={{ fontFamily: "ui-monospace, monospace", opacity: 0.85 }}>
                        {shift.start}–{String(parseInt(shift.start) + shift.dur).padStart(2, "0")}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        ))}
      </div>
    </div>
  );
}

/* ── Demo 3 · Nachweise ─────────────────────────────────────── */

function DemoNachweise() {
  const items = [
    { obj: "Rheinallee · 3. OG", task: "Grundreinigung", time: "08:42", who: "MK", status: "ok" as const },
    { obj: "Süd · Halle B", task: "Unterhaltsreinigung", time: "10:14", who: "YD", status: "ok" as const },
    { obj: "Behrens · Behandlung 2", task: "Desinfektion", time: "06:55", who: "AW", status: "ok" as const },
    { obj: "Lindenthal · Kasse", task: "Fensterreinigung", time: "22:48", who: "TR", status: "warn" as const },
    { obj: "Sonnenblume · Flur", task: "Grundreinigung", time: "–", who: "EP", status: "bad" as const },
    { obj: "Rheinallee · 2. OG", task: "Unterhaltsreinigung", time: "09:03", who: "MK", status: "ok" as const },
  ];
  const statusTint: Record<"ok" | "warn" | "bad", { bg: string; fg: string; label: string }> = {
    ok: { bg: "rgba(31, 122, 58, 0.08)", fg: "var(--ts-good)", label: "Freigegeben" },
    warn: { bg: "rgba(162, 91, 9, 0.08)", fg: "var(--ts-warn)", label: "Prüfen" },
    bad: { bg: "rgba(180, 35, 35, 0.08)", fg: "var(--ts-bad)", label: "Ausstehend" },
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
              style={{
                border: "1px solid var(--ts-line)",
                borderRadius: 8,
                overflow: "hidden",
                background: "#fff",
              }}
            >
              <div
                style={{
                  aspectRatio: "4 / 3",
                  background: it.status === "bad" ? "repeating-linear-gradient(45deg, #ECF0F5, #ECF0F5 8px, #DDE4EC 8px, #DDE4EC 16px)" : "linear-gradient(135deg, #D9E1EA, #9FC5E8)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    fontSize: "0.65rem",
                    padding: "0.18rem 0.45rem",
                    borderRadius: 999,
                    background: s.bg,
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
                <div style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--ts-ink)" }}>
                  {it.obj}
                </div>
                <div style={{ fontSize: "0.72rem", color: "var(--ts-ink-muted)", marginTop: 2 }}>
                  {it.task}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Demo 4 · Live-Margen ───────────────────────────────────── */

function DemoLiveMargen() {
  const rows = [
    { obj: "Bürohaus Rheinallee", soll: "2.800 €", ist: "2.640 €", margin: 88, status: "ok" as const, label: "+22 % DB" },
    { obj: "Logistikhalle Süd", soll: "6.200 €", ist: "5.980 €", margin: 78, status: "ok" as const, label: "+18 % DB" },
    { obj: "Praxis Behrens", soll: "540 €", ist: "612 €", margin: 62, status: "warn" as const, label: "Mehrstunden" },
    { obj: "Supermarkt Lindenthal", soll: "1.300 €", ist: "1.280 €", margin: 70, status: "ok" as const, label: "+14 % DB" },
    { obj: "Kita Sonnenblume", soll: "820 €", ist: "1.040 €", margin: 34, status: "bad" as const, label: "–6 % DB" },
  ];

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <StatRow stats={[
        { label: "Monatsumsatz", value: "11.660 €", foot: "November" },
        { label: "Deckungsbeitrag", value: "18 %", foot: "Durchschnitt" },
        { label: "Verlust-Objekte", value: "1", foot: "benötigt Nachverhandlung" },
      ]} />
      <SectionHeadline eyebrow="Monat · November · 5 Objekte" title="Live-Margen pro Objekt" />
      <div className="flex flex-col gap-2">
        {rows.map((r) => (
          <DemoRow
            key={r.obj}
            status={r.status}
            title={r.obj}
            sub={`Soll ${r.soll} · Ist ${r.ist}`}
            statusLabel={r.label}
            progress={r.margin}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Demo 5 · Rechnungen / DATEV ────────────────────────────── */

function DemoRechnungen() {
  const rows = [
    { num: "RE-2026-1142", client: "Immobilien Weber GmbH", date: "02.11.2026", amount: "2.800,00 €", status: "paid" as const },
    { num: "RE-2026-1141", client: "Logistik Nord KG", date: "02.11.2026", amount: "6.200,00 €", status: "paid" as const },
    { num: "RE-2026-1140", client: "Praxis Dr. Behrens", date: "01.11.2026", amount: "612,00 €", status: "open" as const },
    { num: "RE-2026-1139", client: "Rewe Lindenthal", date: "01.11.2026", amount: "1.280,00 €", status: "open" as const },
    { num: "RE-2026-1138", client: "Kita Sonnenblume e.V.", date: "28.10.2026", amount: "820,00 €", status: "overdue" as const },
  ];
  const statusTint: Record<"paid" | "open" | "overdue", { bg: string; fg: string; label: string }> = {
    paid: { bg: "rgba(31, 122, 58, 0.08)", fg: "var(--ts-good)", label: "Bezahlt" },
    open: { bg: "rgba(47, 91, 148, 0.1)", fg: "var(--brand-signal-blue)", label: "Offen" },
    overdue: { bg: "rgba(180, 35, 35, 0.08)", fg: "var(--ts-bad)", label: "Überfällig" },
  };

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <SectionHeadline eyebrow="November 2026" title="Ausgangsrechnungen" />
        <div className="flex gap-2">
          <span className="ts-chip ts-chip-neutral" style={{ fontSize: "0.65rem" }}>
            ZUGFeRD
          </span>
          <span className="ts-chip" style={{ fontSize: "0.65rem" }}>
            DATEV-Export
          </span>
        </div>
      </div>
      <div style={{ border: "1px solid var(--ts-line)", borderRadius: 8, overflow: "hidden", background: "#fff" }}>
        <div
          className="grid"
          style={{
            gridTemplateColumns: "140px minmax(0,1fr) 100px 110px 100px",
            background: "var(--ts-canvas-tinted)",
            padding: "0.5rem 0.9rem",
            fontSize: "0.68rem",
            fontWeight: 600,
            color: "var(--ts-ink-muted)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          <div>Nummer</div>
          <div>Kunde</div>
          <div>Datum</div>
          <div style={{ textAlign: "right" }}>Betrag</div>
          <div style={{ textAlign: "right" }}>Status</div>
        </div>
        {rows.map((r) => {
          const s = statusTint[r.status];
          return (
            <div
              key={r.num}
              className="grid"
              style={{
                gridTemplateColumns: "140px minmax(0,1fr) 100px 110px 100px",
                padding: "0.65rem 0.9rem",
                fontSize: "0.85rem",
                borderTop: "1px solid var(--ts-line)",
                alignItems: "center",
              }}
            >
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: "0.78rem", color: "var(--ts-ink)" }}>
                {r.num}
              </span>
              <span style={{ color: "var(--ts-ink)", fontWeight: 500 }}>{r.client}</span>
              <span style={{ color: "var(--ts-ink-muted)", fontSize: "0.8rem" }}>{r.date}</span>
              <span style={{ color: "var(--ts-ink)", fontWeight: 600, textAlign: "right", fontFamily: "ui-monospace, monospace", fontSize: "0.82rem" }}>
                {r.amount}
              </span>
              <span style={{ textAlign: "right" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: s.bg,
                    color: s.fg,
                    fontSize: "0.68rem",
                    padding: "0.18rem 0.5rem",
                    borderRadius: 999,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── Demo 6 · Auftraggeber-Portal ───────────────────────────── */

function DemoAuftraggeber() {
  const rooms = [
    { name: "Empfang", status: "clean" as const, time: "08:12" },
    { name: "Büro 101", status: "clean" as const, time: "08:24" },
    { name: "Büro 102", status: "clean" as const, time: "08:31" },
    { name: "Meetingraum 1", status: "progress" as const, time: "jetzt" },
    { name: "Meetingraum 2", status: "pending" as const, time: "–" },
    { name: "Küche", status: "clean" as const, time: "07:58" },
    { name: "WC Herren", status: "clean" as const, time: "08:05" },
    { name: "WC Damen", status: "progress" as const, time: "jetzt" },
    { name: "Serverraum", status: "problem" as const, time: "offen" },
  ];
  const tint: Record<"clean" | "progress" | "pending" | "problem", { bg: string; border: string; dot: string; label: string }> = {
    clean: { bg: "#DDF4E5", border: "#38B56A", dot: "#22C55E", label: "Gereinigt" },
    progress: { bg: "#FDF1DC", border: "#F59E0B", dot: "#F59E0B", label: "Läuft" },
    pending: { bg: "#F7F9FC", border: "#D6D9DE", dot: "#B0B4BA", label: "Geplant" },
    problem: { bg: "#FFE6EB", border: "#E94B6A", dot: "#E94B6A", label: "Offen" },
  };

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <SectionHeadline eyebrow="Bürohaus Rheinallee · EG · 2.400 qm" title="Live-Grundriss" />
      <div className="grid grid-cols-3 gap-2">
        {rooms.map((r) => {
          const t = tint[r.status];
          return (
            <div
              key={r.name}
              style={{
                background: t.bg,
                border: `1px solid ${t.border}`,
                borderRadius: 6,
                padding: "0.7rem 0.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ background: t.dot }} />
                <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--ts-ink)" }}>
                  {r.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span style={{ fontSize: "0.68rem", color: "var(--ts-ink-muted)" }}>{t.label}</span>
                <span style={{ fontSize: "0.7rem", color: "var(--ts-ink-muted)", fontFamily: "ui-monospace, monospace" }}>
                  {r.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between text-[0.78rem] pt-2" style={{ color: "var(--ts-ink-muted)" }}>
        <span>7 von 9 Räumen gereinigt</span>
        <span>Letzte Aktualisierung vor 2 Min.</span>
      </div>
    </div>
  );
}

/* ── Demo 7 · Mobile App ────────────────────────────────────── */

function DemoMobile() {
  return (
    <div className="p-5 md:p-6 grid md:grid-cols-[1fr_280px] gap-6 items-start">
      <div className="flex flex-col gap-3">
        <SectionHeadline eyebrow="iOS · 1-Hand-Bedienung" title="Reinigungskraft-Ansicht" />
        <ul className="flex flex-col gap-2.5">
          {[
            "Einen Tap am NFC-Tag · Schicht startet",
            "Foto schießen · Nachweis angehängt",
            "Offline erfassen · synchronisiert bei Netz",
            "Krankmeldung direkt an Objektleitung",
            "Rollen für Mitarbeiter und Subunternehmer",
          ].map((t) => (
            <li
              key={t}
              className="flex items-start gap-2 text-[0.92rem] leading-[1.55]"
              style={{ color: "var(--ts-ink-soft)" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 shrink-0">
                <path d="M3.5 8.2l3 3L12.5 5" stroke="var(--brand-signal-blue)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div
        style={{
          borderRadius: 32,
          border: "10px solid var(--brand-navy)",
          background: "var(--brand-navy)",
          padding: 4,
          boxShadow: "0 20px 50px -12px rgba(16, 35, 60, 0.3)",
          margin: "0 auto",
          width: "100%",
          maxWidth: 260,
        }}
      >
        <div
          style={{
            borderRadius: 22,
            background: "#F7F9FC",
            overflow: "hidden",
            minHeight: 420,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ padding: "0.9rem 1rem 0.5rem", display: "flex", justifyContent: "space-between", fontSize: "0.7rem", color: "var(--ts-ink)" }}>
            <span style={{ fontWeight: 600 }}>9:41</span>
            <span>●●● ● ●</span>
          </div>
          <div style={{ padding: "0.3rem 1rem 0.8rem" }}>
            <div className="ts-eyebrow" style={{ fontSize: "0.58rem" }}>Taskey</div>
            <div className="ts-headline" style={{ fontSize: "1.05rem", color: "var(--ts-ink)", marginTop: 2 }}>
              Objekt tippen
            </div>
          </div>
          <div style={{ flex: 1, display: "grid", placeItems: "center", padding: "1rem" }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: 999,
                background: "rgba(47, 91, 148, 0.1)",
                border: "2px solid var(--brand-signal-blue)",
                display: "grid",
                placeItems: "center",
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: 999,
                  border: "2px solid var(--brand-sky)",
                  opacity: 0.5,
                }}
              />
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
                <circle cx="24" cy="24" r="4" fill="var(--brand-signal-blue)" />
                <path d="M16 24a8 8 0 0116 0" stroke="var(--brand-signal-blue)" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M10 24a14 14 0 0128 0" stroke="var(--brand-signal-blue)" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
              </svg>
            </div>
          </div>
          <div style={{ padding: "0.4rem 1rem 1rem", textAlign: "center" }}>
            <div style={{ fontSize: "0.78rem", color: "var(--ts-ink)", fontWeight: 500 }}>
              Bürohaus Rheinallee
            </div>
            <div style={{ fontSize: "0.66rem", color: "var(--ts-ink-muted)", marginTop: 2 }}>
              Schicht 08:00–11:00 · Grundreinigung
            </div>
            <div
              style={{
                marginTop: "0.7rem",
                padding: "0.55rem 1rem",
                borderRadius: 999,
                background: "var(--brand-signal-blue)",
                color: "#fff",
                fontSize: "0.78rem",
                fontWeight: 600,
              }}
            >
              Check-in per NFC
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Demo 8 · Sicherheit / Audit-Trail ──────────────────────── */

function DemoSicherheit() {
  const entries = [
    { time: "11:42:03", actor: "Chef-Admin", what: "Rolle 'Objektleitung' an marina.koehler zugewiesen", kind: "perm" as const },
    { time: "11:39:17", actor: "System", what: "Backup erstellt · EU-DE-1 · 1,8 GB", kind: "sys" as const },
    { time: "11:35:42", actor: "Objektleitung", what: "Angebot RE-2026-1142 freigegeben", kind: "data" as const },
    { time: "11:21:08", actor: "System", what: "DATEV-Export 10/2026 erzeugt", kind: "sys" as const },
    { time: "11:05:52", actor: "Mitarbeiter · yusuf.demir", what: "Check-in NFC · Logistikhalle Süd", kind: "track" as const },
    { time: "10:58:14", actor: "Admin", what: "IP-Allowlist aktualisiert · +1 Eintrag", kind: "sec" as const },
    { time: "10:44:30", actor: "System", what: "Session-Token rotiert", kind: "sys" as const },
  ];
  const kindTint: Record<"perm" | "sys" | "data" | "track" | "sec", { bg: string; fg: string; label: string }> = {
    perm: { bg: "rgba(47, 91, 148, 0.08)", fg: "var(--brand-signal-blue)", label: "Berechtigung" },
    sys: { bg: "rgba(16, 35, 60, 0.05)", fg: "var(--ts-ink-muted)", label: "System" },
    data: { bg: "rgba(31, 122, 58, 0.08)", fg: "var(--ts-good)", label: "Daten" },
    track: { bg: "rgba(159, 197, 232, 0.2)", fg: "var(--brand-signal-blue)", label: "Tracking" },
    sec: { bg: "rgba(180, 35, 35, 0.08)", fg: "var(--ts-bad)", label: "Sicherheit" },
  };

  return (
    <div className="p-5 md:p-6 flex flex-col gap-4">
      <StatRow stats={[
        { label: "Server", value: "DE", foot: "zertifizierte RZ" },
        { label: "Rollen", value: "6", foot: "granular konfigurierbar" },
        { label: "Audit-Einträge heute", value: "248", foot: "unveränderlich" },
      ]} />
      <SectionHeadline eyebrow="Letzte 24 Stunden · 248 Ereignisse" title="Audit-Trail" />
      <div
        style={{
          border: "1px solid var(--ts-line)",
          borderRadius: 8,
          overflow: "hidden",
          background: "#fff",
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
        }}
      >
        {entries.map((e, i) => {
          const t = kindTint[e.kind];
          return (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "88px 110px 1fr auto",
                padding: "0.6rem 0.9rem",
                fontSize: "0.78rem",
                borderTop: i === 0 ? "none" : "1px solid var(--ts-line)",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ color: "var(--ts-ink-faint)" }}>{e.time}</span>
              <span
                style={{
                  background: t.bg,
                  color: t.fg,
                  padding: "0.1rem 0.45rem",
                  borderRadius: 4,
                  fontSize: "0.65rem",
                  fontFamily: "var(--ts-font-sans)",
                  fontWeight: 500,
                  justifySelf: "start",
                }}
              >
                {t.label}
              </span>
              <span style={{ color: "var(--ts-ink)", fontFamily: "var(--ts-font-sans)" }}>
                <span style={{ color: "var(--ts-ink-muted)" }}>{e.actor} · </span>
                {e.what}
              </span>
              <span style={{ color: "var(--ts-ink-faint)" }}>✓</span>
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

function StatRow({ stats }: { stats: { label: string; value: string; foot?: string }[] }) {
  return (
    <div
      className="grid gap-3"
      style={{
        gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))`,
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background: "var(--ts-canvas-tinted)",
            border: "1px solid var(--ts-line)",
            borderRadius: 6,
            padding: "0.65rem 0.8rem",
          }}
        >
          <div className="text-[0.68rem] font-semibold uppercase" style={{ color: "var(--ts-ink-muted)", letterSpacing: "0.12em" }}>
            {s.label}
          </div>
          <div className="ts-headline mt-1" style={{ fontSize: "1.1rem", color: "var(--ts-ink)" }}>
            {s.value}
          </div>
          {s.foot && (
            <div className="text-[0.68rem] mt-0.5" style={{ color: "var(--ts-ink-muted)" }}>
              {s.foot}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

type Status = "ok" | "warn" | "bad";

function DemoRow({
  status,
  title,
  sub,
  statusLabel,
  trailing,
  progress,
}: {
  status: Status;
  title: string;
  sub: string;
  statusLabel: string;
  trailing?: string;
  progress?: number;
}) {
  const tone: Record<Status, { bg: string; fg: string; border: string; dot: string }> = {
    ok: { bg: "rgba(31, 122, 58, 0.08)", fg: "var(--ts-good)", border: "rgba(31, 122, 58, 0.22)", dot: "#22C55E" },
    warn: { bg: "rgba(162, 91, 9, 0.08)", fg: "var(--ts-warn)", border: "rgba(162, 91, 9, 0.22)", dot: "#F59E0B" },
    bad: { bg: "rgba(180, 35, 35, 0.08)", fg: "var(--ts-bad)", border: "rgba(180, 35, 35, 0.22)", dot: "#E94B6A" },
  };
  const s = tone[status];
  return (
    <div
      className="grid gap-3 items-center px-3 py-3"
      style={{
        gridTemplateColumns: "minmax(0, 1fr) auto",
        borderRadius: 8,
        border: "1px solid var(--ts-line)",
        background: "#fff",
      }}
    >
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full shrink-0" style={{ background: s.dot }} />
          <span className="text-[0.95rem] font-medium truncate" style={{ color: "var(--ts-ink)" }}>
            {title}
          </span>
        </div>
        <div className="mt-0.5 text-[0.78rem] truncate" style={{ color: "var(--ts-ink-muted)" }}>
          {sub}
        </div>
        {typeof progress === "number" && (
          <div className="mt-2 relative overflow-hidden" style={{ height: 5, borderRadius: 999, background: "rgba(16, 35, 60, 0.08)" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: `${progress}%`,
                background: "linear-gradient(90deg, var(--brand-signal-blue), var(--brand-sky))",
                borderRadius: "inherit",
              }}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col items-end gap-1 shrink-0">
        <span
          className="text-[0.68rem] px-2 py-0.5 rounded-full border whitespace-nowrap"
          style={{ background: s.bg, color: s.fg, borderColor: s.border, fontWeight: 500 }}
        >
          {statusLabel}
        </span>
        {trailing && (
          <span className="text-[0.72rem]" style={{ color: "var(--ts-ink-muted)", fontFamily: "ui-monospace, SFMono-Regular, monospace" }}>
            {trailing}
          </span>
        )}
      </div>
    </div>
  );
}
