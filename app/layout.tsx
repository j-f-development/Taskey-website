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
    "Taskey ist die Gebäudereinigungssoftware für Reinigungsbetriebe und Facility Management im DACH-Raum. NFC Zeiterfassung, Einsatzplanung, Live-Margen und DATEV Export in einer App. DSGVO konform, Made in Germany. Kostenlosen Account erstellen.",
  authors: [{ name: "Taskey" }],
  creator: "Taskey",
  publisher: "Taskey",
  robots: {
    index: true,
    follow: true,
    // Diese Direktiven werden im generischen <meta name="robots"> ausgegeben,
    // damit Bingbot / msnbot die gleichen Snippet- und Preview-Rechte erhalten
    // wie Googlebot. Ohne Top-Level-Direktiven landet Bing bei Default-Snippet-
    // Laengen und blockiert grosse Image-Previews in den SERPs.
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
    title: "Taskey · Gebäudereinigungssoftware & NFC Zeiterfassung",
    description:
      "Gebäudereinigungssoftware mit NFC Zeiterfassung, Einsatzplanung, Live-Margen und DATEV Export. Für Reinigungsbetriebe und Facility Management im DACH-Raum. Made in Germany, DSGVO konform.",
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
    title: "Taskey · Gebäudereinigungssoftware & NFC Zeiterfassung",
    description:
      "Gebäudereinigungssoftware mit NFC Zeiterfassung, Einsatzplanung, Live-Margen und DATEV Export. Für Reinigungsbetriebe und Facility Management im DACH-Raum. Made in Germany, DSGVO konform.",
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
      // Bing WMT Token, gespiegelt aus public/BingSiteAuth.xml.
      // Env-Var kann bei Bedarf uebersteuern; leerer Fallback wuerde sonst
      // ein <meta content=""> emittieren und Bing verwirren.
      "msvalidate.01":
        process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ||
        "19D02976D22C242365B929606C191E0A",
      ...(process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION
        ? { "facebook-domain-verification": process.env.NEXT_PUBLIC_FACEBOOK_DOMAIN_VERIFICATION }
        : {}),
    },
  },
  other: {
    // IndexNow Key an public/k9f2m7q4p8j3n6t1r5w2y8b4c7e0a3s6.txt gebunden.
    // Bing + Yandex nutzen den gleichen Key, um Real-Time-Indexing zu triggern.
    "indexnow": "k9f2m7q4p8j3n6t1r5w2y8b4c7e0a3s6",
    "content-language": "de-DE, en-US, fr-FR",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Locale set by middleware (x-locale header). Default to "de" for safety.
  const h = await headers();
  const locale = h.get("x-locale") ?? "de";

  return (
    <html lang={locale}>
      <head>
        <link rel="preload" href="/hero-background.webp" as="image" type="image/webp" fetchPriority="high" />
        <link rel="preconnect" href="https://mission-control.vars-development.com" />
        <link rel="preconnect" href="https://signup.taskeyapp.com" />
        <link rel="preconnect" href="https://taskey.vars-development.com" />
        <link rel="dns-prefetch" href="https://mission-control.vars-development.com" />
        <link rel="dns-prefetch" href="https://signup.taskeyapp.com" />
        <link rel="dns-prefetch" href="https://taskey.vars-development.com" />
        <GlobalStructuredData />
      </head>
      <body className="antialiased">
        <WebVitals />
        <AnalyticsScript />
        {children}
      </body>
    </html>
  );
}
