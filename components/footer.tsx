import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} Ethan Teng</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href={SITE.social.linkedin}>LinkedIn</a>
          <a href={SITE.social.github}>GitHub</a>
          <Link href="/resume">Resume</Link>
          <Link href="/legal/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  );
}
