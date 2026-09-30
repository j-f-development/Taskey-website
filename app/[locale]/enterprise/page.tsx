import type { Metadata } from "next";
import EnterpriseClient from "./enterprise-client";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const path = "/enterprise";

const COPY: PageCopy = {
  de: {
    title:
      "Enterprise-Branchen | Taskey Share für Großkonzerne, Kliniken, Logistik, Handel, Bildung",
    description:
      "Taskey Share bringt manipulationssichere Leistungsnachweise, Live-Status und Reports auf Knopfdruck in Enterprise-Umgebungen: Verkehrsbetriebe, Corporate FM, Kliniken, Logistik, Handelsketten, Bildungseinrichtungen.",
    ogTitle: "Enterprise-Branchen | Taskey Share",
    ogDescription:
      "Manipulationssichere Nachweise, Live-Status und Reports auf Knopfdruck für Enterprise-Umgebungen.",
    twitterTitle: "Enterprise-Branchen | Taskey Share",
    twitterDescription:
      "Für Verkehrsbetriebe, Corporate FM, Kliniken, Logistik, Handel und Bildung.",
  },
  en: {
    title:
      "Enterprise industries | Taskey Share for corporates, hospitals, logistics, retail, education",
    description:
      "Taskey Share brings tamper-proof proof of service, live status and one-click reports into enterprise settings: public transport, corporate FM, hospitals, logistics, retail chains, education.",
    ogTitle: "Enterprise industries | Taskey Share",
    ogDescription:
      "Tamper-proof proof of service, live status and one-click reports for enterprise environments.",
    twitterTitle: "Enterprise industries | Taskey Share",
    twitterDescription:
      "For public transport, corporate FM, hospitals, logistics, retail and education.",
  },
  fr: {
    title:
      "Secteurs Enterprise | Taskey Share pour grands groupes, hôpitaux, logistique, commerce, éducation",
    description:
      "Taskey Share apporte des preuves de service infalsifiables, un statut en direct et des rapports en un clic dans les environnements Enterprise : transports publics, Corporate FM, hôpitaux, logistique, enseignes de commerce, éducation.",
    ogTitle: "Secteurs Enterprise | Taskey Share",
    ogDescription:
      "Preuves de service infalsifiables, statut en direct et rapports en un clic pour les environnements Enterprise.",
    twitterTitle: "Secteurs Enterprise | Taskey Share",
    twitterDescription:
      "Pour transports publics, Corporate FM, hôpitaux, logistique, commerce et éducation.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = pickLocale(locale);
  return buildMetadata({
    copyByLocale: COPY,
    locale: l,
    path,
    type: "article",
  });
}

export default function EnterprisePage() {
  return <EnterpriseClient />;
}
