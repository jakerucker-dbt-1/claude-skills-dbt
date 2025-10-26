# Jacob Rucker - Portfolio Website

A modern, design-focused portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean, Vercel/Hex-inspired aesthetic with subtle animations, glass morphism effects, and full accessibility support.

## Features

- **Modern Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Static Export**: Fully static site with no backend dependencies
- **Design Excellence**:
  - Dark theme with high contrast typography
  - Glass morphism cards with subtle blur effects
  - Responsive 12/8/4 column grid layout
  - Micro-animations with reduced motion support
  - Inter font family (300-900 weights)
- **Performance Optimized**:
  - Static generation for optimal LCP
  - Minimal JavaScript bundle
  - Optimized font loading
- **Accessible**:
  - Semantic HTML landmarks
  - ARIA labels where needed
  - Keyboard navigation with visible focus rings
  - WCAG AA color contrast ratios
- **Components**:
  - Sticky navigation with blur backdrop
  - Hero section with ambient gradients
  - Metric bar with key performance indicators
  - Experience timeline with glass cards
  - Project showcase cards
  - Skills grid with category icons
  - Writing list with external links
  - "Ask Me" teaser (design-only, ready for future Supabase integration)
  - Responsive footer

## Quick Start

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd jacob-rucker-portfolio

# Install dependencies (choose one)
npm install
# or
pnpm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm run start
# or
pnpm build && pnpm start
```

The build output will be in the `out/` directory (static export).

### Lint & Format

```bash
npm run lint
npm run format
```

## Customization

### Update Resume Content

Edit `lib/data.ts` to update all resume content:

```typescript
export const JACOB: PersonData = {
  name: "Your Name",
  email: "your@email.com",
  // ... update all fields
};
```

The data structure is fully typed, so TypeScript will guide you.

### Change Accent Color

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    DEFAULT: '#7C6BFF', // Change this
    hover: '#8F7FFF',
    light: '#9B8FFF',
  },
}
```

Or update the gradient in the config:

```typescript
backgroundImage: {
  'gradient-accent': 'linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%)',
}
```

### Add Real Projects

Edit `lib/data.ts` and update the `PROJECTS` array:

```typescript
export const PROJECTS = [
  {
    title: "Your Project",
    description: "Project description",
    tags: ["Tag1", "Tag2"],
    status: "Live"
  },
  // ... more projects
];
```

### Update Writing Samples

Edit the `writing` array in `lib/data.ts`:

```typescript
writing: [
  {
    title: "Your Article Title",
    url: "https://your-blog.com/article",
    date: "2025-01-15"
  },
]
```

### Replace Placeholder Assets

1. **Favicon**: Replace `public/favicon.svg` with your own icon
2. **OG Image**: Replace `public/og.png` with a 1200×630px image
3. **Resume PDF**: Add your PDF to `public/resume.pdf` and update the link in `lib/data.ts`:

```typescript
links: {
  pdf: "/resume.pdf",
  github: "https://github.com/yourusername",
  website: "https://yourwebsite.com"
}
```

## Project Structure

```
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page composition
│   └── globals.css       # Global styles & Tailwind
├── components/
│   ├── Nav.tsx           # Sticky navigation
│   ├── Hero.tsx          # Hero section
│   ├── MetricBar.tsx     # Performance metrics
│   ├── ExperienceTimeline.tsx
│   ├── ProjectCards.tsx
│   ├── SkillsGrid.tsx
│   ├── WritingList.tsx
│   ├── AskMeTeaser.tsx   # Future Q&A feature
│   ├── Footer.tsx
│   ├── Section.tsx       # Reusable section wrapper
│   └── Badge.tsx         # Pill badges
├── lib/
│   └── data.ts           # All resume content (typed)
├── public/
│   ├── favicon.svg
│   ├── og.png
│   └── textures/
│       └── hex.svg       # Hex grid pattern
├── tailwind.config.ts    # Tailwind customization
├── tsconfig.json
├── next.config.ts        # Static export config
└── package.json
```

## Future Enhancements

### Supabase Q&A Feature

The "Ask Me" section is designed for future integration. To implement:

1. Set up Supabase project
2. Create a table for Q&A interactions
3. Add Supabase client to the project
4. Update `components/AskMeTeaser.tsx`:
   - Enable the input and button
   - Add form submission handler
   - Connect to your AI/RAG pipeline

Example integration:

```typescript
const handleSubmit = async (question: string) => {
  const { data } = await supabase
    .from('questions')
    .insert({ question, timestamp: new Date() });

  // Call your AI endpoint
  const response = await fetch('/api/ask', {
    method: 'POST',
    body: JSON.stringify({ question }),
  });

  const answer = await response.json();
  // Display answer
};
```

### Analytics

Add analytics by installing your preferred provider:

```bash
npm install @vercel/analytics
# or
npm install @google-analytics/next
```

Then add to `app/layout.tsx`.

## Design Tokens

### Colors

- **Background**: `#0B0B0C`
- **Panel**: `rgba(255, 255, 255, 0.04)`
- **Border**: `rgba(255, 255, 255, 0.08)`
- **Text**: `#EDEDF1`
- **Muted**: `#B5B6BD`
- **Accent**: `#7C6BFF`

### Typography

- **Font**: Inter (300-900)
- **Base Size**: 16px
- **Hero**: 42px (mobile) / 56px (desktop)
- **H2**: 28px (mobile) / 36px (desktop)
- **Body Leading**: 1.75

### Spacing

- **Section**: 80px (mobile) / 112px (tablet) / 128px (desktop)
- **Card Radius**: 14px
- **Pill Radius**: 9999px

## QA Checklist

Before deploying, verify:

- [ ] Lighthouse scores (Performance, SEO, Accessibility) are good on desktop
- [ ] Lighthouse scores are acceptable on mobile
- [ ] Tab order is logical across all sections
- [ ] Focus rings are visible on all interactive elements
- [ ] Mobile header menu works (or collapses appropriately)
- [ ] All sections stack cleanly on mobile (320px+)
- [ ] No external API calls (check Network tab)
- [ ] Build passes without errors: `npm run build`
- [ ] Static export works: check `out/` directory
- [ ] All links work (resume PDF, email, LinkedIn)
- [ ] OG image displays correctly when sharing
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Text is readable with sufficient contrast
- [ ] Images have alt text where applicable

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Performance Tips

1. **Images**: Convert `public/og.png` SVG to actual PNG for production
2. **Fonts**: Inter is loaded via next/font with `swap` for optimal loading
3. **Bundle**: Framer Motion is tree-shakeable; only imports used features
4. **Static**: Site is fully static (no server), perfect for CDN deployment

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Build
npm run build

# Deploy the out/ directory
netlify deploy --dir=out --prod
```

### GitHub Pages

1. Build the site: `npm run build`
2. Push the `out/` directory to `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Other Static Hosts

Build the site and deploy the `out/` directory to:
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static hosting service

## License

© 2025 Jacob Rucker. All rights reserved.

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts via next/font)
- **Build**: Static export (no Node.js runtime needed)

---

Built with Next.js + Tailwind CSS
