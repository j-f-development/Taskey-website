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
      name: '🔥 NFC-Tags',
      features: [
        {
          id: 'digitale-anlagenakte',
          name: 'Digitale Anlagenakte',
          description: 'Kleben. Scannen. Wissen. Jede Maschine, jede Anlage wird smart mit ihrem eigenen digitalen Gedächtnis.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Mit Taskey NFC-Tags wird jede Maschine, jeder Schaltschrank und jede Anlage zum digitalen Informationszentrum. Einfach den wetterfesten Tag aufkleben und mit dem Smartphone scannen – schon hast du Zugriff auf Schaltpläne, Wartungsprotokolle, Fotos, Reparaturhistorie und alle wichtigen Dokumente. Das Wissen bleibt am Objekt, nicht im Kopf deines besten Gesellen. Perfekt für Elektro, SHK, Facility Management und alle Gewerke, die komplexe Anlagen betreuen.',
        },
        {
          id: 'werkzeug-tracking',
          name: 'Werkzeug & Maschinen-Tracking',
          description: 'Nie wieder Werkzeug auf der Großbaustelle vergessen. Jeder Scan wird mit GPS-Standort protokolliert.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Wo ist die Rüttelplatte? Wer hat zuletzt die Hilti benutzt? Mit NFC-Tags an deinem Werkzeug und Equipment siehst du auf einen Blick: Welcher Mitarbeiter hat das Gerät gescannt, wann und an welchem Standort. Die Karte zeigt dir den letzten bekannten Aufenthaltsort. Ende der Diskussionen, Ende der Suchaktionen. Besonders wertvoll für Bau, Gala-Bau und alle Betriebe mit verteilten Baustellen.',
        },
        {
          id: 'rechtssicher',
          name: 'Rechtssicherer Nachweis',
          description: 'Scan-Zeitstempel belegen: Dein Team war vor Ort und hat geprüft. Perfekt für Versicherung & Haftung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Jeder NFC-Scan wird mit exaktem Zeitstempel, GPS-Standort und Mitarbeiter-ID protokolliert. Das bedeutet: Du hast einen wasserdichten, rechtssicheren Nachweis, dass dein Team die Anlage geprüft, gewartet oder instand gesetzt hat. Bei Versicherungsfällen, Gewährleistungsansprüchen oder Haftungsfragen kannst du lückenlos belegen: Wir waren da, wir haben unsere Arbeit gemacht. Zusätzlich können Mitarbeiter direkt nach dem Scan Fotos und Notizen hinterlegen – alles wird automatisch mit dem Objekt verknüpft.',
        },
        {
          id: 'wissens-sicherung',
          name: 'Wissens-Sicherung',
          description: 'Dein bester Geselle geht in Rente? Das Wissen bleibt am Objekt – nicht in seinem Kopf.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Das größte Risiko im Handwerk ist Wissensverlust. Wenn ein erfahrener Mitarbeiter den Betrieb verlässt, geht oft jahrelanges Know-how mit. Mit Taskey NFC-Tags bleibt das Wissen dort, wo es hingehört: Direkt am Objekt. Schaltpläne, Besonderheiten der Anlage, Notizen zu Herstellerkontakten, Fotos vom Einbau – alles ist per Scan sofort verfügbar. Neue Mitarbeiter oder Subunternehmer können sich in Sekunden einarbeiten. Das macht dich unabhängig von Einzelpersonen und sichert die Qualität deiner Arbeit langfristig.',
        },
        {
          id: 'check-in-system',
          name: 'Check-In System für Rundgänge',
          description: 'Perfekt für Facility Management: Protokolliere Kontrollgänge automatisch per NFC-Scan.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Für Facility Manager, Hausmeister und Security-Teams: Platziere NFC-Tags an allen wichtigen Kontrollpunkten (Heizungsraum, Notausgänge, Lüftungsanlagen, etc.). Bei jedem Rundgang scannen die Mitarbeiter die Tags – Taskey protokolliert automatisch: Wer war wann wo? Wurden alle Punkte kontrolliert? Das Resultat: Lückenloser, rechtssicherer Nachweis für Versicherungen und Auftraggeber. Keine vergessenen Checks mehr, keine Papier-Listen, keine Diskussionen.',
        },
        {
          id: 'kundenbindung',
          name: 'Service-Sticker für Kundenbindung',
          description: 'Klebe deinen Service-Tag beim Kunden. Er scannt ihn bei Problemen – und kontaktiert direkt dich.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Stell dir vor: Du baust eine Heizung ein und klebst deinen Taskey Service-Tag direkt an die Anlage. Wenn der Kunde Monate später ein Problem hat, scannt er den Tag mit seinem Handy – und landet direkt auf deiner Service-Seite mit Kontaktformular, Notfallnummer und Wartungsinfos. Das Geniale: Der Kunde ruft dich an, nicht den Wettbewerber. Du bindest ihn langfristig an deinen Betrieb, baust Vertrauen auf und sicherst dir Folgeaufträge. Das funktioniert perfekt für SHK, Elektro, Alarmanlagen, Klima-Technik und alle Branchen mit Wartungs- und Service-Geschäft.',
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
          detailedInfo: 'Mit Taskey behalten Teams jederzeit den Überblick über laufende Projekte. Der Chef legt Projekte mit Start- und Enddatum an, und Mitarbeiter sehen sofort, wann welche Aufgaben anstehen. Ein Klick auf ein Projekt öffnet die detaillierte Projektseite mit allen Informationen, Bildern, Aufgaben und Zeitplänen – klar strukturiert und jederzeit abrufbar.',
        },
        {
          id: 'terminplanung',
          name: 'Terminplanung',
          description: 'Verwalten Sie alle Termine zentral. Automatische Synchronisation mit allen Geräten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Alle wichtigen Termine sind zentral an einem Ort: Urlaube, Krankmeldungen, Abwesenheiten und interne Ereignisse werden übersichtlich dargestellt. Chefs sehen sofort, wer verfügbar ist, und Mitarbeiter wissen genau, welche Tage frei oder belegt sind – ohne Telefonkette oder Missverständnisse.',
        },
        {
          id: 'erinnerungen',
          name: 'Automatische Erinnerungen',
          description: 'Erhalten Sie rechtzeitig Benachrichtigungen zu anstehenden Terminen. Immer pünktlich beim Kunden.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Taskey erinnert Mitarbeiter und Chefs automatisch an wichtige Termine, Aufgaben oder Fristen. Keine verpassten Deadlines mehr – alles läuft zuverlässig im Hintergrund, damit das Team sich auf die Arbeit konzentrieren kann.',
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
          detailedInfo: 'Die Live-Map zeigt dem Chef alle aktiven Mitarbeiter und ihre aktuellen Aufträge auf einen Blick. So erkennt man sofort, welche Projekte gerade laufen und wo Unterstützung gebraucht wird. Mit einem Klick öffnet sich die Detailansicht eines Mitarbeiters inklusive Auftragsinformationen – klar, transparent und ideal für die tägliche Einsatzplanung.',
        },
        {
          id: 'mitarbeiter-roadmap',
          name: 'Mitarbeiter-Roadmap',
          description: 'Sehen Sie die Routen Ihrer Mitarbeiter in Echtzeit. Optimale Koordination.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Am Ende eines Arbeitstages erstellt Taskey automatisch eine übersichtliche Roadmap des Tagesverlaufs: Welche Einsatzorte wurden besucht? In welcher Reihenfolge? Wann wurde Feierabend gemacht? Diese Darstellung hilft, Arbeitsabläufe nachzuvollziehen – ohne zusätzlichen Aufwand und ohne Eingreifen des Mitarbeiters.',
        },
        {
          id: 'routenplanung',
          name: 'Routenplanung',
          description: 'Planen Sie effiziente Routen für Ihre Mitarbeiter. Sparen Sie Zeit und Kosten.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Sobald ein Mitarbeiter einen Auftrag annimmt, erhält er automatisch eine empfohlene Route dorthin. Damit finden alle schnell, einfach und ohne Umwege zum Einsatzort. Das spart Zeit, senkt Stress und sorgt für reibungslose Abläufe im Team.',
        },
        {
          id: 'standortdokumentation',
          name: 'Automatische Live-Standortdokumentation',
          description: 'Automatische Dokumentation aller Standorte. Lückenlose Nachverfolgung für Ihre Buchhaltung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Taskey aktualisiert den Einsatzstandort während der Arbeitszeit automatisch alle 30 Sekunden, um Aufträge sauber und zuverlässig nachvollziehbar zu machen. Wichtig: Sobald ein Mitarbeiter auf „Pause" klickt, stoppt die Standortaktualisierung gemeinsam mit der Arbeitszeit. So bleibt die Dokumentation fair, transparent und im Einklang mit den Bedürfnissen des Teams.',
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
          detailedInfo: 'Taskey bündelt alle wichtigen Mitarbeiterdaten an einem zentralen Ort: Startdatum, Kontaktdaten, Position, Verantwortlichkeiten und vieles mehr. Der Chef erhält zudem eine transparente Effizienz-Auswertung – basierend auf Arbeitszeiten, erledigten Aufgaben und dem wirtschaftlichen Beitrag im Verhältnis zum Lohn. So entsteht ein faires, objektives Bild der Teamleistung.',
        },
        {
          id: 'aufgabenmanagement',
          name: 'Aufgabenmanagement',
          description: 'Weisen Sie Aufgaben zu und verfolgen Sie den Fortschritt. Klare Kommunikation im Team.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Aufgaben lassen sich mit wenigen Klicks bestimmten Mitarbeitern oder ganzen Teams zuordnen. Für Kolonnen kann der Chef oder die Bürofachkraft eine Führungsrolle festlegen, damit nicht jeder Mitarbeiter alle Details einzeln eingeben muss. Das sorgt für klare Strukturen, weniger Aufwand und bessere Organisation im Alltag.',
        },
        {
          id: 'verwaltung',
          name: 'Einfach Anlegen / Löschen',
          description: 'Mitarbeiter schnell hinzufügen oder entfernen. Intuitive Verwaltung in wenigen Klicks.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Neue Mitarbeiter können in Sekunden angelegt werden – ebenso schnell lassen sich Daten bearbeiten oder Accounts entfernen. Alles bleibt übersichtlich, flexibel und jederzeit aktuell, damit das Team ohne Verwaltungschaos arbeiten kann.',
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
          detailedInfo: 'Taskey ermöglicht es, jedem Projekt eine geplante Zeitspanne zuzuweisen – zum Beispiel 100 Stunden für eine komplette Sanierung. Während das Projekt läuft, zeigt das System automatisch an, ob der Zeitrahmen realistisch eingehalten wird oder ob das Team nachjustieren muss. Das sorgt für transparente Planung und optimale Ressourcenverteilung.',
        },
        {
          id: 'fortschritt',
          name: 'Fortschritt',
          description: 'Verfolgen Sie den Projektfortschritt in Echtzeit. Visuelle Darstellung des Status.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Alle geleisteten Stunden werden automatisch gesammelt und übersichtlich dargestellt. Chefs sehen jederzeit, wie viel bereits geschafft wurde und wie nah das Projekt am Abschluss ist. So bleibt der Fortschritt messbar, nachvollziehbar und einfach steuerbar.',
        },
        {
          id: 'buchhaltungsmanager',
          name: 'Buchhaltungsmanager',
          description: 'Alle projektbezogenen Kosten und Einnahmen im Überblick. Perfekt für die Abrechnung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Umsatz, Budget, Kosten nach Kategorien und der aktuelle Gewinn werden visuell und in Echtzeit gezeigt. Sobald Mitarbeiter Belege einscannen, erscheinen sie im Projekt — und können optional automatisch an Systeme wie LexOffice, Sage oder andere Buchhaltungsprogramme übertragen werden. Das spart enorm Zeit und sorgt für eine fehlerfreie Buchhaltung.',
        },
        {
          id: 'galerie',
          name: 'Galerie',
          description: 'Dokumentieren Sie Ihr Projekt mit Fotos. Automatische Zuordnung und Archivierung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Alle Projektbilder werden in einer eigenen Galerie gespeichert. Mitarbeiter können Bilder bearbeiten, Markierungen setzen oder Bereiche hervorheben, um exakt zu zeigen, was erledigt wurde und was noch offen ist. Ideal für Dokumentation, Nachweise und Kundenkommunikation.',
        },
        {
          id: 'belege',
          name: 'Belege & Ausgaben',
          description: 'Erfassen Sie alle Belege digital. Keine verlorenen Quittungen mehr.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Gescannte Belege erscheinen sofort im entsprechenden Projekt. Chefs oder Bürokräfte sehen alle Ausgaben klar strukturiert an einem Ort – inklusive Kategorien, Beträgen und Upload-Zeitpunkten. Auf Wunsch werden die Daten direkt in die verknüpfte Buchhaltungssoftware übertragen.',
        },
        {
          id: 'auftraege',
          name: 'Aufträge',
          description: 'Verwalten Sie alle Aufträge innerhalb eines Projekts. Strukturiert und übersichtlich.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Jedes Projekt kann mehrere Aufträge enthalten. Ein großes Projekt – wie z. B. die Sanierung eines gesamten Hauses – kann in einzelne Aufgaben aufgeteilt werden, etwa „Steckdosen verlegen". Alle Aufträge sind in einem eigenen Tab sichtbar und lassen sich einzeln planen, bearbeiten und auswerten. Das macht komplexe Projekte übersichtlich und leicht kontrollierbar.',
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
          detailedInfo: 'Jeder Auftrag enthält alle wichtigen Details wie Beschreibung, Materialien, Anforderungen und besondere Hinweise. Alles ist übersichtlich dargestellt, damit Mitarbeiter genau wissen, was zu tun ist – ohne Rückfragen oder Missverständnisse.',
        },
        {
          id: 'mitarbeiter',
          name: 'Mitarbeiter',
          description: 'Weisen Sie Mitarbeiter zu Aufträgen zu. Optimale Ressourcenplanung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Im Auftrag sieht der Chef alle beteiligten Mitarbeiter, ihre Arbeitszeiten und die automatisch berechneten Lohnkosten basierend auf der geleisteten Zeit. Das schafft volle Transparenz und hilft, Kosten realistisch einzuschätzen.',
        },
        {
          id: 'zeiterfassung',
          name: 'Zeiterfassung',
          description: 'Erfassen Sie Arbeitszeiten direkt am Auftrag. Automatische Zuordnung.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Sobald ein Mitarbeiter den Auftrag startet, beginnt Taskey automatisch mit der Arbeitszeiterfassung – parallel zur Einsatzstandort-Dokumentation. Wichtig: Bei „Pause" wird sowohl die Zeit als auch der Standort sofort gestoppt, damit die Erfassung fair und eindeutig bleibt.',
        },
        {
          id: 'besorgungsfahrten',
          name: 'Besorgungsfahrten',
          description: 'Dokumentieren Sie Materialfahrten. Kilometerabrechnung inklusive.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Mitarbeiter können mit einem Klick eine Besorgungsfahrt starten. Der Standort wird weiterhin dokumentiert, aber klar vom eigentlichen Kundeneinsatz getrennt. Der Chef entscheidet später, ob diese Zeit vergütet wird oder nicht – flexibel und transparent.',
        },
        {
          id: 'pause',
          name: 'Pause',
          description: 'Erfassen Sie Pausen gesetzeskonform. Automatische Berechnung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Mit einem Klick auf „Pause" wird die Arbeitszeit angehalten und die Standortaktualisierung gestoppt. So bleiben Ruhezeiten korrekt erfasst und eindeutig getrennt vom aktiven Auftrag.',
        },
        {
          id: 'abschluss',
          name: 'Auftrag Beenden + Abschlussbericht',
          description: 'Schließen Sie Aufträge mit einem detaillierten Bericht ab. Professionelle Dokumentation.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Ist der Auftrag erledigt, können Mitarbeiter ihn beenden und einen Abschlussbericht erstellen – schriftlich oder per Sprachfunktion. Der Bericht enthält: Beschreibung der ausgeführten Arbeiten, Zeitaufwand, Einsatzorte, Fotos und digitale Kundensignatur. Alles wird automatisch als PDF erzeugt und steht dem Chef sofort im Dashboard zur Verfügung – inklusive Exportfunktion.',
        },
        {
          id: 'galerie',
          name: 'Galerie',
          description: 'Fotodokumentation des Auftrags. Vorher-Nachher-Bilder für den Kunden.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'In jedem Auftrag gibt es eine eigene Galerie für Bilder. Chefs können Bilder hochladen, markieren und Bereiche hervorheben ("hier fehlen noch Steckdosen"). Mitarbeiter können Fotos hinzufügen und diese direkt in ihren Abschlussbericht einbauen. Das sorgt für saubere Dokumentation und klare Kommunikation.',
        },
        {
          id: 'buchhaltungsmanager',
          name: 'Buchhaltungsmanager',
          description: 'Alle Kosten und Belege zum Auftrag. Direkt abrechnungsfertig.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'Wie bei Projekten zeigt Taskey auch für einzelne Aufträge alle finanziellen Daten übersichtlich an: Kosten, Kategorien, Budget, Gewinn und gescannte Belege. Auf Wunsch lassen sich Belege direkt in Buchhaltungsprogramme wie LexOffice, Sage und andere übertragen.',
        },
        {
          id: 'roadmap',
          name: 'Mitarbeiter-Roadmap',
          description: 'Sehen Sie die Route zum Auftragsort. GPS-Navigation integriert.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Am Ende des Tages zeigt Taskey eine Roadmap, die den Ablauf des Auftrags dokumentiert: Startpunkt, Zwischenschritte, Einsatzorte und Arbeitsende. Alles klar visualisiert, ohne dass Mitarbeiter irgendetwas manuell eingeben müssen.',
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
          detailedInfo: 'Taskey speichert alle wichtigen Kundendaten übersichtlich an einem zentralen Ort: Namen, Adressen, Kontaktinformationen sowie individuelle Hinweise zu jedem Kunden. So haben Chefs und Bürokräfte jederzeit schnellen Zugriff auf alle relevanten Informationen – perfekt für klare Kommunikation, saubere Dokumentation und eine reibungslose Projektplanung.',
        },
      ],
    },
    {
      id: 'qr-nfc',
      name: 'QR-Codes/NFC Chips',
      features: [
        {
          id: 'standorte',
          name: 'Standorte',
          description: 'Verwalten Sie QR-Codes für verschiedene Standorte. Einfache Zuordnung.',
          image: '/Unbenanntes_Projekt 3.png',
          detailedInfo: 'An wichtigen oder häufig genutzten Orten wie der Firmenzentrale, dem Lager oder festen Einsatzpunkten können QR-Codes und NFC-Tags angebracht werden. Mitarbeiter scannen sie beim Start oder Ende ihrer Arbeitszeit, sodass der Check-in und Check-out schnell, zuverlässig und ohne manuelle Eingaben funktioniert.',
        },
        {
          id: 'details',
          name: 'Details',
          description: 'Detaillierte Informationen zu jedem QR-Code. Wer hat wann gescannt?',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Taskey speichert automatisch, wer sich wann an einem Standort ein- oder ausgecheckt hat. Die gesamte Historie bleibt übersichtlich dokumentiert, damit Chefs jederzeit nachvollziehen können, welche Mitarbeiter vor Ort waren und zu welchen Zeiten. Das sorgt für klare Nachweise und eine saubere Einsatzübersicht.',
        },
        {
          id: 'historie',
          name: 'Historie',
          description: 'Vollständige Scan-Historie. Lückenlose Dokumentation für Ihre Zeiterfassung.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Taskey speichert automatisch, wer sich wann an einem Standort ein- oder ausgecheckt hat. Die gesamte Historie bleibt übersichtlich dokumentiert, damit Chefs jederzeit nachvollziehen können, welche Mitarbeiter vor Ort waren und zu welchen Zeiten. Das sorgt für klare Nachweise und eine saubere Einsatzübersicht.',
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
          detailedInfo: 'Taskey zeigt alle Arbeitsstunden der Mitarbeiter übersichtlich an einem zentralen Ort. Chefs und Bürokräfte sehen sofort, wer wie lange gearbeitet hat – inklusive Pausen, Besorgungsfahrten und Einsatzzeiten. Die Daten werden automatisch erfasst und aktualisiert, sodass keine manuelle Nachbearbeitung nötig ist und die Planung immer auf verlässlichen Informationen basiert.',
        },
      ],
    },
    {
      id: 'rentabilitaet',
      name: 'Mr Buchhaltung',
      features: [
        {
          id: 'buchhaltung',
          name: 'Rentabilität',
          description: 'Ihr digitaler Buchhalter. Automatische Auswertungen und Berichte für Ihre Buchhaltung.',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Taskey zeigt auf einen Blick, wie wirtschaftlich Projekte, Aufträge und das gesamte Unternehmen laufen. Alle relevanten Buchhaltungsdaten – Umsätze, Kosten, Budgets und Ausgaben – werden automatisch gesammelt und übersichtlich dargestellt. Zusätzlich analysiert Taskey die Rentabilität jedes einzelnen Mitarbeiters: Wie viel Wert bringt ein Mitarbeiter ein? Wie viel arbeitet er? Und wie steht das im Verhältnis zu seinem Lohn? Aus diesen Daten entsteht eine klare, objektive Bewertung, die Chefs dabei unterstützt, bessere Entscheidungen zu treffen und ihr Unternehmen effizienter zu steuern.',
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
          detailedInfo: 'Alle Mitarbeiter lassen sich direkt auswählen und verwalten. Für jede Person sieht man auf einen Blick alle relevanten Abwesenheiten – ob Urlaub, Krankheit oder sonstige Ausfälle.',
        },
        {
          id: 'status',
          name: 'Status',
          description: 'Aktueller Status aller Urlaubs- und Krankmeldungen. Genehmigt oder in Bearbeitung?',
          image: '/Unbenanntes_Projekt 5.png',
          detailedInfo: 'Der Status eines Mitarbeiters kann einfach gesetzt werden: krank, arbeitsfähig, im Urlaub oder andere interne Kategorien. Dadurch bleibt jederzeit klar, wer verfügbar ist und wer nicht.',
        },
        {
          id: 'planung',
          name: 'Planung + Kalender',
          description: 'Planen Sie Abwesenheiten im Voraus. Kalenderansicht für bessere Übersicht.',
          image: '/Unbenanntes_Projekt 6.png',
          detailedInfo: 'Urlaube und Krankmeldungen sind automatisch mit dem Kalender verknüpft. Chefs und Bürokräfte erkennen sofort Überschneidungen, freie Tage und verfügbare Kapazitäten. Die gesamte Abwesenheitsplanung ist übersichtlich, zentral und transparent organisiert.',
        },
      ],
    },
  ];

  const currentCategory = categories.find((c) => c.id === activeCategory);
  const currentFeature = currentCategory?.features.find((f) => f.id === activeFeature);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-8">
              <Image 
                src="/logoblue.png" 
                alt="Taskey Logo" 
                width={144}
                height={144}
                className="h-36 w-auto mx-auto"
                sizes="144px"
                quality={75}
                loading="lazy"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Was kann Taskey?
            </h1>
            <p className="text-xl text-gray-600">
              Alle Funktionen für Ihren effizienten Betrieb
            </p>
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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 border-b border-gray-200 pb-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setActiveFeature(category.features[0].id);
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Feature Content */}
          <div className="grid md:grid-cols-12 gap-8">
            {/* Feature List */}
            <div className="md:col-span-4 space-y-4">
              {currentCategory?.features.map((feature) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    activeFeature === feature.id
                      ? 'bg-white shadow-md border-2 border-blue-900'
                      : 'bg-white hover:bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  <h3 className="font-bold text-gray-900 text-lg">{feature.name}</h3>
                </button>
              ))}
            </div>

            {/* Feature Details */}
            <div className="md:col-span-8 bg-white rounded-xl shadow-xl p-8">
              {currentFeature && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {currentFeature.name}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {currentFeature.description}
                    </p>
                  </div>
                  
                  {/* Feature Description Box */}
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8 border-2 border-blue-200">
                    <div className="max-w-2xl">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            So funktioniert's
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {currentFeature.detailedInfo || currentFeature.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Tips Section - Only show if detailedInfo exists */}
                  {'detailedInfo' in currentFeature && currentFeature.detailedInfo && (
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Gut zu wissen</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
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

        {/* Demo Request Section - Clean Blue */}
        <div className="relative mt-32 mb-20 overflow-hidden">
          {/* Simple clean blue background */}
          <div className="absolute inset-0 bg-blue-900"></div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Big Logo */}
              <div className="mb-10">
                <Image 
                  src="/843B6B8E-CED8-4FF8-8C63-B354140A7BC5e5e1f940b1a8d4df34c43ec444a293f3116e09c2a98dcecd8e8882d3099b7c2d.png" 
                  alt="Taskey Logo" 
                  width={192}
                  height={192}
                  className="h-48 w-auto mx-auto opacity-90"
                  sizes="192px"
                  quality={75}
                  loading="lazy"
                />
              </div>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-white px-4 py-2 font-bold text-sm mb-6">
                14 TAGE KOSTENLOS TESTEN
              </div>

              {/* Main Headline */}
              <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
                Bereit für die
                <span className="block text-cyan-400">
                  Zukunft?
                </span>
              </h2>

              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Erleben Sie Taskey live in Aktion! Unsere Experten zeigen Ihnen persönlich, 
                wie Sie <span className="text-cyan-400 font-bold">30-40% Zeit sparen</span> und Ihren Betrieb auf das nächste Level bringen.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
                {[
                  { text: "15-Min Demo", subtext: "Schnell & kompakt" },
                  { text: "Maßgeschneidert", subtext: "Für Ihren Betrieb" },
                  { text: "Sofort starten", subtext: "Ohne Verpflichtung" }
                ].map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:scale-105">
                    <div className="text-white font-bold text-lg">{feature.text}</div>
                    <div className="text-blue-200 text-sm">{feature.subtext}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button 
                  onClick={() => setDemoModalOpen(true)}
                  className="group relative inline-flex items-center gap-3 bg-cyan-400 hover:bg-cyan-300 text-gray-900 font-black text-lg px-10 py-5 rounded-full transition-all hover:scale-110 hover:shadow-2xl shadow-xl"
                >
                  <span className="relative z-10">Jetzt Demo buchen</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <a 
                  href="tel:+4915168488999" 
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-lg px-10 py-5 rounded-full border-2 border-white/30 transition-all hover:scale-105"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Oder direkt anrufen
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-blue-200 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Keine Kreditkarte nötig
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  14 Tage kostenlos
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Jederzeit kündbar
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
