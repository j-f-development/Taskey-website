import Image from "next/image";
import Link from "next/link";

export default function HeroCorporate() {
  return (
    <section
      className="tkc-canvas"
      style={{
        paddingTop: "clamp(5.5rem, 10vw, 8rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 4.5rem)",
      }}
    >
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div
              className="tkc-mono"
              style={{
                color: "var(--tkc-ink-muted)",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Facility Operations Platform
            </div>

            <h1
              className="tkc-display mt-5"
              style={{ fontSize: "clamp(2.35rem, 5.4vw, 4.35rem)", color: "var(--tkc-ink)" }}
            >
              Ihr Betrieb läuft.<br />
              Sie sehen es auf einen Blick.
            </h1>

            <p className="tkc-lead mt-6 max-w-[560px]">
              Taskey ist die operative Plattform für Gebäudereiniger und Facility-Service-Organisationen.
              Zeiterfassung, Einsätze, Objekte, Nachweise und Lohn in einer kontrollierbaren Daten- und
              Prozessschicht. Gebaut für Betriebe mit mehreren hundert Mitarbeitenden.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                className="tkc-btn tkc-btn-primary"
              >
                Kostenlos starten
              </Link>
              <Link href="#produkt" className="tkc-btn tkc-btn-ghost">
                Produkt ansehen
              </Link>
            </div>

            <div
              className="mt-10 pt-6 flex flex-wrap gap-x-5 gap-y-2 items-center tkc-mono"
              style={{
                color: "var(--tkc-ink-muted)",
                fontSize: "0.74rem",
                letterSpacing: "0.04em",
                borderTop: "1px solid var(--tkc-line)",
              }}
            >
              <span>Made in Germany</span>
              <span style={{ color: "var(--tkc-ink-faint)" }}>·</span>
              <span>DSGVO</span>
              <span style={{ color: "var(--tkc-ink-faint)" }}>·</span>
              <span>DATEV-Export</span>
              <span style={{ color: "var(--tkc-ink-faint)" }}>·</span>
              <span>SSO für Enterprise</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              className="relative"
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid var(--tkc-line-strong)",
                boxShadow: "var(--tkc-shadow-md)",
                background: "#eef1f5",
                aspectRatio: "16 / 11",
              }}
            >
              <Image
                src="/hero-2.webp"
                alt="Corporate Headquarter mit gläserner Fassade als Symbolbild für die Facility-Service-Kunden von Taskey."
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(11,13,16,0) 55%, rgba(11,13,16,0.18) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
