export type SiteMode = "personal" | "consulting";

export function getSiteMode(pathname: string): SiteMode {
  return pathname === "/services" ||
    pathname.startsWith("/services/") ||
    ["/results", "/clients", "/approach"].includes(pathname)
    ? "consulting"
    : "personal";
}

export const MODE_HOME = {
  personal: "/",
  consulting: "/services",
} as const;

export const MODE_NAVIGATION = {
  personal: [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  consulting: [
    { name: "Services", href: "/services" },
    { name: "Case studies", href: "/results" },
    { name: "Contact", href: "/services/contact" },
  ],
} as const;
