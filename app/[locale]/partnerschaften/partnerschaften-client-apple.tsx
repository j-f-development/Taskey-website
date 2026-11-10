"use client";

import {
  ShareSection,
  ShareHeadline,
  ShareEyebrow,
  ShareLede,
  ShareButton,
  ShareStatementBand,
} from "@/components/share/kit";
import { BrandDot } from "@/components/BrandDot";

export default function PartnerschaftenClientApple() {
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
            <ShareEyebrow>Partnerprogramm</ShareEyebrow>
            <ShareHeadline level={1} size="xl" maxWidth="20ch">
              Empfehlen Sie Taskey. Verdienen Sie dauerhaft
            </ShareHeadline>
            <ShareLede maxWidth="52ch">
              Für Berater, Verbände, IT-Dienstleister und Softwareanbieter im Umfeld der Gebäudereinigung. Transparente Provisionen, faire Laufzeiten.
            </ShareLede>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <ShareButton href="mailto:partner@taskeyapp.com" variant="primary">
                Partner werden
              </ShareButton>
              <ShareButton href="/erstgespraech" variant="ghost">
                Programm vorstellen lassen
              </ShareButton>
            </div>
          </div>
        </div>
      </section>

      {/* Partner types */}
      <ShareSection tone="tinted" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow>Für wen</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" maxWidth="26ch">
              Drei Wege, Taskey weiterzugeben
            </ShareHeadline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { eyebrow: "Beratung", title: "Berater und Interim-Manager", copy: "Sie begleiten Reinigungs- oder FM-Betriebe in Transformation. Taskey ist ein nachweisbarer Baustein in Ihrem Ergebnis." },
            { eyebrow: "Verband", title: "Innungen und Verbände", copy: "Sie empfehlen Ihren Mitgliedern Werkzeuge, die den Alltag tragen. Wir bauen Einführungsformate mit Ihnen." },
            { eyebrow: "Software", title: "ERP und FM-Software-Partner", copy: "Komplementäre Anbieter mit eigener Kundenbasis in angrenzenden Prozessen. Wir integrieren beidseitig." },
          ].map((it) => (
            <div key={it.title} className="ts-card ts-card-hover p-6 flex flex-col gap-3">
              <ShareEyebrow>{it.eyebrow}</ShareEyebrow>
              <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)" }}>
                {it.title}
                <BrandDot />
              </h3>
              <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                {it.copy}
              </p>
            </div>
          ))}
        </div>
      </ShareSection>

      {/* How it works */}
      <ShareSection tone="canvas" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow>So läuft es</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" maxWidth="22ch">
              Transparent in drei Schritten
            </ShareHeadline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: "Empfehlung", copy: "Sie empfehlen Taskey, wir markieren die Herkunft im System, nachvollziehbar und sauber." },
            { title: "Conversion", copy: "Der Kunde startet bei Taskey, wir onboarden, Sie bleiben informiert über den Status." },
            { title: "Provision", copy: "Für jeden gewonnenen Kunden erhalten Sie dauerhaft eine faire Provision." },
          ].map((s, i) => (
            <div key={s.title} className="ts-card p-6 flex flex-col gap-3">
              <span className="font-mono text-[0.7rem]" style={{ color: "var(--ts-ink-faint)", letterSpacing: "0.08em" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)" }}>
                {s.title}
                <BrandDot />
              </h3>
              <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                {s.copy}
              </p>
            </div>
          ))}
        </div>
      </ShareSection>

      {/* Stats */}
      <ShareSection tone="tinted" size="sm" container="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { v: "20 %", l: "typische Provision", f: "individuell verhandelbar" },
            { v: "12+ Monate", l: "Laufzeit", f: "Lifetime möglich" },
            { v: "Transparent", l: "Dashboard mit Status", f: "pro Lead, pro Kunde" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col gap-2">
              <span className="ts-display" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", color: "var(--ts-ink)" }}>
                {s.v}
                <BrandDot />
              </span>
              <span className="text-[0.95rem] font-medium" style={{ color: "var(--ts-ink)" }}>
                {s.l}
              </span>
              <span className="text-[0.82rem]" style={{ color: "var(--ts-ink-muted)" }}>
                {s.f}
              </span>
            </div>
          ))}
        </div>
      </ShareSection>

      {/* CTA band */}
      <ShareStatementBand
        title="Sprechen wir über eine Partnerschaft"
        body="Ein 30-Minuten-Gespräch reicht, um Modell, Zielgruppe und Konditionen zu klären."
        primaryHref="mailto:partner@taskeyapp.com"
        primaryLabel="partner@taskeyapp.com"
        secondaryHref="/erstgespraech"
        secondaryLabel="Termin vorschlagen"
      />
    </>
  );
}
