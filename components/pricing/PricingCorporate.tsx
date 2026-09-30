import Link from "next/link";
import ContactStrip from "@/components/contact/ContactStrip";

const TIERS = [
  {
    key: "solo",
    tag: "Einzelunternehmer",
    name: "Solo",
    price: "59",
    unit: "€ / Monat",
    body: "Alles, was du als Soloselbstständiger brauchst.",
    features: [
      "CRM",
      "Subunternehmer-Portal",
      "Finanzen",
      "Kalkulationen",
      "Kundenverwaltung",
    ],
    cta: "Kostenlos starten",
    ctaHref: "https://signup.taskeyapp.com",
    highlighted: false,
  },
  {
    key: "beginner",
    tag: "Für kleine Betriebe",
    name: "Beginner",
    price: "69",
    unit: "€ / Monat",
    body: "Der Einstieg für wachsende Reinigungsbetriebe.",
    features: [
      "Alle Basisfunktionen",
      "10 NFC-Tags inklusive",
      "10 GB Speicher",
      "E-Mail-Support",
      "CRM-Tool",
    ],
    cta: "Kostenlos starten",
    ctaHref: "https://signup.taskeyapp.com",
    highlighted: false,
  },
  {
    key: "professional",
    tag: "Beliebteste Wahl",
    name: "Professional",
    price: "179",
    unit: "€ / Monat",
    body: "Für Betriebe, die aus dem Papierkram raus wollen.",
    features: [
      "Alle Basisfunktionen",
      "50 NFC-Tags inklusive",
      "50 GB Speicher",
      "Direkter Chat-Support",
      "CRM-Tool",
      "Subunternehmer-Portal",
    ],
    cta: "Kostenlos starten",
    ctaHref: "https://signup.taskeyapp.com",
    highlighted: true,
  },
  {
    key: "business",
    tag: "Für professionelle Strukturen",
    name: "Business",
    price: "249",
    unit: "€ / Monat",
    body: "Wenn Prozesse, Nachweise und Kunden-Portale zählen.",
    features: [
      "Alle Basisfunktionen",
      "100 NFC-Tags inklusive",
      "Unbegrenzter Speicher",
      "Priority-Support per Telefon",
      "CRM mit E-Mail-Automatisierung",
      "Taskey Share (Kundendashboard)",
      "Ausschreibungsportal",
    ],
    cta: "Kostenlos starten",
    ctaHref: "https://signup.taskeyapp.com",
    highlighted: false,
  },
];

