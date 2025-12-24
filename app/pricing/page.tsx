"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

  const packages = [
    {
      name: "Taskey Easy",
      description: "Für kleine Betriebe & Einstieg",
      employees: "1–19 MA",
      prices: {
        monthly: "18€",
        yearly: "16€",
      },
      limits: [
        "Max. 15 aktive Aufträge",
        "Max. 5 Projekte",
        "5 Standorte",
        "Basis-Analytics",
        "Standard-Support",
      ],
      includedRoles: [
        "1 Leader inklusive",
        "2 Fachkräfte inklusive",
      ],
    },
    {
      name: "Taskey Professional",
      description: "Für wachsende & professionelle Teams",
      employees: "1–49 MA",
      prices: {
        monthly: "24€",
        yearly: "20€",
      },
      popular: true,
      limits: [
        "Max. 100 aktive Aufträge",
        "Max. 50 Projekte",
        "Unbegrenzte Standorte",
        "Erweiterte Analytics & Reports",
        "Priorisierter Support",
      ],
      includedRoles: [
        "3 Leader inklusive",
        "5 Fachkräfte inklusive",
      ],
    },
    {
      name: "Taskey Expert",
      description: "Für große Organisationen",
      employees: "1–149 MA",
      prices: {
        monthly: "59€",
        yearly: "50€",
      },
      limits: [
        "Unbegrenzte Aufträge & Projekte",
        "Unbegrenzte Standorte",
        "Vollständige Analytics & KPIs",
        "API & Custom-Prozesse",
        "Persönlicher Support & SLA",
        "Onboarding & Schulung",
      ],
      includedRoles: [
        "Bis zu 10 Leader inklusive",
        "Bis zu 20 Fachkräfte inklusive",
      ],
    },
  ];

  const limitComparison = [
    {
      category: "Kapazität & Volumen",
      items: [
        { name: "Mitarbeiteranzahl", easy: "1–19 MA", pro: "1–49 MA", expert: "1–149 MA" },
        { name: "Aktive Aufträge", easy: "Max. 15", pro: "Max. 100", expert: "Unbegrenzt" },
        { name: "Projekte", easy: "Max. 5", pro: "Max. 50", expert: "Unbegrenzt" },
        { name: "Standorte", easy: "5 Standorte", pro: "Unbegrenzt", expert: "Unbegrenzt" },
      ],
    },
    {
      category: "Inklusive Rollen",
      items: [
        { name: "Leader inklusive", easy: "1", pro: "3", expert: "Bis zu 10" },
        { name: "Fachkräfte inklusive", easy: "2", pro: "5", expert: "Bis zu 20" },
      ],
    },
    {
      category: "Analytics & Support",
      items: [
        { name: "Analytics", easy: "Basis", pro: "Erweitert", expert: "Vollständig + KPIs" },
        { name: "Support", easy: "Standard", pro: "Priorisiert", expert: "Persönlich + SLA" },
        { name: "Onboarding", easy: "Self-Service", pro: "Self-Service", expert: "Persönlich + Schulung" },
      ],
    },
    {
      category: "Erweiterte Features",
      items: [
        { name: "API-Zugang", easy: "—", pro: "—", expert: "✓" },
        { name: "Custom-Prozesse", easy: "—", pro: "—", expert: "✓" },
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Klare Preise pro Mitarbeiter
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Voller Funktionsumfang in allen Paketen – Sie zahlen nur für Skalierung
            </p>
            <p className="text-lg text-blue-900 font-semibold mb-8">
              Alle Preise zzgl. MwSt. | Unbegrenzte Historie in allen Paketen
            </p>

            {/* Billing Cycle Toggle */}
            <div className="flex justify-center items-center gap-4">
              <div className="inline-flex bg-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setBillingCycle("monthly")}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${
                    billingCycle === "monthly"
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Monatlich kündbar
                </button>
                <button
                  onClick={() => setBillingCycle("yearly")}
                  className={`px-6 py-2 rounded-lg font-semibold transition ${
                    billingCycle === "yearly"
                      ? "bg-blue-900 text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  Jährlich
                </button>
              </div>
              <span className={`inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full shadow-lg transition-all ${
                billingCycle === "yearly" 
                  ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white" 
                  : "bg-gray-400 text-gray-700"
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Bis zu 20% sparen
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl p-8 ${
                  pkg.popular
                    ? "bg-blue-900 text-white shadow-2xl scale-105"
                    : "bg-white shadow-md"
                }`}
              >
                {pkg.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-900 text-white text-sm font-bold px-4 py-1 rounded-full">
                      BELIEBT
                    </span>
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    pkg.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mb-4 ${
                    pkg.popular ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {pkg.description}
                </p>
                <p
                  className={`mb-6 text-sm font-semibold ${
                    pkg.popular ? "text-blue-100" : "text-blue-900"
                  }`}
                >
                  {pkg.employees}
                </p>
                <div className="mb-6">
                  {billingCycle === "yearly" && (
                    <div className="mb-2">
                      <span className="text-2xl line-through text-gray-400">
                        {pkg.prices.monthly.replace("€", "")}€
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex items-end gap-2">
                      <span className="text-5xl font-bold">
                        {pkg.prices[billingCycle].replace("€", "")}
                      </span>
                      <span className="text-xl">€</span>
                    </div>
                    <span
                      className={`text-lg font-semibold mt-2 ${
                        pkg.popular ? "text-blue-100" : "text-gray-700"
                      }`}
                    >
                      pro Mitarbeiter pro Monat
                    </span>
                  </div>
                  {billingCycle === "yearly" && (
                    <div className="mt-3 inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.name === "Taskey Easy" && "11% SPAREN"}
                      {pkg.name === "Taskey Professional" && "17% SPAREN"}
                      {pkg.name === "Taskey Expert" && "15% SPAREN"}
                    </div>
                  )}
                </div>
                
                {/* Limits */}
                <div className="mb-6">
                  <h4 className={`font-bold mb-3 text-sm uppercase ${
                    pkg.popular ? "text-blue-100" : "text-gray-700"
                  }`}>
                    Limits & Volumen
                  </h4>
                  <ul className="space-y-2">
                    {pkg.limits.map((limit, lIndex) => (
                      <li key={lIndex} className="flex items-start text-sm">
                        <svg
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            pkg.popular ? "text-white" : "text-blue-900"
                          }`}
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
                        <span>{limit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Included Roles */}
                <div className="mb-8">
                  <h4 className={`font-bold mb-3 text-sm uppercase ${
                    pkg.popular ? "text-blue-100" : "text-gray-700"
                  }`}>
                    Inklusive Rollen
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includedRoles.map((role, rIndex) => (
                      <li key={rIndex} className="flex items-start text-sm">
                        <svg
                          className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            pkg.popular ? "text-white" : "text-blue-900"
                          }`}
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
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition ${
                    pkg.popular
                      ? "bg-white text-blue-900 hover:bg-gray-100"
                      : "bg-blue-900 text-white hover:bg-blue-800"
                  }`}
                >
                  Jetzt starten
                </Link>
              </div>
            ))}
          </div>

          {/* Enterprise CTA Button */}
          <div className="text-center mb-20">
            <p className="text-lg text-gray-700 mb-4 font-semibold">
              Das reicht Ihnen nicht?
            </p>
            <a
              href="#enterprise"
              className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-cyan-300 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Enterprise-Lösung entdecken</span>
            </a>
          </div>

          {/* Role Pricing Info */}
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Zusätzliche Rollen (optional)
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Link href="/rollen#mitarbeiter" className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <div className="flex justify-center mb-2">
                  <img src="/Unbenanntes_Projekt 26.png" alt="Mitarbeiter" className="w-16 h-16 opacity-100" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Mitarbeiter</h4>
                <p className="text-3xl font-bold text-blue-900 mb-1">Basis</p>
                <p className="text-sm text-gray-600 mb-3">Standard-Rolle im Paket enthalten</p>
                <p className="text-xs text-blue-900 font-semibold">Mehr erfahren →</p>
              </Link>
              <Link href="/rollen#fachkraft" className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <div className="flex justify-center mb-2">
                  <img src="/fachkraft2.png" alt="Fachkraft" className="w-24 h-24 opacity-100" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Fachkraft</h4>
                <p className="text-3xl font-bold text-blue-900 mb-1">+5€</p>
                <p className="text-sm text-gray-600 mb-3">Pro zusätzlicher Fachkraft / Monat</p>
                <p className="text-xs text-blue-900 font-semibold">Mehr erfahren →</p>
              </Link>
              <Link href="/rollen#leader" className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
                <div className="flex justify-center mb-2">
                  <img src="/leader2.png" alt="Leader" className="w-24 h-24 opacity-100" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Leader</h4>
                <p className="text-3xl font-bold text-blue-900 mb-1">+9€</p>
                <p className="text-sm text-gray-600 mb-3">Pro zusätzlichem Leader / Monat</p>
                <p className="text-xs text-blue-900 font-semibold">Mehr erfahren →</p>
              </Link>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">
              Rollen-Aufpreise gelten nur für zusätzliche Personen über das inkludierte Kontingent hinaus
            </p>
          </div>

          {/* Example Calculation */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Beispielrechnung</h3>
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6 mb-4">
                <h4 className="font-bold mb-4 text-white">Taskey Professional (jährlich)</h4>
                <ul className="space-y-2 mb-4">
                  <li>• 12 Mitarbeiter</li>
                  <li>• 4 Leader (1 mehr als inklusive)</li>
                  <li>• 5 Fachkräfte (inklusive)</li>
                </ul>
                <div className="border-t border-white/20 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>12 Mitarbeiter × 20€</span>
                    <span className="font-bold">240€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>1 zusätzlicher Leader × 9€</span>
                    <span className="font-bold">+9€</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white border-t border-white/20 pt-2 mt-2">
                    <span>Gesamt pro Monat</span>
                    <span>249€</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-blue-200">
                Alle Preise zzgl. MwSt. | Laufzeit optional
              </p>
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

          {/* Limits & Differences Comparison */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 py-4">
              <h3 className="text-xl font-bold text-center">
                Unterschiede: Limits, Rollen & Support
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold text-gray-900">
                      Kategorie / Feature
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">
                      Easy
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900 bg-blue-50">
                      Professional
                    </th>
                    <th className="px-6 py-4 text-center font-bold text-gray-900">
                      Expert
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {limitComparison.map((category, catIndex) => (
                    <React.Fragment key={`cat-${catIndex}`}>
                      <tr className="bg-gray-50">
                        <td
                          colSpan={4}
                          className="px-6 py-3 font-bold text-gray-900 text-sm uppercase"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.items.map((item, iIndex) => (
                        <tr
                          key={`item-${catIndex}-${iIndex}`}
                          className="border-t border-gray-200"
                        >
                          <td className="px-6 py-4 text-gray-700">
                            {item.name}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-700 font-medium">
                            {item.easy}
                          </td>
                          <td className="px-6 py-4 text-center bg-blue-50 text-gray-700 font-medium">
                            {item.pro}
                          </td>
                          <td className="px-6 py-4 text-center text-gray-700 font-medium">
                            {item.expert}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
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
                    <img src="/1502.png" alt="Mehr als 149 Mitarbeitern" className="w-16 h-16 opacity-100" />
                  </div>
                  <p className="font-semibold text-lg">Mehr als 149 Mitarbeitern</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex justify-center mb-3">
                    <img src="/plus2.png" alt="Überschreitung Rollen-Kontingente" className="w-16 h-16 opacity-100" />
                  </div>
                  <p className="font-semibold text-lg">Deutlicher Überschreitung der Rollen-Kontingente</p>
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
                className="inline-flex items-center gap-2 bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-cyan-300 transition-all hover:scale-105 shadow-lg group"
              >
                <span>Mehr zum Enterprise-Paket</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
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
