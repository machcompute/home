# MACH COMPUTING — Home

Landing page for [machcomputing.com](https://machcomputing.com).

## Overview

Single-page personal website. Sections: Hero, Portfolio, Blog, Projects, and About.

The Projects section fetches data from an external API and revalidates every 5 minutes via ISR. Everything else is static.

## Tech Stack

Next.js 16 (App Router) / Tailwind CSS v4 / TypeScript / React 19

## Setup

```bash
npm install
npm run dev   # localhost:3000
```

## Environment Variables

Create `.env.local`:

```
PROJECTS_BASE=https://projects.machcomputing.com
```

| Variable        | Description                                          |
| --------------- | ---------------------------------------------------- |
| `PROJECTS_BASE` | Base URL of the projects site. Used to fetch `/api/projects` and build project links. |

## Structure

```
app/
  globals.css    — Theme tokens, keyframe animations
  layout.tsx     — Root layout, fonts, metadata
  page.tsx       — Async Server Component (full page)
public/
  logo.png       — Shield logo
  text_logo.png  — Wordmark
  favicon.ico
.env.local       — Environment config (not committed)
```

## Sections

| Section       | Content                                                        |
| ------------- | -------------------------------------------------------------- |
| **Hero**      | Tagline + animated 3x3 geometric SVG grid                     |
| **Portfolio** | Link to portfolio.machcomputing.com + browser mockup           |
| **Blog**      | Coming soon                                                    |
| **Projects**  | Cards fetched from `PROJECTS_BASE/api/projects` (ISR, 5 min)  |
| **About**     | Bio + skills                                                   |
| **Footer**    | Nav links + GitHub, LinkedIn, Google Scholar                   |

## Related

- [Portfolio](https://portfolio.machcomputing.com) — publications & research
- [Projects](https://projects.machcomputing.com) — interactive experiments
