import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ContactBand } from "@/components/contact-band";
import { BUILD_PRINCIPLES } from "@/lib/experience";

export const metadata: Metadata = {
  title: "How I work",
  description:
    "Product judgment, full-stack ownership, and an AI-agent-orchestrated delivery workflow with responsibility for production outcomes.",
};

export default function ApproachPage() {
  return (
    <>
      <PageIntro
        label="How I work"
        title="From product judgment to production."
      >
        I stay close to the problem, the code, and the people who depend on it.
      </PageIntro>
      <section
        className="wrap content-section detail-list"
        aria-label="Working principles"
      >
        {BUILD_PRINCIPLES.map((item, index) => (
          <article key={item.title} className="detail-row">
            <div>
              <p className="eyebrow">0{index + 1} / Principle</p>
              <h2>{item.title}</h2>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
      <section className="career-section">
        <div className="wrap about-grid">
          <div>
            <p className="eyebrow subtle">In practice / Navi Nurses</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight">
              A connected delivery workflow.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              At Navi Nurses, changes can touch .NET / XAF APIs, React web,
              React Native mobile, chat, and Azure infrastructure. I own the
              connections between those systems as well as the release process.
            </p>
            <p>
              I orchestrate AI agents across delivery. I remain responsible for
              architecture, reviewing the work, checking that it behaves as
              intended, and the outcome in production.
            </p>
            <p>
              That ownership includes CI/CD and the ongoing work of keeping the
              platform running for the people using it.
            </p>
            <div className="link-row">
              <Link className="text-link" href="/#navi-nurses">
                See the scope at Navi Nurses <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
