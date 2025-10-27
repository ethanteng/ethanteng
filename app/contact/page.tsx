import type { Metadata } from "next";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your growth challenges. Book a free 30-minute consultation call.",
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-4">Contact</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let's talk growth
          </h1>
          <p className="text-lg text-muted-foreground">
            Book a free 30-minute call to discuss your growth challenges and
            explore how I can help.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="hover:border-blue-500/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-green-500/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a
                        href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-blue-600/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">LinkedIn</h3>
                      <a
                        href={SITE.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-purple-500/30 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response time</h3>
                      <p className="text-sm text-muted-foreground">
                        Within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      {/* What Happens Next */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What happens next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">I'll respond within 24 hours</h3>
                <p className="text-sm text-muted-foreground">
                  Usually much faster. I'll confirm receipt and suggest times to
                  connect.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">We'll have a 30-min call</h3>
                <p className="text-sm text-muted-foreground">
                  No sales pitch—just a conversation about your challenges and
                  whether I can help.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">I'll send a proposal</h3>
                <p className="text-sm text-muted-foreground">
                  If it's a fit, I'll outline scope, timeline, and pricing within
                  48 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

