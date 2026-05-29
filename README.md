# Mohd Sohail Khan — Portfolio

Personal portfolio of **Mohd Sohail Khan**, a Backend Engineer building scalable
Spring Boot microservices, Kafka-driven event systems, and low-latency REST APIs.

🔗 Live: [sohaailkhan.vercel.app](https://sohaailkhan.vercel.app)

## Overview

A single-page portfolio with a dark **"backend terminal"** theme (emerald + amber
accents on near-black) and smooth scroll-triggered motion. Sections:

- **Hero** — animated intro with a mouse-reactive spotlight and a scrolling tech strip
- **Experience** — professional timeline
- **Projects** — featured work with a Java/Spring code-window mockup
- **Skills** — categorized technical stack
- **Achievements** — key metrics & certifications
- **Education**
- **Contact** — links and footer

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **UI:** React 19, Tailwind CSS v4
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Self-contained system font stack (no external font fetch at build time)

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase |

## Project Structure

```
src/
├── app/            # App Router entry (layout, page) & global styles
├── components/     # UI sections (Hero, Experience, Projects, Skills, ...)
├── data/           # Single source of truth for résumé content
├── lib/            # Shared utilities
└── types/          # Shared TypeScript types
```

> All content lives in [`src/data/resume.ts`](src/data/resume.ts) — update that
> file to change experience, projects, skills, education, achievements, and
> contact details. The accent colors are themed per skill category in
> [`src/components/Skills.tsx`](src/components/Skills.tsx).

## Docker

```bash
docker compose up --build
```

Serves the production build on [http://localhost:3000](http://localhost:3000).

## Deployment

Configured with `output: "standalone"` (see
[`next.config.ts`](next.config.ts)) for a self-contained Node server build,
which the included [`Dockerfile`](Dockerfile) and
[`docker-compose.yml`](docker-compose.yml) use. Deploys cleanly to Vercel or any
Node host.

## License

[MIT](LICENSE) © 2026 Mohd Sohail Khan
