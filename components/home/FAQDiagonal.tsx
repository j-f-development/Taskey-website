"use client";

import { useState } from "react";

export default function FAQDiagonal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie viel kostet Taskey?",
      answer:
        "Taskey bietet flexible Preismodelle ab 23,50€ pro Mitarbeiter pro Monat bei jährlicher Laufzeit. Alle Funktionen sind in jedem Paket enthalten – Sie zahlen nur für die gewünschte Vertragsbindung.",
    },
    {
      question: "Wie lange dauert die Einrichtung?",
      answer:
        "Die Grundeinrichtung dauert nur 15 Minuten. Sie können sofort loslegen und Ihr Team binnen einer Stunde produktiv arbeiten lassen.",
    },
    {
      question: "Ist Taskey DSGVO-konform?",
      answer:
        "Ja, absolut. Taskey ist Made in Germany, die Daten werden auf deutschen Servern gespeichert und wir erfüllen alle DSGVO-Anforderungen.",
    },
    {
      question: "Kann ich Taskey testen?",
      answer:
        "Ja! Sie können Taskey 14 Tage komplett kostenlos und unverbindlich testen. Keine Kreditkarte erforderlich.",
    },
    {
      question: "Für welche Branchen ist Taskey geeignet?",
      answer:
        "Taskey funktioniert für über 600 Branchen – von Handwerk über Facility Management bis zu technischen Services. Überall dort, wo mobile Arbeit organisiert werden muss.",
    },
    {
      question: "Gibt es eine App für Mitarbeiter?",
      answer:
        "Ja, Taskey bietet native Apps für iOS und Android. Ihre Mitarbeiter können Zeiten erfassen, Aufträge einsehen und Berichte erstellen – alles mobil.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Diagonal decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-blue-900/5 to-transparent" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 30%)'}}></div>
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-tl from-blue-900/5 to-transparent" style={{clipPath: 'polygon(0 100%, 100% 70%, 100% 100%)'}}></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-blue-900 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
              FAQ
            </span>
          </div>
          <div className="mb-6">
            <svg
              className="w-20 h-20 text-blue-900 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Alles, was Sie über Taskey wissen müssen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border-2 border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                transform: index % 2 === 0 ? 'perspective(1000px) rotateY(-1deg)' : 'perspective(1000px) rotateY(1deg)'
              }}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors rounded-2xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-blue-900 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-900/20 to-transparent mb-4"></div>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl p-8 text-white">
            <p className="text-2xl font-bold mb-4">Noch Fragen?</p>
            <p className="text-blue-100 mb-6">Unser Team hilft Ihnen gerne weiter</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+498001234567"
                className="px-6 py-3 bg-white text-blue-900 font-bold rounded-full hover:bg-blue-50 transition-colors"
              >
                +49 (0) 800 123 4567
              </a>
              <a
                href="mailto:kontakt@taskey.de"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors"
              >
                kontakt@taskey.de
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
