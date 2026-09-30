import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Integrations Hub · ERP, HR, Payroll, Identity, BI | Taskey",
    description:
      "Alle Integrationen: SAP, Odoo, DATEV, Personio, Microsoft Entra ID, Okta, Power BI. Nativ, über API oder Partner-Connector. Mit klar dokumentiertem Status je System.",
  },
  en: { title: "Integrations | Taskey", description: "Taskey integrations hub." },
  fr: { title: "Intégrations | Taskey", description: "Hub des intégrations Taskey." },
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
    path: "/integrations",
  });
}

type IntStatus = "native" | "api" | "partner" | "planned";
type Integration = {
  name: string;
  slug?: string;
  status: IntStatus;
  summary: string;
};

type Category = {
  key: string;
  title: string;
  description: string;
  items: Integration[];
};

const CATEGORIES: Category[] = [
  {
    key: "erp",
    title: "ERP",
    description: "Kunden, Kostenstellen, Aufträge und Objekte als Stammdaten. Freigegebene operative Daten zurück in Buchhaltung und Auftragsabwicklung.",
    items: [
      { name: "SAP", slug: "sap", status: "api", summary: "Zeitdaten, Kostenstellen, Objekte, Aufträge." },
      { name: "Odoo", slug: "odoo", status: "api", summary: "Kunden, Aufträge, Objekte und freigegebene Zeiten." },
      { name: "Microsoft Dynamics 365", status: "partner", summary: "Über zertifizierten Partner-Connector." },
    ],
  },
  {
    key: "hr",
    title: "HR / HCM",
    description: "Mitarbeiterstammdaten, Organisationsstruktur, Abwesenheiten. Konsistente Basis für Einsatzsteuerung und Payroll.",
    items: [
      { name: "Personio", slug: "personio", status: "api", summary: "Mitarbeiter, Organisationseinheiten, Abwesenheiten." },
      { name: "SAP SuccessFactors", status: "partner", summary: "Über Partner-Connector." },
      { name: "Workday", status: "planned", summary: "Auf Roadmap." },
    ],
  },
  {
    key: "payroll",
    title: "Payroll",
    description: "Freigegebene Zeitdaten, Zuschläge und Lohnarten kontrolliert an das Lohnsystem übergeben.",
    items: [
      { name: "DATEV", slug: "datev", status: "native", summary: "Lohnexport mit Kostenstellen und Zuschlägen." },
      { name: "SAP HCM", status: "partner", summary: "Über Partner-Connector." },
      { name: "eGecko", status: "planned", summary: "Auf Roadmap." },
    ],
  },
  {
    key: "identity",
    title: "Identity",
    description: "Zentrales SSO, automatisiertes Provisioning und Deprovisioning entlang der Corporate-Identität.",
    items: [
      { name: "Microsoft Entra ID", slug: "microsoft-entra-id", status: "native", summary: "SSO, Just-in-Time User, Gruppen-Mapping." },
      { name: "Okta", status: "native", summary: "SAML/OIDC, granulare Scopes." },
      { name: "SCIM 2.0", status: "planned", summary: "Automatisiertes Provisioning auf Roadmap." },
    ],
  },
  {
    key: "bi",
    title: "BI / Data",
    description: "Operative Kennzahlen und Events in bestehende Auswertungsstrecken. Kein Parallelsystem.",
    items: [
      { name: "Power BI", slug: "power-bi", status: "api", summary: "Operatives Reporting, Kennzahlen, Events." },
      { name: "Data Warehouse", status: "api", summary: "Event-Stream, Exports, DWH-Anbindung." },
      { name: "Looker", status: "planned", summary: "Auf Roadmap." },
    ],
  },
  {
    key: "communication",
    title: "Communication",
    description: "Benachrichtigungen, Eskalationen und operative Signale in die Kanäle, die bereits genutzt werden.",
    items: [
      { name: "Microsoft Teams", status: "native", summary: "Benachrichtigungen und Eskalationen." },
      { name: "E-Mail / SMTP", status: "native", summary: "Standardweg für Freigaben und Reports." },
    ],
  },
];

