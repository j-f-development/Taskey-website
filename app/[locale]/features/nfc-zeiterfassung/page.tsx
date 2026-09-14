import type { Metadata } from "next";
import Link from "next/link";
import {
  buildMetadata,
  pickLocale,
  type PageCopy,
  type Locale,
} from "@/lib/i18n-metadata";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  HowToJsonLd,
  ServiceJsonLd,
} from "@/components/StructuredData";

const path = "/features/nfc-zeiterfassung";
const BASE = "https://www.taskeyapp.com";

const COPY: PageCopy = {
  de: {
    title: "NFC Zeiterfassung für die Gebäudereinigung | Taskey",
    description:
      "NFC Zeiterfassung für Reinigungsbetriebe. Kontaktloser Check-in am Objekt, GPS-Nachweis, Mindestlohn konform nach §17 MiLoG. Offline fähig, DSGVO konform, Made in Germany.",
    ogTitle: "NFC Zeiterfassung für die Gebäudereinigung | Taskey",
    ogDescription:
      "Kontaktloser Check-in per NFC am Objekt. GPS, Zeitstempel, Foto. Mindestlohn konform, offline fähig, DSGVO konform.",
    twitterTitle: "NFC Zeiterfassung für die Gebäudereinigung",
    twitterDescription:
      "NFC Check-in am Objekt. GPS, Zeit, Foto. Mindestlohn konform, offline, DSGVO konform.",
  },
  en: {
    title: "NFC time tracking for commercial cleaning | Taskey",
    description:
      "NFC time tracking for cleaning operations. Contactless check-in on site, GPS proof, compliant with the German Minimum Wage Act. Offline capable, GDPR compliant, made in Germany.",
    ogTitle: "NFC time tracking for commercial cleaning | Taskey",
    ogDescription:
      "Contactless NFC check-in on site. GPS, timestamp, photo. Minimum-wage compliant, offline capable, GDPR compliant.",
    twitterTitle: "NFC time tracking for commercial cleaning",
    twitterDescription:
      "NFC check-in on site. GPS, time, photo. Compliant, offline, GDPR.",
  },
  fr: {
    title: "Pointage NFC pour le nettoyage de bâtiments | Taskey",
    description:
      "Pointage NFC pour entreprises de nettoyage. Check-in sans contact sur site, preuve GPS, conforme au salaire minimum allemand. Fonctionne hors ligne, conforme RGPD, made in Germany.",
    ogTitle: "Pointage NFC pour le nettoyage de bâtiments | Taskey",
    ogDescription:
      "Check-in NFC sans contact sur site. GPS, horodatage, photo. Conforme, hors ligne, RGPD.",
    twitterTitle: "Pointage NFC pour le nettoyage",
    twitterDescription:
      "Check-in NFC sur site. GPS, heure, photo. Conforme, hors ligne, RGPD.",
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
    path,
    type: "website",
  });
}

type Content = {
  eyebrow: string;
  h1: string;
  h1Accent: string;
  lead: string;
  problemH2: string;
  problemBody: string;
  howH2: string;
  howIntro: string;
  steps: { title: string; body: string }[];
  benefitsH2: string;
  benefits: { title: string; body: string }[];
  complianceH2: string;
  complianceBody: string;
  faqH2: string;
  faqs: { q: string; a: string }[];
  ctaH2: string;
  ctaBody: string;
  ctaPrimary: string;
  ctaSecondary: string;
  relatedH2: string;
  related: { href: string; label: string; desc: string }[];
  breadcrumbs: { name: string; href: string }[];
};

