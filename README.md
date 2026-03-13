# E-Commerce Platform

Flipkart-inspired e-commerce platform built with React (Vite), Express, TypeScript, Prisma, and PostgreSQL.

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

## How It Works (High Level)

- **Frontend** (`apps/frontend`): React UI + routing, calls the backend REST API.
- **Backend** (`apps/backend`): Express API + Prisma ORM.
- **Database**: PostgreSQL (local via Docker Compose).

## Tech Stack

- Frontend: React, Vite, TypeScript, React Router, TanStack Query, React Hook Form
- Backend: Express, TypeScript, Prisma
- Database: PostgreSQL

## Project Structure

- `apps/frontend` React application
- `apps/backend` Express API and Prisma schema
- `packages/shared` shared package scaffold

## Screenshots

![Homepage](docs/screenshots/homepage.png)
![Product search](docs/screenshots/product-search.png)
![Product detail](docs/screenshots/product-detail.png)
![Checkout](docs/screenshots/checkout.png)
![Wishlist](docs/screenshots/wishlist.png)
![Login](docs/screenshots/login.png)
![Order history](docs/screenshots/order-history.png)

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

## Useful Commands

- `npm run lint` — lint all workspaces
- `npm run build` — build all workspaces
- `npm run prisma:clear` — clear DB tables (backend)

## Environment

Backend (`apps/backend/.env`):

```env
PORT=4000
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/ecommerce_platform
JWT_SECRET=replace_with_a_long_random_string
```

Frontend (`apps/frontend/.env`):

```env
VITE_API_URL=http://127.0.0.1:4000/api
```

## Seeding Notes

- The seed script clears existing rows in the main tables before inserting.
- If `SEED_CSV_PATH` is not found, the seed falls back to an included snapshot dataset.
- The dataset does not include inventory, so seed uses a consistent default stock quantity per product.
- A small set of known-unwanted product names are excluded during seeding (see `apps/backend/prisma/seed.ts`).

## Assumptions

- Payments are simulated
- Email notifications are represented as stored notification records instead of real email delivery
