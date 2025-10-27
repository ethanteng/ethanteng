import type { Metadata } from "next";
import { Section } from "@/components/section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Ethan Teng Consulting.",
};

export default function PrivacyPage() {
  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <h2>Overview</h2>
        <p>
          {SITE.name} ("we", "us", or "our") respects your privacy. This policy
          describes how we collect, use, and protect your personal information.
        </p>

        <h2>Information We Collect</h2>
        <p>When you contact us through our website, we collect:</p>
        <ul>
          <li>Name and email address</li>
          <li>Company name and stage</li>
          <li>Information you provide about your growth challenges</li>
          <li>Any other information you choose to share</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>We use your information solely to:</p>
        <ul>
          <li>Respond to your inquiries</li>
          <li>Provide consulting services</li>
          <li>Send relevant follow-up communications</li>
        </ul>

        <h2>Data Sharing</h2>
        <p>
          We do not sell, trade, or share your personal information with third
          parties, except as required by law.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement reasonable security measures to protect your information.
          However, no method of transmission over the internet is 100% secure.
        </p>

        <h2>Analytics</h2>
        <p>
          We use Vercel Analytics to understand website traffic. This service
          collects anonymized usage data to help us improve the site experience.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt out of communications at any time</li>
        </ul>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us at{" "}
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </div>
    </Section>
  );
}

