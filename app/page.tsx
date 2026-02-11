"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }} className="animate-[fadeIn_0.8s_ease-out]">
      {/* Decorative line */}
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      {/* Hero Section */}
      <div className="animate-[slideUp_0.8s_ease-out_0.2s_both]" style={{ marginBottom: '4rem' }}>
        <h1 className="font-[var(--font-playfair)] text-5xl md:text-7xl font-black leading-tight text-[var(--black)] mb-6 tracking-tight">
          Here's to the <span className="text-[var(--accent-red)] italic">crazy ones</span>
        </h1>

        <div className="space-y-4 text-lg text-[var(--charcoal)] leading-relaxed" style={{ maxWidth: '900px' }}>
          <p>
            Apple's iconic "Think Different" campaign inspired the founding of Work Different in 2013. We believed then—and believe even more strongly now—that scaling go-to-market strategies requires creativity, bold thinking, and a willingness to challenge conventional wisdom.
          </p>

          <p>
            Today, with AI transforming how businesses operate and compete, thinking differently isn't just inspiring—it's imperative. The technology companies that will thrive are those that embrace new ways of building, scaling, and supporting their GTM teams.
          </p>

          <p className="font-semibold text-[var(--black)] text-xl" style={{ marginTop: '1.5rem' }}>
            We help early-stage B2B technology companies <strong>WORK DIFFERENT</strong>.
          </p>
        </div>
      </div>

      {/* Poster and Target Market Section */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {/* Poster artwork */}
        <div>
          <div
            className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] p-4 relative cursor-pointer hover:shadow-[10px_10px_0_var(--black)] transition-shadow"
            onClick={() => setIsModalOpen(true)}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />
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

        {/* Target Market sidebar */}
        <div className="bg-[var(--black)] text-[var(--cream)] p-8 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
          <h2 className="font-[var(--font-bebas)] text-2xl tracking-wider mb-8 text-[var(--accent-yellow)] uppercase">
            Target Market
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="text-sm">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Stage
              </h3>
              <p style={{ lineHeight: '1.8' }}>$0-20MM ARR</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Market
              </h3>
              <p style={{ lineHeight: '1.8' }}>Enterprise</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Domain
              </h3>
              <p style={{ lineHeight: '1.8' }}>
                SDLC, Infrastructure, Cybersecurity, AI, FinTech
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Verticals
              </h3>
              <p style={{ lineHeight: '1.8' }}>
                Banking, Insurance, Financial Services, Pharma, Automotive
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Regions
              </h3>
              <p style={{ lineHeight: '1.8' }}>NA, EMEA, APAC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Insights - Three Column Blog Cards */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          Featured Insights
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {/* Article 1 - The $2M-$10M Peril */}
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <a href="/blog/early-stage-gtm-peril" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
                <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-red)] transition-colors" style={{ lineHeight: '1.2' }}>
                  The $2M-$10M Peril
                </h3>
              </a>

              <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
                Why most startups fail to scale GTM—and they almost always fail in the same place: the race from $2M to $10M in ARR.
              </p>

              <a href="/blog/early-stage-gtm-peril" style={{ color: '#e63946', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
                Read more →
              </a>
            </div>
          </div>

          {/* Article 2 - Scale Readiness Matrix */}
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <a href="/blog/scale-readiness-matrix" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
                <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-yellow)] transition-colors" style={{ lineHeight: '1.2' }}>
                  The Scale Readiness Matrix
                </h3>
              </a>

              <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
                Why most companies invest in growth at exactly the wrong time—and how to know whether you should fix, build repeatability, or scale.
              </p>

              <a href="/blog/scale-readiness-matrix" style={{ color: '#f4a261', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
                Read more →
              </a>
            </div>
          </div>

          {/* Article 3 - Autonomous Agents */}
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative" style={{ overflow: 'hidden', minHeight: '320px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />

            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <a href="/blog/autonomous-agents-gtm-readiness" style={{ textDecoration: 'none', marginBottom: '1rem' }}>
                <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase hover:text-[var(--accent-blue)] transition-colors" style={{ lineHeight: '1.2' }}>
                  Why Your GTM Team Isn't Ready for Autonomous Agents
                </h3>
              </a>

              <p style={{ color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1.5rem', fontSize: '0.9rem', flex: 1 }}>
                The hype around autonomous AI agents is real—but most GTM teams lack the process maturity to deploy them successfully.
              </p>

              <a href="/blog/autonomous-agents-gtm-readiness" style={{ color: '#457b9d', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto' }} className="hover:underline">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    {/* Image Modal */}
    {isModalOpen && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '2rem',
          cursor: 'pointer'
        }}
        onClick={() => setIsModalOpen(false)}
      >
        <div style={{ position: 'relative', maxWidth: '64rem', maxHeight: '90vh' }}>
          <button
            style={{
              position: 'absolute',
              top: '-3rem',
              right: 0,
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 'bold',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              lineHeight: 1
            }}
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(false);
            }}
          >
            ×
          </button>
          <Image
            src="/images/IMG_0031.jpeg"
            alt="Think Different - Apple Campaign Poster"
            width={800}
            height={1067}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '90vh',
              objectFit: 'contain'
            }}
            quality={100}
          />
        </div>
      </div>
    )}
    </>
  );
}
