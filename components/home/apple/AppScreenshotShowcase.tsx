"use client";

import Image from "next/image";

type Shot = {
  id: string;
  label: string;
  title: string;
  copy: string;
  src: string;
  span?: "wide";
};

const SHOTS: Shot[] = [
  {
    id: "objekte",
    label: "Objekte",
    title: "Jeder Standort, ein gemeinsamer Überblick.",
    copy: "Aktive Objekte, betreute Fläche, Monatsumsatz und Marge auf einer Fläche. Netto und brutto, mit Hinweis auf jedes Objekt, das Aufmerksamkeit braucht.",
    src: "/screenshots/objekte.png",
    span: "wide",
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
    copy: "Krankmeldungen, Urlaubsanträge, Attest-Status. Sichtbar nach Mitarbeitenden, Zeitraum und Standort.",
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
    span: "wide",
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
  return (
    <section className="apl-surface-soft apl-section">
      <div className="apl-container-wide">
        {/* Section intro */}
        <div className="text-center mb-12">
          <p className="apl-eyebrow mb-2">Alles auf einen Blick</p>
          <h2
            className="apl-display apl-display-lg mx-auto"
            style={{ maxWidth: "22ch" }}
          >
            Neun Bereiche, die den Alltag abbilden.
          </h2>
          <p
            className="apl-lede mt-4 mx-auto"
            style={{ maxWidth: "54ch" }}
          >
            Echte Screens aus Taskey. Keine Mockups, keine inszenierten Beispiele.
          </p>
        </div>

        {/* Bento grid: 2 wide tiles bracket a 3-column row */}
        <div className="grid gap-4 md:gap-5 grid-cols-1 md:grid-cols-6">
          {SHOTS.map((s, i) => {
            const isWide = s.span === "wide";
            const colClass = isWide ? "md:col-span-6" : "md:col-span-3";
            // Tighten: after the first wide, make next two half-width, then wide again
            // layout emerges from the SHOTS order (indices 0 wide, 1-5 half, 6 wide, 7-8 half)
            const _ = i;
            return (
              <article
                key={s.id}
                className={[
                  "relative overflow-hidden bg-white ring-1 ring-black/5",
                  "rounded-[22px] flex flex-col",
                  colClass,
                ].join(" ")}
                style={{
                  boxShadow:
                    "0 1px 0 rgba(255,255,255,0.9) inset, 0 20px 50px -28px rgba(15,23,42,0.22)",
                }}
              >
                {/* Caption */}
                <header className="p-6 md:p-8 pb-4 md:pb-5">
                  <p className="apl-eyebrow">{s.label}</p>
                  <h3
                    className="apl-display mt-1"
                    style={{
                      fontSize: isWide
                        ? "clamp(1.5rem, 2.4vw, 2rem)"
                        : "clamp(1.25rem, 1.8vw, 1.5rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.012em",
                      maxWidth: "24ch",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="apl-body mt-2"
                    style={{ maxWidth: isWide ? "60ch" : "42ch" }}
                  >
                    {s.copy}
                  </p>
                </header>

                {/* Screenshot */}
                <div
                  className="relative mx-6 md:mx-8 mb-6 md:mb-8 mt-2 rounded-[16px] overflow-hidden ring-1 ring-black/5 bg-[color:var(--apl-canvas-soft)]"
                  style={{
                    aspectRatio: isWide ? "16 / 7.5" : "16 / 10",
                    boxShadow:
                      "0 1px 0 rgba(255,255,255,0.8) inset, 0 20px 40px -28px rgba(15,23,42,0.25)",
                  }}
                >
                  <Image
                    src={s.src}
                    alt={`Taskey · ${s.label}`}
                    fill
                    sizes={isWide ? "(min-width: 1024px) 1120px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
