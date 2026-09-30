import Link from "next/link";

export type IntegrationStatus = "native" | "api" | "partner" | "planned";

const STATUS_META: Record<IntegrationStatus, { label: string; className: string }> = {
  native: { label: "native", className: "tkc-chip-status-live" },
  api: { label: "API", className: "tkc-chip-accent" },
  partner: { label: "Partner-Connector", className: "tkc-chip-status-beta" },
  planned: { label: "geplant", className: "tkc-chip-status-planned" },
};

export type FieldMapping = {
  taskey: string;
  target: string;
  direction: "→" | "←" | "↔";
  note?: string;
};

export type DataFlowStep = {
  no: string;
  title: string;
  detail: string;
};

export type UseCase = {
  headline: string;
  body: string;
};

export type FaqItem = { q: string; a: string };

type Props = {
  system: string;
  targetSystem: string;
  status: IntegrationStatus;
  positioning: string;
  problem: string;
  targetState: string;
  useCases: UseCase[];
  fieldMap: FieldMapping[];
  flow: DataFlowStep[];
  authMethod: string;
  syncFrequency: string;
  syncDirection: string;
  governance: string[];
  requestSample?: string;
  faq: FaqItem[];
};

export default function IntegrationPageLayout({
  system,
  targetSystem,
  status,
  positioning,
  problem,
  targetState,
  useCases,
  fieldMap,
  flow,
  authMethod,
  syncFrequency,
  syncDirection,
  governance,
  requestSample,
  faq,
}: Props) {
  const meta = STATUS_META[status];

  return (
    <main className="tkc-canvas">
      {/* Hero */}
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="flex items-center gap-2 flex-wrap">
            <Link href="/integrations" className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.78rem" }}>
              Integrations
            </Link>
            <span className="tkc-mono" style={{ color: "var(--tkc-ink-faint)" }}>/</span>
            <span className="tkc-mono" style={{ color: "var(--tkc-ink)", fontSize: "0.78rem" }}>
              {system}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <span className={`tkc-chip ${meta.className}`}>{meta.label}</span>
            <span className="tkc-chip">Kategorie: {targetSystem}</span>
          </div>

          <h1
            className="tkc-display mt-6"
            style={{ fontSize: "clamp(2.15rem, 4.5vw, 3.4rem)", color: "var(--tkc-ink)" }}
          >
            Taskey + {system}
          </h1>
          <p className="tkc-lead mt-5 max-w-[760px]">{positioning}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/enterprise#kontakt" className="tkc-btn tkc-btn-primary">
              {system}-Integration prüfen
            </Link>
            <Link href="/developers" className="tkc-btn tkc-btn-ghost">
              API-Referenz
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & target state */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="tkc-panel">
              <div className="tkc-eyebrow">Ausgangssituation</div>
              <p className="mt-3" style={{ fontSize: "0.98rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                {problem}
              </p>
            </div>
            <div className="tkc-panel">
              <div className="tkc-eyebrow">Zielbild</div>
              <p className="mt-3" style={{ fontSize: "0.98rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                {targetState}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Use Cases</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "var(--tkc-ink)" }}>
            Konkrete Prozesse, keine generischen Zusagen.
          </h2>

          <div
            className="mt-10 rounded-[8px]"
            style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}
          >
            {useCases.map((uc, idx) => (
              <div
                key={uc.headline}
                className="p-7"
                style={{
                  background: "var(--tkc-canvas-elev)",
                  borderBottom: idx < useCases.length - 1 ? "1px solid var(--tkc-line)" : undefined,
                }}
              >
                <div className="flex items-start gap-4">
                  <span className="tkc-index">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 style={{ fontSize: "1.02rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                      {uc.headline}
                    </h3>
                    <p className="mt-2" style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}>
                      {uc.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data flow */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>Datenfluss</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#fff" }}>
            Vom Feld über Taskey nach {system}.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {flow.map((step) => (
              <div key={step.no} className="tkc-card-onink" style={{ padding: "1.4rem" }}>
                <div className="tkc-mono" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                  {step.no}
                </div>
                <h3 className="mt-3" style={{ fontSize: "0.98rem", fontWeight: 600, color: "#fff" }}>
                  {step.title}
                </h3>
                <p className="mt-2" style={{ fontSize: "0.86rem", lineHeight: 1.6, color: "rgba(238,241,245,0.75)" }}>
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Field mapping */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Field Mapping</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "var(--tkc-ink)" }}>
            Welche Felder wandern in welche Richtung.
          </h2>

          <div className="mt-8 rounded-[8px]" style={{ border: "1px solid var(--tkc-line-strong)", overflow: "hidden" }}>
            <table className="tkc-table">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}>Taskey</th>
                  <th style={{ width: "10%" }}>Richtung</th>
                  <th style={{ width: "34%" }}>{system}</th>
                  <th>Anmerkung</th>
                </tr>
              </thead>
              <tbody>
                {fieldMap.map((row, idx) => (
                  <tr key={idx}>
                    <td className="tkc-mono" style={{ color: "var(--tkc-ink)" }}>
                      {row.taskey}
                    </td>
                    <td className="tkc-mono" style={{ color: "var(--tkc-ink-muted)" }}>
                      {row.direction}
                    </td>
                    <td className="tkc-mono" style={{ color: "var(--tkc-ink)" }}>
                      {row.target}
                    </td>
                    <td style={{ color: "var(--tkc-ink-soft)", fontSize: "0.88rem" }}>
                      {row.note ?? ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical + governance */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="tkc-panel">
              <div className="tkc-eyebrow">Technische Grundlage</div>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Authentifizierung
                  </dt>
                  <dd className="mt-1" style={{ fontSize: "0.92rem", color: "var(--tkc-ink)" }}>{authMethod}</dd>
                </div>
                <div>
                  <dt className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Frequenz
                  </dt>
                  <dd className="mt-1" style={{ fontSize: "0.92rem", color: "var(--tkc-ink)" }}>{syncFrequency}</dd>
                </div>
                <div>
                  <dt className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Richtung
                  </dt>
                  <dd className="mt-1" style={{ fontSize: "0.92rem", color: "var(--tkc-ink)" }}>{syncDirection}</dd>
                </div>
              </dl>
            </div>

            <div className="tkc-panel">
              <div className="tkc-eyebrow">Governance</div>
              <ul className="mt-4 space-y-2.5">
                {governance.map((g) => (
                  <li key={g} className="flex gap-2.5" style={{ fontSize: "0.9rem", color: "var(--tkc-ink-soft)", lineHeight: 1.55 }}>
                    <span className="tkc-mono" style={{ color: "var(--tkc-ink-faint)", fontSize: "0.72rem", marginTop: "0.15rem" }}>·</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {requestSample ? (
              <div className="lg:col-span-1">
                <div className="tkc-mono mb-2" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Beispiel · API-Payload
                </div>
                <pre className="tkc-code" style={{ margin: 0 }}>{requestSample}</pre>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="tkc-section-sm" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container">
          <div className="tkc-eyebrow">Häufige Fragen</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)", color: "var(--tkc-ink)" }}>
            {system}-spezifisch. Konkret.
          </h2>

          <div className="mt-8">
            {faq.map((item, idx) => (
              <details
                key={idx}
                className="group"
                style={{ borderBottom: "1px solid var(--tkc-line)" }}
              >
                <summary
                  className="flex items-start justify-between gap-6 py-5 cursor-pointer list-none"
                  style={{ fontSize: "0.98rem", fontWeight: 500, color: "var(--tkc-ink)" }}
                >
                  <span>{item.q}</span>
                  <span className="tkc-mono flex-shrink-0" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.9rem" }}>
                    +
                  </span>
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
              <h2
                className="tkc-headline mt-3"
                style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "#fff" }}
              >
                {system}-Anbindung mit Ihrem Setup durchgehen.
              </h2>
              <p className="tkc-lead mt-4" style={{ color: "rgba(238,241,245,0.72)" }}>
                Wir gehen die tatsächliche {system}-Konfiguration bei Ihnen durch und mappen konkrete Objekte,
                Felder und Freigaben. 30 Minuten mit einem Solution Engineer.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/enterprise#kontakt" className="tkc-btn tkc-btn-onink">
                Integrationsgespräch anfragen
              </Link>
              <Link href="/integrations" className="tkc-btn tkc-btn-onink-ghost">
                Weitere Integrationen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
