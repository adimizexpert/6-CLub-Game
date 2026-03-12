# 6Club Guide - SEO-Optimized Affiliate Website

A high-tech, SEO-optimized affiliate website for 6 Club gaming platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **SEO Optimized**: Built with Next.js Metadata API, sitemap, robots.txt, JSON-LD, and meta tags
- **Modern Design**: Dark blue (#03002e) background with gold (#EFBF04) CTAs
- **Responsive**: Mobile-first design with hamburger navigation
- **Fast Performance**: Next.js 14 with App Router for optimal performance
- **TypeScript**: Fully typed for better development experience

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Google Fonts (Orbitron & Poppins)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── guide/          # Guide page
│   ├── 6-club-games/   # Games listing page
│   ├── k3-lotre/       # Individual game pages
│   ├── trx-hash-game/
│   ├── 5d-lotre/
│   ├── colour-prediction-game/
│   ├── wingo-game/
│   ├── privacy-policy/ # Legal pages
│   ├── disclaimer/
│   ├── responsible-gaming/
│   ├── contact/        # Contact page
│   ├── faqs/           # FAQs page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   ├── sitemap.ts      # Sitemap generation
│   └── robots.ts       # Robots.txt
├── components/
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── CTAButton.tsx   # CTA button component
└── lib/
    └── constants.ts    # Constants and configuration
```

## Images Required

Place the following images in the `public/images/` directory:

- `logo.png` - Logo for the navbar
- `6-club-main.webp` - Main hero image
- `K3-Lotre.png` - K3 Lotre game image
- `TRXhash.png` - TRX Hash game image
- `5d.png` - 5D Lotre game image
- `6clubcolour.png` - Colour Prediction game image
- `WingoGame.png` - Wingo game image

## SEO Features

- Automatic sitemap generation
- Robots.txt configuration
- Open Graph meta tags
- Twitter Card meta tags
- Structured data ready
- Canonical URLs
- Semantic HTML

## Affiliate Link

All registration and login buttons redirect to:
`https://www.bigmumbaia.com/#/register?invitationCode=823647709954`

## Build for Production

```bash
npm run build
npm start
```

## Customization

### Colors
Edit `tailwind.config.ts` to change theme colors:
- `dark-blue`: #03002e
- `gold`: #EFBF04

### Fonts
Fonts are configured in `app/layout.tsx`:
- Orbitron for headings
- Poppins for body text

### Affiliate Link
Update the `AFFILIATE_LINK` constant in `lib/constants.ts`

## License

This project is created for affiliate marketing purposes.

