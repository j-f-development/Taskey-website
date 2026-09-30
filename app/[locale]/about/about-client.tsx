"use client";

import Image from "next/image";
import Link from "@/components/LocaleLink";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const LOGO_SRC = "/89294AD1-F642-46F0-8087-782AD98BE2A2_1_105_c.jpeg";

export default function AboutClient() {
  const { t } = useLanguage();

  // Scroll-Position für den fallenden Logo-Background
  const [scrollY, setScrollY] = useState(0);
  const [docHeight, setDocHeight] = useState(1);

  useEffect(() => {
    const measure = () => {
      setDocHeight(
        Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1
        )
      );
    };
    const onScroll = () => setScrollY(window.scrollY);
    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, []);

  // Progress 0 → 1 über die gesamte Seite
  const progress = Math.min(Math.max(scrollY / docHeight, 0), 1);
  // Logo fällt von -40vh über den Screen bis +130vh
  const logoTranslateY = -40 + progress * 170; // in vh
  // Sanfte Rotation für 3D-Feel
  const logoRotate = -8 + progress * 24; // -8° → +16°
  const logoTilt = -6 + progress * 12; // perspektivische Neigung
  const logoScale = 0.95 + progress * 0.15; // leichtes Anwachsen

  const values = [
    {
      title: t("about.values.1.title"),
      text: t("about.values.1.text"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: t("about.values.2.title"),
      text: t("about.values.2.text"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t("about.values.3.title"),
      text: t("about.values.3.text"),
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 min-h-screen overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[900px] h-[700px] bg-cyan-100 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[700px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.06),transparent_60%)] pointer-events-none" />

      {/* Subtiles Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1e3a8a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
              {t("aboutClient.heroBadge")}
            </span>
          </div>

          <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
            <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
              {t("about.hero.title")}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t("about.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* ─── MISSION ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-6">
            {t("aboutClient.missionLabel")}
          </p>
          <p className="text-2xl md:text-3xl text-slate-900 font-bold leading-snug mb-8 tracking-tight">
            {t("about.mission.p1")}
          </p>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {t("about.mission.p2")}
          </p>
        </div>
      </section>

      {/* ─── URSPRUNG / BEZUG ZUR GEBÄUDEREINIGUNG ─────────── */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white/70 border border-slate-200 backdrop-blur-sm p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[64px] pointer-events-none" />
            <div className="relative">
              <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
                {t("about.origin.eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-6">
                {t("about.origin.title")}
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4 font-medium">
                {t("about.origin.p1")}
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                {t("about.origin.p2")}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  t("about.origin.pill1"),
                  t("about.origin.pill2"),
                  t("about.origin.pill3"),
                  t("about.origin.pill4"),
                ].map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold text-blue-700 bg-cyan-50 border border-cyan-200"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / LÖSUNG ──────────────────────────────── */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 border border-slate-200 backdrop-blur-md mb-6">
              <Image src={LOGO_SRC} alt={t("aboutClient.logoAlt")} width={44} height={44} priority sizes="44px" className="rounded-lg object-cover" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {t("about.why.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {/* Problem */}
            <div className="relative rounded-3xl bg-blue-50/70 border border-slate-200 backdrop-blur-sm p-8 md:p-10">
              <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-amber-300 bg-amber-500/10 border border-amber-400/20 rounded-full mb-5">
                {t("aboutClient.problemLabel")}
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                {t("about.why.problem.title")}
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {t("about.why.problem.text")}
              </p>
            </div>

            {/* Lösung */}
            <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20">
              <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-8 md:p-10 h-full">
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full mb-5">
                  {t("aboutClient.solutionLabel")}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                  {t("about.why.solution.title")}
                </h3>
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  {t("about.why.solution.text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t("aboutClient.valuesLabel")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {t("about.values.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={i}
                className="relative rounded-2xl bg-blue-50/70 hover:bg-blue-50 border border-slate-200 backdrop-blur-sm p-7 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-300 flex items-center justify-center mb-5 text-blue-700">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">{v.title}</h3>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ÖKOSYSTEM: LAUNCHPAD + BANS ─────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t("about.ecosystem.eyebrow")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-6">
              {t("about.ecosystem.title")}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              {t("about.ecosystem.intro")}
            </p>
          </div>

          {/* Launchpad — Hero-Card */}
          <div className="relative rounded-3xl p-[1.5px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20 mb-6">
            <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-8 md:p-12 overflow-hidden">
              <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 md:gap-12 items-center">
                {/* Logo Column */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-full max-w-[280px] p-6 rounded-2xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 flex items-center justify-center">
                    <Image
                      src="/launchpad-saarland.png"
                      alt={t("about.launchpad.logoAlt")}
                      width={500}
                      height={196}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 768px) 240px, 280px"
                    />
                  </div>
                  <a
                    href="https://www.uds-triathlon.de/startup-launchpad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("about.launchpad.link")}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Text Column */}
                <div>
                  <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full mb-5">
                    {t("about.launchpad.badge")}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                    {t("about.launchpad.title")}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4 font-medium">
                    {t("about.launchpad.lead")}
                  </p>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                    {t("about.launchpad.p1")}
                  </p>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                    {t("about.launchpad.p2")}
                  </p>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {t("about.launchpad.p3")}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-200">
                    {[
                      { label: t("about.launchpad.stat1.label"), value: t("about.launchpad.stat1.value") },
                      { label: t("about.launchpad.stat2.label"), value: t("about.launchpad.stat2.value") },
                      { label: t("about.launchpad.stat3.label"), value: t("about.launchpad.stat3.value") },
                    ].map((s) => (
                      <div key={s.label}>
                        <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1.5">
                          {s.label}
                        </p>
                        <p className="text-sm md:text-base font-black text-slate-900 leading-tight">
                          {s.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Partner-Logos */}
                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-slate-500 mb-4">
                      {t("about.launchpad.partnersLabel")}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
                      <div className="h-10 md:h-11 flex items-center">
                        <Image
                          src="/triathlon-logo.png"
                          alt={t("about.launchpad.triathlonAlt")}
                          width={640}
                          height={351}
                          className="h-full w-auto object-contain"
                          sizes="130px"
                        />
                      </div>
                      <div className="h-10 md:h-11 flex items-center">
                        <Image
                          src="/uni-saarland-logo.png"
                          alt={t("about.launchpad.uniSaarlandAlt")}
                          width={640}
                          height={381}
                          className="h-full w-auto object-contain"
                          sizes="150px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Programm-Preview: Screenshot der Launchpad-Programmseite */}
          <a
            href="https://www.uds-triathlon.de/startup-launchpad/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-3 md:p-4 mb-6 overflow-hidden hover:border-slate-300 transition-colors"
          >
            <div className="absolute top-4 left-6 flex items-center gap-1.5 z-10">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white">
              <Image
                src="/launchpad-programm-preview.png"
                alt={t("about.launchpad.previewAlt")}
                width={640}
                height={306}
                sizes="(max-width: 768px) 100vw, 1024px"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex items-center justify-between px-3 md:px-4 pt-4 pb-1">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-blue-700 mb-1">
                  {t("about.launchpad.previewLabel")}
                </p>
                <p className="text-sm text-slate-600">
                  {t("about.launchpad.previewCaption")}
                </p>
              </div>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-700 transition-colors flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>

          {/* BANS — Card mit Foto */}
          <div className="relative rounded-3xl bg-blue-50/70 border border-slate-200 backdrop-blur-sm p-6 md:p-10 overflow-hidden">
            <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-8 md:gap-10 items-center">
              {/* Photo Column */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 bg-white">
                <Image
                  src="/bans-meetup.png"
                  alt={t("about.bans.photoAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>

              {/* Text Column */}
              <div>
                <span className="inline-block px-3 py-1 text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 bg-cyan-50 border border-cyan-300 rounded-full mb-5">
                  {t("about.bans.badge")}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight tracking-tight">
                  {t("about.bans.title")}
                </h3>
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-4 font-medium">
                  {t("about.bans.lead")}
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                  {t("about.bans.p1")}
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-3">
                  {t("about.bans.p2")}
                </p>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                  {t("about.bans.p3")}
                </p>
                <a
                  href="https://www.business-angels-saarland.de/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-500 transition-colors"
                >
                  {t("about.bans.link")}
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ──────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t("about.team.founders")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {t("about.team.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Fynn-Luca Schulz", img: "/ACCD988C-E7FD-4CAE-9A87-E4452122FD80_1_201_a.jpeg", role: t("aboutClient.role.ceo") },
              { name: "Julian Stosse",     img: "/team-julian.png",      role: t("aboutClient.role.ceo") },
              { name: "Yukio Jonas Sato",  img: "/team-yukio.jpg",       role: t("aboutClient.role.cofounder") },
            ].map((m) => (
              <div
                key={m.name}
                className="relative rounded-3xl bg-white border border-blue-100 border border-slate-200 p-10 text-center overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-cyan-50 rounded-full blur-[48px] pointer-events-none" />
                <div className="relative">
                  <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden relative ring-2 ring-white/10">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      className="object-cover"
                      sizes="192px"
                    />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-1">{m.name}</h3>
                  <p className="text-blue-700 text-sm font-bold tracking-wide">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ───────────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t("aboutClient.contactLabel")}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {t("about.contact.title")}
            </h2>
          </div>

          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-10 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-3">
                  {t("about.contact.phone")}
                </h4>
                <a
                  href="tel:+4915168488999"
                  className="text-slate-900 hover:text-blue-700 font-bold text-lg transition-colors"
                >
                  +49 151 684 88999
                </a>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-3">
                  {t("about.contact.email")}
                </h4>
                <a
                  href="mailto:info@taskeyapp.com"
                  className="text-slate-900 hover:text-blue-700 font-bold text-lg break-all transition-colors"
                >
                  info@taskeyapp.com
                </a>
              </div>
              <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 mb-3">
                  {t("about.contact.address")}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  In der Acht 44<br />
                  66333 Völklingen<br />
                  {t("aboutClient.country")}
                </p>
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-sm text-center mt-8">
            {t("about.contact.more")}{" "}
            <Link href="/impressum" className="text-blue-700 hover:text-blue-700 font-medium">
              {t("about.contact.imprint")}
            </Link>{" "}
            {t("about.contact.and")}{" "}
            <Link href="/datenschutz" className="text-blue-700 hover:text-blue-700 font-medium">
              {t("about.contact.privacy")}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ─── BOTTOM CTA ────────────────────────────────────── */}
      <section className="relative pb-24 md:pb-32 pt-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-100 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black leading-tight mb-3 text-slate-900">
                  {t("aboutClient.cta.title")}
                </h2>
                <p className="text-slate-600 text-base md:text-lg">
                  {t("aboutClient.cta.subtitle")}
                </p>
              </div>
              <a
                href="https://signup.taskeyapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors whitespace-nowrap shrink-0"
              >
                {t("aboutClient.cta.start")}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
