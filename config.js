/*
 * ============================================================
 *  DEINE SHOP-EINSTELLUNGEN
 *  Das ist die EINZIGE Datei, die du bearbeiten musst.
 *
 *  Regeln:
 *  - Text immer in "Anführungszeichen" lassen.
 *  - Nach jedem Eintrag ein Komma , (außer beim letzten in einer Liste).
 *  - Zeilen mit // davor sind Kommentare und werden ignoriert.
 * ============================================================
 */
window.SHOP = {
  // Name deines Shops (oben links und im Browser-Tab)
  name: "Vorlagen-Werkstatt",

  // Große Überschrift auf der Startseite
  headline: "Fertige Vorlagen, die dir Stunden sparen",

  // Kurzer Text unter der Überschrift
  subline:
    "Sofort herunterladen, direkt loslegen. Praktische Vorlagen für Finanzen, Planung und Social Media – einmal kaufen, für immer nutzen.",

  // Deine Kontakt-E-Mail (wird unten auf der Seite angezeigt)
  email: "kontakt@example.com",

  // ------------------------------------------------------------
  //  PRODUKTE
  //  "link" = der Kauf-Link von Gumroad oder Lemon Squeezy.
  //  Solange dort "#" steht, zeigt der Button "Bald verfügbar".
  // ------------------------------------------------------------
  products: [
    {
      title: "Haushaltsbuch 2027",
      description:
        "Google-Sheets- & Excel-Vorlage mit automatischen Diagrammen, Sparzielen und Monatsübersicht.",
      price: "9 €",
      emoji: "💶",
      features: ["12 Monatsblätter", "Automatische Auswertung", "Anleitung als PDF"],
      link: "#",
      badge: "Bestseller",
    },
    {
      title: "Social-Media-Contentplaner",
      description:
        "Plane 90 Tage Content in einer Stunde – mit 100 Post-Ideen und Hashtag-Listen.",
      price: "12 €",
      emoji: "📅",
      features: ["90-Tage-Kalender", "100 Post-Ideen", "Für Notion & Sheets"],
      link: "#",
      badge: "",
    },
    {
      title: "Bewerbungs-Paket",
      description:
        "3 moderne Lebenslauf-Designs + Anschreiben-Vorlagen für Word und Google Docs.",
      price: "15 €",
      emoji: "📄",
      features: ["3 Lebenslauf-Designs", "5 Anschreiben-Muster", "Sofort bearbeitbar"],
      link: "#",
      badge: "Neu",
    },
  ],

  // ------------------------------------------------------------
  //  HÄUFIGE FRAGEN (unten auf der Seite)
  // ------------------------------------------------------------
  faq: [
    {
      q: "Wie erhalte ich mein Produkt?",
      a: "Direkt nach der Zahlung bekommst du einen Download-Link per E-Mail.",
    },
    {
      q: "Welche Zahlungsarten gibt es?",
      a: "Kreditkarte, PayPal, Apple Pay und Google Pay – abgewickelt über unseren sicheren Zahlungsanbieter.",
    },
    {
      q: "Brauche ich spezielle Software?",
      a: "Nein. Alle Vorlagen funktionieren mit kostenlosen Programmen wie Google Sheets oder Google Docs.",
    },
  ],
};
