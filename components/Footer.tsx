'use client';

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative z-20 bg-gray-900 text-white overflow-hidden">
      {/* Background PNG */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/7F026185-998A-42EF-845A-EAC748373476.png"
          alt=""
          fill
          className="object-cover"
          style={{ opacity: 0.1 }}
          loading="lazy"
          quality={75}
        />
      </div>

      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-dots" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="12" cy="12" r="1" fill="white" opacity="0.07" />
            </pattern>
            <linearGradient id="footer-dot-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="60%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <mask id="footer-dot-mask">
              <rect width="100%" height="100%" fill="url(#footer-dot-fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-dots)" mask="url(#footer-dot-mask)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section — big branding */}
        <div className="pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 border-b border-white/10">
          <div className="flex items-center gap-4 mb-8">
            <Image 
              src="/843B6B8E-CED8-4FF8-8C63-B354140A7BC5e5e1f940b1a8d4df34c43ec444a293f3116e09c2a98dcecd8e8882d3099b7c2d.png" 
              alt="Taskey Logo" 
              width={48}
              height={48}
              className="h-12 w-12"
              sizes="48px"
              loading="lazy"
              quality={75}
            />
            <h2 className="text-3xl sm:text-4xl font-bold">Taskey</h2>
          </div>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 py-16 sm:py-20">
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-6">{t("footer.col.product")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/features" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.pricing")}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.bookDemo")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-6">{t("footer.col.company")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.about")}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.contact")}
                </Link>
              </li>
              <li>
                <a 
                  href="https://taskey.vars-development.com/support" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition"
                >
                  {t("footer.link.support")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-6">{t("footer.col.legal")}</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/impressum" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.imprint")}
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-300 hover:text-white transition">
                  {t("footer.link.agb")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-6">{t("footer.col.contact")}</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>
                <a 
                  href="https://taskey.vars-development.com/support" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {t("footer.link.supportContact")}
                </a>
              </li>
              <li>fynn@vars-development.com</li>
              <li>+49 151 68488999</li>
              <li>In der Acht 44</li>
              <li>66333 Völklingen</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Taskey. {t("footer.rights")}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="hover:text-white transition text-xs">
              Sitemap
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem('taskey-cookie-consent');
                window.location.reload();
              }}
              className="hover:text-white transition cursor-pointer"
            >
              {t("footer.cookie")}
            </button>
            <span className="text-gray-600">{t("footer.madeIn")}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
