import type { CSSProperties, ReactNode } from "react";
import {
  DIRECTION_LABEL_DE,
  FREQUENCY_LABEL_DE,
  STATUS_LABEL_DE,
  type IntegrationRecord,
} from "@/lib/landing/integrationStatus";

/* ─────────────────────────────────────────────────────────────────────────
 * Shared design tokens for landing pages (kept local to this file so pages
 * cannot silently drift). Editorial rhythm, corporate discipline.
 * ────────────────────────────────────────────────────────────────────── */

export const LP = {
  ink: "#1d1d1f",
  inkSoft: "#424245",
  accent: "#0071e3",
  accentSoft: "#2997ff",
  border: "rgba(0,0,0,0.1)",
  borderDark: "rgba(255,255,255,0.12)",
  muted: "#6e6e73",
  mutedDark: "rgba(210,210,215,0.9)",
  canvas: "#ffffff",
  canvasElev: "#f5f5f7",
  hairline: "rgba(0,0,0,0.06)",
};

/* ─── Frame / Section ─────────────────────────────────────────────────── */

type LandingSectionProps = {
  id?: string;
  tone?: "canvas" | "elev" | "ink";
  eyebrow?: string;
  number?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
  container?: "narrow" | "default" | "wide";
  style?: CSSProperties;
};

export function LandingSection({
  id,
  tone = "canvas",
  eyebrow,
  number,
  title,
  lead,
  children,
  container = "default",
  style,
}: LandingSectionProps) {
  const background =
    tone === "ink" ? LP.ink : tone === "elev" ? LP.canvasElev : LP.canvas;
  const foreground = tone === "ink" ? "#F8FAFC" : LP.ink;
  const mutedText = tone === "ink" ? LP.mutedDark : LP.muted;
  const maxWidth =
    container === "narrow" ? "820px" : container === "wide" ? "1360px" : "1200px";

  return (
    <section
      id={id}
      style={{
        background,
        color: foreground,
        padding: "clamp(48px, 7vw, 96px) 24px",
        borderTop: tone === "elev" ? `1px solid ${LP.border}` : undefined,
        ...style,
      }}
    >
      <div style={{ maxWidth, margin: "0 auto" }}>
        {(eyebrow || number || title || lead) && (
          <header style={{ marginBottom: "clamp(28px, 4vw, 56px)" }}>
            {(eyebrow || number) && (
              <div
                className="flex items-center gap-4"
                style={{ marginBottom: "18px" }}
              >
                {number && (
                  <span
                    aria-hidden
                    style={{
                      fontSize: "12px",
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "0.18em",
                      color:
                        tone === "ink"
                          ? "rgba(148,163,184,0.75)"
                          : "rgba(15,23,42,0.45)",
                      fontWeight: 700,
                    }}
                  >
                    {number}
                  </span>
                )}
                {eyebrow && (
                  <span
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color:
                        tone === "ink"
                          ? "rgba(148,163,184,0.9)"
                          : "rgba(15,23,42,0.55)",
                      fontWeight: 700,
                    }}
                  >
                    {eyebrow}
                  </span>
                )}
              </div>
            )}
            {title && (
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.75rem)",
                  lineHeight: 1.12,
                  letterSpacing: "-0.015em",
                  fontWeight: 600,
                  maxWidth: "26ch",
                  color: foreground,
                }}
              >
                {title}
              </h2>
            )}
            {lead && (
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
                  lineHeight: 1.65,
                  color: mutedText,
                  maxWidth: "62ch",
                }}
              >
                {lead}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

/* ─── Landing Hero ────────────────────────────────────────────────────── */

type LandingHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  meta?: { label: string; value: string }[];
  visual?: ReactNode;
};

