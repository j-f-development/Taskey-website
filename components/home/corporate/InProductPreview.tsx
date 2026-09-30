"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CalculationDemo = dynamic(() => import("@/components/features/CalculationDemo"), {
  ssr: false,
  loading: () => <DemoLoading />,
});
const NfcDemo = dynamic(() => import("@/components/features/NfcDemo"), {
  ssr: false,
  loading: () => <DemoLoading />,
});
const TimeAccountingDemo = dynamic(() => import("@/components/features/TimeAccountingDemo"), {
  ssr: false,
  loading: () => <DemoLoading />,
});
const CalendarDemo = dynamic(() => import("@/components/features/CalendarDemo"), {
  ssr: false,
  loading: () => <DemoLoading />,
});
const DashboardMarge = dynamic(() => import("@/components/home/redesign/DashboardMarge"), {
  ssr: false,
  loading: () => <DemoLoading />,
});

type TabKey = "kalkulation" | "nfc" | "zeit" | "kalender" | "marge";

const TABS: { key: TabKey; label: string; caption: string }[] = [
  { key: "kalkulation", label: "Kalkulation", caption: "Fläche, Frequenz, Lohn, Marge in Echtzeit." },
  { key: "nfc", label: "NFC-Nachweis", caption: "Objekt scannen, Nachweis entsteht." },
  { key: "zeit", label: "Zeiterfassung", caption: "Kolonne im Objekt, Zeitachse mitläuft." },
  { key: "kalender", label: "Einsatzplan", caption: "Wer wo wann. Konflikte sichtbar." },
  { key: "marge", label: "Marge live", caption: "Objekt, Auftrag, Marge in Echtzeit." },
];

function DemoLoading() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        minHeight: "480px",
        color: "var(--tkc-ink-muted)",
        fontFamily: "var(--tkc-font-mono)",
        fontSize: "0.82rem",
      }}
    >
      Demo wird geladen …
    </div>
  );
}

export default function InProductPreview() {
  const [active, setActive] = useState<TabKey>("kalkulation");
  const currentTab = TABS.find((t) => t.key === active) ?? TABS[0];

  return (
    <section
      id="produkt"
      className="tkc-section"
      style={{ background: "var(--tkc-canvas-tinted)" }}
    >
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
          <div className="tkc-section-header">
            <div className="tkc-eyebrow">Im Produkt</div>
            <h2
              className="tkc-headline mt-3"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                color: "var(--tkc-ink)",
              }}
            >
              Fünf Ansichten, ein Betrieb.
            </h2>
            <p className="tkc-lead mt-4">
              Nichts abstraktes. Kalkulieren Sie ein Objekt, buchen Sie eine
              NFC-Runde, verfolgen Sie den Arbeitstag Ihrer Kolonne. Alles im
              Browser, direkt anfassbar.
            </p>
          </div>
          <div className="tkc-mono" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.76rem" }}>
            {currentTab.caption}
          </div>
        </div>

        {/* Tab strip */}
        <div
          className="mt-8 flex flex-wrap gap-1 p-1 rounded-[8px]"
          style={{
            background: "var(--tkc-canvas-elev)",
            border: "1px solid var(--tkc-line-strong)",
            display: "inline-flex",
          }}
          role="tablist"
          aria-label="Produkt-Demos"
        >
          {TABS.map((tab) => {
            const isActive = tab.key === active;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.key)}
                className="px-4 py-2 transition-colors"
                style={{
                  fontSize: "0.86rem",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#ffffff" : "var(--tkc-ink-muted)",
                  background: isActive ? "var(--tkc-ink)" : "transparent",
                  borderRadius: "6px",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Demo frame */}
        <div
          className="mt-6 rounded-[12px]"
          style={{
            background: "var(--tkc-canvas-elev)",
            border: "1px solid var(--tkc-line-strong)",
            overflow: "hidden",
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              borderBottom: "1px solid var(--tkc-line)",
              background: "var(--tkc-canvas-tinted)",
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#e0e2e6" }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#e0e2e6" }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#e0e2e6" }} />
            <span className="tkc-mono ml-3" style={{ color: "var(--tkc-ink-muted)", fontSize: "0.72rem" }}>
              taskeyapp.com · {currentTab.label.toLowerCase()}
            </span>
          </div>
          <div className="p-4 md:p-6">
            {active === "kalkulation" && <CalculationDemo />}
            {active === "nfc" && <NfcDemo />}
            {active === "zeit" && <TimeAccountingDemo />}
            {active === "kalender" && <CalendarDemo />}
            {active === "marge" && <DashboardMarge />}
          </div>
        </div>
      </div>
    </section>
  );
}
