#!/bin/bash
# Aura Cloud Tao - Local Dev Setup
echo "=== Aura Cloud Tao Setup ==="
echo ""

# Check for Node.js
if ! command -v node &> /dev/null; then
  echo "ERROR: Node.js not found. Install from https://nodejs.org (v18+)"
  exit 1
fi
echo "✓ Node.js $(node -v)"

# Check for npm
if ! command -v npm &> /dev/null; then
  echo "ERROR: npm not found"
  exit 1
fi
echo "✓ npm $(npm -v)"

# Install
echo ""
echo "Installing dependencies..."
npm install

echo ""
echo "=== Setup Complete ==="
echo ""
echo "Commands:"
echo "  npm run dev   - Start dev server (http://localhost:3000)"
echo "  npm run build - Build for production"
echo "  npm start     - Start production server"
