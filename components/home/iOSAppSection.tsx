'use client';

import { useState, useRef } from 'react';
import { FaApple, FaDownload, FaStar, FaCheckCircle } from 'react-icons/fa';

export default function IOSAppSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleCloseMore = () => {
    setShowMore(false);
    // Smooth scroll back to the section
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const features = [
    'Intuitive Benutzeroberfläche',
    'Offline-Modus verfügbar',
    'Push-Benachrichtigungen',
    'Nahtlose Synchronisation',
    'Face ID / Touch ID Support',
  ];

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 md:w-64 md:h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-3 md:px-4 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Side - Video */}
          <div 
            className="relative max-w-xs sm:max-w-sm mx-auto lg:mx-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Video Container with Effects */}
            <div className="relative">
              {/* Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-75' : 'opacity-0'}`}></div>
              
              {/* Video Frame - exact fit */}
              <div className="relative transform transition-transform duration-500 hover:scale-105">
                <div className="relative overflow-hidden shadow-2xl rounded-xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto block"
                  >
                    <source src="/Taskey (Neue iOS-App).mov" type="video/mp4" />
                    Ihr Browser unterstützt das Video-Tag nicht.
                  </video>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-300 text-sm" />
                  <span className="font-bold text-sm">Neu!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Marketing Content */}
          <div className="space-y-4 md:space-y-5">
            {/* Header */}
            <div className="space-y-2 md:space-y-3">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                <FaApple className="text-base" />
                <span>Jetzt verfügbar im App Store</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Taskey jetzt auch als{' '}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  iOS-App
                </span>
              </h2>
              
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                Verwalten Sie Ihre Aufträge, erfassen Sie Zeiten und bleiben Sie mit Ihrem Team verbunden – jetzt direkt auf Ihrem iPhone oder iPad.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-1.5 md:space-y-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 md:gap-3 bg-gray-800/50 backdrop-blur-sm rounded-lg p-2.5 md:p-3 shadow-sm hover:shadow-md hover:bg-gray-700/50 transition-all duration-300 transform hover:translate-x-2 border border-gray-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-white text-xs" />
                  </div>
                  <span className="text-gray-200 font-medium text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tagline */}
            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-sm rounded-xl p-3 md:p-4 border border-blue-500/30">
              <p className="text-center text-gray-200 font-semibold text-xs md:text-sm">
                Die Nr. 1 Dienstleistungssoftware für effiziente Betriebe
              </p>
            </div>

            {/* CTA Buttons */}
            <div ref={sectionRef} className="flex flex-col gap-2.5 md:gap-3 pt-2">
              <a
                href="https://apps.apple.com/us/app/taskey/id6757116248"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 md:px-6 py-3 rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700"
              >
                <FaApple className="text-lg md:text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Im App Store laden</span>
              </a>
              
              <button 
                onClick={() => setShowMore(!showMore)}
                className="flex items-center justify-center gap-2 bg-gray-800/50 backdrop-blur-sm text-gray-200 px-5 md:px-6 py-3 rounded-xl font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-700 hover:border-blue-600"
              >
                <FaDownload className="text-blue-400" />
                <span>Mehr erfahren</span>
              </button>
            </div>

            {/* Expandable Content */}
            <div 
              className={`transition-all duration-700 ease-in-out overflow-hidden ${
                showMore ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-700 space-y-3 md:space-y-4 max-h-[500px] md:max-h-[600px] overflow-y-auto mt-3">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                  Mehr als Software – ein System zur Objektivierung von Arbeit
                </h3>
                
                <div className="space-y-3 text-gray-300 text-sm">
                  <p className="leading-relaxed">
                    <strong className="text-white">Taskey ist kein Überwachungstool.</strong> Es ist ein System zur Objektivierung von Arbeit – Arbeit wird messbar, erklärbar und belegbar, ohne dass Menschen sich ständig rechtfertigen müssen.
                  </p>
                  
                  <p className="leading-relaxed">
                    Das echte Problem in Betrieben ist nicht Faulheit, sondern <strong className="text-white">Unklarheit</strong>. Diskussionen über „Wer war wann wo?" werden durch nachvollziehbare Fakten ersetzt.
                  </p>
                  
                  <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-blue-500">
                    <p className="font-semibold text-white mb-2">Taskey als Betriebssystem für Arbeit:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• <strong>Eingabe:</strong> Zeit, Einsatzort, Auftrag, Person</li>
                      <li>• <strong>Verarbeitung:</strong> Klare Zuordnung & Kontext</li>
                      <li>• <strong>Ausgabe:</strong> Nachweise, Klarheit, Dokumentation</li>
                    </ul>
                  </div>
                  
                  <p className="leading-relaxed">
                    <strong className="text-white">Arbeit braucht Kontext, keine Minuten.</strong> Taskey dokumentiert Einsätze mit klarem Zweck – nicht bloße Anwesenheit.
                  </p>
                  
                  <p className="leading-relaxed">
                    Taskey schafft <strong className="text-white">ausgeglichene Machtverhältnisse:</strong> Änderungen sind sichtbar, Begründungen Pflicht, Entscheidungen nachvollziehbar. So entsteht Vertrauen durch Struktur.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg p-4 border border-blue-500/30 text-center">
                    <p className="text-white font-bold">
                      Taskey misst keine Menschen – Taskey misst Realität
                    </p>
                    <p className="text-gray-300 text-xs mt-1">
                      Keine Kontrolle, sondern Klarheit, Fairness und Arbeitsfrieden
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-gray-700">
                  <a
                    href="/was-ist-taskey"
                    className="flex items-center justify-center px-3 md:px-4 py-2 md:py-2.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 rounded-lg transition-all duration-300 text-xs md:text-sm font-medium border border-gray-600 hover:border-blue-500"
                  >
                    Was ist Taskey?
                  </a>
                  <a
                    href="/features"
                    className="flex items-center justify-center px-3 md:px-4 py-2 md:py-2.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 rounded-lg transition-all duration-300 text-xs md:text-sm font-medium border border-gray-600 hover:border-blue-500"
                  >
                    Was kann Taskey?
                  </a>
                  <a
                    href="/pricing"
                    className="flex items-center justify-center px-3 md:px-4 py-2 md:py-2.5 bg-gray-700/50 hover:bg-gray-700 text-gray-200 rounded-lg transition-all duration-300 text-xs md:text-sm font-medium border border-gray-600 hover:border-blue-500"
                  >
                    Preise
                  </a>
                  <button
                    className="flex items-center justify-center px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-semibold shadow-lg"
                  >
                    Demo buchen
                  </button>
                  <a
                    href="#"
                    className="sm:col-span-2 flex items-center justify-center px-3 md:px-4 py-2.5 md:py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg transition-all duration-300 text-xs md:text-sm font-bold shadow-lg"
                  >
                    4 Wochen kostenlos testen
                  </a>
                </div>
                
                <button
                  onClick={handleCloseMore}
                  className="w-full mt-4 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Weniger anzeigen ↑
                </button>
              </div>
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
              <div className="flex -space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-gray-800"></div>
                <div className="w-6 h-6 rounded-full bg-indigo-600 border-2 border-gray-800"></div>
                <div className="w-6 h-6 rounded-full bg-blue-800 border-2 border-gray-800"></div>
              </div>
              <span>
                designed by <strong className="text-gray-300">vars-development</strong> in Germany
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
