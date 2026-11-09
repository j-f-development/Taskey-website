"use client";

import {
  AppleSection,
  AppleTile,
  AppleButton,
  AppleFeatureRow,
  AppleStatRow,
} from "@/components/apple";

const FEATURE_DEEP = [
  {
    id: "nfc-zeiterfassung",
    eyebrow: "NFC-Zeiterfassung",
    title: "Minutengenau. Fälschungssicher.",
    copy: "Ein wetterfester Tag am Objekt, ein Tap am Telefon. Zeit, Ort und Mitarbeiter sind dokumentiert, bevor jemand die Reinigung beginnt.",
    href: "/features/nfc-zeiterfassung",
  },
  {
    id: "einsatzplanung",
    eyebrow: "Einsatzplanung",
    title: "Sichtbar auf einer Fläche.",
    copy: "Alle Objekte, alle Teams, alle Schichten. Ändern Sie etwas, landet es in Sekunden beim Objekt.",
    href: "/features/einsatzplanung",
  },
  {
    id: "live-margen",
    eyebrow: "Live-Margen",
    title: "Objekt-Deckungsbeitrag in Echtzeit.",
    copy: "Stunden, Fahrten, Material gegen Objektpreis. Sie sehen pro Objekt, pro Monat, pro Team, was wirklich verdient wird.",
    href: "/features/live-margen",
  },
  {
    id: "leistungsnachweis",
    eyebrow: "Leistungsnachweis",
    title: "Nachweise, die eine Prüfung überleben.",
    copy: "Foto, Zeit, Mitarbeiter. Pro Zone, pro Schicht. In Sekunden als PDF für den Kunden oder den Auditor.",
    href: "/features/leistungsnachweis",
  },
  {
    id: "datev-export",
    eyebrow: "DATEV-Export",
    title: "Vom Einsatz direkt zum Steuerberater.",
    copy: "Lohnlauf, Buchung, Belege. In einer Spur, ein Export. Ihr Steuerberater importiert direkt, ohne Nachbearbeitung.",
    href: "/features/datev-export",
  },
  {
    id: "taskey-share",
    eyebrow: "Taskey Share",
    title: "Auftraggeber sehen, was läuft.",
    copy: "Jeder Kunde bekommt eine eigene Sicht auf seine Objekte. Reduziert Rückfragen, schafft Vertrauen.",
    href: "/features/taskey-share",
  },
  {
    id: "kalkulation",
    eyebrow: "Kalkulation",
    title: "Objektpreise, die später nicht überraschen.",
    copy: "Durchrechnen, bevor Sie anbieten. Varianten, Szenarien, Deckungsbeitrag auf Knopfdruck.",
    href: "/features/kalkulation",
  },
  {
    id: "ausschreibungen",
    eyebrow: "Ausschreibungen",
    title: "Vom Leistungsverzeichnis zur Angebotsdatei.",
    copy: "LV einlesen, Preise setzen, Angebot generieren. Keine Excel-Kette mehr.",
    href: "/features/ausschreibungen",
  },
  {
    id: "rechnungsprogramm",
    eyebrow: "Rechnungsprogramm",
    title: "Rechnungen aus dem Einsatz heraus.",
    copy: "Aus dem Objekt direkt in die Rechnung. GoBD-konform, mit Ablage und Mahnung.",
    href: "/features/rechnungsprogramm",
  },
];

export default function FeaturesClientApple() {
  return (
    <>
      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">Funktionen</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "18ch" }}>
            Alles, was Reinigung braucht. Konsequent integriert.
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "48ch" }}>
            Keine Add-ons, keine Zusatzmodule. Eine Plattform von der Erfassung bis zur Buchung.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="https://signup.taskeyapp.com" variant="primary" size="lg">
              Kostenlos testen
            </AppleButton>
            <AppleButton href="/erstgespraech" variant="secondary" size="lg">
              Demo buchen
            </AppleButton>
          </div>
        </div>
      </section>

      {/* Feature tile grid */}
      <AppleSection surface="soft" width="wide" rhythm="md">
        <div className="apl-triple">
          {FEATURE_DEEP.map((f) => (
            <AppleTile
              key={f.id}
              tone="canvas"
              size="md"
              eyebrow={f.eyebrow}
              title={f.title}
              copy={f.copy}
              cta={{ label: "Mehr erfahren", href: f.href }}
              align="start"
            />
          ))}
        </div>
      </AppleSection>

      {/* What's in every plan */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Immer dabei</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            In jedem Tarif enthalten.
          </h2>
        </div>
        <AppleFeatureRow
          columns={4}
          items={[
            { title: "Unbegrenzt Mitarbeitende", copy: "Preis pro Betrieb, nicht pro Kopf." },
            { title: "Server in Deutschland", copy: "DSGVO, AV-Vertrag, dokumentierte Prozesse." },
            { title: "Automatische Updates", copy: "Neue Funktionen sofort, ohne Wartungsfenster." },
            { title: "Realer Support", copy: "Antwort typisch am selben Tag, kein Chatbot-Labyrinth." },
          ]}
        />
      </AppleSection>

      {/* Numbers */}
      <AppleSection surface="noir" width="wide" rhythm="sm">
        <AppleStatRow
          tone="noir"
          stats={[
            { value: "< 2 Min.", label: "pro Erfassung", foot: "NFC statt Papier" },
            { value: "9 Module", label: "in einer Plattform", foot: "ohne Fremd-Lizenzen" },
            { value: "1 Spur", label: "Einsatz → Rechnung → DATEV", foot: "ohne Insellösung" },
          ]}
        />
      </AppleSection>

      {/* Final CTA */}
      <AppleSection surface="soft" width="narrow" rhythm="md">
        <div className="text-center">
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            Lassen Sie uns Taskey an Ihren Objekten zeigen.
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "46ch" }}>
            30 Minuten Demo mit echten Daten, echten Fragen. Danach entscheiden Sie.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="/erstgespraech" variant="primary" size="lg">
              Erstgespräch buchen
            </AppleButton>
            <AppleButton href="/pricing" variant="secondary" size="lg">
              Preise ansehen
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </>
  );
}
