"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DemoBookingModal from "../DemoBookingModal";

export default function Contact() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  
  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      <section id="contact" className="py-8 sm:py-12 md:py-16 bg-blue-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block mb-6 sm:mb-8">
            <Image 
              src="/logoblue.png" 
              alt="Taskey Logo" 
              width={128}
              height={128}
              className="h-20 sm:h-24 md:h-32 w-auto mx-auto opacity-90"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
              quality={85}
            />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 px-4">
            Fragen zu Gebrauch oder Preispaketen?
          </h2>
          <p className="text-base sm:text-lg text-blue-100 px-4">
            Wir sind für Sie da – persönlich und kompetent
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Circular contact info */}
          <div className="space-y-4">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                ),
                label: "Telefon",
                value: "+49 151 68488999",
                href: "tel:+4915168488999",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                label: "E-Mail",
                value: "fynn@vars-development.com",
                href: "mailto:fynn@vars-development.com",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
                label: "Adresse",
                value: "In der Acht 44, 66333 Völklingen",
                href: null,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border-2 border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-blue-200 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-base font-semibold">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-base font-semibold">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Circle */}
          <div className="relative">
            <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-6 shadow-xl border-2 border-white/30">
              <h3 className="text-2xl font-bold mb-3 text-center">
                Überzeugt?
              </h3>
              <p className="text-blue-100 mb-6 text-center text-sm leading-relaxed">
                Starten Sie jetzt kostenlos und sparen Sie durchschnittlich{" "}
                <span className="font-bold text-white">25-30h pro Monat</span>.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="block w-full px-5 py-3 bg-white text-blue-900 text-center font-bold rounded-full hover:bg-blue-50 transition-colors shadow-lg text-sm"
                >
                  Demo buchen
                </button>
                <Link
                  href="https://signup.vars-development.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 bg-transparent border-2 border-white text-white text-center font-bold rounded-full hover:bg-white/10 transition-colors text-sm"
                >
                  14 Tage kostenlos testen
                </Link>
              </div>
              
              {/* Trust badges in circles */}
              <div className="flex justify-center gap-3 mt-6">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center" title="Made in Germany">
                  <span className="text-xl">🇩🇪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
