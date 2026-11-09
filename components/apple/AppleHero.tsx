import type { ReactNode } from "react";

interface AppleHeroProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  visual?: ReactNode;
  tone?: "light" | "noir";
  align?: "center" | "start";
}

export function AppleHero({
  eyebrow,
  headline,
  lede,
  actions,
  visual,
  tone = "light",
  align = "center",
}: AppleHeroProps) {
  const surface = tone === "noir" ? "apl-surface-noir apl-on-noir" : "apl-surface-canvas";
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section className={`${surface} apl-section-sm`}>
      <div className={`apl-container-wide flex flex-col ${alignCls}`}>
        {eyebrow && (
          <div className="apl-eyebrow mb-3">{eyebrow}</div>
        )}
        <h1 className="apl-display apl-display-xl max-w-[18ch]">
          {headline}
        </h1>
        {lede && (
          <p className="apl-lede mt-5 max-w-[42ch]">{lede}</p>
        )}
        {actions && (
          <div className={`mt-7 flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}>
            {actions}
          </div>
        )}
        {visual && <div className="apl-stage w-full">{visual}</div>}
      </div>
    </section>
  );
}
