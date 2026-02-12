"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function RollenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image 
                src="/logoblue.png" 
                alt="Taskey Logo" 
                width={96}
                height={96}
                className="h-24 w-auto mx-auto"
                sizes="96px"
                quality={85}
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Rollen & Berechtigungen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jede Rolle in Taskey ist auf ihre Aufgaben zugeschnitten – vom Außendienst bis zur Geschäftsführung
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ein Überblick
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-gray-50 rounded-lg border-2 border-blue-900 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                <div className="flex justify-center mb-3">
                  <img src="/Unbenanntes_Projekt 26.png" alt="Mitarbeiter" className="w-16 h-16 opacity-100" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Mitarbeiter</h3>
                <p className="text-sm text-gray-600">
                  Arbeiten beim Kunden und dokumentieren den Einsatz
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-2 border-blue-900 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                <div className="flex justify-center mb-3">
                  <img src="/fachkraft2.png" alt="Fachkraft" className="w-24 h-24 opacity-100" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Fachkraft</h3>
                <p className="text-sm text-gray-600">
                  Planen, kontrollieren und steuern aus dem Büro
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg border-2 border-blue-900 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
                <div className="flex justify-center mb-3">
                  <img src="/leader2.png" alt="Leader" className="w-24 h-24 opacity-100" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Leader</h3>
                <p className="text-sm text-gray-600">
                  Führen das Unternehmen und haben volle Kontrolle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Roles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Mitarbeiter */}
          <div id="mitarbeiter" className="scroll-mt-24 bg-white rounded-xl shadow-xl p-8 md:p-12 border-l-8 border-gray-700">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <img src="/Unbenanntes_Projekt 26.png" alt="Mitarbeiter" className="w-24 h-24 opacity-100" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Mitarbeiter</h2>
                <p className="text-lg text-gray-600">Außendienst / Ausführung beim Kunden</p>
                <p className="text-sm text-gray-500 italic mt-1">
                  Fährt raus, arbeitet vor Ort, holt Unterschriften
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Kann */}
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kann
                </h3>
                <ul className="space-y-3">
                  {[
                    "Eigene Aufträge sehen, starten & beenden",
                    "Zeit-, Pausen- & Fahrterfassung",
                    "Automatisches GPS-Tracking",
                    "Fotos & Dokumente zum Auftrag hochladen",
                    "Abschlussberichte ausfüllen",
                    "Digitale Kundensignatur erfassen",
                    "Eigene Tagesübersicht & Historie einsehen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kann nicht */}
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Kann nicht
                </h3>
                <ul className="space-y-3">
                  {[
                    "Aufträge oder Projekte anlegen",
                    "Budgets, Kosten oder Auswertungen sehen",
                    "Andere Mitarbeiter verwalten",
                    "Berichte freigeben oder ändern",
                    "Planung oder Steuerung übernehmen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-center text-gray-700">
                <span className="font-bold text-blue-900">Preis:</span> Standard-Rolle, im Basispreis des Pakets enthalten
              </p>
            </div>
          </div>

          {/* Fachkraft */}
          <div id="fachkraft" className="scroll-mt-24 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-xl p-8 md:p-12 border-l-8 border-blue-900">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <img src="/fachkraft2.png" alt="Fachkraft" className="w-24 h-24 opacity-100" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Fachkraft</h2>
                <p className="text-lg text-gray-600">Büro / Organisation / Controlling</p>
                <p className="text-sm text-gray-500 italic mt-1">
                  Managt, plant, kontrolliert – arbeitet nicht vor Ort
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Kann */}
              <div>
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Kann
                </h3>
                <ul className="space-y-3">
                  {[
                    "Alle Aufträge & Projekte einsehen",
                    "Aufträge & Projekte anlegen, ändern & planen",
                    "Abschlussberichte prüfen, bearbeiten & freigeben",
                    "Reports & Auswertungen verwalten",
                    "Projektbudgets einsehen & planen",
                    "Kosten-, Zeit- & Effizienzanalysen einsehen",
                    "Dokumente & Belege verwalten",
                    "Mitarbeiter Einsätzen zuweisen",
                    "Abwesenheiten einsehen & planen",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Kann nicht */}
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Kann nicht
                </h3>
                <ul className="space-y-3">
                  {[
                    "Mitarbeiter anlegen oder löschen",
                    "Rollen vergeben",
                    "System- & Abrechnungseinstellungen ändern",
                    "Verträge oder Preise verwalten",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-center text-gray-900">
                <span className="font-bold text-blue-900">Preis:</span> <span className="text-2xl font-bold text-blue-900">+5€</span> pro zusätzlicher Fachkraft / Monat
              </p>
            </div>
          </div>

          {/* Leader */}
          <div id="leader" className="scroll-mt-24 bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-xl p-8 md:p-12 border-l-8 border-yellow-500">
            <div className="flex items-center gap-4 mb-6">
              <div>
                <img src="/leader2.png" alt="Leader" className="w-16 h-16 opacity-100" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Leader</h2>
                <p className="text-lg text-gray-600">Unternehmer / Chef / Geschäftsführung</p>
                <p className="text-sm text-gray-500 italic mt-1">
                  Hat volle Kontrolle
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Kann (Uneingeschränkter Zugriff)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Uneingeschränkter Zugriff auf alle Funktionen",
                  "Mitarbeiter anlegen, ändern & deaktivieren",
                  "Rollen vergeben (Mitarbeiter / Fachkraft / Leader)",
                  "Preise, Budgets & Rentabilität vollständig einsehen",
                  "Buchhaltungs-Exporte & Integrationen verwalten",
                  "System-, Standort- & Prozesseinstellungen",
                  "API & Custom-Prozesse (Expert-Paket)",
                  "Alle Reports, Dashboards & Historien",
                  "Freigabe & Kontrolle aller Zeiten & Leistungen",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
              <p className="text-center text-gray-900">
                <span className="font-bold text-yellow-800">Preis:</span> <span className="text-2xl font-bold text-yellow-800">+9€</span> pro zusätzlichem Leader / Monat
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bereit, Taskey auszuprobieren?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Wählen Sie das passende Paket für Ihr Team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Preise ansehen
            </Link>
            <Link
              href="/"
              className="px-8 py-4 text-white border-2 border-white font-semibold rounded-lg hover:bg-white/10 transition"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
