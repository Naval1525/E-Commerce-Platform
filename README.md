# E-Commerce Platform

Flipkart-inspired e-commerce platform built with React, Express, TypeScript, Prisma, and PostgreSQL.

## Quick Start (Local)

1. Install deps:

```bash
npm install
```

2. Start Postgres (optional, for local DB):

```bash
docker compose up -d
```

3. Create `apps/backend/.env`:

```env
PORT=4000
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/ecommerce_platform?schema=public
```

4. Migrate + seed:

```bash
npm run prisma:generate
npm run prisma:migrate
SEED_CSV_PATH="/Users/naval/Downloads/flipkart_com-ecommerce_sample.csv" SEED_LIMIT=250 npm run prisma:seed
```

5. Start apps:

```bash
npm run dev
```

## Implemented Scope

- Product listing with search and category filters
- Product detail page with image gallery and specifications
- Cart management with quantity updates and removal
- Checkout flow with shipping form and order placement
- Order confirmation and order history
- Wishlist
- Responsive desktop/tablet/mobile layout
- Signup, login, and authenticated user sessions
- Simulated email notification records on order placement

## Tech Stack

- Frontend: React, Vite, TypeScript, React Router, TanStack Query, React Hook Form
- Backend: Express, TypeScript, Prisma
- Database: PostgreSQL (Neon)

## Project Structure

- `apps/frontend` React application
- `apps/backend` Express API and Prisma schema
- `packages/shared` shared package scaffold

## Environment

Backend `.env`:

```env
PORT=4000
DATABASE_URL=your_neon_postgres_connection_string
JWT_SECRET=replace_with_a_long_random_string
```

Optional frontend `.env`:

```env
# Local development:
VITE_API_URL=http://127.0.0.1:4000/api

# Production:
VITE_API_URL=https://your-backend-domain.com/api
```

## Fixing Flixcart Image Hotlinking (Vercel)

Flixcart image URLs are often blocked over HTTPS (you'll see `403 Forbidden`), and Vercel sites run on HTTPS-only, so the browser won’t load them.

Mirror the product images to Cloudinary once, then your UI will use the Cloudinary HTTPS URLs:

Backend env:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run:

```bash
DRY_RUN=1 npm run prisma:mirror-images --workspace backend
# then:
npm run prisma:mirror-images --workspace backend
```

## Frontend Deployment (Vercel)

Set `VITE_API_URL` in Vercel to your backend domain (include `/api`).

Example:

```env
VITE_API_URL=https://api.yourdomain.com/api
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Add your backend environment file at `apps/backend/.env`

3. Generate Prisma client:

```bash
npm run prisma:generate
```

4. Apply migrations:

```bash
npm run prisma:migrate
```

5. Seed data (from Flipkart CSV):

```bash
SEED_CSV_PATH="/Users/naval/Downloads/flipkart_com-ecommerce_sample.csv" SEED_LIMIT=250 npm run prisma:seed
```

6. Start the apps:

```bash
npm run dev:backend
npm run dev:frontend
```

## Seeding Notes

- The seed script clears existing rows in the main tables before inserting.
- Product images come from the CSV `image` column (no Unsplash).
- The dataset does not include inventory, so seed uses a consistent default stock quantity per product.
- A small set of known-unwanted product names are excluded during seeding (see `apps/backend/prisma/seed.ts`).

## Verification

Verified during implementation:

- backend build passed
- backend lint passed
- frontend build passed
- frontend lint passed
- Prisma migration applied successfully to Neon
- Prisma seed completed successfully
- live API checks passed for catalog, cart, wishlist, checkout, order history, and order detail
- live auth checks passed for signup, login, me, protected cart, and protected checkout
- frontend dev server starts successfully

## Assumptions

- Payments are simulated
- Email notifications are represented as stored notification records instead of real email delivery
