"use client";

import React from "react";
import Link from "next/link";

export default function PricingPage() {
  // Neuer Pricing‑Ansatz: Preise pro Mitarbeiter abhängig von gewählter Laufzeit
  const pricingOptions = [
    {
      id: 'monthly',
      title: 'Monatlich kündbar',
      subtitle: 'Flexibel, keine Bindung',
      pricePerMonth: 28.0,
      badge: ''
    },
    {
      id: 'quarterly',
      title: 'Quartalsweise',
      subtitle: 'Quartalsabrechnung mit Rabatt',
      pricePerMonth: 26.0,
      badge: ''
    },
    {
      id: 'yearly',
      title: 'Jährlich (beste Wahl)',
      subtitle: 'Jährliche Laufzeit mit höchster Ersparnis',
      pricePerMonth: 23.5,
      badge: 'EMPFOHLEN'
    }
  ];

  return (
    <main>
      {/* Rabatt-Banner */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 text-white py-3 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm md:text-base font-bold mb-1">
            🎉 Exklusives Angebot: 20% Rabatt auf alle Pakete! 🎉
          </p>
          <p className="text-xs md:text-sm">
            ⏰ Nur noch <strong>2 Monate</strong> gültig – Sichern Sie sich jetzt Ihre Ersparnis!
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Klare Preise pro Mitarbeiter
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Voller Funktionsumfang in allen Laufzeit‑Stufen – Sie zahlen nur für die gewünschte Vertragsbindung
            </p>
            <p className="text-lg text-blue-900 font-semibold mb-8">
              Alle Preise zzgl. MwSt. | Unbegrenzte Historie in allen Stufen
            </p>

            {/* Hinweis zur Auswahl der Laufzeit (kein Toggle mehr) */}
            <p className="text-sm text-gray-600">Wähle eine Laufzeit‑Stufe. Die Preise sind pro Mitarbeiter pro Monat ausgewiesen. Die Abrechnung erfolgt dennoch monatlich, nur die Vertragsbindung ändert sich je nach Wahl.</p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            {pricingOptions.map((opt) => (
              <div key={opt.id} className={`rounded-xl p-8 ${opt.badge ? "bg-blue-900 text-white shadow-2xl scale-105" : "bg-white shadow-md"}`}>
                {opt.badge && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-900 text-white text-sm font-bold px-4 py-1 rounded-full">{opt.badge}</span>
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${opt.badge ? "text-white" : "text-gray-900"}`}>{opt.title}</h3>
                <p className={`mb-4 ${opt.badge ? "text-blue-100" : "text-gray-600"}`}>{opt.subtitle}</p>

                <div className="mb-6 flex flex-col items-center">
                  {/* Rabatt-Badge */}
                  <div className="mb-2">
                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">20% RABATT</span>
                  </div>
                  
                  {/* Durchgestrichener Original-Preis */}
                  <div className="flex items-end gap-2 opacity-60">
                    <span className="text-2xl font-semibold line-through">{Number(opt.pricePerMonth).toLocaleString('de-DE', {minimumFractionDigits: (opt.pricePerMonth % 1 === 0 ? 0 : 2) })}</span>
                    <span className="text-sm">€</span>
                  </div>
                  
                  {/* Neuer rabattierter Preis */}
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold">{Number(opt.pricePerMonth * 0.8).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                    <span className="text-xl">€</span>
                  </div>
                  <span className={`text-lg font-semibold mt-2 ${opt.badge ? "text-blue-100" : "text-gray-700"}`}>pro Mitarbeiter pro Monat</span>
                  <span className="text-sm text-gray-500 mt-1">Abrechnung: monatlich</span>
                  {opt.badge && <div className="mt-3 inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">BESTER WERT</div>}
                </div>

                <div className="mb-6">
                  <h4 className={`font-bold mb-3 text-sm uppercase ${opt.badge ? "text-blue-100" : "text-gray-700"}`}>Inklusive</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Voller Funktionsumfang aller Module</li>
                    <li>• Unbegrenzte Benutzerkonten</li>
                    <li>• Unbegrenzte Projekte & Aufträge</li>
                    <li>• Standard - Support</li>
                  </ul>
                </div>

                <Link href="#contact" className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${opt.badge ? "bg-white text-blue-900 hover:bg-gray-100" : "bg-blue-900 text-white hover:bg-blue-800"}`}>Jetzt buchen</Link>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">Anmerkung: Die faktische Abrechnung erfolgt monatlich. Die gewählte Laufzeit ändert die Vertragsbindung und den Preis pro Mitarbeiter, nicht die Art der Rechnungslegung.</p>
          </div>

          {/* Enterprise CTA Button */}
          <div className="text-center mb-20">
            <p className="text-lg text-gray-700 mb-4 font-semibold">Sind Sie ein Großkonzern und möchten Taskeys vollen Umfang kennenlernen?</p>
            <a
              href="#enterprise"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-cyan-300 transition shadow-lg"
            >
              <span>Jetzt Enterprise kennenlernen</span>
            </a>
          </div>

          {/* Hinweis: keine zusätzlichen Rollenpreise mehr */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Einheitliche Pauschale</h3>
            <p className="text-center text-gray-700">Alle angebotenen Funktionen sind in den Preisen enthalten. Es gibt keine nutzer‑ oder featurebasierten Aufpreise mehr. Preise richten sich ausschließlich nach der gewählten Laufzeit.</p>
          </div>

          {/* Beispielrechnung – angepasst an das neuen Laufzeitmodell */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Beispielrechnung</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 mb-4">
                <h4 className="font-bold mb-4 text-white">Beispiel: Jahresbuchung (jährliche Laufzeit)</h4>
                <ul className="space-y-2 mb-4 text-sm">
                  <li>• Vertrag mit jährlicher Laufzeit</li>
                  <li>• Beispiel: 12 Mitarbeiter</li>
                  <li>• Preis: 23,50€ pro Mitarbeiter pro Monat (jährliche Laufzeit)</li>
                </ul>
                <div className="border-t border-white/20 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>12 Mitarbeiter × 23,50€</span>
                    <span className="font-bold">282€ / Monat</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monatsbetrag × 12</span>
                    <span className="font-bold">3.384€ / Jahr</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white border-t border-white/20 pt-2 mt-2">
                    <span>Gesamt (jährlich)</span>
                    <span>3.384€</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-blue-200">Alle Preise zzgl. MwSt. | Abrechnung erfolgt monatlich, Laufzeit bestimmt Preisstaffel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Voller Funktionsumfang in allen Paketen
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Taskey limitiert keine Funktionen – Sie zahlen nur für Skalierung, Volumen und Verantwortung
            </p>
          </div>

          {/* All Features Included */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              ✓ In ALLEN Paketen enthalten
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "GPS- & Live-Tracking",
                "Start/Stop, QR & NFC",
                "Zeit-, Pausen- & Fahrterfassung",
                "Live-Map & Mitarbeiter-Roadmap",
                "Aufträge, Projekte, Fotos & Dokumente",
                "Abschlussberichte (PDF + Signatur)",
                "Abwesenheiten & Planung",
                "Dashboards & Auswertungen",
                "Buchhaltungs-Export (z.B. LexOffice)",
                "Rollen- & Rechteverwaltung",
                "Unbegrenzte Historie",
                "Mobile App (iOS & Android)",
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Laufzeit‑Vergleichstabelle (Ersatz für limitComparison) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4">
              <h3 className="text-xl font-bold text-center">Vergleich nach Laufzeit</h3>
            </div>
            <div className="overflow-x-auto p-6">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-700">
                    <th className="px-4 py-2">Laufzeit</th>
                    <th className="px-4 py-2">Preis / Mitarbeiter / Monat</th>
                    <th className="px-4 py-2">Abrechnung</th>
                    <th className="px-4 py-2">Jahreskosten (Beispiel)</th>
                    <th className="px-4 py-2">Ersparnis vs. monatlich</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingOptions.map((opt) => {
                    const yearlyTotal = opt.pricePerMonth * 12;
                    const baseline = pricingOptions.find(p => p.id === 'monthly')?.pricePerMonth ?? pricingOptions[0].pricePerMonth;
                    const savings = Math.round(((baseline - opt.pricePerMonth) / baseline) * 100);
                    return (
                      <tr key={opt.id} className="border-t border-gray-100">
                        <td className="px-4 py-3 font-semibold text-gray-900">{opt.title}</td>
                        <td className="px-4 py-3 text-gray-700">{opt.pricePerMonth}€</td>
                        <td className="px-4 py-3 text-gray-700">monatlich</td>
                        <td className="px-4 py-3 text-gray-700">{yearlyTotal.toLocaleString('de-DE')}€</td>
                        <td className="px-4 py-3 text-gray-700">{opt.id === 'monthly' ? '–' : `${savings}%`}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enterprise Package */}
          <div id="enterprise" className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 text-white text-center scroll-mt-24">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
              Taskey <span className="text-cyan-400">Enterprise</span>
            </h3>
            <p className="text-3xl md:text-4xl text-cyan-400 font-semibold mb-8">Preis auf Anfrage</p>
            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-xl text-gray-300 mb-6">
                Ein Enterprise-Paket wird angeboten bei:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex justify-center mb-3">
                    <img src="/1502.png" alt="150+ Angestellte" className="w-16 h-16 opacity-100" />
                  </div>
                  <p className="font-semibold text-lg">150+ Angestellte</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex justify-center mb-3">
                    <img src="/plus2.png" alt="Signifikanter Anstieg des Nutzerbedarfs" className="w-16 h-16 opacity-100" />
                  </div>
                  <p className="font-semibold text-lg">Signifikanter Anstieg des Nutzerbedarfs</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex justify-center mb-3">
                    <img src="/indi2.png" alt="Individuelle Anforderungen" className="w-16 h-16 opacity-100" />
                  </div>
                  <p className="font-semibold text-lg">Individuellen Anforderungen (SLA, Custom-Features, Sonderprozesse)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/enterprise"
                className="inline-flex items-center gap-2 bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-cyan-300 transition shadow-lg"
              >
                <span>Mehr zum Enterprise-Paket</span>
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition shadow-lg"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fragen zu Gebrauch oder Preispaketen?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Unser Team hilft Ihnen gerne weiter
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+498001234567"
              className="px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
            >
              +49 (0) 800 123 4567
            </a>
            <a
              href="mailto:kontakt@taskey.de"
              className="px-8 py-4 text-blue-900 border-2 border-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition"
            >
              kontakt@taskey.de
            </a>
          </div>
          <p className="mt-8 text-gray-600">
            In der Acht 44, 66333 Völklingen, Deutschland
          </p>
        </div>
      </section>
    </main>
  );
}
