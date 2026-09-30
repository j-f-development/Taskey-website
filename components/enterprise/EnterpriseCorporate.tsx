"use client";

import { useState } from "react";
import Link from "next/link";

const PILLARS = [
  {
    id: "rollout",
    title: "Rollout",
    body: "Discovery, Mapping, Pilotstandort, stufenweiser Rollout. Kein Big Bang. Jede Phase mit definierten Erfolgskriterien und einem gemeinsamen Steering.",
    items: [
      "Discovery-Workshop mit IT, HR und Operations",
      "Mapping der Objekt-, Rollen- und Kostenstellenlogik",
      "Pilot an einem Standort mit klaren Abbruchkriterien",
      "Skalierter Rollout mit Playbook je Standortkategorie",
    ],
  },
  {
    id: "governance",
    title: "Governance",
    body: "Zentrale Steuerung mit delegierter Umsetzung. Konfiguration, Rollenmodell und Freigabestufen bleiben unternehmensweit einheitlich; operative Ausgestaltung liegt beim Standort.",
    items: [
      "Zentrales Rollenmodell mit Vererbung",
      "Standort-Delegation für operative Konfiguration",
      "Change-Prozess für Konfigurations- und Mapping-Änderungen",
      "Reporting-Standards und Kennzahlen definiert im Rollout",
    ],
  },
  {
    id: "support",
    title: "Support",
    body: "Support-Modelle, die an das jeweilige Umfeld angepasst sind — vom Standard-Support bis zum benannten Ansprechpartner für Enterprise-Setups mit Ausschreibungs- und Betriebsanforderungen.",
    items: [
      "Standard-Support innerhalb der Geschäftszeiten",
      "Enterprise-Support mit definierten Reaktionszeiten",
      "Benannte Ansprechpartner auf Kundenseite und bei Taskey",
      "Quartalsweises Service Review mit Kennzahlen",
    ],
  },
  {
    id: "sla",
    title: "SLA",
    body: "Verfügbarkeit, Reaktionszeit und Wiederherstellung als vertragliche Zusagen. Für regulierte Umfelder mit definierten Anforderungen an Betriebsstabilität.",
    items: [
      "Verfügbarkeit vertraglich zugesichert",
      "Reaktionszeiten nach Kritikalität gestaffelt",
      "Wiederherstellungszeiten mit definiertem RTO/RPO",
      "Statusseite und Incident-Kommunikation",
    ],
  },
  {
    id: "migration",
    title: "Migration",
    body: "Migration aus Excel-Landschaften, Legacy-Zeiterfassungs- oder Objektmanagement-Systemen. Strukturierte Datenübernahme mit Test-, Delta- und Cutover-Phase.",
    items: [
      "Datenmodellierung aus Bestandssystemen",
      "Testmigration in isolierte Umgebung",
      "Delta-Migration bei Parallelbetrieb",
      "Cutover-Plan mit Rollback-Pfad",
    ],
  },
  {
    id: "custom",
    title: "Custom Integrations",
    body: "Individuelle Anbindungen über die öffentliche REST-API oder — bei entsprechender Komplexität — als Custom Connector durch Taskey oder einen Implementierungspartner.",
    items: [
      "Integrations-Scoping mit klarem Umfang",
      "Trennung Produkt-Roadmap vs. Custom Work",
      "Versionierte Custom Endpoints",
      "Betriebsübernahme im laufenden Support",
    ],
  },
];

const PROCUREMENT_ITEMS = [
  "AVV/DPA in Deutsch und Englisch",
  "Technische und organisatorische Maßnahmen (TOMs)",
  "Subprozessorenliste mit Zweckbindung",
  "Sicherheits-Fragebogen als vorbereitete Vorlage",
  "SLA-Optionen mit Reaktions- und Wiederherstellungszeiten",
  "Architekturübersicht und Datenflussdiagramme",
];

