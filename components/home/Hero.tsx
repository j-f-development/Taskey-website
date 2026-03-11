"use client";

import Link from "next/link";
import { useState } from "react";
import DemoBookingModal from "../DemoBookingModal";

export default function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <section className="bg-white pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          {/* Headline */}
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-gray-900 leading-[0.95] mb-8 tracking-tight">
            Dein Betrieb.<br />
            <span className="text-blue-900">Endlich im Griff.</span>
          </h1>

          {/* Sub-line */}
          <p className="text-3xl sm:text-4xl text-gray-600 font-medium mb-12 leading-snug">
            Aufträge. Zeiten. Maschinen. Abrechnung.<br />
            <span className="text-gray-900 font-bold">Endlich alles zusammen.</span>
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
              className="px-10 py-5 text-gray-900 border-2 border-gray-300 text-xl font-bold rounded-2xl hover:border-gray-500 hover:bg-white/60 transition-colors"
            >
              Demo buchen
            </button>
          </div>

          <p className="mt-5 text-base text-gray-500">Keine Kreditkarte. Kein Risiko. Sofort loslegen.</p>
        </div>
      </section>
    </>
  );
}
