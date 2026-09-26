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

  // Hinweis unter jedem Preis. Stelle in Lemon Squeezy / Gumroad ein,
  // dass die Steuer im Preis ENTHALTEN ist ("tax inclusive").
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
  worksWith: ["Google Sheets", "Microsoft Excel", "Notion", "Canva", "ChatGPT", "Claude"],

  // ------------------------------------------------------------
  //  PRODUKTE
  //  id:        kurzer eindeutiger Name ohne Leerzeichen (für das Paket unten)
  //  category:  muss exakt einer der "categories" entsprechen
  //  mockup:    Vorschaubild-Stil: "sheet", "doc", "board", "social" oder "chat"
  //  color:     "green", "blue", "amber", "rose", "violet" oder "teal"
  //  link:      Kauf-Link von Lemon Squeezy / Gumroad. "#" = "Bald verfügbar"
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
      formats: ["Google Sheets", "Excel"],
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
      formats: ["Google Sheets", "Excel", "PDF"],
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
      formats: ["Google Docs", "Word", "Google Sheets", "Excel"],
      description:
        "Alles für den Start in die Selbstständigkeit: professionelle Vorlagen mit allen Pflichtangaben für Rechnungen und ein Einnahmen-Ausgaben-Tracker, der dir die EÜR vorbereitet.",
      includes: [
        "Rechnungsvorlage mit Pflichtangaben (inkl. §-19-Variante)",
        "Angebots- und Auftragsbestätigungs-Vorlage",
        "Einnahmen-Ausgaben-Tracker mit Jahresübersicht",
        "Umsatzgrenzen-Wächter für Kleinunternehmer",
        "Checkliste: Gewerbe anmelden Schritt für Schritt",
        "KI-Prompts: Angebotstexte & Mahnungen formulieren",
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
      formats: ["Google Docs", "Word", "PDF"],
      description:
        "Drei moderne, ATS-freundliche Lebenslauf-Designs plus eine Prompt-Bibliothek, mit der du Anschreiben auf jede Stelle zuschneidest und Vorstellungsgespräche realistisch übst.",
      includes: [
        "3 Lebenslauf-Designs (ATS-freundlich)",
        "Anschreiben-Baukasten mit Beispielen",
        "40 KI-Prompts für Anschreiben & Profil",
        "Interview-Simulator-Prompts mit Feedback",
        "Gehaltsverhandlungs-Leitfaden",
        "Bewerbungs-Tracker für alle Stellen",
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
      formats: ["Canva", "Notion", "PDF"],
      description:
        "Für kleine Unternehmen ohne Marketing-Team: anpassbare Canva-Designs, ein 90-Tage-Redaktionsplan und KI-Prompts, die Captions im Ton deines Betriebs schreiben.",
      includes: [
        "60 Canva-Vorlagen (Posts & Stories)",
        "90-Tage-Redaktionsplan mit Post-Ideen",
        "KI-Prompts für Captions & Hashtags",
        "Vorlagen für Google-Bewertungen-Antworten",
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
      formats: ["Notion", "Google Sheets", "PDF"],
      description:
        "Behalte alle Fristen, Anträge und Ausgaben rund um die Geburt im Blick – mit Checklisten, einem Elternzeit-Planer für beide Eltern und einem Baby-Budget.",
      includes: [
        "Fristen- & Anträge-Checkliste (Elterngeld, Kindergeld …)",
        "Elternzeit-Planer für beide Elternteile",
        "Baby-Budget & Erstausstattungsliste",
        "Kliniktaschen-Checkliste",
        "Links zu den offiziellen Rechnern",
        "KI-Prompts: Fragen an Ämter formulieren",
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
      a: "Direkt nach der Zahlung bekommst du eine E-Mail mit deinem Download-Link. Bei Google-Sheets-, Notion- und Canva-Vorlagen enthält die Datei einen Link, über den du dir eine eigene Kopie anlegst.",
    },
    {
      q: "Brauche ich teure Software?",
      a: "Nein. Alle Vorlagen funktionieren mit den kostenlosen Versionen von Google Sheets, Google Docs, Notion und Canva. Excel- und Word-Versionen liegen zusätzlich bei, wo angegeben.",
    },
    {
      q: "Was sind die KI-Prompts?",
      a: "Fertige Textbausteine, die du in einen KI-Assistenten wie ChatGPT oder Claude kopierst. Die KI hilft dir dann z. B. beim Formulieren von Anschreiben oder beim Analysieren deiner Ausgaben. Ein kostenloser Account reicht.",
    },
    {
      q: "Welche Zahlungsarten gibt es?",
      a: "Kreditkarte, PayPal, Apple Pay und Google Pay – abgewickelt über unseren Zahlungsanbieter. Deine Zahlungsdaten sehen wir nicht.",
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
