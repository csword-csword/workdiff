"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [showServicesMenu, setShowServicesMenu] = useState(false);

  return (
    <header className="masthead">
      <div className="brand-container">
        <Link href="/" className="brand">
          Work Different
        </Link>
        <div className="tagline">GTM Advisory Services</div>
      </div>
      <nav className="nav-links">
        <div
          className="nav-link-wrapper"
          onMouseEnter={() => setShowServicesMenu(true)}
          onMouseLeave={() => setShowServicesMenu(false)}
        >
          <span className={`nav-link ${pathname.startsWith("/services") ? "active" : ""}`}>
            Services
          </span>
          {showServicesMenu && (
            <div className="submenu">
              <Link href="/services/gtm-assessment" className="submenu-link">
                GTM Assessment
              </Link>
              <Link href="/services/ai-platform-deployment" className="submenu-link">
                AI-First Platform Deployment
              </Link>
              <Link href="/services/gtm-virtual-team" className="submenu-link">
                GTM Virtual Team
              </Link>
              <Link href="/services/portfolio-companies" className="submenu-link">
                Portfolio Services
              </Link>
              <Link href="/services/investors" className="submenu-link">
                Investor Services
              </Link>
            </div>
          )}
        </div>
        <Link href="/who-we-serve" className={`nav-link ${pathname === "/who-we-serve" ? "active" : ""}`}>
          Who We Serve
        </Link>
        <Link href="/blog" className={`nav-link ${pathname === "/blog" ? "active" : ""}`}>
          Blog
        </Link>
        <Link href="/careers" className={`nav-link ${pathname.startsWith("/careers") ? "active" : ""}`}>
          Careers
        </Link>
        <Link href="/about" className={`nav-link ${pathname === "/about" ? "active" : ""}`}>
          About
        </Link>
      </nav>
    </header>
  );
}
