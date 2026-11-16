"use client";

import { useState } from "react";
import Link from "@/components/LocaleLink";
import RevealBlur from "./RevealBlur";
import { useLanguage } from "@/context/LanguageContext";

type RoomStatus = "done" | "active" | "pending";

type RoomLabelKey =
  | "lobby"
  | "reception"
  | "office1"
  | "office2"
  | "office3"
  | "bath"
  | "meeting"
  | "kitchen"
  | "hallway"
  | "lounge"
  | "openoffice"
  | "phone1"
  | "phone2";

type Room = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  labelKey: RoomLabelKey;
  status: RoomStatus;
};

type Floor = {
  rooms: Room[];
};

const ROOM_LABELS: Record<"de" | "en" | "fr", Record<RoomLabelKey, string>> = {
  de: {
    lobby: "Lobby",
    reception: "Empfang",
    office1: "Büro 1",
    office2: "Büro 2",
    office3: "Büro 3",
    bath: "Sanitär",
    meeting: "Konferenz",
    kitchen: "Küche",
    hallway: "Flur",
    lounge: "Lounge",
    openoffice: "Open Office",
    phone1: "Phone 1",
    phone2: "Phone 2",
  },
  en: {
    lobby: "Lobby",
    reception: "Reception",
    office1: "Office 1",
    office2: "Office 2",
    office3: "Office 3",
    bath: "Restroom",
    meeting: "Meeting",
    kitchen: "Kitchen",
    hallway: "Hallway",
    lounge: "Lounge",
    openoffice: "Open office",
    phone1: "Phone 1",
    phone2: "Phone 2",
  },
  fr: {
    lobby: "Hall",
    reception: "Accueil",
    office1: "Bureau 1",
    office2: "Bureau 2",
    office3: "Bureau 3",
    bath: "Sanitaire",
    meeting: "Réunion",
    kitchen: "Cuisine",
    hallway: "Couloir",
    lounge: "Salon",
    openoffice: "Open space",
    phone1: "Phone 1",
    phone2: "Phone 2",
  },
};

const FLOOR_LABELS: Record<"de" | "en" | "fr", string[]> = {
  de: ["EG", "1. OG", "2. OG"],
  en: ["GF", "1st", "2nd"],
  fr: ["RDC", "1ᵉʳ", "2ᵉ"],
};

const FLOORS: Floor[] = [
  {
    rooms: [
      { id: "lobby", x: 10, y: 10, w: 180, h: 130, labelKey: "lobby", status: "done" },
      { id: "reception", x: 200, y: 10, w: 190, h: 60, labelKey: "reception", status: "done" },
      { id: "office1", x: 200, y: 80, w: 190, h: 60, labelKey: "office1", status: "active" },
      { id: "bath", x: 10, y: 150, w: 180, h: 80, labelKey: "bath", status: "pending" },
      { id: "meeting", x: 200, y: 150, w: 190, h: 80, labelKey: "meeting", status: "done" },
      { id: "hallway", x: 10, y: 240, w: 380, h: 70, labelKey: "hallway", status: "pending" },
    ],
  },
  {
    rooms: [
      { id: "office1", x: 10, y: 10, w: 120, h: 80, labelKey: "office1", status: "done" },
      { id: "office2", x: 140, y: 10, w: 120, h: 80, labelKey: "office2", status: "done" },
      { id: "office3", x: 270, y: 10, w: 120, h: 80, labelKey: "office3", status: "active" },
      { id: "meeting", x: 10, y: 100, w: 180, h: 130, labelKey: "meeting", status: "done" },
      { id: "kitchen", x: 200, y: 100, w: 190, h: 60, labelKey: "kitchen", status: "pending" },
      { id: "bath", x: 200, y: 170, w: 190, h: 60, labelKey: "bath", status: "done" },
      { id: "hallway", x: 10, y: 240, w: 380, h: 70, labelKey: "hallway", status: "done" },
    ],
  },
  {
    rooms: [
      { id: "openoffice", x: 10, y: 10, w: 250, h: 200, labelKey: "openoffice", status: "active" },
      { id: "phone1", x: 270, y: 10, w: 120, h: 60, labelKey: "phone1", status: "done" },
      { id: "phone2", x: 270, y: 80, w: 120, h: 60, labelKey: "phone2", status: "done" },
      { id: "lounge", x: 270, y: 150, w: 120, h: 60, labelKey: "lounge", status: "pending" },
      { id: "bath", x: 10, y: 220, w: 180, h: 80, labelKey: "bath", status: "done" },
      { id: "kitchen", x: 200, y: 220, w: 190, h: 80, labelKey: "kitchen", status: "pending" },
    ],
  },
];

