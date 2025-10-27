"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/section";
import { MetricCard } from "@/components/metric-card";
import { FeatureCard } from "@/components/feature-card";
import { ExperienceCard } from "@/components/experience-card";
import { PriceCard } from "@/components/price-card";
import { ArrowRight, Zap, TrendingUp, Cog } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HIGHLIGHTS, WHAT_I_DO_BEST, EXPERIENCE, OFFERS } from "@/lib/site";

const credibilityChips = [
  "Onboarding & activation that converts",
  "Funnel diagnostics",
  "Growth systems that scale",
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-[#0B0F1A] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Turn traction into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                self-serve revenue
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            I help early-stage SaaS teams convert more signups, shorten
            time-to-value, and build a growth engine that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">
                Book a consult <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base bg-white/20 hover:bg-white/30 text-white border-white/40 backdrop-blur-sm">
              <Link href="/services">See services</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {credibilityChips.map((chip, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1.5 text-gray-400 border-none bg-transparent"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Proof Strip */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
          <p className="text-muted-foreground">
            Real metrics from real companies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS.map((highlight, index) => (
            <MetricCard
              key={index}
              label={highlight.label}
              value={highlight.metric}
              context={highlight.context}
            />
          ))}
        </div>
      </Section>

      {/* What I Do Best */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I do best
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Focused expertise in the areas that move the needle for PLG companies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title={WHAT_I_DO_BEST[0].title}
            description={WHAT_I_DO_BEST[0].description}
            icon={Zap}
          />
          <FeatureCard
            title={WHAT_I_DO_BEST[1].title}
            description={WHAT_I_DO_BEST[1].description}
            icon={TrendingUp}
          />
          <FeatureCard
            title={WHAT_I_DO_BEST[2].title}
            description={WHAT_I_DO_BEST[2].description}
            icon={Cog}
          />
        </div>
      </Section>

      {/* Featured Experience */}
      <Section className="bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Experience
          </h2>
          <p className="text-muted-foreground">
            Track record across high-growth SaaS companies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </Section>

      {/* Offer Preview */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How I can help
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the engagement model that fits your needs and stage
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OFFERS.map((offer, index) => (
            <PriceCard
              key={offer.id}
              {...offer}
              featured={index === 1}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
            <Link href="/services">
              View all services & pricing <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-b from-background to-[#0B0F1A] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's design a self-serve motion that prints revenue
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Book a free 30-minute call to discuss your growth challenges and
              explore how I can help.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">
                Get in touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
