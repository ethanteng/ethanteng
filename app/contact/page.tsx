import type { Metadata } from "next";
import Script from "next/script";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Clock } from "lucide-react";
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-6">Other ways to connect</h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-3 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">Email</h3>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start space-x-3 group">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                      <Linkedin className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">LinkedIn</h3>
                      <a
                        href={SITE.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        Connect with me →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time Note */}
              <div className="pt-6 border-t">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <p className="text-sm">
                    I typically respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Calendly Embed */}
            <div className="lg:col-span-2">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/ethanteng-sf/plg?hide_event_type_details=1&hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px' }}
              />
              <Script 
                src="https://assets.calendly.com/assets/external/widget.js" 
                strategy="lazyOnload"
              />
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-xl font-bold text-white">1</span>
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-xl font-bold text-white">2</span>
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
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <span className="text-xl font-bold text-white">3</span>
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

