"use client";

import Link from "next/link";
import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareBody,
  ShareButton,
  ShareStatementBand,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

const FEATURE_DEEP = [
  {
    id: "nfc-zeiterfassung",
    eyebrow: "01 · NFC-Zeiterfassung",
    title: "Minutengenau. Fälschungssicher.",
    copy: "Ein wetterfester Tag am Objekt, ein Tap am Telefon. Zeit, Ort und Mitarbeiter sind dokumentiert, bevor jemand die Reinigung beginnt.",
    href: "/features/nfc-zeiterfassung",
  },
  {
    id: "einsatzplanung",
    eyebrow: "02 · Einsatzplanung",
    title: "Sichtbar auf einer Fläche.",
    copy: "Alle Objekte, alle Teams, alle Schichten. Ändern Sie etwas, landet es in Sekunden beim Objekt.",
    href: "/features/einsatzplanung",
  },
  {
    id: "live-margen",
    eyebrow: "03 · Live-Margen",
    title: "Objekt-Deckungsbeitrag in Echtzeit.",
    copy: "Stunden, Fahrten, Material gegen Objektpreis. Sie sehen pro Objekt, pro Monat, pro Team, was wirklich verdient wird.",
    href: "/features/live-margen",
  },
  {
    id: "leistungsnachweis",
    eyebrow: "04 · Leistungsnachweis",
    title: "Nachweise, die eine Prüfung überleben.",
    copy: "Foto, Zeit, Mitarbeiter. Pro Zone, pro Schicht. In Sekunden als PDF für den Kunden oder den Auditor.",
    href: "/features/leistungsnachweis",
  },
  {
    id: "datev-export",
    eyebrow: "05 · DATEV-Export",
    title: "Vom Einsatz direkt zum Steuerberater.",
    copy: "Lohnlauf, Buchung, Belege. In einer Spur, ein Export. Ihr Steuerberater importiert direkt, ohne Nachbearbeitung.",
    href: "/features/datev-export",
  },
  {
    id: "taskey-share",
    eyebrow: "06 · Taskey Share",
    title: "Auftraggeber sehen, was läuft.",
    copy: "Jeder Kunde bekommt eine eigene Sicht auf seine Objekte. Reduziert Rückfragen, schafft Vertrauen.",
    href: "/features/taskey-share",
  },
  {
    id: "kalkulation",
    eyebrow: "07 · Kalkulation",
    title: "Objektpreise, die später nicht überraschen.",
    copy: "Durchrechnen, bevor Sie anbieten. Varianten, Szenarien, Deckungsbeitrag auf Knopfdruck.",
    href: "/features/kalkulation",
  },
  {
    id: "ausschreibungen",
    eyebrow: "08 · Ausschreibungen",
    title: "Vom Leistungsverzeichnis zur Angebotsdatei.",
    copy: "LV einlesen, Preise setzen, Angebot generieren. Keine Excel-Kette mehr.",
    href: "/features/ausschreibungen",
  },
  {
    id: "rechnungsprogramm",
    eyebrow: "09 · Rechnungsprogramm",
    title: "Rechnungen aus dem Einsatz heraus.",
    copy: "Aus dem Objekt direkt in die Rechnung. GoBD-konform, mit Ablage und Mahnung.",
    href: "/features/rechnungsprogramm",
  },
];

export default function FeaturesClientApple() {
  return (
    <>
      {/* Hero */}
      <section className="ts-scope relative overflow-hidden pt-8 md:pt-16 pb-12 md:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(85% 60% at 85% 0%, rgba(47, 91, 148, 0.08) 0%, transparent 55%), linear-gradient(180deg, #F7F9FC 0%, #ECF0F5 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[50vh] -z-10 opacity-30 ts-dot-grid pointer-events-none"
        />
        <div className="ts-container">
          <div className="flex flex-col gap-5 max-w-3xl">
            <ShareEyebrow>Funktionen</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="20ch">
              Alles, was Reinigung braucht
            </ShareHeadline>
            <ShareLede>
              Keine Add-ons, keine Zusatzmodule. Eine Plattform von der Erfassung bis zur Buchung.
            </ShareLede>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <ShareButton href="https://signup.taskeyapp.com" variant="primary" external>
                Kostenlos testen
              </ShareButton>
              <ShareButton href="/erstgespraech" variant="ghost">
                Demo buchen
              </ShareButton>
            </div>
          </div>
        </div>
      </section>

      {/* Feature tile grid */}
      <ShareSection tone="tinted" size="md" container="wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURE_DEEP.map((f) => (
            <Link
              key={f.id}
              href={f.href}
              className="ts-card ts-card-hover p-6 flex flex-col gap-3 h-full group"
              style={{ textDecoration: "none" }}
            >
              <ShareEyebrow>{f.eyebrow}</ShareEyebrow>
              <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)" }}>
                {f.title}
                <BrandDot />
              </h3>
              <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                {f.copy}
              </p>
              <span
                className="mt-auto pt-2 text-[0.85rem] font-medium inline-flex items-center gap-1"
                style={{ color: "var(--brand-signal-blue)" }}
              >
                Mehr erfahren
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  <path d="M3 6h6M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </ShareSection>

      {/* What's in every plan */}
      <ShareSection tone="canvas" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow>Immer dabei</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" maxWidth="22ch">
              In jedem Tarif enthalten
            </ShareHeadline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { title: "Unbegrenzt Mitarbeitende", copy: "Preis pro Betrieb, nicht pro Kopf." },
            { title: "Server in Deutschland", copy: "DSGVO, AV-Vertrag, dokumentierte Prozesse." },
            { title: "Automatische Updates", copy: "Neue Funktionen sofort, ohne Wartungsfenster." },
            { title: "Realer Support", copy: "Antwort typisch am selben Tag, kein Chatbot-Labyrinth." },
          ].map((it) => (
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
      </ShareSection>

      {/* Numbers band (navy) */}
      <ShareStatementBand
        eyebrow="Taskey in Zahlen"
        title="Eine Spur, neun Module, kein Papier"
        body="Unter zwei Minuten pro Erfassung, neun Module in einer Plattform, eine Spur vom Einsatz bis in DATEV. Kein Umweg, keine Insellösung."
        primaryHref="https://signup.taskeyapp.com"
        primaryLabel="Kostenlos starten"
        primaryExternal
        secondaryHref="/pricing"
        secondaryLabel="Abonnements ansehen"
      />

      {/* Final CTA */}
      <ShareSection tone="tinted" size="md">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <ShareHeadline level={2} size="lg" maxWidth="22ch">
            Taskey an Ihren Objekten zeigen
          </ShareHeadline>
          <ShareLede maxWidth="46ch">
            30 Minuten Demo mit echten Daten, echten Fragen. Danach entscheiden Sie.
          </ShareLede>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <ShareButton href="/erstgespraech" variant="primary">
              Erstgespräch buchen
            </ShareButton>
            <ShareButton href="/pricing" variant="ghost">
              Abonnements ansehen
            </ShareButton>
          </div>
        </div>
      </ShareSection>
    </>
  );
}
