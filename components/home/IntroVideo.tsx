"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const YOUTUBE_ID = "vUGSXbZomt4";
const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_ID}`;
const YOUTUBE_THUMB = `https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`;

const COPY = {
  de: {
    title: "Taskey in 5 Minuten verstehen",
    subtitle:
      "Ein kurzer Überblick — wie Taskey deinen Reinigungsbetrieb steuert, von der Einsatzplanung bis zur Live-Marge.",
    playLabel: "Einstiegsvideo auf YouTube ansehen",
    posterAlt: "Taskey Einstiegsvideo Vorschau",
  },
  en: {
    title: "Understand Taskey in 5 minutes",
    subtitle:
      "A quick overview — how Taskey runs your cleaning business, from scheduling to live margins.",
    playLabel: "Watch intro video on YouTube",
    posterAlt: "Taskey intro video preview",
  },
  fr: {
    title: "Comprendre Taskey en 5 minutes",
    subtitle:
      "Un aperçu rapide — comment Taskey pilote votre activité de nettoyage, de la planification aux marges en direct.",
    playLabel: "Regarder la vidéo d'introduction sur YouTube",
    posterAlt: "Aperçu de la vidéo d'introduction Taskey",
  },
} as const;

export default function IntroVideo() {
  const { language } = useLanguage();
  const copy = COPY[language] ?? COPY.de;

  return (
    <section
      aria-labelledby="intro-video-heading"
      className="relative bg-slate-950 py-16 md:py-24 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="intro-video-heading"
          className="text-center text-white/90 text-2xl md:text-3xl font-black tracking-tight mb-3"
        >
          {copy.title}
        </h2>
        <p className="text-center text-white/60 text-sm md:text-base mb-10 max-w-2xl mx-auto">
          {copy.subtitle}
        </p>

        {/* Video + Saubär davor – Saubär z-30, Video darunter */}
        <div className="relative">
          {/* Saubär – vor dem Video, überlappt rechte untere Ecke */}
          <div className="hidden lg:block pointer-events-none absolute -right-8 xl:-right-24 2xl:-right-40 -bottom-6 z-30 w-[260px] xl:w-[320px] 2xl:w-[360px]">
            <Image
              src="/Saub%C3%A4r/top-zufrieden.png"
              alt=""
              width={600}
              height={600}
              className="w-full h-auto drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]"
            />
          </div>

        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={copy.playLabel}
          className="group relative z-10 mx-auto block aspect-video w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/60 bg-black ring-1 ring-white/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/60"
        >
          {}
          <img
            src={YOUTUBE_THUMB}
            alt={copy.posterAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/40 transition-colors group-hover:from-black/0 group-hover:to-black/30" />

          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <span className="relative flex items-center justify-center w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/95 shadow-2xl shadow-black/50 transition-transform duration-[var(--motion-press)] group-hover:scale-110 group-active:scale-95">
              <span className="absolute inset-0 rounded-full bg-white/40 blur-xl -z-10" />
              <svg
                viewBox="0 0 24 24"
                className="w-8 h-8 md:w-10 md:h-10 translate-x-[2px] text-slate-900"
                fill="currentColor"
              >
                <path d="M8 5.14v13.72c0 .81.87 1.32 1.58.92l11.04-6.86a1.06 1.06 0 0 0 0-1.84L9.58 4.22A1.06 1.06 0 0 0 8 5.14z" />
              </svg>
            </span>
          </span>
        </a>
        </div>
      </div>
    </section>
  );
}
