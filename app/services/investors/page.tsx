"use client";

import { useState } from "react";

export default function Investors() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const focusAreas = [
    {
      id: "ai-leverage",
      title: "AI Leverage & Automation Maturity",
      description: "Is the company ahead or behind on AI adoption in GTM?",
      details: "Assess how effectively they're using AI for lead scoring, personalization, content generation, sales enablement, and customer success. Evaluate their tech stack and whether they're positioned to benefit from AI acceleration.",
      color: "#457b9d"
    },
    {
      id: "competitive",
      title: "Competitive Positioning",
      description: "How do they actually win deals against competitors?",
      details: "Win/loss analysis, competitive differentiation that resonates with buyers, and whether their positioning is defensible in live deals.",
      color: "#e63946"
    },
    {
      id: "gtm-strategy",
      title: "Go-to-Market Strategy",
      description: "Is the current GTM motion right for the target market?",
      details: "Evaluate channel strategy, positioning, ICP definition, and whether the approach will work at scale.",
      color: "#f4a261"
    },
    {
      id: "pricing",
      title: "Pricing & Packaging",
      description: "Is pricing optimal for the market?",
      details: "Compare to alternatives, assess expansion revenue opportunity, and evaluate pricing strategy fit with market positioning.",
      color: "#f4a261"
    },
    {
      id: "sales-process",
      title: "Sales Process & Efficiency",
      description: "Is the sales motion repeatable or still experimental?",
      details: "Evaluate cycle length, conversion rates, sales methodology, and whether they've found product-market fit in their sales approach.",
      color: "#e63946"
    },
    {
      id: "pipeline",
      title: "Pipeline Reality Check",
      description: "Are the deals real and properly qualified?",
      details: "Forensic analysis of pipeline quality, historical win rates, and whether sales cycles are consistent with management claims.",
      color: "#e63946"
    },
    {
      id: "unit-economics",
      title: "Unit Economics Validation",
      description: "Can the model scale profitably?",
      details: "Calculate true CAC including all GTM costs, validate LTV assumptions, understand payback periods, and look for hidden costs or optimistic assumptions.",
      color: "#457b9d"
    },
    {
      id: "customer-quality",
      title: "Customer Quality & Cohort Analysis",
      description: "Who's actually buying and why?",
      details: "Interview reference customers, understand purchase drivers, assess retention and expansion patterns, identify concentration risks or non-repeatable deals.",
      color: "#f4a261"
    },
    {
      id: "team",
      title: "Team & Org Readiness",
      description: "Do they have the right talent to execute the growth plan?",
      details: "Assess sales leadership quality, team composition, compensation structure, and identify key hiring needs.",
      color: "#457b9d"
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        Investor Services
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        Comprehensive GTM due diligence for prospective investments. Go beyond the deck and understand what's really working—and what's not.
      </p>

      {/* The Problem */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            Most GTM Due Diligence Stops at the Pitch Deck
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            The deck says pipeline is strong, sales cycles are predictable, and unit economics are solid. But is it true? Do they have a repeatable GTM motion or are they just good at storytelling?
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            We go deep on the GTM engine to validate what's working, identify what's broken, and give you an honest assessment of whether the company can scale—or if they need to fix fundamentals first.
          </p>
        </div>
      </div>

      {/* What We Assess */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          What We Assess
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          {focusAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative cursor-pointer"
              onMouseEnter={() => setSelectedArea(area.id)}
              onMouseLeave={() => setSelectedArea(null)}
              style={{ padding: '2rem', minHeight: '200px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: area.color }} />
              <h3 className="font-[var(--font-bebas)] text-lg tracking-wider text-[var(--black)] uppercase mb-2">
                {area.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', marginBottom: '1rem' }}>
                {area.description}
              </p>
              {selectedArea === area.id && (
                <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: '1.5', fontStyle: 'italic' }}>
                  {area.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* What You Get */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            What You Get
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              <strong>GTM Health Scorecard</strong> across all critical dimensions
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              <strong>Pipeline Reality Assessment</strong> with forensic analysis of deal quality
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #457b9d', color: '#2a2a2a' }}>
              <strong>Unit Economics Validation</strong> including hidden costs and assumptions
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #4a5568', color: '#2a2a2a' }}>
              <strong>Scalability Risk Assessment</strong> and key areas to fix before scaling
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              <strong>AI Maturity Analysis</strong> and competitive positioning on AI adoption
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              <strong>Reference Customer Interviews</strong> to validate value delivery
            </div>
          </div>
        </div>
      </div>

      {/* AI-First Diligence */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider uppercase mb-4" style={{ color: '#f4a261' }}>
            AI-First Diligence
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
            We evaluate how effectively the company is leveraging AI to scale GTM efforts—and whether they're positioned to capitalize on AI-driven GTM acceleration or falling behind competitors.
          </p>
        </div>
      </div>

      {/* Timeline & Format */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Timeline
          </h3>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#2a2a2a' }}>
            <strong>Duration:</strong> 2-3 weeks
          </p>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            Comprehensive diligence with stakeholder interviews, data analysis, and customer references
          </p>
        </div>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Who This Is For
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            <strong>Seed and Series A investors</strong> who need independent validation of GTM claims during diligence
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #4a5568', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#2a2a2a' }}>
          Need independent GTM diligence on a prospective investment?
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
          Contact Us
        </a>
      </div>
    </main>
  );
}
