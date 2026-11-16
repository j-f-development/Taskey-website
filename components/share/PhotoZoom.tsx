"use client";

/**
 * Foto groß ansehen (MOTION.md, Punkt 6).
 * Das Foto wächst aus seiner Karte heraus (--motion-scene) und schrumpft beim Schließen
 * exakt dorthin zurück. Technik: FLIP mit `motion`. Animiert werden nur transform, opacity
 * und border-radius. Das Seitenverhältnis von Vorschau und Großansicht ist gleich, darum
 * reicht eine gleichmäßige Skalierung ohne Verzerrung.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useReducedMotion } from "motion/react";
import { CLOSE_FACTOR, EASE_IN_OUT, EASE_OUT, durations } from "@/lib/motion";

type Box = { left: number; top: number; width: number; height: number };
type From = { x: number; y: number; scale: number; radius: number };

type Props = {
  /** Pfad ohne Endung, es gibt .webp und .jpg. */
  img: string;
  alt: string;
  width: number;
  height: number;
  /** Eckenradius der Vorschau in px (für den fließenden Übergang). */
  radius?: number;
  /** Kurzer Text unter der Großansicht. */
  caption?: string;
};

const BIG_RADIUS = 14;

function Picture({ img, alt, width, height, onRef }: Pick<Props, "img" | "alt" | "width" | "height"> & { onRef?: (el: HTMLImageElement | null) => void }) {
  return (
    <picture>
      <source srcSet={`${img}.webp`} type="image/webp" />
      <img
        ref={onRef}
        src={`${img}.jpg`}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={width}
        height={height}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
    </picture>
  );
}

/** Ziel der Großansicht: so groß wie möglich, mittig, gleiches Seitenverhältnis. */
function targetBox(aspect: number, hasCaption: boolean): Box {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxW = Math.min(vw - 32, 1100);
  const maxH = vh - (hasCaption ? 150 : 110);
  let width = maxW;
  let height = width / aspect;
  if (height > maxH) {
    height = maxH;
    width = height * aspect;
  }
  return { left: (vw - width) / 2, top: (vh - height) / 2 - (hasCaption ? 16 : 0), width, height };
}

/** Transform, mit dem die Großansicht genau auf der Vorschau liegt. */
function fromThumb(thumb: DOMRect, big: Box, radius: number): From {
  const scale = thumb.width / big.width;
  return {
    x: thumb.left + thumb.width / 2 - (big.left + big.width / 2),
    y: thumb.top + thumb.height / 2 - (big.top + big.height / 2),
    scale,
    // Radius wird mit skaliert, darum hier zurückrechnen
    radius: radius / scale,
  };
}

