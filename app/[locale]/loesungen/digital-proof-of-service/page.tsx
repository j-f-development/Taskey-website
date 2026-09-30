import type { Metadata } from "next";
import SolutionPageLayout from "@/components/solutions/SolutionPageLayout";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Digitale Leistungsnachweise · NFC, Foto, Freigabe | Taskey",
    description:
      "Digitale Nachweise für Gebäudereinigung: NFC-Scan im Objekt, Foto, Zeitstempel, Freigabe. Sauber dokumentiert für Auftraggeber und Revision.",
  },
  en: { title: "Digital Proof of Service | Taskey", description: "Digital cleaning proofs." },
  fr: { title: "Preuves de service | Taskey", description: "Preuves numériques." },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ copyByLocale: COPY, locale: pickLocale(locale), path: "/loesungen/digital-proof-of-service" });
}

export default function ProofOfServicePage() {
  return (
    <SolutionPageLayout
      eyebrow="Digitale Nachweise"
      title="Nachweise, die niemand mehr anzweifelt."
      lead="Ein NFC-Chip am Objekt, ein Handy in der Hand, ein Foto zur Dokumentation. Zeit, Ort, Aufgabe und Person landen automatisch im richtigen Auftrag."
      perks={[
        { title: "NFC statt Zettel", body: "Der Chip am Objekt bestätigt die Anwesenheit. Kein Papier, kein Vertippen, keine nachträgliche Rekonstruktion." },
        { title: "Foto-Nachweis", body: "Vor- und Nachher-Fotos direkt zur Aufgabe. Ihr Auftraggeber sieht die Leistung im Detail." },
        { title: "Freigabekette", body: "Objektleitung prüft, Region gibt frei, Zentrale übergibt an Payroll. Alles im selben System." },
        { title: "Auftraggeber-Portal", body: "Ihre Kunden sehen Nachweise selbst in Taskey Share. Kein Anhang-Chaos per E-Mail." },
        { title: "GPS-Prüfung optional", body: "GPS-Check zum Zeitpunkt der Buchung, nicht als Dauerüberwachung. Betriebsrat-freundlich." },
        { title: "Offline-fähig", body: "Kellern, Tiefgaragen, Rohbauten. Alle Daten werden lokal gespeichert und später synchronisiert." },
      ]}
      fit={[
        { headline: "Ihr Auftraggeber verlangt Nachweise, die nicht auf Vertrauen basieren.", body: "Klassische Berichte werden angezweifelt. Sie brauchen manipulationssichere Belege für jedes Objekt." },
        { headline: "Ihre Kolonnen dokumentieren auf Papier oder Whatsapp.", body: "Zettel gehen verloren, Bilder liegen in 15 verschiedenen Chats. Die zentrale Ablage fehlt." },
        { headline: "Sie wollen Streitfälle mit Auftraggebern früh entschärfen.", body: "Reklamationen werden mit Foto und Zeitstempel unterlegt. Diskussionen werden kurz." },
      ]}
      cta={{
        primaryLabel: "Kostenlos starten",
        primaryHref: "https://signup.taskeyapp.com",
        secondaryLabel: "Taskey Share ansehen",
        secondaryHref: "/#taskey-share",
      }}
    />
  );
}
