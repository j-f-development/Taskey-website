"use client";

import React, { useState } from "react";
import Link from "next/link";
import DemoBookingModal from "@/components/DemoBookingModal";

export default function EnterprisePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      {/* Fixed Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/91A1A855-C7A4-4904-9E46-43FCEC6C5AC5.png)',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/75 via-gray-800/75 to-gray-900/75" />
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
                Taskey <span className="text-cyan-400">Enterprise</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
                Maßgeschneiderte Lösungen für große Organisationen mit individuellen Anforderungen
              </p>
              <div className="text-2xl md:text-3xl font-semibold text-cyan-400">
                Preis auf Anfrage
              </div>
            </div>
          </div>
        </section>

        {/* When Enterprise Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Wann ist Enterprise das Richtige für Sie?
              </h2>
              <p className="text-xl text-gray-300">
                Ein Enterprise-Paket wird angeboten bei:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-white mb-4">150+ Mitarbeiter</h3>
                <p className="text-gray-300 leading-relaxed">
                  Ihr Unternehmen hat mehr als 149 Mitarbeiter und benötigt eine skalierbare Lösung für große Teams
                </p>
              </div>

              <div className="p-8 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold text-white mb-4">Erweiterte Rollen</h3>
                <p className="text-gray-300 leading-relaxed">
                  Sie benötigen deutlich mehr Leader oder Fachkräfte als in den Standard-Paketen enthalten sind
                </p>
              </div>

              <div className="p-8 text-center hover:scale-105 transition-transform">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-white mb-4">Individuelle Anforderungen</h3>
                <p className="text-gray-300 leading-relaxed">
                  SLA-Vereinbarungen, Custom-Features, spezielle Prozesse oder Integrationen sind erforderlich
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Exklusive Enterprise-Vorteile
              </h2>
              <p className="text-xl text-gray-300">
                Mehr als nur Software – eine echte Partnerschaft
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎯",
                  title: "Dedizierter Account Manager",
                  description: "Ein persönlicher Ansprechpartner, der Ihr Unternehmen kennt und proaktiv unterstützt"
                },
                {
                  icon: "⚡",
                  title: "Priority Support & SLA",
                  description: "Garantierte Reaktionszeiten und vorrangige Bearbeitung Ihrer Anfragen"
                },
                {
                  icon: "🔌",
                  title: "Custom-Integrationen",
                  description: "Maßgeschneiderte Schnittstellen zu Ihren bestehenden Systemen und Prozessen"
                },
                {
                  icon: "🎨",
                  title: "White-Label-Optionen",
                  description: "Anpassung an Ihr Corporate Design und Branding"
                },
                {
                  icon: "🔒",
                  title: "Erweiterte Sicherheit",
                  description: "Zusätzliche Sicherheitsmaßnahmen, On-Premise-Optionen und dedizierte Infrastruktur"
                },
                {
                  icon: "📊",
                  title: "Custom-Reporting",
                  description: "Individuell konfigurierbare Reports und Dashboards nach Ihren Anforderungen"
                },
                {
                  icon: "🎓",
                  title: "Umfassendes Onboarding",
                  description: "Persönliche Schulungen, Workshops und Trainings für Ihre Teams"
                },
                {
                  icon: "🔄",
                  title: "Flexible Vertragsgestaltung",
                  description: "Individuelle Laufzeiten, Zahlungsmodelle und Rahmenverträge"
                },
              ].map((benefit, index) => (
                <div key={index} className="p-6 flex gap-4 hover:scale-105 transition-all">
                  <div className="text-4xl flex-shrink-0">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Features
              </h2>
              <p className="text-xl text-gray-300">
                Was Enterprise zu bieten hat
              </p>
            </div>

            <div className="overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-cyan-400/50">
                    <th className="px-6 py-4 text-left font-bold text-white">Feature</th>
                    <th className="px-6 py-4 text-center font-bold text-cyan-400">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Mitarbeiteranzahl", enterprise: "Unbegrenzt" },
                    { feature: "Leader-Rollen", enterprise: "Unbegrenzt" },
                    { feature: "Fachkraft-Rollen", enterprise: "Unbegrenzt" },
                    { feature: "Support", enterprise: "Dediziert + SLA" },
                    { feature: "Onboarding", enterprise: "Persönlich + Workshops" },
                    { feature: "Custom-Features", enterprise: "✓" },
                    { feature: "Custom-Integrationen", enterprise: "✓" },
                    { feature: "Account Manager", enterprise: "✓" },
                    { feature: "Flexible Verträge", enterprise: "Individuell" },
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="px-6 py-4 font-semibold text-white">{row.feature}</td>
                      <td className="px-6 py-4 text-center font-bold text-white">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfekt für
              </h2>
              <p className="text-xl text-gray-300">
                Diese Unternehmen profitieren von Enterprise
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏗️", title: "Große Bauunternehmen", desc: "Mit mehreren Standorten und hunderten Mitarbeitern" },
                { icon: "🏢", title: "Facility Management", desc: "Komplexe Prozesse und viele Kundenstandorte" },
                { icon: "🚚", title: "Logistik-Konzerne", desc: "Große Flotten und internationale Teams" },
                { icon: "🏭", title: "Industrie-Betriebe", desc: "Spezielle Anforderungen und Sicherheitsstandards" },
              ].map((useCase, index) => (
                <div key={index} className="p-6 text-center hover:scale-105 transition-transform">
                  <div className="text-5xl mb-3">{useCase.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
                  <p className="text-sm text-gray-300">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Titan Card Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
                Die Taskey <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">Titan Karte</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Ein Symbol für Premium-Status und exklusive Vorteile – für Ihre Leader im Enterprise-Paket
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Card Image */}
              <div className="relative group perspective-1000">
                <img 
                  src="/taskeycard.png" 
                  alt="Taskey Titan Karte" 
                  className="w-full h-auto transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
                  style={{ transformStyle: 'preserve-3d' }}
                />
              </div>

              {/* Features */}
              <div className="space-y-6">
                <div className="p-4 hover:translate-x-2 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">Premium-Design</h3>
                  <p className="text-gray-300">Elegante Metallkarte mit exklusivem Titan-Finish und individueller Gravur</p>
                </div>

                <div className="p-4 hover:translate-x-2 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">VIP-Zugang</h3>
                  <p className="text-gray-300">Schnellerer Support, exklusive Events und Premium-Features für Ihre Leader</p>
                </div>

                <div className="p-4 hover:translate-x-2 transition-all">
                  <h3 className="text-xl font-bold text-white mb-2">Status-Symbol</h3>
                  <p className="text-gray-300">Zeigen Sie Führungsstärke und gehören Sie zur Elite der Taskey-Nutzer</p>
                </div>

                <div className="mt-8 p-6 rounded-xl">
                  <p className="text-center text-white font-semibold text-lg">
                    Jeder Leader im Enterprise-Paket erhält automatisch eine personalisierte Titan Karte
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Bereit für Enterprise?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Lassen Sie uns gemeinsam die perfekte Lösung für Ihr Unternehmen entwickeln
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-8 py-4 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-cyan-300 transition-all hover:scale-105 shadow-lg text-lg"
              >
                Enterprise-Demo anfragen
              </button>
              <a
                href="mailto:enterprise@taskey.de"
                className="px-8 py-4 text-white border-2 border-white/50 font-bold rounded-lg hover:bg-white/10 hover:border-white transition-all hover:scale-105 text-lg backdrop-blur-sm"
              >
                E-Mail an Enterprise-Team
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-300 mt-12">
              <div className="flex flex-col items-center gap-2">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Kostenlose Beratung</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Individuelle Preisgestaltung</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Persönlicher Ansprechpartner</span>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/20">
              <Link
                href="/pricing"
                className="text-gray-400 hover:text-white transition inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Zurück zu den Standard-Paketen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
