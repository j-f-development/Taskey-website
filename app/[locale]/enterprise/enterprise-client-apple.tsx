"use client";

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

type Vertical = {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  bullets: string[];
};

const VERTICALS: Vertical[] = [
  {
    id: "oepnv",
    eyebrow: "ÖPNV",
    title: "Verkehrsbetriebe mit nachvollziehbarer Reinigungs-Spur",
    copy: "Haltestellen, Fahrzeuge, Depots. Jede Reinigung dokumentiert, geprüft, auswertbar, exportierbar für Aufsicht und Leitstelle.",
    bullets: [
      "Fahrzeug- und linienbezogene Nachweise",
      "Live-Status an die Leitstelle",
      "Audit-Trail für Verkehrsaufsicht",
    ],
  },
  {
    id: "grosskonzerne",
    eyebrow: "Großkonzerne",
    title: "Corporate FM mit Konzernrollen und SSO",
    copy: "Mehrstandort, mehrere Dienstleister, ein System. Rollen, Freigaben und Reports pro Gesellschaft, pro Objekt, pro Zuständigkeit.",
    bullets: [
      "SSO und SAML (Azure AD, Okta)",
      "Rollen pro Konzerngesellschaft",
      "Konsolidierte KPI-Reports",
    ],
  },
  {
    id: "kliniken",
    eyebrow: "Kliniken",
    title: "Hygienekritische Bereiche mit lückenloser Dokumentation",
    copy: "Jeder Abschnitt, jede Schicht, jeder Nachweis. Für Audit, Qualitätsmanagement und externe Prüfungen in Sekunden exportierbar.",
    bullets: [
      "Prüffeste Nachweise pro Zone",
      "Integration in KIS-Nebensysteme",
      "Datenschutzkonzept für Klinikumfelder",
    ],
  },
  {
    id: "logistik",
    eyebrow: "Logistik",
    title: "Hubs, Rampen, Sozialräume. Immer dokumentiert.",
    copy: "Für Logistiker, die ihre Unterauftragnehmer in derselben Spur führen wollen wie Eigenpersonal.",
    bullets: [
      "Flächen- und Schichtbezug",
      "Subunternehmer in einer Oberfläche",
      "Reports für Werksleitung",
    ],
  },
  {
    id: "handel",
    eyebrow: "Handel",
    title: "Filialen mit konsistenter Qualitätssicherung",
    copy: "Standortübergreifende Standards, lokale Teams. Sie sehen pro Filiale, pro Region, pro Netz.",
    bullets: [
      "Rollout auf Filialnetz",
      "Regionale Qualitätsreports",
      "Standardisierte Checklisten",
    ],
  },
  {
    id: "bildung",
    eyebrow: "Bildung",
    title: "Schulen, Hochschulen, Verwaltungsgebäude",
    copy: "Reinigungsintervalle, Ferienpläne, Prüfungsphasen. Taskey lebt mit dem Schulbetrieb.",
    bullets: [
      "Ferienkalender und Schichtpläne",
      "Reports für Schulträger",
      "Vergabefeste Dokumentation",
    ],
  },
];

