export function BrandDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        color: "var(--brand-signal-blue)",
        fontFamily: "var(--ts-font-display)",
        fontWeight: 900,
        marginLeft: "0.05em",
        display: "inline-block",
      }}
    >
      .
    </span>
  );
}

/** Eckiger Signal-Blue-Punkt am Ende von Überschriften: direkt am letzten Buchstaben, auf der Grundlinie. */
export function BrandSquare() {
  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: "0.17em",
        height: "0.17em",
        background: "var(--brand-signal-blue)",
        marginLeft: "0.07em",
        verticalAlign: "baseline",
      }}
    />
  );
}

/** Hängt den Punkt an und hält ihn mit dem letzten Wort zusammen (nie allein in einer neuen Zeile). */
export function WithBrandDot({ children }: { children: string }) {
  const text = children.trimEnd();
  const i = text.lastIndexOf(" ");
  return (
    <>
      {text.slice(0, i + 1)}
      <span style={{ whiteSpace: "nowrap" }}>
        {text.slice(i + 1)}
        <BrandSquare />
      </span>
    </>
  );
}

export function TaskeyWord({
  size = "1em",
  tone = "ink",
}: {
  size?: string | number;
  tone?: "ink" | "white";
}) {
  return (
    <span
      style={{
        fontFamily: "var(--ts-font-display)",
        fontWeight: 900,
        letterSpacing: "-0.045em",
        fontSize: size,
        color: tone === "white" ? "var(--brand-white)" : "var(--brand-navy)",
        lineHeight: 1,
      }}
    >
      taskey<span style={{ color: "var(--brand-signal-blue)" }}>.</span>
    </span>
  );
}
