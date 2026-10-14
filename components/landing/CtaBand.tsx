import SignupButton from "@/components/landing/SignupButton";
import { CONTACT } from "@/lib/contact";

type Props = {
  eyebrow?: string;
  headline: string;
  body?: string;
  signupLabel?: string;
  callLabel?: string;
  callHref?: string;
  utm?: string;
  tone?: "ink" | "canvas" | "tinted";
};

function toneStyles(tone: Props["tone"]) {
  if (tone === "ink") {
    return {
      background: "var(--tkc-canvas-dark)",
      color: "#fff",
      eyebrow: "rgba(255,255,255,0.6)",
      body: "rgba(238,241,245,0.85)",
      secondary: "tk-cta-secondary tk-cta-secondary--onink",
    };
  }
  if (tone === "tinted") {
    return {
      background: "var(--tkc-canvas-tinted)",
      color: "var(--tkc-ink)",
      eyebrow: "var(--tkc-ink-muted)",
      body: "var(--tkc-ink-soft)",
      secondary: "tk-cta-secondary",
    };
  }
  return {
    background: "var(--tkc-canvas)",
    color: "var(--tkc-ink)",
    eyebrow: "var(--tkc-ink-muted)",
    body: "var(--tkc-ink-soft)",
    secondary: "tk-cta-secondary",
  };
}

export default function CtaBand({
  eyebrow,
  headline,
  body,
  signupLabel = "Kostenlosen Account erstellen",
  callLabel = "Erstgespräch buchen",
  callHref = CONTACT.calendlyUrl,
  utm = "cta_band",
  tone = "ink",
}: Props) {
  const t = toneStyles(tone);
  const external = /^https?:\/\//.test(callHref);
  return (
    <section
      className="tkc-section-sm"
      style={{ background: t.background, color: t.color }}
    >
      <div className="tkc-container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-center">
          <div>
            {eyebrow ? (
              <div
                className="tkc-mono"
                style={{
                  color: t.eyebrow,
                  fontSize: "0.72rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                {eyebrow}
              </div>
            ) : null}
            <h2
              className="tkc-headline mt-3"
              style={{
                fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                color: t.color,
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
                maxWidth: "22ch",
              }}
            >
              {headline}
            </h2>
            {body ? (
              <p
                className="mt-4"
                style={{
                  color: t.body,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  maxWidth: "52ch",
                }}
              >
                {body}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <SignupButton size="lg" label={signupLabel} utm={utm} />
            <a
              href={callHref}
              className={t.secondary}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              {callLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
