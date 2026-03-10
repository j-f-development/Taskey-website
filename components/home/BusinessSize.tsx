"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const POINTS: [number, number][] = [
  [0.85, 0.01],
  [0.85, 0.25],
  [0.10, 0.25],
  [0.85, 0.52],
  [0.10, 0.52],
  [0.85, 0.77],
  [0.10, 0.77],
  [0.85, 0.99],
];

// The 3 bend y-fractions and their corresponding scroll progress thresholds
// At each bend, the glow segment hits that y. We compute the scroll% when that happens.
// Bends are at path-fraction positions: bend1 ≈ seg0+seg1 / total, etc.
// We pre-compute these: segments 0-1 reach bend1, segments 0-3 reach bend2, 0-5 reach bend3
function getSegmentLengths(points: [number, number][]) {
  const lens: number[] = [];
  for (let i = 1; i < points.length; i++) {
    const dx = points[i][0] - points[i - 1][0];
    const dy = points[i][1] - points[i - 1][1];
    lens.push(Math.sqrt(dx * dx + dy * dy));
  }
  return lens;
}

function getTotalLength(segLens: number[]) {
  return segLens.reduce((a, b) => a + b, 0);
}

export default function BusinessSize() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { t } = useLanguage();

  const cards = [
    { id: 1, label: t("biz.card1.label"), image: "/26473062-6363-4095-A9BD-AD2B2B404909.png", text: t("biz.card1.text") },
    { id: 2, label: t("biz.card2.label"), image: "/629F1A67-7DB2-4895-B898-337BCB2EAE07.png", text: t("biz.card2.text") },
    { id: 3, label: t("biz.card3.label"), image: "/A723E4B1-276B-4AC7-9BAB-63AEAF16EC1D.png", text: t("biz.card3.text") },
  ];  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const segLens = getSegmentLengths(POINTS);
  const totalLen = getTotalLength(segLens);

  // Compute scroll-progress thresholds for each bend
  // Bend 1 is at POINTS index 2 (after seg 0 + seg 1)
  // Bend 2 is at POINTS index 4 (after seg 0..3)
  // Bend 3 is at POINTS index 6 (after seg 0..5)
  const cumLen = segLens.reduce((acc, l, i) => {
    acc.push((acc[i] ?? 0) + l);
    return acc;
  }, [0] as number[]);
  const bend1Progress = cumLen[1] / totalLen; // after seg0
  const bend2Progress = cumLen[3] / totalLen; // after seg0-2
  const bend3Progress = cumLen[5] / totalLen; // after seg0-4

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      if (v < bend1Progress - 0.01) {
        setActiveCard(null);
      } else if (v >= bend1Progress - 0.01 && v < bend2Progress - 0.01) {
        setActiveCard(1);
      } else if (v >= bend2Progress - 0.01 && v < bend3Progress - 0.01) {
        setActiveCard(2);
      } else if (v >= bend3Progress - 0.01) {
        setActiveCard(3);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, bend1Progress, bend2Progress, bend3Progress]);

  return (
    <section
      ref={sectionRef}
      data-scrollline-biz
      className="relative bg-white"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden pointer-events-none select-none">

        {/* Überschrift oben */}
        <div className="absolute top-24 left-0 right-0 flex flex-col items-center gap-2 px-8">
          <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.25em]">{t("biz.badge")}</p>
          <h2 className="text-gray-900 text-4xl md:text-5xl font-bold text-center">
            {t("biz.title")} <span className="text-blue-600">{t("biz.title.highlight")}</span>
          </h2>
        </div>

        {/* Card — zentriert unterhalb der Überschrift */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-12 md:px-20 pointer-events-none" style={{ paddingTop: "180px" }}>
          <AnimatePresence mode="wait">
            {activeCard !== null && (
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-3xl flex flex-col gap-6"
              >
                {/* Card image */}
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={cards[activeCard - 1].image}
                    alt=""
                    className="w-full h-80 object-cover"
                  />
                </div>
                {/* Text + Button */}
                <div className="flex flex-col gap-3">
                  <p className="text-blue-600 text-xs font-semibold uppercase tracking-widest">{cards[activeCard - 1].label}</p>
                  <p className="text-gray-500 text-xl leading-relaxed">
                    {cards[activeCard - 1].text}
                  </p>
                  <Link
                    href="/pricing"
                    className="mt-1 inline-block self-start px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors pointer-events-auto"
                  >
                    {t("biz.cta")}
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

