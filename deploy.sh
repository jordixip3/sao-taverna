#!/usr/bin/env bash
set -euo pipefail

# Add Docker to PATH for macOS Docker Desktop installations
export PATH="/Applications/Docker.app/Contents/Resources/bin:$PATH"

PROJECT_ROOT="/Users/jordimaicas/Downloads/sao-taverna"

echo "🔧 Changing to project directory..."
cd "$PROJECT_ROOT"

echo "🚀 Building images and starting containers..."
docker compose up --build -d

echo "✅ All services are up! 🎉"
echo "   • Frontend : http://localhost:8182"
echo "   • Backend  : http://localhost:8124/api/info"
echo "   • MySQL    : sao_mysql (user: sao_user / pass: sao_pass)"
