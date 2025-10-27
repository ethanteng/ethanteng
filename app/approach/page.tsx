import type { Metadata } from "next";
import { Section } from "@/components/section";
import { FeatureCard } from "@/components/feature-card";
import { Badge } from "@/components/ui/badge";
import { APPROACH_PRINCIPLES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "My operator's playbook for PLG growth: diagnose with data, design for time-to-value, personalize by intent, and build systems that scale.",
};

export default function ApproachPage() {
  return (
    <>
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-white/20 text-white border-white/40">Approach</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The operator's playbook
          </h1>
          <p className="text-lg text-gray-100">
            A systematic approach to building self-serve revenue, refined across
            Postman, meez, and dozens of consulting engagements.
          </p>
        </div>
      </Section>

      {/* Principles */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Six core principles
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The foundation of every engagement, adapted to your unique context
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {APPROACH_PRINCIPLES.map((principle, index) => (
            <FeatureCard
              key={index}
              title={principle.title}
              description={principle.description}
            />
          ))}
        </div>
      </Section>

      {/* Experience Context */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Built from real experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">At meez</h3>
              <p className="text-muted-foreground">
                Built the entire self-serve motion from $0 to $1M+ ARR. Designed
                onboarding flows that activated 50% of users in 7 days, cut
                time-to-value from 30 days to under 1 day, and reduced churn to
                under 5% in key cohorts. Created behavioral segmentation that
                routed 30% of signups to sales as product-qualified leads.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">At Postman</h3>
              <p className="text-muted-foreground">
                Scaled PLG revenue operations to cross $100M self-serve ARR.
                Built forecasting models with &lt;5% variance, instrumented
                free-to-paid funnels across millions of users, and created
                experimentation frameworks that drove +50% PLG revenue growth.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold mb-2">At Braintree/PayPal</h3>
              <p className="text-muted-foreground">
                Led analytics for ACH product launch into a $43 trillion market.
                Designed instrumentation strategy, tracked adoption metrics, and
                supported go-to-market with data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            How we'll work together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Start with diagnosis</h3>
              <p className="text-sm text-muted-foreground">
                I'll dig into your data, talk to your team, and identify the
                highest-leverage opportunities. No cookie-cutter playbooks—every
                business is different.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Design with intent</h3>
              <p className="text-sm text-muted-foreground">
                Whether it's onboarding flows, lifecycle campaigns, or
                dashboards, everything is designed to shorten time-to-value and
                increase conversion.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Build hands-on</h3>
              <p className="text-sm text-muted-foreground">
                I don't just advise—I ship. Whether it's setting up Intercom
                campaigns, building Segment flows, or creating Sigma dashboards,
                I'm in the tools with you.
              </p>
            </div>
            <div className="bg-muted/30 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-3">Measure and iterate</h3>
              <p className="text-sm text-muted-foreground">
                We'll set clear success metrics, track them rigorously, and run
                tight experiment loops to continuously improve results.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's put this playbook to work for you
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Every engagement starts with understanding your unique challenges and
            opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
            >
              Book a consult
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8"
            >
              View services
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

