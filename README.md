# Mey Soytry — Portfolio (Next.js 14)

A personal portfolio built with Next.js 14, TypeScript, and TailwindCSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Fonts**: Playfair Display, DM Mono, DM Sans (via next/font/google)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout with fonts & metadata
│   └── page.tsx           # Landing page
├── components/
│   ├── Navbar.tsx         # Top navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── ProfileCard.tsx    # Profile card with photo upload
│   ├── SectionCards.tsx   # 7-card grid (About, Education, etc.)
│   ├── Footer.tsx         # Footer
│   └── Cursor.tsx         # Custom animated cursor
├── lib/
│   └── data.ts            # All your CV data (edit this!)
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## Customization

All personal data lives in **`lib/data.ts`** — edit your name, bio, projects, education, and experience there. No need to touch the components.

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or drag the folder into [vercel.com](https://vercel.com) — it auto-detects Next.js.
