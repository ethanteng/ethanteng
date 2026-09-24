import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { WorkShowcase } from "@/components/work-showcase";
import { ContactBand } from "@/components/contact-band";
import { BUILD_PRINCIPLES, CAREER, CURRENT_WORK } from "@/lib/experience";

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
              And the systems
              <br />
              <em>behind them.</em>
            </h1>
            <p className="hero-copy">
              I’m Ethan. I’m building <strong>Ask Linc</strong>, an AI-powered
              personal finance product, and leading engineering at{" "}
              <strong>Navi Nurses</strong>—from the first product decision to
              the systems running in production.
            </p>
            <div className="link-row">
              <Link href="#work" className="action-link">
                Explore my work <ArrowDown aria-hidden="true" />
              </Link>
              <Link href="/about" className="text-link">
                A little about me <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-image">
              <Image
                src="/Ethan.JPG"
                alt="Ethan Teng"
                fill
                priority
                sizes="(max-width: 700px) 400px, (max-width: 1200px) 32vw, 350px"
              />
            </div>
            <figcaption>
              <strong>Ethan Teng</strong>
              <span>Product. Engineering. Ownership.</span>
            </figcaption>
          </figure>
        </div>
        <div className="current-strip">
          <p className="eyebrow subtle">Currently building</p>
          {CURRENT_WORK.map((work) => (
            <Link key={work.id} href={`#${work.id}`}>
              <div>
                <strong>{work.company}</strong>
                <span>{work.role}</span>
              </div>
              <ArrowDown aria-hidden="true" />
            </Link>
          ))}
        </div>
      </section>
      <WorkShowcase />
      <section
        className="wrap approach-section"
        aria-labelledby="approach-heading"
      >
        <div className="section-heading">
          <h2 id="approach-heading">
            Close to the product. Accountable for the outcome.
          </h2>
          <p className="eyebrow">02 / How I work</p>
        </div>
        <div className="principle-grid">
          {BUILD_PRINCIPLES.map((item, index) => (
            <article key={item.title} className="principle">
              <span className="principle-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="career-section" aria-labelledby="career-heading">
        <div className="wrap">
          <div className="section-heading">
            <h2 id="career-heading">
              Built on product &amp; growth experience.
            </h2>
            <p className="eyebrow">03 / Before this</p>
          </div>
          <p className="career-intro">
            Before building these products, I worked on the decisions that turn
            software into a business: onboarding, pricing, payments, and growth.
          </p>
          <div className="career-grid">
            {CAREER.map((job) => (
              <article key={job.company} className="career-item">
                <h3>{job.company}</h3>
                <p className="career-role">{job.role}</p>
                <strong className="career-result">{job.result}</strong>
                <p>{job.resultLabel}</p>
              </article>
            ))}
          </div>
          <div className="link-row">
            <Link href="/results" className="text-link">
              The work behind the numbers <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/resume" className="text-link">
              View resume <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
