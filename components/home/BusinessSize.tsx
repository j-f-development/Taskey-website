export default function BusinessSize() {
  const sizes = [
    {
      title: "Klein",
      subtitle: "Solo-Selbstständige",
      people: "1–19 Mitarbeiter",
      savings: "8–10h",
      color: "from-blue-400 to-blue-600",
      size: "md:col-span-1",
    },
    {
      title: "Mittel",
      subtitle: "Betriebe",
      people: "1–49 Mitarbeiter",
      savings: "25–35h",
      color: "from-blue-700 to-blue-900",
      size: "md:col-span-1",
    },
    {
      title: "Groß",
      subtitle: "Betriebe",
      people: "1–149 Mitarbeiter",
      savings: "40+h",
      color: "from-gray-700 to-gray-900",
      size: "md:col-span-1",
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <img 
              src="/D69772A5-9DCA-4D89-8EA3-9009CB69634A_1_105_c.jpeg" 
              alt="Taskey Logo" 
              className="h-20 w-auto mx-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perfekt für jede Betriebsgröße
          </h2>
          <p className="text-xl text-gray-600">
            Von Solo-Selbstständigen bis zu großen Betrieben – Taskey wächst mit
            Ihnen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sizes.map((size, index) => (
            <div
              key={index}
              className={`${size.size} group`}
            >
              <div className="relative h-full">
                {/* Rectangular card */}
                <div className="relative bg-white rounded-lg p-8 shadow-xl border-4 border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1 text-center">
                    {size.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">{size.subtitle}</p>
                  <p className="text-gray-700 mb-3 font-medium text-center">{size.people}</p>
                  
                  {/* Big savings number - psychological emphasis */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${size.color} rounded-full flex items-center justify-center shadow-lg mb-2 mx-auto`}>
                    <span className="text-white font-bold text-lg">{size.savings}</span>
                  </div>
                  <p className="text-xs text-gray-600 text-center">pro Monat</p>
                </div>
                
                {/* Number badge */}
                <div className={`absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br ${size.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Central connecting visual element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900 to-gray-900 text-white px-8 py-4 rounded-full shadow-xl">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-bold">Durchschnittlich 9 Stunden Zeitersparnis pro Monat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
