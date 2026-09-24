import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ConsultingNav } from "@/components/consulting-nav";
import { PriceCard } from "@/components/price-card";
import { ADHOC, ADDONS, OFFERS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Consulting — Services & Pricing",
  description:
    "Ethan Teng Consulting LLC: product, engineering, and growth consulting. $3,000 audits, $10,000/month build-outs, fractional leadership, and $250/hour advice.",
};

const areas = [
  {
    title: "Product & engineering",
    text: "Turn a problem into a working product. Connect product decisions, APIs, web and mobile apps, infrastructure, and delivery.",
  },
  {
    title: "Onboarding & growth",
    text: "Help people reach value sooner. Improve onboarding, pricing, lifecycle campaigns, and the path from signup to paying customer.",
  },
  {
    title: "Analytics & leadership",
    text: "Understand where growth breaks down. Build useful measurement, prioritize experiments, and give your team a clear plan.",
  },
];
const steps = [
  {
    title: "Understand the problem",
    text: "We look at your product, team, and goals, then identify the work that matters most.",
  },
  {
    title: "Agree on the scope",
    text: "We choose an engagement, define deliverables, and agree on the fee and timeline before starting.",
  },
  {
    title: "Build and measure",
    text: "I work hands-on with your team, share progress, and use the results to decide what comes next.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro label={SITE.company} title="Product, engineering, and growth.">
        Work directly with me to solve a specific problem, build the systems
        behind growth, or add experienced leadership to your team.
      </PageIntro>
      <ConsultingNav current="/services" />
      <section
        className="wrap content-section"
        aria-labelledby="services-heading"
      >
        <div className="section-heading">
          <h2 id="services-heading">Where I can help</h2>
        </div>
        <div className="service-areas">
          {areas.map((area) => (
            <article key={area.title} data-reveal>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section
        id="pricing"
        className="pricing-section"
        aria-labelledby="pricing-heading"
      >
        <div className="wrap">
          <div className="section-heading">
            <h2 id="pricing-heading">Services &amp; pricing</h2>
          </div>
          <p className="section-description">
            Three ways to work together on product-led growth.
          </p>
          <div className="pricing-grid">
            {OFFERS.map((offer) => (
              <PriceCard key={offer.id} {...offer} />
            ))}
          </div>
          <div className="additional-services">
            <article data-reveal>
              <h3>Ad-hoc consulting</h3>
              <p className="additional-price">{ADHOC.rate}</p>
              <p>{ADHOC.note}.</p>
            </article>
            <article data-reveal>
              <h3>Product &amp; engineering projects</h3>
              <p className="additional-price">Custom scope</p>
              <p>
                Product planning, full-stack development, and technical
                leadership. We’ll agree on the scope and fee before starting.
              </p>
            </article>
          </div>
          <div className="addons" data-reveal>
            <h3>Add-ons</h3>
            <p>Scoped alongside an engagement:</p>
            <ul>
              {ADDONS.map((addon) => (
                <li key={addon}>{addon}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section
        className="wrap content-section"
        aria-labelledby="process-heading"
      >
        <div className="section-heading">
          <h2 id="process-heading">What working together looks like</h2>
        </div>
        <div className="service-areas process-steps">
          {steps.map((step, index) => (
            <article key={step.title} data-reveal>
              <span className="step-number" aria-hidden="true">
                0{index + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className="consulting-contact">
          <div>
            <h2>Tell me what you’re working on.</h2>
            <p>
              We’ll work out whether I can help and which engagement makes
              sense.
            </p>
          </div>
          <Link href="/contact" className="action-link">
            Discuss a project <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
