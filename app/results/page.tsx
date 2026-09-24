import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ContactBand } from "@/components/contact-band";
import { CASE_STUDIES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Earlier work & results",
  description:
    "Selected product and growth work at meez, Postman, Recurly, and Braintree/PayPal. The experience behind Ethan Teng’s approach to building products.",
};

export default function ResultsPage() {
  return (
    <>
      <PageIntro label="Earlier work" title="The work behind the numbers.">
        Selected product and growth work from before Ask Linc and Navi Nurses.
        These experiences shape how I build today.
      </PageIntro>
      <section
        className="wrap content-section detail-list"
        aria-label="Career case studies"
      >
        {CASE_STUDIES.map((study) => (
          <article key={study.id} id={study.id} className="detail-row">
            <div>
              <p className="eyebrow">{study.company}</p>
              <h2>{study.title}</h2>
              <p className="mt-3">{study.role}</p>
            </div>
            <div>
              <p>{study.fullContext.context}</p>
              <div className="case-metrics">
                {study.metrics.map((metric) => (
                  <div className="case-metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <span>{metric.context}</span>
                  </div>
                ))}
              </div>
              <p>{study.fullContext.results}</p>
              <details className="case-details">
                <summary>Read the work &amp; context</summary>
                {study.fullContext.constraints && (
                  <>
                    <h3>Constraints</h3>
                    <p>{study.fullContext.constraints}</p>
                  </>
                )}
                <h3>What I did</h3>
                <ul>
                  {study.fullContext.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </details>
            </div>
          </article>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
