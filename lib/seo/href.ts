import type { Locale } from "@/lib/i18n-metadata";

/**
 * Locale-korrekte Href. DE bleibt auf Root, EN/FR bekommen ihr Präfix.
 * Passt zur Konvention in Header/Footer und den bestehenden Feature-Landings.
 */
export function lhref(locale: Locale, href: string): string {
  if (href === "/") return locale === "de" ? "/" : `/${locale}`;
  if (locale === "de") return href;
  return `/${locale}${href}`;
}

export function absoluteUrl(locale: Locale, href: string): string {
  const base = "https://www.taskeyapp.com";
  return `${base}${lhref(locale, href)}`;
}
