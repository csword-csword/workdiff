export default function Footer() {
  return (
    <footer className="bg-[var(--black)] text-white py-8 px-8 mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div>
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider mb-1">
              Work Different
            </h3>
            <p className="text-[var(--cream)] text-sm">
              GTM Advisory Services
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6 text-sm">
            <a href="/services/gtm-assessment" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
              GTM Assessment
            </a>
            <a href="/services/portfolio-companies" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
              Portfolio Services
            </a>
            <a href="/services/investors" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
              Investor Services
            </a>
            <a href="/successes" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
              Successes
            </a>
            <a href="/blog" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
              Blog
            </a>
            <a href="/careers" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
              Careers
            </a>
            <a href="/about" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
              About
            </a>
          </nav>

          {/* Contact Button */}
          <a
            href="mailto:charles@workdifferent.services"
            className="inline-block bg-[var(--accent-blue)] text-white font-[var(--font-bebas)] text-lg tracking-wider uppercase px-6 py-3 border-2 border-white hover:bg-[var(--accent-yellow)] hover:text-[var(--black)] hover:border-[var(--black)] transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="border-t border-[var(--slate)] pt-4 text-center text-[var(--cream)] text-xs">
          <p>&copy; {new Date().getFullYear()} Work Different. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
