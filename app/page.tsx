import Image from "next/image";
import { WorkShowcase } from "@/components/work-showcase";
import { CAREER } from "@/lib/experience";

export default function HomePage() {
  return (
    <>
      <section className="wrap hero" aria-labelledby="hero-heading">
        <p className="eyebrow">Ethan Teng</p>
        <h1 id="hero-heading">
          Founder of <span>Ask Linc.</span>
        </h1>
        <p className="hero-tagline">AI-powered personal finance.</p>
        <Image
          src="/ethan-illustration.png"
          alt="Illustrated portrait of Ethan Teng"
          width={1086}
          height={1448}
          sizes="(max-width: 700px) 64px, (max-width: 1100px) 144px, 176px"
          className="hero-portrait"
          priority
        />
      </section>
      <WorkShowcase />
      <section className="career-section" aria-labelledby="career-heading">
        <div className="wrap">
          <div className="section-heading">
            <h2 id="career-heading">Experience behind the work</h2>
          </div>
          <p className="career-intro">
            Before building these products, I worked on onboarding, pricing,
            payments, and growth. That experience still shapes how I build.
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
        </div>
      </section>
    </>
  );
}
