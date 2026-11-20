"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { EASE_IN_OUT, EASE_OUT, durations } from "@/lib/motion";
import { OPEN_FEATURE_EVENT } from "@/components/home/feature-window/features";
import FlowBridge from "./FlowBridge";
import s from "./ProblemSection.module.css";

/* ------------------------------------------------------------------
   DAS PROBLEM · zwischen Hero und Funktionen-Fenster
   Drei Karten mit eigenen Inline-SVG-Illustrationen. Beim Hineinscrollen
   einmalig animiert, danach ruhig. „Gelöst mit …“ öffnet die passende
   Funktion im Funktionen-Fenster.
   ------------------------------------------------------------------ */

/** Blau-Töne kommen aus der Button-Variable (--brand-signal-blue, wie „Kostenlosen Account erstellen“):
    Die SVGs setzen `color` darauf, blaue Teile zeichnen mit currentColor. */
const C = {
  navy: "#10233C",
  blue: "currentColor",
  red: "#E5484D",
  grey: "#CBD2DC",
};
const SVG_STYLE = { color: "var(--brand-signal-blue)" } as const;
/** Einheitlicher Linienstil: 2,5 px, runde Enden. */
const LINE = { strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" } as const;
const FILL_BOX = { transformBox: "fill-box", transformOrigin: "center" } as const;

type Problem = {
  feature: string;
  featureName: string;
  title: string;
  text: string;
  art: (v: ArtVariants) => ReactNode;
};
type ArtVariants = { arrow: Variants; cross: Variants; wobble: Variants };

/* ---------- Illustration 1: Stundenzettel → Excel ---------- */
function ArtTimesheet({ arrow }: ArtVariants) {
  return (
    <svg viewBox="0 0 320 200" className={s.art} style={SVG_STYLE} aria-hidden="true" focusable="false">
      {/* Papier-Stundenzettel */}
      <g {...LINE}>
        <path d="M58 46h50l14 14v86a6 6 0 0 1-6 6H58a6 6 0 0 1-6-6V52a6 6 0 0 1 6-6Z" fill="#fff" stroke={C.navy} />
        <path d="M108 46v14h14" stroke={C.navy} />
        <path d="M64 74h26M64 90h44M64 106h36M64 122h44M64 138h22" stroke={C.grey} />
        <path d="M96 72l4 4 7-8" stroke={C.blue} />
      </g>
      {/* roter Doppelpfeil */}
      <motion.g variants={arrow} style={FILL_BOX}>
        <g {...LINE} stroke={C.red}>
          <path d="M140 90h40M172 82l8 8-8 8" />
          <path d="M180 112h-40M148 104l-8 8 8 8" />
        </g>
      </motion.g>
      {/* Excel-Tabelle */}
      <g {...LINE}>
        <rect x="198" y="52" width="76" height="96" rx="6" fill="#fff" stroke={C.blue} />
        <rect x="199.25" y="53.25" width="73.5" height="17.5" rx="5" fill={C.blue} opacity="0.18" stroke="none" />
        <path d="M198 72h76" stroke={C.blue} />
        <path d="M198 92h76M198 112h76M198 132h76M224 72v76M250 72v76" stroke={C.blue} opacity="0.25" />
        <path d="M224 52v20M250 52v20" stroke={C.blue} opacity="0.25" />
      </g>
    </svg>
  );
}

/* ---------- Illustration 2: drei Tools, nichts verbunden ---------- */
function ArtTools({ cross }: ArtVariants) {
  const crossAt = (x: number, i: number) => (
    <motion.g key={x} custom={i} variants={cross} style={FILL_BOX}>
      <circle cx={x} cy="84" r="10" fill="#fff" stroke={C.red} {...{ strokeWidth: 2.5 }} />
      <path d={`M${x - 4} 80l8 8M${x + 4} 80l-8 8`} {...LINE} stroke={C.red} />
    </motion.g>
  );
  return (
    <svg viewBox="0 0 320 200" className={s.art} style={SVG_STYLE} aria-hidden="true" focusable="false">
      {/* gestrichelte, unterbrochene Verbindungen */}
      <g {...LINE} stroke={C.red} strokeDasharray="2 7">
        <path d="M86 84h34M200 84h34" />
      </g>
      {/* generische Chat-Sprechblase */}
      <g {...LINE} stroke={C.blue}>
        <path d="M40 66h36a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H56l-10 9v-9h-6a8 8 0 0 1-8-8V74a8 8 0 0 1 8-8Z" fill="#fff" />
        <path d="M46 80h24M46 89h16" />
      </g>
      {/* Handy mit Uhr */}
      <g {...LINE} stroke={C.navy}>
        <rect x="142" y="54" width="36" height="62" rx="7" fill="#fff" />
        <path d="M155 108h10" />
        <circle cx="160" cy="80" r="10" />
        <path d="M160 74v6l4 3" />
      </g>
      {/* Rechnung */}
      <g {...LINE} stroke={C.red}>
        <path d="M252 58h32v52l-5-4-5 4-5-4-6 4-5-4-6 4Z" fill="#fff" />
        <path d="M259 70h18M259 80h18M259 90h10" />
      </g>
      {crossAt(103, 0)}
      {crossAt(217, 1)}
      <g className={s.artLabel}>
        <text x="58" y="146" textAnchor="middle">WhatsApp</text>
        <text x="160" y="146" textAnchor="middle">Excel</text>
        <text x="268" y="146" textAnchor="middle">Buchhaltung</text>
      </g>
    </svg>
  );
}

/* ---------- Illustration 3: Taschenrechner mit Fragezeichen ---------- */
function ArtCalculator({ wobble }: ArtVariants) {
  return (
    <svg viewBox="0 0 320 200" className={s.art} style={SVG_STYLE} aria-hidden="true" focusable="false">
      {/* blasse €-Zeichen */}
      <g {...LINE} stroke={C.grey}>
        <path d="M96 76a16 16 0 1 0 0 24M74 84h18M74 92h18" />
        <path d="M250 104a13 13 0 1 0 0 20M232 111h15M232 117h15" />
      </g>
      {/* Taschenrechner */}
      <g {...LINE} stroke={C.navy}>
        <rect x="126" y="40" width="68" height="120" rx="10" fill="#fff" />
        <rect x="136" y="50" width="48" height="30" rx="4" />
        <path d="M140 98h0M160 98h0M180 98h0M140 116h0M160 116h0M180 116h0M140 134h0M160 134h0M180 134h0" strokeWidth={6} />
      </g>
      {/* rotes Fragezeichen im Display */}
      <motion.g variants={wobble} style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}>
        <g {...LINE} stroke={C.red}>
          <path d="M155 59a5 5 0 1 1 7 4.6c-1.3.6-2 1.6-2 3v1.4" />
          <path d="M160 73h0" strokeWidth={3.5} />
        </g>
      </motion.g>
    </svg>
  );
}

