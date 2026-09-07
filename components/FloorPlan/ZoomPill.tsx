"use client";

export function ZoomPill({
  zoom,
  onDec,
  onInc,
  min = 75,
  max = 150,
}: {
  zoom: number;
  onDec: () => void;
  onInc: () => void;
  min?: number;
  max?: number;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full bg-white border border-[color:var(--fp-border)] px-1 py-1"
      style={{ boxShadow: "0 2px 6px -1px rgba(15,23,42,0.06), 0 12px 30px -18px rgba(15,23,42,0.2)" }}
      role="group"
      aria-label="Zoom"
    >
      <button
        type="button"
        onClick={onDec}
        disabled={zoom <= min}
        aria-label="Verkleinern"
        className="grid place-items-center h-8 w-8 rounded-full text-[#4B5563] disabled:opacity-30 hover:bg-[#F5F6F8] transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
      <span className="ts-mono text-[13px] font-medium text-[#202124] min-w-[46px] text-center">
        {zoom}&nbsp;%
      </span>
      <button
        type="button"
        onClick={onInc}
        disabled={zoom >= max}
        aria-label="Vergrößern"
        className="grid place-items-center h-8 w-8 rounded-full text-[#4B5563] disabled:opacity-30 hover:bg-[#F5F6F8] transition-colors"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
          <line x1="2" y1="6" x2="10" y2="6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="6" y1="2" x2="6" y2="10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
