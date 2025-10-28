import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CLIENT_PORTFOLIO } from "@/lib/site";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Client Portfolio",
  description:
    "Showcasing successful partnerships across healthcare, analytics, fintech, and enterprise software.",
};

export default function ClientsPage() {
  return (
    <>
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-white/20 text-white border-white/40">
            Client Portfolio
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Trusted by innovative companies
          </h1>
          <p className="text-lg text-gray-100">
            Partnering with innovative teams to build products that scale.
          </p>
        </div>
      </Section>

      {/* Client Showcase */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLIENT_PORTFOLIO.map((client, idx) => (
              <Card
                key={client.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Client Screenshot */}
                  <div className="relative w-full h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
                    <Image
                      src={client.image}
                      alt={`${client.name} screenshot`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Client Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-2xl font-bold">{client.name}</h3>
                      <Badge
                        variant="outline"
                        className="shrink-0 ml-2 text-xs"
                      >
                        {client.industry}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {client.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2 mb-4">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Key Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {client.features.map((feature, fIdx) => (
                          <span
                            key={fIdx}
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {client.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-xs px-2.5 py-1 rounded bg-muted text-muted-foreground font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to build something great together?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
            Let's discuss how I can help bring your product vision to life.
          </p>
          <Button asChild size="lg" className="h-12 text-base sm:h-14 sm:text-lg">
            <Link href="/contact">Start a conversation</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}

