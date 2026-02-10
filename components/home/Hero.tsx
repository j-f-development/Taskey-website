"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DemoBookingModal from "../DemoBookingModal";

export default function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Decorative Circles - Psychological focal points */}
      <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Die <span className="text-blue-900">Nr. 1</span> Dienstleistungssoftware für effiziente
              Betriebe
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Zeitersparnis von durchschnittlich <span className="font-bold text-blue-900">25-30h pro Monat</span>. Automatische Zeiterfassung, intelligente Auftragsplanung und digitale Rechnungsstellung für über 600 Branchen. Made in Germany, DSGVO-konform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-900 text-white text-base sm:text-lg font-semibold rounded-full hover:bg-blue-800 transition-colors text-center"
                aria-label="Kostenlose Demo buchen"
              >
                <span>Demo buchen</span>
              </button>
              <Link
                href="https://signup.vars-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 text-blue-900 border-2 border-blue-900 text-base sm:text-lg font-semibold rounded-full hover:bg-blue-50 transition-colors text-center"
                aria-label="14 Tage kostenlos testen"
              >
                14 Tage kostenlos testen
              </Link>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 mb-8 md:mb-0">
            {/* Circular background - dark grey */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[85%] sm:w-[90%] h-[85%] sm:h-[90%] bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-2xl"></div>
            </div>
            
            {/* Large image above circle */}
            <div className="relative z-10 scale-125 sm:scale-150 w-full h-[400px] sm:h-[500px]">
              <Image 
                src="/B0D9F1DC-D59E-4A75-BC04-0C323F942754-opt.jpg" 
                alt="Taskey Software" 
                fill
                className="object-contain drop-shadow-2xl"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
                priority
                fetchPriority="high"
                quality={75}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
