import type { Metadata } from "next";
import { Section } from "@/components/section";
import { MetricCard } from "@/components/metric-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CASE_STUDIES } from "@/lib/site";
import { Building2, ExternalLink, BarChart3, Zap, Users, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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

// Map case study IDs to their logo assets
const companyLogos: Record<string, { src: string; alt: string }> = {
  meez: { src: "/meez.png", alt: "meez logo" },
  postman: { src: "/postman.jpg", alt: "Postman logo" },
  recurly: { src: "/recurly.svg", alt: "Recurly logo" },
  braintree: { src: "/braintree.svg", alt: "Braintree logo" },
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
                <div className="flex flex-col gap-4 mb-2">
                  {/* Logo and Title - Better mobile stacking */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      {companyLogos[caseStudy.id] ? (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-white flex items-center justify-center overflow-hidden shrink-0">
                          <Image
                            src={companyLogos[caseStudy.id].src}
                            alt={companyLogos[caseStudy.id].alt}
                            width={96}
                            height={96}
                            className="object-contain w-full h-full p-2"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Building2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-2xl sm:text-2xl md:text-3xl break-words">
                          {caseStudy.company}
                        </CardTitle>
                        <p className="text-sm sm:text-base text-muted-foreground break-words">
                          {caseStudy.title}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">
                          {caseStudy.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* View Full Story Button - Full width on mobile */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto sm:self-start">
                        View full story <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-[95vw] sm:max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-xl sm:text-2xl">
                          {caseStudy.company} ({caseStudy.role})
                        </DialogTitle>
                        <DialogDescription className="text-base sm:text-lg">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center px-4">
            What repeats across every success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm shrink-0">
                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Start with the data</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Every engagement begins with deep diagnosis—understanding where
                      users drop off, what drives activation, and where the biggest
                      opportunities lie.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-sm shrink-0">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                      Obsess over time-to-value
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      The faster users reach their first win, the higher your
                      activation and retention. Every flow is designed to collapse
                      time-to-value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-sm shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                      Personalize by intent
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Different users have different goals. Segment by role, company
                      size, and use case to deliver relevant experiences that convert.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-sm shrink-0">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">
                      Build systems, not hacks
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      One-off campaigns don't scale. The wins come from instrumented
                      tracking, repeatable processes, and tight experiment loops.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to create similar results?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Let's talk about your growth challenges and how these approaches can
            apply to your business.
          </p>
          <Button asChild size="lg" className="h-12 text-base sm:h-14 sm:text-lg">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

