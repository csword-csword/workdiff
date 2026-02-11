export default function Careers() {
  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 32px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
        Join Our <span className="text-[var(--accent-red)] italic">Team</span>
      </h1>

      <div className="max-w-3xl mb-12">
        <p className="text-lg text-[var(--charcoal)] leading-relaxed">
          We're building a GTM advisory practice that helps B2B technology companies work different. If you're passionate about go-to-market strategy, AI-powered growth, and solving complex challenges for early-stage companies, we'd love to hear from you.
        </p>
      </div>

      <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-8">
        Open Positions
      </h2>

      <div className="space-y-6">
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />

          <a href="/careers/demand-generation-specialist" className="no-underline group">
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3 group-hover:text-[var(--accent-blue)] transition-colors inline-block group-hover:underline">
              Demand Generation Specialist
            </h3>
          </a>

          <p className="text-[var(--charcoal)] mb-2">
            <strong>Team:</strong> GTM Advisory
          </p>
          <p className="text-[var(--charcoal)] mb-4">
            <strong>Type:</strong> Contract / Consulting
          </p>

          <p className="text-[var(--charcoal)] leading-relaxed mb-4">
            We're looking for a Demand Generation Specialist to join our GTM advisory practice. Work across multiple client engagements, helping B2B SaaS companies build, optimize, and scale their demand generation engines with the latest AI tools.
          </p>

          <a href="/careers/demand-generation-specialist" className="text-[var(--accent-blue)] font-semibold hover:underline no-underline">
            View position details →
          </a>
        </div>
      </div>
    </main>
  );
}
