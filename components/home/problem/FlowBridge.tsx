"use client";

import { useEffect, useRef, type RefObject } from "react";
import s from "./ProblemSection.module.css";

/* ------------------------------------------------------------------
   „Fließen“ der drei Problem-Karten in den Satz darunter, wie eine
   Datenübertragung. Pro Verbindung (links geschwungen, Mitte gerade, rechts
   gespiegelt) zwei Linien mit identischem Pfad:
   - Spur: dauerhaft sichtbar mit 35 %, wird nur beim ersten Mal gezeichnet
   - Lauflinie: volle Farbe darüber, ein Punkt läuft an ihrer Spitze mit
   Ablauf (requestAnimationFrame):
   1. Auftakt beim Hineinscrollen: Spuren und Lauflinien zeichnen sich zusammen
      (800 ms, 80 ms versetzt); danach wird der Satz voll sichtbar.
   2. Danach hat jede Linie ihre eigene Schleife: Lauflinie mit Punkt zeichnet
      sich in 800 ms, der Punkt blendet bei Ankunft weich aus, die Lauflinie
      blendet in 600 ms aus, dann eine zufällige Pause (1,2 bis 2,6 s, jedes Mal
      neu). Erster eigener Start nach dem Satz-Einblenden: 0 / 0,6 / 1,1 s.
   3. Höchstens zwei Pakete gleichzeitig unterwegs; sonst wartet die dritte Linie.
   Alle Stile direkt am DOM: keine React-Renders pro Frame und kein
   Unterschied zwischen Server- und Client-HTML.
   ------------------------------------------------------------------ */

const DRAW = 800;
const STAGGER = 80;
const RUN_FADE = 600; // Lauflinie blendet nach der Ankunft aus
const DOT_FADE = 100; // Punkt blendet bei Ankunft weich aus
const PAUSE_MIN = 1200;
const PAUSE_MAX = 2600;
const MAX_IN_FLIGHT = 2;
const INTRO0 = DRAW + STAGGER; // Satz erscheint, wenn die Linien ankommen
const INTRO = 600;
const LOOP0 = INTRO0 + INTRO; // Satz voll sichtbar: ab hier eigene Schleifen
const FIRST_OFFSETS = [0, 600, 1100];
const TRAIL = 0.35; // Deckkraft der Spur
/** Linke und rechte Linie enden knapp neben der Satzmitte. */
const END_OFFSET = 14;

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp = (v: number) => Math.min(Math.max(v, 0), 1);

