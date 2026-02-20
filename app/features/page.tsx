'use client';

import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import DemoBookingModal from '@/components/DemoBookingModal';

// Metadata will be set via head tags
if (typeof window !== 'undefined') {
  document.title = "Taskey Features - Alle Funktionen im Überblick | Taskey";
}

interface Feature {
  id: string;
  name: string;
  description: string;
  image: string;
  detailedInfo?: string;
}

interface Category {
  id: string;
  name: string;
  features: Feature[];
}

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('nfc');
  const [activeFeature, setActiveFeature] = useState('digitale-anlagenakte');
  const [expandedDetails, setExpandedDetails] = useState<string | null>(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const categories: Category[] = [
    {
      id: 'nfc',
      name: 'NFC-Tags',
      features: [
        {
          id: 'digitale-anlagenakte',
          name: 'Digitale Anlagenakte',
          description: 'Kleben. Scannen. Wissen. Jede Maschine, jede Anlage wird smart mit ihrem eigenen digitalen Gedächtnis.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Wetterfesten Tag aufkleben und scannen\n• Zugriff auf Schaltpläne, Wartungsprotokolle, Fotos\n• Komplette Reparaturhistorie am Objekt\n• Wissen bleibt am Objekt, nicht im Kopf\n• Perfekt für Elektro, SHK, Facility Management',
        },
        {
          id: 'werkzeug-tracking',
          name: 'Werkzeug & Maschinen-Tracking',
          description: 'Nie wieder Werkzeug auf der Großbaustelle vergessen. Jeder Scan wird mit GPS-Standort protokolliert.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• NFC-Tags an Werkzeug und Equipment\n• Wer hat das Gerät gescannt? Wann? Wo?\n• Karte zeigt letzten bekannten Aufenthaltsort\n• Ende der Diskussionen und Suchaktionen\n• Wertvoll für Bau und verteilte Baustellen',
        },
        {
          id: 'rechtssicher',
          name: 'Rechtssicherer Nachweis',
          description: 'Scan-Zeitstempel belegen: Dein Team war vor Ort und hat geprüft. Perfekt für Versicherung & Haftung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Exakter Zeitstempel + GPS-Standort + Mitarbeiter-ID\n• Wasserdichter, rechtssicherer Nachweis\n• Perfekt für Versicherungsfälle\n• Gewährleistungsansprüche dokumentieren\n• Lückenlose Haftungsdokumentation',
        },
        {
          id: 'materialverwaltung',
          name: 'Intelligente Materialverwaltung',
          description: 'Automatische Bestandsüberwachung für Materialien. Bekomme eine Benachrichtigung, wenn Nachschub nötig ist.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• NFC-Tags an Materiallager (Profile, Kabel, Rohre)\n• Material scannen und Menge eingeben\n• Automatische Bestandsüberwachung\n• Benachrichtigung bei knappem Bestand\n• Keine Notfall-Bestellungen zu überteuerten Preisen',
        },
        {
          id: 'wartungsmanagement',
          name: 'Automatisches Wartungsmanagement',
          description: 'Jede Maschinenbenutzung wird erfasst. Bei intensiver Nutzung erhältst du automatisch Service-Hinweise.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Bei Benutzung NFC-Tag scannen\n• Automatische Zählung der Einsätze\n• Benachrichtigung bei häufiger Nutzung\n• Vermeidung teurer Ausfälle\n• Verlängerte Lebensdauer der Geräte',
        },
        {
          id: 'check-in-system',
          name: 'Check-In System für Rundgänge',
          description: 'Perfekt für Facility Management: Protokolliere Kontrollgänge automatisch per NFC-Scan.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• NFC-Tags an wichtigen Kontrollpunkten\n• Automatisches Protokoll: Wer, wann, wo?\n• Lückenloser, rechtssicherer Nachweis\n• Keine vergessenen Checks mehr\n• Keine Papier-Listen, keine Diskussionen',
        },
        {
          id: 'kundenbindung',
          name: 'Service-Sticker für Kundenbindung',
          description: 'Klebe deinen Service-Tag beim Kunden. Er scannt ihn bei Problemen – und kontaktiert direkt dich.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Service-Tag direkt an der Anlage platzieren\n• Kunde scannt bei Problemen den Tag\n• Direkt zur Service-Seite mit Kontaktformular\n• Kunde ruft dich an, nicht den Wettbewerber\n• Langfristige Kundenbindung und Folgeaufträge',
        },
      ],
    },
    {
      id: 'kalender',
      name: 'Kalender',
      features: [
        {
          id: 'projektplanung',
          name: 'Projektplanung',
          description: 'Planen Sie Ihre Projekte effizient im Kalender. Übersicht über alle Projektphasen und Meilensteine.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Projekte mit Start- und Enddatum anlegen\n• Mitarbeiter sehen sofort anstehende Aufgaben\n• Detaillierte Projektseite mit allen Infos\n• Bilder, Aufgaben und Zeitpläne\n• Klar strukturiert und jederzeit abrufbar',
        },
        {
          id: 'terminplanung',
          name: 'Terminplanung',
          description: 'Verwalten Sie alle Termine zentral. Automatische Synchronisation mit allen Geräten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Zentrale Übersicht aller Termine\n• Urlaube, Krankmeldungen, Abwesenheiten\n• Chef sieht sofort, wer verfügbar ist\n• Mitarbeiter wissen genau, welche Tage belegt sind\n• Keine Telefonkette oder Missverständnisse',
        },
        {
          id: 'erinnerungen',
          name: 'Automatische Erinnerungen',
          description: 'Erhalten Sie rechtzeitig Benachrichtigungen zu anstehenden Terminen. Immer pünktlich beim Kunden.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Automatische Erinnerung an Termine und Aufgaben\n• Benachrichtigung für Mitarbeiter und Chefs\n• Keine verpassten Deadlines mehr\n• Läuft zuverlässig im Hintergrund\n• Team konzentriert sich auf die Arbeit',
        },
      ],
    },
    {
      id: 'gps',
      name: 'GPS',
      features: [
        {
          id: 'gesamtkarte',
          name: 'Gesamtkarte',
          description: 'Überblick über alle Standorte und Baustellen auf einer Karte. Behalten Sie den Überblick.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Live-Map zeigt alle aktiven Mitarbeiter\n• Aktuelle Aufträge auf einen Blick\n• Sofort sehen, wo Unterstützung gebraucht wird\n• Detailansicht mit Auftragsinformationen\n• Ideal für tägliche Einsatzplanung',
        },
        {
          id: 'mitarbeiter-roadmap',
          name: 'Mitarbeiter-Roadmap',
          description: 'Sehen Sie die Routen Ihrer Mitarbeiter in Echtzeit. Optimale Koordination.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Automatische Roadmap am Ende des Tages\n• Welche Einsatzorte wurden besucht?\n• Reihenfolge und Zeiten dokumentiert\n• Arbeitsabläufe nachvollziehen\n• Ohne manuellen Aufwand',
        },
        {
          id: 'routenplanung',
          name: 'Routenplanung',
          description: 'Planen Sie effiziente Routen für Ihre Mitarbeiter. Sparen Sie Zeit und Kosten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische empfohlene Route zum Einsatzort\n• Schnell und ohne Umwege\n• Zeit- und Kostenersparnis\n• Weniger Stress für Mitarbeiter\n• Reibungslose Abläufe im Team',
        },
        {
          id: 'standortdokumentation',
          name: 'Automatische Live-Standortdokumentation',
          description: 'Automatische Dokumentation aller Standorte. Lückenlose Nachverfolgung für Ihre Buchhaltung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Aktualisierung alle 30 Sekunden während Arbeitszeit\n• Saubere und zuverlässige Nachverfolgung\n• Bei Pause stoppt die Standortaktualisierung\n• Faire und transparente Dokumentation\n• Im Einklang mit Team-Bedürfnissen',
        },
      ],
    },
    {
      id: 'mitarbeiter',
      name: 'Mitarbeiter',
      features: [
        {
          id: 'informationen',
          name: 'Informationen',
          description: 'Alle Mitarbeiterdaten zentral verwaltet. Qualifikationen, Kontakte und Verfügbarkeiten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Zentrale Verwaltung aller Mitarbeiterdaten\n• Startdatum, Kontakte, Position, Verantwortlichkeiten\n• Transparente Effizienz-Auswertung\n• Arbeitszeiten und wirtschaftlicher Beitrag\n• Faires, objektives Bild der Teamleistung',
        },
        {
          id: 'aufgabenmanagement',
          name: 'Aufgabenmanagement',
          description: 'Weisen Sie Aufgaben zu und verfolgen Sie den Fortschritt. Klare Kommunikation im Team.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Aufgaben Mitarbeitern oder Teams zuordnen\n• Führungsrolle für Kolonnen festlegen\n• Nicht jeder muss alle Details eingeben\n• Klare Strukturen und weniger Aufwand\n• Bessere Organisation im Alltag',
        },
        {
          id: 'verwaltung',
          name: 'Einfach Anlegen / Löschen',
          description: 'Mitarbeiter schnell hinzufügen oder entfernen. Intuitive Verwaltung in wenigen Klicks.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Neue Mitarbeiter in Sekunden anlegen\n• Daten bearbeiten oder Accounts entfernen\n• Übersichtlich und flexibel\n• Jederzeit aktuell\n• Kein Verwaltungschaos',
        },
      ],
    },
    {
      id: 'projekte',
      name: 'Projekte',
      features: [
        {
          id: 'zeitspanne',
          name: 'Zeitspanne',
          description: 'Definieren Sie Start und Ende Ihrer Projekte. Behalten Sie Deadlines im Blick.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Geplante Zeitspanne zuweisen (z.B. 100 Stunden)\n• System zeigt automatisch Zeitrahmen-Status\n• Erkennen ob Nachjustierung nötig ist\n• Transparente Planung\n• Optimale Ressourcenverteilung',
        },
        {
          id: 'fortschritt',
          name: 'Fortschritt',
          description: 'Verfolgen Sie den Projektfortschritt in Echtzeit. Visuelle Darstellung des Status.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische Sammlung geleisteter Stunden\n• Übersichtliche Darstellung\n• Jederzeit sehen, wie viel geschafft wurde\n• Nähe zum Projektabschluss erkennen\n• Messbar, nachvollziehbar, steuerbar',
        },
        {
          id: 'buchhaltungsmanager',
          name: 'Buchhaltungsmanager',
          description: 'Alle projektbezogenen Kosten und Einnahmen im Überblick. Perfekt für die Abrechnung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Umsatz, Budget, Kosten in Echtzeit\n• Aktueller Gewinn visuell dargestellt\n• Belege erscheinen automatisch im Projekt\n• Optional: Auto-Transfer zu LexOffice, Sage\n• Fehlerfreie Buchhaltung, enorme Zeitersparnis',
        },
        {
          id: 'galerie',
          name: 'Galerie',
          description: 'Dokumentieren Sie Ihr Projekt mit Fotos. Automatische Zuordnung und Archivierung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Eigene Galerie für alle Projektbilder\n• Bilder bearbeiten und Markierungen setzen\n• Bereiche hervorheben (erledigt/offen)\n• Ideal für Dokumentation und Nachweise\n• Perfekt für Kundenkommunikation',
        },
        {
          id: 'belege',
          name: 'Belege & Ausgaben',
          description: 'Erfassen Sie alle Belege digital. Keine verlorenen Quittungen mehr.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Gescannte Belege sofort im Projekt\n• Alle Ausgaben klar strukturiert\n• Kategorien, Beträge, Upload-Zeitpunkte\n• Optional: Direktübertragung zur Buchhaltung\n• Keine verlorenen Quittungen mehr',
        },
        {
          id: 'auftraege',
          name: 'Aufträge',
          description: 'Verwalten Sie alle Aufträge innerhalb eines Projekts. Strukturiert und übersichtlich.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Projekte in mehrere Aufträge aufteilen\n• Z.B. Haussanierung → "Steckdosen verlegen"\n• Alle Aufträge in eigenem Tab sichtbar\n• Einzeln planbar, bearbeitbar, auswertbar\n• Komplexe Projekte leicht kontrollierbar',
        },
      ],
    },
    {
      id: 'auftraege',
      name: 'Aufträge',
      features: [
        {
          id: 'informationen',
          name: 'Informationen',
          description: 'Alle wichtigen Auftragsinformationen auf einen Blick. Kunde, Adresse, Beschreibung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Alle wichtigen Details (Beschreibung, Materialien)\n• Anforderungen und besondere Hinweise\n• Übersichtlich dargestellt\n• Mitarbeiter wissen genau, was zu tun ist\n• Keine Rückfragen oder Missverständnisse',
        },
        {
          id: 'mitarbeiter',
          name: 'Mitarbeiter',
          description: 'Weisen Sie Mitarbeiter zu Aufträgen zu. Optimale Ressourcenplanung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Alle beteiligten Mitarbeiter sichtbar\n• Arbeitszeiten pro Mitarbeiter\n• Automatisch berechnete Lohnkosten\n• Volle Transparenz\n• Realistische Kostenschätzung',
        },
        {
          id: 'zeiterfassung',
          name: 'Zeiterfassung',
          description: 'Erfassen Sie Arbeitszeiten direkt am Auftrag. Automatische Zuordnung.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische Arbeitszeiterfassung beim Start\n• Parallel zur Einsatzstandort-Dokumentation\n• Bei "Pause" wird alles gestoppt\n• Faire und eindeutige Erfassung\n• Keine manuelle Nachbearbeitung',
        },
        {
          id: 'besorgungsfahrten',
          name: 'Besorgungsfahrten',
          description: 'Dokumentieren Sie Materialfahrten. Kilometerabrechnung inklusive.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Besorgungsfahrt mit einem Klick starten\n• Standort wird weiterhin dokumentiert\n• Klar vom Kundeneinsatz getrennt\n• Chef entscheidet über Vergütung\n• Flexibel und transparent',
        },
        {
          id: 'pause',
          name: 'Pause',
          description: 'Erfassen Sie Pausen gesetzeskonform. Automatische Berechnung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Klick auf "Pause" stoppt Arbeitszeit\n• Standortaktualisierung wird gestoppt\n• Ruhezeiten korrekt erfasst\n• Eindeutig vom aktiven Auftrag getrennt\n• Gesetzeskonform dokumentiert',
        },
        {
          id: 'abschluss',
          name: 'Auftrag Beenden + Abschlussbericht',
          description: 'Schließen Sie Aufträge mit einem detaillierten Bericht ab. Professionelle Dokumentation.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Schriftlich oder per Sprachfunktion erstellen\n• Beschreibung, Zeitaufwand, Einsatzorte\n• Fotos und digitale Kundensignatur\n• Automatisch als PDF erzeugt\n• Sofort im Dashboard mit Exportfunktion',
        },
        {
          id: 'galerie',
          name: 'Galerie',
          description: 'Fotodokumentation des Auftrags. Vorher-Nachher-Bilder für den Kunden.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Eigene Galerie für jeden Auftrag\n• Bilder hochladen und markieren\n• Bereiche hervorheben ("hier fehlt noch...")\n• Direkt in Abschlussbericht einbauen\n• Saubere Dokumentation und Kommunikation',
        },
        {
          id: 'buchhaltungsmanager',
          name: 'Buchhaltungsmanager',
          description: 'Alle Kosten und Belege zum Auftrag. Direkt abrechnungsfertig.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Kosten, Kategorien, Budget, Gewinn\n• Gescannte Belege übersichtlich\n• Optional: Direct-Transfer zu LexOffice, Sage\n• Alle finanziellen Daten auf einen Blick\n• Abrechnungsfertig',
        },
        {
          id: 'roadmap',
          name: 'Mitarbeiter-Roadmap',
          description: 'Sehen Sie die Route zum Auftragsort. GPS-Navigation integriert.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Automatische Roadmap am Tagesende\n• Startpunkt, Zwischenschritte, Einsatzorte\n• Arbeitsende dokumentiert\n• Klar visualisiert\n• Keine manuelle Eingabe nötig',
        },
      ],
    },
    {
      id: 'kunden',
      name: 'Kunden',
      features: [
        {
          id: 'informationen',
          name: 'Informationen',
          description: 'Alle Kundendaten zentral gespeichert. Kontakte, Adressen und Auftragshistorie.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Zentrale Speicherung aller Kundendaten\n• Namen, Adressen, Kontaktinformationen\n• Individuelle Hinweise zu jedem Kunden\n• Schneller Zugriff für Chefs und Bürokräfte\n• Perfekt für klare Kommunikation',
        },
      ],
    },
    {
      id: 'zeiterfassung',
      name: 'Zeiterfassung',
      features: [
        {
          id: 'zeitmanager',
          name: 'Zeitmanager',
          description: 'Vollständige Verwaltung aller Arbeitszeiten. Erfassung, Auswertung und Abrechnung in einem Tool.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Alle Arbeitsstunden an einem Ort\n• Wer hat wie lange gearbeitet?\n• Inklusive Pausen, Besorgungsfahrten, Einsätze\n• Automatische Erfassung und Aktualisierung\n• Keine manuelle Nachbearbeitung nötig',
        },
      ],
    },
    {
      id: 'rentabilitaet',
      name: 'Buchhaltung',
      features: [
        {
          id: 'buchhaltung',
          name: 'Rentabilität',
          description: 'Ihr digitaler Buchhalter. Automatische Auswertungen und Berichte für Ihre Buchhaltung.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Wirtschaftlichkeit von Projekten und Aufträgen\n• Automatische Sammlung: Umsätze, Kosten, Budgets\n• Rentabilität jedes Mitarbeiters analysiert\n• Klare, objektive Bewertung\n• Bessere Entscheidungen für effizientere Steuerung',
        },
      ],
    },
    {
      id: 'urlaub-krank',
      name: 'Urlaubs-/Krankmeldungen',
      features: [
        {
          id: 'mitarbeiter',
          name: 'Mitarbeiter',
          description: 'Übersicht über alle Mitarbeiter und deren Abwesenheiten. Wer ist wann verfügbar?',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: '• Direkte Auswahl und Verwaltung\n• Alle Abwesenheiten auf einen Blick\n• Urlaub, Krankheit, sonstige Ausfälle\n• Schnelle Übersicht pro Person\n• Jederzeit wissen, wer verfügbar ist',
        },
        {
          id: 'status',
          name: 'Status',
          description: 'Aktueller Status aller Urlaubs- und Krankmeldungen. Genehmigt oder in Bearbeitung?',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: '• Status einfach setzen\n• Krank, arbeitsfähig, im Urlaub\n• Andere interne Kategorien möglich\n• Jederzeit klar: Wer ist verfügbar?\n• Transparente Übersicht',
        },
        {
          id: 'planung',
          name: 'Planung + Kalender',
          description: 'Planen Sie Abwesenheiten im Voraus. Kalenderansicht für bessere Übersicht.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: '• Automatische Verknüpfung mit Kalender\n• Überschneidungen sofort erkennen\n• Freie Tage und verfügbare Kapazitäten\n• Zentrale und transparente Organisation\n• Bessere Planung für alle',
        },
      ],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory);
  const currentFeature = currentCategory?.features.find((f) => f.id === activeFeature);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-cyan-500 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-300 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Vollständiger Funktionsüberblick
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Was kann <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Taskey?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Alle Funktionen für Ihren effizienten Betrieb – von NFC-Tags bis Zeiterfassung
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">40+ Features</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">11 Kategorien</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Für alle Gewerke</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Quick Navigation Buttons - Silber-Blau-Spektrum */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-4">
              <a
                href="/pricing"
                className="group bg-gradient-to-br from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-slate-600/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-50">Alle Preise</h3>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-slate-200 text-sm">Entdecken Sie alle Taskey-Pakete</p>
              </a>

              <a
                href="/pricing#nfc-tags"
                className="group bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-sky-400/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white">NFC-Tags Preise</h3>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform text-sky-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-sky-50 text-sm">Starter Kit ab 9€</p>
              </a>

              <a
                href="/premium-manager"
                className="group bg-gradient-to-br from-slate-600 to-blue-700 hover:from-slate-500 hover:to-blue-600 text-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border border-slate-500/40"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-50">Manager Preise</h3>
                  <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform text-sky-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <p className="text-slate-100 text-sm">Persönlicher Premium-Service</p>
              </a>
            </div>
          </div>

          {/* Important Note Box */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Wichtiger Hinweis: Zwei verschiedene Anwendungen
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="leading-relaxed">
                      Taskey besteht aus <strong>zwei unterschiedlichen Anwendungen</strong>, die perfekt aufeinander abgestimmt sind:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-100">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <h4 className="font-bold text-blue-900">Dashboard (Browser)</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Für Chefs und Verwaltung: Vollständige Kontrolle über Projekte, Mitarbeiter, Auswertungen und alle administrativen Funktionen
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-cyan-100">
                        <div className="flex items-center gap-2 mb-2">
                          <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          <h4 className="font-bold text-cyan-600">Mobile App</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          Für Mitarbeiter: Zeiterfassung, Auftragsannahme, Navigation, Fotodokumentation und Abschlussberichte direkt vor Ort
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Tabs - Silber-Blau-Spektrum */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-slate-200 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveFeature(category.features[0].id);
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  activeCategory === category.id
                    ? category.id === 'nfc' 
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-xl'
                      : 'bg-gradient-to-r from-slate-700 to-slate-800 text-white shadow-xl'
                    : 'bg-gradient-to-br from-slate-50 to-gray-100 text-slate-700 hover:from-slate-100 hover:to-gray-200 border border-slate-200 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid md:grid-cols-12 gap-8">
            {/* Feature List - Redesigned Sidebar */}
            <div className="md:col-span-4">
              <div className="sticky top-24 space-y-3">
                {/* Sidebar Header - Dunkelste Grautöne (slate-800/900) */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 mb-4 shadow-xl border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-slate-700/60 backdrop-blur-xl rounded-xl flex items-center justify-center border border-slate-600/40 shadow-lg">
                      <svg className="w-5 h-5 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-50 text-lg">Alle Features</h3>
                      <p className="text-slate-300 text-sm">{currentCategory?.features.length} Funktionen</p>
                    </div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
                </div>

                {/* Feature Items */}
                {currentCategory?.features.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveFeature(feature.id)}
                    className={`group w-full text-left rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                      activeFeature === feature.id
                        ? 'bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl border border-slate-600/50'
                        : 'bg-gradient-to-br from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 shadow-md hover:shadow-xl border border-gray-200/80'
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        {/* Number Badge - Mittlere Grautöne */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all ${
                          activeFeature === feature.id
                            ? 'bg-slate-600/60 text-slate-100 border border-slate-500/40 shadow-md'
                            : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300 border border-gray-300'
                        }`}>
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        
                        {/* Feature Name */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-bold text-lg mb-1 transition-colors ${
                            activeFeature === feature.id
                              ? 'text-slate-50'
                              : 'text-gray-900 group-hover:text-gray-950'
                          }`}>
                            {feature.name}
                          </h3>
                          
                          {/* Active Indicator - Hellere slate Töne */}
                          {activeFeature === feature.id && (
                            <div className="flex items-center gap-2 mt-2">
                              <div className="h-1 flex-1 bg-gradient-to-r from-slate-500 via-slate-400 to-transparent rounded-full"></div>
                              <span className="text-xs text-slate-300 font-semibold">Aktiv</span>
                            </div>
                          )}
                          
                          {/* Hover Arrow - Dunkle gray Töne */}
                          {activeFeature !== feature.id && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-2">
                              <span className="text-xs text-gray-600 font-semibold flex items-center gap-1">
                                Mehr erfahren
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feature Details */}
            <div className="md:col-span-8">
              {currentFeature && (
                <div className="space-y-6">
                  {/* Main Feature Card */}
                  <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-200/60">
                    <div className="mb-8">
                      <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                        {currentFeature.name}
                      </h2>
                      <p className="text-xl text-slate-600 leading-relaxed">
                        {currentFeature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Feature Description Box - Elegant Gray Design */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900 rounded-3xl shadow-2xl">
                    {/* Subtle Glow Effects */}
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-[120px]"></div>
                    
                    <div className="relative p-8 md:p-12">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-slate-700/40 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-slate-600/30 shadow-lg">
                            <svg className="w-7 h-7 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                            So funktioniert's
                            <span className="inline-flex items-center px-4 py-1.5 bg-slate-700/40 backdrop-blur-xl border border-slate-600/40 rounded-full text-sm font-semibold text-slate-300 shadow-lg">
                              Details
                            </span>
                          </h3>
                          <div className="prose prose-invert prose-lg max-w-none">
                            <p className="text-slate-200 leading-relaxed text-lg whitespace-pre-line">
                              {currentFeature.detailedInfo || currentFeature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Tips Section - Elegant Gray */}
                  {'detailedInfo' in currentFeature && currentFeature.detailedInfo && (
                    <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-3xl border border-slate-300/50 p-8 shadow-xl">
                      <div className="flex items-start gap-5">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-slate-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-3 text-xl">Gut zu wissen</h4>
                          <p className="text-slate-700 leading-relaxed text-lg">
                            Diese Funktion arbeitet automatisch im Hintergrund und erfordert keine zusätzliche Einrichtung. 
                            Alle Daten werden DSGVO-konform auf deutschen Servern gespeichert.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Demo Request Section - Modern Redesign */}
        <div className="relative mt-32 mb-20 overflow-hidden">
          {/* Gradient Background with Mesh Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:44px_44px]"></div>
          
          {/* Subtle Blur Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center">
              {/* Logo with Glow Effect */}
              <div className="mb-12 relative">
                <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
                <Image 
                  src="/843B6B8E-CED8-4FF8-8C63-B354140A7BC5e5e1f940b1a8d4df34c43ec444a293f3116e09c2a98dcecd8e8882d3099b7c2d.png" 
                  alt="Taskey Logo" 
                  width={160}
                  height={160}
                  className="h-40 w-auto mx-auto relative z-10"
                  sizes="160px"
                  quality={90}
                  loading="lazy"
                />
              </div>
              
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-300 px-6 py-2.5 rounded-full text-sm font-bold mb-8 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                14 TAGE KOSTENLOS TESTEN
              </div>

              {/* Main Headline */}
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Bereit für die
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Zukunft?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Erleben Sie Taskey live in Aktion! Unsere Experten zeigen Ihnen persönlich, 
                wie Sie <span className="text-cyan-400 font-bold">30-40% Zeit sparen</span> und Ihren Betrieb digitalisieren.
              </p>

              {/* Features Grid - New Design */}
              <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                {[
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                    text: "15-Min Demo", 
                    subtext: "Schnell & kompakt" 
                  },
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>,
                    text: "Maßgeschneidert", 
                    subtext: "Für Ihren Betrieb" 
                  },
                  { 
                    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                    text: "Sofort starten", 
                    subtext: "Ohne Verpflichtung" 
                  }
                ].map((feature, index) => (
                  <div key={index} className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative z-10">
                      <div className="text-cyan-400 mb-3 flex justify-center">{feature.icon}</div>
                      <div className="text-white font-bold text-lg mb-1">{feature.text}</div>
                      <div className="text-gray-400 text-sm">{feature.subtext}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons - Improved */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <button 
                  onClick={() => setDemoModalOpen(true)}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-lg px-10 py-5 rounded-2xl transition-all hover:scale-105 hover:shadow-2xl shadow-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <span className="relative z-10">Jetzt Demo buchen</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <a 
                  href="tel:+4915168488999" 
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-2xl border border-white/20 hover:border-white/40 transition-all hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Oder direkt anrufen
                </a>
              </div>

              {/* Trust indicators - New Style */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-gray-300 text-sm">
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Keine Kreditkarte nötig</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>14 Tage kostenlos</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Jederzeit kündbar</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Häufige Fragen
            </h2>
            <p className="text-xl text-gray-600">
              Antworten auf die wichtigsten Fragen zu Taskey
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Wie funktioniert die automatische Zeiterfassung?",
                answer: "Sobald ein Mitarbeiter einen Auftrag startet, beginnt Taskey automatisch mit der Zeiterfassung und Standortdokumentation. Bei Pausen wird beides sofort gestoppt. Alle Daten werden zentral erfasst und sind für Chefs jederzeit einsehbar."
              },
              {
                question: "Kann ich Projekte in einzelne Aufträge aufteilen?",
                answer: "Ja, große Projekte wie eine Haussanierung können in einzelne Aufgaben aufgeteilt werden. Jeder Auftrag ist separat planbar und auswertbar mit eigenen Zeiten, Kosten und Mitarbeitern."
              },
              {
                question: "Wie werden Belege und Ausgaben verwaltet?",
                answer: "Mitarbeiter können Belege direkt scannen und dem entsprechenden Projekt oder Auftrag zuordnen. Die Belege erscheinen sofort im System und können optional automatisch an Buchhaltungsprogramme wie LexOffice oder Sage übertragen werden."
              },
              {
                question: "Was zeigt die GPS-Funktion genau an?",
                answer: "Die Live-Map zeigt dem Chef alle aktiven Mitarbeiter und ihre aktuellen Standorte. Am Ende des Tages wird automatisch eine Roadmap erstellt, die alle besuchten Einsatzorte und Zeiten dokumentiert – ohne manuelle Eingaben."
              },
              {
                question: "Wie funktionieren die QR-Codes und NFC-Tags?",
                answer: "An wichtigen Orten wie der Firmenzentrale oder dem Lager können QR-Codes angebracht werden. Mitarbeiter scannen sie beim Check-in und Check-out. Das System speichert automatisch, wer sich wann wo aufgehalten hat."
              },
              {
                question: "Kann ich die Rentabilität meiner Mitarbeiter sehen?",
                answer: "Ja, Taskey analysiert automatisch die Rentabilität jedes Mitarbeiters basierend auf Arbeitszeiten, erledigten Aufgaben und dem wirtschaftlichen Beitrag im Verhältnis zum Lohn. Das schafft objektive Entscheidungsgrundlagen."
              },
              {
                question: "Wie werden Urlaubs- und Krankmeldungen verwaltet?",
                answer: "Alle Abwesenheiten sind automatisch mit dem Kalender verknüpft. Chefs sehen sofort Überschneidungen und verfügbare Kapazitäten. Der Status jedes Mitarbeiters (krank, im Urlaub, verfügbar) ist jederzeit klar ersichtlich."
              },
              {
                question: "Was enthält ein Abschlussbericht?",
                answer: "Der Abschlussbericht kann schriftlich oder per Sprachfunktion erstellt werden und enthält: Arbeitsbeschreibung, Zeitaufwand, Einsatzorte, Fotos und digitale Kundensignatur. Alles wird automatisch als PDF generiert."
              }
            ].map((faq, index) => (
              <details 
                key={index} 
                className="bg-white rounded-lg shadow-md group"
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 rounded-lg transition">
                  <h3 className="font-bold text-gray-900 text-lg pr-4">
                    {faq.question}
                  </h3>
                  <svg 
                    className="w-6 h-6 text-blue-900 transform group-open:rotate-180 transition-transform flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

          {/* CTA at the end */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Haben Sie weitere Fragen? Wir helfen Ihnen gerne weiter!
            </p>
            <a 
              href="mailto:info@taskey.de" 
              className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all"
            >
              Kontakt aufnehmen
            </a>
          </div>

          {/* Link to Was ist Taskey */}
          <div className="mt-12 text-center">
            <a
              href="/was-ist-taskey"
              className="inline-flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors text-lg font-semibold"
            >
              <span>Unsere Vision</span>
              <span className="text-2xl">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Demo Booking Modal */}
      <DemoBookingModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </main>
  );
}
