"use client";

import Link from "next/link";
import { useState } from "react";
import DemoBookingModal from "../DemoBookingModal";

export default function Hero() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />

      <section className="bg-white pt-24 pb-24 sm:pt-32 sm:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

          <h1 className="text-[clamp(4rem,12vw,9rem)] font-black text-gray-900 leading-[0.9] tracking-tight mb-10">
                Dein Betrieb.<br />
                <span className="text-blue-900">Endlich<br className="sm:hidden" /> im Griff.</span>
              </h1>

              <p className="text-2xl sm:text-3xl text-gray-500 font-medium mb-4">
                Aufträge. Zeiten. Maschinen. Abrechnung. GPS. NFC.
              </p>
              <p className="text-2xl sm:text-3xl font-black text-gray-900 mb-12">Endlich alles zusammen.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <Link
                  href="https://signup.vars-development.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-5 bg-blue-900 text-white text-xl font-black rounded-2xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02]"
                >
                  14 Tage kostenlos testen →
                </Link>
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="px-10 py-5 text-gray-900 border-2 border-gray-200 text-xl font-bold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all"
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
