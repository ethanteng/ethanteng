import Link from "next/link";

const pages = [
  { href: "/services", label: "Services & pricing" },
  { href: "/results", label: "Case studies" },
  { href: "/clients", label: "Collaborations" },
  { href: "/approach", label: "How I work" },
];

export function ConsultingNav({ current }: { current: string }) {
  return (
    <div className="consulting-nav-border">
      <nav className="wrap consulting-nav" aria-label="Consulting navigation">
        {pages.map((page) => (
          <Link
            key={page.href}
            href={page.href}
            aria-current={current === page.href ? "page" : undefined}
          >
            {page.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