const CONTENT: Record<Locale, Content> = {
  de: {
    eyebrow: "NFC Zeiterfassung",
    h1: "NFC Zeiterfassung für die Gebäudereinigung",
    h1Accent: "Ein Tap am Objekt, alles ist dokumentiert.",
    lead:
      "Ihre Mitarbeiter halten das Handy an einen NFC-Tag am Objekt. Taskey erfasst Zeit, Ort, Person und optional ein Foto. Kein Terminal, kein Stundenzettel, kein Nachfragen. Mindestlohn konform, offline fähig, DSGVO konform.",
    problemH2: "Warum die klassische Zeiterfassung in der Gebäudereinigung scheitert",
    problemBody:
      "Stundenzettel auf Papier gehen verloren. Excel-Listen werden falsch ausgefüllt. Chipkarten-Terminals sind teuer und stehen am falschen Ort. GPS allein ist ungenau und angreifbar. NFC löst das, weil der Tag physisch am Objekt hängt. Nur wer wirklich vor Ort ist, kann einchecken.",
    howH2: "So funktioniert die NFC Zeiterfassung mit Taskey",
    howIntro:
      "Sie kleben einen NFC-Tag an eine feste Stelle am Objekt, zum Beispiel neben die Eingangstür oder in den Putzraum. Ihre Mitarbeiter benutzen ihr eigenes Smartphone. Kein zusätzliches Gerät.",
    steps: [
      {
        title: "1. NFC-Tag am Objekt anbringen",
        body: "Der Tag ist ein kleiner, wasserdichter Aufkleber. Ein Tag pro Objekt reicht, bei größeren Liegenschaften mehrere. Der Tag wird in Taskey einem Objekt zugeordnet.",
      },
      {
        title: "2. Mitarbeiter checkt per Handy ein",
        body: "Das Team startet die Taskey App, hält das Handy an den Tag. Zeitstempel, GPS-Koordinaten und Mitarbeiter-ID werden automatisch geschrieben. Optional wird ein Foto zur Bestätigung angehängt.",
      },
      {
        title: "3. Auschecken am Ende der Reinigung",
        body: "Am Ende einfach nochmal antippen. Die Arbeitszeit ist geschlossen. Bei Vergessen erinnert die App automatisch nach der geplanten Reinigungsdauer.",
      },
      {
        title: "4. Daten laufen in die Zentrale",
        body: "Zeiten, Anwesenheit und Fotos landen live im Backend. Sie sehen, welches Objekt gerade bearbeitet wird, welches noch offen ist und wer wo im Einsatz ist.",
      },
    ],
    benefitsH2: "Was Sie mit NFC Zeiterfassung konkret sparen",
    benefits: [
      {
        title: "Weniger Stundenzettel-Nacharbeit",
        body: "Die Zeit ist direkt digital. Kein Nachtippen, keine Korrekturen am Freitagnachmittag.",
      },
      {
        title: "Weniger Streit über Anwesenheit",
        body: "Der NFC-Tag am Objekt beweist, wer wann vor Ort war. Kunden akzeptieren den Nachweis, weil er manipulationssicher ist.",
      },
      {
        title: "Weniger Reklamationen vom Kunden",
        body: "Wenn der Kunde fragt, ob heute gereinigt wurde, sehen Sie es im Portal und antworten in Sekunden.",
      },
      {
        title: "Weniger Risiko beim Zoll",
        body: "Bei einer Prüfung nach dem Mindestlohngesetz haben Sie die Arbeitszeiten vollständig, zeitnah und unveränderbar dokumentiert.",
      },
    ],
    complianceH2: "Mindestlohn und DSGVO",
    complianceBody:
      "Das Mindestlohngesetz verlangt in der Gebäudereinigung nach §17 MiLoG die tägliche, spätestens am siebten Kalendertag erfolgende Aufzeichnung von Beginn, Ende und Dauer der Arbeitszeit. Die NFC Zeiterfassung erfüllt diese Pflicht automatisch. Alle Daten laufen auf deutschen Servern. Zweckbindung, Löschfristen und Betroffenenrechte sind in Taskey abgebildet.",
    faqH2: "Häufige Fragen zur NFC Zeiterfassung in der Reinigung",
    faqs: [
      {
        q: "Brauchen meine Mitarbeiter ein spezielles Gerät?",
        a: "Nein. Jedes moderne Smartphone mit NFC (praktisch alle iPhones ab 7 und Android-Geräte seit 2017) funktioniert. Auf Wunsch stellen wir günstige Diensthandys bereit.",
      },
      {
        q: "Funktioniert die App auch offline in Kellern und Tiefgaragen?",
        a: "Ja. Der Check-in wird lokal gespeichert und synchronisiert automatisch, sobald wieder Netz da ist. Die Zeit bleibt korrekt.",
      },
      {
        q: "Was passiert, wenn ein NFC-Tag beschädigt oder gestohlen wird?",
        a: "Sie können den Tag in wenigen Sekunden im Backend deaktivieren und einen neuen zuordnen. Ein Ersatz-Tag kostet wenige Euro.",
      },
      {
        q: "Kann ein Mitarbeiter den Check-in fälschen?",
        a: "Der NFC-Tag ist physisch am Objekt. Man kann ihn nicht aus der Ferne auslösen. Zusätzlich prüft Taskey die GPS-Koordinaten und den Zeitstempel gegen den geplanten Einsatz.",
      },
      {
        q: "Erfüllt die NFC Zeiterfassung §17 MiLoG?",
        a: "Ja. Beginn, Ende und Dauer der Arbeitszeit werden pro Mitarbeiter und Tag lückenlos dokumentiert und mindestens zwei Jahre revisionssicher gespeichert.",
      },
      {
        q: "Kann ich die Zeiten in DATEV übertragen?",
        a: "Ja. Taskey exportiert die Zeiten direkt in ein DATEV-kompatibles Format. Ihre Lohnabrechnung übernimmt sie ohne Nacharbeit.",
      },
    ],
    ctaH2: "Testen Sie NFC Zeiterfassung mit Ihrem eigenen Objekt",
    ctaBody:
      "Kostenlosen Account erstellen, NFC-Tag bestellen oder selber einen freien Tag verwenden, in weniger als zehn Minuten läuft die erste Zeitbuchung.",
    ctaPrimary: "Kostenlosen Account erstellen",
    ctaSecondary: "Alle Funktionen ansehen",
    relatedH2: "Weiter im Cluster Gebäudereinigungssoftware",
    related: [
      {
        href: "/features/einsatzplanung",
        label: "Einsatzplanung",
        desc: "Kolonnen, Touren, Vertretungen. Drag and drop, ohne Excel.",
      },
      {
        href: "/features/leistungsnachweis",
        label: "Leistungsnachweis",
        desc: "Vom NFC-Scan bis zum lesbaren Report für Ihren Auftraggeber.",
      },
      {
        href: "/features/live-margen",
        label: "Live-Margen",
        desc: "Wie viel bleibt pro Objekt übrig, in Echtzeit.",
      },
    ],
    breadcrumbs: [
      { name: "Start", href: "/" },
      { name: "Funktionen", href: "/features" },
      { name: "NFC Zeiterfassung", href: "/features/nfc-zeiterfassung" },
    ],
  },
  en: {
    eyebrow: "NFC time tracking",
    h1: "NFC time tracking for commercial cleaning",
    h1Accent: "One tap on site, everything is documented.",
    lead:
      "Your team holds the phone against an NFC tag at the site. Taskey captures time, place, person and optionally a photo. No terminal, no paper timesheet, no follow-up questions. Minimum-wage compliant, offline capable, GDPR compliant.",
    problemH2: "Why paper timesheets fail in commercial cleaning",
    problemBody:
      "Paper timesheets get lost. Spreadsheets are filled in wrongly. Card terminals are expensive and stand in the wrong place. GPS alone is imprecise and easy to spoof. NFC solves this because the tag lives physically on site. Only someone who is really there can check in.",
    howH2: "How Taskey NFC time tracking works",
    howIntro:
      "You stick an NFC tag on a fixed spot at the site, next to the entrance or in the cleaning room. Your team uses their own smartphone. No extra hardware.",
    steps: [
      {
        title: "1. Attach the NFC tag at the site",
        body: "The tag is a small, waterproof sticker. One per site is enough, larger properties can have several. The tag is linked to the site in Taskey.",
      },
      {
        title: "2. Team checks in via phone",
        body: "Open Taskey, tap the phone against the tag. Timestamp, GPS and employee ID are logged automatically. Optionally a confirmation photo is attached.",
      },
      {
        title: "3. Check out at the end",
        body: "Just tap again. The shift is closed. If forgotten, the app reminds automatically after the planned cleaning duration.",
      },
      {
        title: "4. Data flows into the back office",
        body: "Times, presence and photos land in the backend in real time. You see which site is currently being cleaned, which is still open and who is where.",
      },
    ],
    benefitsH2: "What NFC time tracking actually saves you",
    benefits: [
      {
        title: "Less timesheet cleanup",
        body: "Time is digital from the start. No re-typing, no Friday-afternoon corrections.",
      },
      {
        title: "Fewer disputes about attendance",
        body: "The NFC tag on site proves who was there and when. Clients accept the proof because it is tamper-resistant.",
      },
      {
        title: "Fewer client complaints",
        body: "If the client asks whether cleaning happened today, you see it in the portal and answer in seconds.",
      },
      {
        title: "Lower audit risk",
        body: "In a minimum-wage inspection, working times are fully, promptly and immutably documented.",
      },
    ],
    complianceH2: "Compliance and privacy",
    complianceBody:
      "German minimum-wage law (§17 MiLoG) requires daily, or at the latest weekly, recording of the start, end and duration of working time in commercial cleaning. NFC time tracking meets this obligation automatically. All data runs on German servers. Purpose limitation, retention periods and data-subject rights are represented in Taskey.",
    faqH2: "Frequently asked questions",
    faqs: [
      {
        q: "Do my team need special hardware?",
        a: "No. Any modern smartphone with NFC works. If needed we can provide low-cost devices.",
      },
      {
        q: "Does it work offline in basements and underground garages?",
        a: "Yes. Check-ins are stored locally and sync automatically once the network is back. Times stay correct.",
      },
      {
        q: "What if a tag gets damaged or stolen?",
        a: "You can deactivate the tag in the backend in seconds and assign a new one. A replacement tag costs a few euros.",
      },
      {
        q: "Can an employee fake a check-in?",
        a: "The tag is physically on site. It cannot be triggered remotely. Taskey also checks GPS and timestamp against the planned shift.",
      },
      {
        q: "Does NFC time tracking satisfy §17 MiLoG?",
        a: "Yes. Start, end and duration are recorded per employee and day and stored auditably for at least two years.",
      },
      {
        q: "Can I export to DATEV?",
        a: "Yes. Taskey exports times in a DATEV-compatible format. Payroll takes over without rework.",
      },
    ],
    ctaH2: "Try NFC time tracking on your own site",
    ctaBody:
      "Create a free account, order an NFC tag or use a spare one, in under ten minutes your first shift is logged.",
    ctaPrimary: "Create free account",
    ctaSecondary: "See all features",
    relatedH2: "More in the cleaning management software cluster",
    related: [
      {
        href: "/features/einsatzplanung",
        label: "Scheduling",
        desc: "Crews, routes, replacements. Drag and drop, no spreadsheet.",
      },
      {
        href: "/features/leistungsnachweis",
        label: "Proof of service",
        desc: "From NFC scan to a client-ready report.",
      },
      {
        href: "/features/live-margen",
        label: "Live margins",
        desc: "How much stays per site, in real time.",
      },
    ],
    breadcrumbs: [
      { name: "Home", href: "/" },
      { name: "Features", href: "/features" },
      { name: "NFC time tracking", href: "/features/nfc-zeiterfassung" },
    ],
  },
  fr: {
    eyebrow: "Pointage NFC",
    h1: "Pointage NFC pour le nettoyage de bâtiments",
    h1Accent: "Un tap sur site, tout est documenté.",
    lead:
      "Vos équipes approchent le téléphone d’un tag NFC sur site. Taskey enregistre l’heure, le lieu, la personne et, en option, une photo. Pas de terminal, pas de feuille papier, pas de relance. Conforme au salaire minimum, hors ligne, RGPD.",
    problemH2: "Pourquoi les feuilles papier échouent dans le nettoyage",
    problemBody:
      "Les feuilles papier se perdent. Les tableurs sont mal remplis. Les terminaux à cartes sont chers et mal placés. Le GPS seul est imprécis. Le NFC résout cela car le tag est physiquement sur site. Seule une personne présente peut pointer.",
    howH2: "Comment fonctionne le pointage NFC Taskey",
    howIntro:
      "Vous collez un tag NFC à un endroit fixe du site. Vos équipes utilisent leur propre smartphone. Pas de matériel supplémentaire.",
    steps: [
      {
        title: "1. Placer le tag NFC sur site",
        body: "Le tag est un petit autocollant étanche. Un par site suffit. Il est associé au site dans Taskey.",
      },
      {
        title: "2. Pointage via téléphone",
        body: "Ouvrez Taskey, approchez le téléphone du tag. Horodatage, GPS et identifiant employé sont enregistrés automatiquement. Photo en option.",
      },
      {
        title: "3. Sortie en fin de prestation",
        body: "Nouveau tap. Le créneau se ferme. Si oublié, l’application rappelle automatiquement après la durée prévue.",
      },
      {
        title: "4. Les données remontent au bureau",
        body: "Heures, présence et photos arrivent en temps réel. Vous voyez ce qui est en cours, ce qui reste, qui est où.",
      },
    ],
    benefitsH2: "Ce que vous économisez concrètement",
    benefits: [
      {
        title: "Moins de retouches",
        body: "Les heures sont numériques dès le départ. Plus de saisie manuelle.",
      },
      {
        title: "Moins de litiges de présence",
        body: "Le tag sur site prouve qui était là et quand. Les clients acceptent la preuve.",
      },
      {
        title: "Moins de réclamations client",
        body: "Si le client demande si la prestation a eu lieu, vous répondez en secondes.",
      },
      {
        title: "Moins de risque en contrôle",
        body: "Les temps sont complets, à jour et non modifiables.",
      },
    ],
    complianceH2: "Conformité et vie privée",
    complianceBody:
      "La loi allemande sur le salaire minimum (§17 MiLoG) exige un enregistrement quotidien du début, de la fin et de la durée du travail. Le pointage NFC répond automatiquement à cette obligation. Toutes les données restent sur serveurs allemands. Limitation d’usage, durées de conservation et droits des personnes sont couverts.",
    faqH2: "Questions fréquentes",
    faqs: [
      {
        q: "Faut-il un matériel spécial ?",
        a: "Non. Tout smartphone moderne avec NFC fonctionne. Nous pouvons fournir des appareils à faible coût.",
      },
      {
        q: "Ça marche hors ligne dans les caves et parkings ?",
        a: "Oui. Les pointages sont stockés localement et synchronisés dès le retour du réseau.",
      },
      {
        q: "Si un tag est endommagé ou volé ?",
        a: "Vous le désactivez dans le backend en secondes et en associez un nouveau. Un tag de remplacement coûte quelques euros.",
      },
      {
        q: "Un employé peut-il falsifier un pointage ?",
        a: "Le tag est physiquement sur site. Taskey vérifie aussi GPS et horodatage.",
      },
      {
        q: "Le pointage respecte-t-il §17 MiLoG ?",
        a: "Oui. Début, fin et durée sont enregistrés par employé et par jour, conservés au moins deux ans.",
      },
      {
        q: "Puis-je exporter vers DATEV ?",
        a: "Oui. Taskey exporte les heures dans un format compatible DATEV.",
      },
    ],
    ctaH2: "Testez le pointage NFC sur votre propre site",
    ctaBody:
      "Créez un compte gratuit, commandez un tag NFC ou utilisez-en un libre, en moins de dix minutes le premier créneau est enregistré.",
    ctaPrimary: "Créer un compte gratuit",
    ctaSecondary: "Voir toutes les fonctionnalités",
    relatedH2: "Autres pages du cluster",
    related: [
      {
        href: "/features/einsatzplanung",
        label: "Planification",
        desc: "Équipes, tournées, remplacements. Drag and drop, sans tableur.",
      },
      {
        href: "/features/leistungsnachweis",
        label: "Preuve de prestation",
        desc: "Du scan NFC au rapport client.",
      },
      {
        href: "/features/live-margen",
        label: "Marges en direct",
        desc: "Ce qui reste par site, en temps réel.",
      },
    ],
    breadcrumbs: [
      { name: "Accueil", href: "/" },
      { name: "Fonctionnalités", href: "/features" },
      { name: "Pointage NFC", href: "/features/nfc-zeiterfassung" },
    ],
  },
};