export default function EnterpriseClientApple() {
  return (
    <>
      {/* Hero — navy */}
      <section className="ts-scope ts-ink-surface relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-20">
        <div className="ts-container-wide">
          <div className="max-w-3xl flex flex-col gap-5">
            <ShareEyebrow tone="sky">Taskey Enterprise</ShareEyebrow>
            <ShareHeadline level={1} size="xl" tone="inv" maxWidth="18ch">
              Reinigung im Konzern-Maßstab
            </ShareHeadline>
            <ShareLede tone="inv" maxWidth="52ch">
              Für Verkehrsbetriebe, Großkonzerne, Kliniken, Logistik, Handel und Bildung. Rollen, Prüfbarkeit und Mehrstandort-Betrieb sind eingebaut, nicht angeklebt.
            </ShareLede>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <ShareButton href="/erstgespraech" variant="onink">
                Beratung anfragen
              </ShareButton>
              <ShareButton href="/pricing" variant="onink-ghost">
                Enterprise-Tarif ansehen
              </ShareButton>
            </div>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <ShareSection tone="canvas" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow>Pfeiler</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" maxWidth="22ch">
              Was Enterprise bei Taskey bedeutet
            </ShareHeadline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              id: "security",
              eyebrow: "Security",
              title: "SSO, SAML und Protokoll",
              copy: "Azure AD, Okta oder LDAP. Jede Aktion protokolliert, jede Rolle dokumentiert.",
            },
            {
              id: "compliance",
              eyebrow: "Compliance",
              title: "Prüffest und DSGVO-fest",
              copy: "Server in Deutschland. AV-Verträge. Audit-Trail. Reports, die einer externen Prüfung standhalten.",
            },
            {
              id: "scale",
              eyebrow: "Scale",
              title: "Mehrstandort. Mehrmandant.",
              copy: "Konsolidierte KPIs auf Konzernebene, operative Hoheit auf Objektebene.",
            },
          ].map((p) => (
            <a key={p.id} href={`#${p.id}`} className="ts-card ts-card-hover p-6 flex flex-col gap-3 h-full" style={{ textDecoration: "none" }}>
              <ShareEyebrow>{p.eyebrow}</ShareEyebrow>
              <h3 className="ts-headline" style={{ fontSize: "1.2rem", color: "var(--ts-ink)" }}>
                {p.title}
                <BrandDot />
              </h3>
              <p className="text-[0.95rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)" }}>
                {p.copy}
              </p>
            </a>
          ))}
        </div>
      </ShareSection>

      {/* Stats */}
      <ShareSection tone="tinted" size="sm" container="wide">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { v: "100+", l: "Standorte in einem Mandanten", f: "ohne Umbau" },
            { v: "SOC-fit", l: "Audit-Trail für Prüfung", f: "aus Standard-Konfiguration" },
            { v: "DE", l: "Hosting in Deutschland", f: "zertifizierte Rechenzentren" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col gap-2">
              <span className="ts-display" style={{ fontSize: "clamp(2rem, 4.5vw, 3rem)", color: "var(--ts-ink)" }}>
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

      {/* Industries */}
      <ShareSection tone="canvas" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow>Branchen</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" maxWidth="24ch">
              Konfiguriert für die Umgebung, in der Sie prüfbar sein müssen
            </ShareHeadline>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {VERTICALS.map((v) => (
            <div
              id={v.id}
              key={v.id}
              className="ts-card p-7"
            >
              <div className="grid lg:grid-cols-[2fr_1fr] gap-6 items-start">
                <div>
                  <ShareEyebrow>{v.eyebrow}</ShareEyebrow>
                  <h3 className="ts-headline mt-2" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.75rem)", color: "var(--ts-ink)", maxWidth: "26ch" }}>
                    {v.title}
                    <BrandDot />
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-[1.6]" style={{ color: "var(--ts-ink-muted)", maxWidth: "58ch" }}>
                    {v.copy}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {v.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[0.92rem] leading-[1.55]" style={{ color: "var(--ts-ink-soft)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 shrink-0">
                        <path d="M3.5 8.2l3 3L12.5 5" stroke="var(--brand-signal-blue)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </ShareSection>

      {/* Compliance band */}
      <ShareSection id="compliance" tone="ink" size="md" container="wide">
        <div className="text-center mb-10">
          <ShareEyebrow tone="sky">Compliance</ShareEyebrow>
          <div className="mt-3 flex justify-center">
            <ShareHeadline level={2} size="lg" tone="inv" maxWidth="22ch">
              Reports, die eine Prüfung überleben
            </ShareHeadline>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Audit-Trail", c: "Jede Erfassung, jede Änderung, jede Freigabe. Zeit, Nutzer, Objekt, unveränderlich gespeichert." },
            { t: "Rollenmodell", c: "Freigaben, Sichtbarkeiten und Systemrollen pro Gesellschaft, Objekt und Region konfigurierbar." },
            { t: "DSGVO und AV", c: "AV-Vertrag, TOM, dokumentierte Prozesse. Server in Deutschland." },
          ].map((it) => (
            <div key={it.t} className="flex flex-col gap-2">
              <h3 className="ts-headline" style={{ fontSize: "1.1rem", color: "var(--brand-white)" }}>
                {it.t}
              </h3>
              <p className="text-[0.92rem] leading-[1.6]" style={{ color: "rgba(247,249,252,0.72)" }}>
                {it.c}
              </p>
            </div>
          ))}
        </div>
      </ShareSection>

      {/* Final CTA */}
      <ShareSection tone="tinted" size="md">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <ShareHeadline level={2} size="lg" maxWidth="22ch">
            Ihre Anforderungen gemeinsam durchgehen
          </ShareHeadline>
          <ShareLede maxWidth="48ch">
            30 Minuten mit einem Enterprise-Ansprechpartner. Mit NDA, wenn es sein muss.
          </ShareLede>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <ShareButton href="/erstgespraech" variant="primary">
              Erstgespräch buchen
            </ShareButton>
            <ShareButton href="/kunden" variant="ghost">
              Kundenprojekte ansehen
            </ShareButton>
          </div>
        </div>
      </ShareSection>
    </>
  );
}
