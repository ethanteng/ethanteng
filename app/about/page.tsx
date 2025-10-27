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
      <Section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          {/* Header with Photo */}
          <div className="flex items-center gap-6 mb-12">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/10 shrink-0">
              <Image
                src="/Ethan.jpg"
                alt="Ethan Teng"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <Badge className="mb-3" variant="secondary">About</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm Ethan
              </h1>
            </div>
          </div>

          {/* Bio Card */}
          <Card className="mb-8 border-0 shadow-sm bg-gradient-to-br from-card via-card to-muted/20">
            <CardContent className="p-8 md:p-10">
              <div className="space-y-6">
                <div>
                  <p className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed mb-6">
                    Building self-serve revenue engines from $0 to $100M+
                  </p>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>

                <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm a PLG product leader with a hands-on track record building 
                    self-serve revenue engines that scale.
                  </p>
                  <p>
                    Currently founding <span className="font-semibold text-foreground">Ask Linc</span>, 
                    building AI tools to help product teams move faster.
                  </p>
                  <p>
                    Previously: VP Growth at meez ($0→$1M+ self-serve ARR), Growth Data Science 
                    at Postman ($100M+ milestone), and Product roles at Braintree/PayPal, Recurly, and wikiHow.
                  </p>

                  {/* Company Logos */}
                  <div className="flex flex-wrap items-center gap-6 pt-2 pb-4">
                    <Image src="/meez.svg" alt="meez" width={70} height={28} className="h-7 w-auto" />
                    <Image src="/postman.svg" alt="Postman" width={100} height={28} className="h-7 w-auto" />
                    <Image src="/braintree.svg" alt="Braintree" width={100} height={28} className="h-7 w-auto" />
                    <Image src="/recurly.svg" alt="Recurly" width={80} height={28} className="h-7 w-auto" />
                  </div>

                  {/* Stanford Education - Highlighted */}
                  <div className="pt-4 border-t border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14 rounded-lg overflow-hidden shadow-sm shrink-0 ring-1 ring-border/50">
                        <Image 
                          src="/stanford.jpg" 
                          alt="Stanford University" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-foreground">
                          BS in Computer Science
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Stanford University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/contact">
                Let's talk <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="flex items-center gap-4 pl-2">
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">{SITE.email}</span>
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="p-2 rounded-lg bg-muted/50 group-hover:bg-muted transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </a>
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

