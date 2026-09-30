import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Security & Trust Center | Taskey",
    description:
      "Trust Center von Taskey: Datenschutz nach DSGVO, AVV/DPA, Hosting in EU, Verschlüsselung, RBAC, Audit Log, Backup, Verfügbarkeit und Subprozessoren. Dokumentiert und überprüfbar.",
  },
  en: { title: "Security & Trust | Taskey", description: "Taskey Trust Center." },
  fr: { title: "Sécurité & Trust | Taskey", description: "Centre de confiance Taskey." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path: "/security",
  });
}

const SECTIONS = [
  {
    id: "data-protection",
    eyebrow: "Data Protection",
    title: "Datenschutz nach DSGVO",
    body: "Der Betrieb erfolgt nach den Vorgaben der DSGVO. AVV/DPA werden in Deutsch und Englisch bereitgestellt. Subprozessoren sind mit Zweckbindung und Verarbeitungsregion dokumentiert. Datenkategorien und Löschfristen sind je Verarbeitungsvorgang definiert.",
    facts: [
      { label: "Rechtsrahmen", value: "DSGVO · BDSG-neu" },
      { label: "Datenschutzkontakt", value: "datenschutz@taskeyapp.com" },
      { label: "AVV/DPA-Sprachen", value: "de · en" },
    ],
  },
  {
    id: "access-control",
    eyebrow: "Access Control",
    title: "Zugriffskontrolle und Identität",
    body: "Zentrales SSO über Microsoft Entra ID, Okta und weitere SAML/OIDC-Provider. Rollen und Rechte werden granular über RBAC gesteuert, mit Vererbung entlang Organisationseinheit, Standort und Objekt. Prinzip der minimalen Rechte für interne Zugriffe.",
    facts: [
      { label: "SSO-Provider", value: "Entra ID · Okta · SAML/OIDC" },
      { label: "RBAC-Ebenen", value: "OrgUnit · Standort · Objekt" },
      { label: "MFA für Admin-Zugänge", value: "verpflichtend" },
    ],
  },
  {
    id: "auditability",
    eyebrow: "Auditability",
    title: "Audit Log und Nachvollziehbarkeit",
    body: "Änderungen an Zeitdaten, Freigaben, Rollen, Objekten und Konfiguration werden mit Nutzer, Zeitstempel und Vorher-Nachher-Wert erfasst. Retention und Zugriff sind konfigurierbar. Der Event-Katalog ist Teil der Developer-Dokumentation und lässt sich per API abrufen.",
    facts: [
      { label: "Erfasste Objekte", value: "Zeit · Freigabe · Rollen · Config" },
      { label: "Retention", value: "kundenkonfigurierbar" },
      { label: "Export", value: "CSV · JSON · API" },
    ],
  },
  {
    id: "infrastructure",
    eyebrow: "Infrastructure",
    title: "Hosting und Verschlüsselung",
    body: "Rechenzentren in Deutschland und der EU. Verschlüsselung in Transit über TLS 1.2+ mit modernen Cipher Suites. Verschlüsselung at Rest für persistierte Daten. Netzwerkzonen mit Prinzip der Segmentierung. Monitoring und Logging auf Infrastrukturebene.",
    facts: [
      { label: "Hosting", value: "DE · EU" },
      { label: "TLS", value: "1.2+ · HSTS" },
      { label: "Backups", value: "täglich · Test-Restore quartalsweise" },
    ],
  },
  {
    id: "subprocessors",
    eyebrow: "Subprocessors",
    title: "Subprozessoren mit Zweckbindung",
    body: "Alle Subprozessoren sind mit Rolle, Zweck, Datenkategorie und Verarbeitungsregion dokumentiert. Änderungen werden Kunden im Voraus mitgeteilt und lassen sich vertraglich einschränken. Die Liste ist auf Anfrage über das Procurement-Paket verfügbar.",
    facts: [
      { label: "Anzahl", value: "auf Anfrage" },
      { label: "Region", value: "EU (primär)" },
      { label: "Änderungsverfahren", value: "Ankündigung mit Widerspruchsrecht" },
    ],
  },
  {
    id: "business-continuity",
    eyebrow: "Business Continuity",
    title: "Verfügbarkeit und Wiederherstellung",
    body: "Backup mit dokumentierten Wiederherstellungszielen. Test-Restore-Prozess vierteljährlich. Incident-Prozess mit definierten Kommunikationswegen. Für Enterprise-Verträge sind konkrete SLA-Optionen mit Reaktions- und Wiederherstellungszeiten verfügbar.",
    facts: [
      { label: "Statusseite", value: "status.taskeyapp.com" },
      { label: "Incident-Kontakt", value: "security@taskeyapp.com" },
      { label: "SLA", value: "Enterprise-vertraglich" },
    ],
  },
];

