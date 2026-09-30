import Link from "next/link";

const PILLS = [
  { label: "REST-API & Webhooks", href: "/developers" },
  { label: "SSO · Entra ID · Okta", href: "/security#access-control" },
  { label: "RBAC + Audit Log", href: "/security#auditability" },
  { label: "Multi-Standort", href: "/platform" },
  { label: "DSGVO · Hosting DE/EU", href: "/security#infrastructure" },
  { label: "DATEV-Export", href: "/integrations/datev" },
  { label: "SAP · Odoo", href: "/integrations" },
];

export default function EnterpriseTrustStrip() {
  return (
    <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end">
          <div className="max-w-[680px]">
            <div className="tkc-eyebrow">Auch für Enterprise gebaut</div>
            <h2
              className="tkc-headline mt-3"
              style={{ fontSize: "clamp(1.55rem, 2.8vw, 2.15rem)", color: "var(--tkc-ink)" }}
            >
              Der Rest bleibt Ihnen erspart.
            </h2>
            <p className="tkc-body mt-4">
              Taskey wächst mit. Wenn morgen die IT nach Single Sign-On fragt, die
              Revision nach Audit-Log und der Einkauf nach AVV: die Antworten
              liegen fertig bereit. Keine Enterprise-Version. Alles im selben Produkt.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/enterprise" className="tkc-btn tkc-btn-ghost tkc-btn-sm">
              Enterprise ansehen
            </Link>
            <Link href="/security" className="tkc-btn tkc-btn-primary tkc-btn-sm">
              Trust Center
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {PILLS.map((p) => (
            <Link
              key={p.label}
              href={p.href}
              className="tkc-chip"
              style={{ padding: "0.4rem 0.75rem", fontSize: "0.78rem", cursor: "pointer" }}
            >
              {p.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
