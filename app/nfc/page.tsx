"use client";

import { useState } from "react";
import Link from "next/link";

export default function NFCLandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-start justify-center px-6 sm:px-12 lg:px-20 py-16">
      {submitted ? (
        /* ── Success State ── */
        <div className="max-w-xl w-full text-left">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Läuft. 🚀</h2>
          <p className="text-xl text-gray-600 mb-8">
            Dein Account ist in <span className="font-bold text-gray-900">2 Minuten</span> live. Schau in dein Postfach.
          </p>
          <Link
            href="https://signup.vars-development.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-900 text-white font-black text-lg rounded-2xl hover:bg-blue-800 transition-colors shadow-lg"
          >
            Direkt starten →
          </Link>
        </div>
      ) : (
        /* ── Main Content ── */
        <div className="max-w-2xl w-full">

          {/* Hook */}
          <div className="mb-10">
            <p className="text-sm font-black uppercase tracking-widest text-blue-900 mb-4">
              Taskey · NFC-Werkzeugverwaltung
            </p>
            <h1 className="text-6xl sm:text-7xl font-black text-gray-900 leading-[0.95] tracking-tight mb-6">
              Geil, oder?
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 leading-snug">
              Genau so schnell checken deine Jungs auf der Baustelle{" "}
              <span className="font-black text-gray-900">Werkzeug ein und aus.</span>
            </p>
          </div>

          {/* Visual proof */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-snug pt-1">
                Handy ans Werkzeug → sofort Name, Standort, Zustand, Verantwortlicher. Kein Tippen. Keine App öffnen.
              </p>
            </div>
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-snug pt-1">
                Kein Schwund mehr. Jede Maschine weiß, wer sie wann wo hatte – für immer.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg leading-snug pt-1">
                Einrichten dauert 2 Minuten. Kein IT-Aufwand. Läuft auf jedem Handy.
              </p>
            </div>
          </div>

          {/* CTA Form */}
          <div className="bg-blue-900 rounded-3xl p-8 sm:p-10">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-2">
              Trag deine E-Mail ein.
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Dein Account ist in <span className="text-white font-bold">2 Minuten live</span>. Die ersten 14 Tage gehen auf uns.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="deine@email.de"
                className="flex-1 px-5 py-4 rounded-xl text-gray-900 text-lg font-medium placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-white text-blue-900 font-black text-lg rounded-xl hover:bg-gray-100 transition-colors shadow-lg disabled:opacity-70 whitespace-nowrap"
              >
                {loading ? "Moment…" : "Jetzt starten →"}
              </button>
            </form>

            <p className="mt-4 text-blue-300 text-sm">
              Keine Kreditkarte. Kein Risiko. Kündigung jederzeit.
            </p>
          </div>

        </div>
      )}
    </main>
  );
}
