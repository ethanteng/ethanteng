import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { ContactBand } from "@/components/contact-band";

export const metadata: Metadata = {
  title: "Working together",
  description:
    "Ethan Teng’s work across product building, engineering leadership, and product growth.",
};

const areas = [
  {
    title: "Building a product",
    text: "Turning a problem into a working product, with the product decisions and technical implementation connected from the start.",
    link: "/#ask-linc",
    label: "Ask Linc",
  },
  {
    title: "Owning the engineering",
    text: "Connecting APIs, web, mobile, and infrastructure, with responsibility for delivery and production outcomes.",
    link: "/#navi-nurses",
    label: "Navi Nurses",
  },
  {
    title: "Making the product work as a business",
    text: "Onboarding, pricing, lifecycle, and analytics, informed by hands-on growth experience at meez, Postman, and Recurly.",
    link: "/results",
    label: "Earlier work",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="Working together"
        title="Product thinking. Hands-on engineering."
      >
        My current focus is Ask Linc and Navi Nurses. If there’s a fit for
        something you’re building, tell me about it.
      </PageIntro>
      <section
        className="wrap content-section detail-list"
        aria-label="Areas of experience"
      >
        {areas.map((area) => (
          <article className="detail-row" key={area.title}>
            <h2>{area.title}</h2>
            <div>
              <p>{area.text}</p>
              <Link className="text-link mt-3" href={area.link}>
                {area.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <ContactBand />
    </>
  );
}
