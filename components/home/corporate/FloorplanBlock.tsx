"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const FloorPlanSection = dynamic(
  () => import("@/components/FloorPlan/FloorPlanSection").then((m) => m.FloorPlanSection),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: "520px",
          display: "grid",
          placeItems: "center",
          color: "var(--tkc-ink-muted)",
          fontFamily: "var(--tkc-font-mono)",
          fontSize: "0.82rem",
        }}
      >
        Grundriss wird geladen …
      </div>
    ),
  }
);

export default function FloorplanBlock() {
  return (
    <section className="tkc-section" style={{ background: "var(--tkc-canvas)" }}>
      <div className="tkc-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6">
          <div className="tkc-section-header">
            <div className="tkc-eyebrow">Taskey Share</div>
            <h2
              className="tkc-headline mt-3"
              style={{
                fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                color: "var(--tkc-ink)",
              }}
            >
              Der Live-Zugang für Ihre Auftraggeber.
            </h2>
            <p className="tkc-lead mt-4 max-w-[640px]">
              Öffnen Sie ein Gebäude, wählen Sie eine Etage, prüfen Sie einen Raum.
              Leistung, Anwesenheit und Nachweise liegen direkt am Bereich. Ohne
              Anruf, ohne E-Mail, ohne Wartezeit für Ihre Kunden.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://demo.kunden.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="tkc-btn tkc-btn-primary tkc-btn-sm"
            >
              Live-Demo öffnen
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <FloorPlanSection />
      </div>
    </section>
  );
}
