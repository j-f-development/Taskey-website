'use client';

import { FaApple } from 'react-icons/fa';

export default function IOSAppSection() {
  const features = [
    {
      label: 'Intuitive Oberfläche',
      desc: 'Klare Struktur, die sofort verständlich ist – ohne Schulung.',
    },
    {
      label: 'Offline-fähig',
      desc: 'Arbeiten Sie auch ohne Netz – Daten synchronisieren sich automatisch.',
    },
    {
      label: 'Push-Benachrichtigungen',
      desc: 'Echtzeit-Updates zu Aufträgen, Zeiten und Teamänderungen.',
    },
    {
      label: 'Face ID & Touch ID',
      desc: 'Sicherer Zugriff in Sekunden – ohne Passwort-Eingabe.',
    },
  ];

  return (
    <section data-scrollline-ios className="relative pt-16 pb-24 md:pt-20 md:pb-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">
            Mobile App
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Taskey für{' '}
            <span className="text-blue-600">iOS</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Aufträge verwalten, Zeiten erfassen und Ihr Team koordinieren – alles direkt von Ihrem iPhone oder iPad.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left – Phone Video */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative w-[280px] md:w-[320px]">
              {/* Decorative echo frames */}
              <div className="absolute -inset-4 rounded-[3rem] border border-gray-200/60"></div>
              <div className="absolute -inset-9 rounded-[3.5rem] border border-gray-100/50"></div>
              <div className="absolute -inset-14 rounded-[4rem] border border-gray-100/30"></div>

              {/* Phone Frame */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-auto block"
                >
                  <source src="/Taskey (Neue iOS-App).mov" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Right – Content */}
          <div className="order-2 lg:order-2 space-y-10">
            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
                    <h3 className="text-base font-semibold text-gray-900">{feature.label}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pl-5">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* App Store CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://apps.apple.com/us/app/taskey/id6757116248"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200"
              >
                <FaApple className="text-xl" />
                <span>Im App Store laden</span>
              </a>
              <a
                href="/features"
                className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl font-semibold text-base transition-colors duration-200"
              >
                Alle Features entdecken
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-white"></div>
              </div>
              <p className="text-sm text-gray-400">
                Genutzt von <strong className="text-gray-600">600+</strong> Betrieben in Deutschland
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
