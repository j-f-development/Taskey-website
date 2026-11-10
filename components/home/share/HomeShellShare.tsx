"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "@/components/LocaleLink";
import { BrandDot, TaskeyWord } from "@/components/BrandDot";

type Feature = {
  key: string;
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
};

const FEATURES: Feature[] = [
  {
    key: "zeiterfassung",
    eyebrow: "01 · Zeiterfassung",
    title: "NFC-Zeiterfassung ohne Papier.",
    copy: "Mitarbeitende scannen am Objekt den Tag. Taskey schreibt Start, Ende und Pause minutengenau und am echten Standort.",
    bullets: [
      "NFC-Check-in direkt vor Ort",
      "Minutengenau, nicht aufgerundet",
      "Standort und Gerät sind protokolliert",
    ],
  },
  {
    key: "einsatzplanung",
    eyebrow: "02 · Personal und Einsatz",
    title: "Einsatzplanung in einer Fläche.",
    copy: "Objekte, Teams und Schichten auf einer Ebene. Änderungen landen sofort auf dem Gerät der Reinigungskraft.",
    bullets: [
      "Pläne pro Objekt und Team",
      "Vertretungen und Krank gleich sichtbar",
      "Push auf das Mitarbeiterhandy",
    ],
  },
  {
    key: "nachweise",
    eyebrow: "03 · Nachweise",
    title: "Nachweise mit Foto und Zeit.",
    copy: "Jeder Raum, jede Leistung, dokumentiert mit Foto, Uhrzeit und Mitarbeiterkürzel. Als PDF exportierbar, revisionsfest.",
    bullets: [
      "Fotos je Raum und Leistung",
      "Zeit und Ort an jedem Beleg",
      "Export für Audit und Kunde",
    ],
  },
  {
    key: "live-margen",
    eyebrow: "04 · Finanzen",
    title: "Live-Margen pro Objekt.",
    copy: "Stundensatz, Fahrzeit und Material fließen in die Objektkalkulation. Sie sehen täglich, welches Objekt verdient und welches nicht.",
    bullets: [
      "Soll-Ist pro Objekt und Monat",
      "Deckungsbeitrag und Stundensatz live",
      "Kein Nachkalkulieren in Excel",
    ],
  },
  {
    key: "rechnungen",
    eyebrow: "05 · Rechnung und DATEV",
    title: "Rechnungen und DATEV-Export.",
    copy: "Angebote, Rechnungen, Mahnungen und Lohnlisten in einem System. Als ZUGFeRD oder im DATEV-Format exportiert.",
    bullets: [
      "GoBD-konforme Rechnungen",
      "ZUGFeRD E-Rechnung inklusive",
      "DATEV-Export für das Lohnbüro",
    ],
  },
  {
    key: "auftraggeber",
    eyebrow: "06 · Auftraggeber",
    title: "Portal für Auftraggeber.",
    copy: "Ihre Kunden sehen Pläne, Nachweise und Beanstandungen in einem eigenen Zugang. Kein E-Mail-Pingpong mehr.",
    bullets: [
      "Live-Status pro Objekt",
      "Foto-Belege und Reports",
      "Beanstandungen sauber dokumentiert",
    ],
  },
  {
    key: "mobil",
    eyebrow: "07 · Mobile App",
    title: "Mobile App für den Einsatz.",
    copy: "Für Reinigungskräfte, Objektleitung und Subunternehmer. Offlinefest, klar, auf das Nötige reduziert.",
    bullets: [
      "iOS Applikation",
      "Offline Erfassen und synchronisieren",
      "Rollen für Mitarbeiter und Subunternehmer",
    ],
  },
  {
    key: "sicherheit",
    eyebrow: "08 · Sicherheit",
    title: "Server in Deutschland.",
    copy: "Hosting ausschließlich in Deutschland. Rollen, Audit-Trail und dokumentierte Prozesse für die Ausschreibung und das interne Audit.",
    bullets: [
      "Server und Backups in Deutschland",
      "Rollen und Berechtigungen granular",
      "DSGVO und Audit-Trail",
    ],
  },
];

