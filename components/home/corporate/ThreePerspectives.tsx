import Image from "next/image";
import Link from "next/link";

const SCENES = [
  {
    tag: "Der Chef",
    title: "Sieht am Morgen, was Sache ist.",
    body: "Statt Anrufe, Whatsapps und Excel-Listen. Ein Blick aufs Dashboard sagt, wer wo ist, was fehlt und wie die Marge im Objekt läuft.",
    image: "/reinigunggross.webp",
    imageAlt: "Betriebsansicht mit Objekten und Kolonnenstatus",
    link: { label: "Betriebsansicht ansehen", href: "/features" },
  },
  {
    tag: "Die Kolonne",
    title: "Scannt vor Ort. Fertig ist die Zeiterfassung.",
    body: "NFC-Chip am Objekt, kurze Bestätigung im Handy. Kein handschriftlicher Zettel, keine App-Ratespiele. Zeit, Ort und Aufgabe sitzen automatisch am richtigen Auftrag.",
    image: "/feature-zeiterfassung.webp",
    imageAlt: "Mobile Zeiterfassung im Objekt per NFC",
    link: { label: "Zeiterfassung ansehen", href: "/features/nfc-zeiterfassung" },
  },
  {
    tag: "Der Auftraggeber",
    title: "Bekommt seinen eigenen Zugang.",
    body: "Taskey Share ist der Live-Zugang für Ihre Kunden. Sie sehen, was passiert ist, wann und in welchem Bereich. Nachweise, Fotos und offene Vorgänge direkt im Portal.",
    image: "/taskeycard.webp",
    imageAlt: "Taskey Share Portal für Auftraggeber",
    link: { label: "Taskey Share ansehen", href: "#taskey-share" },
  },
];

export default function ThreePerspectives() {
  return (
    <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
      <div className="tkc-container-wide">
        <div className="tkc-section-header">
          <div className="tkc-eyebrow">So arbeiten Betriebe mit Taskey</div>
          <h2
            className="tkc-headline mt-3"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)", color: "var(--tkc-ink)" }}
          >
            Drei Perspektiven. Ein System.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCENES.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-[12px] overflow-hidden"
              style={{
                background: "var(--tkc-canvas-elev)",
                border: "1px solid var(--tkc-line-strong)",
              }}
            >
              <div
                className="relative"
                style={{
                  aspectRatio: "4 / 3",
                  background: "var(--tkc-canvas-tinted)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="tkc-chip" style={{ alignSelf: "flex-start" }}>{s.tag}</span>
                <h3
                  className="mt-4"
                  style={{ fontSize: "1.18rem", fontWeight: 600, color: "var(--tkc-ink)", lineHeight: 1.3 }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3"
                  style={{ fontSize: "0.94rem", lineHeight: 1.6, color: "var(--tkc-ink-soft)" }}
                >
                  {s.body}
                </p>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--tkc-line)" }}>
                  <Link
                    href={s.link.href}
                    className="tkc-mono"
                    style={{ color: "var(--tkc-accent)", fontSize: "0.82rem" }}
                  >
                    → {s.link.label}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
