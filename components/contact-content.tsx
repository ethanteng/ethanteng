import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ConsultingNav } from "@/components/consulting-nav";
import { SITE } from "@/lib/site";

export function ContactContent({
  consulting = false,
}: {
  consulting?: boolean;
}) {
  return (
    <>
      <PageIntro
        label={consulting ? SITE.company : "Get in touch"}
        title={
          consulting ? "Let’s talk about what you’re building." : "Say hello."
        }
      >
        {consulting
          ? "Tell me about your product, the problem you’re working through, and where you could use help."
          : "Have a question about Ask Linc, my work, or an idea you’d like to share? Send me a note."}
      </PageIntro>
      {consulting && <ConsultingNav current="/services/contact" />}
      <section className="wrap content-section contact-grid">
        <div>
          <a className="contact-email" href={`mailto:${SITE.email}`}>
            {SITE.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p>
            {consulting
              ? "A little context helps: your goals, your team, and your timeline. If you have an engagement in mind, include that too."
              : "I’m interested in the products people are building and the problems they’re trying to solve."}
          </p>
        </div>
        <div>
          <h2>Prefer a conversation?</h2>
          <p>Use my calendar to find a time for a 30-minute call.</p>
          <a href={SITE.calendly} className="action-link">
            Find a time <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
