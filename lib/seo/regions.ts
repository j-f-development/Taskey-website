/**
 * Geo-Silo für /reinigungssoftware/[stadt].
 *
 * Zwei Tiers:
 *   top      → indexable, Unique-Content (economy, topIndustries, localFact),
 *              hohe Sitemap-Priorität, wird aus Home/Hubs verlinkt.
 *   extended → noindex, follow, generisches Copy-Pattern, dient als
 *              Verlinkungsziel für nearbyCities auf Top-Tier-Städten.
 *
 * KEINE erfundenen Zahlen (Marktgrößen, Reinigungsflächen, Betriebszahlen).
 * Wirtschaftskontext bleibt qualitativ, damit die Aussagen tragen.
 */

import type { Locale } from "@/lib/i18n-metadata";
import type { Tier } from "./helpers";

export type RegionCopy = {
  intro: string;
  paragraphs: string[];
  economy?: string;
  topIndustries?: string[];
  localFact?: string;
  microCase?: string;
};

export type Region = {
  slug: string;
  city: string;
  region: string;
  country: "DE" | "AT" | "CH";
  lat: number;
  lng: number;
  tier: Tier;
  nearbyCities: string[];
  indexable?: boolean;
  copy: Record<Locale, RegionCopy>;
};

const emptyExtendedCopy = (city: string): Record<Locale, RegionCopy> => ({
  de: {
    intro: `Taskey unterstützt Reinigungs- und Facility-Management-Betriebe in ${city}. Von der Tourenplanung bis zum digitalen Objektnachweis. Made in Germany, DSGVO konform.`,
    paragraphs: [
      `Wenn Sie in ${city} einen Reinigungs- oder FM-Betrieb führen, kennen Sie den Alltag: Personalengpässe, Papiernachweise, verstreute Excel-Dateien. Taskey bündelt Einsatzplanung, NFC-Zeiterfassung, Leistungsnachweis und Kalkulation in einer App.`,
      `Für die Umstellung reichen die Objekte, Kunden und Mitarbeitenden aus Ihrer bestehenden Struktur. Self-Service in unter zehn Minuten, alternativ Done-for-You-Setup in 48 Stunden.`,
    ],
  },
  en: {
    intro: `Taskey supports cleaning and facility management operators in ${city}. From route planning to digital proof of service. Made in Germany, GDPR compliant.`,
    paragraphs: [
      `Running a cleaning or FM business in ${city} means the same day-to-day: staff gaps, paper proofs, spreadsheets. Taskey consolidates route planning, NFC time tracking, proof of service and pricing into one app.`,
      `Migrating takes the sites, clients and staff from your current setup. Self-service in under ten minutes, or done-for-you setup in 48 hours.`,
    ],
  },
  fr: {
    intro: `Taskey accompagne les entreprises de nettoyage et de facility management à ${city}. De la planification à la preuve numérique. Conçu en Allemagne, conforme RGPD.`,
    paragraphs: [
      `Piloter une entreprise de nettoyage ou de FM à ${city}, c’est le même quotidien : effectifs tendus, preuves papier, Excel éparpillé. Taskey réunit planification, pointage NFC, preuve de service et chiffrage.`,
      `La migration part de vos sites, clients et collaborateurs actuels. Self-service en moins de dix minutes, ou setup accompagné en 48 heures.`,
    ],
  },
});