export default function FlowBridge({ gridRef }: { gridRef: RefObject<HTMLDivElement | null> }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const dotsRef = useRef<SVGGElement>(null);
  const trailRefs = useRef<(SVGPathElement | null)[]>([]);
  const runRefs = useRef<(SVGPathElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const textRef = useRef<HTMLSpanElement>(null);
  const arrowRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const text = textRef.current;
    const arrow = arrowRef.current;
    const grid = gridRef.current;
    if (!wrap || !svg || !text || !arrow || !grid) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 900px)");
    const lengths = [0, 0, 0];
    let shown = -1; // zuletzt gezeichneter Zeitpunkt (für Neuberechnung bei Größenänderung)

    const showSentence = (k: number) => {
      text.style.opacity = String(0.25 + 0.75 * k);
      text.style.transform = `translateY(${4 * (1 - k)}px)`;
      arrow.style.opacity = String(k);
    };

    /** Start- und Endpunkte aus den echten Positionen von Karten und Satz. */
    const layout = () => {
      const cards = Array.from(grid.children).slice(0, 3) as HTMLElement[];
      const sr = svg.getBoundingClientRect();
      if (cards.length < 3 || sr.width === 0) return;
      const tr = text.getBoundingClientRect();
      const h = sr.height;
      svg.setAttribute("viewBox", `0 0 ${sr.width} ${h}`);
      const mid = tr.left + tr.width / 2 - sr.left;
      const ends = [mid - END_OFFSET, mid, mid + END_OFFSET];
      cards.forEach((c, i) => {
        const r = c.getBoundingClientRect();
        const sx = r.left + r.width / 2 - sr.left;
        const ex = ends[i];
        const d =
          i === 1
            ? `M ${sx} 1.5 L ${ex} ${h - 1.5}`
            : `M ${sx} 1.5 C ${sx} ${h * 0.62}, ${ex} ${h * 0.38}, ${ex} ${h - 1.5}`;
        for (const p of [trailRefs.current[i], runRefs.current[i]]) {
          if (!p) continue;
          p.setAttribute("d", d);
          lengths[i] = p.getTotalLength();
          p.style.strokeDasharray = `${lengths[i]}`;
        }
      });
      draw(shown); // Strichlängen haben sich geändert: aktuellen Zustand neu setzen
    };

    /** Pro Linie: Start des aktuellen Durchlaufs und frühester Start des nächsten.
        Der Auftakt zählt als erster Durchlauf (Start 0 / 80 / 160 ms). */
    const lines = [0, 1, 2].map((i) => ({ start: i * STAGGER, next: LOOP0 + FIRST_OFFSETS[i] }));
    const pause = () => PAUSE_MIN + Math.random() * (PAUSE_MAX - PAUSE_MIN);

    /** Zeichnet den Zustand zum Zeitpunkt `e` (ms seit dem ersten Hineinscrollen; < 0 = noch nichts). */
    const draw = (e: number) => {
      shown = e;
      // Neue Durchläufe starten (frühester zuerst), höchstens zwei Pakete gleichzeitig unterwegs
      if (e >= 0) {
        let inFlight = lines.filter((l) => e - l.start < DRAW).length;
        for (const l of [...lines].sort((a, b) => a.next - b.next)) {
          if (inFlight >= MAX_IN_FLIGHT) break;
          if (e >= l.next && e - l.start >= DRAW + RUN_FADE) {
            l.start = e;
            l.next = e + DRAW + RUN_FADE + pause();
            inFlight++;
          }
        }
      }
      for (let i = 0; i < 3; i++) {
        const run = runRefs.current[i];
        const trail = trailRefs.current[i];
        const dot = dotRefs.current[i];
        if (!run || !trail || !dot) continue;
        const L = lengths[i];
        // Spur: zeichnet sich nur beim Auftakt mit, danach bleibt sie vollständig stehen
        const tr = e < 0 ? 0 : easeOut(clamp((e - i * STAGGER) / DRAW));
        trail.style.strokeDashoffset = `${L * (1 - tr)}`;
        const d = e < 0 ? -1 : e - lines[i].start;
        if (d >= 0 && d < DRAW) {
          const k = easeOut(d / DRAW);
          run.style.strokeDashoffset = `${L * (1 - k)}`;
          run.style.opacity = "1";
          const pt = run.getPointAtLength(L * k);
          dot.setAttribute("cx", `${pt.x}`);
          dot.setAttribute("cy", `${pt.y}`);
          const remain = DRAW - d;
          dot.style.opacity = String(remain < DOT_FADE ? remain / DOT_FADE : 1);
        } else if (d >= DRAW && d < DRAW + RUN_FADE) {
          run.style.strokeDashoffset = "0";
          run.style.opacity = String(1 - easeInOut((d - DRAW) / RUN_FADE));
          dot.style.opacity = "0";
        } else {
          run.style.strokeDashoffset = `${L}`;
          run.style.opacity = "0";
          dot.style.opacity = "0";
        }
      }
    };

    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(wrap);
    ro.observe(grid);

    // Reduzierte Bewegung: keine Schleife, nur die statischen Spuren, Satz direkt sichtbar
    if (reduced) {
      draw(2 * DRAW); // Spuren vollständig
      svg.querySelectorAll<SVGPathElement>("[data-run]").forEach((p) => (p.style.display = "none"));
      dotsRef.current?.style.setProperty("display", "none");
      showSentence(1);
      return () => ro.disconnect();
    }

    let raf = 0;
    let inView = false;
    let elapsed = 0; // läuft nur, solange der Abschnitt sichtbar und der Tab im Vordergrund ist
    let last = 0;
    let introDone = false;
    let started = false;
    draw(-1); // vor dem ersten Hineinscrollen: keine Linien, keine Punkte

    const tick = (now: number) => {
      raf = 0;
      if (!inView || document.hidden) {
        last = 0;
        return; // pausiert; IntersectionObserver/visibilitychange starten neu
      }
      const dt = last ? Math.min(now - last, 50) : 0;
      last = now;
      elapsed += dt;
      if (mobile.matches) {
        // Handy: keine Linien, nur der Satz blendet beim ersten Hineinscrollen kurz ein
        const k = easeOut(clamp(elapsed / INTRO));
        showSentence(k);
        if (k >= 1) {
          introDone = true;
          return;
        }
      } else {
        draw(elapsed);
        if (!introDone) {
          const k = easeOut(clamp((elapsed - INTRO0) / INTRO));
          showSentence(k);
          if (k >= 1) introDone = true;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf && inView && !document.hidden && !(mobile.matches && introDone)) raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        inView = e.isIntersecting;
        if (inView && !started) {
          started = true;
          elapsed = 0;
        }
        kick();
      },
      { threshold: 0.4 },
    );
    io.observe(wrap);
    const onVis = () => kick();
    document.addEventListener("visibilitychange", onVis);
    mobile.addEventListener("change", kick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      mobile.removeEventListener("change", kick);
    };
  }, [gridRef]);

  const pathProps = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" } as const;

  return (
    <div ref={wrapRef} className={s.flowWrap}>
      <svg
        ref={svgRef}
        className={s.flow}
        style={{ color: "var(--brand-signal-blue)" }}
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="none"
      >
        {/* Spuren: dauerhaft, 35 % */}
        <g style={{ opacity: TRAIL }}>
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              ref={(el) => {
                trailRefs.current[i] = el;
              }}
              {...pathProps}
            />
          ))}
        </g>
        {/* Lauflinien: volle Farbe, pro Durchlauf neu gezeichnet */}
        <g>
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              ref={(el) => {
                runRefs.current[i] = el;
              }}
              data-run=""
              {...pathProps}
            />
          ))}
        </g>
        <g ref={dotsRef}>
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              r={3}
              fill="currentColor"
              style={{ opacity: 0 }}
            />
          ))}
        </g>
      </svg>
      <p className={s.bridge}>
        <span ref={textRef} className={s.bridgeText}>
          Taskey bringt alles in ein Dashboard.
        </span>
        <svg ref={arrowRef} className={s.bridgeArrow} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </p>
    </div>
  );
}
