export default function WasIstTaskeyPage() {
  return (
    <>
      {/* Fixed Background */}
      <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: 'url(/1BD55E54-4366-46DF-8069-7BE9DCC111F1.png)',
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60" />
      </div>

      <main className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 text-center leading-tight">
              Was ist <span className="text-blue-600">Taskey</span>?
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 text-center max-w-3xl mx-auto">
              Mehr als Software – ein System zur Objektivierung von Arbeit
            </p>
          </div>
        </section>

      {/* Das Grundprinzip */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Das Grundprinzip
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>

          <div className="space-y-8 text-center mb-16">
            <p className="text-2xl text-gray-300 leading-relaxed">
              Taskey ist <span className="text-red-400 font-bold">keine Zeiterfassung</span>, <span className="text-red-400 font-bold">kein Überwachungstool</span> und <span className="text-red-400 font-bold">keine Verwaltungssoftware</span>.
            </p>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
              Taskey ist ein System zur <span className="text-blue-600">Objektivierung von Arbeit</span>
            </h3>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
              Arbeit wird messbar, erklärbar und belegbar – ohne dass Menschen sich ständig rechtfertigen müssen.
            </p>
            <p className="text-xl text-white font-semibold leading-relaxed max-w-3xl mx-auto">
              Nicht Gefühle, Vermutungen oder Machtverhältnisse entscheiden, sondern nachvollziehbare Fakten.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-center max-w-3xl mx-auto">
            <p className="text-2xl text-gray-400">Taskey ersetzt kein Vertrauen</p>
            <span className="text-blue-600 text-4xl">→</span>
            <p className="text-2xl text-blue-600 font-bold">Taskey ersetzt Unklarheit</p>
          </div>
        </div>
      </section>

      {/* Das Problem */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welches Problem löst Taskey?
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>

          <div className="space-y-8 text-center mb-16">
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Das eigentliche Problem in Betrieben ist selten Faulheit oder böser Wille.
            </p>
            <p className="text-2xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
              Das echte Problem ist, dass Arbeit emotional, chaotisch und streitanfällig ist.
            </p>
          </div>

          <div className="space-y-4 mb-16 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">"Ich war doch da."</p>
            <p className="text-xl text-gray-300 leading-relaxed text-right">"Nein, warst du nicht."</p>
            <p className="text-xl text-gray-300 leading-relaxed">"Der andere arbeitet weniger."</p>
            <p className="text-xl text-gray-300 leading-relaxed text-right">"Der Chef ist unfair."</p>
            <p className="text-xl text-gray-300 leading-relaxed">"Der Kunde glaubt uns nicht."</p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-8">Taskey greift genau hier ein</h3>
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed">
              Es ersetzt <span className="line-through opacity-75">Diskussionen</span> durch <span className="text-blue-600 font-bold">Nachweise</span>
            </p>
            <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
              und <span className="line-through opacity-75">Emotionen</span> durch <span className="text-blue-600 font-bold">Klarheit</span>
            </p>
            <p className="text-lg text-gray-400 italic max-w-2xl mx-auto leading-relaxed">
              Nicht, um Menschen zu kontrollieren – sondern um Streit, Misstrauen und Willkür zu beenden.
            </p>
          </div>
        </div>
      </section>

      {/* Taskey als Betriebssystem */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Taskey als Betriebssystem
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Taskey ist kein loses Feature-Set, sondern ein <span className="font-bold text-blue-600">Betriebssystem für Arbeit</span>
            </p>
          </div>

          <div className="space-y-8 mb-16">
            {/* Karte 1: Eingabe */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-4">Eingabe</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Zeit, Einsatzort, Auftrag, Mensch
                  </p>
                </div>
              </div>
            </div>

            {/* Karte 2: Verarbeitung */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-gray-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-300 mb-4">Verarbeitung</h3>
                  <div className="space-y-2">
                    <p className="text-xl text-gray-300 leading-relaxed">Klare Zuordnung von Arbeit, Pause und Fahrt</p>
                    <p className="text-xl text-gray-300 leading-relaxed">Kontext durch Projekt und Auftrag</p>
                    <p className="text-xl text-gray-300 leading-relaxed">Trennung von Arbeitsarten</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Karte 3: Ausgabe */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4">Ausgabe</h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Nachweise, Kostenklarheit, Dokumentation, Entscheidungsgrundlagen
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-400 italic leading-relaxed max-w-3xl mx-auto">
              Alles, was sichtbar ist – Karten, PDFs, Auswertungen – sind nur Oberflächen.
            </p>
            <p className="text-xl font-bold text-white mt-4 leading-relaxed max-w-3xl mx-auto">
              Der Kern von Taskey ist die Arbeitslogik darunter.
            </p>
          </div>
        </div>
      </section>

      {/* Die Grundprinzipien */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Die Grundprinzipien
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>

          <div className="space-y-16">
            {/* Prinzip 1 */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl"></div>
              <div className="relative text-center py-12 px-6">
                <div className="inline-block bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Arbeit braucht Kontext, keine Minuten</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                  Taskey misst keine Sekunden und keine Bewegungen. <span className="font-bold text-blue-600">Taskey dokumentiert Einsätze.</span>
                </p>
                <p className="text-lg text-red-400 mb-3">Nicht: "08:03 – 08:07 Standort X"</p>
                <p className="text-lg text-green-400">Sondern: "Einsatz bei Kunde Müller, 3 Stunden, Auftrag erledigt"</p>
              </div>
            </div>

            {/* Prinzip 2 */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl"></div>
              <div className="relative text-center py-12 px-6">
                <div className="inline-block bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Sinn vor Datenerfassung</h3>
                <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl mx-auto">
                  Jeder erfasste Datenpunkt in Taskey hat einen klaren Zweck.
                </p>
                <p className="text-2xl font-bold text-blue-600 mb-6 leading-relaxed">
                  Es gibt keine Datenerfassung ohne Begründung.
                </p>
                <p className="text-lg text-gray-300 italic max-w-2xl mx-auto mb-3">
                  Wenn ein Datenpunkt nicht erklären kann, wofür er gebraucht wird, existiert er nicht.
                </p>
                <p className="text-lg text-white font-semibold">
                  Das unterscheidet Nachweis von Überwachung.
                </p>
              </div>
            </div>

            {/* Prinzip 3 */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl"></div>
              <div className="relative text-center py-12 px-6">
                <div className="inline-block bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Ausgeglichene Machtverhältnisse</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                  Wenn Mitarbeiter Zeiten nicht manipulieren können, dürfen Chefs sie auch nicht heimlich verändern.
                </p>
                <p className="text-2xl font-semibold text-blue-600 mb-4">Taskey schafft Symmetrie:</p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg text-gray-300">Änderungen sind sichtbar</p>
                  <p className="text-lg text-gray-300">Begründungen sind Pflicht</p>
                  <p className="text-lg text-gray-300">Entscheidungen sind nachvollziehbar</p>
                </div>
                <p className="text-xl text-white font-bold">
                  So entsteht Vertrauen durch Struktur.
                </p>
              </div>
            </div>

            {/* Prinzip 4 */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-3xl"></div>
              <div className="relative text-center py-12 px-6">
                <div className="inline-block bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Taskey bewertet nicht Menschen</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                  <span className="font-bold text-blue-600">Taskey zeigt Fakten.</span> Bewertungen bleiben menschlich.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-lg text-red-400">Keine Rankings</p>
                  <p className="text-lg text-red-400">Keine Produktivitäts-Scores</p>
                  <p className="text-lg text-red-400">Keine KI-Urteile über Leistung</p>
                </div>
                <p className="text-xl text-white font-bold">
                  Taskey liefert Realität – Entscheidungen treffen Menschen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wie Taskey Arbeit neu denkt */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wie Taskey Arbeit neu denkt
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>

          <div className="space-y-16">
            {/* Arbeit ist mehr */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-8">Arbeit ist mehr als Anwesenheit</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Taskey kennt unterschiedliche Arbeitsarten:
              </p>
              <p className="text-2xl text-white mb-6 leading-relaxed">
                Kundeneinsatz, Vorbereitung, Fahrt, Wartezeit, Nacharbeit
              </p>
              <p className="text-xl font-semibold text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Arbeit wird nicht versteckt, sondern anerkannt.
              </p>
            </div>

            {/* Aufträge statt Zeit */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-8">Aufträge statt bloßer Zeit</h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                In Taskey wird Arbeit über Aufträge verstanden:
              </p>
              <div className="space-y-4 mb-8">
                <p className="text-xl text-white">Auftrag starten</p>
                <p className="text-xl text-white">Auftrag abschließen</p>
                <p className="text-xl text-white">Ergebnis dokumentieren</p>
              </div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">Ein Ergebnis kann sein:</p>
              <div className="space-y-3 max-w-2xl mx-auto mb-8">
                <p className="text-lg text-green-400">Erledigt</p>
                <p className="text-lg text-yellow-400">Nicht möglich</p>
                <p className="text-lg text-red-400">Abgebrochen mit Grund</p>
              </div>
              <p className="text-lg text-gray-400 italic leading-relaxed max-w-3xl mx-auto">
                So wird Arbeit inhaltlich sichtbar, nicht nur zeitlich.
              </p>
            </div>

            {/* Mitarbeiter als Akteur */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600 mb-8">Mitarbeiter als Akteur, nicht als Objekt</h3>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                In Taskey dokumentieren Mitarbeiter ihre Arbeit selbst.
              </p>
              <p className="text-xl font-bold text-white mb-8 leading-relaxed max-w-3xl mx-auto">
                Sie werden nicht überwacht, sondern sichtbar.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-3xl mx-auto">
                Sprache und Struktur sind bewusst gewählt:
              </p>
              <div className="space-y-3 max-w-2xl mx-auto mb-8">
                <p className="text-xl text-white">"Einsatz starten"</p>
                <p className="text-xl text-white">"Einsatz abschließen"</p>
              </div>
              <p className="text-xl font-bold text-white leading-relaxed max-w-3xl mx-auto">
                Arbeit wird gestaltet, nicht kontrolliert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schlussgedanke */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Blurry Background */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative text-center py-16 px-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">Schlussgedanke</h2>
              <div className="space-y-8">
                <p className="text-3xl md:text-4xl text-white leading-relaxed font-bold">
                  Taskey misst keine Menschen.
                </p>
                <p className="text-blue-600 font-black text-4xl md:text-5xl leading-relaxed">
                  Taskey misst Realität.
                </p>
                <p className="text-gray-200 text-2xl mt-8 leading-relaxed font-semibold max-w-3xl mx-auto">
                  Nicht um zu kontrollieren, sondern um Klarheit, Fairness und Arbeitsfrieden zu schaffen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Bereit, Taskey kennenzulernen?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Entdecken Sie, wie Taskey Ihren Betrieb effizienter macht
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/pricing"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-xl text-lg"
            >
              Zu den Angeboten
            </a>
            <a
              href="/"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/50 font-bold rounded-lg hover:bg-white/20 transition-all hover:scale-105 text-lg"
            >
              Zurück zur Startseite
            </a>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/features"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-lg font-semibold"
            >
              <span>Zu den Funktionen</span>
              <span className="text-2xl">→</span>
            </a>
            <span className="text-gray-400 hidden sm:block">|</span>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors text-lg font-semibold"
            >
              <span>Mehr erfahren</span>
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
