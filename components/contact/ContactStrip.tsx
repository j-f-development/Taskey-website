import { CONTACT } from "@/lib/contact";

type Props = {
  variant?: "onLight" | "onInk";
  align?: "start" | "center";
  showLabel?: boolean;
};

export default function ContactStrip({
  variant = "onLight",
  align = "start",
  showLabel = true,
}: Props) {
  const primary = variant === "onInk" ? "tkc-btn tkc-btn-onink" : "tkc-btn tkc-btn-primary";
  const ghost = variant === "onInk" ? "tkc-btn tkc-btn-onink-ghost" : "tkc-btn tkc-btn-ghost";
  const wa = "tkc-btn tkc-btn-whatsapp";

  const labelColor = variant === "onInk" ? "rgba(255,255,255,0.55)" : "var(--tkc-ink-muted)";

  return (
    <div
      className={`flex flex-col gap-3 ${align === "center" ? "items-center text-center" : "items-start"}`}
    >
      {showLabel ? (
        <span
          className="tkc-mono"
          style={{
            color: labelColor,
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Direkt sprechen
        </span>
      ) : null}
      <div className={`flex flex-wrap gap-2 ${align === "center" ? "justify-center" : ""}`}>
        <a href={CONTACT.calendlyUrl} target="_blank" rel="noopener noreferrer" className={primary}>
          <span aria-hidden style={{ display: "inline-flex", marginRight: "2px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </span>
          Termin buchen
        </a>
        <a href={`tel:${CONTACT.phoneTel}`} className={ghost}>
          <span aria-hidden style={{ display: "inline-flex", marginRight: "2px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </span>
          {CONTACT.phoneDisplay}
        </a>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className={wa}>
          <span aria-hidden style={{ display: "inline-flex", marginRight: "2px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.52 0 .2 5.32.2 11.86c0 2.09.55 4.14 1.6 5.94L.05 24l6.36-1.67a11.85 11.85 0 0 0 5.64 1.44h.01c6.53 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.4-8.43zM12.06 21.6h-.01a9.72 9.72 0 0 1-4.96-1.36l-.36-.21-3.77.99 1-3.68-.23-.38A9.7 9.7 0 0 1 2.35 11.86c0-5.35 4.36-9.7 9.71-9.7 2.59 0 5.02 1.01 6.85 2.84a9.63 9.63 0 0 1 2.84 6.86c0 5.35-4.35 9.74-9.69 9.74z" />
              <path d="M17.4 14.42c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.19.3-.76.96-.93 1.16-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.5.07-.76.37-.26.3-1 1-1 2.43 0 1.43 1.03 2.81 1.17 3.01.15.2 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.75-.72 2-1.4.25-.7.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
            </svg>
          </span>
          WhatsApp
        </a>
      </div>
      {showLabel ? (
        <span className="tkc-mono" style={{ color: labelColor, fontSize: "0.72rem" }}>
          info@taskeyapp.com · werktags &lt; 24h
        </span>
      ) : null}
    </div>
  );
}
