#!/bin/bash
# Auto-Publish Script — Commit posts.json changes & push to trigger Vercel deploy
# Usage: bash scripts/auto-publish.sh "feat: add new blog post - Taoist inner peace"

set -e

cd "$(dirname "$0")/.."

COMMIT_MSG="${1:-"chore: auto-publish blog update - $(date +'%Y-%m-%d')"}"

# Check for changes in posts.json
if ! git status --short data/posts.json | grep -q .; then
  echo "No changes detected in data/posts.json. Nothing to publish."
  exit 0
fi

# Stage, commit, and push
echo "Staging data/posts.json..."
git add data/posts.json

echo "Committing: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "Pushing to origin/main..."
git push origin main

echo ""
echo "Done! Vercel deploy triggered automatically via GitHub Actions."
echo "Check status: https://github.com/yiqianpu-del/aura-cloud-tao/actions"
