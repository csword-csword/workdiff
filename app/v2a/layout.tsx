import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./v2a.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Work Different – GTM Advisory Services",
  description:
    "Go-to-Market Advisory services for investors and portfolio companies.",
};

export default function V2aLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} v2a-root`}>
      <V2aNav />
      {children}
      <V2aFooter />
    </div>
  );
}

function V2aNav() {
  return (
    <header className="v2a-nav">
      <div className="v2a-nav-inner">
        <a href="/" className="v2a-brand">
          <span className="v2a-brand-mark">▲</span>
          <span>Work Different</span>
        </a>
        <nav className="v2a-nav-links">
          <a href="/who-we-serve" className="v2a-nav-link">Who We Serve</a>
          <a href="/services" className="v2a-nav-link">Services</a>
          <a href="/blog" className="v2a-nav-link">Blog</a>
          <a href="/about" className="v2a-nav-link">About</a>
        </nav>
        <a href="mailto:charles@workdifferent.services" className="v2a-cta-btn">
          Contact
        </a>
      </div>
    </header>
  );
}

function V2aFooter() {
  return (
    <footer className="v2a-footer">
      <div className="v2a-footer-inner">
        <div className="v2a-footer-brand">
          <span className="v2a-brand-mark">▲</span>
          <span>Work Different</span>
        </div>
        <p className="v2a-footer-copy">
          © {new Date().getFullYear()} Work Different. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
