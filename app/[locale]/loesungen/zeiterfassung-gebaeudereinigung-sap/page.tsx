import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title:
      "Zeiterfassung für Gebäudereinigung mit SAP-Integration | Taskey",
    description:
      "Mobile Zeiterfassung für dezentrale Reinigungsteams. Objektbezogen, freigegeben und kontrolliert an SAP HCM übergeben. Für Gebäudedienstleister ab 200 Mitarbeitenden.",
  },
  en: {
    title: "Time tracking for cleaning services with SAP integration | Taskey",
    description: "Time tracking for decentralised cleaning teams with a controlled hand-off to SAP HCM.",
  },
  fr: {
    title: "Pointage nettoyage avec intégration SAP | Taskey",
    description: "Pointage pour équipes de nettoyage avec transfert contrôlé vers SAP HCM.",
  },
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
    path: "/loesungen/zeiterfassung-gebaeudereinigung-sap",
  });
}

const FLOW = [
  { no: "01", label: "Zeit erfassen", desc: "Mitarbeitende buchen im Objekt per NFC, GPS oder App. Kostenstelle und Auftrag ergeben sich aus dem Objekt." },
  { no: "02", label: "Plausibilisieren", desc: "Zeitmodelle, Zuschläge und Regelwerke werden automatisch angewendet. Auffällige Buchungen markiert." },
  { no: "03", label: "Freigeben", desc: "Mehrstufige Freigabe durch Objektleitung, Region oder Zentrale. Erst freigegebene Zeiten sind übergabefähig." },
  { no: "04", label: "An SAP übergeben", desc: "Übergabe an SAP HCM/ERP mit Personalnummer, Kostenstelle, Zuschlagsschlüssel und Idempotenz-Key." },
  { no: "05", label: "Rückmelden", desc: "SAP-Response wird zurückgeschrieben, im Audit Log erfasst und in Integrationslogs sichtbar." },
];

const FIELD_MAP = [
  { taskey: "employee.personnel_number", direction: "↔", sap: "PA0001-PERNR", note: "Personalnummer als führendes ID-Feld" },
  { taskey: "cost_center", direction: "↔", sap: "CSKS-KOSTL", note: "Kostenstelle mit Buchungskreis" },
  { taskey: "object.reference", direction: "←", sap: "AUFK-AUFNR", note: "Reinigungsobjekt als SAP-Auftrag" },
  { taskey: "time_entry.check_in/out", direction: "→", sap: "CATSDB", note: "Zeitbuchung inkl. Zuschlagsschlüssel" },
  { taskey: "bonus.key", direction: "→", sap: "T510S", note: "Mapping nach kundenseitiger Lohnkonfiguration" },
];

const FAQ = [
  {
    q: "Für welche Betriebsgrößen ist diese Lösung relevant?",
    a: "Der Nutzen entsteht bei Gebäudedienstleistern mit mehreren Standorten und dezentraler Leistungserbringung, in der Regel ab 200 Mitarbeitenden. Ab dieser Größe rechnen sich Freigabelogik, Auditierbarkeit und die Übergabe an SAP HCM in vollem Umfang.",
  },
  {
    q: "Was passiert bei Fehlern auf SAP-Seite?",
    a: "Fehler werden im Integrationslog erfasst, dem betreffenden Datensatz zugeordnet und in Taskey zur Nachbearbeitung markiert. Wiederholungen erfolgen mit demselben Idempotenz-Key und verhindern Doppelbuchungen.",
  },
  {
    q: "Können wir Zuschläge und Lohnarten individuell abbilden?",
    a: "Ja. Zuschlagsschlüssel und Lohnarten werden im Mapping-Layer nach Ihrer SAP-Lohnkonfiguration hinterlegt. Änderungen sind versioniert und werden im Change Log dokumentiert.",
  },
  {
    q: "Wie ist die Zeiterfassung mit Datenschutz vereinbar?",
    a: "Erfasst werden objektbezogene Zeitdaten, nicht kontinuierliche Standortdaten. GPS-Prüfung erfolgt nur zum Zeitpunkt der Buchung und ist konfigurierbar. Betriebsrats-Prozess und Einwilligung werden im Rollout mitbetreut.",
  },
  {
    q: "Wie schnell ist ein Pilotstandort produktiv?",
    a: "Ein Pilot mit einem Standort, klarem Zielsystem-Mapping und definierten Freigaben ist typischerweise in wenigen Wochen produktiv. Details werden im Integrationsscoping abgestimmt.",
  },
];

