export default function Blog() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        Insights & Analysis
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        Expert perspectives on go-to-market strategy, sales, marketing, and customer success.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Article 1 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />

          <div style={{ padding: '2rem' }}>
            <a href="/blog/early-stage-gtm-peril" style={{ textDecoration: 'none' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-4 hover:text-[var(--accent-red)] transition-colors">
                The $2M-$10M Peril: Why Most Startups Fail to Scale GTM
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Most startup failures aren't technology failures. They're go-to-market failures. And they almost always happen in the same place: the race from $2M to $10M in ARR...
            </p>

            <a href="/blog/early-stage-gtm-peril" style={{ color: '#e63946', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />

          <div style={{ padding: '2rem' }}>
            <a href="/blog/scale-readiness-matrix" style={{ textDecoration: 'none' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-4 hover:text-[var(--accent-yellow)] transition-colors">
                The Scale Readiness Matrix: Why Most Companies Invest in Growth at Exactly the Wrong Time
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Most early-stage companies fail to scale not because they lack ambition, capital, or talent. They fail because they don't understand where they actually are in their journey...
            </p>

            <a href="/blog/scale-readiness-matrix" style={{ color: '#f4a261', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />

          <div style={{ padding: '2rem' }}>
            <a href="/blog/ai-coding-tools-distribution" style={{ textDecoration: 'none' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-4 hover:text-[var(--accent-blue)] transition-colors">
                The AI Agent Is The New Buyer
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              The fastest-growing distribution channel in B2B technology isn't a marketplace, a sales team, or a partner program. It's an AI coding agent...
            </p>

            <a href="/blog/ai-coding-tools-distribution" style={{ color: '#457b9d', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
