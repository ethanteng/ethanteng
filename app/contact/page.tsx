import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ethan Teng about Ask Linc or product, engineering, and growth engagements through Ethan Teng Consulting LLC.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Get in touch"
        title="Let’s talk about what you’re building."
      >
        For consulting through {SITE.company}, or a question about Ask Linc and
        my other work, send me a note.
      </PageIntro>
      <section className="wrap content-section contact-grid">
        <div>
          <a className="contact-email" href={`mailto:${SITE.email}`}>
            {SITE.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p>
            Tell me what you’re working on, where you’re stuck, and your
            timeline. If you have an engagement in mind, include that too.
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
