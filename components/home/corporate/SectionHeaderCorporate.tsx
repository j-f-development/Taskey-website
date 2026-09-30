type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  onInk?: boolean;
};

export default function SectionHeaderCorporate({
  eyebrow,
  title,
  subtitle,
  align = "left",
  onInk = false,
}: Props) {
  const eyebrowStyle = onInk ? { color: "rgba(255,255,255,0.55)" } : {};
  const titleStyle: React.CSSProperties = onInk
    ? { color: "#ffffff", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" }
    : { color: "var(--tkc-ink)", fontSize: "clamp(1.7rem, 3vw, 2.4rem)" };
  const subStyle: React.CSSProperties = onInk
    ? { color: "rgba(238,241,245,0.72)" }
    : {};

  return (
    <div
      className="tkc-section-header"
      style={{ textAlign: align, marginLeft: align === "center" ? "auto" : undefined, marginRight: align === "center" ? "auto" : undefined }}
    >
      {eyebrow ? (
        <div className="tkc-eyebrow" style={eyebrowStyle}>
          {eyebrow}
        </div>
      ) : null}
      <h2 className="tkc-headline mt-3" style={titleStyle}>
        {title}
      </h2>
      {subtitle ? (
        <p className="tkc-lead mt-4" style={subStyle}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
