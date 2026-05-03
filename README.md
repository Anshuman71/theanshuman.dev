# theanshuman.dev

Personal portfolio and blog site for [Anshuman Bhardwaj](https://theanshuman.dev).

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) |
| Language | **TypeScript 5.9** |
| Styling | **Tailwind CSS 3** + `@tailwindcss/typography` |
| Animations | **Framer Motion 11** |
| Content | **MDX** via `next-mdx-remote` v5 (RSC) + `gray-matter` for frontmatter |
| Syntax Highlighting | **Shiki 4** via `rehype-pretty-code` |
| Icons | `@heroicons/react`, custom SVGs |
| Deployment | **Vercel** (free tier), daily SSG rebuild via GitHub Actions cron |

## Architecture

### App Router Structure

```
app/
├── layout.tsx              # Root layout (NavBar, metadata, viewport)
├── page.tsx                # Home (server — fetches articles)
├── sitemap.ts              # Next.js MetadataRoute sitemap
├── about/page.tsx          # About (server)
├── articles/
│   ├── page.tsx            # Articles listing (server)
│   └── [slug]/page.tsx     # Article detail (server — MDX rendering)
├── services/page.tsx       # Services (server)
└── foo-bar-baz/page.tsx    # Countdown page (client)
```

### Server / Client Split

Pages are **server components** by default (data fetching, metadata). Interactive pieces are extracted into client components:

- `HomeContent.tsx` — home page UI with animations
- `ArticlesList.tsx` — search/sort interactivity
- `Section.tsx`, `HighlightedText.tsx` — Framer Motion animations
- `NavBar.tsx` — `usePathname()` + reading progress bar
- `ImageWithFallback.tsx` — `onError` fallback for `next/image`

### Content Pipeline

1. MDX files live in `content/*.mdx` with gray-matter frontmatter
2. `utils.ts` → `getArticles()` reads and parses all MDX files
3. Article pages use `MDXRemote` from `next-mdx-remote/rsc` with raw source
4. `rehype-pretty-code` (Shiki, `github-dark` theme) handles syntax highlighting
5. `constants.ts` holds supplementary blog metadata (canonical URLs, tags, dates)

### Key Components

- `MetaData.tsx` — exports `generateMetadata()` returning Next.js `Metadata` type
- `NavBar.tsx` — sticky nav with reading progress bar + active route highlight
- `Footer.tsx` — contact links grid + hit counter
- `Article.tsx` — article card component for listings
- `HitCounter.tsx` — view count display
- `Section.tsx` / `SectionHeading.tsx` — animated section wrappers

## Setup

```bash
# Install dependencies
pnpm install

# Configure environment
cp .env.example .env.development
# Set DEV_USERNAME in .env.development

# Run dev server (uses Turbopack by default in Next.js 16)
pnpm dev

# Production build
pnpm build && pnpm start
```

## Deployment

Deployed on **Vercel** free tier. A GitHub Actions cron job triggers a daily rebuild to refresh content from the DEV API.

Redirects handle `theanshuman.dev` → `www.theanshuman.dev` (301, configured in `next.config.js`).

## Migration Notes

This project was migrated from **Next.js Pages Router → App Router** (Next.js 16). Key changes:

- `pages/` → `app/` directory with proper layout/page structure
- `next/head` → `generateMetadata()` for SEO
- `next/router` → `next/navigation` (`usePathname`, `useReadingProgress`)
- `next-mdx-remote` v4 `serialize` → v5 `MDXRemote` from `next-mdx-remote/rsc`
- `sitemap.js` pre-build script → `app/sitemap.ts` (Next.js MetadataRoute)
- `next.config.js`: `swcMinify` removed, `redirects` as async function, `images.domains` → `images.remotePatterns`, Turbopack SVG rules added
- `tsconfig.json`: `moduleResolution: "bundler"`, `jsx: "preserve"`, `@/*` path alias