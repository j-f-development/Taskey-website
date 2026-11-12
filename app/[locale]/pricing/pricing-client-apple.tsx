"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import {
  AppleSection,
  AppleButton,
  AppleFeatureRow,
} from "@/components/apple";

type Feature = { label: string; strike?: boolean };

type Plan = {
  id: "beginner" | "professional" | "business" | "enterprise";
  name: string;
  price: string;
  priceSuffix?: string;
  tagline: string;
  features: (string | Feature)[];
  ctaLabel: string;
  ctaHref: string;
  featured?: boolean;
};

type Cadence = "monthly" | "annual";

const BASE_PLANS: Plan[] = [
  {
    id: "beginner",
    name: "Beginner",
    price: "69",
    priceSuffix: "/Monat",
    tagline: "Der saubere Einstieg. Zeiterfassung, Nachweise, Finanzen.",
    features: [
      "NFC-Zeiterfassung",
      "Nachweise mit Foto",
      "Finanztools",
      "Server in Deutschland",
      { label: "Personalplanung", strike: true },
      { label: "Einsatzplanung", strike: true },
    ],
    ctaLabel: "Abo auswählen",
    ctaHref: "https://signup.taskeyapp.com",
  },
  {
    id: "professional",
    name: "Pro",
    price: "179",
    priceSuffix: "/Monat",
    tagline: "Mit Personalplanung. Bis zu 100 Objekte.",
    features: [
      "Alles aus Beginner",
      "Personalplanung und Einsatzplanung",
      "Lohnabrechnung integriert",
      "Auftraggeber-Portal",
      "Live-Margen und Reports",
      "Bis zu 100 angelegte Objekte",
    ],
    ctaLabel: "Abo auswählen",
    ctaHref: "https://signup.taskeyapp.com",
    featured: true,
  },
  {
    id: "business",
    name: "Business",
    price: "249",
    priceSuffix: "/Monat",
    tagline: "Ohne Grenzen. Unbegrenzt Objekte und Standorte.",
    features: [
      "Alles aus Pro",
      "Unbegrenzt angelegte Objekte",
      "Unbegrenzt Standorte",
      "DATEV-Export",
      "Erweiterte Rollen und Rechte",
      "Priorisierter Support",
    ],
    ctaLabel: "Abo auswählen",
    ctaHref: "https://signup.taskeyapp.com",
  },
];

const ENTERPRISE_PLAN: Plan = {
  id: "enterprise",
  name: "Enterprise",
  price: "Individuell",
  tagline: "Für Konzerne, Kliniken und Verkehrsbetriebe.",
  features: [
    "SSO & SAML",
    "API & PMS-Integrationen",
    "Dediziertes SLA",
    "Individuelle Workflows",
    "Dedicated Customer Success",
  ],
  ctaLabel: "Enterprise anfragen",
  ctaHref: "/erstgespraech",
};

