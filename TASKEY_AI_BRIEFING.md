# Taskey - Vollständiges Produkt & Tech-Briefing für KI-Assistenten

## PROJEKT-ÜBERSICHT

**Produkt:** Taskey - Deutsche Business Management Software für Handwerksbetriebe  
**Zielgruppe:** Handwerker, Facility Management, Baufirmen (primär 5-100+ Mitarbeiter)  
**Website:** taskey.de (Next.js 14, TypeScript, Tailwind CSS)  
**Deployment:** Vercel (automatisch bei Git Push)  
**Repo:** github.com/fynnoman/taskey

---

## KERN-PRODUKTVERSPRECHEN

Taskey ist eine **All-in-One Betriebsführungssoftware** speziell für deutsche Handwerksbetriebe:
- **Zeiterfassung & GPS-Tracking** (Live-Standorte aller Mitarbeiter)
- **Auftragsverwaltung** (Projekte, Aufgaben, Fotos, Dokumente)
- **Digitale Berichte** (PDF-Export mit Unterschrift direkt vor Ort)
- **Kundenverwaltung** (CRM-Light für Handwerksbetriebe)
- **Buchhaltungs-Integration** (LexOffice, DATEV Export)
- **Mobile-First** (iOS & Android Apps für Mitarbeiter im Feld)

**USP:** "Von Handwerkern für Handwerker" - DSGVO-konform, deutsche Server, keine komplizierte Einrichtung

---

## PRICING-STRUKTUR (Stand: Februar 2026)

### 4-Tier Pricing-Modell (pro Mitarbeiter/Monat, zzgl. MwSt.):

**1. START** → 14,73€
- Alle Kernfunktionen (keine Feature-Beschränkungen!)
- 50 GB Gesamtspeicher
- 12 Monate Historie
- Standard-Support (E-Mail, 24h)
- Buchhaltungs-Export

**2. GROW** → 23,67€ (BELIEBTESTE WAHL - Cyan Badge)
- Alle Funktionen
- 250 GB Gesamtspeicher
- 24 Monate Historie
- Erweiterte Auswertungen (Custom Reports, KPI-Dashboards)

**3. SCALE** → 34,42€
- Voller Funktionsumfang
- 1 TB Speicher
- **Unbegrenzte Historie** (alle Daten für immer)
- Priorisierter Support (schnellere Reaktionszeiten)

**4. ENTERPRISE** → Individuell
- Für Betriebe ab 100 Mitarbeitern
- Maßgeschneiderte Lösungen
- Dedizierter Account-Manager
- Individuelle Speicherlösungen (>2TB)
- Custom Security Features & Integrationen

### Storage Add-ons (flexibel zubuchbar):
- +100 GB → 8,37€/Monat
- +500 GB → 38,11€/Monat
- +1 TB → 68,27€/Monat

### Premium Manager Service:
- **239€ / Woche** (jederzeit kündbar, zu jedem Paket zubuchbar)
- Dedizierter Experte (100% für dein Unternehmen)
- 24/7 Priority Support
- Proaktive Optimierung
- Persönliche Schulungen + Vor-Ort Service
- Ø Zeitersparnis: 50 Stunden/Monat

**Wichtig:** Alle Pakete haben ALLE Features - Unterschiede nur bei Speicher, Historie & Support-Level!

---

## TECHNOLOGIE-STACK

### Frontend (Website):
- **Framework:** Next.js 14 mit App Router
- **Sprache:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (auto-deploy bei Git Push)
- **Komponenten:** React 18+ mit 'use client' directives
- **Icons:** Inline SVG (keine Emojis!)

### Routing-Struktur:
```
/                    → Homepage (Hero, Features, Testimonials, FAQ)
/pricing             → Pricing Page (4 Tiers + Add-ons)
/demo                → Demo-Anfrage Landing Page
/enterprise          → Enterprise-Detail Page (100+ Mitarbeiter)
/premium-manager     → Premium Manager Service Detail
/features            → Feature-Übersicht
/rollen              → Rollen & Rechte Info
/was-ist-taskey      → Produkt-Erklärung
/about               → Über Taskey
/agb                 → AGB
/datenschutz         → Datenschutzerklärung
/impressum           → Impressum
```

