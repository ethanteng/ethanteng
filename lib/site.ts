export const SITE = {
  name: 'Ethan Teng Consulting',
  email: 'ethanteng@gmail.com',
  phone: '415-867-6937',
  social: { linkedin: 'https://www.linkedin.com/in/ethanteng' },
  cta: { primary: '/contact', secondary: '/services' }
};

export const OFFERS = [
  {
    id: 'audit',
    title: 'Quick Wins Audit',
    price: '$3,000',
    duration: '2 weeks',
    format: 'Async + 1 live session',
    bullets: [
      'Funnel review: acquisition → activation → retention',
      'Teardown of tours, onboarding, and in-app prompts',
      '60-minute strategy session with prioritized plan',
      'Written teardown + Loom walkthrough'
    ],
    ideal: 'Early self-serve teams needing direction'
  },
  {
    id: 'buildout',
    title: 'Growth Engine Build-out',
    price: '$10,000 / month',
    duration: '~20 hrs/week',
    bullets: [
      'Onboarding & activation design (email, in-app, tours)',
      'Behavioral tagging + lifecycle campaigns',
      'Product data instrumentation + dashboards',
      'Experimentation strategy + implementation',
      'Weekly check-ins + async collaboration'
    ],
    ideal: 'Lean PMF teams needing a hands-on operator'
  },
  {
    id: 'fractional',
    title: 'Fractional Head of Growth',
    price: 'Custom',
    bullets: [
      'Cross-functional planning (Product, Marketing, Execs)',
      'Team coaching & hiring support',
      'Board/investor updates & roadmap alignment'
    ],
    ideal: 'Post-Series A needing senior growth leadership'
  }
];

export const ADDONS = [
  'Navattic tour design + implementation',
  'Intercom setup or audit',
  'Snowflake/Sigma dashboard builds',
  'User segmentation & lifecycle logic',
  'Onboarding/help-center content'
];

export const ADHOC = { 
  rate: '$250/hour', 
  note: 'Tightly scoped projects, coaching, or second opinions' 
};

export const HIGHLIGHTS = [
  {
    metric: '$0 → $1M+',
    label: 'Self-serve ARR',
    context: 'Under 2 years'
  },
  {
    metric: '50%',
    label: 'Activation rate',
    context: 'Within 7 days'
  },
  {
    metric: '<1 day',
    label: 'Time-to-value',
    context: 'Down from 30 days'
  },
  {
    metric: '<5%',
    label: 'Churn rate',
    context: 'In key cohorts'
  },
  {
    metric: '$100M+',
    label: 'Self-serve ARR',
    context: 'Postman milestone'
  },
  {
    metric: '+50%',
    label: 'PLG revenue growth',
    context: 'Year-over-year'
  }
];

export const WHAT_I_DO_BEST = [
  {
    title: 'Onboarding & activation that actually convert',
    description: 'Design experiences that guide users to value fast, with personalized flows based on intent and firmographics.'
  },
  {
    title: 'Find & fix funnel leaks fast',
    description: 'Diagnose drop-offs with behavioral data and cohort analysis, then implement targeted fixes that move metrics.'
  },
  {
    title: 'Build growth systems that scale',
    description: 'Instrument tracking, automate campaigns, and create repeatable experimentation loops that compound over time.'
  }
];

export const EXPERIENCE = [
  {
    company: 'meez',
    role: 'VP Growth & Self-Serve',
    highlight: '$0 → $1M+ self-serve ARR in <2 years'
  },
  {
    company: 'Postman',
    role: 'Growth Data Science',
    highlight: 'Crossed $100M self-serve ARR, +50% PLG revenue growth'
  },
  {
    company: 'Braintree/PayPal',
    role: 'Product Analytics',
    highlight: 'Launched ACH into $43T market'
  }
];

export const APPROACH_PRINCIPLES = [
  {
    title: 'Diagnose with data',
    description: 'Start with behavioral and cohort analysis to understand where value breaks down.'
  },
  {
    title: 'Design for time-to-value',
    description: 'Optimize for hours, not weeks. Every step should move users closer to their first win.'
  },
  {
    title: 'Personalize by intent',
    description: 'Route users through different onboarding flows based on their role, company, and goals.'
  },
  {
    title: 'Route high-intent to sales',
    description: 'Automatically identify and fast-track qualified leads to your sales team.'
  },
  {
    title: 'Instrument everything',
    description: 'Build robust tracking and dashboards so you can measure what matters and iterate quickly.'
  },
  {
    title: 'Build once, scale everywhere',
    description: 'Create systems that work across channels and tools, not one-off hacks.'
  }
];

export const CASE_STUDIES = [
  {
    id: 'meez',
    company: 'meez',
    title: '$0 → $1M+ Self-Serve ARR',
    metrics: [
      { label: 'Self-serve ARR', value: '$1M+', context: 'in under 2 years' },
      { label: 'Activation rate', value: '50%', context: 'within 7 days' },
      { label: 'PQL rate', value: '30%', context: 'within 7 days' },
      { label: 'Time-to-value', value: '<1 day', context: 'down from 30 days' },
      { label: 'Churn', value: '<5%', context: 'in key cohorts (from 30%)' }
    ]
  },
  {
    id: 'postman',
    company: 'Postman',
    title: 'Crossed $100M Self-Serve ARR',
    metrics: [
      { label: 'Self-serve ARR', value: '$100M+', context: 'milestone achieved' },
      { label: 'PLG revenue growth', value: '+50%', context: 'year-over-year' },
      { label: 'Forecast accuracy', value: '<5%', context: 'variance on free-to-paid' }
    ]
  },
  {
    id: 'braintree',
    company: 'Braintree/PayPal',
    title: 'Launched ACH Product',
    metrics: [
      { label: 'Market access', value: '$43T', context: 'total addressable market' }
    ]
  }
];

export const ABOUT = {
  bio: `Founder @ Ask Linc; PLG product leader with hands-on track record across onboarding, pricing, lifecycle, analytics, and automation. Prior: meez (VP Growth & Self-Serve), Postman (Growth Data Science, >$100M ARR), Braintree/PayPal (Product Analytics, ACH launch), Recurly, wikiHow. BS Stanford.`,
  bestAt: [
    'Designing onboarding flows that convert signups into activated users',
    'Building behavioral segmentation and lifecycle campaigns',
    'Instrumenting product analytics and growth dashboards',
    'Running tight experiment loops to optimize conversion funnels',
    'Translating product usage into revenue forecasts',
    'Setting up marketing automation and CRM workflows'
  ],
  ifYoureTryingTo: [
    '✅ Turn free signups into paying customers',
    '✅ Cut time-to-value from weeks to days',
    '✅ Build a self-serve motion that scales',
    '✅ Fix a leaky activation or retention funnel',
    '✅ Instrument your product for growth',
    '✅ Hire or coach a growth team'
  ]
};

