import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ADHOC, OFFERS, SITE } from "@/lib/site";

export function ConsultingOverview() {
  return (
    <section
      id="consulting"
      className="consulting-section"
      aria-labelledby="consulting-heading"
    >
      <div className="wrap">
        <div className="consulting-intro" data-reveal>
          <div>
            <p className="eyebrow">{SITE.company}</p>
            <h2 id="consulting-heading">
              Hands-on help with product and growth.
            </h2>
          </div>
          <p className="consulting-description">
            I work directly with founders and teams on product development,
            technical delivery, onboarding, pricing, and growth. From a focused
            audit to ongoing leadership, I help you decide what to do and get it
            built.
          </p>
        </div>
        <div className="offer-preview-grid">
          {OFFERS.map((offer, index) => (
            <article
              className="offer-preview"
              key={offer.id}
              data-reveal
              data-reveal-delay={index}
            >
              <h3>{offer.title}</h3>
              <p className="offer-price">{offer.price}</p>
              <p>{offer.summary}</p>
            </article>
          ))}
        </div>
        <div className="consulting-bottom">
          <p>
            Focused advice and smaller projects: <strong>{ADHOC.rate}</strong>.
          </p>
          <Link className="text-link" href="/services">
            Services &amp; pricing <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
