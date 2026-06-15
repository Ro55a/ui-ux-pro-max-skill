# Apex Advisory — Consulting Website

Premium Next.js 14 website for a business consulting firm targeting startups and SMEs.

## Stack
- **Next.js 14** (App Router)
- **Tailwind CSS** (custom dark/gold design tokens)
- **Framer Motion** (scroll-triggered and stagger animations)
- **Recharts** (financial charts, radar charts)
- **Lucide React** (SVG icons)

## Getting Started

```bash
cd apex-consulting
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen with kinetic typography, floating dashboard card, and animated ticker |
| **Services** | 8-service grid with glass cards — growth, finance, ops, marketing, research, competitor analysis, investor readiness |
| **Stats** | Animated count-up numbers: +340% revenue growth, 127+ clients, 30-day results |
| **Financial Analyzer** | CSV/XLSX upload with live Recharts area/bar charts and AI-generated insights |
| **Market Research** | Competitor profiles with radar chart comparison and market stats |
| **Business Intelligence** | Pre-call profiler — type any company name to get pain points, opportunities, and opportunity score |
| **Contact / CTA** | Lead form with service selector, contact info, guarantee, and testimonial |

## API Route

`POST /api/analyse-financials` — accepts CSV file upload, auto-detects column names (revenue/income/sales, expenses/cost/spend, profit/net), returns:
- `chartData` — monthly array for Recharts
- `kpis` — annual revenue, net profit, avg margin, burn multiple, growth rate
- `insights` — conditional text insights based on benchmarks

## What Can Be Built Next

- **Live Companies House integration** — auto-populate company data from registration number
- **Claude API integration** — replace mock insights with real LLM analysis of uploaded financials
- **Competitor web scraping** — real pricing and positioning data
- **Client portal** — authenticated dashboard with persistent financial models
- **Automated report generation** — PDF export of advisory findings