export default function ZeiterfassungGebaeudereinigungSapPage() {
  return (
    <main className="tkc-canvas">
      {/* Hero */}
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/solutions" className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
              Solutions
            </Link>
            <span className="tkc-mono" style={{ color: "var(--tkc-ink-faint)" }}>/</span>
            <span className="tkc-mono" style={{ color: "var(--tkc-ink)", fontSize: "0.78rem" }}>
              Zeiterfassung Gebäudereinigung × SAP
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className="tkc-chip tkc-chip-accent">Use Case</span>
            <span className="tkc-chip">Branche: Gebäudereinigung</span>
            <span className="tkc-chip">Zielsystem: SAP HCM · ERP</span>
          </div>

          <h1
            className="tkc-display mt-6"
            style={{ fontSize: "clamp(2rem, 4vw, 3.15rem)", color: "var(--tkc-ink)" }}
          >
            Zeiterfassung für Gebäudereinigung<br />
            mit SAP-Integration.
          </h1>
          <p className="tkc-lead mt-6 max-w-[760px]">
            Mobile, objektbezogene Zeiterfassung für dezentrale Reinigungsteams. Freigabe in Taskey,
            kontrollierte Übergabe an SAP HCM. Ohne Excel-Zwischenschritte, ohne stille Fehlerfälle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/enterprise#kontakt" className="tkc-btn tkc-btn-primary">
              SAP-Integration prüfen
            </Link>
            <Link href="/integrations/sap" className="tkc-btn tkc-btn-ghost">
              SAP-Integration im Detail
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Zielbild */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tkc-panel">
              <div className="tkc-eyebrow">Problem</div>
              <h2 className="mt-3" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                Dezentrale Leistung. Zentrales ERP. Manueller Zwischenweg.
              </h2>
              <p className="mt-3" style={{ fontSize: "0.94rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                Reinigungsteams erfassen Zeiten in Objekten, Objektleitungen prüfen in Excel, Zentrale
                überträgt manuell nach SAP. Der Weg ist fehleranfällig, langsam und für Revision nicht
                nachvollziehbar. Zuschläge, Kostenstellen und Personalnummern gehen bei jedem
                Zwischenschritt neu durch.
              </p>
            </div>
            <div className="tkc-panel">
              <div className="tkc-eyebrow">Zielbild</div>
              <h2 className="mt-3" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                Ein Datenweg. Freigegeben. Auditierbar. Idempotent.
              </h2>
              <p className="mt-3" style={{ fontSize: "0.94rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                Zeiten entstehen strukturiert in Taskey, werden mehrstufig freigegeben und in
                definierter Frequenz an SAP HCM übergeben. Kostenstellen, Personalnummern und
                Objektreferenzen bleiben konsistent. Fehler werden zurückgemeldet und dokumentiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Datenfluss */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>Datenfluss</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#fff" }}>
            Fünf Schritte vom Objekt zur Lohnabrechnung.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {FLOW.map((s) => (
              <div key={s.no} className="tkc-card-onink" style={{ padding: "1.4rem" }}>
                <div className="tkc-mono" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                  {s.no}
                </div>
                <h3 className="mt-3" style={{ fontSize: "0.98rem", fontWeight: 600, color: "#fff" }}>
                  {s.label}
                </h3>
                <p className="mt-2" style={{ fontSize: "0.84rem", lineHeight: 1.55, color: "rgba(238,241,245,0.72)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrationsoption */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Integrationsoption</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "var(--tkc-ink)" }}>
            Über die öffentliche REST-API. Kein Third-Party-Konnektor.
          </h2>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="tkc-card-strong">
              <span className="tkc-chip tkc-chip-accent">bevorzugt</span>
              <h3 className="mt-4" style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                API-Integration
              </h3>
              <p className="mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                Direkter Zugriff auf die Taskey REST-API v1. Übergabe an SAP über SAP Gateway,
                BTP Destination oder eine kundenseitige Middleware.
              </p>
            </div>
            <div className="tkc-card-strong">
              <span className="tkc-chip tkc-chip-status-beta">optional</span>
              <h3 className="mt-4" style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                Partner-Connector
              </h3>
              <p className="mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                Für spezifische SAP-Modul- und Payroll-Konfigurationen unterstützen wir gemeinsam
                mit Implementierungspartnern.
              </p>
            </div>
            <div className="tkc-card-strong">
              <span className="tkc-chip tkc-chip-status-planned">Custom</span>
              <h3 className="mt-4" style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                Custom Endpoint
              </h3>
              <p className="mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                Bei sehr spezifischen Anforderungen entstehen versionierte Custom Endpoints. Klar
                getrennt von der Produkt-Roadmap und vertraglich sauber ausgestaltet.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="tkc-eyebrow">Field Mapping · Auszug</div>
            <div className="mt-4 rounded-[8px]" style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}>
              <table className="tkc-table">
                <thead>
                  <tr>
                    <th style={{ width: "34%" }}>Taskey</th>
                    <th style={{ width: "10%" }}>Richtung</th>
                    <th style={{ width: "30%" }}>SAP</th>
                    <th>Anmerkung</th>
                  </tr>
                </thead>
                <tbody>
                  {FIELD_MAP.map((r) => (
                    <tr key={r.taskey}>
                      <td className="tkc-mono">{r.taskey}</td>
                      <td className="tkc-mono" style={{ color: "var(--tkc-ink-muted)" }}>{r.direction}</td>
                      <td className="tkc-mono">{r.sap}</td>
                      <td style={{ color: "var(--tkc-ink-soft)", fontSize: "0.88rem" }}>{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-3">
              <Link href="/integrations/sap" className="tkc-mono" style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}>
                → Vollständiges Field Mapping in der SAP-Integration
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8">
            <div>
              <div className="tkc-eyebrow">Governance</div>
              <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "var(--tkc-ink)" }}>
                Verantwortung ist im System sichtbar.
              </h2>
              <p className="tkc-body mt-4">
                Wer eine Zeit erfasst, wer freigibt, wer korrigiert, wer übergibt: alles mit Rolle,
                Zeitstempel und Vorher-Nachher im Audit Log. Übergaben ohne Freigabe sind konfigurativ
                unterbunden.
              </p>
            </div>
            <div className="tkc-panel">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="tkc-index">01</span>
                  <span style={{ fontSize: "0.94rem", color: "var(--tkc-ink)", lineHeight: 1.55 }}>
                    RBAC steuert, wer erfassen, freigeben und übergeben darf — pro Standort, Team und Objekt.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="tkc-index">02</span>
                  <span style={{ fontSize: "0.94rem", color: "var(--tkc-ink)", lineHeight: 1.55 }}>
                    Freigabe ist eigenständige Handlung mit Audit-Eintrag, nicht nur ein Statusflag.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="tkc-index">03</span>
                  <span style={{ fontSize: "0.94rem", color: "var(--tkc-ink)", lineHeight: 1.55 }}>
                    Korrekturen sind rückverfolgbar. Ursprungswert bleibt im Log erhalten.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="tkc-index">04</span>
                  <span style={{ fontSize: "0.94rem", color: "var(--tkc-ink)", lineHeight: 1.55 }}>
                    Übergaben an SAP tragen Idempotenz-Key und Antwort-Payload im Integrationslog.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technischer Abschnitt */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Technischer Steckbrief</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "var(--tkc-ink)" }}>
            Für Ihr Integrations-Team.
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Authentifizierung", value: "OAuth 2.0 · Client Credentials · granulare Scopes" },
              { label: "Synchronisationsrichtung", value: "Bidirektional. Stammdaten SAP → Taskey, Zeiten Taskey → SAP" },
              { label: "Frequenz", value: "Batch (Monat) für Payroll · Webhook-Events für Status" },
              { label: "Idempotenz", value: "Idempotency-Key pro Übergabe, Retry-safe" },
              { label: "Fehlerbehandlung", value: "Integrationslog · Dead-Letter-Handling · Wiedervorlage" },
              { label: "Datenschutz", value: "DSGVO · AVV/DPA · Hosting DE/EU · Retention konfigurierbar" },
              { label: "Rollen & Rechte", value: "RBAC pro Standort/Mandant/Rolle · SSO über Entra ID · Okta" },
              { label: "Reporting", value: "CSV/JSON · API · Anbindung an Power BI oder DWH" },
            ].map((tf) => (
              <div key={tf.label} className="tkc-card">
                <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {tf.label}
                </div>
                <div className="mt-2" style={{ fontSize: "0.88rem", color: "var(--tkc-ink)", lineHeight: 1.5 }}>
                  {tf.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Proof */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="tkc-card-strong">
              <div className="tkc-eyebrow">Security</div>
              <p className="mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                DSGVO-konform, Hosting in EU, Audit Log, RBAC. Details im Trust Center.
              </p>
              <Link href="/security" className="tkc-mono mt-3 inline-block" style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}>
                → Trust Center
              </Link>
            </div>
            <div className="tkc-card-strong">
              <div className="tkc-eyebrow">Enterprise Support</div>
              <p className="mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                Definierte Reaktionszeiten, benannte Ansprechpartner, quartalsweises Service Review.
              </p>
              <Link href="/enterprise#support" className="tkc-mono mt-3 inline-block" style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}>
                → Enterprise Support
              </Link>
            </div>
            <div className="tkc-card-strong">
              <div className="tkc-eyebrow">Rollout</div>
              <p className="mt-3" style={{ fontSize: "0.9rem", lineHeight: 1.55, color: "var(--tkc-ink-soft)" }}>
                Pilotstandort, Playbook je Standortkategorie, klare Erfolgskriterien.
              </p>
              <Link href="/enterprise#rollout" className="tkc-mono mt-3 inline-block" style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}>
                → Enterprise Rollout
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container">
          <div className="tkc-eyebrow">Häufige Fragen</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)", color: "var(--tkc-ink)" }}>
            Zum Use Case.
          </h2>
          <div className="mt-8">
            {FAQ.map((item, idx) => (
              <details key={idx} className="group" style={{ borderBottom: "1px solid var(--tkc-line)" }}>
                <summary
                  className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none"
                  style={{ fontSize: "0.98rem", fontWeight: 500, color: "var(--tkc-ink)" }}
                >
                  <span>{item.q}</span>
                  <span className="tkc-mono flex-shrink-0" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.9rem" }}>+</span>
                </summary>
                <p className="pb-6 pr-10" style={{ fontSize: "0.92rem", lineHeight: 1.65, color: "var(--tkc-ink-soft)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
            <div>
              <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>Nächster Schritt</div>
              <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#fff" }}>
                Ihre SAP-Konfiguration mit uns durchgehen.
              </h2>
              <p className="tkc-lead mt-4" style={{ color: "rgba(238,241,245,0.72)" }}>
                30 Minuten mit einem Solution Engineer. Wir mappen konkrete Objekte, Personalnummern,
                Kostenstellen und Zuschlagsschlüssel Ihrer Landschaft.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/enterprise#kontakt" className="tkc-btn tkc-btn-onink">
                SAP-Integration prüfen
              </Link>
              <Link href="/integrations/sap" className="tkc-btn tkc-btn-onink-ghost">
                SAP-Integration im Detail
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
