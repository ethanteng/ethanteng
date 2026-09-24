import { WorkShowcase } from "@/components/work-showcase";
import { CAREER } from "@/lib/experience";

export default function HomePage() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              Ethan Teng · Founder &amp; Engineering Lead
            </p>
            <h1>
              Founder of
              <br />
              <span>Ask Linc.</span>
            </h1>
          </div>
          <div className="hero-copy">
            <p>
              I’m Ethan. I built <strong>Ask Linc</strong>, an AI-powered
              personal finance product, to help people understand their money
              and explore the decisions ahead.
            </p>
            <p>
              I also lead engineering at <strong>Navi Nurses</strong> and am
              building <strong>Uncloud</strong>, my first native App Store app.
            </p>
          </div>
        </div>
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
