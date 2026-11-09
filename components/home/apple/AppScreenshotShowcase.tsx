"use client";

import Image from "next/image";
import { useState } from "react";

type Shot = {
  id: string;
  label: string;
  title: string;
  copy: string;
  src: string;
};

const SHOTS: Shot[] = [
  {
    id: "objekte",
    label: "Objekte",
    title: "Jeder Standort, ein gemeinsamer Überblick.",
    copy: "Aktive Objekte, betreute Fläche, Monatsumsatz und Marge in einer Kachel. Netto und brutto, mit Hinweis auf jedes Objekt, das Aufmerksamkeit braucht.",
    src: "/screenshots/objekte.png",
  },
  {
    id: "mitarbeitende",
    label: "Mitarbeitende",
    title: "Die Menschen, die jeden Tag den Unterschied machen.",
    copy: "Lohnsumme netto und brutto, aktive Mitarbeitende, Abwesenheiten. Alles auf einen Blick, nach Monat gefiltert.",
    src: "/screenshots/mitarbeitende.png",
  },
  {
    id: "personalplanung",
    label: "Personalplanung",
    title: "Die richtige Besetzung für jede Schicht.",
    copy: "Wochen- und Monatsplan, verpasste Schichten in Rot, Vertretungen in Sekunden umplanen. Export in einem Klick.",
    src: "/screenshots/personalplanung.png",
  },
  {
    id: "zeiterfassung",
    label: "Zeiterfassung",
    title: "Arbeitszeiten transparent erfasst und geprüft.",
    copy: "Live-Sessions, abgeschlossene Einsätze und Stempelprotokoll. Nachträge möglich, jede Buchung mit Auftrag, Mitarbeitenden und Status.",
    src: "/screenshots/zeiterfassung.png",
  },
  {
    id: "abwesenheiten",
    label: "Abwesenheiten",
    title: "Urlaub und Vertretungen gemeinsam planen.",
    copy: "Krankmeldungen, Urlaubsanträge, Attest-Status. Sichtbar nach Mitarbeitenden, nach Zeitraum, nach Standort.",
    src: "/screenshots/abwesenheiten.png",
  },
  {
    id: "schadensmeldungen",
    label: "Schadensmeldungen",
    title: "Melden, zuweisen und gemeinsam lösen.",
    copy: "Offene Meldungen mit Dringlichkeit, Objektbezug und Mitarbeitenden-Zuweisung. Keine Meldung geht mehr im Posteingang unter.",
    src: "/screenshots/schadensmeldungen.png",
  },
  {
    id: "finanzen",
    label: "Finanzen",
    title: "Zahlen, die zeigen, wo das Unternehmen steht.",
    copy: "Einnahmen, Ausgaben, EBITDA und Rechnungsstatus für den aktuellen Monat. Umsatzkurve über sechs Monate, GuV als PDF oder CSV.",
    src: "/screenshots/finanzen.png",
  },
  {
    id: "kalkulationen",
    label: "Kalkulationen",
    title: "Leistungen nachvollziehbar und wirtschaftlich planen.",
    copy: "Objekte kalkuliert, Vertragspreise, Gesamtkosten und Marge. Rentabilität je Objekt sichtbar, bevor ein Angebot rausgeht.",
    src: "/screenshots/kalkulationen.png",
  },
  {
    id: "crm",
    label: "CRM",
    title: "Gute Beziehungen. Neue Möglichkeiten.",
    copy: "Firmen, Kontakte, Pipeline-Wert und offene Aufgaben. Nächste Termine und Deal-Stufen aus Taskey heraus.",
    src: "/screenshots/crm.png",
  },
];

export default function AppScreenshotShowcase() {
  const [activeId, setActiveId] = useState<string>(SHOTS[0].id);
  const active = SHOTS.find((s) => s.id === activeId) ?? SHOTS[0];

  return (
    <section className="apl-surface-canvas apl-section">
      <div className="apl-container-wide">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Ein Blick in Taskey</p>
          <h2
            className="apl-display apl-display-lg mx-auto"
            style={{ maxWidth: "22ch" }}
          >
            Die echten Screens. Nicht die polierte Fassung.
          </h2>
          <p
            className="apl-lede mt-4 mx-auto"
            style={{ maxWidth: "54ch" }}
          >
            Neun Bereiche, die den Alltag abbilden. Wählen Sie einen aus, der Rest kommt gleich mit.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-8">
          <div
            className="flex gap-1.5 flex-wrap justify-center rounded-full bg-[color:var(--apl-canvas-soft)] p-1.5 ring-1 ring-black/5"
            role="tablist"
            aria-label="Software-Bereiche"
          >
            {SHOTS.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={s.id === activeId}
                onClick={() => setActiveId(s.id)}
                className={[
                  "px-3.5 h-9 rounded-full text-[13px] font-medium transition",
                  s.id === activeId
                    ? "bg-white text-[color:var(--apl-ink)] shadow-sm ring-1 ring-black/5"
                    : "text-[color:var(--apl-ink-muted)] hover:text-[color:var(--apl-ink)]",
                ].join(" ")}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active caption */}
        <div className="text-center max-w-[52ch] mx-auto mb-8 min-h-[7rem]">
          <h3 className="apl-display apl-display-md" style={{ maxWidth: "26ch", marginInline: "auto" }}>
            {active.title}
          </h3>
          <p className="apl-body mt-3">{active.copy}</p>
        </div>

        {/* Big screenshot stage */}
        <div className="relative mx-auto" style={{ maxWidth: 1120 }}>
          {/* Glow */}
          <div
            aria-hidden
            className="absolute inset-x-12 top-12 bottom-0 blur-3xl opacity-60 pointer-events-none rounded-[28px]"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(0,113,227,0.12), transparent 70%)",
            }}
          />
          <div
            className="relative rounded-[22px] overflow-hidden bg-white ring-1 ring-black/10"
            style={{
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.8) inset, 0 40px 90px -40px rgba(15,23,42,0.35)",
              aspectRatio: "16 / 9",
            }}
          >
            {SHOTS.map((s) => (
              <Image
                key={s.id}
                src={s.src}
                alt={`Taskey · ${s.label}`}
                fill
                sizes="(max-width: 1120px) 100vw, 1120px"
                priority={s.id === SHOTS[0].id}
                className={[
                  "object-cover object-top transition-opacity duration-500",
                  s.id === activeId ? "opacity-100" : "opacity-0 pointer-events-none",
                ].join(" ")}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
