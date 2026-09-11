import type { Metadata } from "next";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const COPY: PageCopy = {
  de: {
    title: "Preise Gebäudereinigungssoftware | Ab 69€/Monat | Taskey",
    description:
      "Transparente Preise für Reinigungssoftware: Beginner ab 69€, Professional ab 179€, Business ab 249€/Monat. Unbegrenzte Mitarbeiter. Jahresvertrag oder monatlich kündbar.",
    ogTitle: "Preise Gebäudereinigungssoftware | Ab 69€/Monat | Taskey",
    ogDescription:
      "Transparente Preise für Reinigungssoftware: Beginner ab 69€, Professional ab 179€, Business ab 249€/Monat. Unbegrenzte Mitarbeiter.",
    twitterTitle: "Preise Gebäudereinigungssoftware | Ab 69€/Monat | Taskey",
    twitterDescription:
      "Beginner ab 69€, Professional ab 179€, Business ab 249€/Monat. Unbegrenzte Mitarbeiter.",
  },
  en: {
    title: "Cleaning software pricing | From €69/month | Taskey",
    description:
      "Transparent pricing for cleaning software: Beginner from €69, Professional from €179, Business from €249/month. Unlimited employees. Annual contract or monthly rolling.",
    ogTitle: "Cleaning software pricing | From €69/month | Taskey",
    ogDescription:
      "Transparent pricing for cleaning software: Beginner from €69, Professional from €179, Business from €249/month. Unlimited employees.",
    twitterTitle: "Cleaning software pricing | From €69/month | Taskey",
    twitterDescription:
      "Beginner from €69, Professional from €179, Business from €249/month. Unlimited employees.",
  },
  fr: {
    title: "Tarifs logiciel de nettoyage | À partir de 69 €/mois | Taskey",
    description:
      "Tarifs transparents pour logiciel de nettoyage : Beginner dès 69 €, Professional dès 179 €, Business dès 249 €/mois. Employés illimités. Contrat annuel ou résiliation mensuelle.",
    ogTitle: "Tarifs logiciel de nettoyage | À partir de 69 €/mois | Taskey",
    ogDescription:
      "Tarifs transparents pour logiciel de nettoyage : Beginner dès 69 €, Professional dès 179 €, Business dès 249 €/mois. Employés illimités.",
    twitterTitle: "Tarifs logiciel de nettoyage | À partir de 69 €/mois | Taskey",
    twitterDescription:
      "Beginner dès 69 €, Professional dès 179 €, Business dès 249 €/mois. Employés illimités.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: COPY,
    locale: pickLocale(locale),
    path: "/pricing",
  });
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
