export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 md:px-16 animate-[fadeIn_0.8s_ease-out]">
      <div className="max-w-4xl w-full">
        {/* Decorative line */}
        <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

        {/* Main content */}
        <div className="animate-[slideUp_0.8s_ease-out_0.2s_both]">
          <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl lg:text-9xl font-black leading-none text-[var(--black)] mb-8 tracking-tight">
            Coming <span className="text-[var(--accent-red)] italic">Soon</span>
          </h1>

          <div className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] p-8 md:p-12 mb-8">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />

            <h2 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-wider mb-6 text-[var(--black)] uppercase leading-none">
              Work Different
            </h2>

            <p className="text-lg md:text-xl text-[var(--charcoal)] leading-relaxed mb-6">
              Go-to-Market advisory services for investors and portfolio companies.
            </p>

            <div className="space-y-4 text-base md:text-lg text-[var(--charcoal)]">
              <p className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--accent-red)] before:font-semibold">
                <strong>Investors:</strong> Comprehensive GTM due diligence services
              </p>
              <p className="pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-[var(--accent-blue)] before:font-semibold">
                <strong>Portfolio Companies:</strong> Embedded operator expertise for early stage B2B technology
              </p>
            </div>
          </div>

          <div className="bg-[var(--black)] text-[var(--cream)] p-6 md:p-8 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
            <p className="text-sm md:text-base tracking-wide mb-4">
              Our new website is launching soon.
            </p>
            <p className="text-sm text-[var(--accent-yellow)] tracking-wide">
              For inquiries, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
