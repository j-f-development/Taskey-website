import type { ComponentPropsWithoutRef, ReactNode } from "react";
import NextLink from "next/link";
import Link from "@/components/LocaleLink";

/**
 * Einheitliches Button-System der Website (FIXES-2, Punkt 1).
 *
 * - primary:   wie „Kostenlosen Account erstellen“ oben rechts in der Navigation, immer mit Pfeil.
 * - secondary: gleiche Höhe, Radius und Schrift, aber Outline. Ohne Pfeil.
 * - tone="dark": für dunkle Hintergründe (Sekundär mit weißem Rahmen und weißer Schrift).
 *
 * Mit `href` wird ein Link gerendert (interne Pfade über LocaleLink, mailto:/tel:/http als <a>),
 * ohne `href` ein <button>. Aussehen: `.tk-btn` in app/globals.css.
 */

export type ButtonVariant = "primary" | "secondary";
export type ButtonTone = "light" | "dark";

type Common = {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  /** volle Breite (z. B. im mobilen Menü) */
  block?: boolean;
  className?: string;
  children: ReactNode;
};

type AsLink = Common & Omit<ComponentPropsWithoutRef<"a">, "className" | "children" | "href"> & { href: string };
type AsButton = Common & Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & { href?: undefined };

export function buttonClass({
  variant = "primary",
  tone = "light",
  block,
  className,
}: Pick<Common, "variant" | "tone" | "block" | "className">) {
  return [
    "tk-btn",
    variant === "primary" ? "tk-btn--primary" : "tk-btn--secondary",
    tone === "dark" ? "tk-btn--on-dark" : "",
    block ? "tk-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Der eine Pfeil für alle Primär-Buttons. */
export function ButtonArrow() {
  return (
    <svg
      className="tk-btn__arrow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

const isPlainHref = (href: string) => /^(https?:)?\/\//.test(href) || /^(mailto|tel):/.test(href);

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", tone, block, className, children } = props;
  const cls = buttonClass({ variant, tone, block, className });
  const content = (
    <>
      <span>{children}</span>
      {variant === "primary" && <ButtonArrow />}
    </>
  );

  if (typeof props.href === "string") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { variant: _v, tone: _t, block: _b, className: _c, children: _ch, href, ...rest } = props as AsLink;
    if (isPlainHref(href)) {
      return (
        <a href={href} className={cls} {...rest}>
          {content}
        </a>
      );
    }
    // Schon lokalisierte Pfade (/en/…, /fr/…) nicht ein zweites Mal mit Sprache versehen
    if (/^\/(en|fr)(\/|$)/.test(href)) {
      return (
        <NextLink href={href} className={cls} {...rest}>
          {content}
        </NextLink>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, tone: _t, block: _b, className: _c, children: _ch, type = "button", ...rest } = props as AsButton;
  return (
    <button type={type} className={cls} {...rest}>
      {content}
    </button>
  );
}
