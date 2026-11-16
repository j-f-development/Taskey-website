"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { BrandDot, WithBrandDot } from "@/components/BrandDot";
import Button from "@/components/ui/Button";

type Tone = "canvas" | "elev" | "tinted" | "ink";
type Size = "sm" | "md" | "lg";
type Container = "default" | "wide" | "bleed";

const TONE_CLASS: Record<Tone, string> = {
  canvas: "",
  elev: "",
  tinted: "",
  ink: "ts-ink-surface",
};
const TONE_STYLE: Record<Tone, React.CSSProperties> = {
  canvas: { background: "var(--ts-canvas)", color: "var(--ts-ink)" },
  elev: { background: "var(--ts-canvas-elev)", color: "var(--ts-ink)" },
  tinted: { background: "var(--ts-canvas-tinted)", color: "var(--ts-ink)" },
  ink: {},
};
const SIZE_PY: Record<Size, string> = {
  sm: "var(--ts-section-py-sm)",
  md: "var(--ts-section-py)",
  lg: "var(--ts-section-py-lg)",
};
const CONTAINER_CLASS: Record<Container, string> = {
  default: "ts-container",
  wide: "ts-container-wide",
  bleed: "w-full",
};

export function ShareSection({
  id,
  tone = "canvas",
  size = "md",
  container = "default",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  size?: Size;
  container?: Container;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`ts-scope relative overflow-hidden scroll-mt-24 ${TONE_CLASS[tone]} ${className}`}
      style={{ ...TONE_STYLE[tone], paddingBlock: SIZE_PY[size] }}
    >
      <div className={CONTAINER_CLASS[container]}>{children}</div>
    </section>
  );
}

export function ShareEyebrow({
  children,
  tone = "ink",
}: {
  children: ReactNode;
  tone?: "ink" | "inv" | "sky";
}) {
  const color =
    tone === "inv"
      ? "rgba(255,255,255,0.6)"
      : tone === "sky"
      ? "var(--brand-sky)"
      : "var(--brand-signal-blue)";
  return (
    <span className="ts-eyebrow" style={{ color }}>
      {children}
    </span>
  );
}

export function ShareHeadline({
  level = 2,
  size = "lg",
  tone = "ink",
  dot = true,
  maxWidth,
  children,
}: {
  level?: 1 | 2 | 3;
  size?: "xl" | "lg" | "md" | "sm";
  tone?: "ink" | "inv";
  dot?: boolean;
  maxWidth?: string;
  children: ReactNode;
}) {
  const sizes: Record<string, string> = {
    xl: "clamp(2.6rem, 7.4vw, 5.6rem)",
    lg: "clamp(1.9rem, 4.2vw, 3.2rem)",
    md: "clamp(1.5rem, 3.4vw, 2.4rem)",
    sm: "clamp(1.2rem, 2.4vw, 1.8rem)",
  };
  const Tag = (`h${level}` as unknown) as "h1";
  const cls = size === "xl" || size === "lg" ? "ts-display" : "ts-headline";
  const color = tone === "inv" ? "var(--brand-white)" : "var(--ts-ink)";
  return (
    <Tag
      className={cls}
      style={{
        fontSize: sizes[size],
        color,
        maxWidth,
      }}
    >
      {dot && typeof children === "string" ? (
        <WithBrandDot>{children}</WithBrandDot>
      ) : (
        <>
          {children}
          {dot ? <BrandDot /> : null}
        </>
      )}
    </Tag>
  );
}

export function ShareLede({
  children,
  tone = "ink",
  maxWidth = "52ch",
}: {
  children: ReactNode;
  tone?: "ink" | "inv";
  maxWidth?: string;
}) {
  return (
    <p
      className="text-[1.05rem] md:text-[1.2rem] leading-[1.55]"
      style={{
        color: tone === "inv" ? "rgba(247,249,252,0.75)" : "var(--ts-ink-soft)",
        maxWidth,
      }}
    >
      {children}
    </p>
  );
}

export function ShareBody({
  children,
  tone = "ink",
  maxWidth = "64ch",
}: {
  children: ReactNode;
  tone?: "ink" | "inv";
  maxWidth?: string;
}) {
  return (
    <p
      className="text-[0.98rem] md:text-[1.05rem] leading-[1.6]"
      style={{
        color: tone === "inv" ? "rgba(247,249,252,0.72)" : "var(--ts-ink-muted)",
        maxWidth,
      }}
    >
      {children}
    </p>
  );
}

