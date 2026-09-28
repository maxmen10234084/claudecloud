#!/bin/sh
# Richtet Conway-Research/automaton aus dem Unterordner automaton/ ein:
# Submodul holen, Abhängigkeiten installieren, bauen und kurz prüfen.
# Startet den Agenten NICHT. Das machst du danach selbst (siehe AUTOMATON.md).
set -e

cd "$(dirname "$0")/.."

if ! command -v node >/dev/null 2>&1; then
  echo "[FEHLER] Node.js fehlt. Bitte Node.js 20 oder neuer installieren." >&2
  exit 1
fi
NODE_MAJOR=$(node -e "process.stdout.write(process.versions.node.split('.')[0])")
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "[FEHLER] Node.js 20 oder neuer nötig, gefunden: $(node -v)" >&2
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "[INFO]  pnpm wird über corepack aktiviert..."
  corepack enable pnpm
fi

echo "[INFO]  Hole den automaton-Quellcode (Submodul)..."
git submodule update --init automaton

cd automaton
echo "[INFO]  Installiere Abhängigkeiten..."
pnpm install --frozen-lockfile
echo "[INFO]  Baue..."
pnpm run build

echo "[INFO]  Prüfe den Build..."
node dist/index.js --version

echo
echo "Fertig. Nächster Schritt (interaktiv, erzeugt Wallet und Konfiguration):"
echo "  cd automaton && node dist/index.js --run"
echo "Lies vorher AUTOMATON.md, vor allem den Abschnitt zu Ausgabelimits."
