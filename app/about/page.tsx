import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, ArrowRight, Rocket, BarChart3, Target, Layers } from "lucide-react";
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
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-700 via-slate-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <Badge className="mb-6 bg-white/20 text-white border-white/40 text-sm">About</Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Ethan Teng
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 max-w-3xl mx-auto leading-relaxed px-4">
              Building self-serve revenue engines from $0 to $100M+
            </p>
          </div>

          {/* Bio Card */}
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-0">
              {/* Profile Section */}
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-card via-card to-muted/20">
                {/* Profile Picture and Intro */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 pb-8 border-b border-border/50">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-4 ring-primary/20 shrink-0 shadow-lg">
                    <Image
                      src="/Ethan.JPG"
                      alt="Ethan Teng"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                      PLG product leader with a hands-on track record building 
                      self-serve revenue engines that scale across high-growth SaaS companies.
                    </p>
                  </div>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Current Work */}
                  <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/30 transition-colors">
                    <h3 className="text-xs sm:text-sm font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                      Current
                    </h3>
                    <p className="text-base sm:text-lg text-foreground leading-relaxed font-medium">
                      Founding <a href="https://www.asklinc.com/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-primary transition-colors underline decoration-primary/30 hover:decoration-primary">Ask Linc</a>, 
                      a privacy-first AI for your personal finances.
                    </p>
                  </div>

                  {/* Education */}
                  <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-border transition-colors">
                    <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                      Education
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shadow-sm shrink-0 ring-1 ring-border/30">
                        <Image 
                          src="/stanford.jpg" 
                          alt="Stanford University" 
                          fill 
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-foreground">
                          BS in Computer Science
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          Stanford University
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Previous Experience */}
                <div className="space-y-3">
                  <h3 className="text-xs sm:text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                    Previous Experience
                  </h3>
                  
                  {/* meez */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-white flex items-center justify-center shrink-0 border border-border/20">
                      <Image src="/meez.png" alt="meez" width={40} height={40} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-foreground mb-0.5">VP Growth & Self-Serve</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">meez • $0→$1M+ self-serve ARR</p>
                    </div>
                  </div>

                  {/* Postman */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-white flex items-center justify-center shrink-0 border border-border/20">
                      <Image src="/postman.jpg" alt="Postman" width={40} height={40} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-foreground mb-0.5">Growth Data Science</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Postman • $100M+ milestone</p>
                    </div>
                  </div>

                  {/* Recurly */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-white flex items-center justify-center shrink-0 border border-border/20">
                      <Image src="/recurly.svg" alt="Recurly" width={40} height={40} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-foreground mb-0.5">Head of Growth</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Recurly • 3X revenue growth</p>
                    </div>
                  </div>

                  {/* Braintree/PayPal */}
                  <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 border border-border/30 hover:bg-muted/50 transition-colors">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-white flex items-center justify-center shrink-0 border border-border/20">
                      <Image src="/braintree.svg" alt="Braintree/PayPal" width={40} height={40} className="w-8 h-8 object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-foreground mb-0.5">Director of Product</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Braintree/PayPal • ACH product launch</p>
                    </div>
                  </div>
                </div>

                {/* View Full Resume Link */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <Link href="/resume">
                      View Full Resume →
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="border-t border-border/50 bg-muted/20 p-6 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link href="/contact">
                      Let's talk <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="break-all sm:break-normal">{SITE.email}</span>
                  </a>
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What I Do */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">
            What I do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-sm shrink-0">
                    <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">
                      Build self-serve revenue engines
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Design onboarding flows, activation funnels, and lifecycle campaigns 
                      that turn signups into paying customers without sales calls.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-sm shrink-0">
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">
                      Instrument for growth
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Set up product analytics, behavioral segmentation, and dashboards 
                      that surface opportunities and measure what matters.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 shadow-sm shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">
                      Optimize conversion funnels
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Run tight experiment loops to identify friction, test hypotheses, 
                      and improve activation, retention, and monetization.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 shadow-sm shrink-0">
                    <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg mb-2 text-primary">
                      Scale what works
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Build repeatable systems and processes that compound over time—not 
                      one-off campaigns that need constant attention.
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
            Ready to accelerate your growth?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Book a free 30-minute call to discuss your biggest growth challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Book a consult</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link href="/services">View services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

