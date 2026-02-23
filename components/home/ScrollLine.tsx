'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

/**
 * ScrollLine – a single continuous gray line (turns blue as you scroll).
 *
 * Renders a <div> with position:fixed that holds an SVG.
 * The SVG viewBox shifts on scroll to track the page position.
 * The path itself is computed once in page-absolute coordinates.
 */
export default function ScrollLine() {
  const grayRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [pathD, setPathD] = useState('');
  const [totalLen, setTotalLen] = useState(0);
  const [endPoint, setEndPoint] = useState<{ x: number; y: number } | null>(null);

  const progress = useMotionValue(0);
  // Direct 1:1 mapping — no spring/smoothing
  const dashOffset = useTransform(progress, (v: number) => {
    if (totalLen <= 0) return 99999; // hide until we know the length
    return totalLen * (1 - v);
  });

  const boundsRef = useRef({ top: 0, bottom: 0 });
  // Store key-point data for weighted scroll→progress mapping
  // Each entry: { y, pathFrac } where pathFrac is the cumulative fraction along the SVG path
  const keyPointsRef = useRef<{ y: number; pathFrac: number }[]>([]);

  // Update viewBox on scroll using direct DOM manipulation (no re-renders)
  useEffect(() => {
    const handler = () => {
      const svg = svgRef.current;
      if (!svg) return;
      const sy = window.scrollY;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      svg.setAttribute('viewBox', `0 ${sy} ${vw} ${vh}`);

      // The blue line tip should be at the vertical center of the viewport
      const viewCenter = sy + vh * 0.55;
      const kps = keyPointsRef.current;
      if (kps.length >= 2) {
        const startY = kps[0].y;
        const endY = kps[kps.length - 1].y;
        if (viewCenter <= startY) { progress.set(0); }
        else if (viewCenter >= endY) { progress.set(1); }
        else {
          // Find which segment the viewCenter falls into and interpolate
          for (let i = 1; i < kps.length; i++) {
            if (viewCenter <= kps[i].y || i === kps.length - 1) {
              const segStartY = kps[i - 1].y;
              const segEndY = kps[i].y;
              const segDeltaY = segEndY - segStartY;
              const t = segDeltaY > 0 ? (viewCenter - segStartY) / segDeltaY : 1;
              const p = kps[i - 1].pathFrac + t * (kps[i].pathFrac - kps[i - 1].pathFrac);
              progress.set(Math.max(0, Math.min(1, p)));
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, [progress]);

  const recalc = useCallback(() => {
    const iosEl = document.querySelector<HTMLElement>('[data-scrollline-ios]');
    const bizEl = document.querySelector<HTMLElement>('[data-scrollline-biz]');
    const ctaEl = document.querySelector<HTMLElement>('[data-scrollline-cta]');
    const faqEl = document.querySelector<HTMLElement>('[data-scrollline-faq]');

    if (!iosEl || !bizEl) {
      console.warn('[ScrollLine] Missing elements:', { ios: !!iosEl, biz: !!bizEl });
      return;
    }

    const sy = window.scrollY;
    const vw = window.innerWidth;

    const pr = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return { top: r.top + sy, bottom: r.bottom + sy, w: r.width, h: r.height };
    };

    const ios = pr(iosEl);
    const biz = pr(bizEl);

    boundsRef.current = {
      top: ios.top,
      bottom: faqEl ? pr(faqEl).bottom : biz.bottom + 1000,
    };

    const lx = 40, cx = vw / 2, R = 50;
    const rx = vw - 60; // right side of the line

    const startY = ios.top + 60;
    const bendY = ios.bottom - 40;
    const bizBottomY = biz.bottom;

    let bly = bizBottomY + 800;
    if (ctaEl) bly = pr(ctaEl).bottom + 60;

    let endY = boundsRef.current.bottom;
    if (faqEl) { const f = pr(faqEl); endY = f.top + f.h / 2 - 130; }

    const d = [
      // Phase 1: vertical down left side of iOS section
      `M ${lx} ${startY}`,
      `L ${lx} ${bendY - R}`,
      // Phase 2: bend right → horizontal → bend down
      `Q ${lx} ${bendY} ${lx + R} ${bendY}`,
      `L ${rx - R} ${bendY}`,
      `Q ${rx} ${bendY} ${rx} ${bendY + R}`,
      // Phase 3: straight down through BusinessSize (no zigzag)
      `L ${rx} ${bizBottomY}`,
      // Phase 4: continue down past Branchen CTA, then bend left to center
      `L ${rx} ${bly - R}`,
      `Q ${rx} ${bly} ${rx - R} ${bly}`,
      `L ${cx + R} ${bly}`,
      `Q ${cx} ${bly} ${cx} ${bly + R}`,
      // Phase 5: down to FAQ heading
      `L ${cx} ${endY}`,
    ].join(' ');

    setEndPoint({ x: cx, y: endY });

    // Store Y positions for accurate scroll→progress mapping
    // Key points along the path with their (x, y) coordinates
    const keyPts: { x: number; y: number }[] = [
      { x: lx, y: startY },           // start of vertical down
      { x: lx, y: bendY },            // before bend right
      { x: lx + R, y: bendY },        // after bend (start horizontal)
      { x: rx - R, y: bendY },        // end horizontal (before bend down)
      { x: rx, y: bendY + R },        // after bend (start vertical)
      { x: rx, y: bizBottomY },       // end of BusinessSize vertical
      { x: rx, y: bly - R },          // before bend left
      { x: rx - R, y: bly },          // after bend (start horizontal left)
      { x: cx + R, y: bly },          // end horizontal (before bend down)
      { x: cx, y: bly + R },          // after bend (start vertical)
      { x: cx, y: endY },             // end (FAQ)
    ];

    // Compute segment lengths with horizontal speed boost (30% faster = 0.7 weight)
    const HORIZONTAL_WEIGHT = 0.7;
    const segWeights: number[] = [];
    for (let i = 1; i < keyPts.length; i++) {
      const dx = Math.abs(keyPts[i].x - keyPts[i - 1].x);
      const dy = Math.abs(keyPts[i].y - keyPts[i - 1].y);
      const dist = Math.sqrt(dx * dx + dy * dy);
      // If mostly horizontal (dx > dy), apply weight reduction
      const horizontality = dist > 0 ? dx / dist : 0;
      const weight = 1 - horizontality * (1 - HORIZONTAL_WEIGHT);
      segWeights.push(dist * weight);
    }
    const totalWeight = segWeights.reduce((a, b) => a + b, 0);

    // Build keyPointsRef with cumulative path fractions
    let cumWeight = 0;
    const kps: { y: number; pathFrac: number }[] = [{ y: keyPts[0].y, pathFrac: 0 }];
    for (let i = 0; i < segWeights.length; i++) {
      cumWeight += segWeights[i];
      kps.push({ y: keyPts[i + 1].y, pathFrac: cumWeight / totalWeight });
    }
    keyPointsRef.current = kps;

    setPathD(d);

    requestAnimationFrame(() => {
      if (grayRef.current) {
        const len = grayRef.current.getTotalLength();
        setTotalLen(len);
      }
      // sync viewBox immediately
      const svg = svgRef.current;
      if (svg) {
        svg.setAttribute('viewBox', `0 ${window.scrollY} ${vw} ${window.innerHeight}`);
      }
    });
  }, []);

  useEffect(() => {
    recalc();
    const timers = [100, 300, 800, 2000, 4000].map((ms) => setTimeout(recalc, ms));
    window.addEventListener('resize', recalc);
    window.addEventListener('load', recalc);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', recalc);
      window.removeEventListener('load', recalc);
    };
  }, [recalc]);

  return (
    <div
      className="hidden lg:block"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'visible',
      }}
    >
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMinYMin slice"
        fill="none"
        style={{ overflow: 'visible' }}
      >
        {pathD && (
          <>
            <path
              ref={grayRef}
              d={pathD}
              stroke="#d1d5db"
              strokeWidth={3}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {totalLen > 0 && (
              <motion.path
                d={pathD}
                stroke="#2563eb"
                strokeWidth={4}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: totalLen,
                  strokeDashoffset: dashOffset,
                }}
              />
            )}
            {endPoint && (
              <circle
                cx={endPoint.x}
                cy={endPoint.y}
                r={5}
                fill="#2563eb"
              />
            )}
          </>
        )}
      </svg>
    </div>
  );
}
