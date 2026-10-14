import type { AnchorHTMLAttributes, ReactNode } from "react";

export const SIGNUP_URL = "https://signup.taskeyapp.com";

type Size = "sm" | "md" | "lg";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> & {
  href?: string;
  size?: Size;
  label?: ReactNode;
  utm?: string;
};

function sizeClass(size: Size): string {
  if (size === "sm") return "tk-cta-signup tk-cta-signup--sm";
  if (size === "lg") return "tk-cta-signup tk-cta-signup--lg";
  return "tk-cta-signup";
}

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

export default function SignupButton({
  href = SIGNUP_URL,
  size = "md",
  label = "Kostenlosen Account erstellen",
  utm,
  className,
  ...rest
}: Props) {
  const final = withUtm(href, utm);
  const classes = [sizeClass(size), className].filter(Boolean).join(" ");
  return (
    <a href={final} className={classes} {...rest}>
      <span>{label}</span>
      <svg
        className="tk-cta-signup__arrow"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}
