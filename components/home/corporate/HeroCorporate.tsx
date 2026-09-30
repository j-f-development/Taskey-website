import Image from "next/image";
import Link from "next/link";

export default function HeroCorporate() {
  return (
    <section
      className="relative"
      style={{
        minHeight: "clamp(620px, 88vh, 880px)",
        background: "var(--tkc-canvas-dark)",
        overflow: "hidden",
      }}
    >
      <Image
        src="/hero-2.webp"
        alt="Corporate Headquarter mit gläserner Fassade als Symbolbild für die Facility-Service-Kunden von Taskey."
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(115deg, rgba(11,13,16,0.88) 0%, rgba(11,13,16,0.72) 42%, rgba(11,13,16,0.35) 72%, rgba(11,13,16,0.55) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(11,13,16,0.18) 0%, rgba(11,13,16,0) 22%, rgba(11,13,16,0) 78%, rgba(11,13,16,0.35) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="relative tkc-container-wide"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "clamp(620px, 88vh, 880px)",
          paddingTop: "clamp(6rem, 12vw, 9rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: "740px" }}>
          <div
            className="tkc-mono"
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Facility Operations Platform
          </div>

          <h1
            className="tkc-display mt-5"
            style={{
              fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
              color: "#ffffff",
              letterSpacing: "-0.015em",
              lineHeight: 1.05,
              textShadow: "0 1px 24px rgba(0,0,0,0.35)",
            }}
          >
            Ihr Betrieb läuft.<br />
            Sie sehen es auf einen Blick.
          </h1>

          <p
            className="tkc-lead mt-6"
            style={{
              color: "rgba(238,241,245,0.88)",
              maxWidth: "580px",
              textShadow: "0 1px 12px rgba(0,0,0,0.25)",
            }}
          >
            Taskey ist die operative Plattform für Gebäudereiniger und
            Facility-Service-Organisationen. Zeiterfassung, Einsätze, Objekte,
            Nachweise und Lohn in einer kontrollierbaren Daten- und Prozessschicht.
            Gebaut für Betriebe mit mehreren hundert Mitarbeitenden.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="https://signup.taskeyapp.com"
              className="tkc-btn tkc-btn-primary"
            >
              Kostenlos starten
            </Link>
            <Link
              href="#features"
              className="tkc-btn tkc-btn-onink-ghost"
            >
              Features ansehen
            </Link>
            <Link
              href="#termin"
              className="tkc-btn tkc-btn-onink-ghost"
            >
              Termin buchen
            </Link>
          </div>

          <div
            className="mt-12 pt-6 flex flex-wrap gap-x-5 gap-y-2 items-center tkc-mono"
            style={{
              color: "rgba(255,255,255,0.62)",
              fontSize: "0.74rem",
              letterSpacing: "0.06em",
              borderTop: "1px solid rgba(255,255,255,0.14)",
              maxWidth: "620px",
            }}
          >
            <span>Made in Germany</span>
            <span style={{ color: "rgba(255,255,255,0.32)" }}>·</span>
            <span>DSGVO</span>
            <span style={{ color: "rgba(255,255,255,0.32)" }}>·</span>
            <span>DATEV-Export</span>
            <span style={{ color: "rgba(255,255,255,0.32)" }}>·</span>
            <span>SSO für Enterprise</span>
          </div>
        </div>
      </div>
    </section>
  );
}
