import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Taskey - Made in Germany Dienstleistungssoftware",
  description: "Erfahren Sie mehr über Taskey, die führende Dienstleistungssoftware aus Deutschland. Unsere Mission: Die beste und intuitivste Software für deutsche Betriebe. DSGVO-konform und mit erstklassigem Service.",
  alternates: {
    canonical: "https://taskey.de/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Über Taskey
          </h1>
          <p className="text-xl text-gray-600">
            Die Software, die Dienstleistern wirklich hilft
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6 text-center">
              Taskey wurde entwickelt, um Dienstleistungsbetrieben jeder Art den Alltag zu erleichtern. Wir haben gesehen, wie viel Zeit und Energie in manuelle Verwaltungsaufgaben fließt – Zeit, die besser in die eigentliche Arbeit und die Kunden investiert werden könnte. Ob Handwerk, Facility Management, technischer Service oder mobile Dienstleistungen – überall dort, wo Termine, Aufträge und Mitarbeiter koordiniert werden müssen, ist Taskey die Lösung.
            </p>
            <p className="text-xl text-gray-700 text-center">
              Unsere Mission ist es, die beste und intuitivste Dienstleistungssoftware zu schaffen, die speziell auf die Bedürfnisse deutscher Betriebe zugeschnitten ist. Von der Elektroinstallation über Gebäudereinigung bis hin zu Event-Services – Taskey wächst mit Ihren Anforderungen. Made in Germany, DSGVO-konform und mit dem Service, den Sie erwarten dürfen.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built Taskey */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8">
              <img 
                src="/logoblue.png" 
                alt="Taskey Logo" 
                className="h-32 w-auto mx-auto"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Warum wir Taskey gebaut haben
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Das Problem
              </h3>
              <p className="text-gray-700 text-center">
                Zu viele Dienstleister verlieren wertvolle Zeit mit
                manuellen Prozessen, unübersichtlichen Excel-Tabellen und
                komplizierten Softwarelösungen. Arbeitsstunden gehen verloren,
                Rechnungen werden zu spät gestellt, und die Übersicht fehlt.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Unsere Lösung
              </h3>
              <p className="text-gray-700 text-center">
                Mit Taskey haben wir eine All-in-One-Lösung geschaffen, die
                wirklich einfach zu bedienen ist. Automatische Zeiterfassung,
                intelligente Planung und digitale Abläufe sparen durchschnittlich
                9 Stunden pro Woche – Zeit, die Ihnen für Ihr Geschäft bleibt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Unsere Werte
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Einfachheit
              </h3>
              <p className="text-gray-600">
                Software sollte den Alltag vereinfachen, nicht komplizierter
                machen. Deshalb ist Taskey intuitiv und ohne Schulung nutzbar.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sicherheit
              </h3>
              <p className="text-gray-600">
                Ihre Daten sind bei uns sicher. DSGVO-konform, verschlüsselt und
                auf deutschen Servern gehostet.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Kundenservice
              </h3>
              <p className="text-gray-600">
                Wir sind für Sie da. Mit deutschem Support, schnellen Antworten
                und echten Menschen am anderen Ende der Leitung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8">
              <img 
                src="/logoblue.png" 
                alt="Taskey Logo" 
                className="h-32 w-auto mx-auto"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Unser Team
            </h2>
          </div>
          
          {/* Founders */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Gründer
            </h3>
            <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              {[1, 2].map((i) => (
                <div key={i} className="text-center">
                  <div className="w-48 h-48 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={i === 1 ? "/koko.jpeg" : "/julian.JPG"}
                      alt={i === 1 ? "Fynn-Luca Schulz" : "Julian Stosse"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1 text-xl">
                    {i === 1 ? 'Fynn-Luca Schulz' : 'Julian Stosse'}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Team
            </h3>
            <div className="flex justify-center">
              <div className="text-center">
                <div className="w-40 h-40 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src="/yukiobess.jpeg"
                    alt="Yukio Jonas Sato"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">
                  Yukio Jonas Sato
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Kontakt & Impressum
          </h2>
          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Telefon</h4>
                <a
                  href="tel:+498001234567"
                  className="text-blue-900 hover:underline"
                >
                  +49 (0) 800 123 4567
                </a>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">E-Mail</h4>
                <a
                  href="mailto:kontakt@taskey.de"
                  className="text-blue-900 hover:underline"
                >
                  kontakt@taskey.de
                </a>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Adresse</h4>
                <p className="text-gray-700">
                  In der Acht 44
                  <br />
                  66333 Völklingen
                  <br />
                  Deutschland
                </p>
              </div>
            </div>
          </div>
          <p className="text-gray-600">
            Weitere Informationen finden Sie in unserem{" "}
            <a href="/impressum" className="text-blue-900 hover:underline">
              Impressum
            </a>{" "}
            und unserer{" "}
            <a href="/datenschutz" className="text-blue-900 hover:underline">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