export default function PricingClientApple() {
  const { t: _t } = useLanguage();
  const [cadence, setCadence] = useState<Cadence>("monthly");

  const discount = 0.15;
  const plans = BASE_PLANS.map((p) => {
    const monthlyBase = parseInt(p.price, 10);
    const effectiveMonthly =
      cadence === "annual"
        ? Math.round(monthlyBase * (1 - discount))
        : monthlyBase;
    const yearlyTotal = effectiveMonthly * 12;
    const yearlySavings = monthlyBase * 12 - yearlyTotal;
    return {
      ...p,
      price: effectiveMonthly.toString(),
      yearlyTotal,
      yearlySavings,
    };
  });

  return (
    <>
      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container text-center">
          <p className="apl-eyebrow mb-2">Abonnements</p>
          <h1
            className="apl-display apl-display-xl mx-auto"
            style={{ maxWidth: "16ch" }}
          >
            Transparent. Pro Betrieb. Nicht pro Nutzer.
          </h1>
          <p className="apl-lede mt-5 mx-auto" style={{ maxWidth: "48ch" }}>
            Ein fester Monatspreis. Unbegrenzt viele Mitarbeitende. Alle Updates inklusive.
          </p>

          {/* Cadence toggle */}
          <div className="mt-8 inline-flex items-center gap-1 rounded-full bg-[color:var(--apl-canvas-soft)] p-1 ring-1 ring-black/5">
            <CadenceButton active={cadence === "monthly"} onClick={() => setCadence("monthly")}>
              Monatlich
            </CadenceButton>
            <CadenceButton active={cadence === "annual"} onClick={() => setCadence("annual")}>
              Jährlich · −15%
            </CadenceButton>
          </div>
        </div>
      </section>

      {/* Plan tiles */}
      <AppleSection surface="canvas" width="wide" rhythm="sm">
        <div className="apl-triple">
          {plans.map((p) => (
            <PlanCard key={p.id} plan={p} cadence={cadence} />
          ))}
        </div>
      </AppleSection>

      {/* Enterprise long tile */}
      <AppleSection surface="soft" width="wide" rhythm="sm">
        <EnterpriseTile plan={ENTERPRISE_PLAN} />
      </AppleSection>

      {/* Comparison grid: what's included */}
      <AppleSection surface="canvas" width="wide" rhythm="md">
        <div className="text-center mb-10">
          <p className="apl-eyebrow mb-2">Was immer dabei ist</p>
          <h2 className="apl-display apl-display-lg mx-auto" style={{ maxWidth: "22ch" }}>
            In jedem Tarif eingebaut.
          </h2>
        </div>
        <AppleFeatureRow
          columns={4}
          items={[
            { title: "Unbegrenzt Nutzer", copy: "Keine Lizenzrechnerei pro Kopf, egal wie viele Reinigungskräfte." },
            { title: "DSGVO & Server DE", copy: "Server in Deutschland, dokumentierte Prozesse, Audit-Trail." },
            { title: "Automatische Updates", copy: "Neue Funktionen sofort verfügbar. Kein Wartungsfenster." },
            { title: "Support ohne Zeile 2", copy: "Reale Menschen, die Reinigung verstehen. Antwort typisch am selben Tag." },
          ]}
        />
      </AppleSection>

      {/* Reassurance strip */}
      <AppleSection surface="soft" width="narrow" rhythm="sm" hairlineTop>
        <div className="text-center">
          <p className="apl-eyebrow mb-2">Ohne Risiko einsteigen</p>
          <h2 className="apl-display apl-display-md mx-auto" style={{ maxWidth: "24ch" }}>
            30 Tage testen. Monatlich kündbar.
          </h2>
          <p className="apl-body mt-3 mx-auto" style={{ maxWidth: "48ch" }}>
            Kein Setup-Aufwand, kein versteckter Mindestumsatz. Im Erstgespräch zeigen wir Taskey an
            Ihren echten Objekten.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-5">
            <AppleButton href="https://signup.taskeyapp.com" variant="primary" size="lg">
              Kostenlos starten
            </AppleButton>
            <AppleButton href="/erstgespraech" variant="secondary" size="lg">
              Erstgespräch buchen
            </AppleButton>
          </div>
        </div>
      </AppleSection>
    </>
  );
}