const PROBLEMS: Problem[] = [
  {
    feature: "zeiterfassung",
    featureName: "Zeiterfassung",
    title: "Stundenzettel und Excel-Chaos",
    text: "Arbeitszeiten auf Papier, am Monatsende abgetippt. Und trotzdem stimmen die Stunden nie.",
    art: (v) => <ArtTimesheet {...v} />,
  },
  {
    feature: "personalplanung",
    featureName: "Personalplanung",
    title: "Drei Tools, nichts ist verbunden",
    text: "Schichten per WhatsApp, Zeiten in Excel, Rechnungen im nächsten Programm. Alles doppelt abtippen, Fehler inklusive.",
    art: (v) => <ArtTools {...v} />,
  },
  {
    feature: "finanzplanung",
    featureName: "Finanzplanung",
    title: "Keine Ahnung, welches Objekt sich lohnt",
    text: "Marge pro Objekt? Lohnkostenquote? Alles Bauchgefühl, weil die Zahlen fehlen.",
    art: (v) => <ArtCalculator {...v} />,
  },
];

export default function ProblemSection() {
  const reduced = useReducedMotion();
  const d = durations(reduced);
  const gridRef = useRef<HTMLDivElement>(null);

  // Einmalige Reveal-Animationen beim Hineinscrollen (danach ruhig, kein Loop).
  // Der Startzustand ist immer gleich (Server und Client identisch); bei reduzierter
  // Bewegung springt nur die Bewegung sofort, die Deckkraft blendet kurz ein.
  const move = (duration: number, delay: number) =>
    reduced ? { duration: 0 } : { duration, ease: EASE_OUT, delay };
  const fade = (delay: number) => ({ duration: d.REVEAL, ease: EASE_OUT, delay: reduced ? 0 : delay });
  const v: ArtVariants = {
    arrow: {
      hidden: { opacity: 0, x: -18 },
      shown: { opacity: 1, x: 0, transition: { x: move(d.REVEAL, 0.15), opacity: fade(0.15) } },
    },
    cross: {
      hidden: { opacity: 0, scale: 0.6 },
      shown: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: {
          scale: move(d.PRESS, 0.25 + i * 0.12),
          opacity: reduced ? fade(0) : { duration: d.PRESS, ease: EASE_OUT, delay: 0.25 + i * 0.12 },
        },
      }),
    },
    wobble: {
      hidden: { rotate: 0 },
      shown: reduced
        ? { rotate: 0 }
        : {
            rotate: [0, -14, 10, -5, 0],
            transition: { duration: d.REVEAL, ease: EASE_IN_OUT, delay: 0.25, times: [0, 0.25, 0.55, 0.8, 1] },
          },
    },
  };

  const solve = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent(OPEN_FEATURE_EVENT, { detail: id }));
  };

  return (
    <section className={s.section} aria-labelledby="tk-problem-title">
      <div className="ts-container-wide">
        <header className={s.head}>
          <span className={s.pill}>Das Problem</span>
          <h2 id="tk-problem-title" className={s.h2}>
            Kommt dir das bekannt vor?
          </h2>
        </header>

        <div ref={gridRef} className={s.grid}>
          {PROBLEMS.map((p) => (
            <motion.a
              key={p.feature}
              href="#funktionen"
              onClick={(e) => solve(e, p.feature)}
              className={s.card}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={s.artBox}>{p.art(v)}</div>
              <h3 className={s.title}>{p.title}</h3>
              <p className={s.text}>{p.text}</p>
              <span className={s.solve}>
                Gelöst mit: {p.featureName} <span aria-hidden="true">→</span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* Die Karten „fließen“ in den Satz darunter */}
        <FlowBridge gridRef={gridRef} />
      </div>
    </section>
  );
}
