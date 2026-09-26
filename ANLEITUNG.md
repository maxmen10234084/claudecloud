# Schritt-für-Schritt: Von 0 zum ersten Verkauf

Diese Anleitung ist für dich, auch wenn du nicht programmieren kannst.
Das Budget liegt bei unter 100 €, die Zeit bei etwa 5 Stunden pro Woche. Stand: September 2026.

| Dokument | Inhalt |
|---|---|
| **Businessplan** (im Chat als Link/PDF) | Das Gesamtbild: Markt, Finanzen, Risiken, Zeitplan |
| **ANLEITUNG.md** (diese Datei) | Anmeldung, Digistore24, Website online stellen |
| [PRODUKTE.md](PRODUKTE.md) | Was in jedem Produkt steckt, Preise, jährliche Pflege |
| [MARKETING.md](MARKETING.md) | Wie du Käufer findest: Pinterest, Videos, E-Mail, 90-Tage-Plan |

> ⚠️ Rechtliche und steuerliche Hinweise sind eine sorgfältig recherchierte Orientierung, **keine** Rechts- oder Steuerberatung.

---

## Schritt 1: Anmelden (Woche 1–2)

1. **Gewerbe anmelden** beim Gewerbeamt deiner Gemeinde, oft online möglich. Tätigkeit z. B.: „Verkauf digitaler Produkte (Vorlagen) über das Internet“.
2. **Berufsgenossenschaft:** Innerhalb **einer Woche** nach der Gründung anmelden, auch ohne Mitarbeitende. Welche BG zuständig ist, erfährst du bei der DGUV.
3. **ELSTER-Konto** beantragen, der Aktivierungsbrief kommt per Post. Danach innerhalb **eines Monats** den **Fragebogen zur steuerlichen Erfassung** abgeben und die **Kleinunternehmerregelung** wählen.
4. **Tipp zum Zeitpunkt:** Im **Gründungsjahr** liegt die Kleinunternehmergrenze bei 25.000 € Umsatz im laufenden Jahr. Wenn du **noch 2026** gründest, gilt 2026 als Gründungsjahr. Für 2027 gilt dann: Vorjahr höchstens 25.000 € und laufendes Jahr höchstens 100.000 €. Lass dir das bei der Anmeldung bzw. von einer Steuerberatung bestätigen.
5. **Angestellt?** Nebentätigkeit ggf. beim Arbeitgeber anzeigen. **Krankenkasse** informieren.
6. **Impressum & Datenschutz:** In `impressum.html` und `datenschutz.html` alle gelb markierten Stellen ausfüllen.

## Schritt 2: Newsletter-Dienst für die Gratis-Vorlage

