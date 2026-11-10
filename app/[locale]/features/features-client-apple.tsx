"use client";

import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareButton,
  ShareStatementBand,
} from "@/components/share/kit";
import FeaturesInteractive from "@/components/features/FeaturesInteractive";

export default function FeaturesClientApple() {
  return (
    <>
      {/* Hero */}
      <section className="ts-scope relative overflow-hidden pt-8 md:pt-16 pb-10 md:pb-14">
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
            <ShareHeadline level={1} size="xl" maxWidth="22ch">
              Taskey durchklicken
            </ShareHeadline>
            <ShareLede maxWidth="54ch">
              Jedes Modul mit einem Blick in die echte Oberfläche. Keine Prospekte, keine Screenshots. Wählen Sie oben eine Funktion, rechts läuft eine Demo.
            </ShareLede>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <ShareButton href="https://signup.taskeyapp.com" variant="primary" external>
                Kostenlos starten
              </ShareButton>
              <ShareButton href="/erstgespraech" variant="ghost">
                Demo buchen
              </ShareButton>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive tabs + demos */}
      <FeaturesInteractive />

      {/* Immer dabei strip */}
      <ShareSection tone="tinted" size="md" container="wide">
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

      {/* Navy statement */}
      <ShareStatementBand
        eyebrow="Taskey in Zahlen"
        title="Eine Spur, acht Module, kein Papier"
        body="Unter zwei Minuten pro Erfassung, acht Module in einer Plattform, eine Spur vom Einsatz bis in DATEV. Kein Umweg, keine Insellösung."
        primaryHref="https://signup.taskeyapp.com"
        primaryLabel="Kostenlos starten"
        primaryExternal
        secondaryHref="/pricing"
        secondaryLabel="Abonnements ansehen"
      />

      {/* Final CTA */}
      <ShareSection tone="canvas" size="md">
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
