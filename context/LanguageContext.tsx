"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "de" | "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  de: {
    // Navigation
    "nav.whatIsTaskey": "Was ist Taskey?",
    "nav.features": "Features",
    "nav.liveDemo": "Live Demo",
    "nav.pricing": "Preise",
    "nav.about": "Über uns",
    "nav.support": "Support",
    "nav.bookDemo": "Demo buchen",
    "nav.tryFree": "Kostenlos testen",

    // Hero
    "hero.badge": "Über 600 Branchen",
    "hero.title": "Die smarte Software für Ihr Dienstleistungsunternehmen",
    "hero.subtitle": "Zeiterfassung, Auftragsplanung und Rechnungsstellung – alles in einer App. Made in Germany, DSGVO-konform.",
    "hero.cta.primary": "Kostenlos testen",
    "hero.cta.secondary": "Demo ansehen",
    "hero.stats.customers": "Zufriedene Kunden",
    "hero.stats.industries": "Branchen",
    "hero.stats.support": "Support",

    // Features
    "features.title": "Alles was Ihr Betrieb braucht",
    "features.subtitle": "Von der Zeiterfassung bis zur Rechnung – Taskey deckt alle wichtigen Prozesse ab.",

    // Pricing
    "pricing.title": "Transparente Preise",
    "pricing.subtitle": "Keine versteckten Kosten. Jederzeit kündbar.",
    "pricing.monthly": "/ Monat",
    "pricing.perUser": "pro Nutzer",
    "pricing.tryFree": "Kostenlos testen",
    "pricing.contact": "Kontakt aufnehmen",

    // Footer
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutz",
    "footer.imprint": "Impressum",
    "footer.terms": "AGB",
  },
  en: {
    // Navigation
    "nav.whatIsTaskey": "What is Taskey?",
    "nav.features": "Features",
    "nav.liveDemo": "Live Demo",
    "nav.pricing": "Pricing",
    "nav.about": "About us",
    "nav.support": "Support",
    "nav.bookDemo": "Book demo",
    "nav.tryFree": "Try for free",

    // Hero
    "hero.badge": "Over 600 industries",
    "hero.title": "The smart software for your service business",
    "hero.subtitle": "Time tracking, job planning and invoicing – all in one app. Made in Germany, GDPR-compliant.",
    "hero.cta.primary": "Try for free",
    "hero.cta.secondary": "Watch demo",
    "hero.stats.customers": "Happy customers",
    "hero.stats.industries": "Industries",
    "hero.stats.support": "Support",

    // Features
    "features.title": "Everything your business needs",
    "features.subtitle": "From time tracking to invoicing – Taskey covers all key processes.",

    // Pricing
    "pricing.title": "Transparent pricing",
    "pricing.subtitle": "No hidden costs. Cancel anytime.",
    "pricing.monthly": "/ month",
    "pricing.perUser": "per user",
    "pricing.tryFree": "Try for free",
    "pricing.contact": "Get in touch",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.imprint": "Imprint",
    "footer.terms": "Terms",
  },
  tr: {
    // Navigation
    "nav.whatIsTaskey": "Taskey nedir?",
    "nav.features": "Özellikler",
    "nav.liveDemo": "Canlı Demo",
    "nav.pricing": "Fiyatlar",
    "nav.about": "Hakkımızda",
    "nav.support": "Destek",
    "nav.bookDemo": "Demo rezervasyonu",
    "nav.tryFree": "Ücretsiz dene",

    // Hero
    "hero.badge": "600'den fazla sektör",
    "hero.title": "Hizmet işletmeniz için akıllı yazılım",
    "hero.subtitle": "Zaman takibi, iş planlaması ve faturalandırma – hepsi tek bir uygulamada. Almanya'da üretildi, GDPR uyumlu.",
    "hero.cta.primary": "Ücretsiz dene",
    "hero.cta.secondary": "Demo izle",
    "hero.stats.customers": "Mutlu müşteri",
    "hero.stats.industries": "Sektör",
    "hero.stats.support": "Destek",

    // Features
    "features.title": "İşletmenizin ihtiyacı olan her şey",
    "features.subtitle": "Zaman takibinden faturalamaya kadar – Taskey tüm önemli süreçleri kapsar.",

    // Pricing
    "pricing.title": "Şeffaf fiyatlandırma",
    "pricing.subtitle": "Gizli maliyet yok. İstediğiniz zaman iptal edin.",
    "pricing.monthly": "/ ay",
    "pricing.perUser": "kullanıcı başına",
    "pricing.tryFree": "Ücretsiz dene",
    "pricing.contact": "İletişime geç",

    // Footer
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.privacy": "Gizlilik Politikası",
    "footer.imprint": "Künye",
    "footer.terms": "Kullanım Koşulları",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "de",
  setLanguage: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("de");

  useEffect(() => {
    const saved = localStorage.getItem("taskey-language") as Language | null;
    if (saved && ["de", "en", "tr"].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("taskey-language", lang);
  };

  const t = (key: string): string => {
    return translations[language][key] ?? translations["de"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
