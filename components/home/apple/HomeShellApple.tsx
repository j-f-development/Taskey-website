"use client";

import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";
import {
  AppleSection,
  AppleTile,
  AppleButton,
  AppleFeatureRow,
  AppleStage,
  AppleQuote,
  AppleStatRow,
} from "@/components/apple";

export default function HomeShellApple() {
  const { t: _t } = useLanguage();

  return (
    <>
      {/* ── Hero marquee ─────────────────────────────────────────── */}
      <section className="apl-surface-canvas pt-16 pb-6">
        <div className="apl-container-wide text-center">
          <p className="apl-eyebrow mb-2">Taskey. Made in Germany.</p>
          <h1
            className="apl-display apl-display-xl mx-auto"
            style={{ maxWidth: "16ch" }}
          >
            Reinigung,
            <br />
            neu gedacht.
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "48ch" }}>
            Eine Plattform für Einsatzplanung, NFC-Zeiterfassung, Live-Margen und DATEV.
            Für Gebäudereiniger, die messbar effizienter arbeiten wollen.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="https://signup.taskeyapp.com" variant="primary" size="lg">
              Kostenlos starten
            </AppleButton>
            <AppleButton href="/erstgespraech" variant="secondary" size="lg">
              Erstgespräch buchen
            </AppleButton>
          </div>
        </div>

        <div className="apl-container-wide mt-12">
          <AppleStage tone="light" aspect="video" glow>
            <HeroStageVisual />
          </AppleStage>
        </div>
      </section>

      {/* ── Big product tile pair ─────────────────────────────────── */}
      <AppleSection surface="soft" width="wide" rhythm="sm">
        <div className="apl-duo">
          <AppleTile
            tone="canvas"
            size="xl"
            eyebrow="NFC-Zeiterfassung"
            title={<>Minutengenau. Fälschungssicher. Vor Ort.</>}
            copy="Mitarbeitende halten das Telefon an einen Tag. Fertig. Keine Papierzettel, keine Diskussion."
            cta={{ label: "Mehr über Zeiterfassung", href: "/features/nfc-zeiterfassung" }}
            visual={<TilePill label="NFC · tap" />}
          />
          <AppleTile
            tone="noir"
            size="xl"
            eyebrow="Live-Margen"
            title={<>Sehen, was jedes Objekt wirklich kostet.</>}
            copy="Stundensätze, Fahrzeiten, Material in Echtzeit auf der Kalkulation. Keine Nachkalkulation mehr."
            cta={{ label: "Live-Margen verstehen", href: "/features/live-margen" }}
            visual={<TilePill label="Live" dark />}
          />
        </div>
      </AppleSection>

      {/* ── Feature triple grid ───────────────────────────────────── */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Plattform</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "20ch" }}>
            Alles, was Sie brauchen. In einem System.
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "52ch" }}>
            Einsatzplanung, Nachweise, Rechnung und DATEV in einer durchgängigen Spur. Keine
            Insellösungen mehr.
          </p>
        </div>

        <AppleFeatureRow
          columns={3}
          items={[
            {
              title: "Einsatzplanung",
              copy: "Pläne, Routen und Teams sichtbar auf einer Fläche. Änderungen landen in Sekunden beim Objekt.",
            },
            {
              title: "Leistungsnachweis",
              copy: "Jeder Schritt dokumentiert, mit Foto, Zeit und Ort. Für Audit und Kunden ohne Nacharbeit.",
            },
            {
              title: "DATEV-Export",
              copy: "Rechnungen, Lohnlisten, Belege. Eine Spur, ein Export. Monatsabschluss in Stunden statt Tagen.",
            },
          ]}
        />
      </AppleSection>

      {/* ── Noir solutions row ────────────────────────────────────── */}
      <AppleSection surface="noir" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2" style={{ color: "#2997ff" }}>
            Für jede Größe
          </p>
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "22ch" }}>
            Vom Zweimannbetrieb bis zur Bundesbehörde.
          </h2>
        </div>

        <div className="apl-triple">
          <AppleTile
            tone="noir"
            size="md"
            eyebrow="Mittelstand"
            title="Operativ sauber aufgestellt"
            copy="Für Betriebe, die ihre Objekte, Mitarbeitenden und Rechnungen in einer Spur halten wollen."
            cta={{ label: "Lösungen Mittelstand", href: "/loesungen" }}
          />
          <AppleTile
            tone="noir"
            size="md"
            eyebrow="Enterprise"
            title="Mehrstandort. Compliance-fähig."
            copy="Rollen, Freigaben, Audit-Trail. Für Konzerne, Kliniken und Logistik."
            cta={{ label: "Enterprise entdecken", href: "/enterprise" }}
          />
          <AppleTile
            tone="noir"
            size="md"
            eyebrow="Öffentliche Hand"
            title="Vergabefest und DSGVO-konform"
            copy="Server in Deutschland. Rollenmodell, Protokoll, dokumentierte Prozesse."
            cta={{ label: "Öffentliche Hand", href: "/enterprise" }}
          />
        </div>
      </AppleSection>

      {/* ── Numbers strip ─────────────────────────────────────────── */}
      <AppleSection surface="soft" width="wide" rhythm="sm">
        <AppleStatRow
          stats={[
            { value: "< 2 Min.", label: "Zeit pro Erfassung", foot: "NFC statt Papier" },
            { value: "95 %", label: "weniger Rückfragen", foot: "durch Live-Belege" },
            { value: "1 Spur", label: "von Einsatz bis DATEV", foot: "keine Insellösung" },
          ]}
        />
      </AppleSection>

      {/* ── Big quote ─────────────────────────────────────────────── */}
      <AppleSection surface="canvas" width="narrow" rhythm="md">
        <AppleQuote
          quote="Wir sehen jetzt, was jedes Objekt wirklich verdient. Das hat vorher niemand im Griff gehabt."
          cite="Betriebsleitung"
          role="Reinigungsunternehmen, Rheinland"
        />
      </AppleSection>

      {/* ── Integrations strip ────────────────────────────────────── */}
      <AppleSection surface="soft" width="wide" rhythm="sm" hairlineTop>
        <div className="text-center mb-8">
          <p className="apl-eyebrow mb-2">Integrationen</p>
          <h2 className="apl-display apl-display-md mx-auto" style={{ maxWidth: "26ch" }}>
            Passt in die Werkzeugkette, die Sie bereits haben.
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 opacity-80">
          {["DATEV", "LexOffice", "Google Kalender", "Microsoft 365", "sevdesk", "Personio"].map(
            (brand) => (
              <span
                key={brand}
                className="apl-headline text-[color:var(--apl-ink-muted)]"
                style={{ fontSize: "1.25rem", letterSpacing: "-0.01em" }}
              >
                {brand}
              </span>
            )
          )}
        </div>
        <div className="mt-6 text-center">
          <Link href="/integrationen" className="apl-link">
            Alle Integrationen ansehen
          </Link>
        </div>
      </AppleSection>

      {/* ── Final CTA ─────────────────────────────────────────────── */}
      <AppleSection surface="canvas" width="narrow" rhythm="md">
        <div className="text-center">
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "20ch" }}>
            Bereit, Ihre Reinigung zu digitalisieren?
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "46ch" }}>
            In 30 Minuten zeigen wir Ihnen Taskey an Ihren echten Objekten. Ohne Verpflichtung.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="https://signup.taskeyapp.com" variant="primary" size="lg">
              Kostenlos starten
            </AppleButton>
            <AppleButton href="/erstgespraech" variant="secondary" size="lg">
              Erstgespräch buchen
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </>
  );
}

