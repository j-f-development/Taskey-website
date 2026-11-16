import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ButtonArrow, buttonClass } from "@/components/ui/Button";

export const SIGNUP_URL = "https://signup.taskeyapp.com";

type Size = "sm" | "md" | "lg";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  href?: string;
  size?: Size;
  label?: ReactNode;
  utm?: string;
};


function withUtm(url: string, utm?: string): string {
  if (!utm) return url;
  try {
    const u = new URL(url);
    u.searchParams.set("utm_source", "web");
    u.searchParams.set("utm_medium", "cta");
    u.searchParams.set("utm_campaign", utm);
    return u.toString();
  } catch {
    return url;
  }
}

/** Primär-Button des Button-Systems (components/ui/Button.tsx). `size` bleibt nur aus Kompatibilität:
    alle Primär-Buttons haben dieselbe Größe wie der Button oben rechts in der Navigation. */
export default function SignupButton({
  href = SIGNUP_URL,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  size = "md",
  label = "Kostenlosen Account erstellen",
  utm,
  className,
  ...rest
}: Props) {
  const final = withUtm(href, utm);
  const classes = buttonClass({ variant: "primary", className });
  return (
    <a href={final} className={classes} {...rest}>
      <span>{label}</span>
      <ButtonArrow />
    </a>
  );
}