export function ShareChip({
  children,
  variant = "sky",
}: {
  children: ReactNode;
  variant?: "sky" | "neutral" | "inv";
}) {
  const cls =
    variant === "neutral"
      ? "ts-chip ts-chip-neutral"
      : variant === "inv"
      ? "ts-chip ts-chip-inv"
      : "ts-chip";
  return <span className={cls}>{children}</span>;
}

export function ShareButton({
  href,
  variant = "primary",
  size = "md",
  external,
  children,
}: {
  href: string;
  variant?: "primary" | "ghost" | "onink" | "onink-ghost";
  size?: "md" | "sm";
  external?: boolean;
  children: ReactNode;
}) {
  // Einheitliches Button-System: primary/onink → Primär, ghost → Sekundär, onink-ghost → Sekundär auf Dunkel.
  void size;
  const primary = variant === "primary" || variant === "onink";
  return (
    <Button
      href={href}
      variant={primary ? "primary" : "secondary"}
      tone={variant === "onink-ghost" ? "dark" : "light"}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Button>
  );
}

export function ShareBreadcrumbs({
  items,
  tone = "ink",
}: {
  items: { label: string; href?: string }[];
  tone?: "ink" | "inv";
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex flex-wrap items-center gap-2 text-[0.8rem]"
        style={{ color: tone === "inv" ? "rgba(255,255,255,0.6)" : "var(--ts-ink-muted)" }}
      >
        {items.map((b, i) => (
          <li key={`${b.label}-${i}`} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>›</span>}
            {b.href && i < items.length - 1 ? (
              <Link
                href={b.href}
                className="transition-colors hover:text-[color:var(--brand-signal-blue)]"
              >
                {b.label}
              </Link>
            ) : (
              <span style={{ color: tone === "inv" ? "var(--brand-sky)" : "var(--ts-ink)" }}>
                {b.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ShareCard({
  eyebrow,
  title,
  body,
  footer,
  tone = "elev",
  className = "",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  tone?: "elev" | "canvas" | "tinted";
  className?: string;
}) {
  const bg =
    tone === "canvas"
      ? "var(--ts-canvas)"
      : tone === "tinted"
      ? "var(--ts-canvas-tinted)"
      : "var(--ts-canvas-elev)";
  return (
    <div
      className={`ts-card ts-card-hover p-6 flex flex-col gap-3 ${className}`}
      style={{ background: bg }}
    >
      {eyebrow ? <ShareEyebrow>{eyebrow}</ShareEyebrow> : null}
      <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)" }}>
        {title}
      </h3>
      {body ? (
        <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
          {body}
        </p>
      ) : null}
      {footer ? <div className="mt-2">{footer}</div> : null}
    </div>
  );
}

const SHARE_FAQ_LOOK = {
  list: "flex flex-col divide-y overflow-hidden",
  listStyle: {
    border: "1px solid var(--ts-line)",
    borderRadius: "var(--ts-r-panel)",
    background: "var(--ts-canvas-elev)",
  },
  item: "relative",
  button:
    "faq-row w-full flex items-center justify-between gap-6 text-left px-6 md:px-8 py-5 md:py-6 cursor-pointer transition-colors hover:bg-[var(--ts-canvas-tinted)] aria-expanded:bg-[var(--ts-canvas-tinted)]",
  question: "ts-headline faq-question",
  questionStyle: { fontSize: "1.02rem", color: "var(--ts-ink)" },
  answer: "faq-answer px-6 md:px-8 pt-4 pb-6 md:pb-7 text-[0.98rem] leading-[1.65]",
  answerStyle: { color: "var(--ts-ink-muted)", maxWidth: "calc(70ch + 4rem)" },
  icon: "",
};

function ShareFaqIcon({ open }: { open: boolean }) {
  return (
    <span
      aria-hidden
      className="shrink-0 grid place-items-center h-8 w-8"
      style={{
        borderRadius: 999,
        border: open ? "1px solid var(--ts-ink)" : "1px solid var(--ts-line-strong)",
        background: open ? "var(--ts-ink)" : "#fff",
        color: open ? "#fff" : "var(--ts-ink-muted)",
        transform: open ? "rotate(45deg)" : "none",
        transition:
          "transform var(--motion-reveal) var(--ease-out), background-color var(--motion-press) var(--ease-out), border-color var(--motion-press) var(--ease-out), color var(--motion-press) var(--ease-out)",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
        <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}

/** FAQ im Share-Stil: ganze Zeile klickbar, Bewegung nach MOTION.md (siehe FaqAccordion). */
export function ShareAccordion({
  items,
}: {
  items: { q: ReactNode; a: ReactNode }[];
  idPrefix?: string;
}) {
  return (
    <FaqAccordion
      items={items}
      look={SHARE_FAQ_LOOK}
      single
      defaultOpen={[0]}
      renderIcon={(open) => <ShareFaqIcon open={open} />}
    />
  );
}

export function ShareStatementBand({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  secondaryExternal,
  primaryExternal,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  body?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  primaryExternal?: boolean;
  secondaryExternal?: boolean;
}) {
  return (
    <ShareSection tone="ink" size="md">
      <div className="max-w-3xl">
        {eyebrow ? <ShareEyebrow tone="sky">{eyebrow}</ShareEyebrow> : null}
        <div className="mt-3">
          <ShareHeadline tone="inv" size="lg" maxWidth="22ch">
            {title}
          </ShareHeadline>
        </div>
        {body ? (
          <div className="mt-5">
            <ShareLede tone="inv">{body}</ShareLede>
          </div>
        ) : null}
        {(primaryHref || secondaryHref) && (
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {primaryHref && primaryLabel ? (
              <ShareButton href={primaryHref} variant="onink" external={primaryExternal}>
                {primaryLabel}
              </ShareButton>
            ) : null}
            {secondaryHref && secondaryLabel ? (
              <ShareButton href={secondaryHref} variant="onink-ghost" external={secondaryExternal}>
                {secondaryLabel}
              </ShareButton>
            ) : null}
          </div>
        )}
      </div>
    </ShareSection>
  );
}

export function ShareFinalCta({
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  primaryExternal,
}: {
  title: ReactNode;
  body?: ReactNode;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  primaryExternal?: boolean;
}) {
  return (
    <ShareSection tone="canvas" size="md">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
        <ShareHeadline level={2} size="lg" maxWidth="22ch">
          {title}
        </ShareHeadline>
        {body ? (
          <div className="mt-2">
            <ShareLede maxWidth="46ch">{body}</ShareLede>
          </div>
        ) : null}
        <div className="mt-2 flex flex-col sm:flex-row gap-3">
          <ShareButton href={primaryHref} variant="primary" external={primaryExternal}>
            {primaryLabel}
          </ShareButton>
          {secondaryHref && secondaryLabel ? (
            <ShareButton href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </ShareButton>
          ) : null}
        </div>
      </div>
    </ShareSection>
  );
}

export function SharePageHero({
  breadcrumbs,
  eyebrow,
  title,
  accent,
  lead,
  primary,
  secondary,
  aside,
}: {
  breadcrumbs?: { label: string; href?: string }[];
  eyebrow?: string;
  title: ReactNode;
  accent?: ReactNode;
  lead?: ReactNode;
  primary?: { href: string; label: string; external?: boolean };
  secondary?: { href: string; label: string; external?: boolean };
  aside?: ReactNode;
}) {
  return (
    <section className="ts-scope relative overflow-hidden pt-8 md:pt-16 pb-14 md:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(85% 60% at 85% 0%, rgba(47, 91, 148, 0.08) 0%, transparent 55%), linear-gradient(180deg, #F7F9FC 0%, #ECF0F5 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[50vh] -z-10 opacity-30 ts-dot-grid pointer-events-none"
      />
      <div className="ts-container">
        {breadcrumbs ? <ShareBreadcrumbs items={breadcrumbs} /> : null}
        <div className="grid md:grid-cols-12 gap-x-10 gap-y-8 items-start">
          <div className={aside ? "md:col-span-8 flex flex-col gap-5" : "md:col-span-12 flex flex-col gap-5"}>
            {eyebrow ? <ShareEyebrow>{eyebrow}</ShareEyebrow> : null}
            <ShareHeadline level={1} size="xl" maxWidth="22ch">
              {title}
            </ShareHeadline>
            {accent ? (
              <p
                className="text-[1.1rem] md:text-[1.35rem] leading-[1.45] font-medium max-w-[48ch]"
                style={{ color: "var(--ts-ink)" }}
              >
                {accent}
              </p>
            ) : null}
            {lead ? <ShareBody maxWidth="64ch">{lead}</ShareBody> : null}
            {(primary || secondary) && (
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                {primary ? (
                  <ShareButton href={primary.href} variant="primary" external={primary.external}>
                    {primary.label}
                  </ShareButton>
                ) : null}
                {secondary ? (
                  <ShareButton href={secondary.href} variant="ghost" external={secondary.external}>
                    {secondary.label}
                  </ShareButton>
                ) : null}
              </div>
            )}
          </div>
          {aside ? <aside className="md:col-span-4 md:pt-2">{aside}</aside> : null}
        </div>
      </div>
    </section>
  );
}
