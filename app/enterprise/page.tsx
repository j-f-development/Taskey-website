"use client";

import React, { useState } from "react";
import Link from "next/link";
import DemoBookingModal from "@/components/DemoBookingModal";
import EnterpriseApplicationModal from "@/components/EnterpriseApplicationModal";
import Head from "next/head";

export default function EnterprisePage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [enterpriseModalOpen, setEnterpriseModalOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preload" href="/91A1A855-C7A4-4904-9E46-43FCEC6C5AC5.png" as="image" />
      </Head>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      <EnterpriseApplicationModal isOpen={enterpriseModalOpen} onClose={() => setEnterpriseModalOpen(false)} />
      
      {/* Fixed Background */}
      <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
                Maßgeschneiderte, exklusive Lösungen für führende Organisationen — verfügbar nur für ausgewählte Partner
              </p>
              <div className="text-2xl md:text-3xl font-semibold text-cyan-400">
                Aufnahme nur auf Anfrage & Prüfung
              </div>
              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                Wir bieten ein streng limitiertes Enterprise‑Programm an. Bewerbungen werden individuell geprüft und nur Unternehmen akzeptiert, die unsere hohen Anforderungen an Größe, Sicherheitsstandards und geschäftliche Relevanz erfüllen.
              </p>
              <p className="mt-2 text-sm text-gray-300 max-w-3xl mx-auto">
                Voraussetzungen können beispielsweise sein: Mindestgröße (100+ Angestellte), nachweisbare Marktführerschaft oder strategische Bedeutung sowie erweiterte Integrationsanforderungen.
              </p>
              <p className="mt-4 text-sm text-cyan-300 font-medium max-w-3xl mx-auto">
                Hinweis: Die Aufnahme erfolgt nach individueller Prüfung.
              </p>
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
                Wir empfehlen Enterprise für Unternehmen mit einzigartigen Anforderungen und strategischer Relevanz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <img src="/1502.png" alt="100+ Angestellte" className="w-24 h-24 opacity-100" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">100+ Angestellte</h3>
                <p className="text-gray-300 leading-relaxed">
                  Skalierung auf Konzernebene: Wenn Ihre Organisation groß genug ist, dass Standard‑Pakete an ihre Grenzen stoßen.
                </p>
              </div>

              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <img src="/plus2.png" alt="Strategische Bedeutung & Marktfuehrerschaft" className="w-24 h-24 opacity-100" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Strategische Bedeutung</h3>
                <p className="text-gray-300 leading-relaxed">
                  Marktführende oder strategisch wichtige Organisationen, deren Anforderungen besondere Priorität verdienen.
                </p>
              </div>

              <div className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <img src="/indi2.png" alt="Kritische Geschäftsprozesse und Compliance" className="w-24 h-24 opacity-100" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Kritische Prozesse & Compliance</h3>
                <p className="text-gray-300 leading-relaxed">
                  Höchste Anforderungen an Sicherheit, Integrationen oder SLA‑Verpflichtungen — wir bauen für Sie individuelle Lösungen.
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
                  icon: "/manager.png",
                  title: "Dedizierter Account Manager",
                  description: "Ein persönlicher Ansprechpartner, der Ihr Unternehmen kennt und proaktiv unterstützt"
                },
                {
                  icon: "/priorität.png",
                  title: "Priority Support",
                  description: "Garantierte Reaktionszeiten und vorrangige Bearbeitung Ihrer Anfragen"
                },
                {
                  icon: "/custom.png",
                  title: "Custom-Integrationen",
                  description: "Maßgeschneiderte Schnittstellen zu Ihren bestehenden Systemen und Prozessen"
                },
                {
                  icon: "/sicherheit.png",
                  title: "Erweiterte Sicherheit",
                  description: "Zusätzliche Sicherheitsmaßnahmen und dedizierte Infrastruktur"
                },
                {
                  icon: "/onboarding.png",
                  title: "Umfassendes Onboarding",
                  description: "Persönliche Schulungen, Workshops und Trainings für Ihre Teams"
                },
                {
                  icon: "/flexibel.png",
                  title: "Flexible Vertragsgestaltung",
                  description: "Individuelle Laufzeiten und Vertragsmodelle"
                },
              ].map((benefit, index) => (
                <div key={index} className="p-6 flex gap-4">
                  <div className="flex-shrink-0">
                    <img src={benefit.icon} alt={benefit.title} className="w-16 h-16 opacity-100" />
                  </div>
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
                    { feature: "Chefs-Rollen", enterprise: "Unbegrenzt" },
                    { feature: "Fachkraft-Rollen", enterprise: "Unbegrenzt" },
                    { feature: "Benutzerdefinierte Rollen", enterprise: "✓" },
                    { feature: "Support", enterprise: "Dediziert" },
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
                { icon: "/kran.png", title: "Große Bauunternehmen", desc: "Mit mehreren Standorten und hunderten Mitarbeitern" },
                { icon: "/facilty.png", title: "Facility Management", desc: "Komplexe Prozesse und viele Kundenstandorte" },
                { icon: "/truck.png", title: "Logistik-Konzerne", desc: "Große Flotten und internationale Teams" },
                { icon: "/fabric.png", title: "Industrie-Betriebe", desc: "Spezielle Anforderungen und Sicherheitsstandards" },
              ].map((useCase, index) => (
                <div key={index} className="p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <img src={useCase.icon} alt={useCase.title} className="w-20 h-20 opacity-100" />
                  </div>
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
                Ein Symbol für Premium‑Status und exklusive Vorteile – für Ihre Chefs im Enterprise‑Paket
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
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">Premium-Design</h3>
                  <p className="text-gray-300">Elegante Metallkarte mit exklusivem Titan-Finish und individueller Gravur</p>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">VIP-Zugang</h3>
                  <p className="text-gray-300">Schnellerer Support, exklusive Events und Premium-Features für Ihre Chefs</p>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-bold text-white mb-2">Status-Symbol</h3>
                  <p className="text-gray-300">Zeigen Sie Führungsstärke und gehören Sie zur Elite der Taskey-Nutzer</p>
                </div>

                <div className="mt-8 p-6 rounded-xl">
                  <p className="text-center text-white font-semibold text-lg">
                    Jeder ausgewählte Chef im Enterprise‑Paket erhält eine personalisierte Titan Karte — limitierte Auflage, durchnummeriert und nur für eingeladene Partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NFC Chip Feature Section */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Integrierter NFC-Chip für schnellen Zugriff</h3>
                <p className="text-gray-300 leading-relaxed">
                  Die Titan Karte ist mehr als nur ein Prestige-Objekt. Mit dem integrierten NFC-Chip können Ihre Chefs sich blitzschnell 
                  per Smartphone in der Taskey-App einloggen – ohne Passwort-Eingabe. Einfach Karte ans Handy halten und sofort Zugriff 
                  auf alle wichtigen Funktionen erhalten. Maximale Sicherheit trifft auf höchsten Komfort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed">
                  Mit Taskey Enterprise stehen wir mit unserem Namen für Ihren Erfolg
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Als Enterprise-Kunde sind Sie nicht nur ein Nutzer – Sie sind unser Partner. 
                  Wir verpflichten uns persönlich, Ihre Prozesse zu verstehen, Ihre Ziele zu unterstützen 
                  und gemeinsam mit Ihnen zu wachsen.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Ihre Herausforderungen werden zu unseren Herausforderungen. Mit einem dedizierten Team 
                  an Ihrer Seite garantieren wir, dass Taskey perfekt auf Ihre Bedürfnisse zugeschnitten ist.
                </p>
              </div>

              {/* Blurred Grey Card with Image */}
              <div className="relative backdrop-blur-xl bg-gray-500/20 rounded-3xl p-8 shadow-2xl border border-white/10">
                <div className="relative">
                  <img 
                    src="/353E4782-1D75-4428-945C-6C7B500A53D0.png" 
                    alt="Taskey Enterprise Team" 
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
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
                onClick={() => setEnterpriseModalOpen(true)}
                className="px-8 py-4 bg-cyan-400 text-gray-900 font-bold rounded-lg hover:bg-cyan-300 transition-all hover:scale-105 shadow-lg text-lg"
              >
                Für Enterprise bewerben
              </button>
              <a
                href="mailto:fynn@vars-development.com?subject=Enterprise-Anfrage%20Taskey"
                className="px-8 py-4 text-white border-2 border-white/50 font-bold rounded-lg hover:bg-white/10 hover:border-white transition-all hover:scale-105 text-lg backdrop-blur-sm"
              >
                E-Mail an Enterprise-Team
              </a>
            </div>
            <p className="text-sm text-gray-300 mb-8">Hinweis: Aufnahme ist selektiv und erfolgt nach Prüfung.</p>

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
