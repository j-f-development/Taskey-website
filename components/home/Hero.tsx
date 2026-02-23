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
      
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-12 pb-8 sm:pt-16 sm:pb-12 md:pt-24 md:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/423B9BC1-734E-48D0-A225-F576B61B6A81.png"
        alt="Taskey Hero Background"
        fill
        className="object-cover"
        priority
      />
      {/* Bottom fade gradient for smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-[1]"></div>

      {/* Decorative Circles - Psychological focal points */}
      <div className="absolute top-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 sm:w-80 h-48 sm:h-80 bg-blue-600/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-6 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 md:order-1 md:col-span-4 bg-white/70 md:bg-gradient-to-b md:from-white/60 md:to-transparent backdrop-blur-sm rounded-2xl md:rounded-b-none p-5 sm:p-8 pb-8 sm:pb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Die <span className="text-blue-800">Nr. 1</span> Dienstleistungssoftware für effiziente
              Betriebe
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-900 mb-6 sm:mb-8 leading-relaxed">
              Zeitersparnis von durchschnittlich <span className="font-bold text-blue-800">25-30h pro Monat</span>. Automatische Zeiterfassung, intelligente Auftragsplanung und digitale Rechnungsstellung für über 600 Branchen. Made in Germany, DSGVO-konform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white text-base sm:text-lg font-semibold rounded-xl hover:bg-gray-800 transition-colors text-center"
                aria-label="Kostenlose Demo buchen"
              >
                <span>Demo buchen</span>
              </button>
              <Link
                href="https://signup.vars-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 text-gray-900 border border-gray-900/30 text-base sm:text-lg font-semibold rounded-xl hover:bg-gray-900/10 transition-colors text-center"
                aria-label="14 Tage kostenlos testen"
              >
                14 Tage kostenlos testen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
