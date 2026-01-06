export default function AllFeatures() {
  const features = [
    {
      title: "Mobile App",
      description: "iOS & Android für unterwegs",
    },
    {
      title: "Zahlungsabwicklung",
      description: "Digitale Zahlungen empfangen",
    },
    {
      title: "Benachrichtigungen",
      description: "Automatische Updates & Erinnerungen",
    },
    {
      title: "Dokumentenverwaltung",
      description: "Alle Dokumente digital",
    },
    {
      title: "Terminplanung",
      description: "Automatische Kalenderintegration",
    },
    {
      title: "Reporting & Analytics",
      description: "Einfache Auswertungen ohne Excel",
    },
    {
      title: "Cloud-Synchronisation",
      description: "Zugriff von überall",
    },
    {
      title: "Kundenverwaltung",
      description: "Alle Daten zentral",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <img 
              src="/D69772A5-9DCA-4D89-8EA3-9009CB69634A_1_105_c.jpeg" 
              alt="Taskey Logo" 
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alle wichtigen Features
          </h2>
          <p className="text-xl text-gray-600">
            Alles, was Sie für Ihren Betrieb brauchen – an einem Ort
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
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
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
