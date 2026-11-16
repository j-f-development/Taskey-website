"use client";

import { useId, useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { CLOSE_FACTOR, EASE_IN_OUT, EASE_OUT, durations } from "@/lib/motion";

/**
 * Einheitliches FAQ-Akkordeon für die ganze Website.
 * - Die komplette Zeile ist ein <button> (aria-expanded, aria-controls), auch per Enter/Leertaste.
 * - Das „+“ dreht sich beim Öffnen zum „ד.
 * - Auf- und Zuklappen nach MOTION.md: Die Antwort gleitet aus der Frage heraus (Reveal),
 *   die Zeilen darunter rücken per transform nach.
 * - Geschlossene Antworten bleiben im HTML (hidden), damit Suchmaschinen sie lesen.
 */

export type FaqAccordionItem = { q: ReactNode; a: ReactNode; id?: string };

type Look = {
  list?: string;
  listStyle?: CSSProperties;
  item?: string;
  itemStyle?: CSSProperties;
  button: string;
  buttonStyle?: CSSProperties;
  question?: string;
  questionStyle?: CSSProperties;
  answer: string;
  answerStyle?: CSSProperties;
  icon: string;
  iconStyle?: CSSProperties;
};

/** Fertige Erscheinungsbilder, passend zu den bisherigen FAQ-Bereichen. */
export const FAQ_LOOKS = {
  /** Apple-Stil: Trennlinien, „+“ in Akzentfarbe (Erstgespräch, Preise, Kostenlos starten, GEO, Landingpages). */
  apple: {
    item: "relative scroll-mt-20",
    button:
      "faq-row -mx-3 px-3 py-5 rounded-lg flex items-center justify-between gap-6 text-left apl-headline cursor-pointer transition-colors hover:bg-slate-900/[0.035]",
    buttonStyle: { fontSize: "1.0625rem", width: "calc(100% + 1.5rem)" },
    question: "faq-question",
    answer: "faq-answer apl-body -mt-2 pb-5 max-w-[70ch]",
    icon: "apl-small text-[color:var(--apl-accent)] shrink-0",
  },
  /** Karten-Stil der Rechner-Seiten. */
  /** Landingpage-Stil (components/landing/primitives.tsx). */
  landing: {
    listStyle: { borderTop: "1px solid rgba(0,0,0,0.1)" },
    item: "relative",
    itemStyle: { borderBottom: "1px solid rgba(0,0,0,0.1)" },
    button:
      "faq-row -mx-3 px-3 py-5 rounded-lg flex justify-between gap-4 text-left cursor-pointer transition-colors hover:bg-slate-900/[0.035]",
    buttonStyle: { width: "calc(100% + 1.5rem)", fontSize: "17px", fontWeight: 600, color: "#1d1d1f" },
    answer: "-mt-2 pb-5",
    answerStyle: { fontSize: "15px", lineHeight: 1.7, color: "#6e6e73", maxWidth: "70ch" },
    icon: "shrink-0",
    iconStyle: { color: "#0071e3", fontWeight: 500 },
  },
  card: {
    list: "space-y-3",
    item: "relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden",
    button:
      "faq-row w-full p-5 flex items-center justify-between gap-4 text-left text-base font-semibold text-slate-900 cursor-pointer transition-colors hover:bg-slate-50",
    answer: "-mt-2 px-5 pb-5 text-sm leading-relaxed text-slate-700",
    icon: "text-blue-700 shrink-0",
  },
} satisfies Record<string, Look>;


export type FaqLook = keyof typeof FAQ_LOOKS;

export function FaqAccordion({
  items,
  variant = "apple",
  look: customLook,
  single = false,
  defaultOpen = [],
  renderIcon,
}: {
  items: FaqAccordionItem[];
  /** Fertiges Erscheinungsbild (auch aus Server-Komponenten nutzbar). */
  variant?: FaqLook;
  /** Eigenes Erscheinungsbild (nur aus Client-Komponenten). */
  look?: Look;
  /** Nur eine Antwort gleichzeitig offen. */
  single?: boolean;
  defaultOpen?: number[];
  /** Eigenes Symbol (bekommt den Zustand). Standard: „+“, das sich zum „ד dreht. */
  renderIcon?: (open: boolean) => ReactNode;
}) {
  const look: Look = customLook ?? FAQ_LOOKS[variant];
  const uid = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set(defaultOpen));
  const reduced = useReducedMotion();
  const d = durations(reduced);
  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(single ? [] : prev);
      if (!prev.has(i)) next.add(i);
      return next;
    });

  return (
    <LayoutGroup id={uid}>
      <div className={look.list} style={look.listStyle}>
        {items.map((it, i) => {
          const isOpen = open.has(i);
          const btnId = `${uid}-q${i}`;
          const ansId = `${uid}-a${i}`;
          return (
            <motion.div
              key={i}
              id={it.id}
              layout="position"
              transition={{ layout: { duration: isOpen ? d.REVEAL : d.REVEAL * CLOSE_FACTOR, ease: EASE_OUT } }}
              className={look.item}
              style={look.itemStyle}
            >
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={ansId}
                onClick={() => toggle(i)}
                className={look.button}
                style={look.buttonStyle}
              >
                <span className={look.question} style={look.questionStyle}>
                  {it.q}
                </span>
                {renderIcon ? (
                  renderIcon(isOpen)
                ) : (
                  <span
                    aria-hidden
                    className={look.icon}
                    style={{
                      display: "inline-block",
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform var(--motion-reveal) var(--ease-out)",
                      ...look.iconStyle,
                    }}
                  >
                    +
                  </span>
                )}
              </button>
              <div id={ansId} role="region" aria-labelledby={btnId}>
                <AnimatePresence initial={false} mode="popLayout">
                  {isOpen && (
                    <motion.div
                      key="a"
                      initial={{ opacity: 0, y: reduced ? 0 : -12 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: d.REVEAL, ease: EASE_OUT } }}
                      exit={{
                        opacity: 0,
                        y: reduced ? 0 : -8,
                        transition: { duration: d.REVEAL * CLOSE_FACTOR, ease: EASE_IN_OUT },
                      }}
                    >
                      <div className={look.answer} style={look.answerStyle}>
                        {it.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Geschlossen: Antwort bleibt im HTML, aber unsichtbar */}
                {!isOpen && (
                  <div hidden className={look.answer} style={look.answerStyle}>
                    {it.a}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
