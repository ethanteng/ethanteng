import type { Metadata } from "next";
import { ContactContent } from "@/components/contact-content";

export const metadata: Metadata = {
  title: "Contact — Consulting",
  description:
    "Discuss a product, engineering, or growth engagement with Ethan Teng Consulting LLC.",
};

export default function ConsultingContactPage() {
  return <ContactContent consulting />;
}
