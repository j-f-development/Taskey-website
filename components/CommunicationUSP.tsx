"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

/**
 * CommunicationUSP
 *
 * Taskeys Kern-USP: Die beste Kommunikation zwischen Einsatzort und Büro.
 * Wird auf allen wichtigen Seiten eingebunden (Home, Gebäudereinigung,
 * Features, Pricing, Lösungen).
 *
 * Varianten:
 *  - "full"    : große Sektion mit 4 Säulen (Standard)
 *  - "compact" : schlanker Banner-Streifen für Unterseiten
 *  - "dark"    : dunkle Variante für helle Hintergründe
 */

type Variant = "full" | "compact" | "dark";

export default function CommunicationUSP({ variant = "full" }: { variant?: Variant }) {
  const { t } = useLanguage();
  if (variant === "compact") {
    return (
      <section className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-8 border-y border-blue-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
            </span>
            <span className="text-[11px] font-black tracking-[0.25em] text-blue-700 uppercase">
              {t("usp.tag.live")}
            </span>
          </div>
          <p className="text-slate-900 text-base md:text-lg font-semibold leading-snug flex-1">
            {t("usp.compact.prefix")}
            <span className="text-blue-700">{t("usp.compact.word1")}</span>
            {t("usp.compact.middle")}
            <span className="text-blue-700">{t("usp.compact.word2")}</span>
            {t("usp.compact.suffix")}
          </p>
          <Link
            href="/#echtzeit-kommunikation"
            className="text-sm font-bold text-blue-700 hover:text-blue-700 whitespace-nowrap inline-flex items-center gap-1"
          >
            {t("usp.compact.cta")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    );
  }

  const isDark = variant === "dark";

  /* ASSETS — TODO: gegen finale Brand-Fotos austauschen.
     Quelle Platzhalter: pexels.com (kostenfrei). Empfohlen final: eigene Fotos der Teams. */
  const cards = [
    {
      title: t("usp.card1.title"),
      subtitle: t("usp.card1.subtitle"),
      image: "/sections/echtzeit-feld-buero.png",
      alt: t("usp.card1.alt"),
    },
    {
      title: t("usp.card2.title"),
      subtitle: t("usp.card2.subtitle"),
      image: "/sections/transparenz-kunde.png",
      alt: t("usp.card2.alt"),
    },
    {
      title: t("usp.card3.title"),
      subtitle: t("usp.card3.subtitle"),
      image: "/sections/nachweisbarkeit.png",
      alt: t("usp.card3.alt"),
    },
    {
      title: t("usp.card4.title"),
      subtitle: t("usp.card4.subtitle"),
      image: "/sections/aussendienst-einfach.png",
      alt: t("usp.card4.alt"),
    },
  ];

  const bgFull = isDark
    ? "bg-gradient-to-b from-white via-blue-50 to-white text-slate-900"
    : "bg-gradient-to-b from-white via-blue-50 to-white text-slate-900";

  return (
    <section id="echtzeit-kommunikation" className={`${bgFull} py-16 sm:py-20 md:py-32 relative overflow-hidden`}>
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[72px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      {/* Saubär – vor dem Content, überlappt die Cards unten links */}
      <div className="hidden lg:block pointer-events-none absolute -left-10 xl:-left-4 2xl:left-4 -bottom-4 z-30 w-[280px] xl:w-[340px] 2xl:w-[380px]">
        <Image
          src="/Saub%C3%A4r/nachdenken.png"
          alt=""
          width={600}
          height={600}
          className="w-full h-auto drop-shadow-[0_24px_40px_rgba(15,23,42,0.22)]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header – Revolut-Style: zentral, groß, knapp */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900 break-words">
            {t("usp.full.title.line1")}
            <br />
            <span className="text-slate-500">{t("usp.full.title.line2")}</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            {t("usp.full.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base"
            >
              {t("usp.full.cta.start")}
            </Link>
            <Link
              href="/features"
              className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base"
            >
              {t("usp.full.cta.features")}
            </Link>
          </div>
        </div>

        {/* Karten-Grid – Bild-First, klare Boxen */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative rounded-3xl bg-white border border-slate-200/70 overflow-hidden flex flex-col shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] transition-transform duration-[var(--motion-press)] hover:-translate-y-1"
            >
              {/* Image-Block */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[var(--motion-reveal)] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/40 to-transparent" />
              </div>

              {/* Text-Block */}
              <div className="p-6 md:p-7 -mt-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {c.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
