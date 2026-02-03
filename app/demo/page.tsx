'use client';

import { useState } from 'react';
import { FaRocket, FaChartLine, FaUsers, FaClock, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

export default function DemoPage() {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: 'Kompletter Überblick',
      description: 'Sehen Sie alle Funktionen in Aktion'
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: 'Keine Registrierung',
      description: 'Sofortiger Zugang ohne Account'
    },
    {
      icon: <FaClock className="text-3xl" />,
      title: 'Echte Daten',
      description: 'Realistische Beispiel-Szenarien'
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: '100% Kostenlos',
      description: 'Keine versteckten Kosten'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-950 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-900 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Metallic Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center space-y-8 mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-900/30 to-blue-950/30 backdrop-blur-sm border border-blue-800/40 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold animate-bounce">
            <FaRocket className="text-lg" />
            <span>Live Demo verfügbar</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Sind Sie{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Betriebsinhaber
            </span>
            {' '}oder{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              leitend tätig
            </span>
            ?
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Entdecken Sie, wie Taskey Ihren Betrieb revolutionieren kann – 
            <strong className="text-white"> ohne Anmeldung, ohne Verpflichtung</strong>
          </p>

          {/* Main CTA with Glow Effect */}
          <div 
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow Effect */}
            <div className={`absolute -inset-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-2xl blur-2xl transition-opacity duration-500 ${isHovered ? 'opacity-75 animate-pulse' : 'opacity-0'}`}></div>
            
            <a
              href="https://demo.vars-development.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center gap-4 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 text-white px-12 py-6 rounded-2xl font-bold text-xl md:text-2xl shadow-2xl hover:shadow-blue-900/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>Demo jetzt erleben</span>
              <FaArrowRight className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Trust Indicator */}
          <div className="flex flex-col items-center gap-4 pt-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-950 border-2 border-gray-800 flex items-center justify-center text-white font-bold text-xs">
                    {i}
                  </div>
                ))}
              </div>
              <span className="text-gray-400 text-sm">Vertraut von Handwerksbetrieben in ganz Deutschland</span>
            </div>
            <p className="text-gray-500 text-sm">
              Keine Kreditkarte erforderlich • Sofortiger Zugang
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-blue-900 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with Glow */}
              <div className="relative inline-flex mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-950 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-blue-900 to-blue-950 text-white w-16 h-16 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-900/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* What You'll See Section */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Was Sie in der Demo entdecken werden
          </h2>
          
          <div className="space-y-4">
            {[
              'Vollständiges Dashboard',
              'Auftrags- und Projektverwaltung in Aktion',
              'Zeiterfassung und Mitarbeiterverwaltung',
              'GPS-Tracking und Kartenfunktion',
              'Berichte und Analysen',
              'Kundenverwaltung und Kommunikation'
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4 border border-gray-700 hover:border-blue-900 transition-all duration-300 transform hover:translate-x-2"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-900 to-blue-950 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <span className="text-gray-200 text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://demo.vars-development.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-900 to-blue-950 hover:from-blue-800 hover:to-blue-900 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>Jetzt kostenlos testen</span>
              <FaArrowRight className="text-xl" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-4xl mx-auto text-center mt-16 space-y-6">
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-950/20 backdrop-blur-sm border border-blue-800/30 rounded-2xl p-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Die Demo läuft mit <strong className="text-white">realistischen Beispieldaten</strong>, 
              damit Sie genau sehen, wie Taskey in Ihrem Betrieb funktionieren würde.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <Link href="/was-ist-taskey" className="hover:text-blue-400 transition-colors duration-300">
              Was ist Taskey?
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/features" className="hover:text-blue-400 transition-colors duration-300">
              Alle Funktionen
            </Link>
            <span className="hidden sm:inline">•</span>
            <Link href="/pricing" className="hover:text-blue-400 transition-colors duration-300">
              Preise
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
