import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { WebVitals } from "./web-vitals";
import { GlobalStructuredData } from "@/components/StructuredData";
import AnalyticsScript from "@/components/AnalyticsScript";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.taskeyapp.com"),
  title: {
    default: "Taskey · Gebäudereinigungssoftware & NFC Zeiterfassung",
    template: "%s | Taskey",
  },
  description:
    "Taskey ist die Software für Gebäudereinigung und Reinigungsfirmen im DACH-Raum. Reinigungssoftware mit NFC Zeiterfassung, digitaler Einsatzplanung, Rechnungsprogramm, Kundenportal und DATEV Export in einer App. Für Gebäudereiniger, Facility Management und Kleinbetriebe. DSGVO konform, Made in Germany. Kostenlosen Account erstellen.",
  authors: [{ name: "Taskey" }],
  creator: "Taskey",
  publisher: "Taskey",
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.taskeyapp.com",
    siteName: "Taskey",
    title: "Taskey · Software für Gebäudereinigung & NFC Zeiterfassung",
    description:
      "Reinigungssoftware für Gebäudereinigung, Reinigungsfirmen und Facility Management. NFC Zeiterfassung, Einsatzplanung, Rechnungsprogramm, Kundenportal, Live-Margen und DATEV Export in einer App. Made in Germany, DSGVO konform.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Taskey Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taskey · Software für Gebäudereinigung & NFC Zeiterfassung",
    description:
      "Reinigungssoftware für Gebäudereinigung, Reinigungsfirmen und Facility Management. NFC Zeiterfassung, Einsatzplanung, Rechnungsprogramm, Kundenportal, Live-Margen und DATEV Export in einer App. Made in Germany, DSGVO konform.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: "https://www.taskeyapp.com",
    languages: {
      "de-DE": "https://www.taskeyapp.com",
      "en-US": "https://www.taskeyapp.com/en",
      "fr-FR": "https://www.taskeyapp.com/fr",
      "x-default": "https://www.taskeyapp.com",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: {
      "msvalidate.01":
        process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
        "19D02976D22C242365B929606C191E0A",
      ...(process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION
        ? { "facebook-domain-verification": process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION }
        : {}),
    },
  },
  other: {
    "indexnow": "k9f2m7q4p8j3n6t1r5w2y8b4c7e0a3s6",
    "content-language": "de-DE, en-US, fr-FR",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const h = await headers();
  const locale = h.get("x-locale") ?? "de";

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://mission-control.vars-development.com" />
        <link rel="preconnect" href="https://signup.taskeyapp.com" />
        <link rel="preconnect" href="https://taskey.vars-development.com" />
        <link rel="dns-prefetch" href="https://mission-control.vars-development.com" />
        <link rel="dns-prefetch" href="https://signup.taskeyapp.com" />
        <link rel="dns-prefetch" href="https://taskey.vars-development.com" />
        <GlobalStructuredData />
      </head>
      <body className="antialiased" style={{ background: "var(--ts-canvas)", color: "var(--ts-ink)", fontFamily: "var(--ts-font-sans)" }}>
        <WebVitals />
        <AnalyticsScript />
        {children}
      </body>
    </html>
  );
}
