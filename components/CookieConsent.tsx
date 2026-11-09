'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type CookiePreferences = {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  external: boolean;
};

const CONTENT = {
  de: {
    bannerTitle: 'Cookie-Einstellungen',
    bannerP1: 'Wir verwenden auf unserer Website Cookies und ähnliche Technologien, um den technischen Betrieb der Website sicherzustellen, grundlegende Funktionen bereitzustellen und – sofern Sie ausdrücklich einwilligen – das Nutzungsverhalten auszuwerten sowie Inhalte zu optimieren.',
    bannerP2Strong: 'Technisch notwendige Cookies',
    bannerP2Rest: ' sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Alle anderen Cookies werden nur mit Ihrer freiwilligen Einwilligung gesetzt.',
    bannerP3Prefix: 'Weitere Informationen finden Sie in unseren',
    bannerP3LinkText: 'Datenschutzhinweisen',
    btnAcceptAll: 'Alle Cookies akzeptieren',
    btnNecessaryOnly: 'Nur notwendige Cookies',
    btnSettings: 'Einstellungen anpassen',
    settingsTitle: 'Cookie-Einstellungen anpassen',
    settingsIntro: 'In den folgenden Einstellungen können Sie auswählen, welche Cookie-Kategorien Sie zulassen möchten. Notwendige Cookies sind immer aktiviert, da sie für den sicheren Betrieb der Website erforderlich sind.',
    necessaryTitle: 'Notwendige Cookies',
    alwaysActive: 'Immer aktiv',
    necessaryDesc: 'Notwendige Cookies ermöglichen grundlegende Funktionen dieser Website und sind für deren ordnungsgemäßen Betrieb zwingend erforderlich. Ohne diese Cookies kann die Website nicht korrekt dargestellt oder genutzt werden.',
    necessaryUseLabel: 'Typische Einsatzbereiche:',
    necessaryUseText: ' Seitenaufrufe und Navigation, Speicherung Ihrer Cookie-Auswahl, Schutz vor Missbrauch und Angriffen, Lastverteilung und Systemstabilität',
    legalLabel: 'Rechtsgrundlage:',
    necessaryLegalText: ' Art. 6 Abs. 1 lit. f DSGVO, § 25 Abs. 2 Nr. 2 TTDSG',
    functionalTitle: 'Funktionale Cookies',
    functionalDesc: 'Funktionale Cookies ermöglichen erweiterte Funktionen und Personalisierungen, z. B. die Speicherung von Spracheinstellungen oder regionalen Präferenzen. Sie verbessern den Nutzungskomfort, sind jedoch nicht zwingend für den Betrieb der Website erforderlich.',
    functionalUseText: ' Speicherung von Spracheinstellungen, Benutzerpräferenzen, Wiedererkennung von Einstellungen bei erneutem Besuch',
    functionalLegalText: ' Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG',
    storageLabel: 'Speicherdauer:',
    functionalStorageText: ' Bis zu 12 Monate',
    analyticsTitle: 'Analyse- und Statistik-Cookies',
    analyticsDesc: 'Wir setzen ausschließlich das selbst gehostete Web-Analyse-Werkzeug Umami ein (Instanz auf unserer eigenen Infrastruktur unter mission-control.vars-development.com). Umami zählt Seitenaufrufe pseudonym, ohne Cross-Site-Tracking und ohne dauerhafte Cookies. Ohne Ihre Einwilligung wird das Umami-Skript nicht geladen.',
    analyticsUseText: ' Messung von Seitenaufrufen, Analyse von Nutzerströmen, Optimierung von Ladezeiten und Inhalten, Fehleranalyse (Umami)',
    analyticsLegalText: ' Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG',
    analyticsStorageText: ' Umami setzt keine dauerhaften Cookies; die serverseitige Aggregation erfolgt für höchstens 14 Monate',
    marketingTitle: 'Marketing- und Tracking-Cookies',
    marketingDesc: 'Marketing-Cookies werden verwendet, um Besuchern relevante Inhalte und Angebote anzuzeigen. Sie können auch dazu dienen, die Wirksamkeit von Marketingmaßnahmen zu messen und personalisierte Werbung auszuspielen. Dabei können Informationen über Ihr Nutzungsverhalten auch über verschiedene Websites hinweg verarbeitet werden.',
    marketingUseText: ' Erfolgsmessung von Kampagnen, Anzeige relevanter Inhalte, Wiederansprache (Remarketing)',
    marketingLegalText: ' Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG',
    marketingStorageText: ' Abhängig vom jeweiligen Anbieter',
    externalTitle: 'Externe Inhalte',
    externalDesc: 'Auf einzelnen Seiten binden wir Inhalte von Drittanbietern ein: Vorschaubilder und Verlinkungen zu YouTube-Videos (Google Ireland Ltd.). Beim Laden dieser Inhalte werden personenbezogene Daten (insb. IP-Adresse und Browserdaten) an YouTube übertragen. Diese Einbindungen werden nur nach Ihrer Einwilligung aktiviert.',
    externalUseText: ' YouTube-Vorschaubilder und -Verlinkungen',
    externalLegalText: ' Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TTDSG',
    revokeTitle: 'Widerruf & Änderung der Einwilligung',
    revokeText: 'Sie können Ihre Cookie-Einwilligung jederzeit mit Wirkung für die Zukunft ändern oder widerrufen. Hierfür steht Ihnen der Link “Cookie-Einstellungen” auf unserer Website dauerhaft zur Verfügung. Ein Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten Verarbeitung.',
    btnSave: 'Auswahl speichern',
    btnBack: 'Zurück',
  },
  en: {
    bannerTitle: 'Cookie settings',
    bannerP1: 'We use cookies and similar technologies on our website to ensure the technical operation of the site, provide basic functionality and – if you explicitly consent – analyse usage behaviour and optimise content.',
    bannerP2Strong: 'Strictly necessary cookies',
    bannerP2Rest: ' are required for the operation of the website and cannot be disabled. All other cookies are only set with your voluntary consent.',
    bannerP3Prefix: 'You can find more information in our',
    bannerP3LinkText: 'privacy policy',
    btnAcceptAll: 'Accept all cookies',
    btnNecessaryOnly: 'Necessary cookies only',
    btnSettings: 'Adjust settings',
    settingsTitle: 'Adjust cookie settings',
    settingsIntro: 'In the following settings you can choose which cookie categories to allow. Necessary cookies are always enabled because they are required for the secure operation of the website.',
    necessaryTitle: 'Necessary cookies',
    alwaysActive: 'Always active',
    necessaryDesc: 'Necessary cookies enable basic functions of this website and are strictly required for its proper operation. Without these cookies the website cannot be displayed or used correctly.',
    necessaryUseLabel: 'Typical use cases:',
    necessaryUseText: ' Page views and navigation, storage of your cookie selection, protection against abuse and attacks, load balancing and system stability',
    legalLabel: 'Legal basis:',
    necessaryLegalText: ' Art. 6 (1) lit. f GDPR, Section 25 (2) No. 2 TTDSG',
    functionalTitle: 'Functional cookies',
    functionalDesc: 'Functional cookies enable advanced features and personalisation, e.g. saving language settings or regional preferences. They improve ease of use but are not strictly required for the operation of the website.',
    functionalUseText: ' Saving language settings, user preferences, recognising settings on repeat visits',
    functionalLegalText: ' Art. 6 (1) lit. a GDPR, Section 25 (1) TTDSG',
    storageLabel: 'Storage period:',
    functionalStorageText: ' Up to 12 months',
    analyticsTitle: 'Analytics and statistics cookies',
    analyticsDesc: 'We use exclusively the self-hosted web analytics tool Umami (running on our own infrastructure at mission-control.vars-development.com). Umami counts page views pseudonymously, without cross-site tracking and without persistent cookies. Without your consent the Umami script is not loaded.',
    analyticsUseText: ' Measuring page views, analysing user flows, optimising loading times and content, error analysis (Umami)',
    analyticsLegalText: ' Art. 6 (1) lit. a GDPR, Section 25 (1) TTDSG',
    analyticsStorageText: ' Umami does not set persistent cookies; server-side aggregation for at most 14 months',
    marketingTitle: 'Marketing and tracking cookies',
    marketingDesc: 'Marketing cookies are used to display relevant content and offers to visitors. They can also be used to measure the effectiveness of marketing campaigns and deliver personalised advertising. Information about your usage behaviour may also be processed across different websites.',
    marketingUseText: ' Campaign performance measurement, display of relevant content, retargeting (remarketing)',
    marketingLegalText: ' Art. 6 (1) lit. a GDPR, Section 25 (1) TTDSG',
    marketingStorageText: ' Depending on the respective provider',
    externalTitle: 'External content',
    externalDesc: 'On individual pages we embed content from third parties: preview images and links to YouTube videos (Google Ireland Ltd.). Loading this content transmits personal data (in particular your IP address and browser data) to YouTube. These embeds are only activated after your consent.',
    externalUseText: ' YouTube preview images and links',
    externalLegalText: ' Art. 6 (1) lit. a GDPR, Section 25 (1) TTDSG',
    revokeTitle: 'Withdrawal & changing your consent',
    revokeText: 'You can change or withdraw your cookie consent at any time with effect for the future. The “Cookie settings” link on our website is permanently available for this purpose. A withdrawal does not affect the lawfulness of processing carried out up to that point.',
    btnSave: 'Save selection',
    btnBack: 'Back',
  },
  fr: {
    bannerTitle: 'Paramètres des cookies',
    bannerP1: 'Nous utilisons sur notre site des cookies et des technologies similaires afin d’assurer le fonctionnement technique du site, de fournir des fonctionnalités de base et – sous réserve de votre consentement explicite – d’analyser l’utilisation et d’optimiser les contenus.',
    bannerP2Strong: 'Les cookies techniquement nécessaires',
    bannerP2Rest: ' sont indispensables au fonctionnement du site et ne peuvent pas être désactivés. Tous les autres cookies ne sont déposés qu’avec votre consentement volontaire.',
    bannerP3Prefix: 'Vous trouverez plus d’informations dans notre',
    bannerP3LinkText: 'politique de confidentialité',
    btnAcceptAll: 'Accepter tous les cookies',
    btnNecessaryOnly: 'Cookies nécessaires uniquement',
    btnSettings: 'Personnaliser les réglages',
    settingsTitle: 'Personnaliser les paramètres de cookies',
    settingsIntro: 'Dans les paramètres suivants, vous pouvez choisir les catégories de cookies que vous souhaitez autoriser. Les cookies nécessaires sont toujours activés, car ils sont indispensables au fonctionnement sécurisé du site.',
    necessaryTitle: 'Cookies nécessaires',
    alwaysActive: 'Toujours actif',
    necessaryDesc: 'Les cookies nécessaires permettent les fonctions de base de ce site et sont indispensables à son bon fonctionnement. Sans ces cookies, le site ne peut pas être affiché ou utilisé correctement.',
    necessaryUseLabel: 'Cas d’usage typiques :',
    necessaryUseText: ' affichage des pages et navigation, mémorisation de votre choix de cookies, protection contre les abus et les attaques, répartition de charge et stabilité du système',
    legalLabel: 'Base légale :',
    necessaryLegalText: ' Art. 6 §1 f) RGPD, § 25 al. 2 n° 2 TTDSG',
    functionalTitle: 'Cookies fonctionnels',
    functionalDesc: 'Les cookies fonctionnels permettent des fonctionnalités avancées et une personnalisation, par exemple la mémorisation des préférences linguistiques ou régionales. Ils améliorent le confort d’utilisation, mais ne sont pas indispensables au fonctionnement du site.',
    functionalUseText: ' mémorisation des préférences linguistiques, préférences utilisateur, reconnaissance des réglages lors de visites ultérieures',
    functionalLegalText: ' Art. 6 §1 a) RGPD, § 25 al. 1 TTDSG',
    storageLabel: 'Durée de conservation :',
    functionalStorageText: ' jusqu’à 12 mois',
    analyticsTitle: 'Cookies d’analyse et de statistiques',
    analyticsDesc: 'Nous utilisons exclusivement l’outil d’analyse web auto-hébergé Umami (instance sur notre propre infrastructure à mission-control.vars-development.com). Umami compte les pages vues de manière pseudonyme, sans suivi inter-sites ni cookies persistants. Sans votre consentement, le script Umami n’est pas chargé.',
    analyticsUseText: ' mesure des pages vues, analyse des flux d’utilisateurs, optimisation des temps de chargement et des contenus, analyse des erreurs (Umami)',
    analyticsLegalText: ' Art. 6 §1 a) RGPD, § 25 al. 1 TTDSG',
    analyticsStorageText: ' Umami ne dépose pas de cookies persistants ; agrégation côté serveur pendant 14 mois au maximum',
    marketingTitle: 'Cookies marketing et de suivi',
    marketingDesc: 'Les cookies marketing sont utilisés pour afficher aux visiteurs des contenus et offres pertinents. Ils peuvent aussi servir à mesurer l’efficacité des actions marketing et à diffuser de la publicité personnalisée. Des informations sur votre comportement de navigation peuvent être traitées sur plusieurs sites.',
    marketingUseText: ' mesure du succès des campagnes, affichage de contenus pertinents, reciblage (remarketing)',
    marketingLegalText: ' Art. 6 §1 a) RGPD, § 25 al. 1 TTDSG',
    marketingStorageText: ' selon le prestataire concerné',
    externalTitle: 'Contenus externes',
    externalDesc: 'Sur certaines pages, nous intégrons des contenus de tiers : vignettes et liens vers des vidéos YouTube (Google Ireland Ltd.). Le chargement de ces contenus transmet des données à caractère personnel (notamment adresse IP et données du navigateur) à YouTube. Ces intégrations ne sont activées qu’après votre consentement.',
    externalUseText: ' vignettes et liens vers YouTube',
    externalLegalText: ' Art. 6 §1 a) RGPD, § 25 al. 1 TTDSG',
    revokeTitle: 'Retrait et modification du consentement',
    revokeText: 'Vous pouvez modifier ou retirer votre consentement aux cookies à tout moment avec effet pour l’avenir. Le lien « Paramètres des cookies » est disponible en permanence sur notre site à cette fin. Un retrait n’affecte pas la licéité des traitements effectués jusqu’alors.',
    btnSave: 'Enregistrer la sélection',
    btnBack: 'Retour',
  },
} as const;

