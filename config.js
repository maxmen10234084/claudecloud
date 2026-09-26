/*
 * ============================================================
 *  DEINE SHOP-EINSTELLUNGEN
 *  Das ist die EINZIGE Datei, die du für den Shop bearbeiten musst.
 *
 *  Regeln, damit nichts kaputtgeht:
 *  - Text immer in "Anführungszeichen" lassen.
 *  - Nach jedem Eintrag ein Komma , setzen.
 *  - Preise sind reine Zahlen OHNE Anführungszeichen und OHNE €: 19 oder 19.90
 *  - Zeilen mit // davor sind Kommentare und werden ignoriert.
 *  - Nach dem Speichern die Seite neu laden. Erscheint oben ein roter
 *    Hinweis, hat sich ein Tippfehler eingeschlichen.
 * ============================================================
 */
window.SHOP = {
  // ------------------------------------------------------------
  //  ALLGEMEIN
  // ------------------------------------------------------------
  name: "Klarwerk",
  // Kurzer Slogan neben dem Logo (optional, "" = aus)
  tagline: "Digitale Vorlagen",
  email: "kontakt@example.com",

  // Hinweis unter jedem Preis. Digistore24 zeigt Endpreise inkl. MwSt. –
  // trage dort denselben Bruttopreis ein wie hier.
  priceNote: "inkl. MwSt.",

  // ------------------------------------------------------------
  //  STARTBEREICH (ganz oben)
  // ------------------------------------------------------------
  hero: {
    eyebrow: "Neu: Die 2027-Editionen sind da",
    headline: "Weniger Chaos. Mehr Klarheit.",
    headlineAccent: "In Minuten statt Wochen.",
    subline:
      "Durchdachte Vorlagen für Finanzen, Karriere und Selbstständigkeit – gemacht für Deutschland, mit eingebauten KI-Assistenten, die dir die Arbeit abnehmen.",
    ctaPrimary: "Vorlagen entdecken",
    ctaSecondary: "Gratis-Vorlage holen",
  },

  // "Funktioniert mit" – nur Text, keine Logos.
  worksWith: ["Microsoft Excel", "Google Sheets", "Word", "Canva", "ChatGPT", "Claude"],

  // ------------------------------------------------------------
  //  PRODUKTE
  //  id:        kurzer eindeutiger Name ohne Leerzeichen (für das Paket unten)
  //  category:  muss exakt einer der "categories" entsprechen
  //  mockup:    Vorschaubild-Stil: "sheet", "doc", "board", "social" oder "chat"
  //  color:     "green", "blue", "amber", "rose", "violet" oder "teal"
  //  link:      Kauf-Link (Bestellformular) von Digistore24. "#" = "Bald verfügbar"
  //  badge:     kleines Etikett, z. B. "Beliebt" oder "Neu" ("" = keins)
  // ------------------------------------------------------------
  categories: ["Finanzen", "Karriere", "Selbstständig", "Familie"],

  products: [
    {
      id: "finanz-cockpit",
      title: "Finanz-Cockpit 2027",
      tagline: "Dein komplettes Geld-System in einer Tabelle.",
      category: "Finanzen",
      mockup: "sheet",
      color: "green",
      price: 19,
      badge: "Beliebt",
      link: "#",
      formats: ["Excel", "Google Sheets", "PDF"],
      description:
        "Budget, Sparziele, ETF-Sparplan und Vermögen auf einen Blick. Du trägst nur deine Ausgaben ein – alle Diagramme und Auswertungen aktualisieren sich automatisch.",
      includes: [
        "Monatsbudget mit 50/30/20-Auswertung",
        "Sparziel-Tracker mit Fortschrittsbalken",
        "ETF-Sparplan-Rechner mit Zinseszins-Prognose",
        "Nettovermögen-Verlauf über 12 Monate",
        "Schulden-Abbauplan (Schneeball & Lawine)",
        "KI-Prompts: Ausgaben analysieren & Sparpotenzial finden",
      ],
    },
    {
      id: "steuer-organizer",
      title: "Steuer-Organizer für Angestellte",
      tagline: "Belege das ganze Jahr sammeln – im Frühjahr nur noch übertragen.",
      category: "Finanzen",
      mockup: "sheet",
      color: "teal",
      price: 14,
      badge: "",
      link: "#",
      formats: ["Excel", "Google Sheets", "PDF"],
      description:
        "Nie wieder Schuhkarton voller Quittungen. Sammle Werbungskosten, Sonderausgaben und Belege übersichtlich nach Kategorien – passend zu den Bereichen der Steuererklärung.",
      includes: [
        "Belege-Tracker nach Kategorien",
        "Fahrtkosten- und Homeoffice-Tage-Zähler",
        "Checkliste: Häufig vergessene Posten",
        "Fristen-Übersicht fürs ganze Jahr",
        "KI-Prompts: Belege einordnen lassen",
        "Hinweis: Ersetzt keine Steuerberatung",
      ],
    },
    {
      id: "selbststaendig-kit",
      title: "Selbstständig-Starterkit",
      tagline: "Rechnungen, Angebote & Buchhaltung für Kleinunternehmer.",
      category: "Selbstständig",
      mockup: "doc",
      color: "violet",
      price: 29,
      badge: "Neu",
      link: "#",
      formats: ["Excel", "Google Sheets", "Word", "PDF"],
      description:
        "Alles für den Start in die Selbstständigkeit: Rechnungen und Angebote, die sich automatisch aus deinen Daten füllen, und ein Einnahmen-Ausgaben-Tracker, der dir die EÜR vorbereitet.",
      includes: [
        "Rechnungsvorlage mit Pflichtangaben (inkl. §-19-Variante)",
        "Angebots-Vorlage, Kundenliste & Rechnungsliste mit Zahlungsstatus",
        "Einnahmen-Ausgaben-Tracker mit Jahresübersicht",
        "Kleinunternehmer-Wächter für die Umsatzgrenzen",
        "Stundensatz-Rechner & Gründungs-Checkliste",
        "KI-Prompts: Angebotstexte, Erinnerungen & Mahnungen",
      ],
    },
    {
      id: "bewerbungs-kit",
      title: "KI-Bewerbungs-Kit",
      tagline: "Lebenslauf, Anschreiben & Interview – mit KI in einem Abend.",
      category: "Karriere",
      mockup: "chat",
      color: "blue",
      price: 19,
      badge: "",
      link: "#",
      formats: ["Word", "Google Docs", "Excel", "PDF"],
      description:
        "Drei moderne, ATS-freundliche Lebenslauf-Designs plus eine Prompt-Bibliothek, mit der du Anschreiben auf jede Stelle zuschneidest und Vorstellungsgespräche realistisch übst.",
      includes: [
        "3 Lebenslauf-Designs (ATS-freundlich)",
        "Anschreiben-Vorlage mit Hinweisen für jeden Absatz",
        "40 KI-Prompts – von der Stellenanzeige bis zum Gehalt",
        "Interview-Simulator-Prompts mit Feedback",
        "Leitfaden Gehaltsverhandlung in 6 Schritten",
        "Bewerbungs-Tracker mit Nachfass-Erinnerung",
      ],
    },
    {
      id: "content-maschine",
      title: "Social-Media-Paket für lokale Betriebe",
      tagline: "90 Tage Content für Café, Salon & Co. – fertig in einer Stunde.",
      category: "Selbstständig",
      mockup: "social",
      color: "rose",
      price: 39,
      badge: "",
      link: "#",
      formats: ["Canva", "PowerPoint", "Excel", "PDF"],
      description:
        "Für kleine Unternehmen ohne Marketing-Team: bearbeitbare Designs (in Canva importierbar), ein 90-Tage-Redaktionsplan und KI-Prompts, die Captions im Ton deines Betriebs schreiben.",
      includes: [
        "60 Designs für Posts & Stories (Canva, PowerPoint, Google Slides)",
        "90-Tage-Redaktionsplan mit 39 Beitragsideen",
        "12 KI-Prompts für Captions, Hashtags & Reels",
        "Antwortvorlagen für Google-Bewertungen",
        "Aktions- & Feiertagskalender 2027",
        "Anleitung: In 60 Minuten einen Monat planen",
      ],
    },
    {
      id: "babyjahr-planer",
      title: "Babyjahr-Planer",
      tagline: "Elternzeit, Anträge & Finanzen entspannt im Griff.",
      category: "Familie",
      mockup: "board",
      color: "amber",
      price: 12,
      badge: "",
      link: "#",
      formats: ["Excel", "Google Sheets", "PDF"],
      description:
        "Behalte alle Fristen, Anträge und Ausgaben rund um die Geburt im Blick – die Termine berechnen sich automatisch aus dem Geburtstermin.",
      includes: [
        "19 Fristen & Termine automatisch berechnet",
        "Elterngeld-Monate planen – mit Regel-Check",
        "Familienbudget: vor und während der Elternzeit",
        "Erstausstattung mit Kostenübersicht",
        "Kliniktaschen-Checkliste",
        "KI-Prompts: Anträge & Schreiben formulieren",
      ],
    },
  ],

  // ------------------------------------------------------------
  //  KOMPLETTPAKET
  //  Die Ersparnis wird automatisch aus den Einzelpreisen berechnet.
  // ------------------------------------------------------------
  bundle: {
    title: "Das Komplettpaket",
    text: "Alle sechs Vorlagen zum Paketpreis – inklusive aller zukünftigen Updates der 2027-Editionen.",
    includes: [
      "finanz-cockpit",
      "steuer-organizer",
      "selbststaendig-kit",
      "bewerbungs-kit",
      "content-maschine",
      "babyjahr-planer",
    ],
    price: 69,
    link: "#",
  },

  // ------------------------------------------------------------
  //  GRATIS-VORLAGE (Lead-Magnet)
  //  "link" = Anmeldeseite deines Newsletter-Dienstes (mit Double-Opt-In).
  //  So sammelst du E-Mail-Adressen MIT Einwilligung – Details in MARKETING.md.
  // ------------------------------------------------------------
  freebie: {
    title: "Gratis: 52-Wochen-Spar-Challenge",
    text: "Spare in einem Jahr über 1.300 € – mit einer Vorlage, die deinen Fortschritt automatisch anzeigt.",
    button: "Kostenlos herunterladen",
    link: "#",
  },

  // ------------------------------------------------------------
  //  KUNDENSTIMMEN
  //  WICHTIG: Nur ECHTE Bewertungen mit Erlaubnis eintragen!
  //  Erfundene Bewertungen sind in Deutschland verboten (UWG)
  //  und können teuer abgemahnt werden.
  //  Solange die Liste leer ist, wird der Bereich nicht angezeigt.
  //  Beispiel:
  //  { text: "Endlich Überblick!", name: "Anna K.", product: "Finanz-Cockpit" },
  // ------------------------------------------------------------
  testimonials: [],

  // ------------------------------------------------------------
  //  HÄUFIGE FRAGEN
  // ------------------------------------------------------------
  faq: [
    {
      q: "Wie erhalte ich meine Vorlage?",
      a: "Direkt nach der Zahlung erhältst du deinen Download – auf der Bestellbestätigung und zusätzlich per E-Mail. Dazu gibt es zu jeder Vorlage eine bebilderte Anleitung als PDF.",
    },
    {
      q: "Brauche ich teure Software?",
      a: "Nein. Die Tabellen funktionieren mit Excel und mit dem kostenlosen Google Sheets, die Word-Vorlagen auch mit Google Docs, die Designs mit dem kostenlosen Canva, PowerPoint oder Google Slides.",
    },
    {
      q: "Was sind die KI-Prompts?",
      a: "Fertige Textbausteine, die du in einen KI-Assistenten wie ChatGPT oder Claude kopierst. Die KI hilft dir dann z. B. beim Formulieren von Anschreiben oder beim Analysieren deiner Ausgaben. Ein kostenloser Account reicht.",
    },
    {
      q: "Welche Zahlungsarten gibt es?",
      a: "PayPal, Kreditkarte, Lastschrift und weitere Zahlarten – abgewickelt über unseren Vertriebspartner Digistore24. Deine Zahlungsdaten sehen wir nicht.",
    },
    {
      q: "Bekomme ich Updates?",
      a: "Ja. Verbesserungen an deiner gekauften Vorlage erhältst du kostenlos per E-Mail.",
    },
    {
      q: "Ersetzen die Vorlagen eine Steuer- oder Rechtsberatung?",
      a: "Nein. Die Vorlagen helfen dir beim Organisieren und Vorbereiten. Für individuelle Fragen wende dich bitte an eine Steuerberatung.",
    },
  ],
};
