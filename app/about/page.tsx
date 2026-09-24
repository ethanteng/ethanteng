import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { CURRENT_WORK, CAREER } from "@/lib/experience";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ethan Teng: founder of Ask Linc, Engineering Lead at Navi Nurses, creator of Uncloud, and the person behind Ethan Teng Consulting LLC.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro label="About me" title="A builder with a product background.">
        I connect the product decisions, the engineering work, and the business
        behind them.
      </PageIntro>
      <section className="wrap content-section about-grid">
        <div>
          <Image
            src="/ethan-illustration.png"
            alt="Illustrated portrait of Ethan Teng"
            width={1086}
            height={1448}
            sizes="(max-width: 700px) 384px, 350px"
            className="about-photo"
            priority
          />
          <div className="about-note">
            <strong>B.S. in Computer Science</strong>
            <span>Stanford University</span>
          </div>
        </div>
        <div className="about-copy">
          <h2>I like being close to the work.</h2>
          <p>
            I’m Ethan, founder of Ask Linc, an AI-powered personal finance
            product I built. I’m also the Engineering Lead / Founding Engineer
            at Navi Nurses, and I’m building Uncloud, a personal cloud and my
            first native App Store app.
          </p>
          <p>
            My work spans the full stack: product decisions, APIs, web and
            mobile applications, infrastructure, and production. I use AI agents
            as part of the delivery workflow and take responsibility for the
            result.
          </p>
          <p>
            I run {SITE.company}, working directly with founders and teams on
            product development, engineering, and growth. I bring the same
            hands-on approach to client work that I use in my own products.
          </p>
          <p>
            Earlier, I led product and growth work at meez, Postman, Recurly,
            and Braintree/PayPal. That experience still shapes how I build:
            understand what people need, make the path to value clearer, and
            measure whether the product is working.
          </p>
          <div className="link-row">
            <Link href="/services" className="text-link">
              Consulting services <ArrowRight aria-hidden="true" />
            </Link>
            <Link href="/results" className="text-link">
              Earlier work &amp; results <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className="about-note">
            <strong>Currently</strong>
            {CURRENT_WORK.map((work) => (
              <p key={work.id}>
                <strong>{work.company}</strong>
                <span>{work.role}</span>
              </p>
            ))}
          </div>
        </div>
      </section>
      <section className="career-section">
        <div className="wrap">
          <div className="section-heading">
            <h2>The experience I bring with me.</h2>
          </div>
          <div className="career-grid">
            {CAREER.map((job) => (
              <article className="career-item" key={job.company}>
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
