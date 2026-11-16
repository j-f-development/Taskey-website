"use client";

import type { Room, RoomKey } from "@/lib/data/floorplan";
import { STATUS_META } from "@/lib/data/floorplan";

/**
 * Grundriss-SVG. Alle Räume liegen in <g data-room="…"> und können vom
 * Parent gehoveret / geklickt werden. Farbe und Statuspunkt werden aus
 * dem übergebenen Raum-Datensatz abgeleitet.
 *
 * viewBox: 1400×620
 *   Gebäude:      x=100 y=110  b=1200 h=440
 *   Bemaßung oben: 4.08 | 6.59 | 3.32 | 4.08 | 3.32
 *   Bemaßung links: 3.32 | 1.2 | 4.08
 */

const BUILDING = { x: 100, y: 110, w: 1200, h: 440 };

// Vertikale Gliederung (top / mid corridor / bottom)
const ROW = {
  topStart: 110,
  topEnd: 280,
  midEnd: 341,
  bottomEnd: 550,
} as const;

// Innere x-Grenzen (Wände)
const COL = {
  x0: 100,
  x1: 330,
  x2: 515,
  x3: 700,
  x4: 1300,
} as const;

// WC-Mittelspalte im Untergeschoss
const WC_MID = 610;

export type RoomRect = { x: number; y: number; w: number; h: number };

export const ROOM_RECTS: Record<RoomKey, RoomRect> = {
  empfang:          { x: COL.x0, y: ROW.topStart, w: COL.x1 - COL.x0, h: ROW.topEnd - ROW.topStart },
  wc_damen_eg:      { x: COL.x1, y: ROW.topStart, w: COL.x2 - COL.x1, h: ROW.topEnd - ROW.topStart },
  wc_herren_eg:     { x: COL.x2, y: ROW.topStart, w: COL.x3 - COL.x2, h: ROW.topEnd - ROW.topStart },
  cafeteria_kueche: { x: COL.x3, y: ROW.topStart, w: COL.x4 - COL.x3, h: 120 },
  cafeteria:        { x: COL.x3, y: ROW.topStart + 120, w: COL.x4 - COL.x3, h: BUILDING.h - 120 },
  foyer:            { x: COL.x0, y: ROW.midEnd, w: COL.x2 - COL.x0, h: ROW.bottomEnd - ROW.midEnd },
  wc_damen_low:     { x: COL.x2, y: ROW.midEnd, w: WC_MID - COL.x2, h: ROW.bottomEnd - ROW.midEnd },
  wc_herren_low:    { x: WC_MID, y: ROW.midEnd, w: COL.x3 - WC_MID, h: ROW.bottomEnd - ROW.midEnd },
};

// Korridor-Strip (nicht klickbar, weiß)
const CORRIDOR = { x: COL.x0, y: ROW.topEnd, w: COL.x3 - COL.x0, h: ROW.midEnd - ROW.topEnd };

const WALL = "#111111";
const WALL_STROKE = 4;
const IWALL_STROKE = 2.2;

