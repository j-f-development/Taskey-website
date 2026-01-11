'use client';

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/843B6B8E-CED8-4FF8-8C63-B354140A7BC5e5e1f940b1a8d4df34c43ec444a293f3116e09c2a98dcecd8e8882d3099b7c2d.png" 
                alt="Taskey Logo" 
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <h3 className="text-xl font-bold">Taskey</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Dienstleistungssoftware Nr. 1 aus Deutschland für effiziente
              Betriebe.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition">
                  Preise
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition">
                  Demo buchen
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Generelle Fragen: +49 151 68488999</li>
              <li>Technische Fragen: +49 174 5459801</li>
              <li>fynn@vars-development.com</li>
              <li>In der Acht 44</li>
              <li>66333 Völklingen, Deutschland</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Taskey. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link href="/impressum" className="hover:text-white transition">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition">
              Datenschutz
            </Link>
            <Link href="/agb" className="hover:text-white transition">
              AGB
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('taskey-cookie-consent');
                window.location.reload();
              }}
              className="hover:text-white transition cursor-pointer"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
