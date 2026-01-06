import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: "Taskey - Dienstleistungssoftware für über 600 Branchen | Made in Germany",
    template: "%s | Taskey"
  },
  description: "Taskey ist die führende Dienstleistungssoftware aus Deutschland für über 600 Branchen. Automatische Zeiterfassung, intelligente Auftragsplanung & digitale Rechnungsstellung. DSGVO-konform. Jetzt 14 Tage kostenlos testen!",
  keywords: ["Dienstleistungssoftware", "Handwerkersoftware", "Zeiterfassung", "Auftragsplanung", "Rechnungssoftware", "Facility Management Software", "Mobile Einsatzplanung", "DSGVO-konforme Software", "Software für Handwerker", "Betriebssoftware Deutschland"],
  authors: [{ name: "Taskey" }],
  creator: "Taskey",
  publisher: "Taskey",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://taskey.de",
    siteName: "Taskey",
    title: "Taskey - Dienstleistungssoftware für über 600 Branchen",
    description: "Automatische Zeiterfassung, intelligente Auftragsplanung & digitale Rechnungsstellung für Dienstleistungsbetriebe. Made in Germany, DSGVO-konform.",
    images: [
      {
        url: "/logobittt.png",
        width: 1200,
        height: 630,
        alt: "Taskey Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskey - Dienstleistungssoftware für über 600 Branchen",
    description: "Automatische Zeiterfassung, intelligente Auftragsplanung & digitale Rechnungsstellung. Made in Germany, DSGVO-konform.",
    images: ["/logobittt.png"],
  },
  alternates: {
    canonical: "https://taskey.de",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
