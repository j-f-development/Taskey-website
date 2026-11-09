import type { HTMLAttributes, ReactNode } from "react";

type Surface = "canvas" | "soft" | "mid" | "noir" | "noir-elev";
type Rhythm = "sm" | "md" | "lg";
type Width = "narrow" | "wide" | "full";

interface AppleSectionProps extends HTMLAttributes<HTMLElement> {
  surface?: Surface;
  rhythm?: Rhythm;
  width?: Width;
  as?: "section" | "div" | "article" | "header" | "footer";
  children: ReactNode;
  hairlineTop?: boolean;
  hairlineBottom?: boolean;
}

const surfaceClass: Record<Surface, string> = {
  canvas: "apl-surface-canvas",
  soft: "apl-surface-soft",
  mid: "apl-surface-mid",
  noir: "apl-surface-noir apl-on-noir",
  "noir-elev": "apl-surface-noir-elev apl-on-noir",
};

const rhythmClass: Record<Rhythm, string> = {
  sm: "apl-section-sm",
  md: "apl-section",
  lg: "apl-section-lg",
};

const widthClass: Record<Width, string> = {
  narrow: "apl-container",
  wide: "apl-container-wide",
  full: "apl-container-full",
};

export function AppleSection({
  surface = "canvas",
  rhythm = "md",
  width = "narrow",
  as: Tag = "section",
  hairlineTop,
  hairlineBottom,
  className = "",
  children,
  ...rest
}: AppleSectionProps) {
  const outer = [
    surfaceClass[surface],
    rhythmClass[rhythm],
    hairlineTop ? "apl-hairline-top" : "",
    hairlineBottom ? "apl-hairline-bottom" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={outer} {...rest}>
      <div className={widthClass[width]}>{children}</div>
    </Tag>
  );
}