export function LandingHero({
  eyebrow,
  title,
  subtitle,
  lead,
  primaryCta,
  secondaryCta,
  meta,
  visual,
}: LandingHeroProps) {
  return (
    <section
      style={{
        background: LP.canvas,
        color: LP.ink,
        padding: "clamp(40px, 6vw, 72px) 24px clamp(40px, 7vw, 80px)",
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div
              style={{
                fontSize: "13px",
                letterSpacing: "0.01em",
                color: LP.accent,
                fontWeight: 500,
              }}
            >
              {eyebrow}
            </div>
            <h1
              style={{
                marginTop: "12px",
                fontSize: "clamp(2.25rem, 4.8vw, 4rem)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.018em",
                color: LP.ink,
                maxWidth: "22ch",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                marginTop: "20px",
                fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)",
                lineHeight: 1.4,
                color: LP.inkSoft,
                maxWidth: "48ch",
                fontWeight: 400,
              }}
            >
              {subtitle}
            </p>
            <p
              style={{
                marginTop: "16px",
                fontSize: "1rem",
                lineHeight: 1.6,
                color: LP.muted,
                maxWidth: "62ch",
              }}
            >
              {lead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={primaryCta.href} className="apl-btn apl-btn-primary apl-btn-lg">
                {primaryCta.label}
              </a>
              {secondaryCta && (
                <a href={secondaryCta.href} className="apl-btn apl-btn-secondary apl-btn-lg">
                  {secondaryCta.label}
                </a>
              )}
            </div>

            {meta && meta.length > 0 && (
              <dl
                className="mt-10 pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6"
                style={{ borderTop: `1px solid ${LP.hairline}` }}
              >
                {meta.map((m) => (
                  <div key={m.label}>
                    <dt
                      style={{
                        fontSize: "12px",
                        color: LP.muted,
                        fontWeight: 500,
                      }}
                    >
                      {m.label}
                    </dt>
                    <dd
                      style={{
                        marginTop: "6px",
                        fontSize: "15px",
                        color: LP.ink,
                        fontWeight: 500,
                      }}
                    >
                      {m.value}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className="lg:col-span-5">
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Integration Status Badge ────────────────────────────────────────── */

export function IntegrationStatusCard({
  record,
}: {
  record: IntegrationRecord;
}) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(148,163,184,0.20)",
        borderRadius: "18px",
        padding: "20px 22px",
        color: "#F8FAFC",
      }}
    >
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "rgba(148,163,184,0.85)",
          fontWeight: 700,
        }}
      >
        Integrationsstatus
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3">
        <StatusLine label="Art" value={STATUS_LABEL_DE[record.status]} />
        <StatusLine label="Richtung" value={DIRECTION_LABEL_DE[record.direction]} />
        <StatusLine label="Frequenz" value={FREQUENCY_LABEL_DE[record.frequency]} />
        {record.authentication && (
          <StatusLine label="Authentifizierung" value={record.authentication} />
        )}
        {record.masterSystem && (
          <StatusLine label="Führendes System" value={record.masterSystem} />
        )}
        <StatusLine label="Zuletzt geprüft" value={record.lastReviewed} />
      </div>
    </div>
  );
}

function StatusLine({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex items-baseline justify-between gap-4"
      style={{ borderTop: "1px solid rgba(148,163,184,0.12)", paddingTop: "10px" }}
    >
      <span
        style={{
          fontSize: "12px",
          color: "rgba(148,163,184,0.85)",
          letterSpacing: "0.06em",
        }}
      >
        {label}
      </span>
      <span style={{ fontSize: "13px", color: "#F1F5F9", textAlign: "right" }}>
        {value}
      </span>
    </div>
  );
}

/* ─── Data Mapping Table ──────────────────────────────────────────────── */

export type MappingRow = {
  object: string;
  master: string;
  direction: string;
  purpose: string;
};

export function DataMappingTable({
  caption,
  rows,
}: {
  caption?: string;
  rows: MappingRow[];
}) {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: `1px solid ${LP.border}`,
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {caption && (
          <caption
            style={{
              textAlign: "left",
              padding: "16px 20px",
              fontSize: "11px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: LP.muted,
              fontWeight: 700,
              borderBottom: `1px solid ${LP.border}`,
              background: LP.canvasElev,
            }}
          >
            {caption}
          </caption>
        )}
        <thead>
          <tr style={{ background: LP.canvasElev }}>
            <Th>Datenobjekt</Th>
            <Th>Führendes System</Th>
            <Th>Richtung</Th>
            <Th>Verwendung in Taskey</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.object} style={{ borderTop: `1px solid ${LP.hairline}` }}>
              <Td strong>{r.object}</Td>
              <Td>{r.master}</Td>
              <Td mono>{r.direction}</Td>
              <Td>{r.purpose}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: { children: ReactNode }) {
  return (
    <th
      style={{
        textAlign: "left",
        padding: "14px 20px",
        fontSize: "11px",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color: LP.muted,
        fontWeight: 700,
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  strong,
  mono,
}: {
  children: ReactNode;
  strong?: boolean;
  mono?: boolean;
}) {
  return (
    <td
      style={{
        padding: "14px 20px",
        fontSize: "14px",
        color: LP.ink,
        fontWeight: strong ? 600 : 400,
        fontFamily: mono ? "ui-monospace, SFMono-Regular, Menlo, monospace" : undefined,
        verticalAlign: "top",
        lineHeight: 1.55,
      }}
    >
      {children}
    </td>
  );
}

/* ─── System Architecture Diagram (ASCII-inspired grid) ───────────────── */

export type ArchNode = {
  label: string;
  role?: string;
  tone?: "primary" | "muted";
};

export function SystemArchitecture({
  master,
  operations,
  targets,
  masterLabel = "Führende Stammsysteme",
  operationsLabel = "Operative Schicht",
  targetsLabel = "Weiterverarbeitende Systeme",
}: {
  master: ArchNode[];
  operations: ArchNode;
  targets: ArchNode[];
  masterLabel?: string;
  operationsLabel?: string;
  targetsLabel?: string;
}) {
  return (
    <div
      style={{
        borderRadius: "22px",
        border: `1px solid ${LP.border}`,
        background: "#fff",
        padding: "clamp(28px, 4vw, 48px)",
      }}
    >
      <ArchRow label={masterLabel} nodes={master} />
      <ArchArrow />
      <ArchRow label={operationsLabel} nodes={[operations]} highlight />
      <ArchArrow />
      <ArchRow label={targetsLabel} nodes={targets} />
    </div>
  );
}

function ArchRow({
  label,
  nodes,
  highlight,
}: {
  label: string;
  nodes: ArchNode[];
  highlight?: boolean;
}) {
  return (
    <div>
      <div
        style={{
          fontSize: "10px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "rgba(15,23,42,0.5)",
          fontWeight: 700,
          marginBottom: "12px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(1, nodes.length)}, minmax(0, 1fr))`,
          gap: "14px",
        }}
      >
        {nodes.map((n) => (
          <div
            key={n.label + (n.role ?? "")}
            style={{
              border: highlight
                ? `1px solid ${LP.accent}`
                : `1px solid ${LP.border}`,
              background: highlight
                ? "linear-gradient(120deg, rgba(3,105,161,0.06), rgba(3,105,161,0.02))"
                : LP.canvasElev,
              borderRadius: "14px",
              padding: "18px 20px",
              minHeight: "84px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: highlight ? LP.accent : "rgba(15,23,42,0.5)",
                fontWeight: 700,
              }}
            >
              {n.role ?? " "}
            </div>
            <div
              style={{
                marginTop: "6px",
                fontSize: "15px",
                fontWeight: 600,
                color: LP.ink,
              }}
            >
              {n.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchArrow() {
  return (
    <div
      aria-hidden
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "10px 0",
      }}
    >
      <div
        style={{
          width: "1px",
          height: "28px",
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.05) 100%)",
        }}
      />
    </div>
  );
}

/* ─── Process Flow (numbered) ─────────────────────────────────────────── */

export type ProcessStep = { title: string; body: string; actor?: string };

export function ProcessFlow({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {steps.map((s, i) => (
        <li
          key={s.title}
          style={{
            display: "grid",
            gridTemplateColumns: "56px 1fr",
            gap: "22px",
            padding: "22px 0",
            borderTop: i === 0 ? undefined : `1px solid ${LP.hairline}`,
          }}
        >
          <div
            style={{
              fontVariantNumeric: "tabular-nums",
              fontSize: "22px",
              fontWeight: 600,
              color: LP.accent,
              letterSpacing: "-0.02em",
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
          <div>
            {s.actor && (
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(15,23,42,0.5)",
                  fontWeight: 700,
                  marginBottom: "6px",
                }}
              >
                {s.actor}
              </div>
            )}
            <div style={{ fontSize: "18px", fontWeight: 600, color: LP.ink, lineHeight: 1.3 }}>
              {s.title}
            </div>
            <p style={{ marginTop: "8px", fontSize: "15px", color: LP.muted, lineHeight: 1.65 }}>
              {s.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ─── Exception Table ─────────────────────────────────────────────────── */

export type ExceptionRow = {
  situation: string;
  detection: string;
  handling: string;
};

export function ExceptionTable({ rows }: { rows: ExceptionRow[] }) {
  return (
    <div
      style={{
        borderRadius: "18px",
        border: `1px solid ${LP.border}`,
        overflow: "hidden",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: LP.canvasElev }}>
            <Th>Situation</Th>
            <Th>Erkennung</Th>
            <Th>Behandlung</Th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.situation} style={{ borderTop: `1px solid ${LP.hairline}` }}>
              <Td strong>{r.situation}</Td>
              <Td>{r.detection}</Td>
              <Td>{r.handling}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── FAQ (answer-first) ──────────────────────────────────────────────── */

export type FaqItem = { q: string; a: string };

export function LandingFAQ({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item, i) => (
        <details
          key={item.q}
          style={{
            borderTop: i === 0 ? `1px solid ${LP.border}` : undefined,
            borderBottom: `1px solid ${LP.border}`,
            padding: "20px 0",
          }}
        >
          <summary
            style={{
              cursor: "pointer",
              fontSize: "17px",
              fontWeight: 600,
              color: LP.ink,
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <span>{item.q}</span>
            <span aria-hidden style={{ color: LP.accent, fontWeight: 500 }}>+</span>
          </summary>
          <p
            style={{
              marginTop: "12px",
              fontSize: "15px",
              lineHeight: 1.7,
              color: LP.muted,
              maxWidth: "70ch",
            }}
          >
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}

/* ─── Related Content ─────────────────────────────────────────────────── */

export type RelatedItem = { title: string; href: string; kind: string };

export function RelatedSolutions({
  eyebrow = "Weiterlesen",
  items,
}: {
  eyebrow?: string;
  items: RelatedItem[];
}) {
  return (
    <div>
      <div
        style={{
          fontSize: "11px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "rgba(15,23,42,0.55)",
          fontWeight: 700,
          marginBottom: "18px",
        }}
      >
        {eyebrow}
      </div>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "14px",
        }}
      >
        {items.map((it) => (
          <li key={it.href}>
            <a
              href={it.href}
              style={{
                display: "block",
                padding: "20px 22px",
                border: `1px solid ${LP.border}`,
                borderRadius: "16px",
                background: LP.canvasElev,
                color: LP.ink,
                textDecoration: "none",
                transition: "border-color 0.2s ease, background 0.2s ease",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: LP.accent,
                  fontWeight: 700,
                }}
              >
                {it.kind}
              </div>
              <div
                style={{
                  marginTop: "8px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: LP.ink,
                  lineHeight: 1.4,
                }}
              >
                {it.title} <span aria-hidden>→</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Definition List (Level 3 detail) ───────────────────────────────── */

export function DefinitionList({
  items,
}: {
  items: { term: string; def: string }[];
}) {
  return (
    <dl
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "14px",
        borderTop: `1px solid ${LP.border}`,
      }}
    >
      {items.map((it) => (
        <div
          key={it.term}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(140px, 220px) 1fr",
            gap: "24px",
            padding: "16px 0",
            borderBottom: `1px solid ${LP.hairline}`,
          }}
        >
          <dt style={{ fontWeight: 600, color: LP.ink, fontSize: "14px" }}>
            {it.term}
          </dt>
          <dd
            style={{
              color: LP.muted,
              fontSize: "14px",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {it.def}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ─── In-page sticky navigation ──────────────────────────────────────── */

export function StickyPageNav({
  items,
  label = "Auf dieser Seite",
}: {
  items: { id: string; label: string }[];
  label?: string;
}) {
  return (
    <nav
      aria-label={label}
      style={{
        background: "#fff",
        borderTop: `1px solid ${LP.border}`,
        borderBottom: `1px solid ${LP.border}`,
        position: "sticky",
        top: 0,
        zIndex: 20,
        backdropFilter: "saturate(150%) blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "10px 24px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: LP.muted,
            fontWeight: 700,
            flexShrink: 0,
            paddingRight: "8px",
            borderRight: `1px solid ${LP.border}`,
          }}
        >
          {label}
        </span>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            style={{
              fontSize: "13px",
              color: LP.ink,
              textDecoration: "none",
              padding: "6px 10px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
              fontWeight: 500,
            }}
          >
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
