# Ethan Teng

Personal website for Ethan Teng, creator of Uncloud, Founder of Ask Linc, and Engineering Lead / Founding Engineer at Navi Nurses. Current product and engineering work leads the site; earlier product and growth experience provides context.

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
- `lib/site.ts`: contact links, historical case studies, and selected collaborations.
- `app/globals.css`: responsive layout, color tokens, typography, focus states, reduced motion, and print styles.
- `components/work-showcase.tsx`: Uncloud, Ask Linc, and Navi Nurses stories and explanatory product/system diagrams. These are not product screenshots or live financial data.
- `components/scroll-reveals.tsx`: one-time scroll reveals for off-screen work and career content. The server-rendered page stays visible without JavaScript; reduced-motion preferences and printing show everything without animation.
- `app/layout.tsx`: site metadata, existing portrait for sharing, navigation, footer, and analytics.
- `components/resume-pdf.tsx`: two-page resume, served by `/api/generate-resume`.

The homepage is photo-free and keeps only one direct link per product. The existing portrait remains on About and in sharing metadata. Navigation, contact, and the resume download stay accessible without repeated contact banners. No new runtime dependencies or environment variables are needed. Contact uses direct email and the existing Calendly booking link.

## Routes

- `/`: current work, approach, and earlier career highlights
- `/about`: background and current roles
- `/approach`: product judgment, technical ownership, and AI-agent-orchestrated delivery
- `/resume`: current and previous experience, plus PDF download
- `/results`: retained historical case studies with expandable detail
- `/contact`: email, social profiles, and scheduling
- `/clients`: retained collaboration examples
- `/services`: working-together context, preserving the existing URL
- `/legal/privacy`: existing privacy policy

Deployment remains on the repository’s existing Vercel setup. The redesign does not change hosting configuration.
