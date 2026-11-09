"use client";

import {
  AppleSection,
  AppleTile,
  AppleButton,
  AppleFeatureRow,
  AppleStatRow,
} from "@/components/apple";

export default function PartnerschaftenClientApple() {
  return (
    <>
      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">Partnerprogramm</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "20ch" }}>
            Empfehlen Sie Taskey. Verdienen Sie dauerhaft.
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "52ch" }}>
            Für Berater, Verbände, IT-Dienstleister und Softwareanbieter im Umfeld der
            Gebäudereinigung. Transparente Provisionen, faire Laufzeiten.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="mailto:partner@taskeyapp.com" variant="primary" size="lg">
              Partner werden
            </AppleButton>
            <AppleButton href="/erstgespraech" variant="secondary" size="lg">
              Programm vorstellen lassen
            </AppleButton>
          </div>
        </div>
      </section>

      {/* Partner types */}
      <AppleSection surface="soft" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Für wen</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "26ch" }}>
            Drei Wege, Taskey weiterzugeben.
          </h2>
        </div>
        <div className="apl-triple">
          <AppleTile
            tone="canvas"
            size="md"
            eyebrow="Beratung"
            title="Berater & Interim-Manager"
            copy="Sie begleiten Reinigungs- oder FM-Betriebe in Transformation. Taskey ist ein nachweisbarer Baustein in Ihrem Ergebnis."
            align="start"
          />
          <AppleTile
            tone="canvas"
            size="md"
            eyebrow="Verband"
            title="Innungen & Verbände"
            copy="Sie empfehlen Ihren Mitgliedern Werkzeuge, die den Alltag tragen. Wir bauen Einführungsformate mit Ihnen."
            align="start"
          />
          <AppleTile
            tone="canvas"
            size="md"
            eyebrow="Software"
            title="ERP & FM-Software-Partner"
            copy="Komplementäre Anbieter mit eigener Kundenbasis in angrenzenden Prozessen. Wir integrieren beidseitig."
            align="start"
          />
        </div>
      </AppleSection>

      {/* How it works */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">So läuft es</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            Transparent in drei Schritten.
          </h2>
        </div>
        <AppleFeatureRow
          columns={3}
          items={[
            { title: "1 · Empfehlung", copy: "Sie empfehlen Taskey, wir markieren die Herkunft im System, nachvollziehbar und sauber." },
            { title: "2 · Conversion", copy: "Der Kunde startet bei Taskey, wir onboarden, Sie bleiben informiert über den Status." },
            { title: "3 · Provision", copy: "Für jeden gewonnenen Kunden erhalten Sie dauerhaft eine faire Provision." },
          ]}
        />
      </AppleSection>

      {/* Stats */}
      <AppleSection surface="soft" width="wide" rhythm="sm">
        <AppleStatRow
          stats={[
            { value: "20%", label: "typische Provision", foot: "individuell verhandelbar" },
            { value: "12+ Monate", label: "Laufzeit", foot: "Lifetime möglich" },
            { value: "Transparent", label: "Dashboard mit Status", foot: "pro Lead, pro Kunde" },
          ]}
        />
      </AppleSection>

      {/* CTA */}
      <AppleSection surface="noir" width="narrow" rhythm="md">
        <div className="text-center">
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "22ch" }}>
            Sprechen wir über eine Partnerschaft.
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "50ch", color: "#d2d2d7" }}>
            Ein 30-Minuten-Gespräch reicht, um Modell, Zielgruppe und Konditionen zu klären.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="mailto:partner@taskeyapp.com" variant="primary" size="lg">
              partner@taskeyapp.com
            </AppleButton>
            <AppleButton href="/erstgespraech" variant="secondary" size="lg">
              Termin vorschlagen
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </>
  );
}