export default function PricingCorporate() {
  return (
    <main className="tkc-canvas">
      {/* Hero */}
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Preise</div>
          <h1
            className="tkc-display mt-4"
            style={{ fontSize: "clamp(2.15rem, 4.5vw, 3.4rem)", color: "var(--tkc-ink)" }}
          >
            Preise, die mit Ihrem Betrieb wachsen.
          </h1>
          <p className="tkc-lead mt-5 max-w-[680px]">
            Kostenlos starten. Jahresvertrag zu vergünstigten Konditionen oder monatlich
            kündbar. Keine Setup-Tricks, keine versteckten Kosten.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
            <span>· Unbegrenzte Mitarbeiter</span>
            <span>· Jahresvertrag oder monatlich kündbar</span>
            <span>· Alle Preise zzgl. MwSt.</span>
          </div>
        </div>
      </section>

      {/* Tier grid */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {TIERS.map((t) => (
              <div
                key={t.key}
                className="rounded-[12px] p-6 flex flex-col"
                style={{
                  background: t.highlighted ? "var(--tkc-accent)" : "var(--tkc-canvas-elev)",
                  color: t.highlighted ? "#ffffff" : "var(--tkc-ink)",
                  border: t.highlighted ? "1px solid var(--tkc-accent)" : "1px solid var(--tkc-line-strong)",
                  boxShadow: t.highlighted ? "0 12px 32px -14px rgba(30,64,175,0.35)" : "var(--tkc-shadow-sm)",
                }}
              >
                <div
                  className="tkc-mono"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: t.highlighted ? "rgba(255,255,255,0.7)" : "var(--tkc-ink-muted)",
                  }}
                >
                  {t.tag}
                </div>
                <div
                  className="mt-3"
                  style={{ fontSize: "1.35rem", fontWeight: 600 }}
                >
                  {t.name}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span style={{ fontSize: "2.2rem", fontWeight: 600, letterSpacing: "-0.02em" }}>
                    {t.price}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: t.highlighted ? "rgba(255,255,255,0.72)" : "var(--tkc-ink-muted)",
                    }}
                  >
                    {t.unit}
                  </span>
                </div>
                <p
                  className="mt-3"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.55,
                    color: t.highlighted ? "rgba(255,255,255,0.85)" : "var(--tkc-ink-soft)",
                  }}
                >
                  {t.body}
                </p>
                <ul className="mt-5 space-y-2 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2" style={{ fontSize: "0.88rem", lineHeight: 1.5 }}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                        style={{
                          flexShrink: 0,
                          marginTop: "3px",
                          color: t.highlighted ? "rgba(255,255,255,0.85)" : "var(--tkc-accent)",
                        }}
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={t.ctaHref}
                  className={t.highlighted ? "tkc-btn tkc-btn-onink mt-6" : "tkc-btn tkc-btn-primary mt-6"}
                  target={t.ctaHref.startsWith("http") ? "_blank" : undefined}
                  rel={t.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {t.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prominent Enterprise tile */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div
            className="relative rounded-[16px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0b1a4a 0%, #1e40af 60%, #2a5ad9 100%)",
              color: "#ffffff",
              boxShadow: "0 40px 80px -30px rgba(11, 26, 74, 0.5)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.10) 0%, transparent 45%)",
              }}
            />
            <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 p-8 md:p-12 lg:p-14">
              <div>
                <div
                  className="tkc-mono inline-flex items-center gap-2"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: "#7ba7ff",
                      boxShadow: "0 0 0 4px rgba(123,167,255,0.25)",
                      display: "inline-block",
                    }}
                  />
                  Enterprise
                </div>
                <h2
                  className="tkc-display mt-4"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.15rem)", color: "#ffffff" }}
                >
                  Wenn Standard nicht genügt.
                </h2>
                <p
                  className="tkc-lead mt-5 max-w-[540px]"
                  style={{ color: "rgba(238,241,245,0.85)" }}
                >
                  Für Organisationen mit hunderten Mitarbeitenden, mehreren Standorten
                  und einer IT, die SSO, RBAC, Audit Log und Systemintegration braucht.
                  Individuell zugeschnitten. Persönlich betreut.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    "Alles aus Business",
                    "SSO · Entra ID · Okta · SAML",
                    "RBAC + Audit Log",
                    "SAP · Odoo · DATEV · Personio",
                    "Dedizierter Account Manager",
                    "SLA nach Vereinbarung",
                    "Custom Integrations & API",
                    "Persönliches Onboarding",
                  ].map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2"
                      style={{ fontSize: "0.92rem", color: "rgba(238,241,245,0.9)", lineHeight: 1.4 }}
                    >
                      <span
                        aria-hidden
                        style={{
                          color: "#7ba7ff",
                          marginTop: "2px",
                          flexShrink: 0,
                          display: "inline-flex",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/enterprise" className="tkc-btn tkc-btn-onink">
                    Enterprise ansehen
                  </Link>
                  <Link href="/enterprise#kontakt" className="tkc-btn tkc-btn-onink-ghost">
                    Direkt anfragen
                  </Link>
                </div>
              </div>

              <div
                className="rounded-[12px] p-6"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="tkc-mono" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Preis
                </div>
                <div className="mt-3" style={{ fontSize: "2rem", fontWeight: 600, color: "#ffffff" }}>
                  Individuell
                </div>
                <p className="mt-2" style={{ fontSize: "0.9rem", color: "rgba(238,241,245,0.75)", lineHeight: 1.55 }}>
                  Angepasst an Größe, Anforderungen, Integrationen und SLA. Selektive
                  Aufnahme, wir prüfen jeden Antrag persönlich.
                </p>

                <div className="tkc-hairline-onink my-5" />

                <div className="tkc-mono" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Rollout
                </div>
                <ul className="mt-3 space-y-1.5" style={{ fontSize: "0.86rem", color: "rgba(238,241,245,0.9)" }}>
                  <li>Discovery-Workshop</li>
                  <li>Pilotstandort in wenigen Wochen</li>
                  <li>Playbook für skalierten Rollout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8">
            <div>
              <div className="tkc-eyebrow">Fragen zum Preis?</div>
              <h2
                className="tkc-headline mt-3"
                style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)", color: "var(--tkc-ink)" }}
              >
                Wir gehen die passende Struktur mit Ihnen durch.
              </h2>
            </div>
            <ContactStrip variant="onLight" align="start" showLabel={false} />
          </div>
        </div>
      </section>
    </main>
  );
}
