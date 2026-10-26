import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ethan Teng about HelloPorch, his other projects, or an idea you’d like to share.",
};

export default function ContactPage() {
  return <ContactContent />;
}
