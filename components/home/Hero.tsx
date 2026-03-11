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

      <section className="relative bg-gray-900 pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/83CC6636-2805-434F-9DD7-E54950B72DF5.png"
          alt="Taskey Hero Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent z-[1]"></div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">

          {/* Headline */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white leading-[0.95] mb-8 tracking-tight">
            Dein Betrieb.<br />
            <span className="text-blue-400">Endlich im Griff.</span>
          </h1>

          {/* Sub-line */}
          <p className="text-3xl sm:text-4xl text-gray-300 font-medium mb-12 leading-snug">
            Aufträge. Zeiten. Maschinen. Abrechnung.<br />
            <span className="text-white font-bold">Endlich alles zusammen.</span>
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-blue-900 text-white text-xl font-black rounded-2xl hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Kostenlos testen – 14 Tage gratis
            </Link>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-10 py-5 text-white border-2 border-white/30 text-xl font-bold rounded-2xl hover:border-white/60 hover:bg-white/10 transition-colors"
            >
              Demo buchen
            </button>
          </div>

          <p className="mt-5 text-base text-gray-400">Keine Kreditkarte. Kein Risiko. Sofort loslegen.</p>
        </div>
      </section>
    </>
  );
}
