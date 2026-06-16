# CLAUDE.md — Catalyst & Co. Consulting Website

Next.js 14 App Router site for Catalyst & Co., a UK business advisory startup.

## Commands

```bash
cd apex-consulting
npm run dev      # localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Architecture

```
apex-consulting/
├── app/
│   ├── page.tsx              # Page composition — add/remove/reorder sections here
│   ├── layout.tsx            # Root layout, fonts, metadata
│   └── globals.css           # Design tokens, animations, glass-card, accent-shimmer
├── components/
│   ├── LogoIntro.tsx         # Video entry page (click to enter)
│   ├── Navigation.tsx        # Fixed header + mobile menu
│   ├── HeroSection.tsx       # Main hero with ticker
│   ├── HeroScroll.tsx        # Scroll-driven dashboard animation
│   ├── DisplayCards.tsx      # "Why Catalyst" fan cards section
│   ├── AnimatedHeroSection.tsx  # Rotating word headline + feature list
│   ├── ServicesSection.tsx   # 8-card services grid
│   ├── FinancialAnalyzer.tsx # Demo chart + "how it works" panel
│   ├── MarketResearch.tsx    # Competitor radar + market stats
│   ├── StatsSection.tsx      # Credential/stats strip
│   ├── CTASection.tsx        # Contact form + sidebar
│   └── Footer.tsx
├── lib/
│   └── site-content.ts       # SINGLE SOURCE OF TRUTH for all editable content
└── public/
    ├── logo-intro.mp4        # Entry page video (place here manually)
    └── logo.jpg              # Logo image (place here manually)
```

## Editing Content

**All editable text, numbers, and data lives in one file:**
`lib/site-content.ts`

| Export | What it controls |
|---|---|
| `COMPANY` | Name, phone, email, office, guarantee text |
| `HERO_BADGES` | Three trust badges under the hero CTA |
| `STATS` | Four credential blocks (plain string values) |
| `EXPERIENCE` | Two founder background cards shown site-wide |
| `DASHBOARD_METRICS` | Live dashboard demo numbers |
| `DEMO_REVENUE` | Financial chart data (12 months) |
| `DEMO_KPI` | KPI cards above the chart |
| `DEMO_INSIGHTS` | Insight bullets in the financial section |
| `MARKET_STATS` | Four market stat cards |
| `COMPETITORS` | Competitor radar data |

For headlines and body copy hardcoded in components, edit the relevant file directly.

## Key Design Decisions

- **Dark palette:** `#0A0908` (deep) → `#0F0E0C` (base) → `#161512` (raised)
- **Accent colour:** `#D0C9BC` (warm pearl/cream), CSS var `--accent-400`
- **Glass cards:** `.glass-card` utility class in `globals.css`
- **Shimmer text:** `.accent-shimmer` for gradient animated headings
- **Charts:** Revenue line = `#10B981` (emerald), Expenses = `#EF4444` (red)
- **StatsSection uses plain string values** — do not add `suffix`/`prefix` number fields, they will show NaN

## Adding/Removing Sections

Edit `app/page.tsx`. Each section is a self-contained component. Order in the file = order on page.

## Public Assets

Files in `public/` are served at the root URL:
- `public/logo-intro.mp4` → `/logo-intro.mp4` (entry page video)
- `public/logo.jpg` → `/logo.jpg` (logo image)

These are binary files and must be placed manually — they cannot be committed via the MCP push tool.

## Deployment

Set `NEXT_PUBLIC_DOMAIN` in `.env.local` to enable CORS for your domain:
```
NEXT_PUBLIC_DOMAIN=yourcatalystandco.com
NEXT_PUBLIC_SITE_URL=https://yourcatalystandco.com
```
