import type { ReactNode } from "react";

interface AppleQuoteProps {
  quote: ReactNode;
  cite?: ReactNode;
  role?: ReactNode;
  tone?: "light" | "noir";
}

export function AppleQuote({ quote, cite, role, tone = "light" }: AppleQuoteProps) {
  const noir = tone === "noir";
  return (
    <figure className={`${noir ? "apl-on-noir" : ""} mx-auto max-w-[32ch] text-center`}>
      <blockquote
        className={`apl-display ${noir ? "text-white" : ""}`}
        style={{ fontSize: "clamp(1.75rem, 3.6vw, 3rem)", lineHeight: 1.08, letterSpacing: "-0.015em" }}
      >
        “{quote}”
      </blockquote>
      {(cite || role) && (
        <figcaption className={`apl-small mt-5 ${noir ? "text-[#a1a1a6]" : ""}`}>
          {cite}
          {cite && role ? " · " : ""}
          {role}
        </figcaption>
      )}
    </figure>
  );
}
