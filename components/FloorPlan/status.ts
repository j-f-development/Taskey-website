import type { CleaningStatus } from "@/lib/data/floorplan";

/** Shared visual language for the model, room list and legend. */
export const DEMO_STATUS: Record<CleaningStatus, { label: string; color: string; floor: string; background: string; symbol: string }> = {
  clean: { label: "Gereinigt", color: "#08783e", floor: "#21b965", background: "#e0f6e8", symbol: "✓" },
  progress: { label: "Wird gereinigt", color: "#9a4b00", floor: "#ffad19", background: "#fff0cb", symbol: "◷" },
  failed: { label: "Ausgefallen", color: "#be2036", floor: "#ed4058", background: "#ffe4e8", symbol: "!" },
  pending: { label: "Steht noch an", color: "#586575", floor: "#d8dfe5", background: "#edf0f4", symbol: "○" },
};