export default function CookieBanner() {
  const { language } = useLanguage();
  const c = CONTENT[language];
  const [showBanner, setShowBanner] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('taskey-cookie-consent');
  });
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
    external: false,
  });

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('taskey-cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('taskey-cookie-consent-date', new Date().toISOString());
    // Sofort-Signal an consent-gated Scripts (AnalyticsScript etc.), damit die
    // Entscheidung ohne Reload greift.
    window.dispatchEvent(new CustomEvent('taskey-cookie-consent-changed'));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      external: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    savePreferences({
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      external: false,
    });
  };

  const saveCustom = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
          {/* Banner Content */}
          <div className="bg-white rounded-lg shadow-xl max-w-5xl mx-auto border-2 border-slate-200">
            <div className="p-6">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-slate-900 mb-3">
                  {c.bannerTitle}
                </h2>

                <div className="text-slate-700 space-y-3 text-sm leading-relaxed">
                  <p>
                    {c.bannerP1}
                  </p>

                  <p>
                    <strong>{c.bannerP2Strong}</strong>{c.bannerP2Rest}
                  </p>

                  <p>
                    {c.bannerP3Prefix}{' '}
                    <a href="/datenschutz" className="text-blue-600 hover:underline font-semibold">
                      {c.bannerP3LinkText}
                    </a>.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <button
                  onClick={acceptAll}
                  className="flex-1 bg-blue-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition text-sm"
                >
                  {c.btnAcceptAll}
                </button>
                <button
                  onClick={acceptNecessary}
                  className="flex-1 bg-gray-600 text-slate-900 px-5 py-2.5 rounded-md font-semibold hover:bg-slate-700 transition text-sm"
                >
                  {c.btnNecessaryOnly}
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex-1 bg-white text-slate-800 px-5 py-2.5 rounded-md font-semibold border-2 border-slate-300 hover:bg-slate-50 transition text-sm"
                >
                  {c.btnSettings}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            {/* Settings Content */}
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full border-2 border-slate-200 max-h-[90vh] overflow-y-auto">
              <div className="p-6 sm:p-8">
                <h2 className="text-xl font-bold text-slate-900 mb-4">
                  {c.settingsTitle}
                </h2>

                <p className="text-slate-700 mb-5 text-sm">
                  {c.settingsIntro}
                </p>

                <div className="space-y-6">
                {/* Necessary Cookies */}
                <div className="border-2 border-slate-200 rounded-lg p-5 bg-slate-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">
                        {c.necessaryTitle}
                      </h3>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded">
                        {c.alwaysActive}
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="mt-1 w-5 h-5"
                    />
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    {c.necessaryDesc}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.necessaryUseLabel}</strong>{c.necessaryUseText}
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>{c.legalLabel}</strong>{c.necessaryLegalText}
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border-2 border-slate-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">
                        {c.functionalTitle}
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    {c.functionalDesc}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.necessaryUseLabel}</strong>{c.functionalUseText}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.legalLabel}</strong>{c.functionalLegalText}
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>{c.storageLabel}</strong>{c.functionalStorageText}
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-2 border-slate-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">
                        {c.analyticsTitle}
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    {c.analyticsDesc}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.necessaryUseLabel}</strong>{c.analyticsUseText}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.legalLabel}</strong>{c.analyticsLegalText}
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>{c.storageLabel}</strong>{c.analyticsStorageText}
                  </p>
                </div>

                {/* Marketing Cookies */}
                <div className="border-2 border-slate-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">
                        {c.marketingTitle}
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    {c.marketingDesc}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.necessaryUseLabel}</strong>{c.marketingUseText}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.legalLabel}</strong>{c.marketingLegalText}
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>{c.storageLabel}</strong>{c.marketingStorageText}
                  </p>
                </div>

                {/* External Content */}
                <div className="border-2 border-slate-200 rounded-lg p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">
                        {c.externalTitle}
                      </h3>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.external}
                      onChange={(e) => setPreferences({ ...preferences, external: e.target.checked })}
                      className="mt-1 w-5 h-5 accent-blue-600"
                    />
                  </div>
                  <p className="text-sm text-slate-700 mb-3">
                    {c.externalDesc}
                  </p>
                  <p className="text-xs text-slate-600 mb-2">
                    <strong>{c.necessaryUseLabel}</strong>{c.externalUseText}
                  </p>
                  <p className="text-xs text-slate-600">
                    <strong>{c.legalLabel}</strong>{c.externalLegalText}
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-slate-700">
                <p className="font-semibold mb-2">{c.revokeTitle}</p>
                <p>
                  {c.revokeText}
                </p>
              </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={saveCustom}
                    className="flex-1 bg-blue-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition text-sm"
                  >
                    {c.btnSave}
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="flex-1 bg-slate-200 text-slate-800 px-5 py-2.5 rounded-md font-semibold hover:bg-slate-300 transition text-sm"
                  >
                    {c.btnBack}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
