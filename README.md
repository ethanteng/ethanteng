# Ethan Teng

Personal and business website for Ethan Teng: Founder of Ask Linc, Engineering Lead / Founding Engineer at Navi Nurses, creator of Uncloud, and the person behind Ethan Teng Consulting LLC. The homepage leads with Ask Linc, then Navi Nurses and Uncloud, followed by a dedicated consulting and pricing section.

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
- `lib/site.ts`: business identity, contact links, services, prices, add-ons, historical case studies, and selected collaborations. The homepage and services page share the original offer and pricing data.
- `app/globals.css`: responsive layout, color tokens, typography, focus states, reduced motion, and print styles.
- `components/work-showcase.tsx`: Ask Linc, Navi Nurses, and Uncloud stories and explanatory product/system diagrams. These are not product screenshots or live financial data.
- `components/consulting-overview.tsx`: homepage introduction to Ethan Teng Consulting LLC, with the three original packages and hourly rate.
- `components/consulting-nav.tsx`: navigation between services, case studies, collaborations, and approach.
- `components/price-card.tsx`: server-rendered offer details, without repeated calls to action.
- `components/scroll-reveals.tsx`: one-time scroll reveals for off-screen work and career content. The server-rendered page stays visible without JavaScript; reduced-motion preferences and printing show everything without animation.
- `app/layout.tsx`: site metadata, illustrated portrait for sharing, navigation, footer, and analytics.
- `components/resume-pdf.tsx`: two-page resume, served by `/api/generate-resume`.

The homepage is photo-free and keeps one direct link per product, plus paths to consulting details and case studies. Ethan’s supplied illustration appears on About and in sharing metadata. The primary navigation is Work, Consulting, About, and Contact. The consulting page has one project inquiry action after the services, pricing, and process. No new runtime dependencies or environment variables are needed. Contact uses direct email and the existing Calendly booking link.

## Routes

- `/`: Ask Linc first, current work, consulting packages and pricing, and earlier career highlights
- `/about`: background and current roles
- `/approach`: product judgment, technical ownership, and AI-agent-orchestrated delivery
- `/resume`: current and previous experience, plus PDF download
- `/results`: retained historical case studies with expandable detail
- `/contact`: personal and business inquiries by email or scheduling
- `/clients`: retained collaboration examples
- `/services`: Ethan Teng Consulting LLC services, full pricing and deliverables, hourly advice, custom projects, add-ons, and engagement process
- `/legal/privacy`: existing privacy policy

Deployment remains on the repository’s existing Vercel setup. The redesign does not change hosting configuration.
