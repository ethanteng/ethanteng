import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ethan Teng about products, engineering, Ask Linc, or working together.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        label="Get in touch"
        title="Let’s talk about what you’re building."
      >
        Have a question about my work, a product idea, or a reason we should
        connect? Send me a note.
      </PageIntro>
      <section className="wrap content-section contact-grid">
        <div>
          <a className="contact-email" href={`mailto:${SITE.email}`}>
            {SITE.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p>
            A little context goes a long way: what you’re working on, where
            you’re stuck, and what you have in mind.
          </p>
          <div className="link-row">
            <a className="text-link" href={SITE.social.linkedin}>
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
            <a className="text-link" href={SITE.social.github}>
              GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h2>Prefer a conversation?</h2>
          <p>Use my calendar to find a time for a 30-minute call.</p>
          <a href={SITE.calendly} className="action-link">
            Find a time <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="mt-4">
            <Link className="text-link" href="/services">
              More about working together <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
