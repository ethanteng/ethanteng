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

const navigation = [
  { name: "Work", href: "/#work" },
  { name: "Consulting", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentState = (href: string) =>
    pathname === href
      ? "page"
      : href === "/services" &&
          ["/clients", "/results", "/approach"].includes(pathname)
        ? "true"
        : undefined;

  return (
    <header className="site-header">
      <nav className="wrap nav-inner" aria-label="Main navigation">
        <Link href="/" className="wordmark" aria-label="Ethan Teng — Home">
          <Image src="/icon.svg" alt="" width={25} height={25} />
          Ethan Teng
        </Link>
        <div className="desktop-nav">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={currentState(item.href)}
              className={item.name === "Contact" ? "nav-contact" : undefined}
            >
              {item.name}
              {item.name === "Contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </Link>
          ))}
        </div>
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
            <SheetTitle>Ethan Teng</SheetTitle>
            <SheetDescription>
              Ask Linc Founder &amp; Consultant
            </SheetDescription>
            <nav className="mobile-nav" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={currentState(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
