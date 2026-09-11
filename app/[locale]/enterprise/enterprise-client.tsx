"use client";

import Link from "@/components/LocaleLink";
import { useLanguage } from "@/context/LanguageContext";

type Sector = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  bullets: string[];
  ctaLabel: string;
  href?: string;
};

type Copy = {
  breadcrumbAria: string;
  crumbHome: string;
  crumbCurrent: string;
  eyebrow: string;
  h1Line1: string;
  h1Line2Muted: string;
  lead: string;
  intro: string;
  sectorsIntro: string;
  sectors: Sector[];
  ctaTitle: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

const CONTENT: Record<"de" | "en" | "fr", Copy> = {
  de: {
    breadcrumbAria: "Breadcrumb",
    crumbHome: "Home",
    crumbCurrent: "Enterprise-Branchen",
    eyebrow: "Taskey Share · Enterprise",
    h1Line1: "Enterprise-Branchen.",
    h1Line2Muted: "Ein Nachweis, alle Standorte.",
    lead: "Taskey Share ist der Enterprise-Baustein von Taskey. Große Auftraggeber sehen ihre Objekte und Standorte in Echtzeit, ohne dass jemand anrufen, mailen oder Excel öffnen muss. Nachweise sind manipulationssicher an Ort, Zeit und Person gebunden, Reports laufen auf Knopfdruck. DSGVO-konform, Server in Deutschland, mit SSO, SLA und Rollen bis auf Standort-Ebene.",
    intro:
      "Für welche Branche das relevant ist? Überall dort, wo tausende Standorte, mehrere Dienstleister und ein zentraler Auftraggeber zusammenarbeiten. Wählen Sie Ihre Branche.",
    sectorsIntro: "Sechs Enterprise-Zielgruppen, ein gemeinsamer Standard.",
    sectors: [
      {
        id: "oepnv",
        eyebrow: "Verkehr",
        title: "ÖPNV & Verkehrsbetriebe",
        intro:
          "Bahnhöfe, U- und S-Bahn-Stationen, Bushöfe, Betriebshöfe. Manipulationssichere Nachweise pro Bahnsteig und Reinigungsintervall, Ticket-Funktion für Mängel, Reports pro Anlage.",
        bullets: [
          "NFC-Tap pro Bahnhof, Bereich oder Bahnsteig",
          "Plan-vs.-Ist mit Ampelfarbe je Station",
          "Ticket-Funktion für Fahrgast-Beschwerden",
          "Audit-Trail für nachträgliche Änderungen",
        ],
        ctaLabel: "Details zu ÖPNV",
        href: "/enterprise",
      },
      {
        id: "grosskonzerne",
        eyebrow: "Corporate FM",
        title: "Großkonzerne & Corporate FM",
        intro:
          "Konzernzentralen, Werke, Verwaltungsgebäude, Rechenzentren. Ein einheitlicher Nachweis-Standard über alle Standorte, unabhängig davon, welche Dienstleister eingesetzt werden.",
        bullets: [
          "Standort-Rollen für interne FM-Verantwortliche",
          "Multi-Dienstleister-fähig in derselben Ansicht",
          "SLA-Report je Standort und je Vertrag",
          "SSO über Konzern-IdP (SAML, OIDC)",
        ],
        ctaLabel: "Enterprise-Kontakt",
      },
      {
        id: "kliniken",
        eyebrow: "Gesundheit",
        title: "Kliniken & Gesundheitswesen",
        intro:
          "Krankenhäuser, Pflegeeinrichtungen, Reinräume, MVZ. Hygienenachweis pro Raum, Frequenzen und Sichtprüfungen dokumentiert, vorbereitet für Audits nach HACCP und RKI.",
        bullets: [
          "Hygienenachweis mit Vorher-Nachher-Foto",
          "Zonen- und Raumkategorien mit Frequenz-Vorgabe",
          "Auditvorbereitung ohne händisches Sammeln",
          "Rechteverwaltung getrennt nach Station",
        ],
        ctaLabel: "Enterprise-Kontakt",
      },
      {
        id: "logistik",
        eyebrow: "Logistik",
        title: "Logistik & Distribution",
        intro:
          "Lager, Hubs, Verteilzentren, Cross-Docks. Reinigungsnachweise pro Halle und Schicht, Sichtprüfungen auf Sauberkeit, direkte Ticket-Funktion für Mängel im laufenden Betrieb.",
        bullets: [
          "Schichtabgleich Früh, Spät, Nacht",
          "Sichtprüfungen mit Foto-Pflicht",
          "Mängel-Ticket mit Frist und Zuständigem",
          "Reports pro Halle und Vertragspartner",
        ],
        ctaLabel: "Enterprise-Kontakt",
      },
      {
        id: "handel",
        eyebrow: "Retail",
        title: "Handelsketten & Filialnetze",
        intro:
          "Filialen, Märkte, Shop-in-Shop-Flächen. Ein einheitlicher Reinigungs-Standard über hunderte Standorte, Bewertung durch die jeweilige Filialleitung direkt in der App.",
        bullets: [
          "Standardisierte Checklisten je Filialtyp",
          "Filialleitung-Bewertung mit Kommentar",
          "Cluster-Reports (Region, Land, Marke)",
          "Rollout in wenigen Tagen pro Region",
        ],
        ctaLabel: "Enterprise-Kontakt",
      },
      {
        id: "bildung",
        eyebrow: "Öffentliche Hand",
        title: "Bildung & öffentliche Hand",
        intro:
          "Schulen, Kitas, Universitäten, Behörden. Nachweise für Reinigungsverträge nach VOL, Reports für die Kämmerei, Aufsicht durch Träger und Rektorat mit eigenen Rollen.",
        bullets: [
          "Vergabe- und VOL-taugliche Nachweise",
          "Rollen für Träger, Schule, Dienstleister",
          "Report-Layout an Behörden-Vorgaben",
          "Vertrags- und Objekt-Ansicht getrennt",
        ],
        ctaLabel: "Enterprise-Kontakt",
      },
    ],
    ctaTitle: "Enterprise-Kontakt.",
    ctaBody:
      "Sie planen ein Vergabeverfahren, eine Marktanalyse oder wollen Taskey Share auf einem Standort testen? Wir bereiten technische Unterlagen, Referenzangaben und ein individuelles Konzept vor.",
    ctaPrimary: "Enterprise-Kontakt anfragen",
    ctaSecondary: "Alle Funktionen ansehen",
  },
  en: {
    breadcrumbAria: "Breadcrumb",
    crumbHome: "Home",
    crumbCurrent: "Enterprise industries",
    eyebrow: "Taskey Share · Enterprise",
    h1Line1: "Enterprise industries.",
    h1Line2Muted: "One proof, every site.",
    lead: "Taskey Share is the enterprise layer of Taskey. Large clients see their sites and locations in real time, without anyone having to call, email or open Excel. Proof of service is tamper-proof and bound to place, time and person, reports run at the push of a button. GDPR-compliant, servers in Germany, with SSO, SLA and roles down to site level.",
    intro:
      "For which industry is this relevant? Anywhere thousands of sites, several service providers and a central client work together. Choose your industry.",
    sectorsIntro: "Six enterprise target groups, one shared standard.",
    sectors: [
      {
        id: "oepnv",
        eyebrow: "Transit",
        title: "Public Transport & Transit",
        intro:
          "Stations, metro and commuter stops, bus depots, operating yards. Tamper-proof proof of service per platform and cleaning interval, ticket function for defects, reports per site.",
        bullets: [
          "NFC tap per station, area or platform",
          "Plan vs. actual with traffic light per station",
          "Ticket function for passenger complaints",
          "Audit trail for after-the-fact changes",
        ],
        ctaLabel: "Details for Public Transport",
        href: "/enterprise",
      },
      {
        id: "grosskonzerne",
        eyebrow: "Corporate FM",
        title: "Corporates & Corporate FM",
        intro:
          "Corporate headquarters, plants, admin buildings, data centres. A unified proof-of-service standard across every site, regardless of which service providers are engaged.",
        bullets: [
          "Site-level roles for internal FM leads",
          "Multi-provider ready in one view",
          "SLA report per site and per contract",
          "SSO via corporate IdP (SAML, OIDC)",
        ],
        ctaLabel: "Enterprise contact",
      },
      {
        id: "kliniken",
        eyebrow: "Healthcare",
        title: "Hospitals & Healthcare",
        intro:
          "Hospitals, care homes, clean rooms, MVZs. Hygiene proof per room, frequencies and visual checks documented, ready for HACCP and RKI audits.",
        bullets: [
          "Hygiene proof with before-and-after photo",
          "Zone and room categories with frequency targets",
          "Audit prep without manual collection",
          "Permissions separated per ward",
        ],
        ctaLabel: "Enterprise contact",
      },
      {
        id: "logistik",
        eyebrow: "Logistics",
        title: "Logistics & Distribution",
        intro:
          "Warehouses, hubs, distribution centres, cross docks. Cleaning proof per hall and shift, cleanliness inspections, direct ticket function for defects during operations.",
        bullets: [
          "Shift comparison across morning, day and night",
          "Visual checks with mandatory photo",
          "Defect ticket with deadline and owner",
          "Reports per hall and contract partner",
        ],
        ctaLabel: "Enterprise contact",
      },
      {
        id: "handel",
        eyebrow: "Retail",
        title: "Retail chains & Store networks",
        intro:
          "Stores, outlets, shop-in-shop areas. A unified cleaning standard across hundreds of locations, rated by the local store manager directly in the app.",
        bullets: [
          "Standardised checklists per store type",
          "Store manager rating with comment",
          "Cluster reports (region, country, brand)",
          "Rollout in a few days per region",
        ],
        ctaLabel: "Enterprise contact",
      },
      {
        id: "bildung",
        eyebrow: "Public sector",
        title: "Education & Public sector",
        intro:
          "Schools, day-care, universities, agencies. Proof of service for cleaning contracts under public procurement, reports for the finance office, oversight via provider, principal and their own roles.",
        bullets: [
          "Procurement-ready proof of service",
          "Roles for provider, school, contractor",
          "Report layout matching agency requirements",
          "Contract and site views separated",
        ],
        ctaLabel: "Enterprise contact",
      },
    ],
    ctaTitle: "Enterprise contact.",
    ctaBody:
      "Planning a tender, a market study, or a Taskey Share pilot on one site? We prepare technical documents, references and a tailored concept.",
    ctaPrimary: "Request enterprise contact",
    ctaSecondary: "See all features",
  },
  fr: {
    breadcrumbAria: "Fil d’Ariane",
    crumbHome: "Accueil",
    crumbCurrent: "Secteurs Enterprise",
    eyebrow: "Taskey Share · Enterprise",
    h1Line1: "Secteurs Enterprise.",
    h1Line2Muted: "Une preuve, tous les sites.",
    lead: "Taskey Share est la brique Enterprise de Taskey. Les grands donneurs d’ordre voient leurs sites en temps réel, sans que personne n’ait à téléphoner, envoyer un mail ou ouvrir Excel. Les preuves de service sont infalsifiables et attachées au lieu, à l’instant et à la personne, les rapports partent en un clic. Conforme RGPD, serveurs en Allemagne, avec SSO, SLA et rôles jusqu’au site.",
    intro:
      "Pour quel secteur est-ce pertinent ? Partout où des milliers de sites, plusieurs prestataires et un donneur d’ordre central travaillent ensemble. Choisissez votre secteur.",
    sectorsIntro: "Six cibles Enterprise, un standard commun.",
    sectors: [
      {
        id: "oepnv",
        eyebrow: "Transport",
        title: "Transports publics & réseaux",
        intro:
          "Gares, stations de métro et de RER, dépôts de bus, dépôts d’exploitation. Preuves infalsifiables par quai et par cycle de nettoyage, fonction ticket pour anomalies, rapports par site.",
        bullets: [
          "Tap NFC par gare, zone ou quai",
          "Planifié vs. réel avec code couleur par station",
          "Fonction ticket pour réclamations voyageurs",
          "Piste d’audit pour modifications a posteriori",
        ],
        ctaLabel: "Détails Transports publics",
        href: "/enterprise",
      },
      {
        id: "grosskonzerne",
        eyebrow: "Corporate FM",
        title: "Grands groupes & Corporate FM",
        intro:
          "Sièges, usines, immeubles administratifs, data centres. Un standard de preuve unifié sur tous les sites, quel que soit le prestataire retenu.",
        bullets: [
          "Rôles au niveau site pour le FM interne",
          "Multi-prestataires dans une seule vue",
          "Rapport SLA par site et par contrat",
          "SSO via IdP du groupe (SAML, OIDC)",
        ],
        ctaLabel: "Contact Enterprise",
      },
      {
        id: "kliniken",
        eyebrow: "Santé",
        title: "Hôpitaux & santé",
        intro:
          "Hôpitaux, EHPAD, salles blanches, centres de santé. Preuve d’hygiène par salle, fréquences et contrôles visuels documentés, prêts pour audits HACCP et RKI.",
        bullets: [
          "Preuve d’hygiène avec photo avant / après",
          "Zones et catégories de salle avec fréquence cible",
          "Préparation d’audit sans collecte manuelle",
          "Droits séparés par service",
        ],
        ctaLabel: "Contact Enterprise",
      },
      {
        id: "logistik",
        eyebrow: "Logistique",
        title: "Logistique & distribution",
        intro:
          "Entrepôts, hubs, centres de distribution, cross-docks. Preuves de nettoyage par halle et par vacation, contrôles visuels de propreté, fonction ticket directe pour anomalies en exploitation.",
        bullets: [
          "Comparaison vacations matin, jour, nuit",
          "Contrôles visuels avec photo obligatoire",
          "Ticket anomalie avec échéance et responsable",
          "Rapports par halle et par partenaire",
        ],
        ctaLabel: "Contact Enterprise",
      },
      {
        id: "handel",
        eyebrow: "Retail",
        title: "Enseignes de commerce & réseaux",
        intro:
          "Magasins, points de vente, corners. Un standard de propreté unifié sur des centaines de sites, noté par le responsable de magasin directement dans l’app.",
        bullets: [
          "Checklists standardisées par type de magasin",
          "Notation du responsable avec commentaire",
          "Rapports par cluster (région, pays, enseigne)",
          "Déploiement en quelques jours par région",
        ],
        ctaLabel: "Contact Enterprise",
      },
      {
        id: "bildung",
        eyebrow: "Secteur public",
        title: "Éducation & secteur public",
        intro:
          "Écoles, crèches, universités, administrations. Preuves de service pour contrats publics, rapports pour la trésorerie, supervision par la collectivité, la direction et leurs rôles dédiés.",
        bullets: [
          "Preuves conformes aux marchés publics",
          "Rôles pour collectivité, école, prestataire",
          "Rapports au format exigé par l’administration",
          "Vues contrat et site séparées",
        ],
        ctaLabel: "Contact Enterprise",
      },
    ],
    ctaTitle: "Contact Enterprise.",
    ctaBody:
      "Vous préparez un appel d’offres, une étude de marché ou un pilote Taskey Share sur un site ? Nous préparons les documents techniques, des références et un concept sur mesure.",
    ctaPrimary: "Demander un contact Enterprise",
    ctaSecondary: "Voir toutes les fonctionnalités",
  },
};

export default function EnterpriseClient() {
  const { language } = useLanguage();
  const c = CONTENT[language];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[800px] h-[600px] bg-cyan-500/12 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative pt-32 md:pt-40 pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label={c.breadcrumbAria} className="mb-8 text-xs sm:text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-slate-900 transition">
                  {c.crumbHome}
                </Link>
              </li>
              <li aria-hidden>›</li>
              <li className="text-slate-800 font-medium">{c.crumbCurrent}</li>
            </ol>
          </nav>

          <p className="text-[10px] sm:text-xs font-black tracking-[0.3em] uppercase text-blue-700 mb-4">
            {c.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.02] tracking-tight mb-6 text-slate-900">
            {c.h1Line1}
            <br />
            <span className="text-slate-500">{c.h1Line2Muted}</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl">
            {c.lead}
          </p>
          <p className="mt-6 text-base text-slate-500 max-w-3xl">{c.intro}</p>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm sm:text-base font-semibold text-slate-700 mb-8">
            {c.sectorsIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {c.sectors.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="group relative rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 p-6 transition-all hover:border-slate-300 overflow-hidden flex flex-col scroll-mt-28"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <div className="relative flex flex-col h-full">
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-blue-700 mb-3">
                    {s.eyebrow}
                  </p>
                  <h2 className="text-xl font-black text-slate-900 leading-tight mb-3">
                    {s.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">
                    {s.intro}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span
                          aria-hidden
                          className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  {s.href ? (
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-600 transition"
                    >
                      {s.ctaLabel}
                      <span aria-hidden>→</span>
                    </Link>
                  ) : (
                    <a
                      href="mailto:info@taskeyapp.com?subject=Enterprise-Anfrage"
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-600 transition"
                    >
                      {s.ctaLabel}
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] bg-gradient-to-br from-white to-slate-50 border border-slate-200/60 p-8 md:p-12 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-cyan-50 rounded-full blur-3xl pointer-events-none" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight mb-4">
                {c.ctaTitle}
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
                {c.ctaBody}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:info@taskeyapp.com?subject=Enterprise-Anfrage"
                  className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-500 transition-colors text-base text-center"
                >
                  {c.ctaPrimary}
                </a>
                <Link
                  href="/features"
                  className="px-8 py-3.5 border border-slate-300 text-slate-900 font-bold rounded-full hover:bg-blue-100 transition-colors text-base text-center"
                >
                  {c.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