export function FloorSVG({
  rooms,
  activeRoom,
  onEnterRoom,
  onLeaveRoom,
  onSelectRoom,
  zoom,
}: {
  rooms: Record<RoomKey, Room>;
  activeRoom: RoomKey | null;
  onEnterRoom: (id: RoomKey, e: React.MouseEvent<SVGGElement>) => void;
  onLeaveRoom: () => void;
  onSelectRoom: (id: RoomKey) => void;
  zoom: number;
}) {
  return (
    <svg
      viewBox={`0 0 1400 620`}
      width="100%"
      preserveAspectRatio="xMidYMid meet"
      style={{
        transform: `scale(${zoom / 100})`,
        transformOrigin: "center center",
        transition: "transform var(--motion-reveal) var(--ease-out)",
        maxWidth: "100%",
      }}
      role="img"
      aria-label="Interaktiver Grundriss (Beispieldaten)"
    >
      <defs>
        <pattern id="fp-dot-grid" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="0.6" cy="0.6" r="0.6" fill="#E8EAED" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="1400" height="620" fill="var(--fp-bg)" />

      <DimensionsTop />
      <DimensionsLeft />

      {/* Außenhülle */}
      <rect
        x={BUILDING.x}
        y={BUILDING.y}
        width={BUILDING.w}
        height={BUILDING.h}
        fill="var(--fp-surface)"
        stroke={WALL}
        strokeWidth={WALL_STROKE}
        strokeLinejoin="miter"
      />

      {/* Korridor-Fläche (weiß, ohne Fill) */}
      <rect x={CORRIDOR.x} y={CORRIDOR.y} width={CORRIDOR.w} height={CORRIDOR.h} fill="#FBFBFC" />

      {/* Räume */}
      {(Object.keys(ROOM_RECTS) as RoomKey[]).map((key) => (
        <RoomShape
          key={key}
          id={key}
          rect={ROOM_RECTS[key]}
          room={rooms[key]}
          active={activeRoom === key}
          onEnter={onEnterRoom}
          onLeave={onLeaveRoom}
          onSelect={onSelectRoom}
        />
      ))}

      {/* Innenwände: strukturelle Linien */}
      <InteriorWalls />

      {/* Fenster (Aussparungen im Außenrand) */}
      <Windows />

      {/* Türen (Blatt + Öffnungsradius) */}
      <Doors />

      {/* Möbel */}
      <Furniture />

      {/* Raumlabels + Statuspill */}
      {(Object.keys(ROOM_RECTS) as RoomKey[]).map((key) => (
        <RoomLabel key={`lbl-${key}`} id={key} rect={ROOM_RECTS[key]} room={rooms[key]} active={activeRoom === key} />
      ))}

      {/* Roter Aufgaben-Kreis über belasteten Räumen */}
      {(Object.keys(ROOM_RECTS) as RoomKey[]).map((key) => {
        const r = rooms[key];
        if (!r.openTasks || r.openTasks === 0) return null;
        const rect = ROOM_RECTS[key];
        return (
          <g key={`badge-${key}`} pointerEvents="none">
            <circle cx={rect.x + rect.w - 22} cy={rect.y + 22} r="12" fill="var(--fp-red)" />
            <text
              x={rect.x + rect.w - 22}
              y={rect.y + 26}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#fff"
              fontFamily="-apple-system, Inter, system-ui, sans-serif"
            >
              {r.openTasks}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ============================================================
   Bemaßung
   ============================================================ */
function DimensionsTop() {
  const y = 70;
  const ticks = [100, 328, 696, 882, 1110, 1296];
  const labels: { at: number; text: string }[] = [
    { at: 214, text: "4.08 m" },
    { at: 512, text: "6.59 m" },
    { at: 789, text: "3.32 m" },
    { at: 996, text: "4.08 m" },
    { at: 1203, text: "3.32 m" },
  ];
  return (
    <g pointerEvents="none">
      <line x1={100} y1={y} x2={1296} y2={y} stroke="#D5D8DE" strokeWidth="1" />
      {ticks.map((x) => (
        <line key={x} x1={x} y1={y - 6} x2={x} y2={y + 6} stroke="#D5D8DE" strokeWidth="1" />
      ))}
      {labels.map((l) => (
        <text
          key={l.at}
          x={l.at}
          y={y - 12}
          textAnchor="middle"
          fontSize="14"
          fill="#8A8F98"
          fontFamily="-apple-system, Inter, system-ui, sans-serif"
        >
          {l.text}
        </text>
      ))}
    </g>
  );
}

function DimensionsLeft() {
  const x = 70;
  const ticks = [110, 280, 341, 550];
  const labels: { at: number; text: string }[] = [
    { at: 195, text: "3.32 m" },
    { at: 310, text: "1.2 m" },
    { at: 445, text: "4.08 m" },
  ];
  return (
    <g pointerEvents="none">
      <line x1={x} y1={110} x2={x} y2={550} stroke="#D5D8DE" strokeWidth="1" />
      {ticks.map((yv) => (
        <line key={yv} x1={x - 6} y1={yv} x2={x + 6} y2={yv} stroke="#D5D8DE" strokeWidth="1" />
      ))}
      {labels.map((l) => (
        <text
          key={l.at}
          x={x - 12}
          y={l.at + 4}
          textAnchor="end"
          fontSize="14"
          fill="#8A8F98"
          fontFamily="-apple-system, Inter, system-ui, sans-serif"
        >
          {l.text}
        </text>
      ))}
    </g>
  );
}

/* ============================================================
   Raum-Shape (Hintergrund + Interaktion)
   ============================================================ */
function RoomShape({
  id,
  rect,
  room,
  active,
  onEnter,
  onLeave,
  onSelect,
}: {
  id: RoomKey;
  rect: RoomRect;
  room: Room;
  active: boolean;
  onEnter: (id: RoomKey, e: React.MouseEvent<SVGGElement>) => void;
  onLeave: () => void;
  onSelect: (id: RoomKey) => void;
}) {
  const meta = STATUS_META[room.status];
  const isPending = room.status === "pending";
  const strokeDash = room.status === "failed" || room.status === "progress" ? "6 4" : "0";
  const strokeCol = room.status === "failed" || room.status === "progress" ? meta.color : "transparent";

  return (
    <g
      data-room={id}
      className="fp-room"
      onMouseEnter={(e) => onEnter(id, e)}
      onMouseLeave={onLeave}
      onClick={() => onSelect(id)}
      style={{ cursor: "pointer" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(id);
        }
      }}
    >
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.w}
        height={rect.h}
        fill={isPending ? "#FFFFFF" : meta.fill}
        opacity={active ? 1 : 0.9}
        style={{ transition: "opacity var(--motion-press) var(--ease-out), filter var(--motion-press) var(--ease-out)" }}
      />
      {/* Hover-Overlay */}
      <rect
        x={rect.x}
        y={rect.y}
        width={rect.w}
        height={rect.h}
        fill="#111827"
        opacity={active ? 0.05 : 0}
        style={{ transition: "opacity var(--motion-press) var(--ease-out)" }}
      />
      {/* Optionaler gestrichelter Rahmen für Fehler / Progress */}
      {strokeCol !== "transparent" ? (
        <rect
          x={rect.x + 2}
          y={rect.y + 2}
          width={rect.w - 4}
          height={rect.h - 4}
          fill="none"
          stroke={strokeCol}
          strokeWidth="1.6"
          strokeDasharray={strokeDash}
          pointerEvents="none"
        />
      ) : null}
    </g>
  );
}

/* ============================================================
   Raum-Label + Statuspill (über der Raumfläche schwebend)
   ============================================================ */
function RoomLabel({ id, rect, room, active }: { id: RoomKey; rect: RoomRect; room: Room; active: boolean }) {
  const meta = STATUS_META[room.status];
  const centerX = rect.x + rect.w / 2;
  const centerY = rect.y + rect.h / 2;

  // Kompakter Pill oben mittig im Raum
  const pillY = rect.y + 22;
  const pillText = room.suffix ? `${room.name} ${room.suffix}` : room.name;
  const pillWidth = Math.max(72, pillText.length * 7 + 26);

  return (
    <g pointerEvents="none" style={{ transition: "opacity var(--motion-press) var(--ease-out)" }}>
      {/* Zentraler Raumname (leicht ausgegraut) */}
      <text
        x={centerX}
        y={centerY + 4}
        textAnchor="middle"
        fontSize={rect.w < 200 ? "13" : "16"}
        fontWeight="500"
        fill="#4B5563"
        opacity="0.65"
        fontFamily="-apple-system, Inter, system-ui, sans-serif"
      >
        {room.name}
      </text>
      {room.suffix ? (
        <text
          x={centerX}
          y={centerY + 22}
          textAnchor="middle"
          fontSize="11"
          fontWeight="500"
          fill="#8A8F98"
          fontFamily="-apple-system, Inter, system-ui, sans-serif"
        >
          {room.suffix}
        </text>
      ) : null}

      {/* Status-Pill oberhalb */}
      <g transform={`translate(${centerX - pillWidth / 2}, ${pillY - 12})`}>
        <rect
          width={pillWidth}
          height="24"
          rx="12"
          fill="#FFFFFF"
          stroke="#E8EAED"
          strokeWidth="1"
          filter="drop-shadow(0 1px 2px rgba(15,23,42,0.06))"
        />
        <circle cx="14" cy="12" r="4" fill={meta.color} />
        <text
          x="24"
          y="16"
          fontSize="11"
          fontWeight="500"
          fill="#4B5563"
          fontFamily="-apple-system, Inter, system-ui, sans-serif"
        >
          {pillText}
        </text>
      </g>
    </g>
  );
}

/* ============================================================
   Innenwände
   ============================================================ */
function InteriorWalls() {
  return (
    <g stroke={WALL} strokeWidth={IWALL_STROKE} strokeLinecap="butt">
      {/* horizontale Trennung Top → Korridor */}
      <line x1={COL.x0} y1={ROW.topEnd} x2={COL.x3} y2={ROW.topEnd} />
      {/* horizontale Trennung Korridor → Bottom */}
      <line x1={COL.x0} y1={ROW.midEnd} x2={COL.x3} y2={ROW.midEnd} />
      {/* horizontale Trennung Küche → Cafeteria */}
      <line x1={COL.x3} y1={ROW.topStart + 120} x2={COL.x4} y2={ROW.topStart + 120} />
      {/* vertikale Wände top */}
      <line x1={COL.x1} y1={ROW.topStart} x2={COL.x1} y2={ROW.topEnd} />
      <line x1={COL.x2} y1={ROW.topStart} x2={COL.x2} y2={ROW.topEnd} />
      <line x1={COL.x3} y1={ROW.topStart} x2={COL.x3} y2={ROW.bottomEnd} />
      {/* vertikale Wände bottom */}
      <line x1={COL.x2} y1={ROW.midEnd} x2={COL.x2} y2={ROW.bottomEnd} />
      <line x1={WC_MID} y1={ROW.midEnd} x2={WC_MID} y2={ROW.bottomEnd} />
    </g>
  );
}

/* ============================================================
   Fenster, kleine Doppellinien im Außenrand
   ============================================================ */
function Windows() {
  // 6 Fenster oben (in Empfang, Küche, Cafeteria), 3 Fenster unten (Foyer, Cafeteria), 2 Fenster links (Empfang, Foyer), 2 Fenster rechts (Cafeteria)
  const wins: { x1: number; y1: number; x2: number; y2: number }[] = [
    // oben (in Außenwand)
    { x1: 160, y1: 110, x2: 220, y2: 110 },
    { x1: 380, y1: 110, x2: 440, y2: 110 },
    { x1: 560, y1: 110, x2: 640, y2: 110 },
    { x1: 780, y1: 110, x2: 870, y2: 110 },
    { x1: 970, y1: 110, x2: 1060, y2: 110 },
    { x1: 1160, y1: 110, x2: 1260, y2: 110 },
    // unten
    { x1: 160, y1: 550, x2: 260, y2: 550 },
    { x1: 340, y1: 550, x2: 440, y2: 550 },
    { x1: 780, y1: 550, x2: 870, y2: 550 },
    { x1: 970, y1: 550, x2: 1070, y2: 550 },
    { x1: 1160, y1: 550, x2: 1260, y2: 550 },
    // links
    { x1: 100, y1: 150, x2: 100, y2: 210 },
    { x1: 100, y1: 380, x2: 100, y2: 460 },
    // rechts
    { x1: 1300, y1: 150, x2: 1300, y2: 210 },
    { x1: 1300, y1: 300, x2: 1300, y2: 380 },
    { x1: 1300, y1: 440, x2: 1300, y2: 510 },
  ];
  return (
    <g>
      {wins.map((w, i) => (
        <g key={i}>
          {/* Fensterrahmen: kurze schwarze Endstriche + weiße Linie */}
          <line x1={w.x1} y1={w.y1} x2={w.x2} y2={w.y2} stroke="#FFFFFF" strokeWidth={WALL_STROKE + 2} />
          <line x1={w.x1} y1={w.y1} x2={w.x2} y2={w.y2} stroke="#8A8F98" strokeWidth="1.4" strokeDasharray="3 3" />
        </g>
      ))}
    </g>
  );
}

/* ============================================================
   Türen, Türblatt + Viertelkreis
   ============================================================ */
function Doors() {
  return (
    <g stroke={WALL} strokeWidth="1.4" fill="none">
      {/* Tür Empfang → Korridor (unten) */}
      <Door x={210} y={ROW.topEnd} width={40} orient="h-down" />
      {/* Tür Foyer → Korridor (oben) */}
      <Door x={210} y={ROW.midEnd} width={40} orient="h-up" />
      {/* Tür WC Damen EG → Korridor */}
      <Door x={410} y={ROW.topEnd} width={34} orient="h-down" />
      {/* Tür WC Herren EG → Korridor */}
      <Door x={595} y={ROW.topEnd} width={34} orient="h-down" />
      {/* Tür WC Damen unten → Korridor */}
      <Door x={545} y={ROW.midEnd} width={30} orient="h-up" />
      {/* Tür WC Herren unten → Korridor */}
      <Door x={640} y={ROW.midEnd} width={30} orient="h-up" />
      {/* Tür Cafeteria Küche → Cafeteria */}
      <Door x={780} y={ROW.topStart + 120} width={44} orient="h-down" />
      {/* Tür Cafeteria → Korridor (links) */}
      <Door x={COL.x3} y={370} height={50} orient="v-left" />
      {/* Foyer Eingangstüren (nach außen, unten) */}
      <ExteriorDoor x={140} y={ROW.bottomEnd} width={50} />
      <ExteriorDoor x={370} y={ROW.bottomEnd} width={50} />
    </g>
  );
}

function Door({
  x,
  y,
  width,
  height,
  orient,
}: {
  x: number;
  y: number;
  width?: number;
  height?: number;
  orient: "h-up" | "h-down" | "v-left" | "v-right";
}) {
  if (orient.startsWith("h") && width) {
    // Wand-Aussparung
    return (
      <g>
        <line x1={x} y1={y} x2={x + width} y2={y} stroke="#FFFFFF" strokeWidth={IWALL_STROKE + 2} />
        {orient === "h-down" ? (
          <>
            <line x1={x} y1={y} x2={x} y2={y + width} />
            <path d={`M ${x} ${y + width} A ${width} ${width} 0 0 0 ${x + width} ${y}`} />
          </>
        ) : (
          <>
            <line x1={x} y1={y} x2={x} y2={y - width} />
            <path d={`M ${x} ${y - width} A ${width} ${width} 0 0 1 ${x + width} ${y}`} />
          </>
        )}
      </g>
    );
  }
  if (orient.startsWith("v") && height) {
    return (
      <g>
        <line x1={x} y1={y} x2={x} y2={y + height} stroke="#FFFFFF" strokeWidth={IWALL_STROKE + 2} />
        {orient === "v-left" ? (
          <>
            <line x1={x} y1={y} x2={x - height} y2={y} />
            <path d={`M ${x - height} ${y} A ${height} ${height} 0 0 1 ${x} ${y + height}`} />
          </>
        ) : (
          <>
            <line x1={x} y1={y} x2={x + height} y2={y} />
            <path d={`M ${x + height} ${y} A ${height} ${height} 0 0 0 ${x} ${y + height}`} />
          </>
        )}
      </g>
    );
  }
  return null;
}

function ExteriorDoor({ x, y, width }: { x: number; y: number; width: number }) {
  return (
    <g>
      <line x1={x} y1={y} x2={x + width} y2={y} stroke="#FFFFFF" strokeWidth={WALL_STROKE + 2} />
      <line x1={x} y1={y} x2={x} y2={y - width} />
      <path d={`M ${x} ${y - width} A ${width} ${width} 0 0 1 ${x + width} ${y}`} />
    </g>
  );
}

/* ============================================================
   Möbel, vereinfacht, monochrom
   ============================================================ */
function Furniture() {
  return (
    <g stroke="#4B5563" strokeWidth="1.3" fill="none" opacity="0.75">
      {/* Empfangstresen */}
      <g>
        <rect x={140} y={150} width={140} height={22} rx="4" fill="#F1F3F5" stroke="#4B5563" />
        <rect x={160} y={195} width={26} height={26} rx="4" fill="#F1F3F5" stroke="#4B5563" />
      </g>

      {/* Foyer: Sitzgruppen */}
      <g>
        {/* Tische */}
        <rect x={140} y={380} width={50} height={30} rx="3" fill="#F1F3F5" stroke="#4B5563" />
        <rect x={140} y={470} width={50} height={30} rx="3" fill="#F1F3F5" stroke="#4B5563" />
        <rect x={280} y={380} width={50} height={30} rx="3" fill="#F1F3F5" stroke="#4B5563" />
        <rect x={280} y={470} width={50} height={30} rx="3" fill="#F1F3F5" stroke="#4B5563" />
        {/* Stühle als kleine Kreise */}
        {[
          [128, 380], [128, 405], [200, 380], [200, 405],
          [128, 470], [128, 495], [200, 470], [200, 495],
          [268, 380], [268, 405], [340, 380], [340, 405],
          [268, 470], [268, 495], [340, 470], [340, 495],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx as number} cy={(cy as number) + 15} r="6" fill="#F1F3F5" stroke="#4B5563" />
        ))}
      </g>

      {/* WC Damen EG */}
      <g>
        <ToiletIcon x={350} y={135} />
        <ToiletIcon x={410} y={135} />
        <SinkIcon x={470} y={135} />
        <SinkIcon x={470} y={205} />
      </g>

      {/* WC Herren EG (aktive Zone) */}
      <g>
        <ToiletIcon x={535} y={135} />
        <UrinalIcon x={595} y={135} />
        <UrinalIcon x={630} y={135} />
        <SinkIcon x={660} y={200} />
      </g>

      {/* WC Damen (unten) */}
      <g>
        <ToiletIcon x={525} y={370} scale={0.85} />
        <SinkIcon x={525} y={470} scale={0.8} />
      </g>
      {/* WC Herren (unten) */}
      <g>
        <UrinalIcon x={625} y={370} scale={0.85} />
        <SinkIcon x={625} y={470} scale={0.8} />
      </g>

      {/* Cafeteria Küche */}
      <g>
        {/* Küchenzeile */}
        <rect x={720} y={140} width={260} height={26} rx="4" fill="#F1F3F5" stroke="#4B5563" />
        <rect x={720} y={140} width={40} height={26} rx="2" fill="#E5E7EB" stroke="#4B5563" />
        <rect x={760} y={140} width={40} height={26} rx="2" fill="#E5E7EB" stroke="#4B5563" />
        {/* Spüle */}
        <rect x={1000} y={140} width={60} height={26} rx="2" fill="#F1F3F5" stroke="#4B5563" />
        <line x1={1030} y1={140} x2={1030} y2={166} />
        {/* Arbeitsfläche rechts */}
        <rect x={1080} y={140} width={200} height={26} rx="4" fill="#F1F3F5" stroke="#4B5563" />
      </g>

      {/* Cafeteria: runde Tische mit Stühlen */}
      <g>
        {[
          [820, 320], [980, 320], [1140, 320], [1260, 320],
          [820, 430], [980, 430], [1140, 430], [1260, 430],
          [820, 510], [980, 510], [1140, 510], [1260, 510],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx as number} cy={cy as number} r="22" fill="#F1F3F5" stroke="#4B5563" />
            {[0, 90, 180, 270].map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const sx = (cx as number) + Math.cos(rad) * 34;
              const sy = (cy as number) + Math.sin(rad) * 34;
              return <circle key={deg} cx={sx} cy={sy} r="7" fill="#F1F3F5" stroke="#4B5563" />;
            })}
          </g>
        ))}
      </g>
    </g>
  );
}

/* Symbole */
function ToiletIcon({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = 28 * scale;
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <rect x={0} y={0} width={s} height={s * 0.7} rx="4" fill="#F1F3F5" stroke="#4B5563" />
      <rect x={s * 0.15} y={-s * 0.35} width={s * 0.7} height={s * 0.35} rx="3" fill="#F1F3F5" stroke="#4B5563" />
    </g>
  );
}
function UrinalIcon({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = 22 * scale;
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <path
        d={`M 0 0 L ${s} 0 L ${s * 0.85} ${s * 1.1} Q ${s / 2} ${s * 1.35} ${s * 0.15} ${s * 1.1} Z`}
        fill="#F1F3F5"
        stroke="#4B5563"
      />
    </g>
  );
}
function SinkIcon({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = 30 * scale;
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <rect x={0} y={0} width={s} height={s * 0.55} rx="4" fill="#F1F3F5" stroke="#4B5563" />
      <circle cx={s / 2} cy={s * 0.28} r={s * 0.06} fill="#4B5563" />
    </g>
  );
}
