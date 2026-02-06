import Image from "next/image";

export default function Home() {
  return (
    <main style={{ maxWidth: '1152px', margin: '0 auto', padding: '64px 64px' }} className="animate-[fadeIn_0.8s_ease-out]">
      {/* Decorative line */}
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      {/* Three-column layout: poster left, text center, sidebar right on desktop; stacked on mobile */}
      <div className="three-column-layout animate-[slideUp_0.8s_ease-out_0.2s_both]">
        {/* Poster artwork - left column */}
        <div className="poster-column">
          <div className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] p-4 relative">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
            <Image
              src="/images/IMG_0031.jpeg"
              alt="Think Different - Apple Campaign Poster"
              width={300}
              height={400}
              className="w-full h-auto"
              priority
              quality={95}
            />
          </div>
        </div>

        {/* Text content - center column */}
        <div className="text-column">
          <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-black leading-tight text-[var(--black)] mb-10 tracking-tight">
            Here's to the <span className="text-[var(--accent-red)] italic">crazy ones</span>
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-[var(--charcoal)] leading-relaxed text-justify">
            <p>
              Apple's iconic "Think Different" campaign and the "Here's to the crazy ones" speech inspired the founding of Work Different in 2013. We believed then - and believe even more strongly now - that scaling go-to-market strategies requires creativity, bold thinking and a willingness to challenge conventional wisdom.
            </p>

            <br />

            <p>
              Today, with AI transforming how businesses operate and compete, thinking differently isn't just inspiring - it's imperative. The technology companies that will thrive are those that embrace new ways of building, scaling, and supporting their GTM teams.
            </p>

            <br />

            <p className="font-semibold text-[var(--black)] text-xl md:text-2xl">
              We help early-stage B2B technology companies work different.
            </p>
          </div>

          {/* Blog excerpt */}
          <div className="mt-12 pt-8 border-t-2 border-[var(--slate)]">
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-4">
              Latest Insight
            </h3>
            <a href="/blog/ai-coding-tools-distribution" className="group block">
              <h4 className="text-xl font-bold text-[var(--black)] mb-3 group-hover:text-[var(--accent-blue)] transition-colors">
                AI Coding Tools Are the New Distribution Channel
              </h4>
              <p className="text-base text-[var(--charcoal)] leading-relaxed mb-3">
                The fastest-growing distribution channel in B2B technology isn't a marketplace, a sales team, or a partner program. It's an AI coding agent. When founders ask tools like Cursor or Claude Code to build applications, they increasingly pick the same platforms by default — Vercel, Supabase, Stripe. No evaluation. No sales cycle...
              </p>
              <span className="text-[var(--accent-blue)] font-semibold group-hover:underline">
                Read the full article →
              </span>
            </a>
          </div>
        </div>

        {/* Target Market sidebar - right column */}
        <div className="sidebar-column">
          <div className="bg-[var(--black)] text-[var(--cream)] p-10 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
            <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider mb-12 text-[var(--accent-yellow)] uppercase">
              Target Market
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }} className="text-sm">
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-3 font-semibold">
                  Stage
                </h3>
                <p style={{ lineHeight: '1.8' }}>$0-20MM ARR</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-3 font-semibold">
                  Market
                </h3>
                <p style={{ lineHeight: '1.8' }}>Enterprise</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-3 font-semibold">
                  Domain
                </h3>
                <p style={{ lineHeight: '1.8' }}>
                  SDLC, Infrastructure, Cybersecurity, AI, FinTech
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-3 font-semibold">
                  Verticals
                </h3>
                <p style={{ lineHeight: '1.8' }}>
                  Banking, Insurance, Financial Services, Pharma, Automotive
                </p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-3 font-semibold">
                  Regions
                </h3>
                <p style={{ lineHeight: '1.8' }}>NA, EMEA, APAC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
