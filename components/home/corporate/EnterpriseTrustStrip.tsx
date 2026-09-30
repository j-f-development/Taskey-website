import Link from "next/link";

type Integration = {
  name: string;
  category: string;
  href: string;
};

const INTEGRATIONS: Integration[] = [
  { name: "DATEV", category: "Steuerkanzlei", href: "/integrationen/datev" },
  { name: "SAP", category: "ERP", href: "/integrationen" },
  { name: "Odoo", category: "ERP", href: "/integrationen" },
  { name: "Personio", category: "HR & Payroll", href: "/integrationen" },
  { name: "Microsoft Entra ID", category: "Identity & SSO", href: "/integrationen" },
  { name: "Power BI", category: "Business Intelligence", href: "/integrationen" },
];

const CAPABILITIES = [
  "REST-API & Webhooks",
  "SSO · Entra ID · Okta",
  "RBAC + Audit Log",
  "Multi-Standort",
  "DSGVO · Hosting DE/EU",
];

export default function EnterpriseTrustStrip() {
  return (
    <section
      id="enterprise"
      className="tkc-section"
      style={{ background: "var(--tkc-canvas-tinted)" }}
    >
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="tkc-eyebrow">Enterprise & Integrationen</div>
            <h2
              className="tkc-headline mt-3"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                color: "var(--tkc-ink)",
              }}
            >
              Enterprise-ready ohne Extra-Version.
            </h2>
            <p className="tkc-lead mt-5 max-w-[520px]">
              Taskey wächst mit. Wenn morgen die IT nach Single Sign-On fragt, die
              Revision nach Audit-Log und der Einkauf nach AVV: die Antworten
              liegen fertig bereit. Keine Enterprise-Version. Alles im selben
              Produkt.
            </p>

            <ul
              className="mt-6 flex flex-wrap gap-x-4 gap-y-2 tkc-mono"
              style={{ color: "var(--tkc-ink-soft)", fontSize: "0.78rem" }}
            >
              {CAPABILITIES.map((c, i) => (
                <li key={c} className="flex items-center gap-2">
                  <span>{c}</span>
                  {i < CAPABILITIES.length - 1 ? (
                    <span style={{ color: "var(--tkc-ink-faint)" }}>·</span>
                  ) : null}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/enterprise" className="tkc-btn tkc-btn-primary">
                Enterprise ansehen
              </Link>
              <Link
                href="https://signup.taskeyapp.com"
                className="tkc-btn tkc-btn-ghost"
              >
                Kostenlos starten
              </Link>
            </div>
          </div>

          <div>
            <div
              className="tkc-mono"
              style={{
                color: "var(--tkc-ink-muted)",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Integrationen
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              {INTEGRATIONS.map((int) => (
                <Link
                  key={int.name}
                  href={int.href}
                  className="flex flex-col justify-between p-4 rounded-[10px] transition-colors"
                  style={{
                    background: "var(--tkc-canvas-elev)",
                    border: "1px solid var(--tkc-line-strong)",
                    textDecoration: "none",
                    color: "inherit",
                    minHeight: "108px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "var(--tkc-ink)",
                    }}
                  >
                    {int.name}
                  </div>
                  <div
                    className="tkc-mono mt-2"
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--tkc-ink-muted)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {int.category}
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/integrationen"
                className="tkc-mono"
                style={{
                  color: "var(--tkc-accent)",
                  fontSize: "0.82rem",
                }}
              >
                Alle Integrationen ansehen →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
