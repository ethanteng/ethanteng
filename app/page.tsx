import { WorkShowcase } from "@/components/work-showcase";
import { BUILD_PRINCIPLES, CAREER } from "@/lib/experience";

export default function HomePage() {
  return (
    <>
      <section className="wrap hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">Founder &amp; Engineering Lead</p>
            <h1>
              I build products.
              <br />
              <span>I own the outcome.</span>
            </h1>
          </div>
          <div>
            <p className="hero-copy">
              I’m Ethan. I’m building <strong>Uncloud</strong>, my first native
              App Store app, and <strong>Ask Linc</strong>, an AI-powered
              personal finance product. I also lead engineering at{" "}
              <strong>Navi Nurses</strong>, owning the full stack and production
              outcomes.
            </p>
          </div>
        </div>
      </section>
      <WorkShowcase />
      <section
        className="wrap approach-section"
        aria-labelledby="approach-heading"
      >
        <div className="section-heading">
          <h2 id="approach-heading">How I work</h2>
        </div>
        <div className="principle-grid">
          {BUILD_PRINCIPLES.map((item, index) => (
            <article
              key={item.title}
              className="principle"
              data-reveal
              data-reveal-delay={index}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="career-section" aria-labelledby="career-heading">
        <div className="wrap">
          <div className="section-heading">
            <h2 id="career-heading">Product &amp; growth experience</h2>
          </div>
          <p className="career-intro">
            Before building these products, I worked on the decisions that turn
            software into a business: onboarding, pricing, payments, and growth.
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
