export default function Blog() {
  return (
    <main className="container mx-auto px-4 md:px-16 py-16">
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 animate-[expandLine_1s_ease-out_both]" />

      <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
        Insights & <span className="text-[var(--accent-yellow)] italic">Analysis</span>
      </h1>

      <p className="text-lg text-[var(--charcoal)] leading-relaxed mb-12 max-w-4xl">
        Expert perspectives on go-to-market strategy, sales, marketing, and customer success.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Article 1 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-red)]" />

          <div className="p-6">
            <a href="/blog/early-stage-gtm-peril" className="block group">
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-4 group-hover:text-[var(--accent-red)] transition-colors">
                The $2M-$10M Peril: Why Most Startups Fail to Scale GTM
              </h2>
            </a>

            <p className="text-[var(--charcoal)] leading-relaxed mb-6 text-sm">
              Most startup failures aren't technology failures. They're go-to-market failures. And they almost always happen in the same place: the race from $2M to $10M in ARR...
            </p>

            <a href="/blog/early-stage-gtm-peril" className="text-[var(--accent-red)] font-semibold text-sm hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />

          <div className="p-6">
            <a href="/blog/scale-readiness-matrix" className="block group">
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-4 group-hover:text-[var(--accent-yellow)] transition-colors">
                The Scale Readiness Matrix: Why Most Companies Invest in Growth at Exactly the Wrong Time
              </h2>
            </a>

            <p className="text-[var(--charcoal)] leading-relaxed mb-6 text-sm">
              Most early-stage companies fail to scale not because they lack ambition, capital, or talent. They fail because they don't understand where they actually are in their journey...
            </p>

            <a href="/blog/scale-readiness-matrix" className="text-[var(--accent-yellow)] font-semibold text-sm hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />

          <div className="p-6">
            <a href="/blog/ai-coding-tools-distribution" className="block group">
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-4 group-hover:text-[var(--accent-blue)] transition-colors">
                The AI Agent Is The New Buyer
              </h2>
            </a>

            <p className="text-[var(--charcoal)] leading-relaxed mb-6 text-sm">
              The fastest-growing distribution channel in B2B technology isn't a marketplace, a sales team, or a partner program. It's an AI coding agent...
            </p>

            <a href="/blog/ai-coding-tools-distribution" className="text-[var(--accent-blue)] font-semibold text-sm hover:underline">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
