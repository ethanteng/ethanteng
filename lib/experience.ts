// Current roles are undated until start dates are supplied. Prior dates and
// achievements are retained from the existing resume and case studies.
// Product messaging checked against each official website on October 26, 2026.
// Contribution details retain the existing resume scope and supplied role titles.
export const CURRENT_WORK = [
  {
    id: "helloporch",
    company: "HelloPorch",
    role: "Founder / Builder",
    url: "https://helloporch.store",
    category: "Accessible communication",
    summary: "One-button video calling for staying close to family.",
    social: {
      github: "https://github.com/ethanteng/helloporch",
    },
    description:
      "A tablet and large-button keypad for people with dementia, Parkinson’s, or limited dexterity. Each button represents a loved one; one press starts a video call. Early units are in development, with a waitlist open.",
    contribution:
      "I’m the founder and builder, shaping the product and building the experience from the keypad to the family video call.",
    bullets: [
      "Founded HelloPorch to make family video calls simpler for people with dementia, Parkinson’s, or limited dexterity.",
      "Own product development across the tablet, large-button keypad, and family calling experience.",
    ],
  },
  {
    id: "ask-linc",
    company: "Ask Linc",
    role: "Founder / Builder",
    url: "https://asklinc.com",
    category: "Financial planning · AI",
    summary: "Ask a financial question. Explore the plan behind the answer.",
    social: {
      github: "https://github.com/ethanteng/finsight",
    },
    description:
      "AI financial planning that brings connected accounts and personal questions together. Linc runs the numbers, compares what-if scenarios, and shows the inputs, assumptions, calculations, and sources behind a plan.",
    contribution:
      "I founded and built Ask Linc, owning the product and engineering from account connections to the conversational planning experience.",
    bullets: [
      "Own product and engineering for a conversational financial planning product.",
      "Bring account data, scenario analysis, and explainable calculations into one experience.",
    ],
  },
  {
    id: "uncloud",
    company: "Uncloud",
    role: "Founder / Builder",
    url: "https://www.uncloud.life/",
    category: "Personal cloud · Early access",
    summary: "Cloud storage on a computer you already own.",
    social: {
      github: "https://github.com/ethanteng/homebase",
    },
    description:
      "A personal cloud for households that want to move files off subscription storage and onto their own hardware. Separate accounts, file migration, and remote access bring cloud convenience to storage they control. Available for early-access reservations.",
    contribution:
      "I founded Uncloud and build the product: ASP.NET Core, React/TypeScript, SQLite, and integrations for file migration, device sync, and remote access.",
    bullets: [
      "Own product and engineering for a household personal cloud on existing hardware.",
      "Build with ASP.NET Core, React/TypeScript, and SQLite, including separate accounts and file imports.",
      "Integrate Syncthing for device sync and an optional Tailscale-based tunnel for remote access.",
    ],
  },
  {
    id: "navi-nurses",
    company: "Navi Nurses",
    role: "Engineering Lead / Founding Engineer",
    url: "https://navinurses.com",
    category: "In-home nursing & caregiving",
    summary: "The technology supporting nurse-led care at home.",
    description:
      "Navi Nurses provides private duty nursing and caregiving at home in the Phoenix area. Its team builds care around each person, from post-surgery recovery and complex medical needs to everyday assistance.",
    contribution:
      "As Engineering Lead / Founding Engineer, I own the platform behind care delivery: APIs, web and mobile apps, chat, infrastructure, releases, and production reliability.",
    bullets: [
      "Own .NET / XAF APIs, React web, React Native mobile applications, and chat for the platform supporting care teams.",
      "Run Azure infrastructure and CI/CD, with responsibility for releases and production reliability.",
      "Orchestrate AI agents across delivery, retaining ownership of architecture, review, and production outcomes.",
    ],
  },
];

export const CAREER = [
  {
    company: "meez",
    role: "VP, Growth & Self-Serve Revenue",
    dates: "Mar 2023 – May 2025",
    result: "$0 → $1M+",
    resultLabel: "self-serve ARR in under two years",
    bullets: [
      "Built the self-serve revenue motion from scratch, owning strategy and execution.",
      "Reached 50% activation within seven days and reduced time-to-value from a month to a day.",
      "Owned onboarding, pricing, lifecycle campaigns, and the product analytics foundation.",
    ],
  },
  {
    company: "Postman",
    role: "Senior Data Scientist, Growth",
    dates: "Nov 2021 – Feb 2023",
    result: "$100M+",
    resultLabel: "self-serve ARR milestone supported",
    bullets: [
      "Helped the growth team scale the self-serve business past $100M ARR.",
      "Built free-to-paid forecasting with less than 5% variance from actuals.",
      "Used behavioral analysis, experiments, and reporting to guide product decisions.",
    ],
  },
  {
    company: "Recurly",
    role: "Head of Growth",
    dates: "May 2018 – Nov 2020",
    result: "3×",
    resultLabel: "activation rate improvement",
    bullets: [
      "Built the first Growth team and led the shift toward product-led growth.",
      "Tripled activation and increased average revenue per user 1.5× through lifecycle and pricing experiments.",
      "Introduced cohort-based growth modeling to guide go-to-market strategy.",
    ],
  },
  {
    company: "Braintree / PayPal",
    role: "Product leadership",
    dates: "Apr 2016 – Nov 2017",
    result: "ACH",
    resultLabel: "first bank payment method launched",
    bullets: [
      "Led the launch of ACH as Braintree’s first bank payment method.",
      "Coordinated product delivery across more than 15 engineering and operations teams.",
      "Led work on global card routing and managed product managers and data analysts.",
    ],
  },
];

export const EARLIER_ROLES = [
  {
    company: "Daylight",
    role: "Head of Product & Growth",
    dates: "2020–2021",
    description:
      "Led the launch of a consumer banking app for the LGBTQ+ community.",
  },
  {
    company: "Zipongo",
    role: "Senior Product Manager",
    dates: "2015–2016",
    description: "Scaled a digital health platform for Fortune 500 employers.",
  },
];

export const BUILD_PRINCIPLES = [
  {
    title: "Start with the problem.",
    description:
      "Get clear on what someone needs to do. Make product and architecture decisions around that, then build the smallest useful version.",
  },
  {
    title: "Own the whole system.",
    description:
      "The interface, APIs, infrastructure, and release process all shape the experience. My responsibility continues after the code ships.",
  },
  {
    title: "Direct the agents. Own the result.",
    description:
      "I use an AI-agent-orchestrated delivery workflow, with human judgment on architecture, review, verification, and what reaches production.",
  },
];
