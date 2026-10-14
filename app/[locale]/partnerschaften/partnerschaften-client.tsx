'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

// SVG icon paths for benefits (5 benefits)
const benefitIcons = [
  <svg key="b1" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="b2" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="b3" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  <svg key="b4" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  <svg key="b5" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
];

export default function PartnerschaftenClient() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partnerTypes = [
    {
      id: 'recommender',
      title: t('partner.type1.title'),
      subtitle: t('partner.type1.subtitle'),
      description: t('partner.type1.desc'),
      highlights: [t('partner.type1.h1'), t('partner.type1.h2'), t('partner.type1.h3')],
    },
    {
      id: 'cleaner',
      title: t('partner.type2.title'),
      subtitle: t('partner.type2.subtitle'),
      description: t('partner.type2.desc'),
      highlights: [t('partner.type2.h1'), t('partner.type2.h2'), t('partner.type2.h3')],
    },
  ];

  const steps = [
    { step: '01', title: t('partner.step1.title'), description: t('partner.step1.desc') },
    { step: '02', title: t('partner.step2.title'), description: t('partner.step2.desc') },
    { step: '03', title: t('partner.step3.title'), description: t('partner.step3.desc') },
    { step: '04', title: t('partner.step4.title'), description: t('partner.step4.desc') },
  ];

  const benefits = [
    { title: t('partner.benefit1.title'), description: t('partner.benefit1.desc'), icon: benefitIcons[0] },
    { title: t('partner.benefit2.title'), description: t('partner.benefit2.desc'), icon: benefitIcons[1] },
    { title: t('partner.benefit3.title'), description: t('partner.benefit3.desc'), icon: benefitIcons[2] },
    { title: t('partner.benefit4.title'), description: t('partner.benefit4.desc'), icon: benefitIcons[3] },
    { title: t('partner.benefit5.title'), description: t('partner.benefit5.desc'), icon: benefitIcons[4] },
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
            'linear-gradient(to right, #1e3a8a 1px, transparent 1px), linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ─── HERO ──────────────────────────────────────────── */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="text-[10px] sm:text-xs font-black tracking-[0.25em] text-blue-700 uppercase">
                {t('partner.hero.badge')}
              </span>
            </div>

            <h1 className="text-[clamp(2.5rem,7vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-6 text-slate-900">
              {t('partner.hero.title')}
              <br />
              <span className="bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                {t('partner.hero.title.highlight')}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-700 font-bold mb-10 max-w-3xl leading-snug">
              {t('partner.hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white text-base font-bold rounded-full hover:bg-blue-500 transition-colors"
              >
                {t('partner.hero.cta1')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
              <a
                href="#partner-typen"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-slate-300 text-slate-900 text-base font-bold rounded-full hover:bg-blue-100 transition-colors"
              >
                {t('partner.hero.cta2')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Warum Taskey ───────────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-blue-50 border border-slate-200 backdrop-blur-md mb-8">
            <Image src="/logoblue.png" alt="Taskey Logo · Software für Gebäudereinigung" width={56} height={56} sizes="56px" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
            {t('partner.trust.title')}
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t('partner.trust.desc')}
          </p>
        </div>
      </section>

      {/* ─── Benefits ──────────────────────────────────────── */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t('partner.benefits.badge')}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {t('partner.benefits.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl bg-blue-50/70 hover:bg-blue-50 border border-slate-200 backdrop-blur-sm p-7 transition-all hover:-translate-y-1${idx === 4 ? ' sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-300 flex items-center justify-center mb-5 text-blue-700">
                  {benefit.icon}
                </div>
                <h3 className="font-black text-slate-900 mb-2 text-lg leading-tight">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Partner-Typen ─────────────────────────────────── */}
      <section id="partner-typen" className="relative py-20 md:py-28 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] sm:text-xs font-black text-emerald-700 uppercase tracking-[0.3em] mb-4">
              {t('partner.types.badge')}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
              {t('partner.types.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('partner.types.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partnerTypes.map((type, idx) => {
              const isHl = idx === 1;
              return (
                <div
                  key={type.id}
                  className={`relative rounded-3xl p-[1.5px] ${
                    isHl
                      ? 'bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-2xl shadow-cyan-500/20'
                      : 'bg-white/10'
                  }`}
                >
                  <div className="rounded-[calc(1.5rem-1.5px)] bg-white border border-blue-100 p-7 md:p-8 h-full flex flex-col">
                    <h3 className="text-xl font-black text-slate-900 mb-1 leading-tight">{type.title}</h3>
                    <p className={`text-sm font-bold mb-4 ${isHl ? 'text-blue-700' : 'text-slate-500'}`}>
                      {type.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{type.description}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {type.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <svg className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700 text-sm font-medium">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── So funktioniert es ────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t('partner.steps.badge')}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {t('partner.steps.title')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div
                key={s.step}
                className="relative rounded-2xl bg-blue-50/70 hover:bg-blue-50 border border-slate-200 backdrop-blur-sm p-6 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-300 flex items-center justify-center mb-4">
                  <span className="text-blue-700 font-black text-sm tracking-wide">{s.step}</span>
                </div>
                <h3 className="font-black text-slate-900 mb-2 leading-tight">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Kundenreferenzen ──────────────────────────────── */}
      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t('partner.partners.badge')}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              {t('partner.partners.title')}
            </h2>
          </div>

          {/* Featured Spotlight — MG */}
          <div className="relative mb-16 md:mb-20">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-blue-900/15">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Bild */}
                <div className="relative lg:col-span-3 aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/095818D7-E56D-4784-AB51-A0EC8E9E85D5.webp"
                    alt="Taskey-Partner MG Gebäudeservice · Gebäudereinigung in Köln als Referenzkunde"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/60 shadow-lg shadow-black/10">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-black tracking-[0.25em] text-slate-700 uppercase">
                      {t('partner.partners.featured.badge')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-7 md:p-10 flex flex-col justify-center">
                  <div className="mb-6 inline-flex items-center h-14 rounded-xl bg-slate-50 border border-slate-200 px-4 self-start">
                    <Image
                      src="https://cdn.vars-development.com/logos/enterprise/mg-geba%CC%88udeservice.png.avif"
                      alt="Logo MG Gebäudeservice · Taskey-Referenzkunde in der Gebäudereinigung"
                      width={140}
                      height={50}
                      className="object-contain h-8 w-auto"
                    />
                  </div>
                  <p className="text-[11px] font-black text-blue-700 uppercase tracking-[0.28em] mb-3">
                    {t('partner.partners.featured.title')}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4">
                    MG Gebäudeservice
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {t('partner.partners.mgDesc')}
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/news/mg-gebaeudeservice-duesseldorf-case-study"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-blue-500 transition-colors"
                    >
                      {t('partner.partners.caseStudy')}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </Link>
                    <a
                      href="https://mg-gebaeudeservice.de"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-900 font-bold px-6 py-3 rounded-full text-sm hover:bg-slate-50 transition-colors"
                    >
                      {t('partner.partners.visit')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Saubär – sits on top edge of the featured card */}
            <div className="hidden md:block pointer-events-none absolute -top-24 right-6 lg:right-12 z-10 w-[130px] lg:w-[150px]">
              <Image
                src="/Saub%C3%A4r/top-zufrieden.png"
                alt=""
                width={300}
                height={300}
                className="w-full h-auto drop-shadow-[0_18px_28px_rgba(15,23,42,0.25)]"
              />
            </div>
          </div>

          {/* Partner-Netzwerk */}
          <div className="text-center mb-10">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-3">
              {t('partner.partners.network.badge')}
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight mb-2">
              {t('partner.partners.network.title')}
            </h3>
            <p className="text-slate-600 text-base max-w-xl mx-auto">
              {t('partner.partners.network.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* PAVAN */}
            <a
              href="https://pavan-gmbh.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 p-7 transition-all hover:-translate-y-1"
            >
              <div className="h-16 flex items-center mb-6">
                <Image
                  src="/logos/pavan-logo.png"
                  alt="Logo PAVAN GmbH · Partner und Referenzkunde von Taskey in der Gebäudereinigung"
                  width={160}
                  height={60}
                  className="object-contain h-10 w-auto grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-slate-900 font-black text-lg mb-2">PAVAN GmbH</p>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {t("partnerClient.pavan.p1")}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 group-hover:gap-2.5 transition-all">
                {t('partner.partners.visit')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>

            {/* Flix-Clean */}
            <a
              href="https://flix-clean.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 p-7 transition-all hover:-translate-y-1"
            >
              <div className="h-16 flex items-center mb-6">
                <Image
                  src="/logos/flix-clean-logo.jpg"
                  alt="Logo Flix-Clean Gebäudereinigung · Partner und Referenzkunde von Taskey"
                  width={160}
                  height={60}
                  className="object-contain h-12 w-auto grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-slate-900 font-black text-lg mb-2">Flix-Clean Homburg</p>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {t("partnerClient.flixclean.p1")}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 group-hover:gap-2.5 transition-all">
                {t('partner.partners.visit')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>

            {/* Acrotec */}
            <a
              href="https://acrotec.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/10 p-7 transition-all hover:-translate-y-1"
            >
              <div className="h-16 flex items-center mb-6">
                <Image
                  src="/logos/acrotec-logo.jpg"
                  alt="Logo Acrotec GmbH · Partner und Referenzkunde von Taskey in der Gebäudereinigung"
                  width={160}
                  height={60}
                  className="object-contain h-10 w-auto grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-slate-900 font-black text-lg mb-2">Acrotec GmbH</p>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {t("partnerClient.acrotec.p1")}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 group-hover:gap-2.5 transition-all">
                {t('partner.partners.visit')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </span>
            </a>
          </div>

          <p className="text-center text-sm text-slate-500 mt-10 max-w-2xl mx-auto">
            {t('partner.partners.note')}
          </p>
        </div>
      </section>

      {/* ─── Kontakt ──────────────────────────── */}
      <section id="kontakt" className="relative py-20 md:py-28 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[10px] sm:text-xs font-black text-blue-700 uppercase tracking-[0.3em] mb-4">
              {t('partner.contact.badge')}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
              {t('partner.contact.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-xl mx-auto">
              {t('partner.contact.subtitle')}
            </p>
          </div>

          <div className="relative rounded-3xl bg-gradient-to-br from-white via-blue-50 to-white border border-slate-200 p-8 md:p-12 overflow-hidden text-center">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-cyan-50 rounded-full blur-[56px] pointer-events-none" />
            <div className="relative flex flex-col items-center gap-6">
              <p className="text-slate-600 max-w-md leading-relaxed">
                {t('partner.contact.subtitle')}
              </p>
              <p className="text-slate-500 text-sm pt-1">
                {t('partner.contact.emailDirect')}{' '}
                <a href="mailto:info@taskeyapp.com" className="text-blue-700 hover:text-blue-500 font-medium">
                  info@taskeyapp.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
