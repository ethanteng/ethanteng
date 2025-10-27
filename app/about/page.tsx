import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ethan",
  description:
    "Founder @ Ask Linc; PLG product leader with hands-on track record across onboarding, pricing, lifecycle, analytics, and automation. Prior: meez, Postman, Braintree/PayPal.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero with Photo */}
      <Section className="pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src="/Ethan.jpg"
                  alt="Ethan Teng"
                  fill
                  className="rounded-2xl object-cover shadow-xl"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 md:order-2">
              <Badge className="mb-4">About</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Hi, I'm Ethan
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a PLG product leader with a hands-on track record building 
                  self-serve revenue engines from $0 to $100M+.
                </p>
                <p>
                  Currently founding <span className="font-semibold text-foreground">Ask Linc</span>, 
                  building AI tools to help product teams move faster. Previously: VP Growth at meez 
                  ($0→$1M+ self-serve ARR), Growth Data Science at Postman ($100M+ milestone), 
                  Product Analytics at Braintree/PayPal, and roles at Recurly and wikiHow.
                </p>
                <p>
                  When I'm not building growth systems, you'll find me skiing, playing 
                  tennis, or exploring SF with my wife and dog.
                </p>
                <p className="text-base text-muted-foreground/80">
                  BS in Management Science & Engineering, Stanford University
                </p>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-wrap items-center gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Let's talk <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>{SITE.email}</span>
                </a>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What I Do */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What I do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Build self-serve revenue engines
                </h3>
                <p className="text-muted-foreground text-sm">
                  Design onboarding flows, activation funnels, and lifecycle campaigns 
                  that turn signups into paying customers without sales calls.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Instrument for growth
                </h3>
                <p className="text-muted-foreground text-sm">
                  Set up product analytics, behavioral segmentation, and dashboards 
                  that surface opportunities and measure what matters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Optimize conversion funnels
                </h3>
                <p className="text-muted-foreground text-sm">
                  Run tight experiment loops to identify friction, test hypotheses, 
                  and improve activation, retention, and monetization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-3 text-primary">
                  Scale what works
                </h3>
                <p className="text-muted-foreground text-sm">
                  Build repeatable systems and processes that compound over time—not 
                  one-off campaigns that need constant attention.
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
            Ready to accelerate your growth?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free 30-minute call to discuss your biggest growth challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Book a consult</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