export default function PhotoZoom({ img, alt, width, height, radius = 0, caption }: Props) {
  const reduced = useReducedMotion();
  const d = durations(reduced);
  const thumbImg = useRef<HTMLImageElement | null>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  /** open: Großansicht sichtbar. closing: schrumpft gerade zurück. */
  const [state, setState] = useState<{ phase: "open" | "closing"; big: Box; from: From } | null>(null);

  const measure = useCallback((): { big: Box; from: From } | null => {
    const el = thumbImg.current;
    if (!el) return null;
    const big = targetBox(width / height, Boolean(caption));
    return { big, from: fromThumb(el.getBoundingClientRect(), big, radius) };
  }, [width, height, caption, radius]);

  const open = () => {
    const m = measure();
    if (!m) return;
    setState({ phase: "open", ...m });
  };

  const close = useCallback(() => {
    setState((s) => {
      if (!s || s.phase === "closing") return s;
      // Zielposition jetzt neu messen: exakt dorthin zurück, wo die Vorschau gerade liegt
      const el = thumbImg.current;
      const from = el ? fromThumb(el.getBoundingClientRect(), s.big, radius) : s.from;
      return { ...s, phase: "closing", from };
    });
    trigger.current?.focus({ preventScroll: true });
  }, [radius]);

  // Vorschau ausblenden, solange das Foto „herausgehoben“ ist
  const lifted = state !== null;
  useEffect(() => {
    if (thumbImg.current) thumbImg.current.style.visibility = lifted ? "hidden" : "";
  }, [lifted]);

  useEffect(() => {
    if (state?.phase !== "open") return;
    closeBtn.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // Im Dialog gibt es nur den Schließen-Button: Fokus bleibt dort
      if (e.key === "Tab") {
        e.preventDefault();
        closeBtn.current?.focus();
      }
    };
    // Größe ändert sich: Großansicht neu ausrichten
    const onResize = () => setState((s) => (s && s.phase === "open" ? { ...s, ...measure()! } : s));
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [state?.phase, close, measure]);

  const closing = state?.phase === "closing";
  const closeDur = d.SCENE * CLOSE_FACTOR;
  const from = state?.from;

  // Startzustand bzw. Rückweg: bei „Bewegung reduzieren“ nur Überblenden statt Wachsen
  const atThumb = from
    ? reduced
      ? { x: 0, y: 0, scale: 1, borderRadius: BIG_RADIUS, opacity: 0 }
      : { x: from.x, y: from.y, scale: from.scale, borderRadius: from.radius, opacity: 1 }
    : undefined;

  return (
    <>
      <Picture img={img} alt={alt} width={width} height={height} onRef={(el) => (thumbImg.current = el)} />
      <button
        ref={trigger}
        type="button"
        onClick={open}
        aria-label={`Foto vergrößern: ${alt}`}
        aria-haspopup="dialog"
        className="focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#197caf]"
        style={{ position: "absolute", inset: 0, zIndex: 3, cursor: "zoom-in", background: "transparent", border: 0, padding: 0 }}
      />
      {state &&
        createPortal(
              <motion.div
                key="photo-zoom"
                role="dialog"
                aria-modal="true"
                aria-label={alt}
                style={{ position: "fixed", inset: 0, zIndex: 1000, pointerEvents: closing ? "none" : "auto" }}
              >
                {/* Hintergrund */}
                <motion.div
                  aria-hidden
                  onClick={close}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: closing ? 0 : 1 }}
                  transition={{ duration: closing ? closeDur : d.SCENE, ease: closing ? EASE_IN_OUT : EASE_OUT }}
                  style={{ position: "absolute", inset: 0, background: "rgba(16, 35, 60, 0.72)", cursor: "zoom-out" }}
                />
                {/* Foto */}
                <motion.div
                  initial={atThumb}
                  animate={closing ? atThumb : { x: 0, y: 0, scale: 1, borderRadius: BIG_RADIUS, opacity: 1 }}
                  transition={{ duration: closing ? closeDur : d.SCENE, ease: closing ? EASE_IN_OUT : EASE_OUT }}
                  onAnimationComplete={() => {
                    if (closing) setState(null);
                  }}
                  onClick={close}
                  style={{
                    position: "fixed",
                    left: state.big.left,
                    top: state.big.top,
                    width: state.big.width,
                    height: state.big.height,
                    overflow: "hidden",
                    transformOrigin: "50% 50%",
                    background: "#e9edf2",
                    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
                    cursor: "zoom-out",
                    willChange: "transform",
                  }}
                >
                  <picture>
                    <source srcSet={`${img}.webp`} type="image/webp" />
                                  <img
                      src={`${img}.jpg`}
                      alt={alt}
                      width={width}
                      height={height}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </picture>
                </motion.div>
                {caption && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: closing ? 0 : 1 }}
                    transition={{ duration: closing ? d.PRESS : d.REVEAL, ease: EASE_OUT }}
                    style={{
                      position: "fixed",
                      left: 16,
                      right: 16,
                      top: state.big.top + state.big.height + 14,
                      margin: 0,
                      textAlign: "center",
                      color: "#fff",
                      fontSize: "0.9rem",
                      lineHeight: 1.45,
                      pointerEvents: "none",
                    }}
                  >
                    {caption}
                  </motion.p>
                )}
                <motion.button
                  ref={closeBtn}
                  type="button"
                  onClick={close}
                  aria-label="Foto schließen"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: closing ? 0 : 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: closing ? d.PRESS : d.REVEAL, ease: EASE_OUT }}
                  className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{
                    position: "fixed",
                    top: 16,
                    right: 16,
                    width: 44,
                    height: 44,
                    borderRadius: 999,
                    border: 0,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(255,255,255,0.95)",
                    color: "#10233c",
                    cursor: "pointer",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </motion.button>
              </motion.div>,
          document.body,
        )}
    </>
  );
}
