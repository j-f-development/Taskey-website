"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DemoBookingModal from "@/components/DemoBookingModal";
import ManagerRequestModal from "@/components/ManagerRequestModal";

export default function PricingPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [managerModalOpen, setManagerModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-24 md:py-32">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold mb-8">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            14 Tage kostenlos testen
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Das richtige Paket<br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">für Ihren Betrieb</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Transparent, fair, ohne versteckte Kosten — zahlen Sie nur pro Mitarbeiter.
          </p>
          <p className="text-sm text-gray-500">Alle Preise zzgl. MwSt.</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative -mt-16 z-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 3 Main Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            {/* START */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-400"></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">START</h3>
                    <p className="text-sm text-gray-600">Perfekt zum Loslegen</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-gray-900">14,73</span>
                    <span className="text-2xl font-bold text-gray-400 mb-1">€</span>
                  </div>
                  <p className="text-sm text-gray-600">pro Mitarbeiter / Monat</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    { text: 'Alle Kernfunktionen', highlight: false, tooltip: 'Zeiterfassung, GPS-Tracking, Aufträge, Projekte, Berichte & mehr' },
                    { text: '50 GB Gesamtspeicher', highlight: false, tooltip: 'Für Fotos, Dokumente, Unterschriften & Berichte' },
                    { text: '12 Monate Historie', highlight: false, tooltip: 'Zugriff auf alle Daten der letzten 12 Monate' },
                    { text: 'Standard‑Support', highlight: false, tooltip: 'E-Mail Support innerhalb von 24h' },
                    { text: 'Buchhaltungs‑Export', highlight: false, tooltip: 'Direkt zu LexOffice, DATEV & Co.' }
                  ].map((item, i) => (
                    <li key={i} className="group/item relative">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{item.text}</span>
                        <svg className="w-4 h-4 text-gray-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="hidden group-hover/item:block absolute left-0 top-full mt-2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 z-50 w-64 shadow-xl">
                        {item.tooltip}
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full py-4 rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-all text-sm border border-blue-100"
                >
                  Jetzt starten
                </button>
              </div>
            </div>

            {/* GROW — Empfohlen */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl overflow-hidden shadow-2xl transform scale-105 z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400 opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-10 rounded-full blur-3xl"></div>
              
              {/* Badge */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 text-xs font-black px-6 py-2 rounded-full shadow-xl flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Beliebteste Wahl
                </div>
              </div>

              <div className="relative z-10 p-8 pt-16">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-white mb-1">GROW</h3>
                    <p className="text-sm text-blue-100">Für Betriebe, die wachsen</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-white/20">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-white">23,67</span>
                    <span className="text-2xl font-bold text-blue-200 mb-1">€</span>
                  </div>
                  <p className="text-sm text-blue-100">pro Mitarbeiter / Monat</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    { text: 'Alle Funktionen', highlight: true, tooltip: 'Kompletter Zugriff ohne Einschränkungen' },
                    { text: '250 GB Gesamtspeicher', highlight: true, tooltip: 'Mehr Platz für Dokumentation & Medien' },
                    { text: '24 Monate Historie', highlight: false, tooltip: '2 Jahre Datenzugriff für Nachweise & Analysen' },
                    { text: 'Erweiterte Auswertungen', highlight: false, tooltip: 'Custom Reports, Trends & KPI-Dashboards' }
                  ].map((item, i) => (
                    <li key={i} className="group/item relative">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className={`text-sm font-medium ${item.highlight ? 'text-white font-bold' : 'text-blue-50'}`}>
                          {item.text}
                        </span>
                        <svg className="w-4 h-4 text-blue-200 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="hidden group-hover/item:block absolute left-0 top-full mt-2 bg-white text-gray-900 text-xs rounded-lg px-3 py-2 z-50 w-64 shadow-xl border border-gray-200">
                        {item.tooltip}
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full py-4 rounded-xl font-bold text-blue-900 bg-white hover:bg-gray-50 transition-all text-sm shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Jetzt GROW buchen
                </button>
              </div>
            </div>

            {/* SCALE */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-400"></div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-1">SCALE</h3>
                    <p className="text-sm text-gray-600">Maximale Power</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-black text-gray-900">34,42</span>
                    <span className="text-2xl font-bold text-gray-400 mb-1">€</span>
                  </div>
                  <p className="text-sm text-gray-600">pro Mitarbeiter / Monat</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    { text: 'Voller Funktionsumfang', highlight: false, tooltip: 'Alle Features ohne Limits' },
                    { text: '1 TB Speicher', highlight: true, tooltip: 'Maximale Kapazität für große Teams' },
                    { text: 'Unbegrenzte Historie', highlight: true, tooltip: 'Permanenter Zugriff auf alle jemals erfassten Daten' },
                    { text: 'Priorisierter Support', highlight: false, tooltip: 'Schnellere Reaktionszeiten & direkter Kontakt' }
                  ].map((item, i) => (
                    <li key={i} className="group/item relative">
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className={`text-sm font-medium ${item.highlight ? 'text-gray-900 font-bold' : 'text-gray-700'}`}>
                          {item.text}
                        </span>
                        <svg className="w-4 h-4 text-gray-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="hidden group-hover/item:block absolute left-0 top-full mt-2 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 z-50 w-64 shadow-xl">
                        {item.tooltip}
                      </div>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="w-full py-4 rounded-xl font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 transition-all text-sm border border-purple-100"
                >
                  SCALE wählen
                </button>
              </div>
            </div>
          </div>

          {/* ENTERPRISE Banner */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-3xl overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-30">
              <Image 
                src="/AAD83654-0D2A-4539-A640-4D8D7E2065E2.PNG" 
                alt="Enterprise Background" 
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/85 to-gray-900/70"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 p-12 md:p-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-4 py-2 rounded-full text-xs font-bold mb-6 backdrop-blur-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                  </svg>
                  FÜR GROSSBETRIEBE
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                  ENTERPRISE
                </h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  Maßgeschneiderte Lösungen für Betriebe ab 100 Mitarbeitern mit individuellen Anforderungen
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-cyan-400 text-2xl font-black mb-1">{'>'} 100</div>
                    <div className="text-gray-400 text-xs">Mitarbeiter</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-cyan-400 text-2xl font-black mb-1">{'>'} 2 TB</div>
                    <div className="text-gray-400 text-xs">Speicher</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/enterprise"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg"
                  >
                    Mehr erfahren
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => setDemoModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Demo buchen
                  </button>
                </div>
              </div>

              {/* Right Features */}
              <div className="space-y-4">
                {[
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    title: 'Voller Funktionsumfang', 
                    desc: 'Alle Features ohne Limits' 
                  },
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                    title: 'Individuelle Speicherlösungen', 
                    desc: 'Skalierbar nach Bedarf' 
                  },
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                    title: 'Dedizierter Account‑Manager', 
                    desc: 'Persönlicher Ansprechpartner' 
                  },
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
                    title: 'Security & Custom‑Features', 
                    desc: 'Maßgeschneiderte Lösungen' 
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/10 transition-all group">
                    <div className="text-cyan-400 flex-shrink-0">{feature.icon}</div>
                    <div>
                      <div className="text-white font-bold text-sm mb-1">{feature.title}</div>
                      <div className="text-gray-400 text-xs">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Premium Manager Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side */}
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-10 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 px-4 py-2 rounded-full text-xs font-bold mb-6 w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  PREMIUM SERVICE
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Taskey Premium Manager
                </h3>
                <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                  Ein dedizierter Experte, der sich zu 100% um Ihr Unternehmen kümmert
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    'Exklusiver Direktkontakt',
                    '24/7 Priority Support',
                    'Proaktive Optimierung',
                    'Persönliche Schulungen',
                    'Vor-Ort Service'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-blue-50">
                      <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl font-black text-white">239€</span>
                    <span className="text-blue-200 text-xl">/ Woche</span>
                  </div>
                  <p className="text-blue-200 text-sm">zzgl. MwSt. • Jederzeit kündbar • Zubuchbar zu jedem Paket</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/premium-manager"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-gray-900 font-bold px-8 py-4 rounded-xl hover:scale-105 transition-all shadow-lg"
                  >
                    Mehr erfahren
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <button
                    onClick={() => setManagerModalOpen(true)}
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                  >
                    Jetzt anfragen
                  </button>
                </div>
              </div>

              <div className="relative p-10 md:p-12 bg-gray-50 flex flex-col justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-30">
                  <Image 
                    src="/2FD11192-20F9-4069-81C0-F1F4E6F66202.png" 
                    alt="Manager Background" 
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ihr persönlicher Experte</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Ein Taskey Manager ist Ihre persönliche Kontaktperson – ein Experte, der sich ausschließlich um Ihr Unternehmen kümmert und als verlängerter Arm Ihrer Organisation agiert.
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
                        title: 'Exklusiv für Sie', 
                        desc: 'Betreut nur Ihr Unternehmen' 
                      },
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                        title: 'Sofortige Reaktion', 
                        desc: 'Direkter Draht ohne Warteschlangen' 
                      },
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
                        title: 'Proaktive Optimierung', 
                        desc: 'Kontinuierliche Verbesserungen' 
                      },
                      { 
                        icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
                        title: 'Vor-Ort Service', 
                        desc: 'Persönliche Besuche bei Bedarf' 
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-gray-100">
                        <div className="text-blue-600">{item.icon}</div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">{item.title}</div>
                          <div className="text-xs text-gray-600">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="text-sm text-gray-700 font-medium mb-1">Durchschnittliche Zeitersparnis: 50 Stunden/Monat</p>
                        <p className="text-xs text-gray-600">Ideal für wachstumsorientierte Betriebe</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '14 Tage', label: 'Kostenlos testen' },
              { value: '0 €', label: 'Einrichtungsgebühr' },
              { value: '100%', label: 'DSGVO‑konform' },
              { value: 'Server', label: 'Deutsche Server' },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-black text-gray-900">{item.value}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Add-ons */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Brauchen Sie mehr Speicher?</h2>
            <p className="text-gray-600 mb-4">Flexibel zubuchbar — jederzeit kündbar</p>
            <div className="max-w-2xl mx-auto bg-blue-50 rounded-xl p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-700 text-left">
                  <strong className="font-bold">Wofür wird Speicher genutzt?</strong><br />
                  Fotos von Baustellen, hochgeladene Dokumente, unterschriebene Berichte (PDFs), Rechnungen und andere Dateien, die Ihre Mitarbeiter in Taskey hochladen, werden im Cloud-Speicher abgelegt.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { amount: '+100 GB', price: '8,37', desc: 'Ideal für kleine Teams' },
              { amount: '+500 GB', price: '38,11', desc: 'Für wachsende Betriebe' },
              { amount: '+1 TB', price: '68,27', desc: 'Maximale Kapazität' },
            ].map((addon, i) => (
              <div key={i} className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center group">
                <div className="text-3xl font-black text-gray-900 mb-1">{addon.amount}</div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-2xl font-bold text-blue-900">{addon.price}€</span>
                  <span className="text-sm text-gray-500">/ Monat</span>
                </div>
                <p className="text-sm text-gray-500">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features Included */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">In jedem Paket enthalten</h2>
            <p className="text-gray-600 text-lg mb-4">Keine Feature‑Grenzen — nur Speicher & Historie unterscheiden sich</p>
            <div className="max-w-3xl mx-auto bg-gray-100 rounded-xl p-4 border border-gray-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-gray-700 text-left">
                  <strong className="font-bold">Was bedeutet Historie?</strong><br />
                  Die Historie bestimmt, wie lange Sie auf alte Zeiterfassungen, Aufträge, Berichte und Dokumente zugreifen können. Bei "12 Monate Historie" sehen Sie alle Daten der letzten 12 Monate. "Unbegrenzte Historie" bedeutet: Alle Daten bleiben für immer abrufbar.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'GPS- & Live-Tracking',
              'Start/Stop, QR & NFC',
              'Zeit‑, Pausen‑ & Fahrterfassung',
              'Live‑Map & Mitarbeiter‑Roadmap',
              'Aufträge, Projekte, Fotos & Dokumente',
              'Abschlussberichte (PDF + Signatur)',
              'Abwesenheiten & Planung',
              'Dashboards & Auswertungen',
              'Buchhaltungs‑Export (z. B. LexOffice)',
              'Rollen‑ & Rechteverwaltung',
              'Mobile App (iOS & Android)',
              'Kundenverwaltung',
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 shadow-sm">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                <span className="text-gray-800 font-medium text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">Häufige Fragen zu unseren Preisen</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Gibt es eine kostenlose Testphase?', a: 'Ja! Testen Sie Taskey 14 Tage lang kostenlos und unverbindlich. Keine Kreditkarte nötig.' },
              { q: 'Was passiert nach der Testphase?', a: 'Nach 14 Tagen wählen Sie einfach das passende Paket. Ihre Daten bleiben erhalten.' },
              { q: 'Kann ich jederzeit das Paket wechseln?', a: 'Ja, ein Upgrade oder Downgrade ist jederzeit möglich. Die Abrechnung passt sich automatisch an.' },
              { q: 'Wie funktioniert die Abrechnung?', a: 'Die Abrechnung erfolgt monatlich pro Mitarbeiter. Sie zahlen nur für aktive Nutzer.' },
              { q: 'Was unterscheidet die Pakete?', a: 'Alle Pakete enthalten den vollen Funktionsumfang. Die Unterschiede liegen bei Speicherplatz, Historie‑Dauer und Support‑Level.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 group">
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-xl transition font-bold text-gray-900">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
            Bereit, Ihren Betrieb zu digitalisieren?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Starten Sie jetzt kostenlos — in unter 5 Minuten einsatzbereit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-lg px-10 py-5 rounded-xl transition-all hover:scale-105 shadow-lg"
            >
              Kostenlos testen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
            <a
              href="mailto:info@taskey.de"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-900 font-bold text-lg px-10 py-5 rounded-xl border-2 border-gray-200 transition-all"
            >
              Fragen? Schreiben Sie uns
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Keine Kreditkarte nötig
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              14 Tage kostenlos
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
              Jederzeit kündbar
            </span>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      {/* Manager Modal */}
      <ManagerRequestModal isOpen={managerModalOpen} onClose={() => setManagerModalOpen(false)} />
    </main>
  );
}