const STATUS_META: Record<IntStatus, { label: string; className: string }> = {
  native: { label: "native", className: "tkc-chip-status-live" },
  api: { label: "API", className: "tkc-chip-accent" },
  partner: { label: "Partner", className: "tkc-chip-status-beta" },
  planned: { label: "geplant", className: "tkc-chip-status-planned" },
};

export default function IntegrationsHubPage() {
  return (
    <main className="tkc-canvas">
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Integrations Hub</div>
          <h1
            className="tkc-display mt-4"
            style={{ fontSize: "clamp(2.15rem, 4.5vw, 3.4rem)", color: "var(--tkc-ink)" }}
          >
            Taskey passt in Ihre Systemlandschaft.<br />
            Wir dokumentieren wie.
          </h1>
          <p className="tkc-lead mt-6 max-w-[720px]">
            Jede Integration ist mit klar deklariertem Status hinterlegt. Kein Logo-Wall, keine impliziten
            Zusagen. Nativ, per API, per Partner-Connector oder geplant — der Unterschied bleibt sichtbar.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
            <span className="tkc-chip tkc-chip-status-live">native</span>
            <span>fest ausgeliefert · Konfiguration in der Admin-Oberfläche</span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
            <span className="tkc-chip tkc-chip-accent">API</span>
            <span>über offene REST-API, Webhooks und dokumentierte Payloads</span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
            <span className="tkc-chip tkc-chip-status-beta">Partner</span>
            <span>über zertifizierten Partner-Connector, Rollout gemeinsam mit dem Partner</span>
          </div>
          <div className="mt-1.5 flex flex-wrap items-center gap-3 tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
            <span className="tkc-chip tkc-chip-status-planned">geplant</span>
            <span>auf der Roadmap, aktuell nicht verfügbar</span>
          </div>
        </div>
      </section>

      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide space-y-10">
          {CATEGORIES.map((cat) => (
            <div key={cat.key}>
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 items-start">
                <div>
                  <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {cat.key}
                  </div>
                  <h2 className="mt-2" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                    {cat.title}
                  </h2>
                  <p className="mt-3" style={{ fontSize: "0.9rem", color: "var(--tkc-ink-muted)", lineHeight: 1.55 }}>
                    {cat.description}
                  </p>
                </div>
                <div
                  className="rounded-[8px]"
                  style={{ background: "var(--tkc-canvas-elev)", border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}
                >
                  {cat.items.map((item, idx) => {
                    const meta = STATUS_META[item.status];
                    const body = (
                      <div
                        className="grid grid-cols-1 md:grid-cols-[220px_1fr_auto] gap-4 md:gap-6 items-start md:items-center px-6 py-5"
                        style={{ borderBottom: idx < cat.items.length - 1 ? "1px solid var(--tkc-line)" : undefined }}
                      >
                        <div style={{ fontSize: "0.98rem", fontWeight: 500, color: "var(--tkc-ink)" }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: "0.88rem", color: "var(--tkc-ink-soft)", lineHeight: 1.5 }}>
                          {item.summary}
                        </div>
                        <div className="flex items-center gap-3 justify-start md:justify-end">
                          <span className={`tkc-chip ${meta.className}`}>{meta.label}</span>
                          {item.slug ? (
                            <span className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
                              Details →
                            </span>
                          ) : null}
                        </div>
                      </div>
                    );
                    return item.slug ? (
                      <Link key={item.name} href={`/integrations/${item.slug}`} style={{ display: "block", color: "inherit" }}>
                        {body}
                      </Link>
                    ) : (
                      <div key={item.name}>{body}</div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-panel">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <div className="tkc-eyebrow">Ihr Zielsystem ist nicht dabei</div>
                <h3 className="mt-3" style={{ fontSize: "1.25rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                  Individuelle Anbindungen laufen über die öffentliche API.
                </h3>
                <p className="mt-2" style={{ fontSize: "0.94rem", color: "var(--tkc-ink-soft)", lineHeight: 1.55 }}>
                  REST v1 mit granularen Scopes, signierte Webhooks und dokumentierte Payloads. Beispiele in der Developer-Dokumentation.
                </p>
              </div>
              <div className="flex gap-3">
                <Link href="/developers" className="tkc-btn tkc-btn-primary">
                  API-Dokumentation
                </Link>
                <Link href="/enterprise#kontakt" className="tkc-btn tkc-btn-ghost">
                  Anbindung prüfen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
