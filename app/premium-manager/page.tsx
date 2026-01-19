"use client";

import React, { useState } from "react";
import Link from "next/link";
import ManagerRequestModal from "@/components/ManagerRequestModal";
import DarkHeader from "@/components/DarkHeader";

export default function PremiumManagerPage() {
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const headingRef = React.useRef<HTMLHeadingElement>(null);

  React.useEffect(() => {
    // Hide the default header for this page
    const defaultHeader = document.querySelector('body > header');
    if (defaultHeader) {
      (defaultHeader as HTMLElement).style.display = 'none';
    }

    // Show it again when component unmounts (user navigates away)
    return () => {
      const defaultHeader = document.querySelector('body > header');
      if (defaultHeader) {
        (defaultHeader as HTMLElement).style.display = 'block';
      }
    };
  }, []);

  React.useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;

    const updateTransforms = () => {
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(0, ${lastScrollY * 0.2}px, 0)`;
      }
      if (headingRef.current) {
        headingRef.current.style.backgroundPosition = `center ${-lastScrollY * 1.3}px`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <DarkHeader />
      <main className="bg-gray-950">
      {/* Hero Section - Split in 2 Layers */}
      <section className="relative min-h-screen">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-black overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 min-h-screen py-12 sm:py-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-4xl">
              {/* Stack: Image + Heading + Content */}
              <div 
                ref={containerRef}
                className="relative mb-6 sm:mb-8"
                style={{
                  willChange: 'transform'
                }}
              >
                {/* Heading mit Image Inside Text Effekt */}
                <h1 
                  ref={headingRef}
                  className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-6 sm:mb-8"
                  style={{
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundImage: `url(/51379205-AA5D-4A16-8E59-D2C93C1A7D0B_1_105_c.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundColor: '#ffffff',
                    filter: 'contrast(1.2)',
                    willChange: 'background-position',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                >
                  Ihr persönlicher Taskey Manager
                </h1>

                {/* Beschreibung und Button im gleichen Container */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 mb-8 sm:mb-10 max-w-2xl">
                  Eine dedizierte Person, die sich zu 100% um Ihr Unternehmen kümmert
                </p>

                <button
                  onClick={() => setIsManagerModalOpen(true)}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-base sm:text-xl rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
                >
                  <span>Jetzt Manager anfragen</span>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was ist ein Taskey Manager */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 text-center">
              Was ist ein Taskey Manager?
            </h2>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                Ein <span className="text-cyan-400 font-bold">Taskey Manager</span> ist Ihre persönliche Kontaktperson bei Taskey – ein Experte, der sich ausschließlich um Ihr Unternehmen kümmert und als verlängerter Arm Ihrer Organisation agiert.
              </p>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Stellen Sie sich vor, Sie hätten einen hochqualifizierten Mitarbeiter, der Taskey in- und auswendig kennt, Ihre Prozesse versteht und proaktiv Optimierungen vorschlägt – ohne dass er auf Ihrer Gehaltsliste steht.
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-5 sm:p-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Exklusiv für Sie</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Ihr Manager betreut ausschließlich Ihr Unternehmen und kennt Ihre spezifischen Anforderungen, Prozesse und Ziele.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-5 sm:p-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Sofortige Reaktion</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Keine Warteschlangen, keine Ticketsysteme – direkter Draht zu Ihrem Manager per Telefon, WhatsApp oder E-Mail.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-5 sm:p-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Proaktive Optimierung</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Ihr Manager analysiert kontinuierlich Ihre Nutzung und schlägt Verbesserungen vor, bevor Sie danach fragen müssen.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-5 sm:p-6">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Vor-Ort Service</h3>
                <p className="text-sm sm:text-base text-gray-400">
                  Bei Bedarf kommt Ihr Manager persönlich zu Ihnen ins Unternehmen für Schulungen oder tiefgreifende Optimierungen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Was macht ein Manager genau? */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-12 text-center">
            Was macht Ihr Manager <span className="text-cyan-400">genau</span>?
          </h2>

          <div className="space-y-4 sm:space-y-6 max-w-5xl mx-auto">
            {[
              {
                title: "Persönliches Onboarding",
                description: "Ihr Manager richtet Taskey komplett für Sie ein – von der initialen Konfiguration über die Mitarbeiter-Einrichtung bis hin zur Integration in Ihre bestehenden Systeme.",
                icon: "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
              },
              {
                title: "Kontinuierliche Prozessoptimierung",
                description: "Ihr Manager beobachtet, wie Sie Taskey nutzen, und gibt Ihnen regelmäßig Tipps zur Effizienzsteigerung. Er passt Workflows an Ihre sich ändernden Bedürfnisse an.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z"
              },
              {
                title: "Persönliche Schulungen",
                description: "Neue Mitarbeiter? Kein Problem. Ihr Manager schult Ihr Team individuell – remote oder vor Ort – damit alle optimal mit Taskey arbeiten können.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              },
              {
                title: "24/7 Priority Support",
                description: "Problem um 3 Uhr nachts? Ihr Manager ist für Sie erreichbar. Ob technisches Problem oder Frage zur Bedienung – Sie bekommen sofort Hilfe.",
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Strategische Beratung",
                description: "Ihr Manager berät Sie, wie Sie Taskey optimal für Ihr Geschäftsmodell nutzen und welche zusätzlichen Module für Sie sinnvoll sein könnten.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Regelmäßige Check-ins",
                description: "Monatliche oder wöchentliche Calls (nach Ihrer Präferenz), um den Status zu besprechen, neue Anforderungen zu erfassen und die Roadmap zu planen.",
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-800 to-gray-850 border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-cyan-400/50 transition-all duration-300">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Für wen ist ein Manager geeignet? */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-12 text-center">
            Für wen ist ein <span className="text-cyan-400">Manager</span> geeignet?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Ein persönlicher Taskey Manager ist ideal für Unternehmen, die <span className="text-cyan-400 font-bold">wachsen wollen</span>, <span className="text-cyan-400 font-bold">noch mehr Zeit sparen möchten</span> und <span className="text-cyan-400 font-bold">maximale Effizienz</span> aus ihrer Software herausholen wollen.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-left">
                <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">Wachstumsorientiert</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Sie möchten skalieren und brauchen einen Partner, der mit Ihnen wächst.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">Zeitsparend</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Zeit ist Ihr wertvollstes Gut – Sie möchten sich aufs Kerngeschäft konzentrieren.</p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">Premium-Service</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Sie erwarten erstklassigen Support und individuelle Betreuung auf höchstem Niveau.</p>
                </div>
              </div>

              <div className="mt-6 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-700">
                <p className="text-sm sm:text-base md:text-lg text-gray-400">
                  Egal ob 5 oder 500 Mitarbeiter – entscheidend ist Ihr Anspruch an <span className="text-cyan-400 font-semibold">Qualität, Effizienz und persönlichen Service</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI & Zeitersparnis */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 sm:mb-12 text-center">
            Ihre <span className="text-cyan-400">Vorteile</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-850 border border-gray-700 rounded-2xl p-6 sm:p-8 md:p-12 mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Durchschnittliche Zeitersparnis: 50 Stunden/Monat</h3>
              
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">Ohne Manager:</h4>
                  <ul className="space-y-2 sm:space-y-3 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✗</span>
                      <span className="text-sm sm:text-base">Standard-Support mit Wartezeiten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✗</span>
                      <span className="text-sm sm:text-base">Selbst durch Dokumentation wühlen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✗</span>
                      <span className="text-sm sm:text-base">Trial & Error bei neuen Features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✗</span>
                      <span className="text-sm sm:text-base">Ineffiziente Prozesse bleiben unentdeckt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">✗</span>
                      <span className="text-sm sm:text-base">Mitarbeiter-Schulungen selbst durchführen</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-cyan-400 mb-3 sm:mb-4">Mit Manager:</h4>
                  <ul className="space-y-2 sm:space-y-3 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Sofortige Antworten per Direktkontakt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Proaktive Einführung in neue Features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Optimale Workflows von Anfang an</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Kontinuierliche Prozessoptimierung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400 font-bold">✓</span>
                      <span className="text-sm sm:text-base">Manager übernimmt alle Schulungen</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

            <p className="text-center text-gray-400 text-base sm:text-lg">
              Ein persönlicher Manager spart Ihnen wertvolle Zeit und zahlt sich langfristig vielfach aus.
            </p>
          </div>
        </div>
      </section>

      {/* Preise & CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-400 text-gray-900 text-xs font-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full uppercase tracking-wider mb-4 sm:mb-6">
            Begrenztes Angebot
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 px-2">
            Sichern Sie sich Ihren
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              persönlichen Manager
            </span>
          </h2>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-cyan-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 sm:mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-baseline gap-2 sm:gap-3 justify-center">
                <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white">239€</span>
                <span className="text-gray-400 text-xl sm:text-2xl">/ Woche</span>
              </div>
            </div>

            <p className="text-cyan-400 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">zzgl. MwSt. | Jederzeit kündbar</p>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">Zubuchbar zu jedem Taskey-Paket</p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-4 sm:mb-6">
              <button
                onClick={() => setIsManagerModalOpen(true)}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-base sm:text-lg rounded-xl hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
              >
                <span className="relative z-10">Jetzt Manager anfragen</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              
              <a
                href="tel:+4915168488999"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-800 border-2 border-gray-700 text-white font-bold text-base sm:text-lg rounded-xl hover:border-gray-600 hover:bg-gray-750 transition-all duration-300"
              >
                +49 151 684 88999
              </a>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 text-left">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-xs sm:text-sm">Exklusiver Direktkontakt</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-xs sm:text-sm">24/7 Priority Support</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-xs sm:text-sm">Proaktive Optimierung</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-xs sm:text-sm">Persönliche Schulungen</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-400 text-xs sm:text-sm">Vor-Ort Service</span>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg px-2">
            Fragen? Rufen Sie uns an: <a href="tel:+4915168488999" className="text-cyan-400 hover:text-cyan-300 font-semibold">+49 151 684 88999</a>
          </p>
        </div>
      </section>

      {/* Manager Request Modal */}
      <ManagerRequestModal 
        isOpen={isManagerModalOpen} 
        onClose={() => setIsManagerModalOpen(false)} 
      />
    </main>
    </>
  );
}
