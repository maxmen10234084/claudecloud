# Schritt-für-Schritt: Von 0 zum ersten Verkauf

Diese Anleitung ist für dich, auch wenn du nicht programmieren kannst.
Das Budget liegt bei unter 100 €, die Zeit bei etwa 3–5 Stunden pro Woche.

---

## Phase 1 – Produkt finden (Woche 1)

**Faustregel:** Verkaufe etwas, das ein konkretes Problem löst, das du selbst schon gelöst hast.

### Bewährte Produktideen ohne Programmierkenntnisse

| Idee | Erstellt mit | Übliche Preise |
|---|---|---|
| Haushaltsbuch / Budgetplaner | Google Sheets (kostenlos) | 5–15 € |
| Social-Media-Contentkalender | Notion oder Sheets | 9–19 € |
| Lebenslauf- & Anschreiben-Vorlagen | Canva / Google Docs | 10–20 € |
| Hochzeits- oder Umzugsplaner | Notion / Sheets | 9–15 € |
| Druckbare Planer (Wochenplan, Habit-Tracker) | Canva → PDF | 3–9 € |
| Lernzettel / Prüfungsvorbereitung (z. B. Ausbildung, Führerschein) | Google Docs → PDF | 5–15 € |
| Canva-Vorlagen für Instagram (für Friseure, Coaches, Cafés …) | Canva | 15–39 € |
| Checklisten-Paket für eine Nische (z. B. „Erstes eigenes Auto“) | Google Docs → PDF | 5–12 € |

### So prüfst du, ob eine Idee funktioniert (kostenlos)
1. Suche die Idee auf **Etsy** und **Gumroad Discover**. Wenn es dort schon Verkäufe gibt, ist Nachfrage da. Konkurrenz ist also ein gutes Zeichen!
2. Such die Idee auf **TikTok, Pinterest und Reddit**. Welche Fragen stellen die Leute dort?
3. Mach es **spezieller** als die Konkurrenz. Statt „Budgetplaner“ also lieber „Budgetplaner für Studierende mit BAföG“.

➡️ **Ziel von Woche 1:** Du hast ein fertiges Produkt als Datei, zum Beispiel ein PDF oder einen Google-Sheets-Link.

---

## Phase 2 – Rechtliches in Deutschland (Woche 1–2)

> ⚠️ Das hier ist eine Orientierung und keine Rechts- oder Steuerberatung.

1. **Gewerbe anmelden:** Online beim Gewerbeamt deiner Stadt, meist 15–60 €. Als Tätigkeit trägst du zum Beispiel ein: „Online-Handel mit digitalen Produkten“.
2. **Fragebogen zur steuerlichen Erfassung:** Den schickst du über ELSTER ans Finanzamt (kostenlos). Wähle dort die **Kleinunternehmerregelung (§ 19 UStG)**, dann musst du keine Umsatzsteuer ausweisen, solange du unter der Umsatzgrenze bleibst.
3. **Impressum & Datenschutz:** Die Vorlagen liegen schon bereit (`impressum.html`, `datenschutz.html`). Ersetze alle gelb markierten Stellen.
4. **Zahlungsanbieter als „Merchant of Record“:** Wenn du **Lemon Squeezy** oder **Gumroad** nimmst, tritt der Anbieter gegenüber dem Kunden als Verkäufer auf. Er kümmert sich dann um die EU-Umsatzsteuer, die Rechnungen und die Widerrufsbelehrung für digitale Inhalte. Das spart dir sehr viel Aufwand.
5. **Einnahmen** gibst du einmal im Jahr in der Steuererklärung an (Anlage EÜR).

---

## Phase 3 – Verkaufsplattform einrichten (Woche 2)

