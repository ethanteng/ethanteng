import Link from "next/link";
import { SITE } from "@/lib/site";
import { BrandLinks } from "@/components/brand-icons";

// One footer for both the personal and consulting views.
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/resume">Resume</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <BrandLinks
            links={SITE.social}
            owner={SITE.name}
            className="footer-social"
          />
        </nav>
      </div>
    </footer>
  );
}
