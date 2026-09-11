import { createElement } from "react";
import type { CSSProperties, ElementType, ReactNode } from "react";

type Material = "light" | "heavy" | "dark" | "nav";

const materialClass: Record<Material, string> = {
  light: "tk-glass",
  heavy: "tk-glass-heavy",
  dark: "tk-glass-dark",
  nav: "tk-glass-nav",
};

type Props = {
  as?: ElementType;
  material?: Material;
  radius?: "chip" | "card" | "panel" | "shell" | "none";
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
};

const radiusVar: Record<Exclude<Props["radius"] & string, "none">, string> = {
  chip: "var(--tk-radius-chip)",
  card: "var(--tk-radius-card)",
  panel: "var(--tk-radius-panel)",
  shell: "var(--tk-radius-shell)",
};

/**
 * Translucent material surface. Corners default to the "panel" radius.
 * Pass `material="dark"` when placed over bright media.
 */
export default function GlassSurface({
  as: Tag = "div",
  material = "light",
  radius = "panel",
  className = "",
  style,
  children,
}: Props) {
  const composedStyle: CSSProperties = {
    borderRadius: radius === "none" ? undefined : radiusVar[radius],
    ...style,
  };

  return createElement(
    Tag,
    { className: `${materialClass[material]} ${className}`.trim(), style: composedStyle },
    children,
  );
}
