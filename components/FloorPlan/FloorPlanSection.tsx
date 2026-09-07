"use client";

import { useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "motion/react";
import { FLOORS, type FloorKey, type RoomKey } from "@/lib/data/floorplan";
import { FloorSidebar } from "./FloorSidebar";
import { FloorSVG, ROOM_RECTS } from "./FloorSVG";
import { RoomTooltip } from "./RoomTooltip";
import { RoomDetail } from "./RoomDetail";
import { ZoomPill } from "./ZoomPill";
import { ViewToggle, type ViewMode } from "./ViewToggle";
import { DEMO_STATUS } from "./status";
import type { BuildingView } from "./BuildingTower";

const Floor3D = dynamic(() => import("./Floor3D"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full place-items-center text-sm text-slate-500">
      3D-Modell wird aufgebaut …
    </div>
  ),
});

const ZOOM_STOPS = [75, 100, 125, 150];

export function FloorPlanSection() {
  const [buildingView, setBuildingView] = useState<BuildingView>("building");
  const [activeFloor, setActiveFloor] = useState<FloorKey>("eg");
  const [hoveredRoom, setHoveredRoom] = useState<RoomKey | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<RoomKey | null>(null);
  const [tipPos, setTipPos] = useState<{ x: number; y: number } | null>(null);
  const [zoom, setZoom] = useState(100);
  const [mode, setMode] = useState<ViewMode>("modell");

  const canvasRef = useRef<HTMLDivElement | null>(null);

  const floor = useMemo(
    () => FLOORS.find((f) => f.id === activeFloor)!,
    [activeFloor],
  );
  const hovered = hoveredRoom ? floor.rooms[hoveredRoom] : null;
  const selected = selectedRoom ? floor.rooms[selectedRoom] : null;

  const handleFloorSelect = (id: FloorKey) => {
    setActiveFloor(id);
    setBuildingView("floor");
    setHoveredRoom(null);
    setSelectedRoom(null);
  };

  const handleEnterRoom = (id: RoomKey) => {
    setHoveredRoom(id);
    if (!canvasRef.current) return;
    const rect = ROOM_RECTS[id];
    const wrap = canvasRef.current.getBoundingClientRect();
    // Convert SVG coordinates (viewBox 1400x620) into pixel coordinates
    const scaleX = wrap.width / 1400;
    const scaleY = wrap.height / 620;
    const x = (rect.x + rect.w / 2) * scaleX;
    const y = (rect.y + 8) * scaleY;
    setTipPos({ x, y });
  };

  const handleZoom = (delta: number) => {
    const idx = ZOOM_STOPS.indexOf(zoom);
    const next =
      idx >= 0
        ? ZOOM_STOPS[Math.max(0, Math.min(ZOOM_STOPS.length - 1, idx + delta))]
        : 100;
    setZoom(next);
  };

  return (
    <section
      id="gebaeudemodell"
      onKeyDown={(event) => { if (event.key === "Escape") setSelectedRoom(null); }}
      className="relative py-14 md:py-24"
      style={{
        background:
          "radial-gradient(80% 40% at 50% 0%, rgba(0, 100, 204, 0.04) 0%, transparent 60%), linear-gradient(180deg, #ffffff 0%, #fafafb 100%)",
      }}
    >
      <div className="ts-container-wide">
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.16em] text-[color:var(--ts-ink-muted)]">
            <span className="ts-mono">02</span>
            <span
              className="h-px w-8 bg-[color:var(--ts-line-strong)]"
              aria-hidden
            />
            <span>Raum für Raum · In 3D</span>
          </div>
          <h2
            className="ts-display mt-4 text-[color:var(--ts-ink)]"
            style={{ fontSize: "clamp(1.7rem, 3.8vw, 2.9rem)" }}
          >
            Ihr Gebäude. Eine neue Perspektive.
          </h2>
          <p className="mt-4 text-[1rem] md:text-[1.05rem] leading-[1.6] text-[color:var(--ts-ink-soft)]">
            Vom ganzen Gebäude bis in den einzelnen Raum: Öffnen Sie das Haus, lassen Sie die fünf Ebenen auseinanderfahren und entdecken Sie jede Etage. Die Farben zeigen Ihnen sofort, wo gereinigt wurde, wo die Reinigung läuft und wo sie ausgefallen ist.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-[220px_minmax(0,1fr)] gap-6 lg:gap-8">
          {/* Sidebar */}
          <FloorSidebar
            floors={FLOORS}
            activeId={activeFloor}
            onSelect={handleFloorSelect}
          />

          {/* Canvas */}
          <div className="flex flex-col gap-4">
            {/* Top-Bar: Legende links, Toggle rechts */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Legend />
              <ViewToggle mode={mode} onChange={setMode} />
            </div>

            {/* Äußerer Wrapper ohne overflow-hidden, der Tooltip darf über die
                Grundriss-Box hinausragen. Der innere Canvas kappt weiterhin den Zoom. */}
            <div className="relative">
              <div
                ref={canvasRef}
                className="relative rounded-[var(--ts-r-shell)] bg-[color:var(--ts-canvas-elev)] border border-[color:var(--ts-line)] overflow-hidden"
                style={{
                  height:
                    mode === "modell" ? "clamp(560px, 55vw, 780px)" : undefined,
                  aspectRatio: mode === "modell" ? undefined : "1400 / 620",
                  boxShadow: "var(--ts-shadow-lg)",
                }}
                onMouseLeave={() => {
                  setHoveredRoom(null);
                  setTipPos(null);
                }}
              >
                <AnimatePresence mode="wait">
                  {mode === "modell" ? (
                    <motion.div
                      key="building-model"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0"
                    >
                      <Floor3D
                        view={buildingView}
                        activeFloor={activeFloor}
                        onViewChange={(view)=>{setBuildingView(view);setSelectedRoom(null);}}
                        onSelectFloor={handleFloorSelect}
                        rooms={floor.rooms}
                        selectedRoom={selectedRoom}
                        onSelectRoom={setSelectedRoom}
                        fallback={
                          <div className="h-full pt-16">
                            <p className="text-center text-xs text-slate-600">
                              3D ist hier nicht verfügbar. Nutzen Sie den
                              interaktiven Grundriss.
                            </p>
                            <FloorSVG
                              rooms={floor.rooms}
                              activeRoom={hoveredRoom}
                              onEnterRoom={handleEnterRoom}
                              onLeaveRoom={() => setHoveredRoom(null)}
                              onSelectRoom={setSelectedRoom}
                              zoom={100}
                            />
                          </div>
                        }
                      />
                      <RoomDetail
                        room={selected}
                        onClose={() => setSelectedRoom(null)}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`plan-${activeFloor}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0"
                    >
                      <FloorSVG
                        rooms={floor.rooms}
                        activeRoom={hoveredRoom}
                        onEnterRoom={handleEnterRoom}
                        onLeaveRoom={() => {
                          setHoveredRoom(null);
                          setTipPos(null);
                        }}
                        onSelectRoom={(id) => setSelectedRoom(id)}
                        zoom={zoom}
                      />

                      {/* Detail-Panel (bleibt im Canvas) */}
                      <RoomDetail
                        room={selected}
                        onClose={() => setSelectedRoom(null)}
                      />

                      {/* Zoom-Pill (nur Grundriss) */}
                      <div className="absolute top-4 right-4 z-20">
                        <ZoomPill
                          zoom={zoom}
                          onDec={() => handleZoom(-1)}
                          onInc={() => handleZoom(1)}
                          min={ZOOM_STOPS[0]}
                          max={ZOOM_STOPS[ZOOM_STOPS.length - 1]}
                        />
                      </div>

                      {/* Aktives Stockwerk oben links */}
                      <div
                        className="absolute top-4 left-4 z-20 inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-[color:var(--ts-line)] px-3 py-1.5 text-[12px] font-medium text-[color:var(--ts-ink-soft)]"
                        style={{
                          boxShadow: "0 2px 6px -1px rgba(15,23,42,0.06)",
                        }}
                      >
                        <span className="grid place-items-center h-5 w-5 rounded-full bg-[color:var(--fp-blue)] text-white text-[10.5px] font-semibold">
                          {floor.short}
                        </span>
                        {floor.label} · {floor.done}/{floor.total} erledigt
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Tooltip lebt außerhalb der overflow-hidden-Box, kann also
                  problemlos über den oberen Rand hinausragen. */}
              {mode === "grundriss" && hovered && tipPos ? (
                <div className="pointer-events-none absolute inset-0 z-30">
                  <RoomTooltip room={hovered} x={tipPos.x} y={tipPos.y} />
                </div>
              ) : null}
            </div>

            {mode === "modell" && buildingView === "floor" && (
              <div
                className="flex flex-wrap gap-2"
                aria-label="Räume auswählen"
              >
                {Object.values(floor.rooms).map((room) => (
                  <button
                    key={room.id}
                    type="button"
                    onClick={() => setSelectedRoom(room.id)}
                    aria-pressed={selectedRoom === room.id}
                    className="rounded-xl border px-3 py-2 text-left text-[11px] transition-shadow aria-pressed:ring-2 aria-pressed:ring-offset-2"
                    style={{ background: DEMO_STATUS[room.status].background, color: DEMO_STATUS[room.status].color, borderColor: DEMO_STATUS[room.status].color }}
                  >
                    <span className="font-semibold">{DEMO_STATUS[room.status].symbol} {room.name}</span>
                    <span className="block mt-0.5">{DEMO_STATUS[room.status].label}</span>
                  </button>
                ))}
              </div>
            )}
            <p className="text-[12px] text-[color:var(--ts-ink-muted)] flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[color:var(--fp-red)]" />
              Beispieldaten · Alle Namen, Uhrzeiten und Räume sind erfunden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Legend() {
  const items = Object.values(DEMO_STATUS);
  return (
    <div
      className="inline-flex flex-wrap items-center gap-4 rounded-full bg-white border border-[color:var(--ts-line)] px-4 py-2"
      style={{ boxShadow: "0 2px 6px -1px rgba(15,23,42,0.05)" }}
    >
      {items.map((i) => (
        <span
          key={i.label}
          className="inline-flex items-center gap-2 text-[12px] text-[color:var(--ts-ink-soft)]"
        >
          <span
            className="grid h-5 w-5 place-items-center rounded text-[13px] font-bold text-white"
            style={{ background: i.color }}
            aria-hidden="true"
          >{i.symbol}</span>
          {i.label}
        </span>
      ))}
    </div>
  );
}
