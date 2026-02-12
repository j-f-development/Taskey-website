"use client";

import Image from "next/image";

export default function NFCSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-5 py-2 rounded-full text-sm font-bold mb-6">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            INNOVATION: NFC-TAGS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Kleben. Scannen. Wissen.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Gib deinem Betrieb ein digitales Gedächtnis. Jede Maschine, jede Anlage wird smart.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-0 items-center mb-16">
          {/* Left: Visual */}
          <div className="relative overflow-hidden px-4 sm:px-0">
            <Image 
              src="/D51DAA1C-8E91-4647-BAFA-FFC71E88FA2B.png"
              alt="Taskey NFC Tag"
              width={600}
              height={600}
              className="object-contain rounded-[36px] w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Right: Benefits */}
          <div className="space-y-4 md:space-y-6 px-4 sm:px-6 md:pl-8 lg:px-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Werkzeug & Maschinen-Tracking</h3>
                  <p className="text-gray-400 text-sm">
                    Nie wieder Werkzeug auf der Großbaustelle vergessen. Jeder Scan wird mit GPS-Standort protokolliert.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">GPS-Tracking für Werkzeug</h3>
                  <p className="text-gray-400 text-sm">
                    Nie wieder Werkzeug auf der Großbaustelle vergessen. Der letzte Scan-Standort wird auf der Karte angezeigt.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Rechtssicherer Nachweis</h3>
                  <p className="text-gray-400 text-sm">
                    Scan-Zeitstempel belegen: Dein Team war vor Ort und hat geprüft. Perfekt für Versicherung & Haftungsfragen.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-400/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Wissens-Sicherung</h3>
                  <p className="text-gray-400 text-sm">
                    Dein bester Geselle geht in Rente? Das Wissen bleibt am Objekt — nicht in seinem Kopf.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 pt-12 border-t border-white/10 px-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-black text-cyan-400 mb-2">∞</div>
            <div className="text-xs md:text-sm text-gray-400">Unbegrenzt wiederverwendbar</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-black text-cyan-400 mb-2">5+ Jahre</div>
            <div className="text-xs md:text-sm text-gray-400">Lebensdauer</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl lg:text-4xl font-black text-cyan-400 mb-2">2-3 Tage</div>
            <div className="text-xs md:text-sm text-gray-400">Kostenloser Ersatz</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 px-4">
          <div className="inline-flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="/features#nfc-tags"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:scale-105 transition-all shadow-xl text-sm md:text-base"
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
