"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useParallax } from "./useParallax";

/**
 * FeaturePreview — Revolut-Style:
 * Links Text + Bullet-Navigation.
 * Rechts: großes Bild, das NICHT als Card gerahmt ist, sondern weich in den
 * dunklen Section-Hintergrund verblendet (Gradient-Masken rechts/unten/links).
 */
export default function FeaturePreview() {
  const { t } = useLanguage();

  const features = [
    {
      label: t("features.1.label"),
      title: t("features.1.title"),
      description: t("features.1.desc"),
      image: "/BA2B10E7-7DE2-41AD-B48D-EE39BC2E52E6.webp",
      imageAlt: t("features.1.imageAlt"),
      tag: t("features.1.tag"),
    },
    {
      label: t("features.2.label"),
      title: t("features.2.title"),
      description: t("features.2.desc"),
      image: "/B899021B-1AAA-40FD-9668-5DBB4E23D5D2.webp",
      imageAlt: t("features.2.imageAlt"),
      tag: t("features.2.tag"),
    },
    {
      label: t("features.3.label"),
      title: t("features.3.title"),
      description: t("features.3.desc"),
      image: "/feature-zeiterfassung.webp",
      imageAlt: t("features.3.imageAlt"),
      tag: t("features.3.tag"),
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % features.length), 5500);
    return () => clearInterval(id);
  }, [features.length]);
  const current = features[active];

  const parallaxRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 py-16 sm:py-20 md:py-32 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[64px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />

      {/* Großes verblendetes Bild rechts — full-bleed, keine Card */}
      <div ref={parallaxRef} className="hidden lg:block absolute top-0 right-0 bottom-0 w-[62%] pointer-events-none will-change-transform">
        {features.map((f, i) => (
          <div
            key={f.image}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-out"
            style={{ opacity: i === active ? 1 : 0 }}
          >
            <Image
              src={f.image}
              alt={f.imageAlt || f.title}
              fill
              sizes="62vw"
              className="object-cover object-center"
              priority={i === 0}
            />
            {/* Blend-Masken: links in den BG, oben/unten, rechts leicht */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.9) 12%, rgba(255,255,255,0.5) 38%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0.7) 100%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.45) 15%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.7) 85%, #ffffff 100%)",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Linke Spalte: Text + Bullet-Liste */}
          <div className="relative z-10">
            <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
              {t("features.badge")}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6 text-slate-900">
              {t("features.title.line1")}
              <br />
              {t("features.title.line2")}
              <br />
              <span className="text-slate-500">{t("features.title.line3")}</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 max-w-xl">
              {t("features.subtitle")}
            </p>

            <ul className="space-y-2 mb-10">
              {features.map((f, i) => (
                <li key={f.label}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${
                      i === active
                        ? "bg-blue-100 border-slate-300"
                        : "bg-transparent border-transparent hover:bg-blue-50"
                    }`}
                  >
                    <span
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all ${
                        i === active
                          ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                          : "bg-blue-200/60"
                      }`}
                    />
                    <span className={`text-base font-semibold ${i === active ? "text-slate-900" : "text-slate-600"}`}>
                      {f.label}
                    </span>
                    {/* Progress on active */}
                    {i === active && (
                      <span className="ml-auto h-0.5 w-16 bg-blue-100 rounded-full overflow-hidden flex-shrink-0">
                        <span
                          key={`prog-${active}`}
                          className="block h-full bg-gradient-to-r from-cyan-400 to-blue-400 origin-left"
                          style={{ animation: "featurepreview-progress 5.5s linear forwards" }}
                        />
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base text-center"
              >
                {t("usp.full.cta.start")}
              </Link>
              <Link
                href="/features"
                className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base text-center"
              >
                {t("common.cta.allFeatures")}
              </Link>
            </div>
          </div>

          {/* Rechte Spalte: schwebende Text-Legende zum Bild (kein Card-Rahmen) */}
          <div className="relative lg:min-h-[520px] flex lg:items-end">
            {/* Mobile: Bild inline */}
            <div className="lg:hidden w-full">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-white">
                {features.map((f, i) => (
                  <div
                    key={f.image}
                    className="absolute inset-0 transition-opacity duration-[1000ms]"
                    style={{ opacity: i === active ? 1 : 0 }}
                  >
                    <Image src={f.image} alt={f.title} fill sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  </div>
                ))}
                <div key={`m-txt-${active}`} className="absolute bottom-0 left-0 right-0 p-6" style={{ animation: "featurepreview-fade 0.7s ease-out" }}>
                  <span className="inline-flex self-start text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 px-3 py-1 rounded-full mb-3">
                    {current.tag} · {String(active + 1).padStart(2, "0")}/{String(features.length).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight mb-2">{current.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{current.description}</p>
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-6 bg-blue-600" : "w-1.5 bg-blue-200/70"
                    }`}
                    aria-label={`Feature ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop: Text schwebt unten rechts frei über dem Hintergrund-Bild */}
            <div key={`d-txt-${active}`} className="hidden lg:block ml-auto max-w-md relative z-10" style={{ animation: "featurepreview-fade 0.7s ease-out" }}>
              <span className="inline-flex text-[10px] font-black tracking-[0.25em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 backdrop-blur-md px-3 py-1 rounded-full mb-5">
                {current.tag} · {String(active + 1).padStart(2, "0")}/{String(features.length).padStart(2, "0")}
              </span>
              <h3 className="text-3xl xl:text-4xl font-black text-slate-900 leading-[1.1] mb-4 ">
                {current.title}
              </h3>
              <p className="text-base xl:text-lg text-slate-700 leading-relaxed ">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes featurepreview-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes featurepreview-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
