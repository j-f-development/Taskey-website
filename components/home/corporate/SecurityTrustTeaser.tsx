import Link from "next/link";
import SectionHeaderCorporate from "./SectionHeaderCorporate";

const SECURITY_BLOCKS = [
  {
    key: "Datenschutz",
    body: "Betrieb nach DSGVO. AVV/DPA in Deutsch und Englisch verfügbar. Definierte Subprozessoren mit Zweckbindung.",
  },
  {
    key: "Hosting",
    body: "Rechenzentren in Deutschland und EU. Verschlüsselung in Transit (TLS 1.2+) und at Rest.",
  },
  {
    key: "Zugriffskontrolle",
    body: "Prinzip der minimalen Rechte, RBAC mit vererbten Rollen, dokumentierte Zugriffsprozesse für Mitarbeitende.",
  },
  {
    key: "Auditierbarkeit",
    body: "Änderungen an sensitiven Objekten werden im Audit Log mit Nutzer, Zeitpunkt und Vorher-Nachher erfasst.",
  },
  {
    key: "Backup & Recovery",
    body: "Regelmäßige Backups mit dokumentierten Wiederherstellungszielen. Test-Restore-Prozess vierteljährlich.",
  },
  {
    key: "Verfügbarkeit",
    body: "Statusseite und SLA-Optionen für Enterprise-Verträge. Definierte Reaktionszeiten pro Kritikalität.",
  },
];

export default function SecurityTrustTeaser() {
  return (
    <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
          <SectionHeaderCorporate
            eyebrow="Security & Trust"
            title="Nachvollziehbar. Nicht nur behauptet."
            subtitle="Datenschutz, Zugriffskontrolle, Hosting und Auditierbarkeit sind dokumentiert, überprüfbar und Teil des regulären Betriebs — nicht Marketing-Fassade."
          />
          <div className="flex gap-3">
            <Link href="/security" className="tkc-btn tkc-btn-ghost tkc-btn-sm">
              Trust Center
            </Link>
            <Link href="/enterprise#procurement" className="tkc-btn tkc-btn-primary tkc-btn-sm">
              Procurement-Paket anfordern
            </Link>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SECURITY_BLOCKS.map((block) => (
            <div key={block.key} className="tkc-card-strong">
              <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {block.key}
              </div>
              <p className="mt-3" style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
