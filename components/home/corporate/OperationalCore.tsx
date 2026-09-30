import Link from "next/link";
import SectionHeaderCorporate from "./SectionHeaderCorporate";

const CAPS = [
  {
    id: "01",
    title: "Workforce Management",
    body: "Mitarbeiterstammdaten, Qualifikationen, Verfügbarkeiten, Kostenstellen. Organisationseinheiten und Standorte in einer Hierarchie.",
    fields: ["Mitarbeiter", "Standort", "Organisationseinheit", "Kostenstelle"],
  },
  {
    id: "02",
    title: "Time & Attendance",
    body: "Objektbezogene Zeiterfassung per NFC, GPS oder App. Zeitmodelle, Zuschläge und Plausibilisierung. Freigabe vor Übergabe an Payroll.",
    fields: ["Check-in", "Check-out", "Pause", "Zuschlag", "Status"],
  },
  {
    id: "03",
    title: "Scheduling & Einsätze",
    body: "Einsatzpläne pro Objekt, Team und Zeitraum. Konfliktprüfung, Vertretungslogik und wiederkehrende Muster.",
    fields: ["Einsatz", "Objekt", "Team", "Zeitraum"],
  },
  {
    id: "04",
    title: "Objects & Locations",
    body: "Gebäude, Etagen, Räume und Anlagen als strukturierte Entität. NFC-Bindung, Zonenlogik, Öffnungszeiten.",
    fields: ["Objekt", "Etage", "Raum", "NFC-Tag"],
  },
  {
    id: "05",
    title: "Tasks & Proofs",
    body: "Aufgabenkataloge pro Objekt und Bereich. Digitale Leistungsnachweise mit Foto, Kommentar und Zeitstempel.",
    fields: ["Aufgabe", "Nachweis", "Foto", "Freigabe"],
  },
  {
    id: "06",
    title: "Absence & Freigaben",
    body: "Abwesenheiten, Urlaubskonten, Krankmeldungen. Freigabe-Workflows mit klaren Rollen und Eskalationsstufen.",
    fields: ["Antrag", "Genehmiger", "Zeitraum", "Status"],
  },
];

export default function OperationalCore() {
  return (
    <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
          <SectionHeaderCorporate
            eyebrow="Operational Core"
            title="Ein Datenmodell für den operativen Betrieb."
            subtitle="Workforce, Zeit, Einsätze, Objekte, Aufgaben, Abwesenheiten und Nachweise als kohärentes Modell. Nicht als lose Feature-Sammlung."
          />
          <Link href="/platform" className="tkc-btn tkc-btn-ghost tkc-btn-sm">
            Vollständige Plattformübersicht
          </Link>
        </div>

        <div
          className="mt-12 rounded-[8px]"
          style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {CAPS.map((cap, idx) => (
              <div
                key={cap.id}
                className="p-7"
                style={{
                  borderRight:
                    idx % 3 !== 2 && typeof window !== "undefined"
                      ? "1px solid var(--tkc-line)"
                      : "1px solid var(--tkc-line)",
                  borderBottom: idx < CAPS.length - 3 ? "1px solid var(--tkc-line)" : undefined,
                  background: "var(--tkc-canvas-elev)",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="tkc-index">{cap.id}</span>
                  <span className="tkc-mono" style={{ color: "var(--tkc-ink-muted)" }}>
                    core module
                  </span>
                </div>
                <h3
                  className="mt-4"
                  style={{ fontSize: "1.12rem", fontWeight: 600, color: "var(--tkc-ink)" }}
                >
                  {cap.title}
                </h3>
                <p className="tkc-body mt-2" style={{ fontSize: "0.92rem" }}>
                  {cap.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cap.fields.map((f) => (
                    <span key={f} className="tkc-chip">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
