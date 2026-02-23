'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DemoPage() {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Kompletter Überblick',
      description: 'Sehen Sie alle Funktionen in Aktion — Dashboard, Aufträge, Zeiterfassung.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Keine Registrierung',
      description: 'Sofortiger Zugang ohne Account — einfach klicken und loslegen.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Echte Daten',
      description: 'Realistische Beispiel-Szenarien direkt aus dem Handwerk.'
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '100% Kostenlos',
      description: 'Keine versteckten Kosten, keine Kreditkarte erforderlich.'
    }
  ];

  const features = [
    'Vollständiges Dashboard mit Echtzeitdaten',
    'Auftrags- und Projektverwaltung in Aktion',
    'Automatische Zeiterfassung und Mitarbeiterverwaltung',
    'GPS-Tracking und interaktive Kartenfunktion',
    'Berichte, Analysen und Auswertungen',
    'Kundenverwaltung und Kommunikation'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner — fixed behind content, cut off by sections layered on top */}
      <div className="relative w-full -mt-20 h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden">
        <Image
          src="/8F414FF7-7D3A-4F1D-9217-85194DC77E0A.png"
          alt="Taskey Demo Banner"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top"
          priority
        />
      </div>

      {/* Hero — fades in over the banner */}
      <section className="relative -mt-40 pt-16 pb-20 md:pt-20 md:pb-28 overflow-hidden" style={{ zIndex: 2 }}>
        {/* Gradient fade from transparent to white */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 8%, rgba(255,255,255,0.75) 16%, rgba(255,255,255,1) 28%)' }} />
        
        {/* Subtle background accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-5 py-2 rounded-full text-sm font-bold mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Live Demo verfügbar
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Erleben Sie Taskey{' '}
            <span className="text-blue-600">live in Aktion</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            Entdecken Sie, wie Taskey Ihren Betrieb revolutionieren kann —{' '}
            <strong className="text-gray-700">ohne Anmeldung, ohne Verpflichtung.</strong>
          </p>

          {/* Main CTA */}
          <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <a
              href="https://demo.vars-development.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              <span>Demo jetzt erleben</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust */}
          <p className="text-gray-400 text-sm mt-6">
            ✓ Keine Kreditkarte erforderlich · ✓ Sofortiger Zugang · ✓ Realistische Daten
          </p>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.25em] mb-3">Einblicke</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              So sieht Taskey <span className="text-blue-600">in der Praxis</span> aus
            </h2>
          </div>

          <div className="relative flex items-start justify-center">
            {/* Left image */}
            <div className="relative flex-shrink-0" style={{ zIndex: 1, marginRight: '-50px' }}>
              <Image
                src="/CA0F277F-5386-4658-9887-5C00479C6542.png"
                alt="Taskey App Ansicht 1"
                width={1200}
                height={2400}
                className="h-auto block w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-[48vw]"
                style={{ borderRadius: '36px' }}
                loading="lazy"
              />
            </div>

            {/* Right image — versetzt nach unten */}
            <div className="relative flex-shrink-0" style={{ zIndex: 2, marginLeft: '-50px', marginTop: '140px' }}>
              <Image
                src="/CA4B7E7A-1B27-4DFF-861D-003E12F8A541.png"
                alt="Taskey App Ansicht 2"
                width={1200}
                height={2400}
                className="h-auto block w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-[48vw]"
                style={{ borderRadius: '36px' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.25em] mb-3">Warum die Demo testen?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Überzeugen Sie sich <span className="text-blue-600">selbst</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll See */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.25em] mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Was Sie in der Demo <span className="text-blue-600">entdecken</span>
            </h2>
          </div>

          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-50 rounded-xl px-6 py-4 border border-gray-100 hover:border-blue-200 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                  {index + 1}
                </div>
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="mt-12 text-center">
            <a
              href="https://demo.vars-development.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-[1.02]"
            >
              Jetzt kostenlos testen
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm">
            <p className="text-gray-500 text-lg leading-relaxed">
              Die Demo läuft mit{' '}
              <strong className="text-gray-900">realistischen Beispieldaten</strong>,
              damit Sie genau sehen, wie Taskey in Ihrem Betrieb funktionieren würde.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400 mt-8">
            <Link href="/was-ist-taskey" className="hover:text-blue-600 transition-colors">
              Was ist Taskey?
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link href="/features" className="hover:text-blue-600 transition-colors">
              Alle Funktionen
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link href="/pricing" className="hover:text-blue-600 transition-colors">
              Preise
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
