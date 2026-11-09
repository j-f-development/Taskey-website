"use client";

import {
  AppleSection,
  AppleTile,
  AppleButton,
  AppleFeatureRow,
  AppleQuote,
  AppleStatRow,
} from "@/components/apple";

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
      "Fahrzeug- und Linienbezogene Nachweise",
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
      "SSO & SAML (Azure AD, Okta)",
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
      {/* Hero */}
      <section className="apl-surface-noir apl-on-noir pt-14 pb-10">
        <div className="apl-container-wide text-center">
          <p className="apl-eyebrow mb-2" style={{ color: "#2997ff" }}>
            Taskey Enterprise
          </p>
          <h1
            className="apl-display apl-display-xl mx-auto text-white"
            style={{ maxWidth: "18ch" }}
          >
            Reinigung im Konzern-Maßstab.
          </h1>
          <p
            className="apl-lede mt-5 mx-auto"
            style={{ maxWidth: "52ch", color: "#d2d2d7" }}
          >
            Für Verkehrsbetriebe, Großkonzerne, Kliniken, Logistik, Handel und Bildung.
            Rollen, Prüfbarkeit und Mehrstandort-Betrieb sind eingebaut, nicht angeklebt.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="/erstgespraech" variant="primary" size="lg">
              Beratung anfragen
            </AppleButton>
            <AppleButton href="/pricing" variant="secondary" size="lg">
              Enterprise-Tarif ansehen
            </AppleButton>
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Pfeiler</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            Was Enterprise bei Taskey bedeutet.
          </h2>
        </div>
        <div className="apl-triple">
          <AppleTile
            tone="canvas"
            size="lg"
            eyebrow="Security"
            title="SSO, SAML und Protokoll"
            copy="Azure AD, Okta oder LDAP. Jede Aktion protokolliert, jede Rolle dokumentiert."
            cta={{ label: "Zur Security", href: "#security" }}
          />
          <AppleTile
            tone="canvas"
            size="lg"
            eyebrow="Compliance"
            title="Prüffest und DSGVO-fest"
            copy="Server in Deutschland. AV-Verträge. Audit-Trail. Reports, die einer externen Prüfung standhalten."
            cta={{ label: "Zur Compliance", href: "#compliance" }}
          />
          <AppleTile
            tone="canvas"
            size="lg"
            eyebrow="Scale"
            title="Mehrstandort. Mehrmandant."
            copy="Konsolidierte KPIs auf Konzernebene, operative Hoheit auf Objektebene."
            cta={{ label: "Zur Skalierung", href: "#scale" }}
          />
        </div>
      </AppleSection>

      {/* Stats */}
      <AppleSection surface="soft" width="wide" rhythm="sm">
        <AppleStatRow
          stats={[
            { value: "100+", label: "Standorte in einem Mandanten", foot: "ohne Umbau" },
            { value: "SOC-fit", label: "Audit-Trail für Prüfung", foot: "aus Standard-Konfiguration" },
            { value: "DE", label: "Hosting in Deutschland", foot: "zertifizierte Rechenzentren" },
          ]}
        />
      </AppleSection>

      {/* Industries */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Branchen</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "24ch" }}>
            Konfiguriert für die Umgebung, in der Sie prüfbar sein müssen.
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {VERTICALS.map((v, i) => (
            <div
              id={v.id}
              key={v.id}
              className={`apl-tile ${i % 2 === 0 ? "apl-tile-canvas" : ""}`}
            >
              <div className="apl-tile-inner grid lg:grid-cols-[2fr_1fr] gap-6 items-start">
                <div>
                  <p className="apl-eyebrow">{v.eyebrow}</p>
                  <h3 className="apl-display apl-display-md mt-1" style={{ maxWidth: "26ch" }}>
                    {v.title}
                  </h3>
                  <p className="apl-body mt-3 max-w-[58ch]">{v.copy}</p>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {v.bullets.map((b) => (
                    <li
                      key={b}
                      className="apl-small flex items-start gap-2 text-[color:var(--apl-ink-soft)]"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 shrink-0">
                        <path d="M3.5 8.2l3 3L12.5 5" stroke="var(--apl-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </AppleSection>

      {/* Compliance feature strip */}
      <AppleSection surface="noir" width="wide" rhythm="md" id="compliance">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2" style={{ color: "#2997ff" }}>
            Compliance
          </p>
          <h2 className="apl-display apl-display-lg mx-auto text-white" style={{ maxWidth: "22ch" }}>
            Reports, die eine Prüfung überleben.
          </h2>
        </div>
        <AppleFeatureRow
          tone="noir"
          columns={3}
          items={[
            { title: "Audit-Trail", copy: "Jede Erfassung, jede Änderung, jede Freigabe. Zeit, Nutzer, Objekt, unveränderlich gespeichert." },
            { title: "Rollenmodell", copy: "Freigaben, Sichtbarkeiten und Systemrollen pro Gesellschaft, Objekt und Region konfigurierbar." },
            { title: "DSGVO & AV", copy: "AV-Vertrag, TOM, dokumentierte Prozesse. Server in Deutschland." },
          ]}
        />
      </AppleSection>

      {/* Quote */}
      <AppleSection surface="canvas" width="narrow" rhythm="md">
        <AppleQuote
          quote="Wir brauchten ein System, das in unsere Konzern-IT passt und operativ nicht im Weg steht. Taskey erfüllt beides."
          cite="Konzernleitung Facility Management"
        />
      </AppleSection>

      {/* CTA */}
      <AppleSection surface="soft" width="narrow" rhythm="md" hairlineTop>
        <div className="text-center">
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            Lassen Sie uns Ihre Anforderungen durchgehen.
          </h2>
          <p className="apl-lede mt-4 mx-auto" style={{ maxWidth: "48ch" }}>
            30 Minuten mit einem Enterprise-Ansprechpartner. Mit NDA, wenn es sein muss.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-5">
            <AppleButton href="/erstgespraech" variant="primary" size="lg">
              Erstgespräch buchen
            </AppleButton>
            <AppleButton href="/kunden" variant="secondary" size="lg">
              Kundenprojekte ansehen
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </>
  );
}
