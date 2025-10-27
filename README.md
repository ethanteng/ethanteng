# Ethan Teng Consulting

Professional consulting website for PLG growth and self-serve revenue consulting.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── (pages)/           # Route pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── lib/                  # Utility functions and data
│   ├── utils.ts          # Utility functions
│   └── site.ts           # Site constants and data
└── public/              # Static assets
```

## Key Features

- ✅ Fully responsive design
- ✅ SEO optimized with metadata and sitemap
- ✅ Accessible (WCAG compliant)
- ✅ Performance optimized
- ✅ Type-safe with TypeScript
- ✅ Animated UI with Framer Motion
- ✅ Contact form with API integration
- ✅ Security headers via middleware
- ✅ Analytics with Vercel Analytics

## Pages

- `/` - Home page with hero, metrics, and offers
- `/services` - Services and pricing
- `/approach` - Methodology and principles
- `/results` - Case studies and results
- `/about` - About Ethan
- `/contact` - Contact form
- `/legal/privacy` - Privacy policy

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Deployment

This site is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ethanteng/ethanteng)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Environment Variables

No environment variables are required for basic functionality. To add email notifications to the contact form, you'll need to:

1. Choose an email service (SendGrid, Resend, etc.)
2. Add API keys to `.env.local`
3. Update `app/api/contact/route.ts`

## Customization

### Update Site Data

Edit `lib/site.ts` to update:
- Contact information
- Service offerings
- Case study metrics
- Approach principles

### Update Colors

Edit `app/globals.css` to customize the color scheme using CSS variables.

### Add Content

Add new pages in the `app` directory following Next.js App Router conventions.

## License

© 2025 Ethan Teng Consulting. All rights reserved.

## Contact

- Email: ethan@ethanteng.com
- Phone: 415-867-6937
- LinkedIn: [linkedin.com/in/ethanteng](https://www.linkedin.com/in/ethanteng)
