/**
 * Verbindliche Vertragslogik für Taskey.
 * Zentrale Quelle für Marketing- und News-Aussagen. Bitte NICHT parallel
 * abweichende Formulierungen in Komponenten einführen — Aussagen entweder
 * aus dieser Datei lesen oder hier ergänzen und anschließend nachziehen.
 */

export type Locale = "de" | "en" | "fr";

export const CONTRACT_COPY: Record<Locale, {
  /** Kurze Vertragszusammenfassung, z. B. für CTAs/Trust-Bar. */
  headline: string;
  /** Ausführlicher Satz für Fließtext. */
  body: string;
  /** Formulierung für die kostenlose Testphase. */
  trial: string;
  /** Formulierung für Kündbarkeit / Vertragsvarianten. */
  cancellation: string;
}> = {
  de: {
    headline: "Jahresvertrag oder monatlich kündbar",
    body:
      "Nach 14 Tagen kostenlosem Test entscheiden Sie aktiv über einen Vertrag: entweder als Jahresvertrag zu vergünstigten Konditionen oder als monatlich kündbare Variante zum Aufpreis. Es gibt keine automatische Verlängerung und keine automatische Umwandlung aus dem Testzeitraum.",
    trial: "14 Tage kostenlos testen. Keine Kreditkarte erforderlich.",
    cancellation:
      "Jahresvertrag zu vergünstigten Konditionen oder monatlich kündbare Variante zum Aufpreis. Keine automatische Verlängerung nach dem Test.",
  },
  en: {
    headline: "Annual contract or monthly rolling",
    body:
      "After a 14-day free trial you actively choose a contract: either an annual contract at a preferred rate or a monthly rolling plan at a higher rate. There is no automatic renewal and no automatic conversion from the trial period.",
    trial: "14-day free trial. No credit card required.",
    cancellation:
      "Annual contract at a preferred rate, or a monthly rolling plan at a higher rate. No automatic renewal after the trial.",
  },
  fr: {
    headline: "Contrat annuel ou résiliation mensuelle",
    body:
      "Après 14 jours d'essai gratuit, vous choisissez activement un contrat : soit un contrat annuel à tarif préférentiel, soit une formule à résiliation mensuelle à un tarif supérieur. Aucune reconduction automatique, aucune conversion automatique à la fin de l'essai.",
    trial: "Essai gratuit de 14 jours. Sans carte bancaire.",
    cancellation:
      "Contrat annuel à tarif préférentiel ou formule à résiliation mensuelle à un tarif supérieur. Aucune reconduction automatique après l'essai.",
  },
};

export const SHARE_COPY: Record<Locale, {
  /** Kurzbeschreibung von Taskey Share. */
  summary: string;
  /** Interaktive Funktionen, die Auftraggeber im Share-Portal haben. */
  capabilities: string[];
  /** Zugangsmodell. */
  access: string;
}> = {
  de: {
    summary:
      "Taskey Share ist das eingeloggte Auftraggeber-Portal von Taskey. Jeder Auftraggeber erhält eigene Zugangsdaten und meldet sich im Browser an — ohne App-Installation.",
    capabilities: [
      "Live-Status von Objekten und Einsätzen",
      "Nachweise und Fotodokumentationen",
      "Qualitätsdaten und Reports",
      "Freigegebene Rechnungsinformationen",
      "Ticketsystem",
      "Beanstandungen melden",
      "Wünsche übermitteln",
      "Sonderaufträge anfragen",
      "Kommunikation und nachvollziehbare Bearbeitungsverläufe",
    ],
    access: "Eigener Login pro Auftraggeber. Zugangsdaten per E-Mail, Anmeldung im Browser, keine App-Installation.",
  },
  en: {
    summary:
      "Taskey Share is the authenticated client portal for Taskey. Each client receives their own credentials and signs in from the browser — no app install required.",
    capabilities: [
      "Live status of sites and jobs",
      "Proof of service and photo documentation",
      "Quality data and reports",
      "Shared invoice information (where enabled)",
      "Ticket system",
      "Flag complaints",
      "Submit requests",
      "Request special jobs",
      "Communication with traceable histories",
    ],
    access: "Dedicated login per client. Credentials by email, sign-in from the browser, no app install.",
  },
  fr: {
    summary:
      "Taskey Share est le portail authentifié destiné aux donneurs d'ordre de Taskey. Chaque client reçoit ses propres identifiants et se connecte depuis le navigateur, sans installation d'application.",
    capabilities: [
      "Statut en direct des sites et interventions",
      "Justificatifs et documentation photo",
      "Données qualité et rapports",
      "Informations de facturation partagées (lorsque autorisées)",
      "Système de tickets",
      "Signalement de réclamations",
      "Transmission de demandes",
      "Demande de prestations spéciales",
      "Communication avec historique traçable",
    ],
    access: "Identifiant dédié par client. Accès par e-mail, connexion depuis le navigateur, sans application.",
  },
};

export const SUPPORT_COPY: Record<Locale, {
  /** Bestätigtes Grund-Supportmodell. */
  baseline: string;
  /** Formulierung für erweiterten Support. */
  extended: string;
}> = {
  de: {
    baseline: "E-Mail-Support ist Bestandteil jedes Taskey-Tarifs.",
    extended: "Erweiterter oder telefonischer Support ist als individuell vereinbarte Leistung möglich.",
  },
  en: {
    baseline: "Email support is included in every Taskey plan.",
    extended: "Extended or phone support is available as an individually agreed service.",
  },
  fr: {
    baseline: "Le support par e-mail est inclus dans chaque formule Taskey.",
    extended: "Un support étendu ou téléphonique est possible sur accord individuel.",
  },
};
