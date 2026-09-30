import Link from "next/link";
import SectionHeaderCorporate from "./SectionHeaderCorporate";

const INTEGRATION_CATEGORIES = [
  {
    category: "ERP",
    items: [
      { name: "SAP", status: "api", href: "/integrations/sap" },
      { name: "Odoo", status: "api", href: "/integrations/odoo" },
      { name: "Microsoft Dynamics", status: "partner", href: "/integrations" },
    ],
  },
  {
    category: "HR / HCM",
    items: [
      { name: "Personio", status: "api", href: "/integrations/personio" },
      { name: "SuccessFactors", status: "partner", href: "/integrations" },
      { name: "Workday", status: "planned", href: "/integrations" },
    ],
  },
  {
    category: "Payroll",
    items: [
      { name: "DATEV", status: "native", href: "/integrations/datev" },
      { name: "SAP HCM", status: "partner", href: "/integrations" },
    ],
  },
  {
    category: "Identity",
    items: [
      { name: "Microsoft Entra ID", status: "native", href: "/integrations/microsoft-entra-id" },
      { name: "Okta", status: "native", href: "/integrations" },
      { name: "SCIM", status: "planned", href: "/integrations" },
    ],
  },
  {
    category: "BI / Data",
    items: [
      { name: "Power BI", status: "api", href: "/integrations/power-bi" },
      { name: "Data Warehouse", status: "api", href: "/integrations" },
    ],
  },
  {
    category: "Communication",
    items: [
      { name: "Microsoft Teams", status: "native", href: "/integrations" },
      { name: "E-Mail / SMTP", status: "native", href: "/integrations" },
    ],
  },
];

const STATUS_META: Record<string, { label: string; className: string }> = {
  native: { label: "native", className: "tkc-chip-status-live" },
  api: { label: "API", className: "tkc-chip-accent" },
  partner: { label: "Partner", className: "tkc-chip-status-beta" },
  planned: { label: "geplant", className: "tkc-chip-status-planned" },
};

export default function IntegrationLayerTeaser() {
  return (
    <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
          <SectionHeaderCorporate
            eyebrow="Integration Layer"
            title="Passt in Ihre Systemlandschaft. Nicht daneben."
            subtitle="Taskey ersetzt weder ERP noch HR noch Payroll. Es liefert die operative Datenschicht dazwischen — sauber, versioniert und mit klar dokumentiertem Integrationsstatus."
          />
          <div className="flex gap-3">
            <Link href="/integrations" className="tkc-btn tkc-btn-ghost tkc-btn-sm">
              Integrations Hub
            </Link>
            <Link href="/developers" className="tkc-btn tkc-btn-primary tkc-btn-sm">
              API-Dokumentation
            </Link>
          </div>
        </div>

        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-[8px]"
          style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}
        >
          {INTEGRATION_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.category}
              className="p-6"
              style={{
                background: "var(--tkc-canvas-elev)",
                borderRight: (idx + 1) % 3 !== 0 ? "1px solid var(--tkc-line)" : undefined,
                borderBottom: idx < INTEGRATION_CATEGORIES.length - 3 ? "1px solid var(--tkc-line)" : undefined,
              }}
            >
              <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {cat.category}
              </div>
              <ul className="mt-4 space-y-2.5">
                {cat.items.map((item) => {
                  const meta = STATUS_META[item.status];
                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between gap-3 py-1"
                        style={{ color: "var(--tkc-ink)" }}
                      >
                        <span style={{ fontSize: "0.92rem", fontWeight: 500 }}>{item.name}</span>
                        <span className={`tkc-chip ${meta.className}`} style={{ padding: "0.14rem 0.42rem", fontSize: "0.66rem" }}>
                          {meta.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 flex-wrap tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.76rem" }}>
          <span className="flex items-center gap-1.5">
            <span className="tkc-chip tkc-chip-status-live" style={{ padding: "0.12rem 0.38rem", fontSize: "0.66rem" }}>native</span>
            = fest ausgeliefert
          </span>
          <span className="flex items-center gap-1.5">
            <span className="tkc-chip tkc-chip-accent" style={{ padding: "0.12rem 0.38rem", fontSize: "0.66rem" }}>API</span>
            = über offene REST-API und Webhooks
          </span>
          <span className="flex items-center gap-1.5">
            <span className="tkc-chip tkc-chip-status-beta" style={{ padding: "0.12rem 0.38rem", fontSize: "0.66rem" }}>Partner</span>
            = über zertifizierten Partner-Connector
          </span>
          <span className="flex items-center gap-1.5">
            <span className="tkc-chip tkc-chip-status-planned" style={{ padding: "0.12rem 0.38rem", fontSize: "0.66rem" }}>geplant</span>
            = auf Roadmap
          </span>
        </div>
      </div>
    </section>
  );
}