function localeHref(locale: Locale, href: string) {
  if (locale === "de") return href;
  return `/${locale}${href}`;
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = pickLocale(raw);
  const c = CONTENT[locale];

  const canonical =
    locale === "de" ? `${BASE}${path}` : `${BASE}/${locale}${path}`;

  const crumbsForLd = c.breadcrumbs.map((b) => ({
    name: b.name,
    url: `${BASE}${locale === "de" ? "" : `/${locale}`}${b.href === "/" ? "" : b.href}` || BASE,
  }));

  return (
    <main className="bg-white text-slate-900">
      <BreadcrumbJsonLd id="ld-breadcrumb-nfc-zeiterfassung" crumbs={crumbsForLd} />
      <FaqJsonLd id="ld-faq-nfc-zeiterfassung" items={c.faqs} />
      <ServiceJsonLd
        id="ld-service-nfc-zeiterfassung"
        name={c.h1}
        description={c.lead}
        serviceType="NFC-Zeiterfassung Gebäudereinigung"
        url={canonical}
      />
      <HowToJsonLd
        id="ld-howto-nfc-zeiterfassung"
        name={c.howH2}
        description={c.howIntro}
        steps={c.steps.map((s) => ({ title: s.title, body: s.body }))}
        url={canonical}
        inLanguage={locale === "de" ? "de-DE" : locale === "en" ? "en-US" : "fr-FR"}
      />

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-14">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
            {c.breadcrumbs.map((b, i) => (
              <li key={b.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>›</span>}
                {i < c.breadcrumbs.length - 1 ? (
                  <Link href={localeHref(locale, b.href)} className="hover:text-slate-900">
                    {b.name}
                  </Link>
                ) : (
                  <span className="text-slate-700">{b.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <span className="inline-block text-[11px] font-black tracking-[0.28em] uppercase text-cyan-700 mb-4">
          {c.eyebrow}
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] tracking-tight text-slate-900 mb-6">
          {c.h1}
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 font-medium leading-snug mb-6 max-w-3xl">
          {c.h1Accent}
        </p>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {c.lead}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://signup.taskeyapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors"
          >
            {c.ctaPrimary}
          </a>
          <Link
            href={localeHref(locale, "/features")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-300 text-slate-900 font-bold hover:bg-slate-50 transition-colors"
          >
            {c.ctaSecondary}
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-5">
          {c.problemH2}
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {c.problemBody}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-5">
          {c.howH2}
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mb-8">
          {c.howIntro}
        </p>
        <ol className="grid gap-4 md:grid-cols-2">
          {c.steps.map((s) => (
            <li key={s.title} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-8">
          {c.benefitsH2}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {c.benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-black text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-5">
          {c.complianceH2}
        </h2>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl">
          {c.complianceBody}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-slate-900 mb-8">
          {c.faqH2}
        </h2>
        <div className="space-y-4">
          {c.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl border border-slate-200 p-5">
              <summary className="cursor-pointer text-base md:text-lg font-bold text-slate-900 flex items-center justify-between gap-4">
                <span className="faq-question">{f.q}</span>
                <span className="text-slate-400 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="faq-answer mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">{c.ctaH2}</h2>
          <p className="text-base md:text-lg text-white/80 mb-8 max-w-2xl">{c.ctaBody}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://signup.taskeyapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors"
            >
              {c.ctaPrimary}
            </a>
            <Link
              href={localeHref(locale, "/pricing")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
            >
              {locale === "de" ? "Preise ansehen" : locale === "en" ? "See pricing" : "Voir les tarifs"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 border-t border-slate-100">
        <h2 className="text-2xl md:text-3xl font-black leading-tight text-slate-900 mb-6">
          {c.relatedH2}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {c.related.map((r) => (
            <Link
              key={r.href}
              href={localeHref(locale, r.href)}
              className="rounded-2xl border border-slate-200 p-5 hover:border-slate-400 transition-colors"
            >
              <div className="text-base font-black text-slate-900 mb-1">{r.label}</div>
              <div className="text-sm text-slate-600 leading-relaxed">{r.desc}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
