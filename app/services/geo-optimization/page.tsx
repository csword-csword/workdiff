"use client";

import { useState } from "react";

export default function GEOOptimization() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const challenges = [
    {
      id: "invisible",
      title: "You're Invisible to AI",
      problem: "Your prospects are asking ChatGPT, Claude, and Gemini for product recommendations—and your company isn't being mentioned.",
      impact: "You're losing deals before you even know prospects exist.",
      color: "#e63946"
    },
    {
      id: "competitors",
      title: "Competitors Own the Narrative",
      problem: "When prospects ask AI about your product category, your competitors get recommended. You don't.",
      impact: "AI is becoming the new Google—and you're not ranking.",
      color: "#f4a261"
    },
    {
      id: "discovery",
      title: "Broken Discovery Channel",
      problem: "Enterprise buyers use AI for research, vendor evaluation, and buying decisions. If you're not surfacing, you don't exist.",
      impact: "Your marketing is optimized for Google. AI doesn't care about your SEO.",
      color: "#457b9d"
    }
  ];

  const geoReadiness = [
    {
      id: "content",
      title: "Content Structure",
      what: "Do LLMs understand what you do, who you serve, and why you're different?",
      color: "#e63946"
    },
    {
      id: "authority",
      title: "Authority Signals",
      what: "Does the web treat you as an authority in your category?",
      color: "#f4a261"
    },
    {
      id: "discovery",
      title: "Discoverability",
      what: "Can AI models find, parse, and cite your content when prospects ask questions?",
      color: "#457b9d"
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      {/* Hero */}
      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        Generative Engine Optimization (GEO)
      </h1>
      <p className="text-2xl font-[var(--font-playfair)] italic text-[var(--charcoal)] mb-8" style={{ lineHeight: '1.4' }}>
        Get discovered when your prospects ask AI
      </p>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ maxWidth: '900px', lineHeight: '1.6' }}>
        Your prospects aren't Googling anymore. They're asking ChatGPT, Claude, and Gemini to recommend solutions, compare vendors, and research products. If you're not showing up in AI responses, you're invisible to the next generation of B2B buyers.
      </p>

      {/* The Problem */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          Why This Matters Now
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative"
              style={{ padding: '2rem', minHeight: '280px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: challenge.color }} />
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
                {challenge.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1rem' }}>
                <strong>The Problem:</strong> {challenge.problem}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                <strong style={{ color: challenge.color }}>The Impact:</strong> {challenge.impact}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What is GEO */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider uppercase mb-4" style={{ color: '#f4a261' }}>
            What Is GEO?
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#ffffff', marginBottom: '1.5rem' }}>
            Generative Engine Optimization (GEO) is the practice of making your company, products, and expertise discoverable to Large Language Models (LLMs) like ChatGPT, Claude, and Gemini.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#ffffff' }}>
            Unlike SEO (which optimizes for search engines), GEO optimizes for how AI models retrieve, synthesize, and cite information when answering user questions. It's the difference between ranking in Google search results and being <em>recommended</em> by AI.
          </p>
        </div>
      </div>

      {/* GEO Readiness Assessment */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          GEO Readiness Assessment
        </h2>
        <p className="text-lg text-[var(--charcoal)] mb-6" style={{ lineHeight: '1.6' }}>
          We evaluate your current GEO posture across three critical dimensions:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          {geoReadiness.map((dimension) => (
            <div
              key={dimension.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative"
              style={{ padding: '2rem', minHeight: '200px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: dimension.color }} />
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
                {dimension.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
                {dimension.what}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* What You Get */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          What You Get
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
            <h3 className="font-[var(--font-bebas)] text-lg tracking-wider text-[var(--black)] uppercase mb-3">
              GEO Readiness Report
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
              Comprehensive analysis of how your company surfaces (or doesn't) in AI responses. Includes competitive benchmarking, gap analysis, and current citation frequency.
            </p>
          </div>

          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />
            <h3 className="font-[var(--font-bebas)] text-lg tracking-wider text-[var(--black)] uppercase mb-3">
              Strategic Recommendations
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
              Prioritized roadmap for improving your GEO posture: content strategy, schema implementation, citation building, and authority development.
            </p>
          </div>

          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />
            <h3 className="font-[var(--font-bebas)] text-lg tracking-wider text-[var(--black)] uppercase mb-3">
              Implementation Support
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
              We don't just tell you what to do—we help you do it. Content optimization, schema markup, citation campaigns, and ongoing monitoring.
            </p>
          </div>

          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#4a5568' }} />
            <h3 className="font-[var(--font-bebas)] text-lg tracking-wider text-[var(--black)] uppercase mb-3">
              Performance Tracking
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
              Monthly reporting on brand mention frequency, citation rates, and how you're surfacing in AI responses compared to competitors.
            </p>
          </div>
        </div>
      </div>

      {/* The Opportunity */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider uppercase mb-4" style={{ color: '#f4a261' }}>
            The Early Mover Advantage
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#ffffff', marginBottom: '1rem' }}>
            Most B2B companies are ignoring GEO. They're still fighting over Google rankings while their prospects have moved to AI.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#ffffff' }}>
            The companies that optimize for GEO <em>now</em> will own their category in AI responses for years to come. By the time your competitors figure this out, you'll already be the default recommendation.
          </p>
        </div>
      </div>

      {/* Timeline & Who This Is For */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
          <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-4">
            Timeline
          </h3>
          <ul style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            <li><strong>Week 1-2:</strong> GEO Readiness Assessment</li>
            <li><strong>Week 3:</strong> Strategic Recommendations & Roadmap</li>
            <li><strong>Week 4-8:</strong> Implementation (content, schema, citations)</li>
            <li><strong>Ongoing:</strong> Monitoring & optimization</li>
          </ul>
        </div>

        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />
          <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-4">
            Who This Is For
          </h3>
          <ul style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.8', paddingLeft: '1.5rem' }}>
            <li>Early-stage B2B tech companies ($0-20M ARR)</li>
            <li>Companies selling to enterprise buyers</li>
            <li>Products in competitive, AI-discoverable categories</li>
            <li>Teams ready to invest in next-gen discoverability</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #4a5568', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#2a2a2a' }}>
          Ready to own your category in AI responses?
        </p>
        <a
          href="mailto:charles@workdifferent.services"
          className="font-[var(--font-bebas)]"
          style={{
            display: 'inline-block',
            backgroundColor: '#e63946',
            color: '#ffffff',
            fontSize: '1.125rem',
            letterSpacing: '0.1rem',
            textTransform: 'uppercase',
            padding: '1rem 2rem',
            border: '3px solid #0a0a0a',
            boxShadow: '4px 4px 0 #0a0a0a',
            textDecoration: 'none'
          }}
        >
          Get Your GEO Assessment
        </a>
      </div>
    </main>
  );
}