function CadenceButton({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "px-4 h-9 rounded-full text-[13px] font-medium transition",
        active
          ? "bg-white text-[color:var(--apl-ink)] shadow-sm ring-1 ring-black/5"
          : "text-[color:var(--apl-ink-muted)] hover:text-[color:var(--apl-ink)]",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function PlanCard({
  plan,
  cadence,
}: {
  plan: Plan & { yearlyTotal?: number; yearlySavings?: number };
  cadence: Cadence;
}) {
  const featured = plan.featured;
  const tone = featured ? "apl-tile apl-tile-noir apl-on-noir" : "apl-tile apl-tile-canvas";
  const subtleColor = featured ? "#a1a1a6" : "var(--apl-ink-muted)";
  const showAnnualBreakdown =
    cadence === "annual" &&
    typeof plan.yearlyTotal === "number" &&
    typeof plan.yearlySavings === "number";
  return (
    <div className={`${tone} min-h-[460px] flex flex-col`}>
      <div className="apl-tile-inner flex-1 flex flex-col items-start text-left">
        <div className="flex items-center gap-2">
          <span className="apl-eyebrow" style={{ color: featured ? "#2997ff" : undefined }}>
            {plan.name}
          </span>
          {featured && (
            <span
              className="text-[10px] font-medium uppercase tracking-wide rounded-full px-2 py-0.5"
              style={{ background: "#2997ff22", color: "#2997ff" }}
            >
              Beliebt
            </span>
          )}
        </div>
        <div className="mt-1 flex items-baseline gap-1.5">
          <span className="apl-display" style={{ fontSize: "clamp(2.25rem, 4vw, 3.25rem)", letterSpacing: "-0.015em" }}>
            €{plan.price}
          </span>
          {plan.priceSuffix && (
            <span className="apl-body" style={{ color: subtleColor }}>
              {plan.priceSuffix}
            </span>
          )}
        </div>
        {showAnnualBreakdown && (
          <div className="mt-1 flex flex-col gap-0.5">
            <span className="text-[0.78rem]" style={{ color: subtleColor }}>
              Jahresabo · gesamt €{plan.yearlyTotal!.toLocaleString("de-DE")} pro Jahr
            </span>
            <span
              className="text-[0.72rem] font-medium"
              style={{ color: featured ? "#2997ff" : "var(--apl-accent)" }}
            >
              Sie sparen €{plan.yearlySavings!.toLocaleString("de-DE")} gegenüber monatlich
            </span>
          </div>
        )}
        <p className="apl-small mt-2 max-w-[32ch]" style={{ color: subtleColor }}>
          {plan.tagline}
        </p>

        <ul className="mt-6 flex flex-col gap-2.5 w-full">
          {plan.features.map((raw) => {
            const f: Feature = typeof raw === "string" ? { label: raw } : raw;
            const mutedColor = featured ? "#6e6e73" : "var(--apl-ink-faint)";
            const normalColor = featured ? "#d2d2d7" : "var(--apl-ink-soft)";
            return (
              <li
                key={f.label}
                className="apl-small flex items-start gap-2"
                style={{ color: f.strike ? mutedColor : normalColor }}
              >
                {f.strike ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className="mt-0.5 shrink-0"
                  >
                    <path
                      d="M4 4l8 8M12 4l-8 8"
                      stroke={mutedColor}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                    className="mt-0.5 shrink-0"
                  >
                    <path
                      d="M3.5 8.2l3 3L12.5 5"
                      stroke={featured ? "#2997ff" : "var(--apl-accent)"}
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                <span style={{ textDecoration: f.strike ? "line-through" : undefined }}>
                  {f.label}
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-6 w-full">
          <AppleButton
            href={plan.ctaHref}
            variant={featured ? "primary" : "ghost"}
            className="w-full"
          >
            {plan.ctaLabel}
          </AppleButton>
        </div>
      </div>
    </div>
  );
}

function EnterpriseTile({ plan }: { plan: Plan }) {
  return (
    <div className="apl-tile apl-tile-canvas min-h-[260px]">
      <div className="apl-tile-inner grid md:grid-cols-[1fr_auto] gap-6 items-start">
        <div>
          <p className="apl-eyebrow">Enterprise</p>
          <h3
            className="apl-display apl-display-md mt-1"
            style={{ maxWidth: "26ch" }}
          >
            {plan.tagline}
          </h3>
          <p className="apl-body mt-3 max-w-[52ch]">
            Konfiguriert für Ihre Standorte, Rollen und Prüfungen. Preis entsteht aus Scope, nicht aus Paketlogik.
          </p>
          <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {plan.features.map((raw) => {
              const f: Feature = typeof raw === "string" ? { label: raw } : raw;
              return (
                <li
                  key={f.label}
                  className="apl-small flex items-start gap-2 text-[color:var(--apl-ink-soft)]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="mt-0.5 shrink-0">
                    <path
                      d="M3.5 8.2l3 3L12.5 5"
                      stroke="var(--apl-accent)"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span style={{ textDecoration: f.strike ? "line-through" : undefined }}>
                    {f.label}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex md:flex-col md:items-end gap-3">
          <AppleButton href={plan.ctaHref} variant="primary" size="lg">
            {plan.ctaLabel}
          </AppleButton>
          <AppleButton href="/erstgespraech" variant="secondary">
            Beratung
          </AppleButton>
        </div>
      </div>
    </div>
  );
}