export const regions: Region[] = [
  {
    slug: "berlin",
    city: "Berlin",
    region: "Berlin",
    country: "DE",
    lat: 52.52,
    lng: 13.405,
    tier: "top",
    nearbyCities: ["potsdam", "leipzig", "hamburg"],
    copy: {
      de: {
        intro:
          "Reinigungs- und FM-Betriebe in Berlin arbeiten in einem der dichtesten Objektmärkte Europas. Taskey bündelt Planung, Nachweis und Marge in einer App, damit Sie den Alltag zwischen Büroturm, Klinik und Wohnanlage in einem Prozess steuern.",
        paragraphs: [
          "In Berlin liegen Bürocluster, öffentliche Verwaltung, Klinikbetriebe und ein wachsender Startup-Sektor auf engem Raum. Reinigungsbetriebe wechseln oft im Stundenrhythmus zwischen sehr unterschiedlichen Objekttypen. Wer das mit Excel steuert, verliert.",
          "Taskey liefert Objektstruktur, Kolonnenplanung und Leistungsnachweis in einer App, die auch offline im Kellerraum funktioniert. Ihr Auftraggeber im Bezirksamt sieht denselben Nachweis wie der Center-Manager am Alexanderplatz.",
        ],
        economy:
          "Berlin ist Bundeshauptstadt und größte deutsche Stadt. Der Mix aus Verwaltung, Klinik, Handel und Kultur erzeugt eine Objektlandschaft, die dauerhaft Reinigungskapazität bindet.",
        topIndustries: ["Öffentliche Verwaltung", "Klinikreinigung", "Bürodienstleister", "Hotel-Housekeeping"],
        localFact:
          "Die Vielzahl an Bezirksverwaltungen und Landesbehörden schafft laufend Vergabeverfahren mit strengen Dokumentationspflichten.",
      },
      en: {
        intro:
          "Cleaning and FM operators in Berlin work in one of Europe’s densest site markets. Taskey combines planning, proof and margin in one app so you can move between office tower, clinic and housing block in one process.",
        paragraphs: [
          "Berlin concentrates office clusters, public administration, clinical sites and a growing startup sector in a small radius. Cleaning operators switch site types on the hour. Spreadsheets do not scale here.",
          "Taskey delivers site structure, crew planning and proof of service in one app that still works offline in a basement. The client at the district authority sees the same proof as the center manager at Alexanderplatz.",
        ],
        economy:
          "Berlin is Germany’s capital and largest city. The mix of administration, clinical, retail and cultural sites keeps cleaning capacity in constant demand.",
        topIndustries: ["Public administration", "Clinical cleaning", "Office services", "Hotel housekeeping"],
        localFact:
          "The scale of district and state-level authorities creates a constant flow of tenders with strict documentation requirements.",
      },
      fr: {
        intro:
          "Les entreprises de nettoyage et de FM à Berlin opèrent dans l’un des marchés les plus denses d’Europe. Taskey réunit planification, preuve et marge dans une application pour piloter tour de bureau, clinique et immeuble dans un même processus.",
        paragraphs: [
          "Berlin concentre bureaux, administrations publiques, sites cliniques et un secteur startup en pleine croissance sur un rayon serré. Excel n’y passe pas à l’échelle.",
          "Taskey livre structure de sites, planification d’équipes et preuve de service dans une application qui fonctionne aussi hors ligne. Le client de l’arrondissement voit la même preuve que le gestionnaire du centre.",
        ],
        economy:
          "Berlin est la capitale et la plus grande ville d’Allemagne. Le mix administration, clinique, commerce et culture entretient une demande soutenue.",
        topIndustries: ["Administration publique", "Nettoyage clinique", "Services de bureaux", "Housekeeping hôtelier"],
        localFact:
          "La densité d’administrations d’arrondissement et régionales génère des marchés publics récurrents avec exigences de documentation strictes.",
      },
    },
  },
  {
    slug: "muenchen",
    city: "München",
    region: "Bayern",
    country: "DE",
    lat: 48.1351,
    lng: 11.582,
    tier: "top",
    nearbyCities: ["nuernberg", "augsburg", "regensburg"],
    copy: {
      de: {
        intro:
          "In München laufen Konzernzentralen, Hochschulmedizin und Premiumhotellerie auf hohem Anspruch. Taskey bringt Reinigungsbetriebe in eine Prozessqualität, die zu diesen Auftraggebern passt.",
        paragraphs: [
          "Der Münchner Objektmarkt reagiert empfindlich auf Nachweislücken. Konzerne verlangen digitalisierte Prozesse, Kliniken erwarten dokumentierte Sequenzen, Hotels benötigen Zimmerstatus in Echtzeit. Taskey liefert alle drei Ebenen aus einer Oberfläche.",
          "Wer als Reinigungs- oder FM-Anbieter in München wachsen will, konkurriert nicht mehr über Stundenpreis, sondern über Dokumentationsqualität. Genau hier setzt Taskey an.",
        ],
        economy:
          "München ist Sitz zahlreicher deutscher und internationaler Konzerne, gepaart mit einem starken Wissenschafts- und Klinikcluster.",
        topIndustries: ["Konzernbüros", "Universitätskliniken", "Premiumhotellerie", "Automotive"],
        localFact:
          "Konzernvergaben in München fordern zunehmend digitale Nachweise als Ausschlusskriterium.",
      },
      en: {
        intro:
          "Munich mixes corporate headquarters, academic medicine and premium hospitality on a high bar. Taskey lifts cleaning operators to a process quality that fits these clients.",
        paragraphs: [
          "The Munich site market is sensitive to documentation gaps. Corporates require digital processes, clinics expect documented sequences, hotels need live room status. Taskey delivers all three from one interface.",
          "Growing as a cleaning or FM provider in Munich no longer competes on hourly rate. It competes on documentation quality. Taskey is built for that.",
        ],
        economy:
          "Munich hosts many German and international corporate HQs alongside a strong science and clinical cluster.",
        topIndustries: ["Corporate offices", "University clinics", "Premium hospitality", "Automotive"],
        localFact:
          "Tenders in Munich increasingly treat digital proof of service as a hard requirement.",
      },
      fr: {
        intro:
          "Munich combine sièges corporate, médecine académique et hôtellerie premium à un niveau d’exigence élevé. Taskey hisse les opérateurs de nettoyage à la qualité de processus attendue par ces clients.",
        paragraphs: [
          "Le marché munichois est sensible aux lacunes de documentation. Les grands comptes exigent des processus numériques, les cliniques attendent des séquences documentées, les hôtels un statut chambre en direct. Taskey livre les trois depuis une interface.",
          "À Munich, croître en tant que prestataire ne se joue plus au taux horaire. Cela se joue sur la qualité de la preuve. Taskey est conçu pour cela.",
        ],
        economy:
          "Munich héberge de nombreux sièges allemands et internationaux, avec un cluster scientifique et clinique fort.",
        topIndustries: ["Bureaux corporate", "Cliniques universitaires", "Hôtellerie premium", "Automotive"],
        localFact:
          "Les appels d’offres à Munich exigent de plus en plus une preuve numérique comme critère éliminatoire.",
      },
    },
  },
  {
    slug: "hamburg",
    city: "Hamburg",
    region: "Hamburg",
    country: "DE",
    lat: 53.5511,
    lng: 9.9937,
    tier: "top",
    nearbyCities: ["bremen", "hannover", "berlin"],
    copy: {
      de: {
        intro:
          "Hamburg ist Hafen, Handel und Medien. Für Reinigungs- und FM-Betriebe bedeutet das Industrie, Büro und Sonderreinigung nebeneinander. Taskey liefert die Struktur, damit dieselbe Belegschaft in verschiedenen Objekttypen konsistent arbeitet.",
        paragraphs: [
          "Zwischen Hafenanlagen, Verwaltungsgebäuden und Medienhäusern arbeiten Hamburger Betriebe in Objekttypen mit sehr unterschiedlichen Anforderungen. Wer diese Vielfalt manuell steuert, verbrennt Zeit. Taskey macht Objekttypen zu Vorlagen.",
          "Die NFC-basierte Anwesenheit hilft besonders in Hafen- und Industrieobjekten, wo GPS keine sinnvollen Werte liefert.",
        ],
        economy:
          "Hamburg ist die zweitgrößte Stadt Deutschlands mit einem der bedeutendsten Häfen Europas.",
        topIndustries: ["Hafen und Logistik", "Verwaltung", "Medien", "Industriereinigung"],
        localFact:
          "Hafenbezogene Reinigungsaufträge fordern häufig Schichtbetrieb mit lückenlosem Nachweis.",
      },
      en: {
        intro:
          "Hamburg is port, trade and media. For cleaning and FM operators that means industrial, office and specialty sites side by side. Taskey provides the structure so one workforce delivers consistently across types.",
        paragraphs: [
          "Between port sites, administrative buildings and media buildings, Hamburg operators run very different requirements. Manual steering burns time. Taskey turns site types into templates.",
          "NFC presence helps especially in port and industrial sites where GPS gives no useful values.",
        ],
        economy:
          "Hamburg is Germany’s second-largest city and hosts one of Europe’s major ports.",
        topIndustries: ["Ports and logistics", "Public administration", "Media", "Industrial cleaning"],
        localFact:
          "Port-related contracts typically require shift operations with continuous proof of service.",
      },
      fr: {
        intro:
          "Hambourg, c’est le port, le commerce et les médias. Pour les prestataires, cela signifie industrie, bureaux et spécialités côte à côte. Taskey fournit la structure pour qu’une même équipe livre partout avec la même qualité.",
        paragraphs: [
          "Entre installations portuaires, bâtiments administratifs et sièges médias, les opérateurs hambourgeois affrontent des exigences très différentes. La conduite manuelle brûle du temps. Taskey transforme les types de sites en modèles.",
          "Le pointage NFC est particulièrement utile dans les sites portuaires et industriels où le GPS ne donne rien d’utile.",
        ],
        economy:
          "Hambourg est la deuxième plus grande ville d’Allemagne et abrite l’un des ports majeurs d’Europe.",
        topIndustries: ["Ports et logistique", "Administration publique", "Médias", "Nettoyage industriel"],
        localFact:
          "Les contrats portuaires impliquent souvent des rotations avec preuve de service continue.",
      },
    },
  },
  {
    slug: "koeln",
    city: "Köln",
    region: "Nordrhein-Westfalen",
    country: "DE",
    lat: 50.9375,
    lng: 6.9603,
    tier: "top",
    nearbyCities: ["duesseldorf", "bonn", "leverkusen"],
    copy: {
      de: {
        intro:
          "Köln lebt von Handel, Messewesen und Kultur. Für Reinigungs- und FM-Betriebe bedeutet das Objekte mit hoher Publikumsfrequenz. Taskey macht die Nachweisführung schnell genug für diesen Betrieb.",
        paragraphs: [
          "Kölner Objekte sind selten leer. Wer als Betrieb hier arbeitet, muss Reinigungszyklen in laufenden Betrieb einweben. Taskey liefert Live-Status, damit Ihre Kunden sehen, was wann gemacht wurde, ohne rückzufragen.",
          "Rheinland-typisch: Auftraggeber verlangen kurze Kommunikationswege. Das Auftraggeber-Portal von Taskey löst genau das.",
        ],
        economy:
          "Köln ist Deutschlands viertgrößte Stadt und ein wichtiger Messe- und Medienstandort.",
        topIndustries: ["Messe", "Medien", "Handel", "Verwaltung"],
        localFact:
          "Messehallen bündeln in Peak-Perioden Reinigungsleistung mit hohem Tempo und dichter Dokumentationspflicht.",
      },
      en: {
        intro:
          "Cologne runs on trade, exhibitions and culture. For cleaning and FM operators that means high-footfall sites. Taskey keeps proof-of-service fast enough for that pace.",
        paragraphs: [
          "Cologne sites are rarely empty. Operators here weave cleaning cycles into live operations. Taskey delivers live status so clients see what happened when, without asking.",
          "Rhineland-style: clients want short communication paths. The Taskey client portal is built exactly for that.",
        ],
        economy:
          "Cologne is Germany’s fourth-largest city and a major exhibition and media hub.",
        topIndustries: ["Exhibitions", "Media", "Retail", "Administration"],
        localFact:
          "Exhibition halls bundle high-tempo cleaning with dense documentation requirements during peak weeks.",
      },
      fr: {
        intro:
          "Cologne vit du commerce, des salons et de la culture. Pour les prestataires, cela signifie des sites à forte fréquentation. Taskey rend la preuve rapide à ce rythme.",
        paragraphs: [
          "Les sites cologne sont rarement vides. Les prestataires y intègrent les cycles de nettoyage à l’exploitation vivante. Taskey livre le statut en direct pour que les clients voient sans redemander.",
          "Style Rhénanie : les clients veulent des circuits courts. Le portail Taskey y répond.",
        ],
        economy:
          "Cologne est la quatrième plus grande ville d’Allemagne, place forte des salons et médias.",
        topIndustries: ["Salons", "Médias", "Commerce", "Administration"],
        localFact:
          "Les halls d’exposition concentrent en périodes de pointe un nettoyage rapide et une documentation dense.",
      },
    },
  },
  {
    slug: "frankfurt",
    city: "Frankfurt am Main",
    region: "Hessen",
    country: "DE",
    lat: 50.1109,
    lng: 8.6821,
    tier: "top",
    nearbyCities: ["wiesbaden", "mainz", "darmstadt"],
    copy: {
      de: {
        intro:
          "Frankfurt ist Banken- und Konzernstadt mit einem der höchsten Bürodichten Europas. Reinigungs- und FM-Anbieter, die hier bestehen wollen, brauchen professionalisierte Prozesse. Taskey liefert sie.",
        paragraphs: [
          "Bankentürme fordern Uhrzeit-genaue Nachweise. Kanzleien wollen wissen, wer wann Zugang hatte. Rechenzentren erwarten Freigabestände. Taskey bildet all das mit Standardfunktionen ab.",
          "Der Flughafen Frankfurt und sein Umfeld erzeugen einen konstanten Bedarf an Sonderreinigungsdienstleistungen.",
        ],
        economy:
          "Frankfurt ist Finanzmetropole mit hoher Konzentration internationaler Konzerne und Institutionen.",
        topIndustries: ["Banken", "Kanzleien", "Rechenzentren", "Flughafen-Umfeld"],
        localFact:
          "Hohe Sicherheitsanforderungen in Bankengebäuden erhöhen den Bedarf an digitalen Zugangs- und Nachweisketten.",
      },
      en: {
        intro:
          "Frankfurt is banking and corporate territory with one of Europe’s highest office densities. Cleaning and FM providers who want to hold ground here need professional processes. Taskey delivers them.",
        paragraphs: [
          "Bank towers demand minute-accurate proof. Law firms want to know who had access when. Data centers expect release states. Taskey covers all of it with standard features.",
          "Frankfurt airport and its ecosystem generate a constant demand for specialty cleaning services.",
        ],
        economy:
          "Frankfurt is a financial hub with a high concentration of international corporates and institutions.",
        topIndustries: ["Banks", "Law firms", "Data centers", "Airport ecosystem"],
        localFact:
          "Security requirements in bank buildings raise the need for digital access and proof chains.",
      },
      fr: {
        intro:
          "Francfort est terre bancaire et corporate, avec l’une des densités de bureaux les plus élevées d’Europe. Les prestataires qui tiennent doivent avoir des processus professionnels. Taskey les livre.",
        paragraphs: [
          "Les tours bancaires exigent une preuve à la minute. Les cabinets d’avocats veulent savoir qui a eu accès quand. Les data centers attendent des états de validation. Taskey couvre tout cela en standard.",
          "L’aéroport de Francfort et son écosystème génèrent une demande constante en prestations spéciales.",
        ],
        economy:
          "Francfort est un pôle financier avec une forte concentration de grands comptes et institutions internationaux.",
        topIndustries: ["Banques", "Cabinets d’avocats", "Data centers", "Écosystème aéroport"],
        localFact:
          "Les exigences de sécurité dans les tours bancaires élèvent le besoin de chaînes d’accès et de preuves numériques.",
      },
    },
  },
  {
    slug: "stuttgart",
    city: "Stuttgart",
    region: "Baden-Württemberg",
    country: "DE",
    lat: 48.7758,
    lng: 9.1829,
    tier: "top",
    nearbyCities: ["karlsruhe", "mannheim", "heilbronn"],
    copy: {
      de: {
        intro:
          "Stuttgart lebt vom Maschinenbau und der Automobilindustrie. Für Reinigungsbetriebe heißt das Industrieaufträge mit Auditkultur. Taskey macht Sie audit-tauglich.",
        paragraphs: [
          "Automotive-Zulieferer prüfen härter als klassische Bürokunden. Sperrzonen, Freigaben und ISO-Nachweise sind Standard. Taskey liefert die digitale Basis dafür.",
          "Wenn Ihr Betrieb in Stuttgart wachsen will, entscheidet die Nachweisqualität über Zugang zu Werken.",
        ],
        economy:
          "Stuttgart ist Zentrum des deutschen Maschinen- und Fahrzeugbaus mit dichtem Zulieferernetzwerk.",
        topIndustries: ["Automotive", "Maschinenbau", "Verwaltung", "Klinik"],
        localFact:
          "Industriekunden im Raum Stuttgart fordern häufig ISO-taugliche Reinigungsnachweise.",
      },
      en: {
        intro:
          "Stuttgart runs on mechanical engineering and automotive. For cleaning operators that means industrial contracts with an audit culture. Taskey makes you audit-ready.",
        paragraphs: [
          "Automotive suppliers audit harder than office clients. Restricted zones, releases and ISO-grade proof are standard. Taskey delivers the digital foundation.",
          "Growth in Stuttgart depends on the quality of your proof of service. Access to plants is gated by it.",
        ],
        economy:
          "Stuttgart is the center of German machinery and vehicle manufacturing with a dense supplier network.",
        topIndustries: ["Automotive", "Machinery", "Administration", "Clinical"],
        localFact:
          "Industrial clients in the Stuttgart region often require ISO-grade cleaning proof.",
      },
      fr: {
        intro:
          "Stuttgart vit de la mécanique et de l’automobile. Pour les prestataires, cela signifie des marchés industriels avec culture d’audit. Taskey vous rend prêt à l’audit.",
        paragraphs: [
          "Les équipementiers auditent plus dur que les clients tertiaires. Zones interdites, autorisations et preuves ISO sont standard. Taskey livre la base numérique.",
          "À Stuttgart, la croissance dépend de la qualité de votre preuve. L’accès aux usines en dépend.",
        ],
        economy:
          "Stuttgart est le centre de la mécanique et de l’automobile allemande, avec un réseau d’équipementiers dense.",
        topIndustries: ["Automobile", "Mécanique", "Administration", "Clinique"],
        localFact:
          "Les clients industriels de la région Stuttgart exigent souvent des preuves de niveau ISO.",
      },
    },
  },
  {
    slug: "duesseldorf",
    city: "Düsseldorf",
    region: "Nordrhein-Westfalen",
    country: "DE",
    lat: 51.2277,
    lng: 6.7735,
    tier: "top",
    nearbyCities: ["koeln", "essen", "duisburg"],
    copy: {
      de: {
        intro:
          "Düsseldorf ist Landeshauptstadt, Mode- und Beratungsstandort. Reinigungsbetriebe treffen hier auf Auftraggeber, die schnellen digitalen Nachweis erwarten. Taskey liefert genau das.",
        paragraphs: [
          "Beratungshäuser, Landesbehörden und Mode-Showrooms haben eines gemeinsam: hoher Präsentationsanspruch und wenig Toleranz für unklare Zustände. Taskey macht Nachweisführung schnell und sichtbar.",
          "Für Betriebe, die Objekte in NRW zusammenschalten wollen, gibt es die Regionalsicht in einer Ansicht.",
        ],
        economy:
          "Düsseldorf ist Landeshauptstadt Nordrhein-Westfalens mit starkem Bank- und Beratungssektor.",
        topIndustries: ["Verwaltung", "Beratung", "Mode und Handel", "Bürodienstleister"],
        localFact:
          "Landesbehörden in NRW schreiben Reinigungsaufträge regelmäßig mit strengen Nachweisanforderungen aus.",
      },
      en: {
        intro:
          "Düsseldorf is state capital, fashion and consulting hub. Cleaning operators face clients who expect fast digital proof. Taskey delivers exactly that.",
        paragraphs: [
          "Consulting firms, state authorities and fashion showrooms share a low tolerance for unclear state. Taskey makes proof of service fast and visible.",
          "For operators consolidating sites across NRW, one regional view covers all sites.",
        ],
        economy:
          "Düsseldorf is capital of North Rhine-Westphalia with a strong banking and consulting sector.",
        topIndustries: ["Administration", "Consulting", "Fashion and retail", "Office services"],
        localFact:
          "State authorities in NRW routinely tender cleaning with strict proof-of-service requirements.",
      },
      fr: {
        intro:
          "Düsseldorf est capitale régionale, place forte de la mode et du conseil. Les prestataires y rencontrent des clients qui attendent une preuve numérique rapide. Taskey livre cela.",
        paragraphs: [
          "Cabinets de conseil, autorités régionales et showrooms de mode partagent une faible tolérance à l’état flou. Taskey rend la preuve rapide et visible.",
          "Pour les prestataires qui consolident des sites en Rhénanie-du-Nord, une vue régionale couvre l’ensemble.",
        ],
        economy:
          "Düsseldorf est la capitale de Rhénanie-du-Nord-Westphalie, avec un fort secteur bancaire et conseil.",
        topIndustries: ["Administration", "Conseil", "Mode et commerce", "Services de bureaux"],
        localFact:
          "Les autorités régionales lancent régulièrement des marchés avec exigences de preuve strictes.",
      },
    },
  },
  {
    slug: "leipzig",
    city: "Leipzig",
    region: "Sachsen",
    country: "DE",
    lat: 51.3397,
    lng: 12.3731,
    tier: "top",
    nearbyCities: ["dresden", "halle", "berlin"],
    copy: {
      de: {
        intro:
          "Leipzig wächst schnell. Logistik, Verwaltung, Klinikbetrieb und Kultur sind treibende Kräfte. Für Reinigungs- und FM-Anbieter bedeutet das Chancen mit Anspruch. Taskey macht Sie ready.",
        paragraphs: [
          "Der Ausbau von Logistikflächen rund um Leipzig zieht Reinigungsleistung nach. Wer diese Aufträge halten will, braucht dokumentierte Prozesse. Taskey liefert sie.",
          "Universitätsmedizin und öffentliche Verwaltung in Leipzig verlangen digitale Nachweise. Papierprotokolle reichen den Auditoren nicht mehr.",
        ],
        economy:
          "Leipzig ist wachstumsstärkste Großstadt Ostdeutschlands mit Fokus auf Logistik, Verwaltung und Kultur.",
        topIndustries: ["Logistik", "Verwaltung", "Universitätsklinik", "Handel"],
        localFact:
          "Logistikcluster rund um Leipzig treiben den Bedarf an schichtfähigen Reinigungsanbietern.",
      },
      en: {
        intro:
          "Leipzig grows fast. Logistics, administration, clinical and culture drive the market. For cleaning and FM providers this means opportunity with demands. Taskey makes you ready.",
        paragraphs: [
          "Logistics expansion around Leipzig pulls cleaning services with it. Keeping these contracts requires documented processes. Taskey delivers them.",
          "University medicine and public administration in Leipzig now require digital proof. Paper protocols no longer satisfy auditors.",
        ],
        economy:
          "Leipzig is the fastest-growing major city in eastern Germany, focused on logistics, administration and culture.",
        topIndustries: ["Logistics", "Administration", "University clinic", "Retail"],
        localFact:
          "Logistics clusters around Leipzig drive demand for cleaning providers capable of shift operations.",
      },
      fr: {
        intro:
          "Leipzig croît vite. Logistique, administration, clinique et culture tirent le marché. Pour les prestataires, c’est une opportunité exigeante. Taskey vous prépare.",
        paragraphs: [
          "L’expansion logistique autour de Leipzig tire la demande de nettoyage. Garder ces contrats demande des processus documentés. Taskey les livre.",
          "La médecine universitaire et l’administration publique de Leipzig exigent désormais des preuves numériques.",
        ],
        economy:
          "Leipzig est la ville en plus forte croissance de l’Est allemand, axée sur logistique, administration et culture.",
        topIndustries: ["Logistique", "Administration", "Clinique universitaire", "Commerce"],
        localFact:
          "Les clusters logistiques autour de Leipzig soutiennent la demande en prestataires capables de rotations.",
      },
    },
  },
  {
    slug: "hannover",
    city: "Hannover",
    region: "Niedersachsen",
    country: "DE",
    lat: 52.3759,
    lng: 9.732,
    tier: "top",
    nearbyCities: ["bremen", "hamburg", "braunschweig"],
    copy: {
      de: {
        intro:
          "Hannover ist Messe- und Verwaltungshauptstadt Niedersachsens. Reinigungs- und FM-Betriebe hier arbeiten in Peak- und Off-Peak-Zyklen. Taskey federt beide ab.",
        paragraphs: [
          "Zu Messezeiten braucht Ihr Betrieb kurzfristig Kapazität. Im Off-Peak brauchen Sie Auslastung Ihrer Stammleistungen. Taskey macht Kapazitätssteuerung sichtbar.",
          "Niedersachsens Landesverwaltung fragt digitale Nachweise strukturiert nach. Taskey ist die passende Basis.",
        ],
        economy:
          "Hannover ist Landeshauptstadt Niedersachsens und einer der größten Messestandorte Deutschlands.",
        topIndustries: ["Messe", "Landesverwaltung", "Automotive-Zulieferer", "Klinik"],
        localFact:
          "Messewochen erzeugen Peaks, die ohne Software kaum sauber abgerechnet werden.",
      },
      en: {
        intro:
          "Hanover is the exhibition and administration capital of Lower Saxony. Operators here run peak and off-peak cycles. Taskey cushions both.",
        paragraphs: [
          "Peak exhibition weeks need short-notice capacity. Off-peak needs utilization of your base contracts. Taskey makes capacity steering visible.",
          "Lower Saxony state administration asks for digital proof of service in structured form. Taskey is the fit.",
        ],
        economy:
          "Hanover is capital of Lower Saxony and one of Germany’s largest exhibition sites.",
        topIndustries: ["Exhibitions", "State administration", "Automotive suppliers", "Clinical"],
        localFact:
          "Exhibition weeks create peaks that are hard to bill cleanly without software.",
      },
      fr: {
        intro:
          "Hanovre est la capitale des salons et de l’administration en Basse-Saxe. Les prestataires y vivent des cycles peak et off-peak. Taskey absorbe les deux.",
        paragraphs: [
          "Les semaines de salon exigent de la capacité à court terme. En off-peak, il faut utiliser vos contrats de base. Taskey rend le pilotage de la capacité visible.",
          "L’administration régionale demande des preuves numériques structurées.",
        ],
        economy:
          "Hanovre est la capitale de la Basse-Saxe et l’un des plus grands sites de salons d’Allemagne.",
        topIndustries: ["Salons", "Administration régionale", "Équipementiers automobile", "Clinique"],
        localFact:
          "Les semaines de salon créent des pics difficiles à facturer proprement sans logiciel.",
      },
    },
  },
  {
    slug: "nuernberg",
    city: "Nürnberg",
    region: "Bayern",
    country: "DE",
    lat: 49.4521,
    lng: 11.0767,
    tier: "top",
    nearbyCities: ["muenchen", "erlangen", "regensburg"],
    copy: {
      de: {
        intro:
          "Nürnberg ist Mittelstandsmotor Nordbayerns. Handel, Industrie und Messewesen prägen den Objektmarkt. Taskey liefert die Basis für Betriebe, die alle drei bedienen.",
        paragraphs: [
          "Der Nürnberger Mittelstand fragt Verlässlichkeit stärker als Prestige nach. Wer einen Auftraggeber gewinnt, hält ihn oft über Jahre. Taskey stabilisiert die Prozessqualität, die diese Kunden erwarten.",
          "Messe- und Kongresswochen erzeugen Spitzen, die mit dem gewohnten Team schwer abzudecken sind. Taskey macht Kapazitätsplanung nachvollziehbar.",
        ],
        economy:
          "Nürnberg ist zweitgrößte Stadt Bayerns mit starkem industriellen Mittelstand.",
        topIndustries: ["Mittelstand", "Handel", "Messe", "Verwaltung"],
        localFact:
          "Der langlaufende Charakter mittelständischer Aufträge in Franken belohnt Prozessverlässlichkeit.",
      },
      en: {
        intro:
          "Nuremberg powers the northern Bavarian mid-market. Retail, industry and exhibitions shape the market. Taskey provides the base for operators serving all three.",
        paragraphs: [
          "The Nuremberg mid-market values reliability over prestige. Won clients tend to stay for years. Taskey stabilizes the process quality these clients expect.",
          "Exhibition and congress weeks create peaks hard to cover with your usual team. Taskey makes capacity planning legible.",
        ],
        economy:
          "Nuremberg is Bavaria’s second-largest city with a strong industrial mid-market.",
        topIndustries: ["Mid-market", "Retail", "Exhibitions", "Administration"],
        localFact:
          "The long-run nature of Franconian mid-market contracts rewards process reliability.",
      },
      fr: {
        intro:
          "Nuremberg est le moteur du mittelstand bavarois du nord. Commerce, industrie et salons structurent le marché. Taskey en fournit la base.",
        paragraphs: [
          "Le mittelstand nurembergeois valorise la fiabilité plus que le prestige. Les clients gagnés restent souvent des années. Taskey stabilise la qualité de processus attendue.",
          "Les semaines de salon créent des pics difficiles à couvrir. Taskey rend la capacité lisible.",
        ],
        economy:
          "Nuremberg est la deuxième plus grande ville de Bavière, avec un mittelstand industriel fort.",
        topIndustries: ["Mittelstand", "Commerce", "Salons", "Administration"],
        localFact:
          "Le caractère long des contrats franconiens récompense la fiabilité des processus.",
      },
    },
  },
  {
    slug: "bremen",
    city: "Bremen",
    region: "Bremen",
    country: "DE",
    lat: 53.0793,
    lng: 8.8017,
    tier: "top",
    nearbyCities: ["hamburg", "hannover", "oldenburg"],
    copy: {
      de: {
        intro:
          "Bremen kombiniert Hafen, Luft- und Raumfahrt, Verwaltung. Für Reinigungs- und FM-Betriebe entsteht daraus ein Portfolio-Mix, den Taskey konsistent bedient.",
        paragraphs: [
          "Ob Hafenareal, Luftfahrt-Werk oder Verwaltungssitz: Bremer Objekte verlangen dokumentierte Prozesse. Taskey liefert sie mit einer einzigen App.",
          "Für Betriebe, die Bremen und Bremerhaven zusammen bedienen, gibt es die Zwei-Standort-Sicht in einer Instanz.",
        ],
        economy:
          "Bremen ist Stadtstaat mit starker Hafen-, Luftfahrt- und Verwaltungsprägung.",
        topIndustries: ["Hafen und Logistik", "Luftfahrt", "Verwaltung", "Bildung"],
        localFact:
          "Luftfahrtwerke in Bremen operieren mit strenger Sicherheits- und Nachweiskultur.",
      },
      en: {
        intro:
          "Bremen mixes port, aerospace and administration. For cleaning and FM operators the portfolio spans several site types. Taskey serves them consistently.",
        paragraphs: [
          "Port area, aerospace plant or administrative HQ: Bremen sites demand documented processes. Taskey delivers them from one app.",
          "For operators serving Bremen and Bremerhaven together, one instance covers both locations.",
        ],
        economy:
          "Bremen is a city-state with strong port, aerospace and administrative character.",
        topIndustries: ["Port and logistics", "Aerospace", "Administration", "Education"],
        localFact:
          "Bremen aerospace plants run with strict safety and documentation cultures.",
      },
      fr: {
        intro:
          "Brême mêle port, aéronautique et administration. Pour les prestataires, cela couvre plusieurs types de sites. Taskey y répond avec cohérence.",
        paragraphs: [
          "Port, usine aéronautique ou siège administratif : Brême exige des processus documentés. Taskey les livre depuis une seule application.",
          "Pour les prestataires servant Brême et Bremerhaven ensemble, une seule instance couvre les deux sites.",
        ],
        economy:
          "Brême est un Land-ville marqué par le port, l’aéronautique et l’administration.",
        topIndustries: ["Port et logistique", "Aéronautique", "Administration", "Éducation"],
        localFact:
          "Les usines aéronautiques brêmoises fonctionnent avec des cultures sécurité et documentation strictes.",
      },
    },
  },
  {
    slug: "dresden",
    city: "Dresden",
    region: "Sachsen",
    country: "DE",
    lat: 51.0504,
    lng: 13.7373,
    tier: "top",
    nearbyCities: ["leipzig", "chemnitz", "halle"],
    copy: {
      de: {
        intro:
          "Dresden vereint Halbleiter-Industrie, Kultur und Verwaltung. Für Reinigungs- und FM-Betriebe entstehen anspruchsvolle Aufträge. Taskey macht sie sicher steuerbar.",
        paragraphs: [
          "Halbleiter- und Reinraumumgebungen im Raum Dresden fordern höchste Prozessqualität. Wer hier arbeitet, muss dokumentieren, was nicht sichtbar ist.",
          "Klassische Kultur- und Verwaltungsobjekte in der Altstadt fügen einen zweiten Prozess-Layer hinzu. Taskey trennt beide sauber im selben System.",
        ],
        economy:
          "Dresden ist Landeshauptstadt Sachsens und zentraler Halbleiterstandort in Europa.",
        topIndustries: ["Halbleiter", "Verwaltung", "Kultur", "Klinik"],
        localFact:
          "Reinraumnahe Aufträge stellen Prozess- und Dokumentationsanforderungen, die weit über Standardreinigung hinausgehen.",
      },
      en: {
        intro:
          "Dresden combines semiconductor industry, culture and administration. Cleaning and FM contracts here are demanding. Taskey makes them safely manageable.",
        paragraphs: [
          "Semiconductor and cleanroom-adjacent environments around Dresden demand top-tier process quality. Working here means documenting the invisible.",
          "Classical culture and administration sites in the old town add a second process layer. Taskey separates them cleanly in the same system.",
        ],
        economy:
          "Dresden is the state capital of Saxony and a central semiconductor location in Europe.",
        topIndustries: ["Semiconductors", "Administration", "Culture", "Clinical"],
        localFact:
          "Cleanroom-adjacent contracts impose documentation demands far beyond standard cleaning.",
      },
      fr: {
        intro:
          "Dresde associe semi-conducteurs, culture et administration. Les contrats y sont exigeants. Taskey les rend pilotables en toute sécurité.",
        paragraphs: [
          "Les environnements proches des salles blanches à Dresde exigent une qualité de processus élevée. Y travailler signifie documenter l’invisible.",
          "Les sites culturels et administratifs classiques de la vieille ville ajoutent une seconde couche. Taskey les sépare proprement.",
        ],
        economy:
          "Dresde est la capitale de la Saxe et un pôle européen central de la microélectronique.",
        topIndustries: ["Semi-conducteurs", "Administration", "Culture", "Clinique"],
        localFact:
          "Les contrats proches des salles blanches imposent une documentation bien au-delà du nettoyage standard.",
      },
    },
  },
  {
    slug: "essen",
    city: "Essen",
    region: "Nordrhein-Westfalen",
    country: "DE",
    lat: 51.4556,
    lng: 7.0116,
    tier: "top",
    nearbyCities: ["dortmund", "duisburg", "duesseldorf"],
    copy: {
      de: {
        intro:
          "Essen ist Konzern- und Energiestandort im Ruhrgebiet. Reinigungs- und FM-Betriebe treffen hier auf hohe Standardisierungsansprüche. Taskey ist die Basis.",
        paragraphs: [
          "Konzernstandorte im Ruhrgebiet arbeiten mit hoher Prozesstiefe. Wer hier als Reinigungsanbieter Fuß fassen will, muss digital dokumentieren, nicht mündlich zusagen.",
          "Der Übergang zum benachbarten Bochum oder Dortmund läuft in Taskey ohne Datenbruch. Region wird zur zusammenhängenden Ansicht.",
        ],
        economy:
          "Essen ist Sitz mehrerer DAX-nahen Konzerne und zentraler Standort der Energiewirtschaft.",
        topIndustries: ["Energie", "Konzerne", "Klinik", "Verwaltung"],
        localFact:
          "Der Nachweisbedarf großer Konzernzentralen im Ruhrgebiet ist konsistent hoch.",
      },
      en: {
        intro:
          "Essen is a corporate and energy hub in the Ruhr area. Cleaning and FM providers meet high standardization expectations. Taskey provides the base.",
        paragraphs: [
          "Corporate sites in the Ruhr operate with deep processes. Establishing yourself here requires digital documentation, not verbal agreements.",
          "Transition to neighboring Bochum or Dortmund runs without data breaks in Taskey. The region becomes one connected view.",
        ],
        economy:
          "Essen hosts several DAX-adjacent corporates and is central to the German energy industry.",
        topIndustries: ["Energy", "Corporates", "Clinical", "Administration"],
        localFact:
          "Documentation demands from large corporate HQs in the Ruhr are consistently high.",
      },
      fr: {
        intro:
          "Essen est un pôle corporate et énergétique de la Ruhr. Les prestataires y rencontrent des exigences élevées de standardisation. Taskey en pose la base.",
        paragraphs: [
          "Les sites corporate de la Ruhr fonctionnent avec des processus profonds. S’y implanter demande de la documentation numérique, pas d’engagements oraux.",
          "Le passage vers Bochum ou Dortmund voisines se fait sans rupture de données dans Taskey.",
        ],
        economy:
          "Essen accueille plusieurs grands groupes proches du DAX et est central pour l’industrie énergétique.",
        topIndustries: ["Énergie", "Grands comptes", "Clinique", "Administration"],
        localFact:
          "Les exigences de preuve des sièges corporate de la Ruhr sont constamment élevées.",
      },
    },
  },
  {
    slug: "dortmund",
    city: "Dortmund",
    region: "Nordrhein-Westfalen",
    country: "DE",
    lat: 51.5136,
    lng: 7.4653,
    tier: "top",
    nearbyCities: ["essen", "bochum", "hagen"],
    copy: {
      de: {
        intro:
          "Dortmund verbindet Logistik, Verwaltung und wachsende Digitalindustrie. Reinigungs- und FM-Betriebe hier bewegen sich in mehreren Objekttypen parallel. Taskey liefert die Kohärenz.",
        paragraphs: [
          "Logistikflächen im Dortmunder Ruhrraum entstehen und ändern sich schnell. Wer als Anbieter mitziehen will, braucht Struktur, die Objekte in Stunden anlegt.",
          "Universität und Klinik in Dortmund erhöhen den Bedarf an dokumentierten Reinigungsprotokollen.",
        ],
        economy:
          "Dortmund ist Metropole des östlichen Ruhrgebiets mit starker Logistik- und Technologiekomponente.",
        topIndustries: ["Logistik", "Klinik", "Universität", "Verwaltung"],
        localFact:
          "Neu entstehende Logistikflächen in Dortmund erfordern schnelle Objekt-Onboardings.",
      },
      en: {
        intro:
          "Dortmund links logistics, administration and a growing digital industry. Cleaning and FM operators here span several site types in parallel. Taskey provides the coherence.",
        paragraphs: [
          "Logistics footprint around Dortmund grows and shifts. Providers need a model that onboards a new site in hours.",
          "Universities and clinics in Dortmund raise the demand for documented protocols.",
        ],
        economy:
          "Dortmund is the metropolis of the eastern Ruhr area, strong in logistics and technology.",
        topIndustries: ["Logistics", "Clinical", "University", "Administration"],
        localFact:
          "New logistics footprint around Dortmund requires rapid site onboarding.",
      },
      fr: {
        intro:
          "Dortmund conjugue logistique, administration et industrie numérique en croissance. Les prestataires y couvrent plusieurs types de sites en parallèle. Taskey en apporte la cohérence.",
        paragraphs: [
          "L’empreinte logistique autour de Dortmund grandit et se déplace. Les prestataires ont besoin d’un modèle qui accueille un site en heures.",
          "Universités et cliniques renforcent la demande de protocoles documentés.",
        ],
        economy:
          "Dortmund est la métropole de l’est de la Ruhr, forte en logistique et technologie.",
        topIndustries: ["Logistique", "Clinique", "Université", "Administration"],
        localFact:
          "Les nouvelles emprises logistiques à Dortmund exigent un onboarding rapide des sites.",
      },
    },
  },
  {
    slug: "wien",
    city: "Wien",
    region: "Wien",
    country: "AT",
    lat: 48.2082,
    lng: 16.3738,
    tier: "top",
    nearbyCities: ["graz", "linz", "salzburg"],
    copy: {
      de: {
        intro:
          "Wien ist der wichtigste Objektmarkt Österreichs. Reinigungs- und FM-Betriebe hier haben einen breiten Kundenmix aus Verwaltung, Klinik und Konzern. Taskey passt zu diesem Mix.",
        paragraphs: [
          "Die österreichische Bundeshauptstadt fordert digitale Nachweise in Vergaben zunehmend routiniert. Taskey erfüllt diese Anforderungen aus einer Standardinstallation.",
          "Für Betriebe, die Wien mit Niederösterreich verbinden, gibt es die Regionalsicht ohne Zusatzmodul.",
        ],
        economy:
          "Wien ist Bundeshauptstadt Österreichs und Zentrum von Verwaltung, Wirtschaft und internationalen Organisationen.",
        topIndustries: ["Verwaltung", "Klinik", "Internationale Organisationen", "Hotel-Housekeeping"],
        localFact:
          "Internationale Organisationen in Wien setzen häufig ISO-orientierte Nachweiskulturen voraus.",
      },
      en: {
        intro:
          "Vienna is Austria’s primary site market. Cleaning and FM operators here run a broad client mix across administration, clinical and corporate. Taskey fits that mix.",
        paragraphs: [
          "The Austrian capital increasingly asks for digital proof in tenders. Taskey satisfies those demands from a standard install.",
          "For operators covering Vienna together with Lower Austria, one regional view spans both.",
        ],
        economy:
          "Vienna is Austria’s capital and central to administration, business and international organizations.",
        topIndustries: ["Administration", "Clinical", "International organizations", "Hotel housekeeping"],
        localFact:
          "International organizations in Vienna often expect ISO-oriented proof cultures.",
      },
      fr: {
        intro:
          "Vienne est le premier marché autrichien. Les prestataires y servent un mix administration, clinique et corporate. Taskey s’adapte à ce mix.",
        paragraphs: [
          "La capitale autrichienne demande de plus en plus des preuves numériques dans les appels d’offres. Taskey y répond en standard.",
          "Pour les prestataires couvrant Vienne et la Basse-Autriche, une vue régionale unique suffit.",
        ],
        economy:
          "Vienne est la capitale autrichienne, centrale pour l’administration, l’économie et les organisations internationales.",
        topIndustries: ["Administration", "Clinique", "Organisations internationales", "Housekeeping hôtelier"],
        localFact:
          "Les organisations internationales à Vienne attendent souvent des cultures de preuve orientées ISO.",
      },
    },
  },
  {
    slug: "zuerich",
    city: "Zürich",
    region: "Zürich",
    country: "CH",
    lat: 47.3769,
    lng: 8.5417,
    tier: "top",
    nearbyCities: ["basel", "bern", "genf"],
    copy: {
      de: {
        intro:
          "Zürich ist Finanz- und Innovationsstandort. Reinigungs- und FM-Anbieter hier arbeiten mit hohen Preispunkten und hohen Erwartungen. Taskey unterstützt diese Positionierung.",
        paragraphs: [
          "Schweizer Auftraggeber erwarten Präzision und dokumentierte Prozesse. Papierprotokolle sind hier bei Neuvergaben faktisch aus dem Spiel.",
          "Für die Schweizer Datenanforderungen kann Taskey auf Wunsch mit CH-Hosting-Partnern ausgeliefert werden.",
        ],
        economy:
          "Zürich ist wirtschaftliches Zentrum der Schweiz mit Finanz- und Innovationscharakter.",
        topIndustries: ["Finance", "Life Sciences", "Innovation", "Kongress"],
        localFact:
          "Der Schweizer Markt kombiniert hohe Qualitätsanforderungen mit einem starken Fokus auf Datenlokalität.",
      },
      en: {
        intro:
          "Zurich is a financial and innovation hub. Cleaning and FM providers here operate at high price points and expectations. Taskey supports that positioning.",
        paragraphs: [
          "Swiss clients expect precision and documented processes. Paper protocols are effectively out for new tenders.",
          "For Swiss data requirements Taskey can be shipped with CH hosting partners on request.",
        ],
        economy:
          "Zurich is Switzerland’s economic center with a finance and innovation profile.",
        topIndustries: ["Finance", "Life sciences", "Innovation", "Congress"],
        localFact:
          "The Swiss market combines high quality bar with strong focus on data locality.",
      },
      fr: {
        intro:
          "Zurich est un pôle financier et d’innovation. Les prestataires y opèrent à des niveaux de prix et d’exigence élevés. Taskey soutient ce positionnement.",
        paragraphs: [
          "Les clients suisses attendent précision et processus documentés. Le papier est de facto exclu des nouveaux appels d’offres.",
          "Pour les exigences suisses en matière de données, Taskey peut être livré avec des partenaires d’hébergement CH sur demande.",
        ],
        economy:
          "Zurich est le centre économique de la Suisse, à profil finance et innovation.",
        topIndustries: ["Finance", "Sciences du vivant", "Innovation", "Congrès"],
        localFact:
          "Le marché suisse combine un niveau qualité élevé avec un accent fort sur la localité des données.",
      },
    },
  },
];

