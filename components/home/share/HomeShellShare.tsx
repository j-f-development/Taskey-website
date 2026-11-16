"use client";

import Image from "next/image";
import { BrandDot, TaskeyWord, WithBrandDot } from "@/components/BrandDot";
import FeatureWindow from "@/components/home/feature-window/FeatureWindow";
import PhotoZoom from "@/components/share/PhotoZoom";
import Button from "@/components/ui/Button";

export default function HomeShellShare() {
  return (
    <div className="ts-scope">
      <HeroShare />
      <FeaturesDashboard />
      <NachweisGallery />
      <StatementBand />
      <PillarsBand />
      <ReassuranceBand />
      <FinalCta />
    </div>
  );
}

/* ------------------------------------------------------------------
   HERO · ohne 3D, Share-Signatur: große Headline, Navy-Sidebar, Punkt
   ------------------------------------------------------------------ */

function HeroShare() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 pb-16 md:pb-24">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(85% 60% at 85% 0%, rgba(47, 91, 148, 0.10) 0%, transparent 55%), linear-gradient(180deg, #F7F9FC 0%, #ECF0F5 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[70vh] -z-10 opacity-40 ts-dot-grid pointer-events-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -z-10 right-[-6vw] top-[-4vh] opacity-[0.07] md:opacity-[0.09] select-none"
        style={{ width: "min(72vw, 820px)", maxWidth: "60%" }}
      >
        <Image
          src="/brand/logo/logo-navy.svg"
          alt=""
          width={906}
          height={676}
          priority
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="ts-container">
        <div className="grid md:grid-cols-12 gap-x-10 gap-y-8 items-start">
          <div className="md:col-span-8 flex flex-col gap-6">
            <span className="ts-chip self-start">Software für Gebäudereinigung</span>

            <h1
              className="ts-display"
              style={{
                fontSize: "clamp(2.6rem, 7.4vw, 5.6rem)",
                color: "var(--ts-ink)",
              }}
            >
              Reinigung in einer Spur<BrandDot />
            </h1>

            <p
              className="text-[1.05rem] md:text-[1.2rem] leading-[1.55] max-w-2xl"
              style={{ color: "var(--ts-ink-soft)" }}
            >
              Von der NFC-Zeiterfassung bis zum DATEV-Export, alles in einer Plattform. Für Gebäudereiniger, die messbar effizienter arbeiten wollen.
            </p>

            <p
              className="text-[0.95rem] md:text-[1rem] leading-[1.55] max-w-2xl"
              style={{ color: "var(--ts-ink-muted)" }}
            >
              Läuft im Browser und als mobile App. Server in Deutschland.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button href="https://signup.taskeyapp.com" target="_blank" rel="noopener noreferrer" variant="primary">
                Kostenlos starten
              </Button>
              <Button href="/pricing" variant="secondary">
                Abonnements ansehen
              </Button>
              <Button href="/features" variant="secondary">
                Funktionen entdecken
              </Button>
            </div>
          </div>

          <aside className="md:col-span-4 md:pt-2">
            <div
              className="p-6 flex flex-col gap-3 text-[0.9rem] relative overflow-hidden"
              style={{
                background: "var(--brand-navy)",
                color: "var(--brand-white)",
                borderRadius: "var(--ts-r-panel)",
                boxShadow: "0 10px 40px -12px rgba(16, 35, 60, 0.35)",
              }}
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 bottom-0"
                style={{ width: 4, background: "var(--brand-sky)" }}
              />
              <div className="pl-2">
                <div style={{ marginBottom: "0.35rem" }}>
                  <TaskeyWord size="1.75rem" tone="white" />
                </div>
                <div
                  className="ts-eyebrow"
                  style={{ color: "var(--brand-sky)", marginTop: "0.1rem" }}
                >
                  Die Plattform für Gebäudereinigung
                </div>
                <div className="h-px w-full my-4" aria-hidden style={{ background: "rgba(159, 197, 232, 0.22)" }} />
                <div className="ts-eyebrow" style={{ color: "var(--brand-sky)" }}>
                  Was in Taskey drin ist
                </div>
                <ul className="flex flex-col gap-1.5 mt-2">
                  {[
                    "NFC-Zeiterfassung",
                    "Einsatz- und Personalplanung",
                    "Nachweise mit Foto",
                    "Rechnungen und DATEV-Export",
                    "Auftraggeber-Portal",
                  ].map((b) => (
                    <li key={b} className="flex items-center gap-2" style={{ color: "rgba(247, 249, 252, 0.92)" }}>
                      <span className="h-1 w-1 rounded-full" style={{ background: "var(--brand-sky)" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   FUNKTIONEN · erste Section unter Hero
   Interaktives Funktionen-Fenster im Stil des Taskey-Dashboards
   ------------------------------------------------------------------ */

function FeaturesDashboard() {
  return (
    <section
      id="features"
      className="relative overflow-hidden"
      style={{
        background: "var(--ts-canvas-elev)",
        paddingBlock: "var(--ts-section-py)",
        borderTop: "1px solid var(--ts-line)",
      }}
    >
      <div className="ts-container-wide">
        <header id="funktionen" className="flex flex-col gap-4 max-w-3xl" style={{ scrollMarginTop: "6rem" }}>
          <span className="ts-eyebrow">Funktionen</span>
          <h2 className="ts-headline" style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.2rem)", color: "var(--ts-ink)" }}>
            Ein Dashboard für deinen ganzen Betrieb<BrandDot />
          </h2>
          <p className="text-[1rem] md:text-[1.08rem] leading-[1.6] max-w-2xl" style={{ color: "var(--ts-ink-muted)" }}>
            Klick dich durch die vier zentralen Funktionen von Taskey, genau so, wie du sie später selbst benutzt.
          </p>
          <div>
            <Button href="/features" variant="secondary">
              Alle Funktionen ansehen</Button>
          </div>
        </header>

        <div className="mt-12">
          <FeatureWindow />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   NACHWEIS-GALERIE · realistische Foto-Beweise (KI-generierte Bilder)
   Die Platzhalter-Pfade zeigen auf /public/images/nachweise/*.jpg.
   Solange keine Datei vorliegt, trägt die CSS-Gradient-Fläche die Fläche.
   ------------------------------------------------------------------ */

function NachweisGallery() {
  const samples = [
    {
      img: "/images/beweise/beweis-1-waschbecken",
      alt: "Frisch gereinigtes Waschbecken im Waschraum eines Bürogebäudes",
      object: "Bürogebäude · 3. OG",
      detail: "Sanitär · Waschbecken geprüft",
      time: "06:42 · 11.11.2026",
      initials: "L. K.",
    },
    {
      img: "/images/beweise/beweis-2-teekueche",
      alt: "Fettfrei gereinigte Arbeitsfläche mit Spüle in der Teeküche einer Praxis",
      object: "Praxis Dr. Meier · Teeküche",
      detail: "Oberflächen · Fettfrei",
      time: "19:08 · 10.11.2026",
      initials: "M. A.",
    },
    {
      img: "/images/beweise/beweis-3-treppenhaus",
      alt: "Nass gereinigtes Treppenhaus aus Granit in einem Verwaltungsgebäude",
      object: "Verwaltung · Treppenhaus Süd",
      detail: "Bodenpflege · Nassreinigung",
      time: "21:35 · 10.11.2026",
      initials: "S. R.",
    },
  ];

  return (
    <section
      style={{
        paddingBlock: "var(--ts-section-py-sm)",
        background: "var(--ts-canvas)",
        borderTop: "1px solid var(--ts-line)",
      }}
    >
      <div className="ts-container-wide">
        <header className="flex flex-col gap-4 max-w-3xl mb-10">
          <span className="ts-eyebrow">Nachweise</span>
          <h2
            className="ts-headline"
            style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "var(--ts-ink)" }}
          >
            <WithBrandDot>So sehen Foto-Beweise in Taskey aus</WithBrandDot>
          </h2>
          <p
            className="text-[1rem] md:text-[1.05rem] leading-[1.6] max-w-2xl"
            style={{ color: "var(--ts-ink-muted)" }}
          >
            Jeder Beleg trägt Raum, Leistung, Uhrzeit und Kürzel. Für Audit, Auftraggeber und
            interne Kontrolle revisionsfest exportierbar.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {samples.map((s) => (
            <article
              key={s.img}
              className="ts-card ts-card-hover overflow-hidden flex flex-col"
              style={{ padding: 0 }}
            >
              <div
                style={{
                  aspectRatio: "4 / 5",
                  position: "relative",
                  background: "#e9edf2",
                  overflow: "hidden",
                }}
              >
                <PhotoZoom
                  img={s.img}
                  alt={s.alt}
                  width={1122}
                  height={1402}
                  caption={`${s.object} · ${s.detail} · ${s.time}`}
                />
                {/* Verlauf für gut lesbaren weißen Text */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(16,35,60,0) 45%, rgba(16,35,60,.35) 70%, rgba(16,35,60,.75) 100%)",
                    pointerEvents: "none",
                  }}
                />
                <span
                  className="ts-chip"
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.75rem",
                    background: "rgba(255,255,255,0.92)",
                    color: "var(--brand-navy)",
                    fontSize: "0.58rem",
                    padding: "0.3rem 0.6rem",
                  }}
                >
                  Beweis · Taskey
                </span>
                <div
                  style={{
                    position: "absolute",
                    bottom: "0.9rem",
                    left: "0.9rem",
                    right: "0.9rem",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ color: "var(--brand-white)" }}>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        opacity: 0.95,
                      }}
                    >
                      {s.object}
                    </div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        opacity: 0.8,
                        marginTop: "0.15rem",
                      }}
                    >
                      {s.time}
                    </div>
                  </div>
                  <span
                    aria-hidden
                    style={{
                      display: "inline-grid",
                      placeItems: "center",
                      height: 32,
                      width: 32,
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.92)",
                      color: "var(--brand-navy)",
                      fontFamily: "var(--ts-font-sans)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                    }}
                  >
                    {s.initials}
                  </span>
                </div>
              </div>
              <div
                style={{
                  padding: "0.9rem 1rem 1rem",
                  borderTop: "1px solid var(--ts-line)",
                }}
              >
                <div
                  className="ts-eyebrow"
                  style={{ fontSize: "0.62rem", color: "var(--ts-ink-muted)" }}
                >
                  Leistung
                </div>
                <div
                  className="ts-headline"
                  style={{ fontSize: "0.98rem", color: "var(--ts-ink)", marginTop: "0.2rem" }}
                >
                  {s.detail}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p
          className="text-[0.82rem] mt-6"
          style={{ color: "var(--ts-ink-faint)" }}
        >
          Beispielhafte Darstellung. Die Fotos sind rein illustrativ.
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   STATEMENT
   ------------------------------------------------------------------ */

function StatementBand() {
  return (
    <section className="ts-ink-surface ts-statement relative overflow-hidden" style={{ paddingBlock: "var(--ts-section-py)" }}>
      <div className="ts-container">
        <div className="max-w-3xl">
          <span className="ts-eyebrow" style={{ color: "var(--brand-sky)" }}>
            Warum Taskey
          </span>
          <h2
            className="ts-display mt-3"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", color: "var(--brand-white)" }}
          >
            Eine Spur von der Reinigungskraft bis in die Buchhaltung<BrandDot />
          </h2>
          <p className="mt-5 text-[1.05rem] leading-[1.6] max-w-2xl" style={{ color: "rgba(247,249,252,0.75)" }}>
            Taskey verbindet Einsatzplanung, Zeiterfassung, Nachweise und Finanzen in einem Datenstamm. Keine Insellösungen mehr, keine doppelte Pflege, keine Datenlücken zwischen Objekt und Lohnlauf.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/features" variant="primary">
              Alle Funktionen
            </Button>
            <Button href="/pricing" variant="secondary" tone="dark">
              Abonnements ansehen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   PILLARS · Style · Effizienz · Intuitivität · KI
   ------------------------------------------------------------------ */

function PillarsBand() {
  const pillars = [
    { title: "Effizienz", copy: "Weniger Klicks, weniger Papier, weniger Abstimmung. Jeder Schritt zahlt in den Datenstamm." },
    { title: "Intuitivität", copy: "Reinigungskräfte lernen Taskey in Minuten. Objektleitung in einer Schicht." },
    { title: "Integration", copy: "DATEV, LexOffice und Ihr Lohnbüro sind eingebaut. Zeiten, Belege und Zahlen laufen ohne Umweg weiter." },
    { title: "KI", copy: "Taskey liest Pläne, Nachweise und Zahlen und meldet, wo ein Objekt gerade Marge verliert." },
  ];

  return (
    <section style={{ paddingBlock: "var(--ts-section-py)", background: "var(--ts-canvas)" }}>
      <div className="ts-container-wide">
        <header className="max-w-3xl mb-10">
          <span className="ts-eyebrow">Prinzipien</span>
          <h2 className="ts-headline mt-3" style={{ fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)", color: "var(--ts-ink)" }}>
            Vier Prinzipien, die Taskey tragen<BrandDot />
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="ts-card ts-card-hover p-6 flex flex-col gap-3"
            >
              <span
                className="font-mono text-[0.7rem]"
                style={{ color: "var(--ts-ink-faint)", letterSpacing: "0.08em" }}
              >
                0{i + 1}
              </span>
              <h3 className="ts-headline" style={{ fontSize: "1.3rem", color: "var(--ts-ink)" }}>
                {p.title}<BrandDot />
              </h3>
              <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                {p.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   REASSURANCE · Integrationen, Server-DE, Updates, Support
   ------------------------------------------------------------------ */

function ReassuranceBand() {
  const items = [
    { title: "Server in Deutschland", copy: "Hosting ausschließlich in Deutschland. Verträge und Prozesse DSGVO-dokumentiert." },
    { title: "Updates automatisch", copy: "Neue Funktionen rollen laufend aus. Keine Wartungsfenster, keine Migrationsprojekte." },
    { title: "Direkter Support", copy: "Antwort typischerweise am selben Tag. Menschen, die den Betrieb kennen." },
    { title: "DATEV und LexOffice", copy: "Lohn und Buchhaltung bleiben bei Ihrem Steuerberater. Taskey liefert die Spur." },
  ];

  return (
    <section style={{ paddingBlock: "var(--ts-section-py-sm)", background: "var(--ts-canvas-tinted)" }}>
      <div className="ts-container-wide">
        <header className="max-w-3xl mb-10">
          <span className="ts-eyebrow">Das Versprechen</span>
          <h2 className="ts-headline mt-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "var(--ts-ink)" }}>
            Die Grundlagen, die Sie nicht verhandeln müssen<BrandDot />
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="flex flex-col gap-2">
              <h3 className="ts-headline" style={{ fontSize: "1.05rem", color: "var(--ts-ink)" }}>
                {it.title}
              </h3>
              <p className="text-[0.92rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                {it.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   FINAL CTA
   ------------------------------------------------------------------ */

function FinalCta() {
  return (
    <section style={{ paddingBlock: "var(--ts-section-py)", background: "var(--ts-canvas)" }}>
      <div className="ts-container">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <h2
            className="ts-display"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3rem)", color: "var(--ts-ink)" }}
          >
            Taskey an echten Objekten ansehen<BrandDot />
          </h2>
          <p className="text-[1rem] md:text-[1.1rem] leading-[1.6] max-w-xl" style={{ color: "var(--ts-ink-muted)" }}>
            Ein direktes Erstgespräch. Keine Vertriebsschleife. Wir öffnen das Dashboard mit Ihren Objekten und zeigen, was Taskey im Betrieb bedeutet.
          </p>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <Button href="https://signup.taskeyapp.com" target="_blank" rel="noopener noreferrer" variant="primary">
              Kostenlos starten
            </Button>
            <Button href="/erstgespraech" variant="secondary">
              Erstgespräch buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
