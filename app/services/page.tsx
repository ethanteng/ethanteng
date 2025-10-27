import type { Metadata } from "next";
import { Section } from "@/components/section";
import { PriceCard } from "@/components/price-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { OFFERS, ADDONS, ADHOC } from "@/lib/site";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Choose from Quick Wins Audit, Growth Engine Build-out, Fractional Head of Growth, and custom engagements. Transparent pricing for PLG growth consulting.",
};

const processSteps = [
  {
    title: "Discovery",
    description: "Understand your business, goals, and current state",
  },
  {
    title: "Diagnostics",
    description: "Analyze data, identify gaps, and prioritize opportunities",
  },
  {
    title: "Design",
    description: "Create detailed plans and implementation roadmaps",
  },
  {
    title: "Ship",
    description: "Build and launch with your team, hands-on",
  },
  {
    title: "Measure",
    description: "Track results, iterate, and optimize continuously",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Services & Pricing</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Growth services designed for early-stage SaaS
          </h1>
          <p className="text-lg text-muted-foreground">
            Transparent pricing, clear deliverables, and hands-on execution.
            Choose the engagement that fits your stage and needs.
          </p>
        </div>
      </Section>

      {/* Core Offers */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Offers</h2>
          <p className="text-muted-foreground">
            Three proven engagement models for different stages
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {OFFERS.map((offer, index) => (
            <PriceCard key={offer.id} {...offer} featured={index === 1} />
          ))}
        </div>
      </Section>

      {/* Equity-Based */}
      <Section className="bg-muted/30">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Equity-based engagements
                </h3>
                <Badge variant="outline" className="mb-4">
                  Limited availability
                </Badge>
              </div>
              <span className="text-2xl font-bold text-primary">Custom</span>
            </div>
            <p className="text-muted-foreground mb-4">
              I take on one equity client at a time, typically mirroring the
              Build-out or Fractional engagement structure. Requires strong
              founder fit and clear value exchange.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>June 2025 update:</strong> Not taking new equity clients
                at this time.
              </p>
            </div>
          </CardContent>
        </Card>
      </Section>

      {/* Add-ons */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Add-ons</h2>
          <p className="text-muted-foreground mb-8">
            Enhance any engagement with specialized services:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ADDONS.map((addon, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Ad-hoc */}
      <Section className="bg-muted/30">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Ad-hoc consulting</h3>
                <Badge variant="outline" className="mb-4">
                  Limited spots
                </Badge>
              </div>
              <span className="text-2xl font-bold text-primary">
                {ADHOC.rate}
              </span>
            </div>
            <p className="text-muted-foreground">{ADHOC.note}</p>
          </CardContent>
        </Card>
      </Section>

      {/* What to Expect */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            What to expect
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            A structured approach to delivering results
          </p>
          <Accordion type="single" collapsible className="w-full">
            {processSteps.map((step, index) => (
              <AccordionItem key={index} value={`step-${index}`}>
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {index + 1}
                    </div>
                    <span>{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-11">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to accelerate your growth?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's talk about your biggest growth blockers and which engagement
            makes sense for your stage.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">
              Book a consult <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

