import SectionHeaderCorporate from "./SectionHeaderCorporate";

const CONTROL_ROWS = [
  {
    capability: "RBAC · Rollenmodell",
    detail: "Rollen, Rechte und Zuständigkeiten pro Organisationseinheit, Standort und Objekt. Vererbung entlang der Hierarchie.",
    proof: "Docs · Rollenmatrix",
  },
  {
    capability: "Audit Log",
    detail: "Änderungen an Zeitdaten, Freigaben, Rollen, Objekten und Konfiguration werden nachvollziehbar mit Nutzer, Zeitstempel und Vorher-/Nachher-Wert erfasst.",
    proof: "Docs · Event-Katalog",
  },
  {
    capability: "SSO · Identity",
    detail: "Microsoft Entra ID, Okta und weitere SAML/OIDC-Provider. Zentrales Provisioning, Just-in-Time-User und Offboarding.",
    proof: "Docs · Identity Setup",
  },
  {
    capability: "Approval Workflows",
    detail: "Mehrstufige Freigaben für Zeitdaten, Abwesenheiten und Objektfreigaben. Klare Verantwortlichkeiten und Eskalationsketten.",
    proof: "Docs · Workflow-Konfiguration",
  },
  {
    capability: "Multi-Standort · Mandantenfähigkeit",
    detail: "Getrennte Standorte, Regionen oder Mandanten mit eigener Administration, eigener Konfiguration und trennscharfen Rechten.",
    proof: "Docs · Multi-Tenant",
  },
  {
    capability: "Datenexport · Retention",
    detail: "Strukturierte Exporte in CSV, JSON und über API. Definierte Löschfristen pro Datenkategorie. Nachvollziehbare Löschprotokolle.",
    proof: "Docs · Export & Retention",
  },
];

export default function EnterpriseControl() {
  return (
    <section
      className="tkc-section"
      style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}
    >
      <div className="tkc-container-wide">
        <SectionHeaderCorporate
          eyebrow="Enterprise Control"
          title="Governance ist kein Add-on. Sie ist die Grundlage."
          subtitle="Rollen, Freigaben, Audit-Nachvollziehbarkeit und Mandantenfähigkeit sind fester Bestandteil der Plattform, nicht optionale Enterprise-Erweiterungen."
          onInk
        />

        <div
          className="mt-12 rounded-[10px]"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            overflow: "hidden",
          }}
        >
          <table className="w-full" style={{ borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  className="text-left tkc-mono"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.85rem 1.15rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    width: "26%",
                  }}
                >
                  Capability
                </th>
                <th
                  className="text-left tkc-mono"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.85rem 1.15rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  Kontrollmechanismus
                </th>
                <th
                  className="text-left tkc-mono hidden md:table-cell"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "0.85rem 1.15rem",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    width: "22%",
                  }}
                >
                  Nachweis
                </th>
              </tr>
            </thead>
            <tbody>
              {CONTROL_ROWS.map((row, idx) => (
                <tr key={row.capability}>
                  <td
                    style={{
                      padding: "1.1rem 1.15rem",
                      borderBottom: idx === CONTROL_ROWS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)",
                      color: "#ffffff",
                      fontWeight: 500,
                      fontSize: "0.94rem",
                      verticalAlign: "top",
                    }}
                  >
                    {row.capability}
                  </td>
                  <td
                    style={{
                      padding: "1.1rem 1.15rem",
                      borderBottom: idx === CONTROL_ROWS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(238,241,245,0.78)",
                      fontSize: "0.9rem",
                      lineHeight: 1.55,
                      verticalAlign: "top",
                    }}
                  >
                    {row.detail}
                  </td>
                  <td
                    className="hidden md:table-cell tkc-mono"
                    style={{
                      padding: "1.1rem 1.15rem",
                      borderBottom: idx === CONTROL_ROWS.length - 1 ? "none" : "1px solid rgba(255,255,255,0.06)",
                      color: "rgba(238,241,245,0.5)",
                      fontSize: "0.78rem",
                      verticalAlign: "top",
                    }}
                  >
                    {row.proof}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
