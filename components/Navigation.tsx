"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <header className="masthead">
      <Link href="/" className="brand">
        Work Different
      </Link>
      <nav className="nav-links">
        <Link href="/services" className={`nav-link ${pathname === "/services" ? "active" : ""}`}>
          Services
        </Link>
        <Link href="/successes" className={`nav-link ${pathname === "/successes" ? "active" : ""}`}>
          Successes
        </Link>
        <Link href="/blog" className={`nav-link ${pathname === "/blog" ? "active" : ""}`}>
          Blog
        </Link>
        <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
          About
        </Link>
      </nav>
      <div className="tagline">GTM Advisory Services</div>
    </header>
  );
}
