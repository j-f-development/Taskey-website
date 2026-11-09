"use client";

import dynamic from "next/dynamic";

const FloorPlanSection = dynamic(
  () =>
    import("@/components/FloorPlan/FloorPlanSection").then((m) => ({
      default: m.FloorPlanSection,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="apl-container-wide pt-6 pb-16">
        <div
          className="rounded-[22px] bg-[color:var(--apl-canvas-soft)] ring-1 ring-black/5 grid place-items-center"
          style={{ minHeight: 560 }}
        >
          <span className="apl-small text-[color:var(--apl-ink-muted)]">
            3D-Modell wird geladen …
          </span>
        </div>
      </div>
    ),
  }
);

export default function BuildingDemoSection() {
  return (
    <>
      <section className="apl-surface-canvas pt-20 pb-6">
        <div className="apl-container-wide text-center">
          <p className="apl-eyebrow mb-2">Live-Demo</p>
          <h2
            className="apl-display apl-display-lg mx-auto"
            style={{ maxWidth: "22ch" }}
          >
            Ihr Gebäude. In drei Dimensionen.
          </h2>
          <p
            className="apl-lede mt-4 mx-auto"
            style={{ maxWidth: "54ch" }}
          >
            Klicken Sie sich durch Stockwerke und Räume. So sehen Ihre
            Reinigungsleitungen den Status jedes Objekts in Echtzeit.
          </p>
        </div>
      </section>

      {/* FloorPlanSection mit integrierter Bühne, Padding reduziert */}
      <div className="apl-floorplan-wrap">
        <FloorPlanSection />
      </div>
    </>
  );
}