/* ─── Hero stage visual ────────────────────────────────────────── */
function HeroStageVisual() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 sm:p-16">
      {/* Floating faux dashboard card */}
      <div className="relative w-full max-w-[720px] aspect-[16/10] rounded-2xl bg-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] ring-1 ring-black/5 overflow-hidden">
        <div className="h-9 flex items-center gap-1.5 px-4 border-b border-black/5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[11px] text-[color:var(--apl-ink-muted)]">taskey.app · Einsatzplanung</span>
        </div>
        <div className="p-5 grid grid-cols-5 gap-3 h-[calc(100%-36px)]">
          <div className="col-span-1 flex flex-col gap-2">
            {["Objekte", "Teams", "Einsätze", "Nachweise", "Rechnungen"].map((l) => (
              <div
                key={l}
                className="h-7 rounded-md bg-[color:var(--apl-canvas-soft)] px-2 flex items-center text-[11px] text-[color:var(--apl-ink-soft)]"
              >
                {l}
              </div>
            ))}
          </div>
          <div className="col-span-4 grid grid-rows-3 gap-3">
            <div className="row-span-1 rounded-lg bg-gradient-to-br from-[#eef4ff] to-[#e3edff] p-3 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-[color:var(--apl-ink-muted)] uppercase tracking-wide">
                  Heute
                </div>
                <div className="apl-headline" style={{ fontSize: "1.1rem" }}>
                  18 Einsätze aktiv
                </div>
              </div>
              <div className="h-10 w-28 rounded-md bg-white/70 ring-1 ring-black/5" />
            </div>
            <div className="row-span-2 rounded-lg bg-[color:var(--apl-canvas-soft)] p-3 grid grid-cols-3 gap-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-md bg-white ring-1 ring-black/5 h-full flex items-center justify-center text-[10px] text-[color:var(--apl-ink-muted)]"
                >
                  Objekt {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TilePill({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <div className="px-6 pb-8 pt-2 flex justify-center">
      <div
        className={[
          "inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12px] font-medium",
          dark
            ? "bg-white/10 text-white/90 ring-1 ring-white/15"
            : "bg-[color:var(--apl-canvas-soft)] text-[color:var(--apl-ink-soft)] ring-1 ring-black/5",
        ].join(" ")}
      >
        <span
          className={[
            "inline-block h-1.5 w-1.5 rounded-full",
            dark ? "bg-[#2997ff]" : "bg-[color:var(--apl-accent)]",
          ].join(" ")}
        />
        {label}
      </div>
    </div>
  );
}
