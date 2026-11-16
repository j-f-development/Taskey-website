"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/**
 * RevealBlur: blendet seine Kinder beim ersten Sichtbarwerden ein
 * (kleiner Versatz von unten + Opacity, Dauer --motion-reveal, nur einmal).
 *
 * MOTION.md: nur transform und opacity, Versatz 16 bis 24 px,
 * höchstens --motion-reveal, Verzögerung höchstens 40 ms.
 * Der Name bleibt aus Kompatibilitätsgründen, eine Unschärfe gibt es nicht mehr.
 */
type Props = {
  children: ReactNode;
  /** Startversatz nach unten in px, wird auf 16 bis 24 begrenzt (default 24). */
  offset?: number;
  /** Verzögerung in ms, höchstens 40 (Stagger). */
  delay?: number;
  className?: string;
  /** Wie groß muss der sichtbare Anteil sein, damit ausgelöst wird (0-1) */
  threshold?: number;
};

export default function RevealBlur({ children, offset = 24, delay = 0, className = "", threshold = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const y = Math.min(Math.max(offset, 16), 24);
  const d = Math.min(Math.max(delay, 0), 40);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "none" : `translate3d(0, ${y}px, 0)`,
        opacity: visible ? 1 : 0,
        transition: `transform var(--motion-reveal) var(--ease-out) ${d}ms, opacity var(--motion-reveal) var(--ease-out) ${d}ms`,
      }}
    >
      {children}
    </div>
  );
}
