"use client";

import Image from "next/image";

export default function NFCSection() {
  return (
    <section className="pt-16 pb-20 bg-gray-50 relative overflow-hidden">
      {/* Grid Pattern Background — perspektivisch nach hinten geneigt (nur Desktop) */}
      <div className="absolute inset-0 hidden md:block" style={{ perspective: '1000px' }}>
        <div style={{ transform: 'rotateX(45deg)', transformOrigin: 'center 60%', width: '100%', height: '160%', position: 'absolute', top: '-30%' }}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="nfc-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#2563eb" strokeWidth="0.4" opacity="0.2" />
              </pattern>
              <radialGradient id="nfc-grid-fade" cx="50%" cy="55%" r="60%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="70%" stopColor="white" stopOpacity="0.6" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="nfc-grid-mask">
                <rect width="100%" height="100%" fill="url(#nfc-grid-fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#nfc-grid)" mask="url(#nfc-grid-mask)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-5 py-2 rounded-full text-sm font-bold mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            INNOVATION: NFC-TAGS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kleben. Scannen. Wissen.
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Gib deinem Betrieb ein digitales Gedächtnis. Jede Maschine, jede Anlage wird smart.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center mb-16">
          {/* Left: Visual */}
          <div className="relative px-4 sm:px-0">
            <div className="relative inline-block">
              <Image 
                src="/1E4C3B2F-0E0B-4440-992F-8312AFE578AF.png"
                alt="Taskey NFC Tag"
                width={600}
                height={600}
                className="object-contain w-full h-auto"
                loading="lazy"
              />
              {/* Animated blue border line */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1.5"
                  y="1.5"
                  width="597"
                  height="597"
                  rx="36"
                  ry="36"
                  stroke="#2563eb"
                  strokeWidth="2"
                  strokeDasharray="150 2250"
                  strokeLinecap="round"
                  opacity="0.6"
                  className="animate-nfc-border"
                />
              </svg>
            </div>
          </div>

          {/* Right: Benefits */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-4 sm:px-6 md:pl-8 lg:px-8">
            <div className="group flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-300 mb-2">01</span>
              <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3">Werkzeug & Maschinen-Tracking</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nie wieder Werkzeug auf der Großbaustelle vergessen. Jeder Scan wird mit GPS-Standort protokolliert.
              </p>
            </div>

            <div className="group flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-300 mb-2">02</span>
              <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3">GPS-Tracking für Werkzeug</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Nie wieder Werkzeug auf der Großbaustelle vergessen. Der letzte Scan-Standort wird auf der Karte angezeigt.
              </p>
            </div>

            <div className="group flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-300 mb-2">03</span>
              <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3">Rechtssicherer Nachweis</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Scan-Zeitstempel belegen: Dein Team war vor Ort und hat geprüft. Perfekt für Versicherung & Haftungsfragen.
              </p>
            </div>

            <div className="group flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-300 mb-2">04</span>
              <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3">Wissens-Sicherung</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Dein bester Geselle geht in Rente? Das Wissen bleibt am Objekt — nicht in seinem Kopf.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-12 border-t border-gray-200/60 px-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">∞</div>
            <div className="text-xs md:text-sm text-gray-500">Unbegrenzt wiederverwendbar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">5+ Jahre</div>
            <div className="text-xs md:text-sm text-gray-500">Lebensdauer</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">2-3 Tage</div>
            <div className="text-xs md:text-sm text-gray-500">Kostenloser Ersatz</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 px-4">
          <div className="inline-flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/features#nfc-tags"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl transition-colors text-sm md:text-base"
            >
              Mehr über NFC-Tags erfahren
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <p className="text-gray-400 text-xs md:text-sm mt-4">
            ✓ Kostenlose Starter-Tags für Neukunden  •  ✓ Ersatz bei Beschädigung garantiert
          </p>
        </div>
      </div>
    </section>
  );
}
