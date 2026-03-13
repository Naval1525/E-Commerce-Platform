# E-Commerce Platform

Flipkart-inspired e-commerce platform built with React (Vite), Express, TypeScript, Prisma, and PostgreSQL.

## Features

- Product listing, search, categories, and filters
- Product detail page (gallery, WOW DEAL, delivery details, key features/specs)
- Cart + wishlist
- Checkout + order placement + order history
- Auth (signup/login) + protected routes
- Email notifications via Gmail SMTP (signup, login alert, order confirmation)

## How It Works (High Level)

- **Frontend** (`apps/frontend`): React UI + routing, calls the backend REST API.
- **Backend** (`apps/backend`): Express API + Prisma ORM.
- **Database**: PostgreSQL (local via Docker Compose).

## Tech Stack

- Frontend: React, Vite, TypeScript, React Router, TanStack Query, React Hook Form
- Backend: Express, TypeScript, Prisma
- Database: PostgreSQL

## Folder Structure

```txt
ecommerce_platform/
  ./
    README.md
    docker-compose.yml
    package.json
    package-lock.json
  apps/
    backend/
      prisma/
        schema.prisma
        seed.ts
        seed.from-db.ts
        export-seed.ts
        remove-banned-products.ts
      src/
        app/
          server.ts
        modules/
          auth/
          order/
        shared/
          mailer.ts
      .env.example
    frontend/
      public/
        favicon.svg
      src/
        pages/
          home/
          product-detail/
          search-results/
          checkout/
        shared/
          components/
          styles/
      .env.example
  docs/
    screenshots/  # assignment screenshots used in README
  packages/
    shared/     # shared types/helpers (scaffold)
```

## Screenshots

![Homepage](docs/screenshots/homepage.png)
![Product search](docs/screenshots/product-search.png)
![Product detail](docs/screenshots/product-detail.png)
![Checkout](docs/screenshots/checkout.png)
![Wishlist](docs/screenshots/wishlist.png)
![Login](docs/screenshots/login.png)
![Order history](docs/screenshots/order-history.png)
![Email receipt](docs/screenshots/email-receipt.jpg)

## Setup & Run

### Option A: Docker (recommended for evaluation)

Spins up **Postgres + Backend + Frontend**:

```bash
docker compose up --build
```

- Frontend: `http://localhost:3000`
- Backend health: `http://localhost:4000/health`
- Postgres: `localhost:5433` (mapped from container `5432`)

Note: Docker seeds the database on first start (default limit: `250` products).
Open the app at `http://localhost:3000` and create an account using **Signup**.

### Option B: Local Development (Node + Docker Postgres)

Prerequisites: Node.js (LTS) + Docker.

1. Install dependencies:

```bash
npm install
```

2. Start Postgres:

```bash
docker compose up -d postgres
```

3. Configure environment:

```bash
cp apps/backend/.env.example apps/backend/.env
cp apps/frontend/.env.example apps/frontend/.env
```

4. Create tables + seed sample data:

```bash
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
```

Optional (seed from a Flipkart CSV dataset):

```bash
SEED_CSV_PATH="/absolute/path/to/flipkart_com-ecommerce_sample.csv" SEED_LIMIT=250 npm run prisma:seed
```

5. Start the apps:

```bash
npm run dev
```

Open the app at `http://localhost:5173` and create an account using **Signup**.

## Seeding & DB Commands

- Clear all existing data (from repo root): `npm run prisma:clear`
- Seed from the latest DB snapshot (from repo root): `npm run prisma:seed-from-db`
- Same commands from backend folder:
  - `cd apps/backend && npm run prisma:clear`
  - `cd apps/backend && npm run prisma:seed-from-db`

## Environment

Backend (`apps/backend/.env`):

```env
PORT=4000
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/ecommerce_platform
JWT_SECRET=replace_with_a_long_random_string

# Email (Gmail app password)
GMAIL_USER=yourgmail@gmail.com
GMAIL_APP_PASSWORD=your_app_password
MAIL_FROM="Flipkart Clone <yourgmail@gmail.com>"
```

Frontend (`apps/frontend/.env`):

```env
VITE_API_URL=http://127.0.0.1:4000/api
```

## Notes

- The seed script clears existing rows in the main tables before inserting.
- If `SEED_CSV_PATH` is not found, the seed falls back to an included snapshot dataset.
- For Gmail SMTP on a VM, make sure outbound SMTP ports are allowed (typically `465`/`587`) and set the same env vars there.