const ROADMAP = [
  { key: "ISO 27001", status: "auf Roadmap", note: "Vorbereitung läuft. Kein Anspruch auf bestehende Zertifizierung." },
  { key: "SOC 2 Type II", status: "auf Roadmap", note: "Auditierung nach Reife der Prozesse geplant." },
  { key: "SCIM 2.0 Provisioning", status: "auf Roadmap", note: "Automatisiertes User Lifecycle Management." },
  { key: "TISAX", status: "auf Anfrage", note: "Für Automotive-Kunden bei Bedarf im Rahmen von Enterprise-Projekten." },
];

export default function SecurityPage() {
  return (
    <main className="tkc-canvas">
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Trust Center</div>
          <h1
            className="tkc-display mt-4"
            style={{ fontSize: "clamp(2.15rem, 4.5vw, 3.4rem)", color: "var(--tkc-ink)" }}
          >
            Security ist nicht Marketing.<br />
            Sie ist Betriebsführung.
          </h1>
          <p className="tkc-lead mt-6 max-w-[760px]">
            Datenschutz, Zugriffskontrolle, Hosting und Auditierbarkeit sind dokumentiert,
            überprüfbar und Teil des regulären Betriebs. Diese Seite fasst zusammen, was
            heute im Betrieb umgesetzt ist. Roadmap-Themen sind separat als solche
            gekennzeichnet.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/enterprise#procurement" className="tkc-btn tkc-btn-primary">
              Procurement-Paket anfragen
            </Link>
            <a href="mailto:security@taskeyapp.com" className="tkc-btn tkc-btn-ghost">
              Security-Team kontaktieren
            </a>
          </div>
        </div>
      </section>

      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide space-y-8">
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id} className="tkc-panel">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
                <div>
                  <div className="tkc-eyebrow">{s.eyebrow}</div>
                  <h2 className="mt-3" style={{ fontSize: "1.35rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                    {s.title}
                  </h2>
                  <p className="mt-4" style={{ fontSize: "0.96rem", lineHeight: 1.65, color: "var(--tkc-ink-soft)" }}>
                    {s.body}
                  </p>
                </div>
                <div className="rounded-[8px]" style={{ border: "1px solid var(--tkc-line)", overflow: "hidden" }}>
                  {s.facts.map((f, idx) => (
                    <div
                      key={f.label}
                      className="p-4"
                      style={{
                        borderBottom: idx < s.facts.length - 1 ? "1px solid var(--tkc-line)" : undefined,
                        background: "var(--tkc-canvas-elev)",
                      }}
                    >
                      <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {f.label}
                      </div>
                      <div className="mt-1" style={{ fontSize: "0.9rem", color: "var(--tkc-ink)", fontWeight: 500 }}>
                        {f.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Zertifizierungen & Roadmap</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)", color: "var(--tkc-ink)" }}>
            Was heute Betrieb ist, was in Vorbereitung.
          </h2>
          <p className="tkc-body mt-4 max-w-[720px]">
            Diese Seite behauptet keine Zertifizierungen, die nicht abgeschlossen sind.
            Nachfolgend die aktuell laufenden Vorhaben — mit klar deklariertem Status.
          </p>

          <div className="mt-8 rounded-[8px]" style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}>
            <table className="tkc-table">
              <thead>
                <tr>
                  <th style={{ width: "32%" }}>Vorhaben</th>
                  <th style={{ width: "22%" }}>Status</th>
                  <th>Anmerkung</th>
                </tr>
              </thead>
              <tbody>
                {ROADMAP.map((r) => (
                  <tr key={r.key}>
                    <td style={{ color: "var(--tkc-ink)", fontWeight: 500 }}>{r.key}</td>
                    <td>
                      <span className="tkc-chip tkc-chip-status-planned">{r.status}</span>
                    </td>
                    <td style={{ color: "var(--tkc-ink-soft)", fontSize: "0.9rem" }}>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
            <div>
              <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>
                Für Ihr Einkaufs- und IT-Team
              </div>
              <h2
                className="tkc-headline mt-3"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#fff" }}
              >
                Vollständiges Procurement-Paket auf Anfrage.
              </h2>
              <p className="tkc-lead mt-4" style={{ color: "rgba(238,241,245,0.72)" }}>
                AVV/DPA, TOMs, Subprozessorenliste, SLA-Optionen, Sicherheits-Fragebogen und
                Architekturübersicht in einem Paket. Für ausschreibungsrelevante Kunden auf Anfrage.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/enterprise#procurement" className="tkc-btn tkc-btn-onink">
                Procurement-Paket anfordern
              </Link>
              <a href="mailto:security@taskeyapp.com" className="tkc-btn tkc-btn-onink-ghost">
                Security-Kontakt
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
