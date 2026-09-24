import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WorkShowcase } from "@/components/work-showcase";
import { ConsultingOverview } from "@/components/consulting-overview";
import { CAREER } from "@/lib/experience";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Ethan Teng · Founder &amp; Consultant</p>
            <h1>
              Founder of Ask Linc.
              <br />
              <span>Hands-on consultant.</span>
            </h1>
          </div>
          <div className="hero-copy">
            <p>
              I built <strong>Ask Linc</strong> to make personal finance easier
              to understand. I also lead engineering at{" "}
              <strong>Navi Nurses</strong> and am building{" "}
              <strong>Uncloud</strong>, my first native App Store app.
            </p>
            <p>
              Through <strong>{SITE.company}</strong>, I help teams build
              products and improve growth.
            </p>
          </div>
        </div>
      </section>
      <WorkShowcase />
      <ConsultingOverview />
      <section className="career-section" aria-labelledby="career-heading">
        <div className="wrap">
          <div className="section-heading">
            <h2 id="career-heading">Experience behind the work</h2>
          </div>
          <p className="career-intro">
            Selected results from my previous roles. This is the product and
            growth experience I bring to client engagements.
          </p>
          <div className="career-grid">
            {CAREER.map((job, index) => (
              <article
                key={job.company}
                className="career-item"
                data-reveal
                data-reveal-delay={index}
              >
                <h3>{job.company}</h3>
                <p className="career-role">{job.role}</p>
                <strong className="career-result">{job.result}</strong>
                <p>{job.resultLabel}</p>
              </article>
            ))}
          </div>
          <Link href="/results" className="text-link career-link">
            Read the case studies <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
