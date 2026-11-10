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
