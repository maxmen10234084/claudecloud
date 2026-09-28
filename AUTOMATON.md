# Conway Automaton

Der Ordner `automaton/` enthält [Conway-Research/automaton](https://github.com/Conway-Research/automaton)
als Git-Submodul, fest auf einen geprüften Stand gepinnt. Automaton ist ein autonom laufender
KI-Agent mit eigener Krypto-Wallet, der für Rechenzeit und Inferenz selbst bezahlt.

> ⚠️ Der Agent kann mit echtem Geld handeln (Überweisungen, Zahlungen, Server, Domains).
> Lies den Abschnitt **Ausgabelimits**, bevor du ihn startest.

## Voraussetzungen

- Node.js 20 oder neuer
- git
- pnpm (wird vom Setup-Skript bei Bedarf über corepack aktiviert)

## Einrichten

```bash
git clone --recurse-submodules https://github.com/maxmen10234084/claudecloud.git
cd claudecloud
sh scripts/automaton-setup.sh
```

Das Skript holt den Quellcode, installiert alles, baut und prüft den Build. Der Agent startet dabei nicht.

## Erster Start

```bash
cd automaton
node dist/index.js --run
```

Beim ersten Start fragt ein Assistent nacheinander:

1. **Chain** (`evm` oder `solana`) und erzeugt eine Wallet. Der private Schlüssel liegt danach in
   `~/.automaton/wallet.json`. **Diese Datei nie weitergeben oder in ein Repository legen.**
2. **Conway API-Key**: wird automatisch per Wallet-Signatur angelegt, sonst manuell (`cnwy_k_...`).
3. **Name** und **Genesis-Prompt** (die Grundanweisung für den Agenten).
4. **Deine eigene Wallet-Adresse** als Besitzer (Creator).
5. Optional eigene Schlüssel für OpenAI, Anthropic oder eine Ollama-Adresse. Ohne sie läuft die
   Inferenz über Conway und wird aus dem Guthaben bezahlt.
6. **Ausgabelimits** (siehe unten).

Alle Einstellungen landen in `~/.automaton/`, also außerhalb dieses Repositorys.

## Ausgabelimits

Die Voreinstellungen sind großzügig. Für den Anfang empfehle ich deutlich niedrigere Werte:

| Frage im Assistenten | Voreinstellung | Vorschlag zum Start |
|---|---|---|
| Max single transfer (cents) | 5000 (50 $) | 500 |
| Max hourly transfers (cents) | 10000 (100 $) | 500 |
| Max daily transfers (cents) | 25000 (250 $) | 1000 |
| Max daily inference spend (cents) | 50000 (500 $) | 500 |
| Require confirmation above (cents) | 1000 (10 $) | 100 |

Später änderbar mit `node dist/index.js --configure`. Lade die Wallet des Agenten nur mit einem
Betrag auf, dessen Verlust du verkraften kannst.

## Nützliche Befehle

```bash
node dist/index.js --status      # Zustand anzeigen
node dist/index.js --configure   # Einstellungen ändern
node dist/index.js --pick-model  # Modell wählen
node packages/cli/dist/index.js logs --tail 20
node packages/cli/dist/index.js fund 5.00
```

## Wo er laufen sollte

Der Agent ist für einen dauerhaft laufenden Rechner gedacht (eigener Server oder Conway Cloud).
GitHub Pages und kurzlebige Cloud-Sitzungen eignen sich nicht, weil er rund um die Uhr läuft
und seine Daten in `~/.automaton/` behält.

## Auf eine neue Version aktualisieren

```bash
cd automaton
git fetch origin && git checkout <neuer-commit-oder-tag>
cd ..
git add automaton && git commit -m "automaton aktualisieren"
sh scripts/automaton-setup.sh
```
