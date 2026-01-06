import Hero from "@/components/home/Hero";
import FeaturePreview from "@/components/home/FeaturePreview";
import Testimonials from "@/components/home/Testimonials";
import IOSAppSection from "@/components/home/iOSAppSection";
import BusinessSize from "@/components/home/BusinessSize";
import Branchen from "@/components/home/Branchen";
import FAQ from "@/components/home/FAQ";
import Contact from "@/components/home/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Taskey - Dienstleistungssoftware für über 600 Branchen | Zeiterfassung & Auftragsplanung",
  description: "Taskey - Die führende Dienstleistungssoftware aus Deutschland. Automatische Zeiterfassung, intelligente Auftragsplanung, digitale Rechnungsstellung. Für Handwerk, Facility Management, technische Services uvm. DSGVO-konform. Jetzt kostenlos testen!",
  alternates: {
    canonical: "https://taskey.de",
  },
};

export default function Home() {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Taskey",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR",
      "description": "4 Wochen kostenlos testen"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "250"
    },
    "description": "Dienstleistungssoftware für automatische Zeiterfassung, Auftragsplanung und Rechnungsstellung",
    "softwareVersion": "2.0",
    "author": {
      "@type": "Organization",
      "name": "Taskey",
      "url": "https://taskey.de"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Taskey",
    "url": "https://taskey.de",
    "logo": "https://taskey.de/logobittt.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-800-123-4567",
      "contactType": "customer service",
      "areaServed": "DE",
      "availableLanguage": ["German"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/taskey",
      "https://twitter.com/taskey"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <main>
        <Hero />
        <FeaturePreview />
        <Testimonials />
        <IOSAppSection />
        <BusinessSize />
        <Branchen />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
