# UGC-AI

An AI SaaS for creating UGC (user-generated content) ads. Upload a product image and a model image, describe the product, and generate in-context images and short-form videos for social media.

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- Clerk for authentication
- React Router, Framer Motion, Lenis (smooth scrolling), Lucide icons
- Prisma + PostgreSQL schema for users and projects (backend in progress)

## Features

- Landing page with features, pricing and FAQ sections
- Sign in / sign up with Clerk
- Generator page with product and model image uploads, project details, aspect ratio (9:16 or 16:9) and an optional prompt
- Community gallery of generated images and videos

## Getting started

The frontend lives in `client/`:

```bash
cd client
npm install
cp .env.example .env   # then add your Clerk publishable key
npm run dev
```

### Environment variables

| Variable | Description |
| --- | --- |
| `VITE_CLERK_PUBLISHABLE_KEY` | Publishable key from your Clerk dashboard |

## Project structure

```
client/   React frontend (Vite)
```

## Scripts

Run these from `client/`.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Typecheck and build for production |
| `npm run lint` | Run ESLint |
| `npm run preview` | Preview the production build |

## License

See [LICENSE.txt](LICENSE.txt).
