# Flipkart Clone – E‑Commerce Platform

Flipkart‑inspired full‑stack e‑commerce platform built with **React (Vite)** + **Express** + **Prisma** + **PostgreSQL**.

## Project Demo (Most Important)

- Live Demo: https://e-commerce-platform-frontend.vercel.app/
- Demo Video: _add your video link here_ (best: GitHub-uploaded `.mp4` link or YouTube)

## Screenshots

<table>
  <tr>
    <td><img src="docs/screenshots/homepage.png" alt="Homepage" width="420" /></td>
    <td><img src="docs/screenshots/product-search.png" alt="Search" width="420" /></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/product-detail.png" alt="Product detail" width="420" /></td>
    <td><img src="docs/screenshots/checkout.png" alt="Checkout" width="420" /></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/wishlist.png" alt="Wishlist" width="420" /></td>
    <td><img src="docs/screenshots/order-history.png" alt="Orders" width="420" /></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/login.png" alt="Login" width="420" /></td>
    <td><img src="docs/screenshots/email.jpg" alt="Email receipt" width="420" /></td>
  </tr>
</table>

## What’s Implemented

- Product listing (Flipkart‑style grid), search, and category filters
- Product detail page (gallery, WOW DEAL, delivery, key features/specifications)
- Cart (add/update quantity/remove) + cart summary
- Checkout (shipping address form) + place order + confirmation with order ID
- Orders history
- Wishlist
- Authentication (signup/login) + protected routes
- Email notifications via Gmail SMTP (signup, login alert, order confirmation)

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
Open the app at `http://localhost:3000`.
Signup/Login is required for cart/checkout/orders/wishlist.

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

## Tech Stack

- Frontend: React, Vite, TypeScript, React Router, TanStack Query, Tailwind CSS
- Backend: Node.js, Express, TypeScript, Prisma
- Database: PostgreSQL (Docker Compose)

## Folder Structure

```txt
ecommerce_platform/
  apps/
    frontend/   # React (Vite) client
    backend/    # Express API + Prisma + seed/scripts
  docs/
    screenshots/  # screenshots used in this README
  packages/
    shared/     # shared types/helpers (scaffold)
```

## Assumptions

- Payments are simulated (no real payment gateway).