### Komponenten-Architektur:
- **Modal-Komponenten:** DemoBookingModal, ManagerRequestModal, EnterpriseApplicationModal
- **Layout-Komponenten:** Header, Footer, ConditionalHeader, DarkHeader
- **Utility:** CookieBanner, CookieConsent, LayoutWrapper
- **Page-Komponenten:** Jede Route hat eigene page.tsx

---

## DESIGN-SYSTEM

### Farbpalette:
- **Main Background:** White (#FFFFFF)
- **Secondary:** Dark Gray (#1f2937, #374151)
- **Primary Accent:** Dark Blue (#1e3a8a, #1e40af)
- **Highlight:** Cyan (#06b6d4, #22d3ee - für CTAs, Badges)
- **Success:** Green (#10b981, #059669)
- **GROW Badge:** Cyan (#06b6d4) statt Amber
- **SCALE Tier:** Purple (#a855f7, #9333ea)

### Typography:
- **Font-Familie:** System default (gerendert als SF Pro auf macOS)
- **Gewichte:** font-black (900), font-bold (700), font-semibold (600), font-medium (500)
- **Größen:** text-xs bis text-7xl
- **Führung:** leading-tight, leading-relaxed je nach Kontext

### Design-Patterns:
- **Cards:** rounded-2xl bis rounded-3xl, shadow-xl, border border-gray-100
- **Buttons:** rounded-xl, hover:scale-105, transition-all
- **Gradients:** from-cyan-400 to-blue-400, from-blue-600 via-blue-700 to-blue-800
- **Glassmorphism:** bg-white/10 backdrop-blur-sm border border-white/20
- **Hover-States:** Überall! hover:bg-*, hover:shadow-*, hover:border-*

### Responsive Breakpoints:
- **Mobile-First:** Basis-Styles für Handy
- **md:** 768px (Tablets)
- **lg:** 1024px (Desktop)
- **Grid-System:** grid-cols-1 md:grid-cols-2 lg:grid-cols-3

---

## CONTENT-STRATEGIE

### Tonalität:
- **Sprache:** Deutsch (100% der Inhalte)
- **Stil:** Professionell aber zugänglich, "Du"-Form in Marketing, "Sie" in rechtlichen Texten
- **Buzzwords:** Vermeiden! Stattdessen konkrete Vorteile
- **Fokus:** Praktischer Nutzen für Handwerker (keine IT-Jargon)

### Key-Messages:
1. **Einfachheit:** "In unter 5 Minuten einsatzbereit"
2. **Transparenz:** "Ohne versteckte Kosten - zahlen Sie nur pro Mitarbeiter"
3. **Compliance:** "100% DSGVO-konform, deutsche Server"
4. **Trial:** "14 Tage kostenlos testen, keine Kreditkarte nötig"
5. **Flexibilität:** "Jederzeit kündbar, Upgrade/Downgrade möglich"

### Trust-Elemente:
- 🇩🇪 Deutsche Server (Datensicherheit)
- 14 Tage kostenlose Testphase
- 0€ Einrichtungsgebühr
- 100% DSGVO-konform
- Keine Kreditkarte für Trial nötig

---

## FEATURE-KATALOG (Vollständig)

### Zeiterfassung:
- Start/Stop per App (QR-Code, NFC-Tags möglich)
- GPS-Tracking mit Live-Standorten
- Automatische Pausen-Erfassung
- Fahrtzeit-Tracking
- Live-Map aller Mitarbeiter (Dashboard)

### Auftragsverwaltung:
- Projekte & Aufgaben anlegen
- Fotos & Dokumente hochladen (vor Ort)
- Abschlussberichte generieren (PDF + digitale Unterschrift)
- Kundenverwaltung (CRM-Light)
- Mitarbeiter-Roadmap (Tagesplanung)

### Verwaltung:
- Abwesenheiten (Urlaub, Krankheit) verwalten
- Rollen- & Rechteverwaltung
- Dashboard mit Auswertungen
- Buchhaltungs-Export (LexOffice, DATEV, etc.)
- Custom Reports & KPI-Dashboards (GROW+)

### Mobile Apps:
- iOS App (App Store)
- Android App (Google Play)
- Offline-Modus (wichtig auf Baustellen!)
- Push-Notifications

---

## HISTORIE & SPEICHER (Unterscheidungsmerkmale)

### Was ist "Historie"?
Bestimmt, wie lange alte Daten (Zeiterfassungen, Aufträge, Berichte, Dokumente) abrufbar bleiben:
- **START:** 12 Monate (rollierende Historie)
- **GROW:** 24 Monate
- **SCALE:** Unbegrenzt (alle Daten bleiben für immer)
- **ENTERPRISE:** Unbegrenzt + Custom Archivierung

**Use-Case:** Wichtig für Gewährleistung, Nachweise, Steuerprüfungen, Bauprojekt-Dokumentation

### Was ist "Speicher"?
Cloud-Speicher für:
- Fotos von Baustellen/Arbeiten
- Hochgeladene Dokumente (Rechnungen, Verträge)
- Unterschriebene Berichte (PDFs)
- Kundendateien
- Projekt-Anhänge

**Hinweis:** Speicher ist "Gesamtspeicher" für den ganzen Betrieb, nicht pro Mitarbeiter!

---

## MODALS & CONVERSION-FLOWS

### Demo-Anfrage:
- **Trigger:** "Kostenlos testen" Buttons überall
- **Modal:** DemoBookingModal (E-Mail, Firma, Mitarbeiteranzahl)
- **CTA:** "14 Tage kostenlos testen"
- **API:** /api/send-demo-request

### Manager-Anfrage:
- **Trigger:** "Jetzt anfragen" in Premium Manager Section
- **Modal:** ManagerRequestModal
- **API:** /api/send-manager-request

### Enterprise-Anfrage:
- **Trigger:** "Mehr erfahren" in Enterprise Banner
- **Ziel:** /enterprise → EnterpriseApplicationModal
- **Use-Case:** Betriebe ab 100 Mitarbeitern mit Custom-Anforderungen

---

## PRICING PAGE DETAILS (Wichtigste Seite!)

### Layout-Struktur:
1. **Hero Section** (dark gradient, cyan accents, "14 Tage kostenlos testen" badge)
2. **3-Card Grid** (START, GROW scale-105 mit Cyan Badge oben, SCALE)
3. **Enterprise Banner** (full-width, 2 columns, Hintergrundbild mit 30% opacity)
4. **Premium Manager Section** (2 columns: blue gradient links, gray mit Hintergrundbild rechts)
5. **Trust Bar** (4 Stats in Grid)
6. **Storage Add-ons** (3 Cards)
7. **All Features Included** (12 Features mit Checkmarks)
8. **FAQ** (5 collapsible Details)
9. **Final CTA** (dual buttons + trust badges)

### Besonderheiten:
- **Tooltips:** Jedes Feature hat Info-Icon mit Hover-Tooltip (detaillierte Erklärungen)
- **GROW Badge:** Position top-4 (innerhalb Card), cyan-400 Farbe
- **Icons:** Ausschließlich SVG, KEINE Emojis!
- **Images:** 
  - Enterprise: `/AAD83654-0D2A-4539-A640-4D8D7E2065E2.PNG`
  - Premium Manager: `/2FD11192-20F9-4069-81C0-F1F4E6F66202.png`
- **Responsive:** Mobile-first, collapsed auf 1 Column auf Handy

### Info-Boxen:
- **Speicher-Erklärung:** In Storage Add-ons Section
- **Historie-Erklärung:** In "All Features Included" Section

---

## GIT & DEPLOYMENT

### Workflow:
```bash
git add .
git commit -m "message"
git push  # Trigger automatisches Vercel Deployment
```

### Branch-Strategie:
- **main** → Production (deployed auf taskey.de)
- Keine Feature-Branches (Direct-to-Main Development)

### Vercel-Setup:
- Auto-Deploy bei Push
- Build-Command: `npm run build`
- Output: `.next/`
- Environment: Node.js 18+

### Wichtige Files:
- `next.config.ts` → Next.js Konfiguration
- `tailwind.config.js` → Tailwind-Theme
- `package.json` → Dependencies
- `tsconfig.json` → TypeScript-Config
- `vercel.json` → Deployment-Settings

---

## HÄUFIGE ÄNDERUNGS-PATTERNS

### Neue Pricing-Änderung:
1. `/app/pricing/page.tsx` → Preise anpassen
2. `/app/enterprise/page.tsx` → Konsistenz prüfen
3. `/app/premium-manager/page.tsx` → Konsistenz prüfen
4. Git Push → Auto-Deploy

### Neues Feature hinzufügen:
1. Content in "All Features Included" Section
2. Ggf. neue Detail-Page erstellen
3. Navigation/Footer Links updaten

### Design-Änderung:
- Tailwind Classes ändern (inline in TSX)
- Konsistenz über alle Pages beachten
- Mobile-Responsiveness testen

---

## BEKANNTE CONSTRAINTS

### Was funktioniert NICHT:
- ❌ Emojis (müssen SVG Icons sein)
- ❌ Externe Icon-Libraries (Tailwind/Heroicons bevorzugt)
- ❌ Komplexe State-Management (nur useState für Modals)
- ❌ Server-Side Data-Fetching (alles statisch/client-side)

### Best Practices:
- ✅ Mobile-First Development
- ✅ Semantic HTML (für SEO)
- ✅ Accessibility (aria-labels wo sinnvoll)
- ✅ Performance (Next.js Image Optimization)
- ✅ TypeScript Strict Mode (keine `any` types)

---

## DEMO-LINKS & REFERENZEN

### Externe Links:
- **Demo-App:** https://demo.vars-development.com/dashboard
- **Email-Kontakt:** info@taskey.de

### Bilder im /public Verzeichnis:
- `AAD83654-0D2A-4539-A640-4D8D7E2065E2.PNG` (Enterprise)
- `2FD11192-20F9-4069-81C0-F1F4E6F66202.png` (Premium Manager)
- `logoblue.png` (Logo)
- Diverse Feature-Screenshots

---

## ANWEISUNGEN FÜR KI-ASSISTENTEN

### Wenn du Code-Änderungen vornimmst:
1. **Immer TypeScript** verwenden (keine JS-Files)
2. **Tailwind CSS** für Styling (keine CSS-Dateien außer globals.css)
3. **Mobile-First** denken (sm:, md:, lg: breakpoints)
4. **Konsistenz** über alle Pages (Design-System beachten)
5. **Deutsche Sprache** für alle User-Facing Texte
6. **Accessibility** beachten (Keyboard-Nav, ARIA-Labels)
7. **SEO-Optimierung** (Semantic HTML, Meta-Tags)

### Wenn du neue Features planst:
1. Passt es zur Handwerker-Zielgruppe?
2. Ist es DSGVO-konform?
3. Funktioniert es auf Mobile (primäre Nutzung)?
4. Gibt es einen klaren Business-Value?

### Wenn du Pricing anpasst:
1. **ALLE** Pakete updaten (nicht nur pricing/page.tsx)
2. Konsistenz: Enterprise-Page, Premium-Manager-Page
3. FAQ aktualisieren (wenn nötig)
4. Trust-Elemente beibehalten

---

## QUICK-REFERENCE: WICHTIGSTE DATEIEN

```
/app/pricing/page.tsx           → Haupt-Pricing-Seite (621 Zeilen)
/app/enterprise/page.tsx        → Enterprise Details
/app/premium-manager/page.tsx   → Premium Manager Details
/app/demo/page.tsx              → Demo Landing
/components/Header.tsx          → Main Navigation
/components/Footer.tsx          → Site Footer
/components/DemoBookingModal.tsx → Demo-Request Form
/app/globals.css                → Global Styles
/public/*                       → Static Assets
```

---

## KONTEXT-EXTRAS

### Letzte wichtige Änderungen:
- ✅ START Historie: 6 → 12 Monate
- ✅ Alle Emojis durch SVG Icons ersetzt
- ✅ Tooltips mit detaillierten Feature-Erklärungen hinzugefügt
- ✅ Premium Manager: 499€ einmalig → 239€/Woche
- ✅ GROW Badge: Amber → Cyan, Position -top-4 → top-4
- ✅ Storage & Historie Info-Boxen eingefügt
- ✅ Enterprise: 150 → 100 Mitarbeiter Empfehlung

### Offene TODOs:
- [ ] SLA-Referenzen in AGB-HTML-Dateien (User hat Edit abgebrochen)
- [ ] Weitere Testimonials/Case-Studies
- [ ] Performance-Optimierung (PageSpeed)

---

**ENDE DES BRIEFINGS**

*Dieses Dokument enthält alle relevanten Informationen über Taskey (Produkt, Tech-Stack, Design, Content) für effektive KI-Assistenz. Letzte Aktualisierung: 10. Februar 2026*
