import type { ReactNode } from "react";

interface AppleFeatureItem {
  icon?: ReactNode;
  title: ReactNode;
  copy: ReactNode;
}

interface AppleFeatureRowProps {
  items: AppleFeatureItem[];
  columns?: 2 | 3 | 4;
  tone?: "light" | "noir";
}

export function AppleFeatureRow({ items, columns = 3, tone = "light" }: AppleFeatureRowProps) {
  const grid = columns === 2 ? "apl-duo" : columns === 4 ? "apl-quad" : "apl-triple";
  const divider = tone === "noir" ? "border-white/10" : "border-black/10";
  const titleCls = tone === "noir" ? "text-white" : "text-[color:var(--apl-ink)]";
  const copyCls = tone === "noir" ? "text-[#a1a1a6]" : "text-[color:var(--apl-ink-muted)]";

  return (
    <div className={grid}>
      {items.map((it, i) => (
        <div
          key={i}
          className={`pt-6 ${i > 0 ? `md:border-l ${divider} md:pl-6` : ""} flex flex-col gap-2`}
        >
          {it.icon && <div className="mb-1">{it.icon}</div>}
          <h4 className={`apl-headline ${titleCls}`} style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)" }}>
            {it.title}
          </h4>
          <p className={`apl-body ${copyCls}`}>{it.copy}</p>
        </div>
      ))}
    </div>
  );
}
