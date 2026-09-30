import Image from "next/image";
import Link from "next/link";
import SectionHeaderCorporate from "./SectionHeaderCorporate";

type Feature = {
  slug: string;
  title: string;
  desc: string;
  image?: string;
};

const FEATURES: Feature[] = [
  {
    slug: "nfc-zeiterfassung",
    title: "NFC-Zeiterfassung",
    desc: "Scan am Objekt startet die Zeit. Standort, Aufgabe und Nachweis entstehen automatisch.",
    image: "/feature-zeiterfassung.webp",
  },
  {
    slug: "einsatzplanung",
    title: "Einsatzplanung",
    desc: "Kolonnen, Touren und Vertretungen in einem Kalender. Konflikte werden vor der Freigabe sichtbar.",
  },
  {
    slug: "kalkulation",
    title: "Kalkulation",
    desc: "Fläche, Frequenz, Lohn und Marge in einer Kalkulation. Angebot lässt sich direkt daraus versenden.",
  },
  {
    slug: "live-margen",
    title: "Live-Margen",
    desc: "Objekt für Objekt sichtbar, ob die Rechnung aufgeht. Ohne Excel und ohne Wochen Verzug.",
  },
  {
    slug: "leistungsnachweis",
    title: "Leistungsnachweis",
    desc: "Jeder Einsatz protokolliert mit Zeitstempel, Standort und Fotos. Für Auftraggeber und Revision.",
  },
  {
    slug: "rechnungsprogramm",
    title: "Rechnungsprogramm",
    desc: "Rechnungen direkt aus den erbrachten Leistungen. Konform, wiederholbar, DATEV-fähig.",
  },
  {
    slug: "datev-export",
    title: "DATEV-Export",
    desc: "Zeitdaten und Lohnbewegungen an die Steuerkanzlei. Ohne Zwischenexport in Excel.",
  },
  {
    slug: "ausschreibungen",
    title: "Ausschreibungen",
    desc: "Passende öffentliche und private Ausschreibungen gefiltert, verfolgt und dokumentiert.",
  },
];

function PlaceholderTile({ title }: { title: string }) {
  const initial = title.charAt(0);
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(135deg, rgba(30,64,175,0.08) 0%, rgba(30,64,175,0.02) 60%, rgba(11,13,16,0.04) 100%)",
      }}
    >
      <span
        className="tkc-mono"
        style={{
          fontSize: "3rem",
          fontWeight: 500,
          color: "var(--tkc-accent)",
          opacity: 0.35,
          letterSpacing: "0.02em",
        }}
      >
        {initial}
      </span>
    </div>
  );
}

export default function FeaturesOverview() {
  return (
    <section
      id="features"
      className="tkc-section"
      style={{ background: "var(--tkc-canvas)" }}
    >
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
          <SectionHeaderCorporate
            eyebrow="Funktionen"
            title="Unsere Features im Überblick."
            subtitle="Alles, was Gebäudereiniger im Alltag brauchen. Jeder Bereich löst ein konkretes Problem und arbeitet mit den anderen zusammen."
          />
          <div className="flex gap-3">
            <Link href="/features" className="tkc-btn tkc-btn-ghost tkc-btn-sm">
              Alle Features
            </Link>
            <Link
              href="https://signup.taskeyapp.com"
              className="tkc-btn tkc-btn-primary tkc-btn-sm"
            >
              Kostenlos starten
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f) => (
            <Link
              key={f.slug}
              href={`/features/${f.slug}`}
              className="group flex flex-col rounded-[12px] overflow-hidden transition-colors"
              style={{
                background: "var(--tkc-canvas-elev)",
                border: "1px solid var(--tkc-line-strong)",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                className="relative"
                style={{
                  aspectRatio: "16 / 10",
                  background: "var(--tkc-canvas-tinted)",
                  overflow: "hidden",
                }}
              >
                {f.image ? (
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <PlaceholderTile title={f.title} />
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3
                  style={{
                    fontSize: "1.02rem",
                    fontWeight: 600,
                    color: "var(--tkc-ink)",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  className="mt-2 flex-1"
                  style={{
                    fontSize: "0.88rem",
                    lineHeight: 1.55,
                    color: "var(--tkc-ink-soft)",
                  }}
                >
                  {f.desc}
                </p>
                <div
                  className="tkc-mono mt-4"
                  style={{
                    color: "var(--tkc-accent)",
                    fontSize: "0.76rem",
                    letterSpacing: "0.04em",
                  }}
                >
                  Details ansehen →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
