import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ContactBand() {
  return (
    <section className="wrap contact-band" aria-labelledby="contact-heading">
      <div>
        <span className="eyebrow subtle">Start a conversation</span>
        <h2 id="contact-heading">Have something in mind?</h2>
        <p>
          For conversations about products, engineering, or working together.
        </p>
      </div>
      <Link href="/contact" className="action-link">
        Get in touch <ArrowUpRight aria-hidden="true" />
      </Link>
    </section>
  );
}
