"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Approach", href: "/approach" },
  { name: "Results", href: "/results" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black shadow-lg hover:shadow-xl transition-shadow p-2">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 10 L85 50 L50 90 L15 50 Z"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  d="M50 25 L72.5 50 L50 75 L27.5 50 Z"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  d="M50 35 L62.5 50 L50 65 L37.5 50 Z"
                  stroke="white"
                  strokeWidth="3"
                />
                <line
                  x1="50"
                  y1="10"
                  x2="50"
                  y2="25"
                  stroke="white"
                  strokeWidth="2.5"
                  opacity="0.7"
                />
                <line
                  x1="50"
                  y1="75"
                  x2="50"
                  y2="90"
                  stroke="white"
                  strokeWidth="2.5"
                  opacity="0.7"
                />
              </svg>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold leading-tight">Ethan Teng</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Consulting</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-4">
              <Link href="/contact">Book a consult</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[400px] pt-6 px-6">
              <Link href="/" className="flex items-center space-x-3 mb-10 mt-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black shadow-lg p-2">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50 10 L85 50 L50 90 L15 50 Z"
                      stroke="white"
                      strokeWidth="3"
                    />
                    <path
                      d="M50 25 L72.5 50 L50 75 L27.5 50 Z"
                      stroke="white"
                      strokeWidth="3"
                    />
                    <path
                      d="M50 35 L62.5 50 L50 65 L37.5 50 Z"
                      stroke="white"
                      strokeWidth="3"
                    />
                    <line
                      x1="50"
                      y1="10"
                      x2="50"
                      y2="25"
                      stroke="white"
                      strokeWidth="2.5"
                      opacity="0.7"
                    />
                    <line
                      x1="50"
                      y1="75"
                      x2="50"
                      y2="90"
                      stroke="white"
                      strokeWidth="2.5"
                      opacity="0.7"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold leading-tight">Ethan Teng</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Consulting</div>
                </div>
              </Link>
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                      pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-6 h-12 text-base" size="lg">
                  <Link href="/contact">Book a consult</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

