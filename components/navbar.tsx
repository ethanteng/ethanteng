"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getSiteMode, MODE_HOME, MODE_NAVIGATION } from "@/lib/site-mode";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const mode = getSiteMode(pathname);
  const consulting = mode === "consulting";
  const navigation = MODE_NAVIGATION[mode];

  return (
    <header className="site-header">
      <div className="wrap nav-inner">
        <Link
          href={MODE_HOME[mode]}
          className="wordmark"
          aria-label={`${consulting ? "Ethan Teng Consulting" : "Ethan Teng"} — Home`}
        >
          <Image src="/icon.svg" alt="" width={25} height={25} />
          Ethan Teng
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={item.name === "Contact" ? "nav-contact" : undefined}
            >
              {item.name}
              {item.name === "Contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mobile-trigger size-11"
              aria-label="Open navigation"
            >
              <Menu size={22} aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-7 pt-14">
            <SheetTitle>
              {consulting ? "Ethan Teng Consulting LLC" : "Ethan Teng"}
            </SheetTitle>
            <SheetDescription>
              {consulting
                ? "Product, engineering, and growth"
                : "Founder of Ask Linc"}
            </SheetDescription>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <nav className="mode-switch" aria-label="Site mode">
          <Link
            href={MODE_HOME.personal}
            aria-current={mode === "personal" ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            Personal
          </Link>
          <Link
            href={MODE_HOME.consulting}
            aria-current={consulting ? "true" : undefined}
            onClick={() => setOpen(false)}
          >
            Consulting
          </Link>
        </nav>
      </div>
    </header>
  );
}
