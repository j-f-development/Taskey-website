"use client";

import { motion, AnimatePresence } from "motion/react";
import type { Room } from "@/lib/data/floorplan";
import { DEMO_STATUS } from "./status";

export function RoomDetail({
  room,
  onClose,
}: {
  room: Room | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {room ? (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="absolute right-4 bottom-4 z-30 w-[320px] max-w-[calc(100%-2rem)]"
        >
          <RoomDetailCard room={room} onClose={onClose} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function RoomDetailCard({
  room,
  onClose,
}: {
  room: Room;
  onClose: () => void;
}) {
  const meta = DEMO_STATUS[room.status];

  return (
    <div
      className="max-h-[360px] overflow-y-auto rounded-2xl bg-white border border-[color:var(--fp-border)] p-5"
      style={{ boxShadow: "0 20px 60px -20px rgba(15,23,42,0.35)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: meta.color }}
            />
            <span
              className="text-[10.5px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: meta.color }}
            >
              {meta.label}
            </span>
          </div>
          <h3 className="mt-1 text-[16px] font-semibold text-[#202124]">
            {room.suffix ? `${room.name} · ${room.suffix}` : room.name}
          </h3>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="grid place-items-center h-8 w-8 rounded-full text-[#8A8F98] hover:bg-[#F5F6F8]"
          aria-label="Schließen"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2.5 2.5l9 9M11.5 2.5l-9 9"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Kennzahlen */}
      <dl className="mt-4 grid grid-cols-2 gap-3">
        <MetricCell
          label="Zuletzt gereinigt"
          value={room.lastClean ?? "—"}
          sub={room.lastCleanBy}
        />
        <MetricCell
          label="Nächster Einsatz"
          value={room.nextScheduled ?? "—"}
        />
      </dl>

      {room.openTasks && room.openTasks > 0 ? (
        <div
          className="mt-4 rounded-xl px-3 py-3 text-[12px] leading-snug"
          style={{
            background: "rgba(244,63,94,0.08)",
            color: "#B91C1C",
            border: "1px solid rgba(244,63,94,0.2)",
          }}
        >
          <div className="flex items-center justify-between gap-3">
            <strong className="font-semibold">Offene Aufgabe</strong>
            {room.taskPriority ? (
              <span className="text-[10.5px] uppercase tracking-[0.1em]">
                Priorität {room.taskPriority}
              </span>
            ) : null}
          </div>
          <p className="mt-1">{room.taskTitle}</p>
        </div>
      ) : null}

      {/* Verlauf */}
      <div className="mt-5">
        <p className="text-[10.5px] uppercase tracking-[0.12em] text-[#8A8F98] font-semibold">
          Verlauf
        </p>
        <ol className="mt-2 flex flex-col gap-2.5">
          {room.events.map((e, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#CBD2D9] shrink-0" />
              <div className="min-w-0">
                <p className="text-[12.5px] text-[#202124] leading-snug">
                  <span className="font-medium">{e.employee}</span> · {e.action}
                </p>
                <p className="text-[11px] text-[#8A8F98] mt-0.5">{e.at}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function MetricCell({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-[color:var(--fp-border)] bg-[#FAFAFA] p-3">
      <p className="text-[10px] uppercase tracking-[0.12em] text-[#8A8F98] font-semibold">
        {label}
      </p>
      <p className="mt-1 text-[13px] font-semibold text-[#202124]">{value}</p>
      {sub ? <p className="text-[11px] text-[#8A8F98] mt-0.5">{sub}</p> : null}
    </div>
  );
}
