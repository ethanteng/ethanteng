import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { SITE, ABOUT } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Ethan",
  description:
    "Founder @ Ask Linc; PLG product leader with hands-on track record across onboarding, pricing, lifecycle, analytics, and automation. Prior: meez, Postman, Braintree/PayPal.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">About</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Hi, I'm Ethan
          </h1>
          <p className="text-lg text-muted-foreground">
            I help early-stage SaaS companies build self-serve revenue engines
            that scale.
          </p>
        </div>
      </Section>

      {/* Bio */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {ABOUT.bio}
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* What I'm Best At */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            What I'm best at
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ABOUT.bestAt.map((skill, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* If You're Trying To */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            I can help if you're trying to...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT.ifYoureTryingTo.map((item, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-lg font-medium">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Info */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Get in touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {SITE.email}
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <a
                  href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {SITE.phone}
                </a>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a
                  href={SITE.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Connect
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a free 30-minute call to discuss your growth challenges.
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

