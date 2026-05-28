# DrBills Exchange

> A financial operating system for the next generation.

A premium, cinematic, futuristic fintech landing experience for **DrBills Exchange** — built with React, Vite, TypeScript, Tailwind CSS, Framer Motion and Lenis.

This site sells the promise of borderless payments through huge typography, holographic glassmorphism, animated gradients, 3D-tilt cards, parallax visuals, a glowing world map and a luxury virtual USD card centerpiece.

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **Tailwind CSS 3** with a fully custom brand theme (colors, gradients, glows, animations)
- **Framer Motion** for choreographed entrances, parallax & micro-interactions
- **Lenis** for buttery smooth scrolling
- **lucide-react** + **react-icons** for premium iconography
- **clsx** + **tailwind-merge** for ergonomic class composition

## Brand System

| Token              | Value                                                   |
| ------------------ | ------------------------------------------------------- |
| Background         | `#050816`                                               |
| Card background    | `rgba(255,255,255,0.05)`                                |
| Primary neon       | `#7C3AED`                                               |
| Electric blue      | `#2563EB`                                               |
| Cyan glow          | `#06B6D4`                                               |
| White text         | `#FFFFFF`                                               |
| Soft text          | `#94A3B8`                                               |
| Border glow        | `rgba(124,58,237,0.35)`                                 |
| Brand gradient     | `linear-gradient(135deg,#7C3AED 0%,#2563EB 50%,#06B6D4 100%)` |
| Neon shadow        | `0 0 40px rgba(124,58,237,0.45), 0 0 80px rgba(37,99,235,0.35)` |

### Typography

- **Headings:** Clash Display / Satoshi / General Sans (loaded from Fontshare)
- **Body:** Inter / Manrope (Google Fonts)
- **Numbers:** Space Grotesk (Google Fonts)

## Section Flow

1. `Hero` — split layout with floating dashboard, USD card, crypto bubble and a global transfer node (mouse-tracked parallax)
2. `TrustedPartners` — infinite scrolling logo strip (BTC, ETH, USDT, Binance, Visa, Mastercard, Google Play)
3. `Features` — 8 glassmorphism cards with 3D-tilt + neon hover
4. `VirtualCard` — luxury 3D black-metal USD card centerpiece with light sweep
5. `CryptoSection` — animated candlestick chart + live coin grid
6. `GlobalPayments` — glowing SVG world map with animated money beams
7. `GiftCardSection` — floating gift card stack
8. `HowItWorks` — 4-step gradient timeline
9. `Benefits` — metric-driven cards
10. `About` — story + numbers grid
11. `FAQ` — glass accordion
12. `CTABanner` — gradient banner with floating phone preview
13. `Footer` — minimal premium footer with grid texture

## Scripts

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run preview  # preview built site
```

## Component Map

```
src/components
├── Navbar.tsx
├── Hero.tsx
├── HeroVisual.tsx
├── TrustedPartners.tsx
├── Features.tsx
├── AnimatedCard.tsx
├── VirtualCard.tsx
├── CryptoSection.tsx
├── GlobalPayments.tsx
├── WorldMap.tsx
├── GiftCardSection.tsx
├── HowItWorks.tsx
├── Benefits.tsx
├── About.tsx
├── FAQ.tsx
├── CTABanner.tsx
├── Footer.tsx
├── FloatingParticles.tsx
├── GlowBackground.tsx
├── MouseGlow.tsx
├── SmoothScroll.tsx
└── Reveal.tsx
```

## Animations included

- Mouse-tracking glow trail (`MouseGlow`)
- Tiny floating particles (`FloatingParticles`)
- Scroll reveal on every section (`Reveal`)
- 3D tilt on hover (`AnimatedCard`)
- Neon pulse on primary CTAs
- Slow animated gradient mesh blobs in the background (`GlowBackground`)
- Light sweep across the virtual USD card
- Animated transaction beams on the world map
- Infinite ticker for partner logos

## Mobile

- Sticky glassmorphism navbar with full-screen mobile menu
- Hero stacks cleanly on small viewports
- Reduced motion is respected
- Tap targets ≥ 44px

## SEO

The `index.html` ships with the brief's exact SEO copy:

- Title: `DrBills Exchange — Crypto, Bills Payment & Global Transfers`
- Description, keywords and Open Graph / Twitter cards
- Theme color matches the brand background

## License

Proprietary — DrBills Exchange.
