export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Weber",
      business: "Weber Elektrotechnik GmbH",
      text: "Mit Taskey haben wir unsere Verwaltungszeit um 70% reduziert. Mehr Zeit für unsere Kunden!",
      rating: 5,
      image: "/ceo.png",
    },
    {
      name: "Sandra Müller",
      business: "Müller Sanitär & Heizung",
      text: "Die automatische Zeiterfassung ist genial. Keine vergessenen Stunden mehr bei der Abrechnung.",
      rating: 5,
      image: "/frau.png",
    },
    {
      name: "Thomas Schneider",
      business: "Schneider Malerbetrieb",
      text: "Endlich eine Software, die wirklich einfach zu bedienen ist. Mein Team war sofort produktiv.",
      rating: 5,
      image: "/handwerker.png",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-8 h-8 text-yellow-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dienstleister vertrauen auf Taskey
          </h2>
          <p className="text-xl text-gray-600">
            Über <span className="font-bold text-blue-900">100</span> zufriedene Betriebe in ganz Deutschland
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              {/* Rectangular testimonial card */}
              <div className="relative">
                <div className="relative bg-gradient-to-br from-blue-800 to-blue-950 rounded-lg p-8 shadow-xl">
                  {/* Avatar Circle - psychological focal point */}
                  <div className="flex justify-center mb-6 -mt-16">
                    <div className="relative">
                      <div className="relative w-32 h-32 rounded-full shadow-2xl border-4 border-white overflow-hidden">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  
                  <p className="text-white italic text-center mb-6 leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-blue-100">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