export default function HomeShellShare() {
  return (
    <div className="ts-scope">
      <HeroShare />
      <FeaturesDashboard />
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
              <a
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ts-btn ts-btn-primary"
              >
                Kostenlos starten
              </a>
              <Link href="/pricing" className="ts-btn ts-btn-ghost">
                Preise ansehen
              </Link>
              <Link href="/features" className="ts-btn ts-btn-ghost">
                Funktionen entdecken
              </Link>
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
                <div className="ts-eyebrow" style={{ color: "var(--brand-sky)" }}>
                  <TaskeyWord size="0.95rem" tone="white" />
                </div>
                <div className="font-semibold mt-2" style={{ color: "var(--brand-white)" }}>
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
   FEATURES · erste Section unter Hero
   Interaktives Dashboard-Embed + Accordion mit Modulen
   ------------------------------------------------------------------ */

function FeaturesDashboard() {
  const [open, setOpen] = useState<number | null>(0);
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

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
        <header className="flex flex-col gap-4 max-w-3xl">
          <span className="ts-eyebrow">Funktionen</span>
          <h2 className="ts-headline" style={{ fontSize: "clamp(1.9rem, 4.2vw, 3.2rem)", color: "var(--ts-ink)" }}>
            Taskey live im Betrieb<BrandDot />
          </h2>
          <p className="text-[1rem] md:text-[1.08rem] leading-[1.6] max-w-2xl" style={{ color: "var(--ts-ink-muted)" }}>
            Links klicken Sie durch das echte Taskey-Dashboard. Rechts öffnen Sie die Module, die darin arbeiten. Keine Screenshots, keine Demo-Attrappe.
          </p>
        </header>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Dashboard embed */}
          <div className="lg:col-span-7">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "var(--ts-r-panel)",
                border: "1px solid var(--ts-line-strong)",
                boxShadow: "var(--ts-shadow-lg)",
                background: "var(--ts-canvas-elev)",
                height: "clamp(520px, 72vh, 760px)",
              }}
            >
              <div
                className="flex items-center gap-2 px-3"
                style={{
                  height: 36,
                  borderBottom: "1px solid var(--ts-line)",
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#E94B6A" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#F59E0B" }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#22C55E" }} />
                <span
                  className="ml-3 text-[0.72rem] font-mono"
                  style={{ color: "var(--ts-ink-muted)" }}
                >
                  dashboard.taskeyapp.com
                </span>
                <span className="ml-auto ts-chip" style={{ fontSize: "0.6rem", padding: "0.2rem 0.5rem" }}>
                  Live
                </span>
              </div>

              <iframe
                ref={iframeRef}
                src="https://dashboard.taskeyapp.com"
                title="Taskey Dashboard, live und interaktiv"
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className="block"
                style={{
                  width: "100%",
                  height: "calc(100% - 36px)",
                  border: 0,
                  background: "#fff",
                }}
                referrerPolicy="no-referrer"
              />

              {!loaded && (
                <div
                  className="absolute inset-0 grid place-items-center text-[0.9rem]"
                  style={{
                    pointerEvents: "none",
                    color: "var(--ts-ink-muted)",
                    background: "rgba(247,249,252,0.6)",
                  }}
                >
                  Dashboard wird geladen …
                </div>
              )}
            </div>

            <p className="mt-4 text-[0.85rem]" style={{ color: "var(--ts-ink-muted)" }}>
              Hinweis: Login öffnet das Live-Dashboard. Für einen Testzugang buchen Sie ein Erstgespräch.
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-5">
            <div
              className="flex flex-col divide-y overflow-hidden"
              style={{
                border: "1px solid var(--ts-line)",
                borderRadius: "var(--ts-r-panel)",
                background: "var(--ts-canvas-elev)",
              }}
            >
              {FEATURES.map((f, idx) => {
                const isOpen = open === idx;
                return (
                  <div key={f.key} style={{ borderColor: "var(--ts-line)" }}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="w-full flex items-start justify-between gap-6 text-left px-5 md:px-6 py-5"
                      style={{ background: isOpen ? "var(--ts-canvas-tinted)" : "transparent" }}
                    >
                      <div>
                        <span className="ts-eyebrow block mb-1" style={{ fontSize: "0.65rem" }}>
                          {f.eyebrow}
                        </span>
                        <span className="ts-headline" style={{ fontSize: "1.02rem", color: "var(--ts-ink)" }}>
                          {f.title}
                        </span>
                      </div>
                      <span
                        aria-hidden
                        className="shrink-0 grid place-items-center h-8 w-8"
                        style={{
                          borderRadius: 999,
                          border: isOpen ? "1px solid var(--ts-ink)" : "1px solid var(--ts-line-strong)",
                          background: isOpen ? "var(--ts-ink)" : "#fff",
                          color: isOpen ? "#fff" : "var(--ts-ink-muted)",
                          transform: isOpen ? "rotate(45deg)" : "none",
                          transition: "all 0.28s var(--ts-ease-out)",
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                          <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 md:px-6 pb-6 -mt-1">
                        <p className="text-[0.98rem] leading-[1.65] mb-3" style={{ color: "var(--ts-ink-soft)" }}>
                          {f.copy}
                        </p>
                        <ul className="flex flex-col gap-1.5">
                          {f.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2 text-[0.92rem]" style={{ color: "var(--ts-ink-muted)" }}>
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full"
                                style={{ background: "var(--brand-signal-blue)" }}
                              />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
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
            <Link href="/features" className="ts-btn ts-btn-onink">
              Alle Funktionen
            </Link>
            <Link href="/pricing" className="ts-btn ts-btn-onink-ghost">
              Preise ansehen
            </Link>
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
    { title: "Style", copy: "Eine Oberfläche, die man ernst nehmen kann. Klar, ruhig, in der eigenen Brand." },
    { title: "Effizienz", copy: "Weniger Klicks, weniger Papier, weniger Abstimmung. Jeder Schritt zahlt in den Datenstamm." },
    { title: "Intuitivität", copy: "Reinigungskräfte lernen Taskey in Minuten. Objektleitung in einer Schicht." },
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
            <a
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ts-btn ts-btn-primary"
            >
              Kostenlos starten
            </a>
            <Link href="/erstgespraech" className="ts-btn ts-btn-ghost">
              Erstgespräch buchen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
