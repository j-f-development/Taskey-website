import Link from "next/link";
import type { ReactNode } from "react";

type Tone = "canvas" | "soft" | "noir";
type Size = "md" | "lg" | "xl";

interface AppleTileProps {
  tone?: Tone;
  size?: Size;
  eyebrow?: ReactNode;
  title: ReactNode;
  copy?: ReactNode;
  cta?: { label: string; href: string } | ReactNode;
  visual?: ReactNode;
  className?: string;
  align?: "center" | "start";
}

const toneClass: Record<Tone, string> = {
  canvas: "apl-tile apl-tile-canvas",
  soft: "apl-tile",
  noir: "apl-tile apl-tile-noir apl-on-noir",
};

const sizeMin: Record<Size, string> = {
  md: "min-h-[320px]",
  lg: "min-h-[440px]",
  xl: "min-h-[560px]",
};

function isCtaObject(x: unknown): x is { label: string; href: string } {
  return !!x && typeof x === "object" && "href" in (x as any) && "label" in (x as any);
}

export function AppleTile({
  tone = "soft",
  size = "md",
  eyebrow,
  title,
  copy,
  cta,
  visual,
  className = "",
  align = "center",
}: AppleTileProps) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`${toneClass[tone]} ${sizeMin[size]} ${className} flex flex-col`}>
      <div className={`apl-tile-inner flex flex-col ${alignCls} w-full`}>
        {eyebrow && <div className="apl-eyebrow">{eyebrow}</div>}
        <h3 className="apl-display apl-display-md max-w-[22ch] mt-1">
          {title}
        </h3>
        {copy && <p className="apl-body mt-2 max-w-[38ch]">{copy}</p>}
        {cta && (
          <div className="mt-4">
            {isCtaObject(cta) ? (
              <Link href={cta.href} className="apl-link">
                {cta.label}
              </Link>
            ) : (
              cta
            )}
          </div>
        )}
      </div>
      {visual && <div className="mt-auto w-full">{visual}</div>}
    </div>
  );
}
