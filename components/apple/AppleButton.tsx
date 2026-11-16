import type { ComponentProps, ReactNode } from "react";
import Button, { type ButtonTone } from "@/components/ui/Button";

/**
 * Alte API, neues Aussehen: leitet an das einheitliche Button-System weiter (components/ui/Button.tsx).
 * primary → Primär (mit Pfeil), secondary/ghost → Sekundär (Outline). `size` hat keine Wirkung mehr.
 */
type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  tone?: ButtonTone;
  children: ReactNode;
  className?: string;
}

interface LinkProps extends BaseProps, Omit<ComponentProps<"a">, "children" | "className" | "href"> {
  href: string;
}

interface ButtonProps extends BaseProps, Omit<ComponentProps<"button">, "children" | "className"> {
  href?: undefined;
}

export function AppleButton(props: LinkProps | ButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant = "primary", size: _s, ...rest } = props;
  const v = variant === "primary" ? "primary" : "secondary";
  if (typeof rest.href === "string") return <Button {...(rest as LinkProps)} variant={v} />;
  return <Button {...(rest as ButtonProps)} variant={v} />;
}
