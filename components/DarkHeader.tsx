"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DemoBookingModal from "./DemoBookingModal";

export default function DarkHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Taskey Startseite">
            <Image 
              src="/logoblue.png" 
              alt="Taskey Logo - Dienstleistungssoftware" 
              width={40}
              height={40}
              className="h-9 w-9"
              priority
              sizes="40px"
            />
            <span className="text-xl font-bold text-white">TASKEY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link
              href="/was-ist-taskey"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Was ist Taskey?
            </Link>
            <Link
              href="/features"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Features
            </Link>
            <Link
              href="/demo"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Live Demo
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Preise
            </Link>
            <a
              href="https://taskey.vars-development.com/support"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition font-medium"
            >
              Support
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-5 py-2.5 text-gray-300 hover:text-white transition font-medium"
            >
              Demo buchen
            </button>
            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
            >
              Kostenlos testen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-1">
              <Link
                href="/was-ist-taskey"
                className="px-4 py-3 text-gray-300 hover:bg-gray-900 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Was ist Taskey?
              </Link>
              <Link
                href="/features"
                className="px-4 py-3 text-gray-300 hover:bg-gray-900 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/demo"
                className="px-4 py-3 text-gray-300 hover:bg-gray-900 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Live Demo
              </Link>
              <Link
                href="/pricing"
                className="px-4 py-3 text-gray-300 hover:bg-gray-900 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preise
              </Link>
              <a
                href="https://taskey.vars-development.com/support"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-gray-300 hover:bg-gray-900 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Support
              </a>
              <div className="pt-4 px-4 space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDemoModalOpen(true);
                  }}
                  className="w-full px-4 py-3 text-gray-300 border border-gray-700 rounded-lg hover:bg-gray-900 transition font-medium"
                >
                  Demo buchen
                </button>
                <Link
                  href="https://signup.vars-development.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-4 py-3 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kostenlos testen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
