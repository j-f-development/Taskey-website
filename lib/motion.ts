/**
 * Bewegungssystem der Taskey-Website (siehe MOTION.md).
 * Genau drei Dauern. Im CSS heißen sie --motion-press, --motion-reveal, --motion-scene.
 * Keine anderen Dauern im Code verwenden.
 */

/** Druck, Hover, Button-Feedback (Sekunden). */
export const PRESS = 0.16;
/** Menü, Dropdown, Tab-Inhalt, Akkordeon (Sekunden). */
export const REVEAL = 0.7;
/** Ganzer Szenenwechsel, Karte wird zur Seite (Sekunden). */
export const SCENE = 1.2;

/** Schließen darf etwas schneller sein als Öffnen, nie langsamer. */
export const CLOSE_FACTOR = 0.8;

/** Hinein: schnell los, weich ankommen. */
export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
/** Szenen und Rückwege. */
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

/** Stagger für Listen: höchstens 40 ms pro Element, höchstens 6 Elemente. */
export const STAGGER = 0.04;
export const STAGGER_MAX = 6;
export const stagger = (i: number) => Math.min(i, STAGGER_MAX - 1) * STAGGER;

/** Dieselben Werte bei „Bewegung reduzieren“. */
export const REDUCED = { PRESS: 0, REVEAL: 0.15, SCENE: 0.2 } as const;

/** Liefert die drei Dauern passend zu prefers-reduced-motion. */
export const durations = (reduced: boolean | null) =>
  reduced ? REDUCED : { PRESS, REVEAL, SCENE };