const extendedCities: Array<Pick<Region, "slug" | "city" | "region" | "country" | "lat" | "lng" | "nearbyCities">> = [
  { slug: "bochum", city: "Bochum", region: "Nordrhein-Westfalen", country: "DE", lat: 51.4818, lng: 7.2162, nearbyCities: ["dortmund", "essen"] },
  { slug: "duisburg", city: "Duisburg", region: "Nordrhein-Westfalen", country: "DE", lat: 51.4344, lng: 6.7623, nearbyCities: ["essen", "duesseldorf"] },
  { slug: "wuppertal", city: "Wuppertal", region: "Nordrhein-Westfalen", country: "DE", lat: 51.2562, lng: 7.1508, nearbyCities: ["duesseldorf", "koeln"] },
  { slug: "bielefeld", city: "Bielefeld", region: "Nordrhein-Westfalen", country: "DE", lat: 52.0302, lng: 8.5325, nearbyCities: ["hannover", "dortmund"] },
  { slug: "karlsruhe", city: "Karlsruhe", region: "Baden-Württemberg", country: "DE", lat: 49.0069, lng: 8.4037, nearbyCities: ["stuttgart", "mannheim"] },
  { slug: "mannheim", city: "Mannheim", region: "Baden-Württemberg", country: "DE", lat: 49.4875, lng: 8.466, nearbyCities: ["karlsruhe", "stuttgart"] },
  { slug: "augsburg", city: "Augsburg", region: "Bayern", country: "DE", lat: 48.3705, lng: 10.8978, nearbyCities: ["muenchen", "nuernberg"] },
  { slug: "wiesbaden", city: "Wiesbaden", region: "Hessen", country: "DE", lat: 50.0782, lng: 8.2398, nearbyCities: ["frankfurt", "mainz"] },
  { slug: "moenchengladbach", city: "Mönchengladbach", region: "Nordrhein-Westfalen", country: "DE", lat: 51.1805, lng: 6.4428, nearbyCities: ["duesseldorf", "koeln"] },
  { slug: "braunschweig", city: "Braunschweig", region: "Niedersachsen", country: "DE", lat: 52.2689, lng: 10.5268, nearbyCities: ["hannover", "berlin"] },
  { slug: "chemnitz", city: "Chemnitz", region: "Sachsen", country: "DE", lat: 50.8278, lng: 12.9214, nearbyCities: ["leipzig", "dresden"] },
  { slug: "kiel", city: "Kiel", region: "Schleswig-Holstein", country: "DE", lat: 54.3233, lng: 10.1228, nearbyCities: ["hamburg", "bremen"] },
  { slug: "halle", city: "Halle (Saale)", region: "Sachsen-Anhalt", country: "DE", lat: 51.4826, lng: 11.9723, nearbyCities: ["leipzig", "dresden"] },
  { slug: "magdeburg", city: "Magdeburg", region: "Sachsen-Anhalt", country: "DE", lat: 52.1205, lng: 11.6276, nearbyCities: ["leipzig", "hannover"] },
  { slug: "freiburg", city: "Freiburg im Breisgau", region: "Baden-Württemberg", country: "DE", lat: 47.999, lng: 7.8421, nearbyCities: ["stuttgart", "karlsruhe"] },
  { slug: "luebeck", city: "Lübeck", region: "Schleswig-Holstein", country: "DE", lat: 53.8655, lng: 10.6866, nearbyCities: ["hamburg", "kiel"] },
  { slug: "erfurt", city: "Erfurt", region: "Thüringen", country: "DE", lat: 50.9848, lng: 11.0299, nearbyCities: ["leipzig", "frankfurt"] },
  { slug: "rostock", city: "Rostock", region: "Mecklenburg-Vorpommern", country: "DE", lat: 54.0924, lng: 12.0991, nearbyCities: ["hamburg", "kiel"] },
  { slug: "kassel", city: "Kassel", region: "Hessen", country: "DE", lat: 51.3127, lng: 9.4797, nearbyCities: ["frankfurt", "hannover"] },
  { slug: "mainz", city: "Mainz", region: "Rheinland-Pfalz", country: "DE", lat: 50.0782, lng: 8.2398, nearbyCities: ["frankfurt", "wiesbaden"] },
  { slug: "saarbruecken", city: "Saarbrücken", region: "Saarland", country: "DE", lat: 49.2402, lng: 6.9969, nearbyCities: ["mannheim", "frankfurt"] },
  { slug: "potsdam", city: "Potsdam", region: "Brandenburg", country: "DE", lat: 52.3906, lng: 13.0645, nearbyCities: ["berlin", "leipzig"] },
  { slug: "regensburg", city: "Regensburg", region: "Bayern", country: "DE", lat: 49.0134, lng: 12.1016, nearbyCities: ["nuernberg", "muenchen"] },
  { slug: "darmstadt", city: "Darmstadt", region: "Hessen", country: "DE", lat: 49.8728, lng: 8.6512, nearbyCities: ["frankfurt", "mannheim"] },
  { slug: "ingolstadt", city: "Ingolstadt", region: "Bayern", country: "DE", lat: 48.7665, lng: 11.4257, nearbyCities: ["nuernberg", "muenchen"] },
  { slug: "wuerzburg", city: "Würzburg", region: "Bayern", country: "DE", lat: 49.7913, lng: 9.9534, nearbyCities: ["nuernberg", "frankfurt"] },
  { slug: "graz", city: "Graz", region: "Steiermark", country: "AT", lat: 47.0707, lng: 15.4395, nearbyCities: ["wien", "linz"] },
  { slug: "linz", city: "Linz", region: "Oberösterreich", country: "AT", lat: 48.3069, lng: 14.2858, nearbyCities: ["wien", "salzburg"] },
  { slug: "salzburg", city: "Salzburg", region: "Salzburg", country: "AT", lat: 47.8095, lng: 13.055, nearbyCities: ["linz", "muenchen"] },
  { slug: "basel", city: "Basel", region: "Basel-Stadt", country: "CH", lat: 47.5596, lng: 7.5886, nearbyCities: ["zuerich", "freiburg"] },
  { slug: "bern", city: "Bern", region: "Bern", country: "CH", lat: 46.9481, lng: 7.4474, nearbyCities: ["zuerich", "basel"] },
  { slug: "genf", city: "Genf", region: "Genf", country: "CH", lat: 46.2044, lng: 6.1432, nearbyCities: ["zuerich", "bern"] },
];

for (const c of extendedCities) {
  regions.push({
    ...c,
    tier: "extended",
    copy: emptyExtendedCopy(c.city),
  });
}

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getIndexableRegions(): Region[] {
  return regions.filter((r) => r.tier === "top" && r.indexable !== false);
}
