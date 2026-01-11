import Image from "next/image";

export default function FeaturePreview() {
  const features = [
    {
      title: "Automatische Zeiterfassung",
      description:
        "Erfassung ohne manuelle Eingaben. Weniger Aufwand bei der Abrechnung.",
      color: "from-blue-500 to-blue-700",
      image: "/Unbenanntes_Projekt 3.png",
    },
    {
      title: "Intuitive Auftragsplanung",
      description:
        "Routenoptimierung und automatische Terminvergabe.",
      color: "from-blue-700 to-blue-900",
      image: "/Unbenanntes_Projekt 5.png",
    },
    {
      title: "Finanz- & Buchhaltungsübersicht inkl. Rentabilitätsanalyse",
      description:
        "Rechnungen direkt aus der App erstellen und versenden. Inklusive automatischer Erinnerungen.",
      color: "from-gray-700 to-gray-900",
      image: "/Unbenanntes_Projekt 6.png",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <Image 
              src="/D69772A5-9DCA-4D89-8EA3-9009CB69634A_1_105_c.jpeg" 
              alt="Taskey Logo" 
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alles, was Ihr Betrieb braucht
          </h2>
          <p className="text-xl text-gray-600">
            Drei Kernfunktionen, die Ihren Arbeitsalltag revolutionieren
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group h-full"
            >
              {/* Rectangular feature card */}
              <div className="relative h-full">
                <div className="relative bg-white rounded-lg p-8 shadow-xl border-4 border-gray-100 h-full flex flex-col">
                  <div className="relative w-32 h-32 mb-4 mx-auto">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      fill
                      className="object-contain"
                      sizes="128px"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed flex-grow">{feature.description}</p>
                </div>
              </div>
              
              {/* Number badge */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg z-10`}>
                <span className="text-white font-bold text-xl">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
