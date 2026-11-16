"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CLOSE_FACTOR, EASE_IN_OUT, EASE_OUT, durations } from "@/lib/motion";
import { Geist } from "next/font/google";
import Link from "@/components/LocaleLink";
import { TaskeyMark } from "./TaskeyMark";
import {
  DEMO_URL,
  FEATURES,
  OVERVIEW_SECONDS,
  FEATURE_SECONDS,
  type FeatureIcon,
} from "./features";
import s from "./FeatureWindow.module.css";

const geist = Geist({ subsets: ["latin"], variable: "--tk-geist", display: "swap" });

/* ---------- Icons (Lucide, Strichstärke 2) ---------- */
const ICON_PATHS: Record<FeatureIcon, ReactNode> = {
  // clock-3
  zeit: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6h4" />
    </>
  ),
  // calendar-range
  plan: (
    <>
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M16 2v4M3 10h18M8 2v4M17 14h-6M13 18H7M7 14h.01M17 18h.01" />
    </>
  ),
  // wallet
  fin: (
    <>
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </>
  ),
  // share-2
  share: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </>
  ),
};

function Ic({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg className={className ? `${s.ic} ${className}` : s.ic} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}
const FeatureIc = ({ icon, size }: { icon: FeatureIcon; size?: number }) => (
  <svg className={s.ic} viewBox="0 0 24 24" aria-hidden="true" focusable="false" style={size ? { width: size, height: size } : undefined}>
    {ICON_PATHS[icon]}
  </svg>
);
const Chevron = () => (
  <Ic>
    <path d="m9 18 6-6-6-6" />
  </Ic>
);
const Arrow = () => (
  <Ic>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Ic>
);
const Dot = () => <span className={s.dot} aria-hidden="true" />;
/** Letztes Wort und Punkt bleiben zusammen, der Punkt landet nie allein in einer neuen Zeile. */
function DotTitle({ text }: { text: string }) {
  const i = text.lastIndexOf(" ");
  return (
    <>
      {text.slice(0, i + 1)}
      <span className={s.nw}>
        {text.slice(i + 1)}
        <Dot />
      </span>
    </>
  );
}

/* ------------------------------------------------------------------
   FeatureWindow
   ------------------------------------------------------------------ */

type Origin = "card" | "folder";
/** Rechteck relativ zum Fenster (px) samt Eckenradius. */
type Box = { left: number; top: number; width: number; height: number; radius: number };
/** Eine Detailansicht. `from`: liegt noch auf ihrem Auslöser, `open`: gewachsen, `closing`: schrumpft zurück. */
type Scene = { key: number; id: string; origin: Origin; src: Box; phase: "from" | "open" | "closing" };
type ExitKind = "fade" | "instant";

export default function FeatureWindow() {
  const rootRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const folderRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const reduced = useReducedMotion();
  const reducedRef = useRef(false);
  useEffect(() => {
    reducedRef.current = !!reduced;
  }, [reduced]);
  const d = durations(reduced);

  /** Geöffnete Funktion (steuert Ordner-Markierung). */
  const [current, setCurrent] = useState<string | null>(null);
  /** Aktuelle Detailansicht (null = zu, Video entladen). */
  const [scene, setScene] = useState<Scene | null>(null);
  /** Endgröße der Detailansicht = Hauptbereich. */
  const [full, setFull] = useState<Box | null>(null);
  /** Wie eine Ansicht verschwindet: ausblenden (beim Wechsel) oder sofort (nach dem Zurückschrumpfen). */
  const [exitKind, setExitKind] = useState<ExitKind>("fade");

  const currentRef = useRef<string | null>(null);
  const sceneKey = useRef(0);
  const lastFocus = useRef<HTMLElement | null>(null);
  const focusBackPending = useRef(false);
  const focusReturnPending = useRef(false);

  // Auto-Tour-Zustand (Refs, damit der rAF-Takt nicht neu rendert)
  const autoRef = useRef(true); // false, sobald der Besucher selbst klickt (endgültig)
  const stepRef = useRef(-1); // -1 = Überblick
  const stepStart = useRef(0);
  const pauseAt = useRef(0);
  const inView = useRef(false);

  /** Rechteck eines Elements relativ zum Fenster. */
  const boxOf = useCallback((el: HTMLElement | null | undefined, radius?: number): Box | null => {
    const root = rootRef.current;
    if (!el || !root) return null;
    const r = el.getBoundingClientRect();
    const rr = root.getBoundingClientRect();
    return {
      left: r.left - rr.left - root.clientLeft,
      top: r.top - rr.top - root.clientTop,
      width: r.width,
      height: r.height,
      radius: radius ?? (parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0),
    };
  }, []);
  const originEl = (id: string, origin: Origin) =>
    origin === "card" ? cardRefs.current[id] : folderRefs.current[id];

  /** Öffnet eine Funktion: Die Detailansicht wächst aus der Karte bzw. dem Ordner, der sie ausgelöst hat. */
  const openFeature = useCallback(
    (id: string, origin: Origin, fromAuto: boolean) => {
      if (!FEATURES.some((f) => f.id === id)) return;
      if (currentRef.current === id) return; // schon offen
      if (currentRef.current === null && !fromAuto) lastFocus.current = document.activeElement as HTMLElement | null;
      const fullBox = boxOf(mainRef.current, 0);
      const src = boxOf(originEl(id, origin));
      if (!fullBox) return;
      currentRef.current = id;
      setCurrent(id);
      setFull(fullBox);
      setExitKind("fade");
      focusBackPending.current = !fromAuto;
      setScene({
        key: ++sceneKey.current,
        id,
        origin,
        src: src ?? fullBox,
        phase: reducedRef.current || !src ? "open" : "from",
      });
    },
    [boxOf],
  );

  // Erst auf dem Auslöser zeichnen, im nächsten Frame wachsen lassen.
  const sceneKeyNow = scene?.key;
  const scenePhase = scene?.phase;
  useLayoutEffect(() => {
    if (scenePhase !== "from") return;
    const raf = requestAnimationFrame(() =>
      setScene((sc) => (sc && sc.key === sceneKeyNow && sc.phase === "from" ? { ...sc, phase: "open" } : sc)),
    );
    return () => cancelAnimationFrame(raf);
  }, [sceneKeyNow, scenePhase]);

  // Fokus auf „Zurück“, wenn der Besucher selbst geöffnet hat
  useEffect(() => {
    if (sceneKeyNow === undefined || !focusBackPending.current) return;
    focusBackPending.current = false;
    rootRef.current
      ?.querySelector<HTMLButtonElement>(`[data-scene="${sceneKeyNow}"] [data-back]`)
      ?.focus({ preventScroll: true });
  }, [sceneKeyNow]);

  /** Schließt: Die Ansicht schrumpft exakt dorthin zurück, wo sie herkam. */
  const closeFeature = useCallback(() => {
    if (currentRef.current === null) return;
    currentRef.current = null;
    setCurrent(null);
    setScene((sc) => {
      if (!sc) return sc;
      const src = reducedRef.current ? null : boxOf(originEl(sc.id, sc.origin));
      if (!src) {
        setExitKind("fade");
        return null;
      }
      return { ...sc, src, phase: "closing" };
    });
    focusReturnPending.current = true; // Fokus zurück, sobald die Seite nicht mehr inert ist (Effekt unten)
  }, [boxOf]);

  /** Nach dem Zurückschrumpfen liegt die Ansicht genau auf ihrem Auslöser und wird entfernt (Video entladen). */
  const onLayoutDone = (key: number) =>
    setScene((sc) => {
      if (sc && sc.key === key && sc.phase === "closing") {
        setExitKind("instant");
        return null;
      }
      return sc;
    });

  // Fenstergröße ändert sich: Endgröße nachführen
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(() => {
      if (currentRef.current !== null) setFull(boxOf(mainRef.current, 0));
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [boxOf]);

  /* ---------- Auto-Tour ---------- */
  const stepLen = (i: number) => (i < 0 ? OVERVIEW_SECONDS : FEATURE_SECONDS);

  /** Lade-Strich: füllt sich beim GEÖFFNETEN Ordner und zeigt, wie lange er noch bleibt.
      Im Überblick ist kein Ordner offen, dann bleiben alle Striche leer. */
  const setBars = useCallback((k: number) => {
    const active = autoRef.current ? stepRef.current : -1;
    barRefs.current.forEach((b, i) => {
      if (b) b.style.transform = `scaleX(${i === active ? Math.min(Math.max(k, 0), 1) : 0})`;
    });
  }, []);

  /** Eigener Klick: Die Auto-Tour endet endgültig, alle Striche bleiben leer. */
  const manual = useCallback(() => {
    autoRef.current = false;
    setBars(0);
  }, [setBars]);

  useEffect(() => {
    let raf = 0;
    stepStart.current = performance.now();
    const tick = (now: number) => {
      const running = autoRef.current && inView.current && !document.hidden;
      if (running) {
        if (pauseAt.current) {
          stepStart.current += now - pauseAt.current; // dort weiter, wo pausiert wurde
          pauseAt.current = 0;
        }
        const k = (now - stepStart.current) / 1000 / stepLen(stepRef.current);
        if (k >= 1) {
          stepRef.current = (stepRef.current + 1) % FEATURES.length;
          stepStart.current = now;
          openFeature(FEATURES[stepRef.current].id, "folder", true);
          setBars(0);
        } else setBars(k);
      } else if (!pauseAt.current) pauseAt.current = now;
      if (autoRef.current) raf = requestAnimationFrame(tick); // nach eigenem Klick: Tour vorbei
    };
    raf = requestAnimationFrame(tick);

    // Start erst, wenn ≥ 60 % des Fensters sichtbar sind: so sieht jeder zuerst den Überblick
    const io = new IntersectionObserver(
      ([e]) => {
        const v = e.intersectionRatio >= 0.6;
        if (v && !inView.current && stepRef.current < 0 && currentRef.current === null) {
          stepStart.current = performance.now();
          pauseAt.current = 0;
        }
        inView.current = v;
      },
      { threshold: [0, 0.6, 1] },
    );
    if (rootRef.current) io.observe(rootRef.current);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && currentRef.current !== null) {
        manual();
        closeFeature();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      document.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pick = (id: string, origin: Origin) => {
    manual();
    openFeature(id, origin, false);
  };
  const back = () => {
    manual();
    closeFeature();
  };

  const ovOpen = scene !== null && scene.phase !== "closing";

  // Nach dem Schließen: Fokus zurück auf Karte bzw. Ordner
  useEffect(() => {
    if (ovOpen || !focusReturnPending.current) return;
    focusReturnPending.current = false;
    const el = lastFocus.current;
    lastFocus.current = null;
    if (el && rootRef.current?.contains(el)) el.focus({ preventScroll: true });
  }, [ovOpen]);

  /* ---------- Detailansicht ---------- */
  const renderScene = (sc: Scene, end: Box) => {
    const f = FEATURES.find((x) => x.id === sc.id)!;
    const next = FEATURES[(FEATURES.indexOf(f) + 1) % FEATURES.length];
    const box = sc.phase === "open" ? end : sc.src;
    const closing = sc.phase === "closing";
    const move = closing
      ? { duration: d.SCENE * CLOSE_FACTOR, ease: EASE_IN_OUT }
      : { duration: d.SCENE, ease: EASE_OUT };
    const titleId = `tk-fx-title-${sc.key}`;
    return (
      <motion.div
        key={sc.key}
        data-scene={sc.key}
        className={s.ov}
        layout
        role="region"
        aria-labelledby={titleId}
        inert={closing}
        // Beim Zurückschrumpfen fängt die Ansicht keine Klicks mehr ab: Die Seite darunter bleibt bedienbar.
        style={{ left: box.left, top: box.top, width: box.width, height: box.height, pointerEvents: closing ? "none" : undefined }}
        initial={reduced ? { opacity: 0 } : false}
        animate={{ opacity: 1, borderRadius: box.radius }}
        exit="gone"
        variants={{
          gone: (k: ExitKind) => ({
            opacity: 0,
            pointerEvents: "none", // eine ausblendende Ansicht blockiert keine Klicks
            // beim Wechsel bleibt die alte Ansicht stehen, bis die neue sie überdeckt
            transition: { duration: k === "instant" ? 0 : d.SCENE, ease: EASE_IN_OUT },
          }),
        }}
        transition={{ layout: move, borderRadius: move, opacity: { duration: d.SCENE, ease: EASE_OUT } }}
        onLayoutAnimationComplete={() => onLayoutDone(sc.key)}
      >
        <motion.div
          className={s.ovInner}
          layout
          style={{ width: end.width, height: end.height }}
          initial={false}
          animate={{ opacity: sc.phase === "open" ? 1 : 0 }}
          transition={{
            layout: move,
            opacity: closing
              ? { duration: d.REVEAL * CLOSE_FACTOR, ease: EASE_IN_OUT }
              : { duration: d.REVEAL, ease: EASE_OUT },
          }}
        >
          <div className={s.ovbar}>
            <button data-back type="button" className={s.back} onClick={back}>
              <Ic>
                <path d="m15 18-6-6 6-6" />
              </Ic>
              Zurück
            </button>
            <div className={s.crumb}>
              Funktionen <Chevron />
              <b>{f.name}</b>
            </div>
          </div>

          <div className={s.ovbody}>
            <div className={s.video} style={{ aspectRatio: f.aspect }}>
              <div className={s.ph}>
                <i className={s.spin} />
              </div>
              {f.video.kind === "mp4" ? (
                <video
                  src={f.video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={`Animation: ${f.name}`}
                />
              ) : (
                <iframe src={f.video.src} title={`Animation: ${f.name}`} allow="autoplay" tabIndex={-1} />
              )}
            </div>

            <div className={s.info}>
              <div>
                <div className={s.kick}>
                  <FeatureIc icon={f.icon} size={15} />
                  {f.name}
                </div>
                <h4 className={s.h4} id={titleId}>
                  <DotTitle text={f.title} />
                </h4>
                <div className={s.cta}>
                  <Link className={`${s.btn} ${s.btnPr}`} href={DEMO_URL}>
                    <Ic>
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </Ic>
                    Demo buchen
                  </Link>
                  <button type="button" className={`${s.btn} ${s.btnOl}`} onClick={() => pick(next.id, "folder")}>
                    Weiter: {next.name} <Arrow />
                  </button>
                </div>
              </div>
              <ul className={s.list}>
                {f.points.map(([b, t]) => (
                  <li key={b}>
                    <Ic>
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 12.5l2.7 2.7L16 10" />
                    </Ic>
                    <div>
                      <b>{b}</b>
                      <span>{t}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div ref={rootRef} className={`${s.fx} ${geist.variable}`}>
      {/* ---------- Seitenleiste ---------- */}
      <aside className={s.side}>
        <div className={s.brand}>
          <TaskeyMark />
          <b>taskey.</b>
        </div>
        <div className={s.sh}>Funktionen</div>
        <nav className={s.nav} aria-label="Funktionen">
          {FEATURES.map((ft, i) => (
            <button
              key={ft.id}
              ref={(el) => {
                folderRefs.current[ft.id] = el;
              }}
              type="button"
              className={s.ni}
              aria-current={current === ft.id ? "page" : undefined}
              onClick={() => pick(ft.id, "folder")}
            >
              <FeatureIc icon={ft.icon} />
              {ft.name}
              <Ic className={s.chev}>
                <path d="m9 18 6-6-6-6" />
              </Ic>
              <span className={s.trk} aria-hidden="true">
                <span
                  className={s.bar}
                  ref={(el) => {
                    barRefs.current[i] = el;
                  }}
                />
              </span>
            </button>
          ))}
        </nav>
      </aside>

      {/* ---------- Hauptbereich: Überblick ---------- */}
      <div className={s.main} ref={mainRef}>
        <div className={s.top} inert={ovOpen}>
          <div className={s.crumb}>
            Funktionen <Chevron />
            <b>Überblick</b>
          </div>
          <div className={s.topRight}>
            <div className={s.srch} aria-hidden="true">
              <Ic>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </Ic>
              Suchen …<span className={s.kbd}>⌘K</span>
            </div>
          </div>
        </div>

        <div className={s.page} inert={ovOpen}>
          <div className={s.eyebrow}>Überblick</div>
          <h3 className={s.h3}>
            <DotTitle text="Unsere zentralen Funktionen" />
          </h3>
          <p className={s.lead}>
            Zeiterfassung, Personalplanung, Finanzplanung und Taskey Share: vier Funktionen, ein Dashboard. Wähle
            links einen Ordner oder klick auf eine Karte, um die Funktion in Aktion zu sehen. Das ist nur ein grober
            Überblick: Taskey kann noch deutlich mehr.
          </p>
          <div className={s.cards}>
            {FEATURES.map((ft) => (
              <button
                key={ft.id}
                ref={(el) => {
                  cardRefs.current[ft.id] = el;
                }}
                type="button"
                className={s.card}
                onClick={() => pick(ft.id, "card")}
              >
                <div className={s.cardHd}>
                  <span className={s.cardIco}>
                    <FeatureIc icon={ft.icon} size={18} />
                  </span>
                  <span className={s.cardT}>{ft.name}</span>
                </div>
                <p>{ft.teaser}</p>
                <span className={s.more}>
                  Ansehen <Arrow />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Detailansicht: wächst aus Karte oder Ordner, schrumpft dorthin zurück ---------- */}
      <AnimatePresence custom={exitKind}>{scene && full && renderScene(scene, full)}</AnimatePresence>
    </div>
  );
}
