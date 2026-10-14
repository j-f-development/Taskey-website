"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

const CALENDLY_URL = "https://calendly.com/fynn-taskeyapp/new-meeting";
const CALENDLY_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_JS = "https://assets.calendly.com/assets/external/widget.js";

type CalendlyGlobal = {
  initInlineWidget: (opts: { url: string; parentElement: HTMLElement }) => void;
};

const COPY = {
  de: {
    badge: "Kennenlerngespräch",
    title: "Sprich direkt mit uns.",
    titleHighlight: "15 Minuten, unverbindlich.",
    subtitle:
      "Zeig uns euren Betrieb, wir zeigen dir, wie Taskey deine Einsatzplanung, Zeiterfassung und Dokumentation in einem System bündelt. Kein Vertriebsdruck. Nur ein ehrlicher Blick auf euren Alltag.",
    highlight1: "Individuelle Live-Demo",
    highlight2: "Technische Fragen zu NFC, SSO, DATEV",
    highlight3: "Antwort werktags innerhalb 24h",
    fallbackCta: "Termin bei Calendly öffnen",
  },
  en: {
    badge: "Intro call",
    title: "Talk to us directly.",
    titleHighlight: "15 minutes, no strings attached.",
    subtitle:
      "Show us your business, we'll show you how Taskey brings scheduling, time tracking and documentation into one system. Just an honest look at your day-to-day.",
    highlight1: "Live demo for your setup",
    highlight2: "Technical questions on NFC, SSO, DATEV",
    highlight3: "Reply within 24h on business days",
    fallbackCta: "Open scheduling on Calendly",
  },
  fr: {
    badge: "Rendez-vous découverte",
    title: "Parlez-nous directement.",
    titleHighlight: "15 minutes, sans engagement.",
    subtitle:
      "Montrez-nous votre activité, nous vous montrons comment Taskey réunit planification, pointage et documentation dans un seul système. Juste un regard honnête sur votre quotidien.",
    highlight1: "Démo live pour votre cas",
    highlight2: "Questions techniques NFC, SSO, DATEV",
    highlight3: "Réponse sous 24h les jours ouvrés",
    fallbackCta: "Ouvrir la prise de rendez-vous",
  },
} as const;

function ensureCalendlyCss(): void {
  if (document.querySelector(`link[href="${CALENDLY_CSS}"]`)) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = CALENDLY_CSS;
  document.head.appendChild(link);
}

function loadCalendlyScript(): Promise<CalendlyGlobal> {
  const w = window as unknown as { Calendly?: CalendlyGlobal };
  if (w.Calendly) return Promise.resolve(w.Calendly);

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${CALENDLY_JS}"]`
  );
  if (existing) {
    return new Promise<CalendlyGlobal>((resolve, reject) => {
      existing.addEventListener("load", () => {
        const c = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
        c ? resolve(c) : reject(new Error("Calendly loaded but window.Calendly missing"));
      });
      existing.addEventListener("error", () =>
        reject(new Error("Calendly script failed to load"))
      );
    });
  }

  return new Promise<CalendlyGlobal>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_JS;
    script.async = true;
    script.onload = () => {
      const c = (window as unknown as { Calendly?: CalendlyGlobal }).Calendly;
      c ? resolve(c) : reject(new Error("Calendly loaded but window.Calendly missing"));
    };
    script.onerror = () => reject(new Error("Calendly script failed to load"));
    document.body.appendChild(script);
  });
}

export default function BookMeeting() {
  const { language } = useLanguage();
  const copy = COPY[language] ?? COPY.de;

  const widgetRef = useRef<HTMLDivElement | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    const el = widgetRef.current;
    if (!el) return;

    ensureCalendlyCss();

    loadCalendlyScript()
      .then((Calendly) => {
        if (initializedRef.current || !widgetRef.current) return;
        Calendly.initInlineWidget({ url: CALENDLY_URL, parentElement: widgetRef.current });
        initializedRef.current = true;
      })
      .catch((err) => {
        console.error("[BookMeeting] Calendly init failed:", err);
      });
  }, []);

  return (
    <section
      aria-labelledby="book-meeting-heading"
      className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28 overflow-hidden"
    >
      {/* Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Subtiles Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-white/90 uppercase">
              {copy.badge}
            </span>
          </div>

          <h2
            id="book-meeting-heading"
            className="text-[clamp(2rem,5.5vw,4rem)] font-black leading-[0.98] tracking-tight text-white mb-5"
          >
            {copy.title}
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent">
              {copy.titleHighlight}
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            {copy.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
            {[copy.highlight1, copy.highlight2, copy.highlight3].map((h) => (
              <div key={h} className="flex items-center gap-2 text-sm text-white/80">
                <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Calendly Card */}
        <div className="relative">
          {/* Saubär – groß rechts neben dem Kalender (Desktop) */}
          <div className="hidden xl:block pointer-events-none absolute -right-40 2xl:-right-52 -bottom-4 z-10 w-[380px] 2xl:w-[440px]">
            <Image
              src="/Saub%C3%A4r/classic-stehen.png"
              alt=""
              width={600}
              height={800}
              className="w-full h-auto drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
            />
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/5">
            <div
              ref={widgetRef}
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{ minWidth: "320px", height: "740px" }}
            >
              {/* Fallback wenn Script blockiert wird oder noch nicht geladen ist */}
              <noscript>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full text-blue-700 font-bold"
                >
                  {copy.fallbackCta}
                </a>
              </noscript>
            </div>
          </div>

          {/* Sichtbarer Fallback-Link direkt unter dem Widget */}
          <div className="mt-4 text-center">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/50 hover:text-white/80 underline underline-offset-4 transition-colors"
            >
              {copy.fallbackCta}
            </a>
          </div>
        </div>

        {/* Saubär – groß, mittig unter dem Widget für kleinere Screens */}
        <div className="xl:hidden mt-10 flex justify-center">
          <div className="relative w-full max-w-md pointer-events-none">
            <Image
              src="/Saub%C3%A4r/top-zufrieden.png"
              alt=""
              width={600}
              height={600}
              className="w-full h-auto drop-shadow-[0_20px_36px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
