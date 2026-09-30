import Link from "next/link";

export default function ClosingCtaCorporate() {
  return (
    <section
      className="tkc-section-sm"
      style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}
    >
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-8">
          <div className="max-w-[720px]">
            <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>
              Ein Objekt genügt für den Anfang
            </div>
            <h2
              className="tkc-headline mt-4"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: "#ffffff" }}
            >
              Starten Sie mit einem Betrieb.<br />
              Skalieren Sie, wenn es passt.
            </h2>
            <p className="tkc-lead mt-5" style={{ color: "rgba(238,241,245,0.72)" }}>
              Kostenloser Account, kein Kreditkarten-Zwang. Wenn Ihr Setup groß
              genug ist, sprechen wir über Enterprise-Rollout, SSO und
              Systemanbindung.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="https://signup.taskeyapp.com"
              className="tkc-btn tkc-btn-onink"
            >
              Kostenlos starten
            </Link>
            <Link href="/enterprise#kontakt" className="tkc-btn tkc-btn-onink-ghost">
              Enterprise-Gespräch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
