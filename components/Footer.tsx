export default function Footer() {
  return (
    <footer className="bg-[var(--black)] text-white py-12 px-8 mt-16">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-[var(--font-bebas)] text-3xl tracking-wider text-white mb-2">
              Work Different
            </h3>
            <p className="text-white text-base">
              GTM Advisory Services
            </p>
          </div>

          {/* Contact Button */}
          <a
            href="mailto:charles@workdifferent.services"
            className="inline-block bg-[var(--accent-blue)] text-white font-[var(--font-bebas)] text-xl tracking-wider uppercase px-8 py-4 border-2 border-white hover:bg-[var(--accent-yellow)] hover:text-[var(--black)] hover:border-[var(--black)] transition-all"
          >
            Contact Us
          </a>
        </div>

        <div className="border-t border-white pt-6 text-center text-white text-sm">
          <p>&copy; {new Date().getFullYear()} Work Different. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
