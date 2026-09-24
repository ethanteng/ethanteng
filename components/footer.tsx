"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { getSiteMode } from "@/lib/site-mode";

export function Footer() {
  const mode = getSiteMode(usePathname());
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()}{" "}
          {mode === "consulting" ? SITE.company : SITE.name}
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href={SITE.social.linkedin}>LinkedIn</a>
          {mode === "personal" ? (
            <>
              <a href={SITE.social.github}>GitHub</a>
              <Link href="/resume">Resume</Link>
            </>
          ) : (
            <Link href="/approach">How I work</Link>
          )}
          <Link
            href={
              mode === "consulting" ? "/services/privacy" : "/legal/privacy"
            }
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
