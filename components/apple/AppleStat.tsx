import type { ReactNode } from "react";

interface Stat {
  value: ReactNode;
  label: ReactNode;
  foot?: ReactNode;
}

export function AppleStatRow({ stats, tone = "light" }: { stats: Stat[]; tone?: "light" | "noir" }) {
  const noir = tone === "noir";
  const valueCls = noir ? "text-white" : "text-[color:var(--apl-ink)]";
  const labelCls = noir ? "text-[#a1a1a6]" : "text-[color:var(--apl-ink-muted)]";
  return (
    <div className={`apl-${stats.length === 2 ? "duo" : stats.length === 4 ? "quad" : "triple"}`}>
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-start gap-1">
          <div
            className={`apl-display ${valueCls}`}
            style={{ fontSize: "clamp(2.25rem, 4vw, 3.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}
          >
            {s.value}
          </div>
          <div className={`apl-small ${labelCls}`}>{s.label}</div>
          {s.foot && <div className={`apl-caption ${labelCls}`}>{s.foot}</div>}
        </div>
      ))}
    </div>
  );
}
