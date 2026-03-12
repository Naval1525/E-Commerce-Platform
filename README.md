# E-Commerce Platform

Flipkart-inspired e-commerce platform built with React, Express, TypeScript, Prisma, and PostgreSQL.

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
```

Optional frontend `.env`:

```env
VITE_API_URL=http://127.0.0.1:4000/api
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
npm exec --workspace backend prisma migrate dev -- --name init
```

5. Seed demo data:

```bash
npm run prisma:seed
```

6. Start the apps:

```bash
npm run dev:backend
npm run dev:frontend
```

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