const CONTENT = {
  de: {
    EYEBROW: "Auftraggeber-Portal",
    HEAD_1: "Ihre Kunden wissen es,",
    HEAD_2: "bevor sie fragen.",
    LEAD: "Statt Anrufe und E-Mail-Ketten sieht der Auftraggeber selbst nach — Live-Status, Fotos, Protokolle. Der Ton mit Ihren Kunden ändert sich, ohne dass Sie ein Wort mehr sagen müssen.",
    CTA_PRIMARY: "Kostenlosen Account erstellen",
    CTA_SECONDARY: "Live-Demo öffnen",
    DEMO_BADGE: "Demo",
    CREATE_TICKET: "Ticket erstellen",
    FLOOR_LABEL: "Stockwerk",
    STATUS_DONE: "Erledigt",
    STATUS_ACTIVE: "In Arbeit",
    STATUS_PENDING: "Offen",
  },
  en: {
    EYEBROW: "Client portal",
    HEAD_1: "Your clients know it",
    HEAD_2: "before they ask.",
    LEAD: "Instead of phone calls and email chains, the client looks for themselves — live status, photos, reports. The tone with your clients changes without you saying another word.",
    CTA_PRIMARY: "Create free account",
    CTA_SECONDARY: "Open live demo",
    DEMO_BADGE: "Demo",
    CREATE_TICKET: "Create ticket",
    FLOOR_LABEL: "Floor",
    STATUS_DONE: "Done",
    STATUS_ACTIVE: "In progress",
    STATUS_PENDING: "Pending",
  },
  fr: {
    EYEBROW: "Portail client",
    HEAD_1: "Vos clients le savent",
    HEAD_2: "avant de demander.",
    LEAD: "Fini les appels et les chaînes d'e-mails, votre client regarde lui-même — statut en direct, photos, comptes-rendus. Le ton avec vos clients change, sans que vous ayez un mot de plus à dire.",
    CTA_PRIMARY: "Créer un compte gratuit",
    CTA_SECONDARY: "Ouvrir la démo live",
    DEMO_BADGE: "Démo",
    CREATE_TICKET: "Créer un ticket",
    FLOOR_LABEL: "Étage",
    STATUS_DONE: "Terminé",
    STATUS_ACTIVE: "En cours",
    STATUS_PENDING: "À faire",
  },
} as const;

