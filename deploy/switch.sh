#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

target="${1:-}"
if [[ -z "$target" ]]; then
  if grep -q "proxy_pass http://api_blue;" nginx.conf; then target="green"; else target="blue"; fi
fi

echo "Switching traffic to $target..."

if [[ "$target" == "blue" ]]; then
  sed -i '' 's|proxy_pass http://api_green;|proxy_pass http://api_blue;|' nginx.conf
else
  sed -i '' 's|proxy_pass http://api_blue;|proxy_pass http://api_green;|' nginx.conf
fi

docker compose build nginx
docker compose up -d nginx
echo "Switched traffic to $target"
