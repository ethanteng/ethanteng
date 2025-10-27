import type { Metadata } from "next";
import { Section } from "@/components/section";
import { MetricCard } from "@/components/metric-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CASE_STUDIES } from "@/lib/site";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "$0 → $1M+ self-serve ARR at meez, crossed $100M at Postman, launched ACH at Braintree/PayPal. Real metrics from real companies.",
};

export default function ResultsPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Results & Proof</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real metrics from real companies
          </h1>
          <p className="text-lg text-muted-foreground">
            Track record of building and scaling self-serve revenue across
            high-growth SaaS companies.
          </p>
        </div>
      </Section>

      {/* Case Studies */}
      {CASE_STUDIES.map((caseStudy, idx) => (
        <Section
          key={caseStudy.id}
          className={idx % 2 === 0 ? "bg-muted/30" : ""}
        >
          <div className="max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-3xl">{caseStudy.company}</CardTitle>
                    <p className="text-muted-foreground">{caseStudy.title}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {caseStudy.metrics.map((metric, mIdx) => (
                    <MetricCard
                      key={mIdx}
                      label={metric.label}
                      value={metric.value}
                      context={metric.context}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Section>
      ))}

      {/* What Repeats */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What repeats across every success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">Start with the data</h3>
                <p className="text-muted-foreground">
                  Every engagement begins with deep diagnosis—understanding where
                  users drop off, what drives activation, and where the biggest
                  opportunities lie.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">
                  Obsess over time-to-value
                </h3>
                <p className="text-muted-foreground">
                  The faster users reach their first win, the higher your
                  activation and retention. Every flow is designed to collapse
                  time-to-value.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">
                  Personalize by intent
                </h3>
                <p className="text-muted-foreground">
                  Different users have different goals. Segment by role, company
                  size, and use case to deliver relevant experiences that convert.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-3">
                  Build systems, not hacks
                </h3>
                <p className="text-muted-foreground">
                  One-off campaigns don't scale. The wins come from instrumented
                  tracking, repeatable processes, and tight experiment loops.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Context Section */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Full context
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">meez (VP Growth & Self-Serve)</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Context</h4>
                  <p className="text-muted-foreground">
                    Early-stage recipe software company with product-market fit but
                    no self-serve motion. High-touch sales only, long time-to-value,
                    unclear activation metrics.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Constraints</h4>
                  <p className="text-muted-foreground">
                    Lean team, limited engineering resources, complex product
                    requiring significant user setup and content migration.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Actions</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Instrumented full-funnel tracking from signup to activation to revenue</li>
                    <li>Designed and shipped personalized onboarding flows based on user role</li>
                    <li>Built behavioral segmentation to identify and route PQLs to sales</li>
                    <li>Created lifecycle email campaigns in Intercom tied to product events</li>
                    <li>Reduced time-to-value from 30+ days to under 1 day through workflow redesign</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results</h4>
                  <p className="text-muted-foreground">
                    Built self-serve revenue from $0 to $1M+ ARR in under 2 years.
                    50% activation rate and 30% PQL rate within 7 days. Churn reduced
                    to under 5% in key cohorts.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-4">
                Postman (Growth Data Science)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Context</h4>
                  <p className="text-muted-foreground">
                    Scaling PLG motion from tens of millions to $100M+ self-serve
                    ARR. Needed sophisticated forecasting, experimentation, and
                    analytics to support hypergrowth.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Actions</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Built free-to-paid conversion forecasts with &lt;5% variance</li>
                    <li>Designed experimentation framework for growth team</li>
                    <li>Instrumented behavioral funnels across millions of users</li>
                    <li>Created dashboards tracking activation, engagement, and revenue</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results</h4>
                  <p className="text-muted-foreground">
                    Supported +50% PLG revenue growth year-over-year and helped cross
                    $100M self-serve ARR milestone.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-4">
                Braintree/PayPal (Product Analytics)
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Context</h4>
                  <p className="text-muted-foreground">
                    Launching ACH payment product to access $43 trillion domestic
                    payments market. Needed analytics strategy to track adoption and
                    inform go-to-market.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Actions</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Designed instrumentation strategy for new product line</li>
                    <li>Built dashboards tracking merchant adoption and transaction volume</li>
                    <li>Supported GTM with data-driven insights</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Results</h4>
                  <p className="text-muted-foreground">
                    Successful product launch into massive addressable market with
                    robust tracking and reporting infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create similar results?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's talk about your growth challenges and how these approaches can
            apply to your business.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

