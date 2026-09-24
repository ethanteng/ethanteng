import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ContactBand } from "@/components/contact-band";
import { CLIENT_PORTFOLIO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Selected collaborations",
  description:
    "Selected collaborations across healthcare, analytics, financial technology, and enterprise software.",
};

export default function ClientsPage() {
  return (
    <>
      <PageIntro
        label="Selected collaborations"
        title="A range of products and teams."
      >
        Work across healthcare, analytics, financial technology, and enterprise
        software.
      </PageIntro>
      <section
        className="wrap content-section consulting-grid"
        aria-label="Selected collaborations"
      >
        {CLIENT_PORTFOLIO.map((client) => (
          <article className="consulting-card" key={client.id}>
            <div className="consulting-image">
              <Image
                src={client.image}
                alt={`${client.name} website`}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
              />
            </div>
            <div className="consulting-copy">
              <span className="eyebrow subtle">{client.industry}</span>
              <h2 className="mt-2">{client.name}</h2>
              <p>{client.description}</p>
              {client.id === "navinurses" && (
                <Link className="text-link mt-3" href="/#navi-nurses">
                  My role at Navi Nurses <ArrowRight aria-hidden="true" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
