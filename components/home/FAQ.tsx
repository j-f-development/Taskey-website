"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Wie viel kostet Taskey?",
      answer:
        "Taskey bietet flexible Preismodelle für jede Betriebsgröße. Schauen Sie sich unsere Preisseite für detaillierte Informationen an.",
    },
    {
      question: "Ist Taskey DSGVO-konform?",
      answer:
        "Ja, Taskey ist vollständig DSGVO-konform. Ihre Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen.",
    },
    {
      question: "Brauche ich eine Schulung?",
      answer:
        "Nein, Taskey ist so intuitiv gestaltet, dass Sie sofort loslegen können. Wir bieten aber optional kostenlose Onboarding-Sessions an.",
    },
    {
      question: "Funktioniert Taskey offline?",
      answer:
        "Ja, die mobile App funktioniert auch offline. Alle Daten werden automatisch synchronisiert, sobald Sie wieder online sind.",
    },
    {
      question: "Kann ich bestehende Daten importieren?",
      answer:
        "Ja, wir unterstützen den Import aus gängigen Formaten und helfen Ihnen beim Umzug von anderen Systemen.",
    },
    {
      question: "Wie schnell kann ich starten?",
      answer:
        "Sie können sofort nach der Registrierung starten. Die Einrichtung dauert nur wenige Minuten.",
    },
    {
      question: "Gibt es eine Vertragsbindung?",
      answer:
        "Nein, Sie können monatlich kündigen. Es gibt keine Mindestlaufzeit.",
    },
    {
      question: "Welchen Support bietet Taskey?",
      answer:
        "Wir bieten deutschen E-Mail- und Telefon-Support während der Geschäftszeiten sowie eine umfangreiche Wissensdatenbank.",
    },
    {
      question: "Kann ich Taskey für mehrere Standorte nutzen?",
      answer:
        "Ja, Taskey unterstützt Multi-Standort-Verwaltung mit zentraler Übersicht.",
    },
    {
      question: "Welche Geräte werden unterstützt?",
      answer:
        "Taskey funktioniert auf allen modernen Geräten: iOS, Android, Windows, Mac und im Browser.",
    },
  ];

  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <img 
              src="/D69772A5-9DCA-4D89-8EA3-9009CB69634A_1_105_c.jpeg" 
              alt="Taskey Logo" 
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h2 data-scrollline-faq className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-xl text-gray-500">
            Alles, was Sie über Taskey wissen müssen
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
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
                <div className="px-6 pb-4 text-gray-500">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
