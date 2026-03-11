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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Eyebrow */}
          <p className="text-sm font-bold uppercase tracking-widest text-blue-900 mb-6">
            Betriebssoftware für Handwerk &amp; Dienstleister
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-8">
            Alles, was im Betrieb<br />
            nervt –{" "}
            <span className="text-blue-900">an einem Ort.</span>
          </h1>

          {/* Sub-points */}
          <div className="max-w-2xl mx-auto space-y-3 mb-10 text-left">
            {[
              { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", text: "Aufträge am Abend geplant – die Jungs wissen morgens genau wohin. Kein WhatsApp-Chaos." },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0", text: "Maschinen & Geräte immer mit Standort und kompletter Historie. Ein NFC-Scan – alles sichtbar." },
              { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", text: "Zeiten, Fotos, Unterschriften – direkt aus der App als PDF. Sauber belegt gegenüber Kunden." },
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", text: "Live-Rentabilität pro Auftrag. Kosten gegen Auftragssumme – in Echtzeit, nicht erst beim Steuerberater." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-md bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-snug">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-900 text-white text-lg font-black rounded-xl hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Kostenlos testen – 14 Tage gratis
            </Link>
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-8 py-4 text-gray-900 border-2 border-gray-200 text-lg font-bold rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Demo buchen
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-400">Kein Kreditkarte. Kein Risiko. Sofort loslegen.</p>
        </div>
      </section>
    </>
  );
}
