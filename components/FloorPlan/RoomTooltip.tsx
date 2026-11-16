"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Room } from "@/lib/data/floorplan";
import { EASE_OUT, durations } from "@/lib/motion";
import { STATUS_META } from "@/lib/data/floorplan";

export function RoomTooltip({
  room,
  x,
  y,
}: {
  room: Room;
  x: number;
  y: number;
}) {
  const meta = STATUS_META[room.status];
  const reduced = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute z-40"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, calc(-100% - 14px))",
      }}
    >
      {/* Wächst aus seinem Auslöser: dem Raum unter dem Pfeil. */}
      <motion.div
        key={room.id}
        style={{ transformOrigin: "50% 100%" }}
        initial={{ opacity: 0, scale: reduced ? 1 : 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: durations(reduced).REVEAL, ease: EASE_OUT }}
      >
      <div
        className="rounded-xl bg-white border border-[color:var(--fp-border)] px-3.5 py-3 min-w-[220px] max-w-[300px]"
        style={{ boxShadow: "0 8px 30px -10px rgba(15,23,42,0.28)" }}
      >
        {/* Status + Titel */}
        <div className="flex items-center gap-2">
          <span
            className="h-2.5 w-2.5 rounded-full shrink-0"
            style={{ background: meta.color }}
          />
          <span className="text-[11px] font-semibold uppercase tracking-[0.08em]" style={{ color: meta.color }}>
            {meta.label}
          </span>
        </div>
        <p className="mt-1 text-[14px] font-semibold text-[#202124]">
          {room.suffix ? `${room.name} · ${room.suffix}` : room.name}
        </p>

        {/* Historie */}
        <div className="mt-3 border-t border-[color:var(--fp-border)] pt-3 flex flex-col gap-2">
          {room.events.slice(0, 3).map((e, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#CBD2D9] shrink-0" />
              <div className="min-w-0">
                <p className="text-[12px] text-[#202124] leading-snug truncate">
                  <span className="font-medium">{e.employee}</span> · {e.action}
                </p>
                <p className="text-[11px] text-[#8A8F98] mt-0.5">{e.at}</p>
              </div>
            </div>
          ))}
        </div>

        {room.openTasks && room.openTasks > 0 ? (
          <div
            className="mt-3 rounded-lg px-2.5 py-2 text-[11px] leading-snug"
            style={{
              background: "rgba(244,63,94,0.08)",
              color: "#B91C1C",
              border: "1px solid rgba(244,63,94,0.2)",
            }}
          >
            <strong className="font-semibold">Offene Aufgabe:</strong> {room.taskTitle}
          </div>
        ) : null}

        <p className="mt-3 text-[10.5px] text-[#8A8F98]">Klick für Details</p>
      </div>

      {/* Pfeil */}
      <div
        className="mx-auto -mt-px h-2 w-2 rotate-45 bg-white border-r border-b border-[color:var(--fp-border)]"
        style={{ marginTop: -5 }}
      />
      </motion.div>
    </div>
  );
}