export default function EnterpriseCorporate() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    employees: "",
    locations: "",
    existingSystem: "",
    integration: "",
    dataFlows: "",
    sso: "unspecified",
    timeline: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function update<K extends keyof typeof formState>(key: K, value: (typeof formState)[K]) {
    setFormState((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "enterprise-discovery",
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          role: formState.role,
          employees: formState.employees,
          locations: formState.locations,
          existingSystem: formState.existingSystem,
          integration: formState.integration,
          dataFlows: formState.dataFlows,
          sso: formState.sso,
          timeline: formState.timeline,
          notes: formState.notes,
          sourcePath: typeof window !== "undefined" ? window.location.pathname : "/enterprise",
          locale: "de",
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Der Versand ist fehlgeschlagen. Bitte kurz per E-Mail melden.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Der Versand ist fehlgeschlagen. Bitte kurz per E-Mail melden.");
    } finally {
      setSending(false);
    }
  }

  return (
    <main className="tkc-canvas">
      {/* Hero */}
      <section className="tkc-section-sm" style={{ paddingTop: "clamp(6rem, 10vw, 8rem)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Enterprise</div>
          <h1
            className="tkc-display mt-4"
            style={{ fontSize: "clamp(2.15rem, 4.5vw, 3.4rem)", color: "var(--tkc-ink)" }}
          >
            Für Organisationen, in denen IT, Einkauf<br />
            und Fachbereich gemeinsam entscheiden.
          </h1>
          <p className="tkc-lead mt-6 max-w-[760px]">
            Rollout, Governance, Support und SLA sind eigene Disziplinen — nicht Beiwerk.
            Taskey Enterprise deckt sie strukturiert ab: mit dokumentierten Prozessen,
            klaren Verantwortlichkeiten und einem Procurement-Paket, das den Freigabeweg
            in Ihrer Organisation kennt.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#kontakt" className="tkc-btn tkc-btn-primary">
              Systemlandschaft besprechen
            </a>
            <a href="#procurement" className="tkc-btn tkc-btn-ghost">
              Procurement-Paket
            </a>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="tkc-section" style={{ background: "var(--tkc-canvas-tinted)" }}>
        <div className="tkc-container-wide">
          <div className="tkc-eyebrow">Enterprise-Disziplinen</div>
          <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.7rem, 3vw, 2.4rem)", color: "var(--tkc-ink)" }}>
            Sechs Themen, die den Unterschied ausmachen.
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PILLARS.map((p) => (
              <div key={p.id} id={p.id} className="tkc-card-strong">
                <div className="tkc-eyebrow">{p.title}</div>
                <p className="mt-3" style={{ fontSize: "0.94rem", color: "var(--tkc-ink-soft)", lineHeight: 1.6 }}>
                  {p.body}
                </p>
                <ul className="mt-4 space-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex gap-2.5" style={{ fontSize: "0.88rem", color: "var(--tkc-ink)", lineHeight: 1.5 }}>
                      <span className="tkc-mono" style={{ color: "var(--tkc-ink-faint)", fontSize: "0.72rem", marginTop: "0.2rem" }}>·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Procurement */}
      <section id="procurement" className="tkc-section" style={{ background: "var(--tkc-canvas-dark)", color: "#eef1f5" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">
            <div>
              <div className="tkc-eyebrow" style={{ color: "rgba(255,255,255,0.55)" }}>
                Procurement Readiness
              </div>
              <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", color: "#fff" }}>
                Ein Paket. Alle Freigabewege bedient.
              </h2>
              <p className="tkc-lead mt-4" style={{ color: "rgba(238,241,245,0.72)" }}>
                Damit ein Enterprise-Kauf durch IT, Datenschutz, Einkauf und Fachbereich läuft, brauchen alle
                Beteiligten die richtigen Unterlagen. Das Procurement-Paket bündelt sie.
              </p>
            </div>
            <div>
              <ul className="space-y-3">
                {PROCUREMENT_ITEMS.map((it) => (
                  <li key={it} className="flex gap-3">
                    <span className="tkc-mono" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.72rem", marginTop: "0.35rem" }}>→</span>
                    <span style={{ fontSize: "0.94rem", color: "rgba(238,241,245,0.9)", lineHeight: 1.55 }}>{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#kontakt" className="tkc-btn tkc-btn-onink">
                  Procurement-Paket anfordern
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Discovery form */}
      <section id="kontakt" className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
        <div className="tkc-container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 items-start">
            <div>
              <div className="tkc-eyebrow">Systemlandschaft besprechen</div>
              <h2 className="tkc-headline mt-3" style={{ fontSize: "clamp(1.6rem, 2.6vw, 2rem)", color: "var(--tkc-ink)" }}>
                30 Minuten mit einem Solution Engineer.
              </h2>
              <p className="tkc-body mt-4">
                Wir gehen Ihre bestehende ERP-, HR- oder Payroll-Landschaft durch, mappen die relevanten
                Objekte und Datenflüsse und benennen konkret, welche Integrationen nativ, per API oder per
                Partner-Connector abbildbar sind.
              </p>
              <ul className="mt-6 space-y-2 tkc-mono" style={{ fontSize: "0.82rem", color: "var(--tkc-ink-muted)" }}>
                <li>· Discovery statt Sales-Pitch</li>
                <li>· Antwortzeit werktags &lt; 24h</li>
                <li>· NDA auf Anfrage vor Gespräch</li>
              </ul>
            </div>

            <div className="tkc-panel">
              {submitted ? (
                <div>
                  <div className="tkc-eyebrow">Anfrage übermittelt</div>
                  <h3 className="mt-3" style={{ fontSize: "1.15rem", fontWeight: 600, color: "var(--tkc-ink)" }}>
                    Vielen Dank. Wir melden uns werktags innerhalb von 24 Stunden.
                  </h3>
                  <p className="mt-3" style={{ fontSize: "0.92rem", color: "var(--tkc-ink-soft)", lineHeight: 1.55 }}>
                    Ein Solution Engineer wird Ihre Angaben durchgehen und einen Terminvorschlag machen.
                    Für sehr eilige Fälle: <a href="mailto:enterprise@taskeyapp.com" style={{ color: "var(--tkc-accent)" }}>enterprise@taskeyapp.com</a>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="tkc-btn tkc-btn-ghost tkc-btn-sm mt-6"
                  >
                    Weitere Anfrage stellen
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Name">
                      <input required value={formState.name} onChange={(e) => update("name", e.target.value)} className={INPUT_CLASS} placeholder="Vor- und Nachname" />
                    </Field>
                    <Field label="E-Mail">
                      <input required type="email" value={formState.email} onChange={(e) => update("email", e.target.value)} className={INPUT_CLASS} placeholder="name@firma.de" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Telefon (optional)">
                      <input value={formState.phone} onChange={(e) => update("phone", e.target.value)} className={INPUT_CLASS} placeholder="+49 …" />
                    </Field>
                    <Field label="Unternehmen">
                      <input required value={formState.company} onChange={(e) => update("company", e.target.value)} className={INPUT_CLASS} />
                    </Field>
                  </div>
                  <Field label="Rolle">
                    <input value={formState.role} onChange={(e) => update("role", e.target.value)} className={INPUT_CLASS} placeholder="IT · Operations · Einkauf …" />
                  </Field>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Mitarbeitende (ca.)">
                      <select value={formState.employees} onChange={(e) => update("employees", e.target.value)} className={INPUT_CLASS}>
                        <option value="">bitte wählen</option>
                        <option value="50-199">50–199</option>
                        <option value="200-499">200–499</option>
                        <option value="500-999">500–999</option>
                        <option value="1000+">1.000+</option>
                      </select>
                    </Field>
                    <Field label="Standorte / Objekte (ca.)">
                      <input value={formState.locations} onChange={(e) => update("locations", e.target.value)} className={INPUT_CLASS} placeholder="z. B. 12 Standorte · 480 Objekte" />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Bestehendes ERP / HR / Payroll">
                      <input value={formState.existingSystem} onChange={(e) => update("existingSystem", e.target.value)} className={INPUT_CLASS} placeholder="z. B. SAP HCM · Odoo · DATEV" />
                    </Field>
                    <Field label="Gewünschte Integration">
                      <input value={formState.integration} onChange={(e) => update("integration", e.target.value)} className={INPUT_CLASS} placeholder="z. B. Zeitdaten in SAP HCM" />
                    </Field>
                  </div>

                  <Field label="Wichtige Datenflüsse">
                    <textarea rows={3} value={formState.dataFlows} onChange={(e) => update("dataFlows", e.target.value)} className={INPUT_CLASS} placeholder="Welche Objekte, in welche Richtung, in welcher Frequenz." />
                  </Field>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="SSO / Identity-Anforderung">
                      <select value={formState.sso} onChange={(e) => update("sso", e.target.value)} className={INPUT_CLASS}>
                        <option value="unspecified">noch nicht entschieden</option>
                        <option value="entra">Microsoft Entra ID</option>
                        <option value="okta">Okta</option>
                        <option value="saml">anderer SAML/OIDC-Provider</option>
                        <option value="none">nicht erforderlich</option>
                      </select>
                    </Field>
                    <Field label="Rollout-Zeitraum">
                      <input value={formState.timeline} onChange={(e) => update("timeline", e.target.value)} className={INPUT_CLASS} placeholder="z. B. Q1 2027" />
                    </Field>
                  </div>

                  <Field label="Architektur- / Security-Anforderungen (optional)">
                    <textarea rows={3} value={formState.notes} onChange={(e) => update("notes", e.target.value)} className={INPUT_CLASS} placeholder="Besonderheiten zu Hosting, ISO-Anforderungen, NDA-Wunsch, Ausschreibungsrahmen …" />
                  </Field>

                  {error ? (
                    <div
                      className="tkc-card"
                      style={{
                        borderColor: "rgba(161, 28, 28, 0.24)",
                        background: "rgba(161, 28, 28, 0.05)",
                        color: "var(--tkc-bad)",
                        padding: "0.85rem 1rem",
                        fontSize: "0.88rem",
                      }}
                    >
                      {error}
                    </div>
                  ) : null}
                  <div className="pt-2 flex items-center gap-3 flex-wrap">
                    <button type="submit" disabled={sending} className="tkc-btn tkc-btn-primary" style={{ opacity: sending ? 0.6 : 1 }}>
                      {sending ? "Wird gesendet …" : "Anfrage senden"}
                    </button>
                    <span className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.76rem" }}>
                      · Antwort werktags &lt; 24h
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const INPUT_CLASS = "tkc-field-input";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span
        className="tkc-mono"
        style={{
          color: "var(--tkc-ink-muted)",
          fontSize: "0.7rem",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          display: "block",
          marginBottom: "0.4rem",
        }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}
