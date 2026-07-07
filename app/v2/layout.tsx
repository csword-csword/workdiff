import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./v2.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Work Different – GTM Advisory Services",
  description:
    "Go-to-Market Advisory services for investors and portfolio companies.",
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${inter.variable} v2-root`}>
      <V2Nav />
      {children}
      <V2Footer />
    </div>
  );
}

function V2Nav() {
  return (
    <header className="v2-nav">
      <div className="v2-nav-inner">
        <a href="/" className="v2-brand">
          <span className="v2-brand-mark">▲</span>
          <span>Work Different</span>
        </a>
        <nav className="v2-nav-links">
          <a href="/who-we-serve" className="v2-nav-link">Who We Serve</a>
          <a href="/services" className="v2-nav-link">Services</a>
          <a href="/blog" className="v2-nav-link">Blog</a>
          <a href="/about" className="v2-nav-link">About</a>
        </nav>
        <a href="mailto:charles@workdifferent.services" className="v2-cta-btn">
          Contact
        </a>
      </div>
    </header>
  );
}

function V2Footer() {
  return (
    <footer className="v2-footer">
      <div className="v2-footer-inner">
        <div className="v2-footer-brand">
          <span className="v2-brand-mark">▲</span>
          <span>Work Different</span>
        </div>
        <p className="v2-footer-copy">
          © {new Date().getFullYear()} Work Different. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
