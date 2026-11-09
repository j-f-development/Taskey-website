import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata, pickLocale, type PageCopy } from "@/lib/i18n-metadata";

const PATH = "/google-kalender-sync";

const META: PageCopy = {
  de: {
    title: "Google Kalender Sync – Taskey",
    description:
      "Verbinde Google Calendar per OAuth2 mit Taskey. Zwei-Wege-Synchronisierung: Termine, Einsätze und Schichten bleiben in beide Richtungen automatisch aktuell.",
  },
  en: {
    title: "Google Calendar Sync – Taskey",
    description:
      "Connect Google Calendar to Taskey via OAuth2. Two-way sync keeps appointments, jobs and shifts up to date in both directions automatically.",
  },
  fr: {
    title: "Synchronisation Google Agenda – Taskey",
    description:
      "Connectez Google Agenda à Taskey via OAuth2. Synchronisation bidirectionnelle : rendez-vous, interventions et plannings restent à jour dans les deux sens.",
  },
};

const CONTENT = {
  de: {
    eyebrow: "Integration",
    h1: "Google Kalender Sync für Taskey",
    lead:
      "Verbinde deinen Google Kalender sicher über OAuth2 mit Taskey. Termine, Einsätze und Schichten werden in beide Richtungen synchronisiert – ohne doppelte Pflege, in Echtzeit und jederzeit widerrufbar.",
    ctaConnect: "In Taskey verbinden",
    ctaSupport: "Fragen? Support kontaktieren",

    howTitle: "So funktioniert die Verbindung (OAuth2)",
    howIntro:
      "Die Anbindung erfolgt ausschließlich über den offiziellen OAuth-2.0-Autorisierungsablauf von Google. Taskey erhält zu keinem Zeitpunkt dein Google-Passwort.",
    steps: [
      {
        t: "1. Autorisierung starten",
        d: "Du tippst in Taskey auf „Google Kalender verbinden“. Wir leiten dich auf den Google-Anmeldebildschirm weiter.",
      },
      {
        t: "2. Zustimmung erteilen",
        d: "Google zeigt dir genau, auf welche Kalender-Berechtigungen Taskey zugreifen möchte. Du bestätigst die Freigabe bewusst selbst.",
      },
      {
        t: "3. Sicheres Token",
        d: "Google sendet ein verschlüsseltes Zugriffstoken an Taskey. Damit greifen wir nur auf Kalenderdaten zu – niemals auf dein Passwort.",
      },
      {
        t: "4. Automatische Synchronisierung",
        d: "Ab jetzt gleicht Taskey deine Termine kontinuierlich in beide Richtungen ab. Du kannst den Zugriff jederzeit trennen.",
      },
    ],

    twoWayTitle: "Zwei-Wege-Synchronisierung",
    twoWayIntro:
      "Die Synchronisierung läuft in beide Richtungen, damit dein Team nur einen Kalender pflegen muss:",
    directions: [
      {
        t: "Taskey → Google Kalender",
        items: [
          "Neue Einsätze und Aufträge erscheinen automatisch in Google Calendar.",
          "Änderungen an Uhrzeit, Ort oder Zuständigkeit werden sofort übertragen.",
          "Abgesagte oder verschobene Termine werden in Google entfernt bzw. aktualisiert.",
        ],
      },
      {
        t: "Google Kalender → Taskey",
        items: [
          "Termine, die du in Google Calendar anlegst, tauchen im Taskey-Kalender auf.",
          "Verschiebst du einen Termin in Google, aktualisiert Taskey ihn automatisch.",
          "Gelöschte Google-Termine werden auch in Taskey entfernt.",
        ],
      },
    ],

    scopesTitle: "Welche Berechtigungen Taskey anfragt",
    scopesIntro:
      "Taskey fordert nur die Berechtigungen an, die für die Kalender-Synchronisierung nötig sind – nach dem Prinzip der Datensparsamkeit.",
    scopes: [
      {
        scope: "google.com/auth/calendar.events",
        why: "Um Einsätze und Termine aus Taskey in deinem Kalender zu erstellen, zu aktualisieren und Änderungen aus Google zurückzulesen.",
      },
      {
        scope: "google.com/auth/calendar.readonly",
        why: "Um bestehende Termine zu lesen und Doppelbuchungen zu vermeiden, bevor Taskey neue Einträge anlegt.",
      },
    ],

    dataTitle: "Datenschutz & Umgang mit deinen Daten",
    dataPoints: [
      "Taskey speichert nur die Kalenderdaten, die für die Synchronisierung notwendig sind (z. B. Titel, Zeit, Ort, Teilnehmerstatus).",
      "Zugriffstokens werden verschlüsselt gespeichert. Dein Google-Passwort wird niemals gespeichert oder eingesehen.",
      "Deine Kalenderdaten werden ausschließlich zur Bereitstellung der Sync-Funktion verwendet – nicht für Werbung und nicht zum Verkauf an Dritte.",
      "Die Nutzung von Google-Nutzerdaten entspricht der Google API Services User Data Policy, inklusive der Limited-Use-Anforderungen.",
    ],

    revokeTitle: "Zugriff jederzeit widerrufen",
    revokeBody:
      "Du kannst die Verbindung jederzeit trennen – direkt in den Taskey-Einstellungen unter „Integrationen“ oder in deinem Google-Konto unter „Sicherheit → Drittanbieter-Apps mit Kontozugriff“. Nach dem Widerruf löscht Taskey die synchronisierten Kalenderdaten und das Zugriffstoken.",
    revokeLink: "Google-Kontoberechtigungen verwalten",

    privacyNote: "Weitere Details findest du in unserer",
    privacyLinkLabel: "Datenschutzerklärung",
  },
  en: {
    eyebrow: "Integration",
    h1: "Google Calendar Sync for Taskey",
    lead:
      "Securely connect your Google Calendar to Taskey via OAuth2. Appointments, jobs and shifts sync in both directions – no double entry, in real time, revocable at any time.",
    ctaConnect: "Connect in Taskey",
    ctaSupport: "Questions? Contact support",

    howTitle: "How the connection works (OAuth2)",
    howIntro:
      "The connection uses Google's official OAuth 2.0 authorization flow exclusively. Taskey never receives your Google password at any point.",
    steps: [
      {
        t: "1. Start authorization",
        d: "You tap “Connect Google Calendar” in Taskey. We redirect you to Google's sign-in screen.",
      },
      {
        t: "2. Grant consent",
        d: "Google shows you exactly which calendar permissions Taskey requests. You confirm the access yourself.",
      },
      {
        t: "3. Secure token",
        d: "Google sends an encrypted access token to Taskey. We use it only to access calendar data – never your password.",
      },
      {
        t: "4. Automatic sync",
        d: "From now on Taskey keeps your appointments in sync in both directions. You can disconnect access at any time.",
      },
    ],

    twoWayTitle: "Two-way synchronization",
    twoWayIntro:
      "Synchronization runs in both directions so your team only has to maintain one calendar:",
    directions: [
      {
        t: "Taskey → Google Calendar",
        items: [
          "New jobs and assignments automatically appear in Google Calendar.",
          "Changes to time, location or assignee are transferred instantly.",
          "Cancelled or rescheduled events are removed or updated in Google.",
        ],
      },
      {
        t: "Google Calendar → Taskey",
        items: [
          "Events you create in Google Calendar show up in the Taskey calendar.",
          "If you move an event in Google, Taskey updates it automatically.",
          "Deleted Google events are also removed in Taskey.",
        ],
      },
    ],

    scopesTitle: "Which permissions Taskey requests",
    scopesIntro:
      "Taskey requests only the permissions needed for calendar synchronization, following the principle of data minimization.",
    scopes: [
      {
        scope: "google.com/auth/calendar.events",
        why: "To create and update jobs and appointments from Taskey in your calendar and read changes back from Google.",
      },
      {
        scope: "google.com/auth/calendar.readonly",
        why: "To read existing events and avoid double-booking before Taskey creates new entries.",
      },
    ],

    dataTitle: "Privacy & how we handle your data",
    dataPoints: [
      "Taskey only stores the calendar data required for synchronization (e.g. title, time, location, attendee status).",
      "Access tokens are stored encrypted. Your Google password is never stored or viewed.",
      "Your calendar data is used solely to provide the sync feature – not for advertising and not sold to third parties.",
      "Use of Google user data complies with the Google API Services User Data Policy, including the Limited Use requirements.",
    ],

    revokeTitle: "Revoke access at any time",
    revokeBody:
      "You can disconnect at any time – directly in Taskey settings under “Integrations” or in your Google Account under “Security → Third-party apps with account access”. After revoking, Taskey deletes the synced calendar data and the access token.",
    revokeLink: "Manage Google account permissions",

    privacyNote: "For more details, see our",
    privacyLinkLabel: "Privacy Policy",
  },
  fr: {
    eyebrow: "Intégration",
    h1: "Synchronisation Google Agenda pour Taskey",
    lead:
      "Connectez en toute sécurité votre Google Agenda à Taskey via OAuth2. Rendez-vous, interventions et plannings se synchronisent dans les deux sens – sans double saisie, en temps réel, révocable à tout moment.",
    ctaConnect: "Connecter dans Taskey",
    ctaSupport: "Des questions ? Contacter le support",

    howTitle: "Comment fonctionne la connexion (OAuth2)",
    howIntro:
      "La connexion utilise exclusivement le flux d'autorisation officiel OAuth 2.0 de Google. Taskey ne reçoit jamais votre mot de passe Google.",
    steps: [
      {
        t: "1. Démarrer l'autorisation",
        d: "Vous appuyez sur « Connecter Google Agenda » dans Taskey. Nous vous redirigeons vers l'écran de connexion Google.",
      },
      {
        t: "2. Donner votre consentement",
        d: "Google vous indique précisément les autorisations d'agenda demandées par Taskey. Vous confirmez vous-même l'accès.",
      },
      {
        t: "3. Jeton sécurisé",
        d: "Google envoie un jeton d'accès chiffré à Taskey. Nous l'utilisons uniquement pour accéder aux données d'agenda – jamais à votre mot de passe.",
      },
      {
        t: "4. Synchronisation automatique",
        d: "Dès lors, Taskey synchronise vos rendez-vous dans les deux sens. Vous pouvez déconnecter l'accès à tout moment.",
      },
    ],

    twoWayTitle: "Synchronisation bidirectionnelle",
    twoWayIntro:
      "La synchronisation fonctionne dans les deux sens pour que votre équipe ne gère qu'un seul agenda :",
    directions: [
      {
        t: "Taskey → Google Agenda",
        items: [
          "Les nouvelles interventions et missions apparaissent automatiquement dans Google Agenda.",
          "Les modifications d'horaire, de lieu ou d'affectation sont transférées instantanément.",
          "Les événements annulés ou reportés sont supprimés ou mis à jour dans Google.",
        ],
      },
      {
        t: "Google Agenda → Taskey",
        items: [
          "Les événements que vous créez dans Google Agenda apparaissent dans l'agenda Taskey.",
          "Si vous déplacez un événement dans Google, Taskey le met à jour automatiquement.",
          "Les événements Google supprimés sont aussi retirés dans Taskey.",
        ],
      },
    ],

    scopesTitle: "Autorisations demandées par Taskey",
    scopesIntro:
      "Taskey ne demande que les autorisations nécessaires à la synchronisation de l'agenda, selon le principe de minimisation des données.",
    scopes: [
      {
        scope: "google.com/auth/calendar.events",
        why: "Pour créer et mettre à jour les interventions et rendez-vous de Taskey dans votre agenda et relire les modifications depuis Google.",
      },
      {
        scope: "google.com/auth/calendar.readonly",
        why: "Pour lire les événements existants et éviter les doubles réservations avant que Taskey ne crée de nouvelles entrées.",
      },
    ],

    dataTitle: "Confidentialité et traitement de vos données",
    dataPoints: [
      "Taskey ne stocke que les données d'agenda nécessaires à la synchronisation (titre, heure, lieu, statut des participants).",
      "Les jetons d'accès sont stockés de manière chiffrée. Votre mot de passe Google n'est jamais stocké ni consulté.",
      "Vos données d'agenda servent uniquement à fournir la fonction de synchronisation – pas de publicité, pas de revente à des tiers.",
      "L'utilisation des données utilisateur Google est conforme à la Google API Services User Data Policy, y compris les exigences Limited Use.",
    ],

    revokeTitle: "Révoquer l'accès à tout moment",
    revokeBody:
      "Vous pouvez vous déconnecter à tout moment – directement dans les paramètres Taskey sous « Intégrations » ou dans votre compte Google sous « Sécurité → Applications tierces ayant accès au compte ». Après révocation, Taskey supprime les données d'agenda synchronisées et le jeton d'accès.",
    revokeLink: "Gérer les autorisations du compte Google",

    privacyNote: "Pour plus de détails, consultez notre",
    privacyLinkLabel: "Politique de confidentialité",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({
    copyByLocale: META,
    locale: pickLocale(locale),
    path: PATH,
  });
}

export default async function GoogleCalendarSyncPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = pickLocale(locale);
  const c = CONTENT[l];
  const prefix = l === "de" ? "" : `/${l}`;
  const privacyHref = `${prefix}/datenschutz`;
  const supportHref = `${prefix}/support`;

  return (
    <>
      {/* Hero */}
      <section className="apl-surface-canvas pt-14 pb-10">
        <div className="apl-container">
          <p className="apl-eyebrow mb-2">{c.eyebrow}</p>
          <h1 className="apl-display apl-display-xl" style={{ maxWidth: "22ch" }}>
            {c.h1}
          </h1>
          <p className="apl-lede mt-5 max-w-[58ch]">{c.lead}</p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="https://app.taskeyapp.com" className="apl-btn apl-btn-primary apl-btn-lg">
              {c.ctaConnect}
            </a>
            <Link href={supportHref} className="apl-btn apl-btn-secondary apl-btn-lg">
              {c.ctaSupport}
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{c.howTitle}</h2>
        <p className="text-lg text-slate-600 max-w-3xl mb-10">{c.howIntro}</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {c.steps.map((s) => (
            <div
              key={s.t}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.t}</h3>
              <p className="text-slate-600 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Two-way sync */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{c.twoWayTitle}</h2>
          <p className="text-lg text-slate-600 max-w-3xl mb-10">{c.twoWayIntro}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {c.directions.map((d) => (
              <div
                key={d.t}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-4">{d.t}</h3>
                <ul className="space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700">
                      <span
                        aria-hidden
                        className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-500"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scopes */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{c.scopesTitle}</h2>
        <p className="text-lg text-slate-600 max-w-3xl mb-10">{c.scopesIntro}</p>
        <div className="space-y-4">
          {c.scopes.map((s) => (
            <div
              key={s.scope}
              className="rounded-2xl border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <code className="inline-block rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-mono text-cyan-300 whitespace-nowrap">
                {s.scope}
              </code>
              <p className="text-slate-600 leading-relaxed">{s.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data / privacy */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">{c.dataTitle}</h2>
          <ul className="space-y-4 max-w-3xl">
            {c.dataPoints.map((p) => (
              <li key={p} className="flex gap-3 text-slate-700">
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 011.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Revoke */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{c.revokeTitle}</h2>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
          {c.revokeBody}
        </p>
        <a
          href="https://myaccount.google.com/permissions"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800"
        >
          {c.revokeLink}
          <span aria-hidden>→</span>
        </a>
        <p className="mt-10 text-slate-500">
          {c.privacyNote}{" "}
          <Link href={privacyHref} className="text-blue-700 underline hover:text-blue-800">
            {c.privacyLinkLabel}
          </Link>
          .
        </p>
      </section>
    </>
  );
}
