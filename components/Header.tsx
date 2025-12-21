"use client";

import Link from "next/link";
import { useState } from "react";
import DemoBookingModal from "./DemoBookingModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <>
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3" aria-label="Taskey Startseite">
            <img 
              src="/logobittt.png" 
              alt="Taskey Logo - Dienstleistungssoftware" 
              className="h-10 w-auto"
              width="40"
              height="40"
            />
            <span className="text-2xl font-bold text-gray-900">TASKEY</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Home
            </Link>
            <Link
              href="/was-ist-taskey"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Was ist Taskey?
            </Link>
            <Link
              href="/features"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Was kann Taskey?
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Preise
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-900 transition"
            >
              Über uns
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-4 py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-50 transition"
            >
              Demo buchen
            </button>
            <Link
              href="https://signup.vars-development.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
            >
              4 Wochen kostenlos testen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/was-ist-taskey"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Was ist Taskey?
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Was kann Taskey?
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Preise
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-900 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Über uns
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDemoModalOpen(true);
                }}
                className="px-4 py-2 text-center text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-50 transition"
              >
                Demo buchen
              </button>
              <Link
                href="https://signup.vars-development.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-center bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                4 Wochen kostenlos testen
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
