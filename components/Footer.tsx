export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[var(--black)] text-white py-8 px-8 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div>
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-white mb-1">
              Work Different
            </h3>
            <p className="text-white text-sm">
              GTM Advisory Services
            </p>
          </div>

          {/* Contact Button */}
          <a
            href="mailto:charles@workdifferent.services"
            className="inline-block bg-[var(--accent-blue)] text-white font-[var(--font-bebas)] text-lg tracking-wider uppercase px-6 py-3 border-2 border-white hover:bg-[var(--accent-yellow)] hover:text-[var(--black)] hover:border-[var(--black)] transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="border-t border-white pt-4 text-center text-white text-xs">
          <p>&copy; {new Date().getFullYear()} Work Different. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