1. Konto bei einem Newsletter-Dienst mit kostenlosem Einstiegstarif anlegen (z. B. MailerLite oder Brevo). Den Vertrag zur Auftragsverarbeitung (AVV) abschließen, das geht meist per Klick im Konto.
2. Ein Anmeldeformular mit **Double-Opt-In** erstellen. Die Willkommensmail enthält die drei Dateien der Spar-Challenge (als Anhang oder Download-Link).
3. Die 5 Mails der Willkommensserie aus [MARKETING.md](MARKETING.md#4-e-mail-marketing) anlegen.
4. Den Link zur Anmeldeseite in `config.js` bei `freebie.link` eintragen und in `datenschutz.html` den Namen des Dienstes ergänzen.

## Schritt 3: Digistore24 einrichten

**Warum Digistore24?** Digistore24 ist ein deutscher Anbieter und verkauft deine Produkte als **Wiederverkäufer**. Er ist gegenüber den Kunden der Vertragspartner und kümmert sich um Zahlung, Rechnungen und Umsatzsteuer, auch bei Kunden im EU-Ausland. Es gibt keine Grundgebühr. Pro Verkauf fallen 7,9 % + 1 € an (Stand 09/2026). Zahlarten sind z. B. PayPal, Kreditkarte und Lastschrift. Ein eingebautes Partnerprogramm (Affiliates) ist auch dabei.

> Lemon Squeezy wird seit 2026 schrittweise auf Stripe umgestellt und ist für einen neuen Start deshalb nicht mehr erste Wahl. Eine Alternative ist Gumroad (10 % + 0,50 $ zzgl. Zahlungsgebühren).

1. Kostenlos als **Vendor** (Verkäufer) registrieren und die Steuerdaten hinterlegen: Steuernummer und Kleinunternehmer-Status.
2. Für jedes Produkt ein **Produkt** anlegen: Name, kurze Beschreibung, Bruttopreis wie auf deiner Website, Auslieferung als Download. Am besten packst du die Dateien je Produkt in eine ZIP-Datei.
3. Als Verkaufsseite die Adresse deiner Website angeben, z. B. `https://DEINE-SEITE/#finanz-cockpit`.
4. Digistore24 kann neue Produkte vor der Freischaltung prüfen. Plane dafür ein paar Tage ein.
5. Den **Bestellformular-Link** jedes Produkts kopieren und in `config.js` beim passenden Produkt unter `link` eintragen. Aus „Bald verfügbar“ wird dann automatisch „Jetzt kaufen“.
6. Optional: das **Partnerprogramm** öffnen, z. B. mit 30 % Provision.

## Schritt 4: Shop anpassen (nur `config.js`)

Öffne `config.js` auf GitHub und klick auf das ✏️-Stift-Symbol.

| Bereich | Was du änderst |
|---|---|
| `name`, `tagline`, `email` | Shopname, Slogan, Kontaktadresse |
| `products` → `link` | Bestellformular-Links von Digistore24 |
| `bundle` | Link zum Komplettpaket. Die Ersparnis rechnet der Shop selbst aus. |
| `freebie` → `link` | Anmeldeseite des Newsletter-Dienstes |
| `testimonials` | **Nur echte** Kundenstimmen mit Erlaubnis |

- Preise schreibst du als reine Zahl: `price: 19,`
- Bei einem Tippfehler erscheint oben auf der Seite ein roter Hinweis, der die Stelle nennt.
- Jedes Produkt hat einen direkten Link (z. B. `…/#finanz-cockpit`). Den nutzt du für Pinterest.

## Schritt 5: Website online stellen (kostenlos)

1. **Settings → Pages → Source: „GitHub Actions“** im Repository einstellen. Mit einem kostenlosen GitHub-Konto muss das Repository dafür öffentlich sein. Das ist in Ordnung, weil die Produktdateien **nicht** darin liegen.
2. Diesen Branch in `main` übernehmen. Die Seite erscheint dann unter `https://<dein-github-name>.github.io/<repo-name>/`.
3. *(Empfohlen, ca. 10 €/Jahr)* Eine eigene Domain kaufen und unter Settings → Pages → Custom domain eintragen.

## Schritt 6: Kunden gewinnen

Siehe **[MARKETING.md](MARKETING.md)**: Pinterest als Hauptkanal, kurze Videos, E-Mail-Serie, 90-Tage-Plan.

---

## Budget-Übersicht

| Posten | Kosten |
|---|---|
| Gewerbeanmeldung | Gebühr der Gemeinde (einmalig, meist niedriger zweistelliger Betrag) |
| Hosting (GitHub Pages) | 0 € |
| Digistore24 | 0 € fix, 7,9 % + 1 € pro Verkauf |
| Newsletter-Dienst | 0 € im Einstiegstarif. Bei größerer Liste später ca. 10–20 €/Monat |
| Canva, Pinterest, TikTok, Instagram | 0 € |
| Eigene Domain (empfohlen) | ca. 10–15 €/Jahr |
| **Summe Start** | **deutlich unter 100 €** |

## Deine Checkliste

- [ ] Gewerbe angemeldet
- [ ] Berufsgenossenschaft informiert (innerhalb 1 Woche)
- [ ] Fragebogen zur steuerlichen Erfassung abgegeben (innerhalb 1 Monat)
- [ ] Impressum & Datenschutz ausgefüllt
- [ ] Newsletter-Dienst mit Double-Opt-In, Gratis-Vorlage und 5 Willkommensmails
- [ ] Digistore24: 6 Produkte und das Komplettpaket angelegt, Links in `config.js`
- [ ] Website online (GitHub Pages, optional eigene Domain)
- [ ] Pinterest-Unternehmenskonto mit Impressum-Link, erste 10 Pins
- [ ] Erste 3 Videos veröffentlicht
