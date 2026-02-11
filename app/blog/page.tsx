export default function Blog() {
  return (
    <main className="container mx-auto px-4 md:px-16 py-16">
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 animate-[expandLine_1s_ease-out_both]" />

      <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
        Insights & <span className="text-[var(--accent-yellow)] italic">Analysis</span>
      </h1>

      <div className="max-w-4xl">
        <p className="text-lg text-[var(--charcoal)] leading-relaxed mb-8">
          Expert perspectives on go-to-market strategy, sales, marketing, and customer success.
        </p>

        <div className="space-y-8">
          <a href="/blog/early-stage-gtm-peril" className="block group">
            <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] group-hover:shadow-[10px_10px_0_var(--black)] transition-all p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-red)]" />

              <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4 group-hover:text-[var(--accent-red)] transition-colors">
                The $2M-$10M Peril: Why Most Startups Fail to Scale GTM
              </h2>

              <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                Most startup failures aren't technology failures. They're go-to-market failures. And they almost always happen in the same place: the race from $2M to $10M in ARR. This is where the math stops working. Where overhead explodes. Where the bet you made on your GTM model either pays off spectacularly or destroys your runway...
              </p>

              <span className="text-[var(--accent-red)] font-semibold group-hover:underline">
                Read more →
              </span>
            </div>
          </a>

          <a href="/blog/scale-readiness-matrix" className="block group">
            <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] group-hover:shadow-[10px_10px_0_var(--black)] transition-all p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />

              <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4 group-hover:text-[var(--accent-yellow)] transition-colors">
                The Scale Readiness Matrix: Why Most Companies Invest in Growth at Exactly the Wrong Time
              </h2>

              <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                Most early-stage companies fail to scale not because they lack ambition, capital, or talent. They fail because they don't understand where they actually are in their journey — and what that means for how they should invest in growth. Before you hire that VP of Sales or ramp demand gen spend, you need to honestly assess two critical dimensions...
              </p>

              <span className="text-[var(--accent-yellow)] font-semibold group-hover:underline">
                Read more →
              </span>
            </div>
          </a>

          <a href="/blog/ai-coding-tools-distribution" className="block group">
            <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] group-hover:shadow-[10px_10px_0_var(--black)] transition-all p-8 relative">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />

              <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4 group-hover:text-[var(--accent-blue)] transition-colors">
                The AI Agent Is The New Buyer
              </h2>

              <p className="text-[var(--charcoal)] leading-relaxed mb-4">
                The fastest-growing distribution channel in B2B technology isn't a marketplace, a sales team, or a partner program. It's an AI coding agent. When founders open Cursor, Claude Code, or v0 and say "build me a SaaS app," the tools don't ask which database to use or where to deploy. They just pick...
              </p>

              <span className="text-[var(--accent-blue)] font-semibold group-hover:underline">
                Read more →
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
