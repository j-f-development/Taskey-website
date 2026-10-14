'use client';

import { useLanguage } from "@/context/LanguageContext";
import RevealBlur from "./RevealBlur";

/**
 * iOSAppSection — Revolut "Take charge"-Style:
 * Große zentrierte Headline, Phone-Video als Held, Feature-Pills drumherum.
 * Kein Split-Layout – dafür ein echtes Bühnen-Gefühl.
 */
export default function IOSAppSection() {
  const { t } = useLanguage();

  const pills = [
    { label: t("ios.feature1.label") },
    { label: t("ios.feature2.label") },
    { label: t("ios.feature3.label") },
    { label: t("ios.feature4.label") },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-16 sm:py-20 md:py-36 overflow-hidden">
      {/* Spotlight glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-cyan-100 rounded-full blur-[72px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[64px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header — zentriert, viel Weißraum */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-5">
            {t("ios.badge")}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight mb-6 text-slate-900 break-words">
            {t("iosSection.heading.line1")}
            <br />
            <span className="text-slate-500">{t("iosSection.heading.line2")}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl mx-auto">
            {t("iosSection.lead")}
          </p>
        </div>

        {/* Phone als Held — flankiert von zwei kleineren Phone-Mockups */}
        <div className="relative flex items-center justify-center mb-12 md:mb-16">
          {/* Phone links (kleiner) */}
          <div className="hidden lg:block absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 w-[180px] xl:w-[210px] z-0">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/15 border-[5px] border-slate-900 bg-black aspect-[9/19]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sections/phone-screen-1.jpg"
                alt="Taskey iOS-App für Gebäudereinigung · Übersicht des Reinigungs-Teams auf dem Smartphone"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl z-10" />
            </div>
          </div>

          {/* Phone rechts (kleiner) */}
          <div className="hidden lg:block absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 w-[180px] xl:w-[210px] z-0">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/15 border-[5px] border-slate-900 bg-black aspect-[9/19]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sections/phone-screen-3.jpg"
                alt="Taskey Mobile-App · Aufgaben und digitale Nachweise für Reinigungseinsätze"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl z-10" />
            </div>
          </div>

          {/* Phone in der Mitte (größer) */}
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] z-10">
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-b from-cyan-400/20 to-blue-500/10 blur-2xl" />
            <div className="absolute -inset-12 rounded-[4rem] border border-slate-200/60 hidden md:block" />
            <div className="absolute -inset-20 rounded-[5rem] border border-slate-100/70 hidden md:block" />

            <RevealBlur offset={140} blur={26} duration={1400}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/25 border-[6px] border-slate-900 bg-black aspect-[9/19]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sections/phone-screen-2.jpg"
                alt="Taskey Mobile-App im Einsatz · NFC-Scan, Zeiterfassung und Objektübersicht in der Gebäudereinigung"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-10" />
            </div>
            </RevealBlur>
          </div>
        </div>

        {/* Feature-Pills als klare Boxen (statt orbitierend) */}
        <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          <PillBadge icon="sparkles" label={pills[0].label} />
          <PillBadge icon="wifi-off" label={pills[1].label} />
          <PillBadge icon="bolt" label={pills[2].label} />
          <PillBadge icon="fingerprint" label={pills[3].label} />
        </div>

        {/* Pills auf Mobile (Grid) */}
        <div className="sm:hidden grid grid-cols-2 gap-2 mb-10">
          {pills.map((p, i) => (
            <div key={i} className="px-3 py-2.5 rounded-full bg-blue-50 border border-slate-200 text-xs font-semibold text-slate-700 text-center">
              {p.label}
            </div>
          ))}
        </div>

        {/* CTAs centered */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://apps.apple.com/us/app/taskey/id6757116248"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-blue-600 text-white px-8 py-3.5 rounded-full font-bold text-base hover:bg-blue-500 transition-colors"
          >
            <svg viewBox="0 0 814 1000" className="h-[1.1em] w-auto" fill="currentColor" aria-hidden="true"><path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 376.7 0 248.1 0 125.8c0-70.6 24.3-143.3 69.3-200.3C122.5-140.4 199.1-168 271.7-168c66.3 0 121.7 43.8 162.6 43.8 39.5 0 101.9-46.3 176.9-46.3 28.6 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/></svg>
            {t("ios.appstore")}
          </a>
          <a
            href="/features"
            className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-900 px-8 py-3.5 rounded-full font-bold text-base hover:bg-blue-100 transition-colors"
          >
            {t("ios.allFeatures")}
          </a>
        </div>

        {/* Social Proof dezent */}
        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-slate-500">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 border-2 border-white" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white" />
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 border-2 border-white" />
          </div>
          <span>{t("ios.socialProof").replace("{count}", "600")}</span>
        </div>
      </div>
    </section>
  );
}

function PillBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border border-slate-200 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.18)] text-sm font-semibold text-slate-800">
      <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-blue-700">
        <Icon name={icon} />
      </span>
      <span className="leading-tight">{label}</span>
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    bolt: "M13 10V3L4 14h7v7l9-11h-7z",
    "wifi-off": "M18.364 5.636l-12.728 12.728M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01M3 8.5a15 15 0 0118 0",
    fingerprint: "M12 11v2m-4-2v1a4 4 0 108 0v-1m-8 0a4 4 0 118 0M6 11a6 6 0 1112 0m-6 7v2",
    sparkles: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  };
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[name] || paths.sparkles} />
    </svg>
  );
}
