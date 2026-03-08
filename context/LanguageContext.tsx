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
    "hero.title": "Die Nr. 1 Dienstleistungssoftware für effiziente Betriebe",
    "hero.title.highlight": "Nr. 1",
    "hero.subtitle": "Zeitersparnis von durchschnittlich 25–30 Stunden pro Monat. Automatische Zeiterfassung, intelligente Auftragsplanung und digitale Rechnungsstellung für über 600 Branchen. Made in Germany, DSGVO-konform.",
    "hero.subtitle.highlight": "25-30h pro Monat",
    "hero.cta.demo": "Demo buchen",
    "hero.cta.trial": "14 Tage kostenlos testen",

    // FeaturePreview
    "features.badge": "Kernfunktionen",
    "features.title": "Die Grundpfeiler von Taskey",
    "features.title.em": "von",
    "features.subtitle": "Drei Säulen, die Ihren Betrieb effizienter, transparenter und profitabler machen.",
    "features.1.title": "Automatische Zeiterfassung",
    "features.1.desc": "Arbeitszeiten werden digital und ohne manuelle Eingaben erfasst. Weniger Papierkram, fehlerfreie Abrechnung und volle Transparenz für Ihr gesamtes Team.",
    "features.2.title": "Intuitive Auftragsplanung",
    "features.2.desc": "Projekte, Termine und Einsatzpläne zentral steuern. Routenoptimierung und automatische Terminvergabe sorgen dafür, dass Ihr Team immer zur richtigen Zeit am richtigen Ort ist.",
    "features.3.title": "Finanz- & Buchhaltungsübersicht",
    "features.3.desc": "Rechnungen direkt aus der App erstellen und versenden. Umsatz, Budget und Kosten in Echtzeit – inklusive automatischer Rentabilitätsanalyse für jedes Projekt.",

    // NFC Section
    "nfc.badge": "INNOVATION: NFC-TAGS",
    "nfc.title": "Kleben. Scannen. Wissen.",
    "nfc.subtitle": "Gib deinem Betrieb ein digitales Gedächtnis. Jede Maschine, jede Anlage wird smart.",
    "nfc.1.title": "Werkzeug & Maschinen-Tracking",
    "nfc.1.desc": "Nie wieder Werkzeug auf der Großbaustelle vergessen. Jeder Scan wird mit GPS-Standort protokolliert.",
    "nfc.2.title": "GPS-Tracking für Werkzeug",
    "nfc.2.desc": "Nie wieder Werkzeug auf der Großbaustelle vergessen. Der letzte Scan-Standort wird auf der Karte angezeigt.",
    "nfc.3.title": "Rechtssicherer Nachweis",
    "nfc.3.desc": "Scan-Zeitstempel belegen: Dein Team war vor Ort und hat geprüft. Perfekt für Versicherung & Haftungsfragen.",
    "nfc.4.title": "Wissens-Sicherung",
    "nfc.4.desc": "Dein bester Geselle geht in Rente? Das Wissen bleibt am Objekt — nicht in seinem Kopf.",
    "nfc.stat1": "Unbegrenzt wiederverwendbar",
    "nfc.stat2": "Lebensdauer",
    "nfc.stat3": "Wasserdicht & wetterfest",

    // iOS App Section
    "ios.badge": "Mobile App",
    "ios.title": "Taskey für",
    "ios.title.highlight": "iOS",
    "ios.subtitle": "Aufträge verwalten, Zeiten erfassen und Ihr Team koordinieren – alles direkt von Ihrem iPhone oder iPad.",
    "ios.feature1.label": "Intuitive Oberfläche",
    "ios.feature1.desc": "Klare Struktur, die sofort verständlich ist – ohne Schulung.",
    "ios.feature2.label": "Offline-fähig",
    "ios.feature2.desc": "Arbeiten Sie auch ohne Netz – Daten synchronisieren sich automatisch.",
    "ios.feature3.label": "Push-Benachrichtigungen",
    "ios.feature3.desc": "Echtzeit-Updates zu Aufträgen, Zeiten und Teamänderungen.",
    "ios.feature4.label": "Face ID & Touch ID",
    "ios.feature4.desc": "Sicherer Zugriff in Sekunden – ohne Passwort-Eingabe.",
    "ios.appstore": "Im App Store laden",
    "ios.allFeatures": "Alle Features entdecken",
    "ios.socialProof": "Genutzt von {count}+ Betrieben in Deutschland",

    // BusinessSize Section
    "biz.badge": "Für jeden Betrieb die richtige Lösung",
    "biz.title": "Taskey wächst",
    "biz.title.highlight": "mit Ihnen",
    "biz.card1.label": "1–10 Mitarbeiter",
    "biz.card1.text": "Sind Sie ein kleiner oder neu gegründeter Betrieb und möchten Arbeitszeiten, Abläufe und Arbeitstage effizienter organisieren?",
    "biz.card2.label": "11–55 Mitarbeiter",
    "biz.card2.text": "Wächst Ihr Betrieb und möchten Sie Teams, Projekte und Einsatzpläne zentral steuern – ohne den Überblick zu verlieren?",
    "biz.card3.label": "56–100 Mitarbeiter",
    "biz.card3.text": "Leiten Sie ein großes Unternehmen und benötigen Sie eine skalierbare Lösung für komplexe Strukturen, mehrere Teams und anspruchsvolle Einsatzplanung?",
    "biz.cta": "Zu den Angeboten →",

    // Testimonials
    "testimonials.title": "Dienstleister vertrauen auf Taskey",
    "testimonials.subtitle": "Über {count} zufriedene Betriebe in ganz Deutschland",
    "testimonials.1.text": "Mit Taskey haben wir unsere Verwaltungszeit um 70% reduziert. Mehr Zeit für unsere Kunden!",
    "testimonials.2.text": "Die automatische Zeiterfassung ist genial. Keine vergessenen Stunden mehr bei der Abrechnung.",
    "testimonials.3.text": "Endlich eine Software, die wirklich einfach zu bedienen ist. Mein Team war sofort produktiv.",

    // FAQ
    "faq.title": "Häufig gestellte Fragen",
    "faq.subtitle": "Alles, was Sie über Taskey wissen müssen",
    "faq.1.q": "Wie viel kostet Taskey?",
    "faq.1.a": "Taskey bietet flexible Preismodelle für jede Betriebsgröße. Schauen Sie sich unsere Preisseite für detaillierte Informationen an.",
    "faq.2.q": "Ist Taskey DSGVO-konform?",
    "faq.2.a": "Ja, Taskey ist vollständig DSGVO-konform. Ihre Daten werden auf deutschen Servern gespeichert und verschlüsselt übertragen.",
    "faq.3.q": "Brauche ich eine Schulung?",
    "faq.3.a": "Nein, Taskey ist so intuitiv gestaltet, dass Sie sofort loslegen können. Wir bieten aber optional kostenlose Onboarding-Sessions an.",
    "faq.4.q": "Funktioniert Taskey offline?",
    "faq.4.a": "Ja, die mobile App funktioniert auch offline. Alle Daten werden automatisch synchronisiert, sobald Sie wieder online sind.",
    "faq.5.q": "Kann ich bestehende Daten importieren?",
    "faq.5.a": "Ja, wir unterstützen den Import aus gängigen Formaten und helfen Ihnen beim Umzug von anderen Systemen.",
    "faq.6.q": "Wie schnell kann ich starten?",
    "faq.6.a": "Sie können sofort nach der Registrierung starten. Die Einrichtung dauert nur wenige Minuten.",
    "faq.7.q": "Gibt es eine Vertragsbindung?",
    "faq.7.a": "Nein, Sie können monatlich kündigen. Es gibt keine Mindestlaufzeit.",
    "faq.8.q": "Welchen Support bietet Taskey?",
    "faq.8.a": "Wir bieten deutschen E-Mail- und Telefon-Support während der Geschäftszeiten sowie eine umfangreiche Wissensdatenbank.",
    "faq.9.q": "Kann ich Taskey für mehrere Standorte nutzen?",
    "faq.9.a": "Ja, Taskey unterstützt Multi-Standort-Verwaltung mit zentraler Übersicht.",
    "faq.10.q": "Welche Geräte werden unterstützt?",
    "faq.10.a": "Taskey funktioniert auf allen modernen Geräten: iOS, Android, Windows, Mac und im Browser.",

    // Contact
    "contact.title": "Fragen zu Gebrauch oder Preispaketen?",
    "contact.subtitle": "Wir sind für Sie da – persönlich und kompetent",
    "contact.phone": "Telefon",
    "contact.email": "E-Mail",
    "contact.address": "Adresse",
    "contact.cta.title": "Überzeugt?",
    "contact.cta.subtitle": "Starten Sie jetzt kostenlos und sparen Sie durchschnittlich 25–30 Stunden pro Monat.",
    "contact.cta.highlight": "25-30h pro Monat",
    "contact.cta.demo": "Demo buchen",
    "contact.cta.trial": "14 Tage kostenlos testen",

    // Footer
    "footer.tagline": "Die Nr. 1 Dienstleistungssoftware aus Deutschland. Automatische Zeiterfassung, intelligente Auftragsplanung und digitale Rechnungsstellung für über 600 Branchen.",
    "footer.col.product": "Produkt",
    "footer.col.company": "Unternehmen",
    "footer.col.legal": "Rechtliches",
    "footer.col.contact": "Kontakt",
    "footer.link.features": "Features",
    "footer.link.pricing": "Preise",
    "footer.link.bookDemo": "Demo buchen",
    "footer.link.about": "Über uns",
    "footer.link.contact": "Kontakt",
    "footer.link.support": "Support",
    "footer.link.imprint": "Impressum",
    "footer.link.privacy": "Datenschutz",
    "footer.link.agb": "AGB",
    "footer.link.supportContact": "Support & Kontakt",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.cookie": "Cookie-Einstellungen",
    "footer.madeIn": "🇩🇪 Made in Germany",

    // Branchen
    "branchen.title": "Für welche Branche möchten Sie Taskey nutzen?",
    "branchen.subtitle": "Taskey ist für über 600 Branchen geeignet – von Handwerk bis Facility Management.",
    "branchen.search": "Branche suchen...",
    "branchen.noResults": "Keine Branche gefunden",
    "branchen.cta": "Demo buchen",
    "branchen.ctaText": "Nicht gefunden? Kontaktieren Sie uns.",
  },

  en: {
    // Navigation
    "nav.whatIsTaskey": "What is Taskey?",
    "nav.features": "Features",
    "nav.liveDemo": "Live Demo",
    "nav.pricing": "Pricing",
    "nav.about": "About us",
    "nav.support": "Support",
    "nav.bookDemo": "Book a demo",
    "nav.tryFree": "Try for free",

    // Hero
    "hero.title": "The No. 1 service management software for efficient businesses",
    "hero.title.highlight": "No. 1",
    "hero.subtitle": "Save an average of 25–30 hours per month. Automatic time tracking, smart job scheduling and digital invoicing for over 600 industries. Made in Germany, GDPR-compliant.",
    "hero.subtitle.highlight": "25–30 hrs per month",
    "hero.cta.demo": "Book a demo",
    "hero.cta.trial": "Try free for 14 days",

    // FeaturePreview
    "features.badge": "Core Features",
    "features.title": "The pillars of Taskey",
    "features.title.em": "of",
    "features.subtitle": "Three pillars that make your business more efficient, transparent and profitable.",
    "features.1.title": "Automatic Time Tracking",
    "features.1.desc": "Working hours are recorded digitally without manual input. Less paperwork, error-free billing and full transparency for your entire team.",
    "features.2.title": "Intuitive Job Scheduling",
    "features.2.desc": "Manage projects, appointments and deployment plans centrally. Route optimisation and automatic scheduling ensure your team is always in the right place at the right time.",
    "features.3.title": "Finance & Accounting Overview",
    "features.3.desc": "Create and send invoices directly from the app. Revenue, budget and costs in real time – including automatic profitability analysis for every project.",

    // NFC Section
    "nfc.badge": "INNOVATION: NFC TAGS",
    "nfc.title": "Attach. Scan. Know.",
    "nfc.subtitle": "Give your business a digital memory. Every machine, every asset becomes smart.",
    "nfc.1.title": "Tool & Machine Tracking",
    "nfc.1.desc": "Never lose track of tools on a large construction site again. Every scan is recorded with a GPS location.",
    "nfc.2.title": "GPS Tracking for Equipment",
    "nfc.2.desc": "Never lose tools on a job site again. The last scan location is displayed on the map.",
    "nfc.3.title": "Legally Compliant Proof",
    "nfc.3.desc": "Scan timestamps prove your team was on site and carried out checks. Perfect for insurance and liability purposes.",
    "nfc.4.title": "Knowledge Retention",
    "nfc.4.desc": "Your best technician retiring? The knowledge stays with the asset — not in their head.",
    "nfc.stat1": "Unlimited reuse",
    "nfc.stat2": "Service life",
    "nfc.stat3": "Waterproof & weatherproof",

    // iOS App Section
    "ios.badge": "Mobile App",
    "ios.title": "Taskey for",
    "ios.title.highlight": "iOS",
    "ios.subtitle": "Manage jobs, track time and coordinate your team – all directly from your iPhone or iPad.",
    "ios.feature1.label": "Intuitive Interface",
    "ios.feature1.desc": "A clear structure that's immediately understandable – no training required.",
    "ios.feature2.label": "Works Offline",
    "ios.feature2.desc": "Work without internet – data syncs automatically once you're back online.",
    "ios.feature3.label": "Push Notifications",
    "ios.feature3.desc": "Real-time updates on jobs, hours and team changes.",
    "ios.feature4.label": "Face ID & Touch ID",
    "ios.feature4.desc": "Secure access in seconds – no password required.",
    "ios.appstore": "Download on the App Store",
    "ios.allFeatures": "Explore all features",
    "ios.socialProof": "Used by {count}+ businesses across Germany",

    // BusinessSize Section
    "biz.badge": "The right solution for every business",
    "biz.title": "Taskey grows",
    "biz.title.highlight": "with you",
    "biz.card1.label": "1–10 employees",
    "biz.card1.text": "Running a small or newly founded business and looking to organise working hours, workflows and daily operations more efficiently?",
    "biz.card2.label": "11–55 employees",
    "biz.card2.text": "Is your business growing and you want to manage teams, projects and schedules centrally – without losing the overview?",
    "biz.card3.label": "56–100 employees",
    "biz.card3.text": "Managing a larger company and need a scalable solution for complex structures, multiple teams and demanding deployment planning?",
    "biz.cta": "View plans →",

    // Testimonials
    "testimonials.title": "Service providers trust Taskey",
    "testimonials.subtitle": "Over {count} satisfied businesses across Germany",
    "testimonials.1.text": "With Taskey we reduced our admin time by 70%. More time for our customers!",
    "testimonials.2.text": "The automatic time tracking is brilliant. No more forgotten hours when it's time to invoice.",
    "testimonials.3.text": "Finally software that's genuinely easy to use. My team was productive straight away.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about Taskey",
    "faq.1.q": "How much does Taskey cost?",
    "faq.1.a": "Taskey offers flexible pricing plans for every business size. Check out our pricing page for detailed information.",
    "faq.2.q": "Is Taskey GDPR-compliant?",
    "faq.2.a": "Yes, Taskey is fully GDPR-compliant. Your data is stored on German servers and transmitted in encrypted form.",
    "faq.3.q": "Do I need any training?",
    "faq.3.a": "No, Taskey is so intuitive that you can get started immediately. We do offer optional free onboarding sessions.",
    "faq.4.q": "Does Taskey work offline?",
    "faq.4.a": "Yes, the mobile app works offline too. All data is synced automatically once you're back online.",
    "faq.5.q": "Can I import existing data?",
    "faq.5.a": "Yes, we support imports from common formats and will help you migrate from other systems.",
    "faq.6.q": "How quickly can I get started?",
    "faq.6.a": "You can start immediately after signing up. Setup takes just a few minutes.",
    "faq.7.q": "Is there a minimum contract term?",
    "faq.7.a": "No, you can cancel on a monthly basis. There is no minimum term.",
    "faq.8.q": "What support does Taskey offer?",
    "faq.8.a": "We offer German-language email and phone support during business hours, as well as a comprehensive knowledge base.",
    "faq.9.q": "Can I use Taskey across multiple locations?",
    "faq.9.a": "Yes, Taskey supports multi-location management with a centralised overview.",
    "faq.10.q": "Which devices are supported?",
    "faq.10.a": "Taskey works on all modern devices: iOS, Android, Windows, Mac and in the browser.",

    // Contact
    "contact.title": "Questions about usage or pricing plans?",
    "contact.subtitle": "We're here for you – personally and professionally",
    "contact.phone": "Phone",
    "contact.email": "E-Mail",
    "contact.address": "Address",
    "contact.cta.title": "Convinced?",
    "contact.cta.subtitle": "Start for free now and save an average of 25–30 hours per month.",
    "contact.cta.highlight": "25–30 hrs per month",
    "contact.cta.demo": "Book a demo",
    "contact.cta.trial": "Try free for 14 days",

    // Footer
    "footer.tagline": "The No. 1 service management software from Germany. Automatic time tracking, smart job scheduling and digital invoicing for over 600 industries.",
    "footer.col.product": "Product",
    "footer.col.company": "Company",
    "footer.col.legal": "Legal",
    "footer.col.contact": "Contact",
    "footer.link.features": "Features",
    "footer.link.pricing": "Pricing",
    "footer.link.bookDemo": "Book a demo",
    "footer.link.about": "About us",
    "footer.link.contact": "Contact",
    "footer.link.support": "Support",
    "footer.link.imprint": "Imprint",
    "footer.link.privacy": "Privacy Policy",
    "footer.link.agb": "Terms",
    "footer.link.supportContact": "Support & Contact",
    "footer.rights": "All rights reserved.",
    "footer.cookie": "Cookie settings",
    "footer.madeIn": "🇩🇪 Made in Germany",

    // Branchen
    "branchen.title": "Which industry would you like to use Taskey for?",
    "branchen.subtitle": "Taskey is suitable for over 600 industries – from trades to facility management.",
    "branchen.search": "Search industry...",
    "branchen.noResults": "No industry found",
    "branchen.cta": "Book a demo",
    "branchen.ctaText": "Not found? Contact us.",
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
    "hero.title": "Verimli işletmeler için 1 numaralı hizmet yönetim yazılımı",
    "hero.title.highlight": "1 numaralı",
    "hero.subtitle": "Ayda ortalama 25–30 saat tasarruf edin. 600'den fazla sektör için otomatik zaman takibi, akıllı iş planlaması ve dijital faturalandırma. Almanya'da üretildi, GDPR uyumlu.",
    "hero.subtitle.highlight": "ayda 25–30 saat",
    "hero.cta.demo": "Demo rezervasyonu",
    "hero.cta.trial": "14 gün ücretsiz dene",

    // FeaturePreview
    "features.badge": "Temel Özellikler",
    "features.title": "Taskey'in temelleri",
    "features.title.em": "temelleri",
    "features.subtitle": "İşletmenizi daha verimli, şeffaf ve karlı hale getiren üç temel sütun.",
    "features.1.title": "Otomatik Zaman Takibi",
    "features.1.desc": "Çalışma saatleri manuel giriş olmadan dijital olarak kaydedilir. Daha az evrak işi, hatasız faturalandırma ve tüm ekibiniz için tam şeffaflık.",
    "features.2.title": "Sezgisel İş Planlaması",
    "features.2.desc": "Projeleri, randevuları ve görev planlarını merkezi olarak yönetin. Rota optimizasyonu ve otomatik zamanlama, ekibinizin her zaman doğru yerde olmasını sağlar.",
    "features.3.title": "Finans & Muhasebe Özeti",
    "features.3.desc": "Faturaları doğrudan uygulamadan oluşturun ve gönderin. Gelir, bütçe ve maliyetler gerçek zamanlı – her proje için otomatik kârlılık analizi dahil.",

    // NFC Section
    "nfc.badge": "YENİLİK: NFC ETİKETLERİ",
    "nfc.title": "Yapıştır. Tara. Bil.",
    "nfc.subtitle": "İşletmenize dijital bir hafıza kazandırın. Her makine, her tesisat akıllı hale gelir.",
    "nfc.1.title": "Alet ve Makine Takibi",
    "nfc.1.desc": "Büyük şantiyelerde aletleri bir daha unutmayın. Her tarama GPS konumuyla kayıt altına alınır.",
    "nfc.2.title": "Ekipman için GPS Takibi",
    "nfc.2.desc": "Aletleri iş yerinde bir daha kaybetmeyin. Son tarama konumu haritada gösterilir.",
    "nfc.3.title": "Yasal Olarak Geçerli Kanıt",
    "nfc.3.desc": "Tarama zaman damgaları ekibinizin yerinde olduğunu ve kontrol yaptığını kanıtlar. Sigorta ve sorumluluk konularında mükemmel.",
    "nfc.4.title": "Bilgi Koruma",
    "nfc.4.desc": "En iyi ustanız emekliye mi gidiyor? Bilgi nesnede kalır — onun kafasında değil.",
    "nfc.stat1": "Sınırsız yeniden kullanım",
    "nfc.stat2": "Hizmet ömrü",
    "nfc.stat3": "Su geçirmez ve hava koşullarına dayanıklı",

    // iOS App Section
    "ios.badge": "Mobil Uygulama",
    "ios.title": "Taskey",
    "ios.title.highlight": "iOS için",
    "ios.subtitle": "İşleri yönetin, saatleri takip edin ve ekibinizi koordine edin – doğrudan iPhone veya iPad'inizden.",
    "ios.feature1.label": "Sezgisel Arayüz",
    "ios.feature1.desc": "Hemen anlaşılabilir net yapı – eğitime gerek yok.",
    "ios.feature2.label": "Çevrimdışı Çalışır",
    "ios.feature2.desc": "İnternet olmadan da çalışın – veriler tekrar bağlanınca otomatik senkronize olur.",
    "ios.feature3.label": "Anlık Bildirimler",
    "ios.feature3.desc": "İşler, saatler ve ekip değişikliklerine ilişkin gerçek zamanlı güncellemeler.",
    "ios.feature4.label": "Face ID & Touch ID",
    "ios.feature4.desc": "Saniyeler içinde güvenli erişim – şifre girişine gerek yok.",
    "ios.appstore": "App Store'dan indir",
    "ios.allFeatures": "Tüm özellikleri keşfet",
    "ios.socialProof": "Almanya'da {count}+ işletme tarafından kullanılıyor",

    // BusinessSize Section
    "biz.badge": "Her işletme için doğru çözüm",
    "biz.title": "Taskey",
    "biz.title.highlight": "sizinle büyür",
    "biz.card1.label": "1–10 çalışan",
    "biz.card1.text": "Küçük veya yeni kurulmuş bir işletme misiniz ve çalışma saatlerini, iş akışlarını ve iş günlerini daha verimli düzenlemek mi istiyorsunuz?",
    "biz.card2.label": "11–55 çalışan",
    "biz.card2.text": "İşletmeniz büyüyor mu ve genel bakışı kaybetmeden ekipleri, projeleri ve görev planlarını merkezi olarak yönetmek mi istiyorsunuz?",
    "biz.card3.label": "56–100 çalışan",
    "biz.card3.text": "Büyük bir şirket mi yönetiyorsunuz ve karmaşık yapılar, birden fazla ekip ve zorlu görev planlaması için ölçeklenebilir bir çözüme mi ihtiyaç duyuyorsunuz?",
    "biz.cta": "Planlara bakın →",

    // Testimonials
    "testimonials.title": "Hizmet sağlayıcılar Taskey'e güveniyor",
    "testimonials.subtitle": "Almanya genelinde {count}'dan fazla memnun işletme",
    "testimonials.1.text": "Taskey ile idari süremizi %70 oranında azalttık. Müşterilerimize daha fazla zaman kalıyor!",
    "testimonials.2.text": "Otomatik zaman takibi harika. Faturalamada artık unutulan saatler yok.",
    "testimonials.3.text": "Sonunda gerçekten kullanımı kolay bir yazılım. Ekibim hemen verimli olmaya başladı.",

    // FAQ
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.subtitle": "Taskey hakkında bilmeniz gereken her şey",
    "faq.1.q": "Taskey ne kadar tutar?",
    "faq.1.a": "Taskey her işletme büyüklüğü için esnek fiyatlandırma planları sunar. Ayrıntılı bilgi için fiyat sayfamıza bakın.",
    "faq.2.q": "Taskey GDPR uyumlu mu?",
    "faq.2.a": "Evet, Taskey tamamen GDPR uyumludur. Verileriniz Almanya'daki sunucularda saklanır ve şifreli olarak iletilir.",
    "faq.3.q": "Eğitime ihtiyacım var mı?",
    "faq.3.a": "Hayır, Taskey o kadar sezgisel ki hemen başlayabilirsiniz. İsteğe bağlı ücretsiz başlangıç oturumları da sunuyoruz.",
    "faq.4.q": "Taskey çevrimdışı çalışır mı?",
    "faq.4.a": "Evet, mobil uygulama çevrimdışı da çalışır. Tekrar çevrimiçi olduğunuzda tüm veriler otomatik olarak senkronize edilir.",
    "faq.5.q": "Mevcut verileri içe aktarabilir miyim?",
    "faq.5.a": "Evet, yaygın formatlardan içe aktarmayı destekliyoruz ve diğer sistemlerden geçişte size yardım ediyoruz.",
    "faq.6.q": "Ne kadar hızlı başlayabilirim?",
    "faq.6.a": "Kayıt olduktan hemen sonra başlayabilirsiniz. Kurulum yalnızca birkaç dakika sürer.",
    "faq.7.q": "Minimum sözleşme süresi var mı?",
    "faq.7.a": "Hayır, aylık olarak iptal edebilirsiniz. Minimum süre yoktur.",
    "faq.8.q": "Taskey hangi desteği sunuyor?",
    "faq.8.a": "Mesai saatlerinde Almanca e-posta ve telefon desteği ile kapsamlı bir bilgi tabanı sunuyoruz.",
    "faq.9.q": "Taskey'i birden fazla lokasyon için kullanabilir miyim?",
    "faq.9.a": "Evet, Taskey merkezi genel bakışla çok lokasyonlu yönetimi destekler.",
    "faq.10.q": "Hangi cihazlar destekleniyor?",
    "faq.10.a": "Taskey tüm modern cihazlarda çalışır: iOS, Android, Windows, Mac ve tarayıcıda.",

    // Contact
    "contact.title": "Kullanım veya fiyat paketleri hakkında sorularınız mı var?",
    "contact.subtitle": "Sizin için buradayız – kişisel ve uzman",
    "contact.phone": "Telefon",
    "contact.email": "E-Posta",
    "contact.address": "Adres",
    "contact.cta.title": "İkna oldunuz mu?",
    "contact.cta.subtitle": "Ücretsiz başlayın ve ayda ortalama 25–30 saat tasarruf edin.",
    "contact.cta.highlight": "ayda 25–30 saat",
    "contact.cta.demo": "Demo rezervasyonu",
    "contact.cta.trial": "14 gün ücretsiz dene",

    // Footer
    "footer.tagline": "Almanya'dan 1 numaralı hizmet yönetim yazılımı. 600'den fazla sektör için otomatik zaman takibi, akıllı iş planlaması ve dijital faturalandırma.",
    "footer.col.product": "Ürün",
    "footer.col.company": "Şirket",
    "footer.col.legal": "Yasal",
    "footer.col.contact": "İletişim",
    "footer.link.features": "Özellikler",
    "footer.link.pricing": "Fiyatlar",
    "footer.link.bookDemo": "Demo rezervasyonu",
    "footer.link.about": "Hakkımızda",
    "footer.link.contact": "İletişim",
    "footer.link.support": "Destek",
    "footer.link.imprint": "Künye",
    "footer.link.privacy": "Gizlilik Politikası",
    "footer.link.agb": "Kullanım Koşulları",
    "footer.link.supportContact": "Destek & İletişim",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.cookie": "Çerez ayarları",
    "footer.madeIn": "🇩🇪 Almanya'da Üretildi",

    // Branchen
    "branchen.title": "Taskey'i hangi sektör için kullanmak istiyorsunuz?",
    "branchen.subtitle": "Taskey 600'den fazla sektöre uygundur – zanaattan tesis yönetimine kadar.",
    "branchen.search": "Sektör ara...",
    "branchen.noResults": "Sektör bulunamadı",
    "branchen.cta": "Demo rezervasyonu",
    "branchen.ctaText": "Bulamadınız mı? Bizimle iletişime geçin.",
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
