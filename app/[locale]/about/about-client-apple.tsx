"use client";

import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareBody,
  ShareButton,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

export default function AboutClientApple() {
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
            <ShareEyebrow>Über Taskey</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="20ch">
              Gebaut von Leuten, die in den Objekten standen
            </ShareHeadline>
          </div>
        </div>
      </section>

      {/* Mission */}
      <ShareSection tone="tinted" size="md">
        <div className="max-w-3xl">
          <ShareEyebrow>Mission</ShareEyebrow>
          <div className="mt-3">
            <ShareHeadline level={2} size="md" maxWidth="24ch">
              Reinigung soll messbar sein. Ohne Diskussion, ohne Papier
            </ShareHeadline>
          </div>
        </div>
      </ShareSection>

      {/* Principles */}
      <ShareSection tone="canvas" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow>Prinzipien</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" maxWidth="22ch">
              Wie wir Taskey bauen
            </ShareHeadline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              t: "Substanz statt Show",
              c: "Keine Features, die gut klingen und im Alltag enttäuschen. Erst live, dann sichtbar.",
            },
            {
              t: "Realer Support",
              c: "Reale Menschen, die Reinigung verstehen. Kein Ticket-System mit Zeile 2.",
            },
            {
              t: "Made in Germany",
              c: "Server in Deutschland, Entwicklung im Saarland, Datenschutz als Standard.",
            },
          ].map((it) => (
            <div key={it.t} className="ts-card ts-card-hover p-6 flex flex-col gap-3">
              <h3 className="ts-headline" style={{ fontSize: "1.15rem", color: "var(--ts-ink)" }}>
                {it.t}
                <BrandDot />
              </h3>
              <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                {it.c}
              </p>
            </div>
          ))}
        </div>
      </ShareSection>

      {/* Founders */}
      <ShareSection tone="ink" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow tone="sky">Gründer</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" tone="inv" maxWidth="24ch">
              Drei Namen hinter jeder Entscheidung
            </ShareHeadline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {["Fynn-Luca Schulz", "Julian Stosse", "Yukio Sato"].map((name) => (
            <div
              key={name}
              className="p-6 flex flex-col gap-2"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--ts-r-card)",
              }}
            >
              <ShareEyebrow tone="sky">Mitgründer</ShareEyebrow>
              <h3 className="ts-headline mt-1" style={{ fontSize: "1.3rem", color: "var(--brand-white)" }}>
                {name}
              </h3>
            </div>
          ))}
        </div>
      </ShareSection>

      {/* CTA */}
      <ShareSection tone="tinted" size="md">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <ShareHeadline level={2} size="lg" maxWidth="22ch">
            Sprechen Sie mit uns
          </ShareHeadline>
          <ShareLede maxWidth="48ch">
            Keine Vertriebsschleife. Ein direktes Gespräch mit jemandem, der Taskey gebaut hat.
          </ShareLede>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <ShareButton href="/erstgespraech" variant="primary">
              Erstgespräch buchen
            </ShareButton>
            <ShareButton href="mailto:info@taskeyapp.com" variant="ghost">
              info@taskeyapp.com
            </ShareButton>
          </div>
        </div>
      </ShareSection>
    </>
  );
}
