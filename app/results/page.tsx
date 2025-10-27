import type { Metadata } from "next";
import { Section } from "@/components/section";
import { MetricCard } from "@/components/metric-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CASE_STUDIES } from "@/lib/site";
import { Building2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const metadata: Metadata = {
  title: "Results & Case Studies",
  description:
    "$0 → $1M+ self-serve ARR at meez, crossed $100M at Postman, launched ACH at Braintree/PayPal. Real metrics from real companies.",
};

export default function ResultsPage() {
  return (
    <>
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-700 via-slate-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-white/20 text-white border-white/40">Results & Proof</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Real metrics from real companies
          </h1>
          <p className="text-lg text-gray-100">
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
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl">{caseStudy.company}</CardTitle>
                      <p className="text-muted-foreground">{caseStudy.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {caseStudy.role}
                      </p>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="shrink-0">
                        View full story <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {caseStudy.company} ({caseStudy.role})
                        </DialogTitle>
                        <DialogDescription className="text-lg">
                          {caseStudy.title}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6 pt-4">
                        <div>
                          <h4 className="font-semibold text-base mb-2">Context</h4>
                          <p className="text-muted-foreground text-sm">
                            {caseStudy.fullContext.context}
                          </p>
                        </div>
                        {caseStudy.fullContext.constraints && (
                          <div>
                            <h4 className="font-semibold text-base mb-2">Constraints</h4>
                            <p className="text-muted-foreground text-sm">
                              {caseStudy.fullContext.constraints}
                            </p>
                          </div>
                        )}
                        <div>
                          <h4 className="font-semibold text-base mb-2">Actions</h4>
                          <ul className="list-disc list-inside space-y-2 text-muted-foreground text-sm">
                            {caseStudy.fullContext.actions.map((action, i) => (
                              <li key={i}>{action}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-base mb-2">Results</h4>
                          <p className="text-muted-foreground text-sm">
                            {caseStudy.fullContext.results}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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