export default function TaskeyShare() {
  const { language } = useLanguage();
  const c = CONTENT[language];
  const roomLabels = ROOM_LABELS[language];
  const floorLabels = FLOOR_LABELS[language];
  const [activeFloor, setActiveFloor] = useState(0);

  const floor = FLOORS[activeFloor];

  const fillFor = (s: RoomStatus) =>
    s === "done"
      ? "rgba(16,185,129,0.15)"
      : s === "active"
      ? "rgba(251,146,60,0.28)"
      : "rgba(248,250,252,0.9)";
  const strokeFor = (s: RoomStatus) =>
    s === "done"
      ? "rgba(5,150,105,0.85)"
      : s === "active"
      ? "rgba(234,88,12,0.9)"
      : "rgba(203,213,225,1)";
  const textColorFor = (s: RoomStatus) =>
    s === "done" ? "#047857" : s === "active" ? "#9a3412" : "#475569";

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_65%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Linke Spalte */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.28em] uppercase text-blue-700 font-mono">
                {c.EYEBROW}
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.92] tracking-tight sm:tracking-[-0.03em] mb-6 text-slate-900 break-words">
              {c.HEAD_1}
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
                {c.HEAD_2}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-md">
              {c.LEAD}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all hover:shadow-xl hover:shadow-slate-900/20 text-base"
              >
                {c.CTA_PRIMARY}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base"
              >
                {c.CTA_SECONDARY}
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: Grundriss-Demo */}
          <div className="relative">
            <RevealBlur>
              <div className="relative rounded-[2rem] bg-white border border-slate-200 shadow-[0_30px_60px_-15px_rgba(15,23,42,0.18)] ring-1 ring-blue-500/10 overflow-hidden">
                {/* Header mit Ticket-Button + DEMO-Badge */}
                <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/70">
                  <button
                    type="button"
                    aria-disabled="true"
                    onClick={(e) => e.preventDefault()}
                    title={c.DEMO_BADGE}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold rounded-full text-sm cursor-not-allowed opacity-95 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                    </svg>
                    {c.CREATE_TICKET}
                  </button>

                  <span className="inline-flex items-center gap-1.5 text-[10px] font-black tracking-[0.28em] uppercase bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-full font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                    {c.DEMO_BADGE}
                  </span>
                </div>

                {/* Grundriss + Stockwerk-Tabs */}
                <div className="flex gap-3 sm:gap-4 p-4 sm:p-6">
                  <div className="flex-1 min-w-0">
                    <svg
                      viewBox="0 0 400 320"
                      className="w-full h-auto rounded-2xl bg-slate-50/50 border border-slate-100"
                      role="img"
                      aria-label={`${c.FLOOR_LABEL} ${floorLabels[activeFloor]}`}
                    >
                      {/* Außenhülle */}
                      <rect x="2" y="2" width="396" height="316" fill="none" stroke="#94a3b8" strokeWidth="2" rx="8" />
                      {floor.rooms.map((room) => (
                        <g key={room.id}>
                          <rect
                            x={room.x}
                            y={room.y}
                            width={room.w}
                            height={room.h}
                            fill={fillFor(room.status)}
                            stroke={strokeFor(room.status)}
                            strokeWidth="2"
                            rx="6"
                            style={
                              room.status === "active"
                                ? { animation: "share-room-pulse 1.6s ease-in-out infinite" }
                                : undefined
                            }
                          />
                          <text
                            x={room.x + room.w / 2}
                            y={room.y + room.h / 2}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize={room.w < 130 ? 14 : 15}
                            fontWeight={700}
                            fill={textColorFor(room.status)}
                            style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif", pointerEvents: "none" }}
                          >
                            {roomLabels[room.labelKey]}
                          </text>
                          {room.status === "active" && (
                            <circle
                              cx={room.x + room.w - 10}
                              cy={room.y + 10}
                              r="3.5"
                              fill="#ea580c"
                              style={{ animation: "share-dot-pulse 1.2s ease-in-out infinite" }}
                            />
                          )}
                        </g>
                      ))}
                    </svg>
                  </div>

                  {/* Stockwerk-Tabs */}
                  <div className="flex flex-col gap-2 w-14 sm:w-16 shrink-0">
                    <span className="text-[9px] font-black tracking-[0.22em] uppercase text-slate-400 text-center mb-1 font-mono">
                      {c.FLOOR_LABEL}
                    </span>
                    {FLOORS.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setActiveFloor(i)}
                        className={`px-1.5 py-2.5 rounded-xl text-xs font-black border transition-all ${
                          activeFloor === i
                            ? "bg-slate-900 text-white border-slate-900 shadow-md"
                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                        }`}
                        aria-pressed={activeFloor === i}
                      >
                        {floorLabels[i]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Status-Legende */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-5 sm:px-6 pb-5 sm:pb-6 text-[10px] sm:text-[11px] text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500" />
                    {c.STATUS_DONE}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full bg-orange-500/40 border border-orange-500"
                      style={{ animation: "share-dot-pulse 1.6s ease-in-out infinite" }}
                    />
                    {c.STATUS_ACTIVE}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-100 border border-slate-300" />
                    {c.STATUS_PENDING}
                  </span>
                </div>
              </div>
            </RevealBlur>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes share-room-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        @keyframes share-dot-pulse {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 1; }
        }
      `}</style>
    </section>
  );
}
