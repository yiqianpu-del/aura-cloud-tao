#!/bin/bash
# Aura Cloud Tao - Start Dev Server

NODE_DIR="/Users/ganqianxia/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"
PNPM_BIN="/Users/ganqianxia/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback/pnpm"

# Set PATH so that node, npm, and node_modules/.bin are available
export PATH="$NODE_DIR:$PWD/node_modules/.bin:$PATH"

# Install if needed
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  $PNPM_BIN install
fi

# Start dev server
echo "Starting dev server at http://localhost:3000"
$PNPM_BIN dev
