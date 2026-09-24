# Ethan Teng

Personal and business website for Ethan Teng: Founder of Ask Linc, Engineering Lead / Founding Engineer at Navi Nurses, creator of Uncloud, and the person behind Ethan Teng Consulting LLC. The default homepage is personal: Ask Linc first, followed by Navi Nurses, Uncloud, and career background. A persistent Personal / Consulting switch opens the dedicated business side.

## Development

The existing stack is Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, and Vercel Analytics. Use Node.js 20.9+ and npm with the checked-in lockfile.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production:

```sh
npm run build
npm start
```

Validation:

```sh
npx tsc --noEmit
npm run lint
npm run build
```

## Content and design

- `lib/experience.ts`: current roles, career history, and working principles. Shared by the homepage, about page, web resume, and PDF resume. Current roles intentionally have no inferred start dates.
- `lib/site.ts`: business identity, contact links, original services and prices, add-ons, historical case studies, and selected collaborations.
- `lib/site-mode.ts`: URL-based mode selection, each mode’s home, and its primary navigation. No saved browser preference overrides the personal landing page.
- `app/globals.css`: responsive layout, color tokens, typography, focus states, reduced motion, and print styles.
- `components/work-showcase.tsx`: Ask Linc, Navi Nurses, and Uncloud stories with actual homepage screenshots in browser frames. Each full section, including its screenshot, reveals once on scroll.
- `public/work/`: website screenshots captured on September 24, 2026 from `https://asklinc.com/`, `https://navinurses.com/`, and `https://www.uncloud.life/`. These show public websites, not private application screens. Refresh the assets when those sites change.
- `components/navbar.tsx`: an always-visible Personal / Consulting segmented switch and navigation for the active mode.
- `components/consulting-nav.tsx`: navigation between services, case studies, collaborations, and approach.
- `components/contact-content.tsx`: shared personal and consulting contact layout, with separate URLs and copy.
- `components/price-card.tsx`: server-rendered offer details, without repeated calls to action.
- `components/scroll-reveals.tsx`: one-time scroll reveals for off-screen work and career content. The server-rendered page stays visible without JavaScript; reduced-motion preferences and printing show everything without animation.
- `app/layout.tsx`: site metadata, illustrated portrait for sharing, navigation, footer, and analytics.
- `components/resume-pdf.tsx`: two-page resume, served by `/api/generate-resume`.

The homepage is photo-free and keeps one direct link per product. Ethan’s supplied illustration appears on About and in sharing metadata. Personal navigation is Work, About, and Contact; consulting navigation is Services, Case studies, and Contact. The switch uses regular links, so Back, refresh, direct visits, and browsing without JavaScript preserve the mode represented by the URL. The consulting page has one project inquiry action after the services, pricing, and process. No new runtime dependencies or environment variables are needed. Contact uses direct email and the existing Calendly booking link.

## Routes

- `/`: personal landing page with Ask Linc first, current work, and earlier career highlights
- `/about`: background and current roles
- `/approach`: product judgment, technical ownership, and AI-agent-orchestrated delivery
- `/resume`: current and previous experience, plus PDF download
- `/results`: retained historical case studies with expandable detail
- `/contact`: personal inquiries by email or scheduling
- `/services/contact`: consulting inquiries, retaining consulting navigation
- `/clients`: retained collaboration examples
- `/services`: consulting mode landing page for Ethan Teng Consulting LLC; full pricing and deliverables, hourly advice, custom projects, add-ons, and engagement process
- `/legal/privacy`: existing privacy policy
- `/services/privacy`: the same policy in the consulting shell, with `/legal/privacy` as its canonical URL

Deployment remains on the repository’s existing Vercel setup. The redesign does not change hosting configuration.
