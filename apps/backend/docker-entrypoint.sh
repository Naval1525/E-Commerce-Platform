#!/bin/sh
set -e

echo "[backend] prisma migrate deploy"
npx prisma migrate deploy

if [ "${SEED_ON_START:-1}" = "1" ]; then
  echo "[backend] seeding database"
  node -e "console.log('SEED_CSV_PATH=' + (process.env.SEED_CSV_PATH || '(none)'))"
  npx tsx prisma/seed.ts
fi

echo "[backend] starting server"
node dist/src/app/server.js
