"use client";

import {
  AppleSection,
  AppleTile,
  AppleButton,
  AppleFeatureRow,
} from "@/components/apple";

export default function AboutClientApple() {
  return (
    <>
      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">Über Taskey</p>
          <h1 className="apl-display apl-display-xl mx-auto" style={{ maxWidth: "18ch" }}>
            Gebaut von Leuten, die in den Objekten standen.
          </h1>
        </div>
      </section>

      {/* Mission */}
      <AppleSection surface="soft" width="narrow" rhythm="md">
        <div className="apl-tile apl-tile-canvas">
          <div className="apl-tile-inner items-start text-left">
            <p className="apl-eyebrow">Mission</p>
            <h2 className="apl-display apl-display-md mt-1" style={{ maxWidth: "24ch" }}>
              Reinigung soll messbar sein. Ohne Diskussion, ohne Papier.
            </h2>
          </div>
        </div>
      </AppleSection>

      {/* Principles */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Prinzipien</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            Wie wir Taskey bauen.
          </h2>
        </div>
        <AppleFeatureRow
          columns={3}
          items={[
            {
              title: "Substanz statt Show",
              copy: "Keine Features, die gut klingen und im Alltag enttäuschen. Erst live, dann sichtbar.",
            },
            {
              title: "Realer Support",
              copy: "Reale Menschen, die Reinigung verstehen. Kein Ticket-System mit Zeile 2.",
            },
            {
              title: "Made in Germany",
              copy: "Server in Deutschland, Entwicklung im Saarland, Datenschutz als Standard.",
            },
          ]}
        />
      </AppleSection>

      {/* Founders */}
      <AppleSection surface="noir" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2" style={{ color: "#2997ff" }}>
            Gründer
          </p>
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "24ch" }}>
            Drei Namen hinter jeder Entscheidung.
          </h2>
        </div>
        <div className="apl-triple">
          <AppleTile
            tone="noir"
            size="lg"
            eyebrow="Mitgründer"
            title="Fynn-Luca Schulz"
            align="start"
          />
          <AppleTile
            tone="noir"
            size="lg"
            eyebrow="Mitgründer"
            title="Julian Stosse"
            align="start"
          />
          <AppleTile
            tone="noir"
            size="lg"
            eyebrow="Mitgründer"
            title="Yukio Sato"
            align="start"
          />
        </div>
      </AppleSection>

      {/* CTA */}
      <AppleSection surface="soft" width="narrow" rhythm="md" hairlineTop>
        <div className="text-center">
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            Sprechen Sie mit uns.
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "48ch" }}>
            Keine Vertriebsschleife. Ein direktes Gespräch mit jemandem, der Taskey gebaut hat.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="/erstgespraech" variant="primary" size="lg">
              Erstgespräch buchen
            </AppleButton>
            <AppleButton href="mailto:info@taskeyapp.com" variant="secondary" size="lg">
              info@taskeyapp.com
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </>
  );
}
