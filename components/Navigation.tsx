"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="masthead">
      <Link href="/" className="brand">
        Work Different
      </Link>
      <nav className="nav-links">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? "active" : ""}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="tagline">GTM Advisory Services</div>
    </header>
  );
}