1. Erstelle einen kostenlosen Account bei **[Lemon Squeezy](https://www.lemonsqueezy.com)** oder **[Gumroad](https://gumroad.com)**. Die Gebühren fallen nur beim Verkauf an, prüfe aber die aktuellen Konditionen.
2. Leg ein Produkt an: Titel, Beschreibung, Preis und die Datei hochladen.
3. Kopiere den **Kauf-Link** des Produkts.
4. Öffne `config.js` und füg den Link beim passenden Produkt ein:
   ```js
   link: "https://deinshop.lemonsqueezy.com/buy/abc123",
   ```
   Sobald dort ein echter Link steht, wird aus „Bald verfügbar“ automatisch **„Jetzt kaufen“**.

---

## Phase 4 – Website online stellen (kostenlos, 10 Minuten)

Alles passiert direkt im Browser auf GitHub, du brauchst keine Software:

1. **Texte anpassen:** Öffne `config.js` auf GitHub, klick auf das ✏️-Stift-Symbol und ändere Shopname, Texte, Produkte und Preise. Danach klickst du auf **„Commit changes“**.
2. **GitHub Pages aktivieren:** Geh im Repository auf **Settings → Pages → Source: „GitHub Actions“**.
   - Hinweis: Bei einem kostenlosen GitHub-Konto muss das Repository dafür **öffentlich** sein.
3. Führ diesen Branch mit `main` zusammen. Danach geht die Seite automatisch online unter
   `https://<dein-github-name>.github.io/<repo-name>/`.
4. *(Optional, ca. 10 €/Jahr)* Kauf eine eigene Domain, zum Beispiel bei INWX, Namecheap oder Strato, und trag sie unter Settings → Pages → Custom domain ein.

Jede Änderung an `config.js` ist nach ungefähr einer Minute live.

---

## Phase 5 – Kunden gewinnen (ab Woche 3, kostenlos)

Ohne Besucher gibt es auch keine Verkäufe. Konzentrier dich am Anfang auf **einen** Kanal:

- **Pinterest:** Das ist die beste kostenlose Quelle für Vorlagen und Planer, weil Pins monatelang Besucher bringen. Erstell 3–5 Pins pro Woche in Canva, die auf deinen Shop verlinken.
- **TikTok / Instagram Reels:** Zeig in kurzen Videos, wie die Vorlage funktioniert, zum Beispiel „So habe ich 200 € im Monat gespart“.
- **Etsy (zusätzlich):** Stell dieselben Produkte auch auf Etsy ein. Das kostet ein paar Cent Listing-Gebühr pro Produkt, und die Käufer sind dort schon unterwegs.
- **Reddit / Facebook-Gruppen:** Hilf den Leuten erst mit Antworten und erwähne dein Produkt nur, wenn es passt.

### Realistische Erwartung
- Die ersten Verkäufe kommen oft nach **4–8 Wochen** regelmäßiger Arbeit.
- 1 Produkt ist ein Test, 5–10 Produkte ergeben ein kleines, stetiges Nebeneinkommen.
- Rechne zum Beispiel so: 10 € × 3 Verkäufe pro Tag ergibt etwa **900 € im Monat**, abzüglich der Gebühren.

---

## Budget-Übersicht

| Posten | Kosten |
|---|---|
| Gewerbeanmeldung | ca. 15–60 € (einmalig) |
| Hosting (GitHub Pages) | 0 € |
| Lemon Squeezy / Gumroad | 0 € fix, Gebühr pro Verkauf |
| Google Sheets / Docs / Canva (Free) | 0 € |
| Eigene Domain (optional) | ca. 10 €/Jahr |
| **Summe Start** | **ca. 25–70 €** |

---

## Deine Checkliste

- [ ] Produktidee gewählt und geprüft (Etsy/Gumroad-Suche)
- [ ] Erstes Produkt fertig erstellt
- [ ] Gewerbe angemeldet und Fragebogen ans Finanzamt geschickt
- [ ] Lemon-Squeezy- oder Gumroad-Account angelegt, Produkt hochgeladen
- [ ] `config.js` angepasst und Kauf-Link eingefügt
- [ ] Impressum & Datenschutz ausgefüllt
- [ ] GitHub Pages aktiviert, die Seite ist online
- [ ] Pinterest- oder TikTok-Account angelegt, erste 5 Posts veröffentlicht
