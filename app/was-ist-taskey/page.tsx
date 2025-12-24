export default function WasIstTaskeyPage() {
  return (
    <>
      {/* Hero Section with Background - Only 70% height */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/1BD55E54-4366-46DF-8069-7BE9DCC111F1.png)',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70" />
        
        {/* Animated circles in background */}
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight animate-fadeIn">
              Was ist <span className="text-blue-900 drop-shadow-2xl bg-white/90 px-4 py-2 rounded-2xl">Taskey</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fadeIn delay-200">
              Mehr als Software – ein System zur Objektivierung von Arbeit
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Clean White Background */}
      <main className="bg-white">
        
        {/* Das Grundprinzip - Diagonal Section */}
        <section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Grundprinzip
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Das Grundprinzip
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 mb-16">
              <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                <p className="text-2xl text-gray-700 text-center leading-relaxed">
                  Taskey ist <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded">keine Zeiterfassung</span>, <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded">kein Überwachungstool</span> und <span className="text-red-600 font-bold bg-red-50 px-2 py-1 rounded">keine Verwaltungssoftware</span>.
                </p>
              </div>
            </div>

            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-2xl p-12 text-white hover:shadow-[0_20px_60px_rgba(30,58,138,0.4)] hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
                  Taskey ist ein System zur <span className="text-blue-300 underline decoration-wavy">Objektivierung von Arbeit</span>
                </h3>
                <p className="text-xl text-blue-100 mb-6 leading-relaxed">
                  Arbeit wird messbar, erklärbar und belegbar – ohne dass Menschen sich ständig rechtfertigen müssen.
                </p>
                <p className="text-xl text-white font-semibold leading-relaxed">
                  Nicht Gefühle, Vermutungen oder Machtverhältnisse entscheiden, sondern nachvollziehbare Fakten.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-center max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <p className="text-xl text-gray-600">Taskey ersetzt kein Vertrauen</p>
              </div>
              <div className="text-blue-900 text-5xl font-bold">→</div>
              <div className="bg-blue-900 rounded-2xl shadow-lg p-6 flex-1 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <p className="text-xl text-white font-bold">Taskey ersetzt Unklarheit</p>
              </div>
            </div>
          </div>
        </section>

        {/* Das Problem - Zigzag Section */}
        <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
          {/* Geometric shapes */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-white via-blue-50 to-white" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'}}></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-white" style={{clipPath: 'polygon(100% 100%, 0 100%, 100% 0)'}}></div>
          
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-900/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Das Problem
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Welches Problem löst Taskey?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto space-y-8 mb-16">
              <p className="text-xl text-gray-300 text-center leading-relaxed">
                Das eigentliche Problem in Betrieben ist selten Faulheit oder böser Wille.
              </p>
              <div className="bg-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-700 shadow-2xl">
                <p className="text-2xl font-bold text-center leading-relaxed">
                  Das echte Problem ist, dass Arbeit emotional, chaotisch und streitanfällig ist.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-12 max-w-3xl mx-auto mb-16 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">"Ich war doch da."</p>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <p className="text-lg text-gray-300 leading-relaxed text-right">"Nein, warst du nicht."</p>
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">"Der andere arbeitet weniger."</p>
                </div>
                <div className="flex items-center gap-4 justify-end">
                  <p className="text-lg text-gray-300 leading-relaxed text-right">"Der Chef ist unfair."</p>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <p className="text-lg text-gray-300 leading-relaxed">"Der Kunde glaubt uns nicht."</p>
                </div>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-12 shadow-2xl hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Taskey greift genau hier ein</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-6">
                    <p className="text-2xl text-gray-400 line-through">Diskussionen</p>
                    <span className="text-blue-900 text-3xl">→</span>
                    <p className="text-2xl text-blue-900 font-bold">Nachweise</p>
                  </div>
                  <div className="flex items-center justify-center gap-6">
                    <p className="text-2xl text-gray-400 line-through">Emotionen</p>
                    <span className="text-blue-900 text-3xl">→</span>
                    <p className="text-2xl text-blue-900 font-bold">Klarheit</p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 italic leading-relaxed mt-8">
                  Nicht, um Menschen zu kontrollieren – sondern um Streit, Misstrauen und Willkür zu beenden.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Taskey als Betriebssystem - Dynamic Grid with deutsch.png Background */}
        <section className="relative py-24 bg-white overflow-hidden">
          {/* deutsch.png as section background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: 'url(/deutsch.png)',
                backgroundSize: '80%',
                backgroundPosition: 'center',
              }}
            />
          </div>
          
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Betriebssystem
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Taskey als Betriebssystem
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto mb-12"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Taskey ist kein loses Feature-Set, sondern ein <span className="font-bold text-blue-900 bg-blue-50 px-2 py-1 rounded">Betriebssystem für Arbeit</span>
              </p>
              <div className="mt-8 inline-flex items-center gap-2 bg-blue-900 text-white px-6 py-3 rounded-full shadow-lg">
                <span className="text-sm font-bold uppercase tracking-wide">Made in Germany 🇩🇪</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Karte 1: Eingabe */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 shadow-2xl hover:shadow-[0_25px_50px_rgba(30,58,138,0.5)] hover:-translate-y-2 transition-all duration-500">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-white text-blue-900 rounded-2xl w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Eingabe</h3>
                      <p className="text-lg text-blue-100 leading-relaxed">
                        Zeit, Einsatzort, Auftrag, Mensch
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Karte 2: Verarbeitung */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 shadow-2xl hover:shadow-[0_25px_50px_rgba(30,58,138,0.5)] hover:-translate-y-2 transition-all duration-500">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-white text-blue-900 rounded-2xl w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Verarbeitung</h3>
                      <div className="space-y-2">
                        <p className="text-base text-blue-100">Klare Zuordnung</p>
                        <p className="text-base text-blue-100">Kontext & Projekt</p>
                        <p className="text-base text-blue-100">Trennung von Arbeitsarten</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Karte 3: Ausgabe */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 shadow-2xl hover:shadow-[0_25px_50px_rgba(30,58,138,0.5)] hover:-translate-y-2 transition-all duration-500">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="bg-white text-blue-900 rounded-2xl w-20 h-20 flex items-center justify-center text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">Ausgabe</h3>
                      <p className="text-lg text-blue-100 leading-relaxed">
                        Nachweise, Klarheit, Dokumentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-3xl p-10 shadow-lg">
              <p className="text-lg text-gray-600 italic leading-relaxed mb-4">
                Alles, was sichtbar ist – Karten, PDFs, Auswertungen – sind nur Oberflächen.
              </p>
              <p className="text-2xl font-bold text-blue-900 leading-relaxed">
                Der Kern von Taskey ist die Arbeitslogik darunter.
              </p>
            </div>
          </div>
        </section>

        {/* Die Grundprinzipien - Staggered Cards */}
        <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Prinzipien
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Die Grundprinzipien
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto"></div>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Prinzip 1 */}
              <div className="group transform hover:scale-105 transition-all duration-300 md:translate-x-0 hover:translate-x-4">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-blue-900 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Arbeit braucht Kontext, keine Minuten</h3>
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        Taskey misst keine Sekunden und keine Bewegungen. <span className="font-bold text-blue-900 bg-blue-50 px-2 py-1 rounded">Taskey dokumentiert Einsätze.</span>
                      </p>
                      <div className="space-y-3 bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-center gap-3">
                          <span className="text-red-600 text-xl">✗</span>
                          <p className="text-base text-gray-600">Nicht: "08:03 – 08:07 Standort X"</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-green-600 text-xl">✓</span>
                          <p className="text-base text-gray-900 font-medium">Sondern: "Einsatz bei Kunde Müller, 3 Stunden, Auftrag erledigt"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prinzip 2 */}
              <div className="group transform hover:scale-105 transition-all duration-300 md:translate-x-0 hover:-translate-x-4">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-r-8 border-blue-900 hover:shadow-2xl transition-all">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Sinn vor Datenerfassung</h3>
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        Jeder erfasste Datenpunkt in Taskey hat einen klaren Zweck.
                      </p>
                      <div className="bg-blue-900 rounded-2xl p-6 shadow-lg">
                        <p className="text-xl font-bold text-white mb-4">
                          Es gibt keine Datenerfassung ohne Begründung.
                        </p>
                        <p className="text-base text-blue-100 italic">
                          Wenn ein Datenpunkt nicht erklären kann, wofür er gebraucht wird, existiert er nicht. Das unterscheidet Nachweis von Überwachung.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prinzip 3 */}
              <div className="group hover:translate-x-4 transition-all duration-500 md:translate-x-0">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-l-8 border-blue-900 hover:shadow-[0_20px_50px_rgba(30,58,138,0.2)] transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Ausgeglichene Machtverhältnisse</h3>
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        Wenn Mitarbeiter Zeiten nicht manipulieren können, dürfen Chefs sie auch nicht heimlich verändern.
                      </p>
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6">
                        <p className="text-xl font-semibold text-blue-900 mb-3">Taskey schafft Symmetrie:</p>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <p className="text-base text-gray-700">Änderungen sind sichtbar</p>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <p className="text-base text-gray-700">Begründungen sind Pflicht</p>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-900 rounded-full"></div>
                            <p className="text-base text-gray-700">Entscheidungen sind nachvollziehbar</p>
                          </li>
                        </ul>
                        <p className="text-lg text-gray-900 font-bold mt-4">
                          So entsteht Vertrauen durch Struktur.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prinzip 4 */}
              <div className="group hover:-translate-x-4 transition-all duration-500 md:translate-x-0">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-r-8 border-blue-900 hover:shadow-[0_20px_50px_rgba(30,58,138,0.2)] transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Taskey bewertet nicht Menschen</h3>
                      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                        <span className="font-bold text-blue-900 bg-blue-50 px-2 py-1 rounded">Taskey zeigt Fakten.</span> Bewertungen bleiben menschlich.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                          <p className="text-base text-red-700 font-medium">✗ Keine Rankings</p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200">
                          <p className="text-base text-red-700 font-medium">✗ Keine Produktivitäts-Scores</p>
                        </div>
                        <div className="bg-red-50 rounded-xl p-4 border-2 border-red-200 md:col-span-2">
                          <p className="text-base text-red-700 font-medium">✗ Keine KI-Urteile über Leistung</p>
                        </div>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4 border-2 border-green-200">
                        <p className="text-lg text-green-900 font-bold text-center">
                          Taskey liefert Realität – Entscheidungen treffen Menschen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wie Taskey Arbeit neu denkt - Dark Blue Cards */}
        <section className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Neue Perspektive
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Wie Taskey Arbeit neu denkt
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-700 mx-auto"></div>
            </div>

            <div className="space-y-8 max-w-5xl mx-auto">
              {/* Card 1: Arbeit ist mehr */}
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-lg p-8 md:p-12 border-l-4 border-white hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-6">Arbeit ist mehr als Anwesenheit</h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  Taskey kennt unterschiedliche Arbeitsarten und dokumentiert sie separat:
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold border border-white">Kundeneinsatz</span>
                  <span className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold border border-white">Vorbereitung</span>
                  <span className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold border border-white">Fahrt</span>
                  <span className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold border border-white">Wartezeit</span>
                  <span className="bg-white text-blue-900 px-5 py-2 rounded-full font-semibold border border-white">Nacharbeit</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-white">
                  <p className="text-xl font-bold text-white">
                    → Arbeit wird nicht versteckt, sondern anerkannt
                  </p>
                </div>
              </div>

              {/* Card 2: Aufträge statt Zeit */}
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-lg p-8 md:p-12 border-r-4 border-white hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-6">Aufträge statt bloßer Zeit</h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  In Taskey wird Arbeit über Aufträge verstanden:
                </p>
                <div className="space-y-3 mb-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-white">
                    <p className="text-lg text-white font-semibold">→ Auftrag starten</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-white">
                    <p className="text-lg text-white font-semibold">→ Auftrag abschließen</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 border-l-4 border-white">
                    <p className="text-lg text-white font-semibold">→ Ergebnis dokumentieren</p>
                  </div>
                </div>
                <p className="text-base text-blue-100 mb-4">Ein Ergebnis kann sein:</p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-green-50 text-green-900 px-5 py-2 rounded-full font-semibold border border-white">✓ Erledigt</span>
                  <span className="bg-yellow-50 text-yellow-900 px-5 py-2 rounded-full font-semibold border border-white">⚠ Nicht möglich</span>
                  <span className="bg-red-50 text-red-900 px-5 py-2 rounded-full font-semibold border border-white">✗ Abgebrochen</span>
                </div>
              </div>

              {/* Card 3: Mitarbeiter als Akteur */}
              <div className="relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl shadow-lg p-8 md:p-12 border-l-4 border-white hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
                <h3 className="text-3xl font-bold text-white mb-6">Mitarbeiter als Akteur, nicht als Objekt</h3>
                <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                  In Taskey dokumentieren Mitarbeiter ihre Arbeit selbst.
                </p>
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <p className="text-2xl font-bold text-blue-900 text-center">
                    Sie werden nicht überwacht, sondern sichtbar
                  </p>
                </div>
                <p className="text-base text-blue-100 mb-4">
                  Sprache und Struktur sind bewusst gewählt:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white">
                    <p className="text-lg font-bold text-white text-center">"Einsatz starten"</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white">
                    <p className="text-lg font-bold text-white text-center">"Einsatz abschließen"</p>
                  </div>
                </div>
                <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-white">
                  <p className="text-xl font-bold text-white">
                    → Arbeit wird gestaltet, nicht kontrolliert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Schlussgedanke - Epic Conclusion */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-white rounded-3xl p-12 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 mb-12">
              <div className="space-y-8">
                <div className="transform hover:scale-105 transition-transform">
                  <p className="text-3xl md:text-4xl text-gray-900 leading-tight font-black text-center">
                    Taskey misst keine Menschen.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
                </div>
                
                <div className="bg-blue-900 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-transform">
                  <p className="text-white font-black text-4xl md:text-5xl leading-tight text-center">
                    Taskey misst Realität
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent"></div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-8 border-2 border-blue-900">
                  <p className="text-gray-900 text-xl md:text-2xl leading-relaxed font-bold text-center">
                    Keine Kontrolle – sondern Klarheit, Fairness und Arbeitsfrieden
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide border border-white/30 shadow-lg">
                Schlussgedanke
              </span>
            </div>
          </div>
        </section>

        {/* CTA Section - Bold and Modern */}
        <section className="relative py-24 bg-white overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-900/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-[3rem] p-12 md:p-16 shadow-2xl border border-gray-100">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Bereit, Taskey kennenzulernen?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                  Entdecken Sie, wie Taskey Ihren Betrieb effizienter macht
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <a
                    href="/pricing"
                    className="group relative px-10 py-5 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold rounded-2xl hover:from-blue-800 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl text-lg overflow-hidden"
                  >
                    <span className="relative z-10">Zu den Angeboten</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </a>
                  <a
                    href="/"
                    className="px-10 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl text-lg border-2 border-gray-200 hover:border-gray-300"
                  >
                    Zurück zur Startseite
                  </a>
                </div>
                
                <div className="pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                    <a
                      href="/features"
                      className="group inline-flex items-center gap-3 text-blue-900 hover:text-blue-800 transition-colors text-lg font-bold"
                    >
                      <span>Zu den Funktionen</span>
                      <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                    <div className="hidden sm:block w-px h-8 bg-gray-300"></div>
                    <a
                      href="/about"
                      className="group inline-flex items-center gap-3 text-blue-900 hover:text-blue-800 transition-colors text-lg font-bold"
                    >
                      <span>Mehr erfahren</span>
                      <span className="text-3xl group-hover:translate-x-2 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
