export default function Footer() {
  return (
    <footer className="bg-[var(--black)] text-white py-12 px-8 mt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider mb-3">
              Work Different
            </h3>
            <p className="text-[var(--cream)] text-sm">
              GTM Advisory Services
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/gtm-assessment" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
                  GTM Assessment
                </a>
              </li>
              <li>
                <a href="/services/portfolio-companies" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
                  Portfolio Companies
                </a>
              </li>
              <li>
                <a href="/services/investors" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
                  Investors
                </a>
              </li>
              <li>
                <a href="/blog" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-[var(--cream)] hover:text-[var(--accent-yellow)] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">Get In Touch</h4>
            <p className="text-[var(--cream)] text-sm mb-3">
              Ready to diagnose your GTM engine or discuss how we can help?
            </p>
            <a
              href="mailto:charles@workdifferent.services"
              className="inline-block bg-[var(--accent-blue)] text-white font-[var(--font-bebas)] text-lg tracking-wider uppercase px-6 py-3 border-2 border-white hover:bg-[var(--accent-yellow)] hover:text-[var(--black)] transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>

        <div className="border-t border-[var(--slate)] mt-8 pt-6 text-center text-[var(--cream)] text-sm">
          <p>&copy; {new Date().getFullYear()} Work Different. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
