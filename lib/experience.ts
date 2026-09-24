// Current roles are undated until start dates are supplied. Prior dates and
// achievements are retained from the existing resume and case studies.
export const CURRENT_WORK = [
  {
    id: "ask-linc",
    company: "Ask Linc",
    role: "Founder",
    url: "https://asklinc.com",
    description:
      "An AI-powered personal finance product I built to help people understand their finances and make decisions with more context.",
    bullets: [
      "Own the product and engineering, from the initial idea to the working experience.",
      "Bring financial accounts, questions, and planning into one conversational product.",
      "Help people explore scenarios and understand the assumptions behind the numbers.",
    ],
  },
  {
    id: "navi-nurses",
    company: "Navi Nurses",
    role: "Engineering Lead / Founding Engineer",
    url: "https://navinurses.com",
    description:
      "I own the full technical stack and production outcomes for a healthcare staffing platform supporting the work of nurses and care teams.",
    bullets: [
      "Own .NET / XAF APIs, the React web application, React Native mobile applications, and chat.",
      "Run Azure infrastructure and CI/CD, with responsibility for releases and production reliability.",
      "Orchestrate AI agents across delivery, while retaining ownership of architecture, review, and production outcomes.",
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
