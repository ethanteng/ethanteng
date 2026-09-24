import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { CURRENT_WORK, CAREER, EARLIER_ROLES } from "@/lib/experience";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Ethan Teng’s work on Uncloud, experience as Founder of Ask Linc and Engineering Lead / Founding Engineer at Navi Nurses, and product and growth leadership.",
};

export default function ResumePage() {
  return (
    <>
      <PageIntro label="Resume" title="Ethan Teng">
        Founder &amp; Engineering Lead. Product and growth experience, with
        hands-on ownership from architecture to production.
      </PageIntro>
      <div className="wrap content-section max-w-4xl">
        <div className="resume-heading">
          <div>
            <a className="text-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <p className="subtle text-sm">{SITE.phone} · ethanteng.com</p>
          </div>
          <a
            className="action-link no-print"
            href="/api/generate-resume"
            download="Ethan_Teng_Resume.pdf"
          >
            Download resume <Download aria-hidden="true" />
          </a>
        </div>
        <section className="mt-10" aria-labelledby="current-heading">
          <h2 id="current-heading" className="eyebrow subtle">
            Current work
          </h2>
          {CURRENT_WORK.map((job) => (
            <article className="resume-block" key={job.id}>
              <h3>{job.company}</h3>
              <p className="role">{job.role}</p>
              <p className="dates">Current</p>
              <p className="subtle">{job.description}</p>
              <ul className="resume-list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section className="mt-12" aria-labelledby="previous-heading">
          <h2 id="previous-heading" className="eyebrow subtle">
            Previous experience
          </h2>
          {CAREER.map((job) => (
            <article className="resume-block" key={job.company}>
              <h3>{job.company}</h3>
              <p className="role">{job.role}</p>
              <p className="dates">{job.dates}</p>
              <ul className="resume-list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
          {EARLIER_ROLES.map((job) => (
            <article className="resume-block" key={job.company}>
              <h3>{job.company}</h3>
              <p className="role">{job.role}</p>
              <p className="dates">{job.dates}</p>
              <p className="subtle">{job.description}</p>
            </article>
          ))}
        </section>
        <section className="resume-block">
          <h2 className="eyebrow subtle mb-4">Education</h2>
          <h3>Stanford University</h3>
          <p className="subtle">B.S. in Computer Science</p>
        </section>
        <section className="resume-block">
          <h2 className="eyebrow subtle mb-4">Technical &amp; product scope</h2>
          <p className="subtle">
            .NET / XAF APIs · React · React Native · Chat · Azure · CI/CD ·
            AI-agent-orchestrated delivery · SQL &amp; analytics · Product
            strategy · Onboarding &amp; pricing · Experimentation
          </p>
        </section>
      </div>
    </>
  );
}
