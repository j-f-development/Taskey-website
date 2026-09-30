import SectionHeaderCorporate from "./SectionHeaderCorporate";

const FLOWS = [
  {
    id: "01",
    from: "SAP · Odoo",
    to: "Taskey",
    payload: "Kunden · Kostenstellen · Objekte · Aufträge",
    direction: "→",
  },
  {
    id: "02",
    from: "Personio · SuccessFactors",
    to: "Taskey",
    payload: "Mitarbeiter · Organisation · Abwesenheiten",
    direction: "→",
  },
  {
    id: "03",
    from: "Entra ID · Okta",
    to: "Taskey",
    payload: "SSO · Provisioning · Rollen",
    direction: "↔",
  },
  {
    id: "04",
    from: "Taskey",
    to: "DATEV · Payroll",
    payload: "freigegebene Zeitdaten · Zuschläge · Kostenstellen",
    direction: "→",
  },
  {
    id: "05",
    from: "Taskey",
    to: "Power BI · DWH",
    payload: "Events · Berichte · operative Kennzahlen",
    direction: "→",
  },
  {
    id: "06",
    from: "Taskey",
    to: "Custom / individueller Konnektor",
    payload: "bidirektionale Prozessdaten",
    direction: "↔",
  },
];

export default function SystemLandscape() {
  return (
    <section
      className="tkc-section-sm"
      style={{ background: "var(--tkc-canvas-tinted)" }}
    >
      <div className="tkc-container-wide">
        <SectionHeaderCorporate
          eyebrow="Systemlandschaft"
          title="Zwischen Feld und Zentrale. Eine operative Schicht."
          subtitle="Taskey ersetzt keine bestehende Systemlandschaft. Es sitzt zwischen den Mitarbeitenden im Feld und den zentralen Unternehmenssystemen und liefert strukturierte, freigegebene Daten kontrolliert weiter."
        />

        <div
          className="mt-12 rounded-[12px]"
          style={{
            background: "var(--tkc-canvas-elev)",
            border: "1px solid var(--tkc-line-strong)",
            overflow: "hidden",
          }}
        >
          <div
            className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 items-stretch"
          >
            {FLOWS.map((flow) => (
              <FlowRow key={flow.id} {...flow} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3 flex-wrap tkc-mono" style={{ color: "var(--tkc-ink-muted)" }}>
          <span className="tkc-chip tkc-chip-status-live"><span className="tkc-chip-dot" />native</span>
          <span className="tkc-chip tkc-chip-accent">API-integrierbar</span>
          <span className="tkc-chip tkc-chip-status-beta">Partner-Connector</span>
          <span className="tkc-chip tkc-chip-status-planned">geplant</span>
          <span className="ml-auto">Alle Datenflüsse dokumentiert im Integrations-Hub.</span>
        </div>
      </div>
    </section>
  );
}

function FlowRow({
  id,
  from,
  to,
  payload,
  direction,
}: {
  id: string;
  from: string;
  to: string;
  payload: string;
  direction: string;
}) {
  return (
    <>
      <div
        className="px-6 py-5 flex items-center gap-3"
        style={{ borderBottom: "1px solid var(--tkc-line)" }}
      >
        <span className="tkc-index">{id}</span>
        <div>
          <div style={{ fontSize: "0.86rem", fontWeight: 500, color: "var(--tkc-ink)" }}>
            {from}
          </div>
          <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem" }}>
            {payload}
          </div>
        </div>
      </div>
      <div
        className="px-4 py-5 flex items-center justify-center tkc-mono"
        style={{
          color: "var(--tkc-ink-muted)",
          borderBottom: "1px solid var(--tkc-line)",
          fontSize: "1.15rem",
        }}
      >
        {direction}
      </div>
      <div
        className="px-6 py-5 flex items-center"
        style={{ borderBottom: "1px solid var(--tkc-line)" }}
      >
        <div style={{ fontSize: "0.86rem", fontWeight: 500, color: "var(--tkc-ink)" }}>
          {to}
        </div>
      </div>
    </>
  );
}
