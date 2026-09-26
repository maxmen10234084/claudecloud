# Schritt-für-Schritt: Von 0 zum ersten Verkauf

Diese Anleitung ist für dich, auch wenn du nicht programmieren kannst.
Das Budget liegt bei unter 100 €, die Zeit bei etwa 5 Stunden pro Woche.

| Dokument | Inhalt |
|---|---|
| **ANLEITUNG.md** (diese Datei) | Technik & Rechtliches: Shop einrichten und online stellen |
| [PRODUKTE.md](PRODUKTE.md) | Welche Produkte, in welcher Reihenfolge, was genau hineingehört |
| [MARKETING.md](MARKETING.md) | Wie du Käufer findest: Pinterest, Videos, E-Mail, 90-Tage-Plan |

---

## Schritt 1 – Rechtliches in Deutschland

> ⚠️ Das hier ist eine Orientierung und keine Rechts- oder Steuerberatung.

1. **Gewerbe anmelden:** Online beim Gewerbeamt deiner Stadt, meist 15–60 €. Als Tätigkeit trägst du zum Beispiel ein: „Online-Handel mit digitalen Produkten“.
2. **Fragebogen zur steuerlichen Erfassung:** Den schickst du über ELSTER ans Finanzamt (kostenlos). Die **Kleinunternehmerregelung (§ 19 UStG)** kann sinnvoll sein. Prüfe die aktuellen Umsatzgrenzen beim Finanzamt oder der IHK.
3. **Impressum & Datenschutz:** Ersetze in `impressum.html` und `datenschutz.html` alle gelb markierten Stellen.
4. **Zahlungsanbieter als „Merchant of Record“:** Wenn du **Lemon Squeezy** oder **Gumroad** nimmst, tritt der Anbieter gegenüber dem Kunden als Verkäufer auf. Er kümmert sich dann um die EU-Umsatzsteuer, die Rechnungen und die Widerrufsbelehrung für digitale Inhalte.
5. **Einnahmen** gibst du einmal im Jahr in der Steuererklärung an (Anlage EÜR).

---

## Schritt 2 – Produkt bauen

Welche Produkte, in welcher Reihenfolge und mit welchem Inhalt, steht in **[PRODUKTE.md](PRODUKTE.md)**.
Fang mit der Gratis-Vorlage und dem Finanz-Cockpit an.

---

## Schritt 3 – Verkaufsplattform einrichten

1. Erstelle einen kostenlosen Account bei **[Lemon Squeezy](https://www.lemonsqueezy.com)** oder **[Gumroad](https://gumroad.com)**. Die Gebühren fallen nur beim Verkauf an, prüfe aber die aktuellen Konditionen.
2. Stell in den Einstellungen ein, dass die Preise **inklusive Steuer** sind („tax inclusive“). Dann stimmt der Hinweis „inkl. MwSt.“ auf deiner Seite.
3. Leg ein Produkt an: Titel, Beschreibung, Preis, Produktbilder und die Datei bzw. den Link zur Vorlage.
4. Kopiere den **Kauf-Link** des Produkts.

---

## Schritt 4 – Shop anpassen (nur `config.js`)

Öffne `config.js` auf GitHub und klick auf das ✏️-Stift-Symbol. Das kannst du dort anpassen:

| Bereich | Was du änderst |
|---|---|
| `name`, `tagline`, `email` | Shopname, Slogan, Kontaktadresse |
| `hero` | Die großen Texte ganz oben |
| `products` | Titel, Texte, **Preis** und **Kauf-Link** jedes Produkts |
| `bundle` | Welche Produkte im Paket sind und der Paketpreis. Die Ersparnis rechnet der Shop selbst aus. |
| `freebie` | Link zur Anmeldeseite für die Gratis-Vorlage |
| `testimonials` | **Nur echte** Kundenstimmen. Solange die Liste leer ist, ist der Bereich unsichtbar. |
| `faq` | Häufige Fragen |

**Wichtig beim Bearbeiten:**
- Preise schreibst du als reine Zahl: `price: 19,` und **nicht** `price: "19 €",`
- Solange bei `link` das Zeichen `"#"` steht, zeigt der Button „Bald verfügbar“. Sobald du einen echten Link einträgst, wird daraus „Jetzt kaufen“.
- Ein Produkt, das noch nicht fertig ist, kannst du stehen lassen, dann zeigt es „Bald verfügbar“. Du kannst den ganzen Block `{ … },` auch löschen. Nimm es dann auch aus `bundle.includes` heraus.
- **Hast du dich vertippt?** Dann erscheint oben auf der Seite ein roter Hinweis, der die Stelle nennt.

**Tipp für Marketing-Links:** Jedes Produkt hat einen direkten Link, z. B. `https://DEINE-SEITE/#finanz-cockpit`.
Dieser Link öffnet sofort die Produktdetails und eignet sich perfekt für Pinterest-Pins.

Danach klickst du auf **„Commit changes“**. Nach ungefähr einer Minute ist die Änderung live.

---

## Schritt 5 – Website online stellen (kostenlos)

1. **GitHub Pages aktivieren:** Geh im Repository auf **Settings → Pages → Source: „GitHub Actions“**.
   - Bei einem kostenlosen GitHub-Konto muss das Repository dafür **öffentlich** sein.
2. Bring die Dateien in den Branch `main`. Die Seite wird dann automatisch veröffentlicht unter
   `https://<dein-github-name>.github.io/<repo-name>/`.
3. *(Optional, ca. 10 €/Jahr)* Kauf eine eigene Domain, z. B. `klarwerk-vorlagen.de`, und trag sie unter Settings → Pages → Custom domain ein. Eine eigene Domain wirkt deutlich professioneller.

---

## Schritt 6 – Kunden gewinnen

Das steht ausführlich in **[MARKETING.md](MARKETING.md)**, mit einem 90-Tage-Plan und einer Wochenroutine.

---

## Budget-Übersicht

| Posten | Kosten |
|---|---|
| Gewerbeanmeldung | ca. 15–60 € (einmalig) |
| Hosting (GitHub Pages) | 0 € |
| Lemon Squeezy / Gumroad | 0 € fix, Gebühr pro Verkauf |
| Google Sheets / Docs / Notion / Canva (Free) | 0 € |
| Newsletter-Dienst (kostenloser Einstiegstarif) | 0 € |
| Eigene Domain (empfohlen) | ca. 10 €/Jahr |
| **Summe Start** | **ca. 25–70 €** |

---

## Deine Checkliste

- [ ] Gewerbe angemeldet und Fragebogen ans Finanzamt geschickt
- [ ] Impressum & Datenschutz ausgefüllt
- [ ] Gratis-Vorlage gebaut, Anmeldeseite mit Double-Opt-In eingerichtet
- [ ] Erstes Produkt gebaut (Qualitäts-Checkliste in PRODUKTE.md abgehakt)
- [ ] Lemon Squeezy oder Gumroad eingerichtet, Preise „inkl. Steuer“
- [ ] `config.js` angepasst, Kauf-Links eingetragen
- [ ] GitHub Pages aktiviert, die Seite ist online
- [ ] Pinterest-Unternehmenskonto mit Impressum-Link angelegt
- [ ] Erste 5 Pins und 3 Videos veröffentlicht
