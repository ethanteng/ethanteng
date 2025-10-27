import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Download, Briefcase, GraduationCap, Sparkles, User } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume - Ethan Teng",
  description:
    "Professional resume of Ethan Teng - Growth Product Leader | B2B SaaS Optimizer | Self-Serve Funnel Architect",
};

export default function ResumePage() {
  return (
    <>
      <Section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardContent className="p-0">
              {/* Header */}
              <div className="p-6 sm:p-8 md:p-10 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 text-white border-b border-white/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                      Ethan Teng
                    </h1>
                    <div className="space-y-2 text-sm sm:text-base text-white/90">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-white/80" />
                        <a href="tel:415-867-6937" className="hover:text-white transition-colors">
                          415-867-6937
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-white/80" />
                        <a href="mailto:ethanteng@gmail.com" className="hover:text-white transition-colors break-all">
                          ethan@ethanteng.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-white/80" />
                        <a href="https://ethanteng.com" className="hover:text-white transition-colors">
                          ethanteng.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden ring-4 ring-white/30 shrink-0 shadow-2xl">
                    <Image
                      src="/Ethan.JPG"
                      alt="Ethan Teng"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Download PDF Button */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <Button asChild variant="secondary" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/30">
                    <a href="/api/generate-resume" target="_blank">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF Version
                    </a>
                  </Button>
                </div>
              </div>

              {/* Profile */}
              <div className="p-6 sm:p-8 md:p-10 border-b border-border/50 bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <User className="h-5 w-5 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Profile</h2>
                </div>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-3">
                  Growth Product Leader | B2B SaaS Optimizer | Self-Serve Funnel Architect
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Built a $1M+ PLG engine solo at meez. Helped scale Postman's global self-serve to $100M+ ARR. 
                  Led PayPal's top GTM initiative at Braintree. Fluent in SQL, experiments, and systems that scale.
                </p>
              </div>

              {/* Work Experience */}
              <div className="p-6 sm:p-8 md:p-10 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Work Experience</h2>
                </div>

                <div className="space-y-8">
                  {/* Meez */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div className="mb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">VP, Growth & Self-Serve Revenue</h3>
                        <span className="text-sm text-muted-foreground shrink-0">03/2023 – 05/2025</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-primary mb-3">
                        Meez - Recipe & operations platform for professional kitchens
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                      <li>Built and scaled a <span className="font-semibold text-foreground">$1M+ self-serve revenue engine</span> from scratch, owning PLG strategy and execution end-to-end.</li>
                      <li>Designed and optimized the full funnel—from signup to monetization—via high-velocity experimentation.</li>
                      <li>Hit <span className="font-semibold text-foreground">50% activation and 30% PQL within 7 days</span>; cut time-to-value from 1 month to 1 day.</li>
                      <li>Led onboarding, pricing nudges, and product tour redesigns; converted <span className="font-semibold text-foreground">&gt;80% of high-intent users</span> to paid.</li>
                      <li>Created self-serve pricing via Van Westendorp model; $29/month solo tier boosted direct purchases by 20% and improved CAC payback.</li>
                      <li>Built GTM data foundation: PQL scoring, cohort tracking, behavioral segmentation—automated via SQL + Make.</li>
                      <li>Owned full PLG stack: Intercom, Navattic, Snowflake, Sigma, Zapier, Make; shipped all growth infra solo.</li>
                      <li>Reduced churn from 30% to <span className="font-semibold text-foreground">&lt;5% in target cohorts</span> with re-engagement + churn intervention flows.</li>
                    </ul>
                  </div>

                  {/* Postman */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div className="mb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">Senior Data Scientist, Growth (Product-led)</h3>
                        <span className="text-sm text-muted-foreground shrink-0">11/2021 – 02/2023</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-primary mb-3">
                        Postman - API platform with 25M+ developers worldwide
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                      <li>Scaled a global PLG motion to <span className="font-semibold text-foreground">$100M+ ARR across 180+ countries</span>—with zero-touch onboarding and automated conversion at scale.</li>
                      <li>Built Postman's first forecasting model for free-to-paid conversion; refined monthly to achieve <span className="font-semibold text-foreground">&lt;5% variance from actuals</span>.</li>
                      <li>Incorporated macroeconomic indicators into models to improve roadmap planning and scenario testing.</li>
                      <li>Co-led goal-setting and KPI design for Growth squads, ensuring targets were both ambitious and measurable.</li>
                      <li>Created dashboards and real-time reporting pipelines to track progress and inform squad-level prioritization.</li>
                      <li>Analyzed experiment results to quantify impact across onboarding, activation, and monetization initiatives.</li>
                      <li>Conducted behavioral and regression analyses to identify new PLG opportunities and shape upcoming tests.</li>
                      <li>Worked with lifecycle and email teams to trigger contextual nudges based on in-product behavior across millions of free users.</li>
                    </ul>
                  </div>

                  {/* Recurly */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div className="mb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">Head of Growth</h3>
                        <span className="text-sm text-muted-foreground shrink-0">05/2018 – 11/2020</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-primary mb-3">
                        Recurly - Subscription billing API powering global brands like Twitch & Paramount+
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                      <li>Led company-wide shift from Sales-led to PLG, contributing to <span className="font-semibold text-foreground">3X revenue growth</span> and Accel-KKR acquisition.</li>
                      <li>Built first Growth team; ran experiments across acquisition, onboarding, and monetization.</li>
                      <li><span className="font-semibold text-foreground">3X'd activation rate and increased ARPU 1.5X</span> through lifecycle optimization and pricing tests.</li>
                      <li>Introduced cohort-based growth modeling to guide GTM strategy.</li>
                    </ul>
                  </div>

                  {/* Braintree */}
                  <div className="relative pl-6 sm:pl-8 border-l-2 border-primary/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white"></div>
                    <div className="mb-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-2">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground">Director of Product</h3>
                        <span className="text-sm text-muted-foreground shrink-0">04/2016 – 11/2017</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-primary mb-3">
                        Braintree - PayPal's developer-first API for cards and ACH
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                      <li>Led <span className="font-semibold text-foreground">PayPal's #1 strategic initiative of 2016</span>: added ACH as Braintree's first bank payment method.</li>
                      <li>Defined product vision and GTM strategy via merchant interviews, sales feedback, and competitive analysis.</li>
                      <li>Operationalized execution across 15+ engineering and ops teams, aligning technical risk, compliance, and partner integration.</li>
                      <li>Forecasted TPV and set pricing to ensure <span className="font-semibold text-foreground">profitability within 6 months</span> of launch.</li>
                      <li>In 2017, led PayPal's top initiative to optimize global card routing for <span className="font-semibold text-foreground">1B+ transactions/quarter</span>.</li>
                      <li>Built and managed a team of PMs and data analysts to execute on routing and interchange optimization.</li>
                    </ul>
                  </div>

                  {/* Other Roles */}
                  <div className="relative pl-6 sm:pl-8">
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Other Growth & Product Leadership Roles</h3>
                    </div>
                    <ul className="space-y-2 text-sm sm:text-base text-muted-foreground list-disc list-outside ml-4">
                      <li><span className="font-semibold text-foreground">Daylight</span> (Head of Product & Growth) 2020-2021: Led consumer banking app launch for LGBTQ+ community (TechCrunch, NYT).</li>
                      <li><span className="font-semibold text-foreground">Zipongo</span> (Senior PM) 2015-2016: Scaled digital health platform for Fortune 500 employers.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="p-6 sm:p-8 md:p-10 border-t border-border/50 bg-gradient-to-br from-white to-gray-50">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Education</h2>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-md shrink-0 ring-2 ring-border/30">
                    <Image 
                      src="/stanford.jpg" 
                      alt="Stanford University" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold text-foreground">B.S. in Computer Science</p>
                    <p className="text-sm sm:text-base text-muted-foreground">Stanford University</p>
                    <p className="text-sm text-muted-foreground">Palo Alto, CA</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="p-6 sm:p-8 md:p-10 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">Growth Stack & Technical Skills</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Growth Strategy</h3>
                    <p className="text-sm text-muted-foreground">PLG funnels, retention loops, lifecycle modeling, Reforge alum (Advanced Growth Strategies)</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Analytics</h3>
                    <p className="text-sm text-muted-foreground">SQL (Snowflake, Sigma), Amplitude, GA4, Segment, Looker</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Lifecycle & CRM</h3>
                    <p className="text-sm text-muted-foreground">Intercom, Navattic, Hubspot</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Automation</h3>
                    <p className="text-sm text-muted-foreground">Make, Zapier</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Acquisition</h3>
                    <p className="text-sm text-muted-foreground">Google Ads, Meta Ads Manager, Ahrefs</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Experimentation</h3>
                    <p className="text-sm text-muted-foreground">VWO, LaunchDarkly</p>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">Collaboration</h3>
                    <p className="text-sm text-muted-foreground">Notion, Coda, Asana, Jira</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to About */}
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/about">← Back to About</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

