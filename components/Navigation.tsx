"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <header className="masthead">
      <Link href="/" className="brand">
        Work Different
      </Link>
      <div className="tagline">GTM Advisory Services</div>
    </header>
  );
}
