"use client";

import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef } from "react";

/* ============================================================================
 * HERO — Cinematic Video-Stage
 * ----------------------------------------------------------------------------
 * TODO: Stock-Assets durch finale Brand-Assets ersetzen.
 *
 * Empfohlene Bezugsquellen (kostenlos, ohne Lizenz-Hassle):
 *   - Pexels:  https://www.pexels.com/de-de/suche/videos/cleaning%20team/
 *   - Coverr:  https://coverr.co/  (Search: "office", "cleaning")
 *   - Mixkit:  https://mixkit.co/free-stock-video/business/
 *
 * Wenn du finale Files hast → in /public/videos/ bzw. /public/images/ legen
 * und unten die ASSETS-Konstante umbiegen. Ein Ort, eine Änderung.
 * ========================================================================== */
const ASSETS = {
  // Cinematic Hintergrund-Loop. Eigenes Brand-Video.
  heroVideo: "/videos/hero-bg.mp4",
  heroPoster: "/images/hero-poster.jpg",
};

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Safari needs the muted attribute explicitly set before play() to allow autoplay
    v.muted = true;
    v.defaultMuted = true;

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {
          // Autoplay blocked. Retry on the next user interaction.
        });
      }
    };

    tryPlay();

    // Some Safari builds pause background videos when the tab regains focus.
    const onVisibility = () => {
      if (document.visibilityState === "visible" && v.paused) tryPlay();
    };
    const onPageShow = () => {
      if (v.paused) tryPlay();
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pageshow", onPageShow);
    };
  }, []);

  return (
    <section
      data-hero-section
      className="relative isolate text-white overflow-hidden bg-slate-900"
    >
      {/* === Background Video Layer ============================================ */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          poster={ASSETS.heroPoster}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={ASSETS.heroVideo} type="video/mp4" />
        </video>

        {/* Gradient-Overlay: hält die Headline lesbar ohne das Video zu erschlagen */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/68 via-slate-950/44 to-slate-950/76" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.44)_70%)]" />
      </div>

      {/* === Stage Content ===================================================== */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-40 pb-12 md:pb-24 min-h-[78vh] md:min-h-[88vh] flex flex-col justify-center">
        {/* Live Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg shadow-black/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-white/90 uppercase">
              {t("hero.bridge.tag")}
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center text-[clamp(2rem,8.5vw,6.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] break-words hyphens-auto">
          {t("homeHero.title1")}
          <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
            {t("homeHero.title2")}{" "}
            <span className="block sm:inline">{t("homeHero.title3")}</span>
          </span>
        </h1>

        {/* Subline */}
        <p className="text-center text-base md:text-xl text-white/85 font-medium mb-2 max-w-3xl mx-auto leading-relaxed">
          {t("homeHero.features")}
        </p>
        <p className="text-center text-base md:text-xl font-black text-white mb-10 max-w-3xl mx-auto">
          {t("homeHero.tagline")}
        </p>

        {/* CTAs — bewusst klar und einfach */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-5">
          <Link
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 bg-white text-slate-900 text-base font-bold rounded-full hover:bg-cyan-50 transition-all shadow-2xl shadow-cyan-500/20 hover:scale-[1.02]"
          >
            {t("homeHero.cta.trial")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/features"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-3.5 sm:py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white text-base font-bold rounded-full hover:bg-white/10 transition-colors"
          >
            {t("common.cta.allFeatures")}
          </Link>
        </div>

        <p className="text-center text-sm text-white/60">{t("homeHero.trust")}</p>
      </div>

      {/* === 3 Kern-Aussagen unter dem Hero =================================== */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          <StoryText
            tag={t("homeHero.story1.tag")}
            title={t("homeHero.story1.title")}
            body={t("homeHero.story1.sub")}
          />
          <StoryText
            tag={t("homeHero.story2.tag")}
            title={t("homeHero.story2.title")}
            body={t("homeHero.story2.sub")}
          />
          <StoryText
            tag={t("homeHero.story3.tag")}
            title={t("homeHero.story3.title")}
            body={t("homeHero.story3.sub")}
          />
        </div>
      </div>
    </section>
  );
}

function StoryText({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-8 h-px bg-cyan-300/60" aria-hidden="true" />
        <span className="text-[10px] font-black tracking-[0.28em] uppercase text-cyan-300/90">
          {tag}
        </span>
      </div>
      <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-3 drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]">
        {title}
      </h3>
      <p className="text-sm md:text-base text-white/75 leading-relaxed">
        {body}
      </p>
    </div>
  );
}
