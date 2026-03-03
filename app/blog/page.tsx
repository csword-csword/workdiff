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
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />

          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <a href="/blog/early-stage-gtm-peril" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-red)] transition-colors" style={{ lineHeight: '1.2' }}>
                The $2M-$10M Peril
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              Why most startups fail to scale GTM—and they almost always fail in the same place: the race from $2M to $10M in ARR.
            </p>

            <a href="/blog/early-stage-gtm-peril" style={{ color: '#e63946', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 2 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />

          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <a href="/blog/scale-readiness-matrix" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-yellow)] transition-colors" style={{ lineHeight: '1.2' }}>
                The Scale Readiness Matrix
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              Why most companies invest in growth at exactly the wrong time—and how to know whether you should fix, build repeatability, or scale.
            </p>

            <a href="/blog/scale-readiness-matrix" style={{ color: '#f4a261', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 3 */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />

          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <a href="/blog/ai-coding-tools-distribution" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-blue)] transition-colors" style={{ lineHeight: '1.2' }}>
                The AI Agent Is The New Buyer
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              The fastest-growing distribution channel in B2B technology isn't a marketplace, sales team, or partner program. It's an AI coding agent.
            </p>

            <a href="/blog/ai-coding-tools-distribution" style={{ color: '#457b9d', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 4 - GEO vs SEO */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />

          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <a href="/blog/geo-vs-seo" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-red)] transition-colors" style={{ lineHeight: '1.2' }}>
                GEO vs. SEO: Why Optimizing for AI Is Different
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              Your prospects aren't Googling anymore. They're asking ChatGPT for recommendations. Here's why optimizing for AI requires a fundamentally different approach.
            </p>

            <a href="/blog/geo-vs-seo" style={{ color: '#e63946', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 5 - Autonomous Agents */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />

          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <a href="/blog/autonomous-agents-gtm-readiness" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-blue)] transition-colors" style={{ lineHeight: '1.2' }}>
                Why Your GTM Team Isn't Ready for Autonomous Agents
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              The hype around autonomous AI agents is real—but most GTM teams lack the process maturity to deploy them successfully. Here's what's missing.
            </p>

            <a href="/blog/autonomous-agents-gtm-readiness" style={{ color: '#457b9d', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 6 - AI Agents Rewriting GTM Roles */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />

          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <a href="/blog/ai-agents-rewriting-gtm-roles" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-yellow)] transition-colors" style={{ lineHeight: '1.2' }}>
                From Playbooks to Platforms
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              AI agents are transforming BDR and AE roles from individual contributors who execute playbooks into oversight roles that monitor and guide fleets of digital workers. The job description is changing.
            </p>

            <a href="/blog/ai-agents-rewriting-gtm-roles" style={{ color: '#f4a261', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>

        {/* Article 7 - Agentic Pricing Reckoning */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '280px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />

          <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <a href="/blog/agentic-pricing-reckoning" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
              <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-yellow)] transition-colors" style={{ lineHeight: '1.2' }}>
                The Seat Is Not the Value
              </h2>
            </a>

            <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
              AI agents don't have headcount. The agentic revolution is exposing a structural flaw buried in most SaaS pricing models — and early-stage companies that don't adapt will watch consumption grow while revenue stagnates.
            </p>

            <a href="/blog/agentic-pricing-reckoning" style={{ color: '#f4a261', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
              Read more →
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
