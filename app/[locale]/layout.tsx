import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { LanguageProvider } from "@/context/LanguageContext";
import { notFound } from "next/navigation";

const SUPPORTED = ["de", "en", "fr"] as const;
type SupportedLocale = (typeof SUPPORTED)[number];

export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!SUPPORTED.includes(locale as SupportedLocale)) {
    notFound();
  }

  return (
    <LanguageProvider initialLanguage={locale as SupportedLocale}>
      <Header />
      <main style={{ paddingTop: 80 }}>{children}</main>
      <Footer />
      <CookieConsent />
    </LanguageProvider>
  );
}
