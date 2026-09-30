import Link from "next/link";
import ContactStrip from "@/components/contact/ContactStrip";

export type Perk = { title: string; body: string };
export type Fit = { headline: string; body: string };

type Props = {
  eyebrow: string;
  title: string;
  lead: string;
  perks: Perk[];
  fit: Fit[];
  cta?: {
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export default function SolutionPageLayout({ eyebrow, title, lead, perks, fit, cta }: Props) {
  const primary = cta ?? {
    primaryLabel: "Kostenlos starten",
    primaryHref: "https://signup.taskeyapp.com",
    secondaryLabel: "Enterprise besprechen",
    secondaryHref: "/enterprise#kontakt",
  };

  return (
    <main className="tkc-canvas">
      {/* Hero */}
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/loesungen" className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
              Lösungen
            </Link>
            <span className="tkc-mono" style={{ color: "var(--tkc-ink-faint)" }}>/</span>
            <span className="tkc-mono" style={{ color: "var(--tkc-ink)", fontSize: "0.78rem" }}>
              {eyebrow}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-start">
            <div>
              <div className="tkc-eyebrow">{eyebrow}</div>
              <h1
                className="tkc-display mt-3"
                style={{ fontSize: "clamp(2rem, 4vw, 3.15rem)", color: "var(--tkc-ink)" }}
              >
                {title}
              </h1>
              <p className="tkc-lead mt-5">{lead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={primary.primaryHref} className="tkc-btn tkc-btn-primary">
                  {primary.primaryLabel}
                </Link>
                {primary.secondaryHref && primary.secondaryLabel ? (
                  <Link href={primary.secondaryHref} className="tkc-btn tkc-btn-ghost">
                    {primary.secondaryLabel}
                  </Link>
                ) : null}
              </div>
            </div>
            <div className="lg:pt-8">
              <ContactStrip variant="onLight" align="start" showLabel />
            </div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((p, idx) => (
              <div key={p.title} className="tkc-card-strong">
                <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3
                  className="mt-3"
                  style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--tkc-ink)" }}
                >
                  {p.title}
                </h3>
                <p className="mt-2" style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
            <div>
              <div className="tkc-eyebrow">Für wen</div>
              <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 2rem)", color: "var(--tkc-ink)" }}>
                Wenn Ihre Realität so aussieht.
              </h2>
            </div>
            <div className="rounded-[8px]" style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}>
              {fit.map((f, idx) => (
                <div
                  key={f.headline}
                  className="p-6"
                  style={{
                    background: "var(--tkc-canvas-elev)",
                    borderBottom: idx < fit.length - 1 ? "1px solid var(--tkc-line)" : undefined,
                  }}
                >
                  <h4 style={{ fontSize: "0.98rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                    {f.headline}
                  </h4>
                  <p className="mt-2" style={{ fontSize: "0.9rem", color: "var(--tkc-ink-soft)", lineHeight: 1.6 }}>
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
            <div>
              <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>Nächster Schritt</div>
              <h2
                className="tkc-headline mt-3"
                style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#fff" }}
              >
                30 Minuten reichen für eine Einordnung.
              </h2>
            </div>
            <ContactStrip variant="onInk" align="start" showLabel={false} />
          </div>
        </div>
      </section>
    </main>
  );
}
