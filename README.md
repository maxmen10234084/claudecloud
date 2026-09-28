# Klarwerk – Shop für digitale Vorlagen

Eine professionelle Verkaufsseite für digitale Produkte. Sie kostet dich nichts im Betrieb und
funktioniert **ohne Programmierkenntnisse**.

- **Hosting:** kostenlos über GitHub Pages
- **Verkauf:** über Digistore24 als Wiederverkäufer (übernimmt Zahlung, Rechnungen und Umsatzsteuer)
- **Bearbeiten:** Du änderst nur eine Datei, nämlich `config.js`
- **Datenschutzfreundlich:** keine Cookies, kein Tracking, Schriften direkt auf der eigenen Seite

> 🔒 Die verkaufsfertigen Produktdateien liegen bewusst **nicht** in diesem öffentlichen Repository.
> Der Ordner `produkte/` ist in `.gitignore` gesperrt.

## Starte hier

1. 📊 **Businessplan**: das Gesamtbild (Link und PDF im Chat)
2. 📘 **[ANLEITUNG.md](ANLEITUNG.md)**: Anmeldung, Digistore24, Website online stellen
3. 📦 **[PRODUKTE.md](PRODUKTE.md)**: die sieben fertigen Produkte und die jährliche Pflege
4. 📣 **[MARKETING.md](MARKETING.md)**: Strategie und 90-Tage-Plan
5. 🤖 **[AUTOMATON.md](AUTOMATON.md)**: Conway Automaton einrichten und starten

## Dateien

| Datei | Zweck | Bearbeiten? |
|---|---|---|
| `config.js` | Texte, Produkte, Preise, Kauf-Links, Paket, FAQ | **Ja** |
| `impressum.html` | Impressum (Pflicht in Deutschland) | **Ja**, einmalig die markierten Stellen |
| `datenschutz.html` | Datenschutzerklärung | **Ja**, einmalig die markierten Stellen |
| `index.html`, `assets/` | Aufbau, Design, Schriften | Nein |
| `.github/workflows/pages.yml` | Veröffentlicht die Seite automatisch | Nein |

## Funktionen

- Produktkarten mit gezeichneten Vorschauen, Kategorie-Filter und Detailansicht
- Direkte Links zu jedem Produkt (z. B. `…/#finanz-cockpit`), ideal für Pinterest und Social Media
- Komplettpaket: Die Ersparnis wird automatisch berechnet
- Bereich für die Gratis-Vorlage, um E-Mail-Adressen zu sammeln
- Kundenstimmen-Bereich, der erst erscheint, wenn echte Bewertungen eingetragen sind
- Heller und dunkler Modus, optimiert für Handys
- Roter Hinweis bei Tippfehlern in `config.js`

## Lokal ansehen

Doppelklick auf `index.html`, dann öffnet sich die Seite im Browser.

Die Schriften Inter und Fraunces stehen unter der SIL Open Font License (siehe `assets/fonts/`).
