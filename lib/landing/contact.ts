/**
 * Canonical contact data for Taskey. Single source of truth used by every
 * landing page's UniversalContactBlock and by JSON-LD generation.
 * Sync any changes here with the visible entries in components/Footer.tsx.
 */

export const CONTACT = {
  company: "Taskey",
  legalName: "Schulz & Stosse GbR",
  email: "info@taskeyapp.com",
  phoneDisplay: "+49 151 68488999",
  phoneTel: "+4915168488999",
  whatsappNumber: "4915168488999",
  whatsappUrl: "https://wa.me/4915168488999",
  calendlyUrl: "https://calendly.com/fynn-taskeyapp/new-meeting",
  address: {
    street: "In der Acht 44",
    postal: "66333",
    city: "Völklingen",
    region: "Saarland",
    country: "DE",
  },
  hours: {
    de: "Werktags 08:00 bis 18:00 Uhr",
    en: "Weekdays 08:00 to 18:00 CET",
    fr: "En semaine 08:00 à 18:00 CET",
  },
  supportPromise: {
    de: "Antwort in der Regel am selben Werktag",
    en: "Typically same business day",
    fr: "Généralement le même jour ouvré",
  },
} as const;

export function waWithMessage(message: string): string {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

export function mailtoWithSubject(subject: string, body?: string): string {
  const s = `subject=${encodeURIComponent(subject)}`;
  const b = body ? `&body=${encodeURIComponent(body)}` : "";
  return `mailto:${CONTACT.email}?${s}${b}`;
}

export function calendlyWithUtm(source: string): string {
  const u = new URL(CONTACT.calendlyUrl);
  u.searchParams.set("utm_source", "landing");
  u.searchParams.set("utm_medium", "cta");
  u.searchParams.set("utm_campaign", source);
  return u.toString();
}
