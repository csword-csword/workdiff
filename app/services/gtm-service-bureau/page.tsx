"use client";

import { useState } from "react";
import Link from "next/link";

export default function GTMServiceBureau() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "cro",
      title: "Fractional CRO",
      description: "Revenue strategy, sales leadership, and GTM alignment",
      details: "AI-powered forecasting, pipeline analytics, and data-driven revenue planning without the $300K+ salary"
    },
    {
      id: "marketing",
      title: "Marketing",
      description: "Demand generation, content, campaigns, and brand",
      details: "AI generates campaign copy, automates audience segmentation, powers A/B testing, and accelerates content production at 2-3x speed"
    },
    {
      id: "bdr",
      title: "Business Development",
      description: "Prospect, qualify, and build pipeline for your sales team",
      details: "AI writes personalized outreach at scale, enriches lead data, scores prospects, and suggests optimal engagement sequences"
    },
    {
      id: "sales",
      title: "Sales",
      description: "Fractional AEs to run deals, close revenue, and build your sales playbook",
      details: "AI-assisted demo prep, proposal generation, competitive intel briefings, and deal coaching — giving fractional AEs the output of a full sales team"
    },
    {
      id: "cs",
      title: "Customer Success",
      description: "Drive onboarding, adoption, retention, and expansion revenue",
      details: "AI generates QBR decks, flags churn risk, identifies expansion opportunities, and automates health scoring"
    }
  ];

  const useCases = [
    {
      title: "Post-Seed Execution",
      scenario: "You just raised your Seed round and need to prove product-market fit. You can't afford a full GTM team, but you need pipeline now.",
      solution: "Deploy fractional BDR and Marketing resources to build your first repeatable pipeline motion while you stay focused on product.",
      color: "#e63946"
    },
    {
      title: "Series A Scaling",
      scenario: "You're past $1M ARR and need to accelerate, but hiring a VP Sales, marketing team, and SDRs simultaneously would burn 60% of your raise.",
      solution: "Deploy a fractional CRO to build the playbook, BDRs to generate pipeline, and Marketing to drive inbound — all at a fraction of FTE cost.",
      color: "#f4a261"
    },
    {
      title: "Bridge to $10M ARR",
      scenario: "You're at $3-5M ARR and need to scale revenue without scaling headcount proportionally. Board wants capital efficiency.",
      solution: "Layer in fractional CS to protect revenue and Marketing to scale demand gen. Convert to FTE hires only after hitting $10M ARR.",
      color: "#457b9d"
    },
    {
      title: "Portfolio-Wide Deployment",
      scenario: "You're a VC with 5-10 portfolio companies pre-$10M ARR. Each needs GTM help but none can justify full-time hires.",
      solution: "Shared Service Bureau model across the portfolio — each company gets the GTM coverage they need, with cost distributed efficiently.",
      color: "#4a5568"
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        GTM Service Bureau
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        Fractional, AI-adept resources across all GTM roles — scales with the business until you're ready for FTE hires
      </p>

      {/* The Problem */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            The Problem: GTM Overhead Kills Early-Stage Companies
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            Most startups yield poor returns on early GTM spend. Overhead is disproportionately high before $10M ARR, and even a minimalist legacy GTM org often costs <strong>more than 50% of newly generated ARR</strong>.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            The time in the <strong>"danger zone"</strong> between first hire and scalable revenue is the critical survival factor. Meanwhile, AI capabilities evolve weekly — but most teams lack the expertise to leverage them for GTM execution.
          </p>
        </div>
      </div>

      {/* AI-First GTM Advantage */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.15rem', marginBottom: '0.5rem' }}>
            AI-First GTM Strategies Yield
          </p>
          <h2 className="font-[var(--font-bebas)] text-5xl tracking-wider uppercase mb-2" style={{ color: '#f4a261' }}>
            Up to 66% Reduction in GTM Overhead
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto', color: '#ffffff' }}>
            1.5–2x productivity · 50% more ARR quota per dollar
          </p>
        </div>
      </div>

      {/* On-Demand Coverage */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          On-Demand Coverage Across All GTM Roles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative cursor-pointer"
              onMouseEnter={() => setSelectedRole(role.id)}
              onMouseLeave={() => setSelectedRole(null)}
              style={{ padding: '1.5rem', minHeight: '180px' }}
            >
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-2">
                {role.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', marginBottom: '1rem' }}>
                {role.description}
              </p>
              {selectedRole === role.id && (
                <p style={{ fontSize: '0.85rem', color: '#4a5568', fontStyle: 'italic', lineHeight: '1.5' }}>
                  {role.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Model */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
          <div style={{ padding: '2rem', borderRight: '2px solid #0a0a0a', borderBottom: '2px solid #0a0a0a' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              Fractional by Design
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#2a2a2a' }}>
              CRO, Marketing, BDR, and CS coverage on demand. No full-time commitment until you're ready.
            </p>
          </div>
          <div style={{ padding: '2rem', borderBottom: '2px solid #0a0a0a' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              AI-Adept Resources
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#2a2a2a' }}>
              Every resource is trained on AI-native workflows — delivering 1.5-2x the output of traditional hires.
            </p>
          </div>
          <div style={{ padding: '2rem', borderRight: '2px solid #0a0a0a' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              Scales With You
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#2a2a2a' }}>
              Start lean, add roles as needed, and transition to FTE hires post $10M ARR.
            </p>
          </div>
          <div style={{ padding: '2rem' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              Embedded, Not Outsourced
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', color: '#2a2a2a' }}>
              Resources report to you and operate as part of your team — not a black-box agency.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          Common Deployment Scenarios
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative"
              style={{ padding: '2rem', minHeight: '240px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: useCase.color }} />
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
                {useCase.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', marginBottom: '1rem', lineHeight: '1.6' }}>
                <strong>Scenario:</strong> {useCase.scenario}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#4a5568', lineHeight: '1.6' }}>
                <strong>Solution:</strong> {useCase.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* When to Use This */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            When to Deploy the GTM Service Bureau
          </h2>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingLeft: 0, listStyle: 'none' }}>
            <li style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              You're <strong>pre-$10M ARR</strong> and can't justify full GTM headcount
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              GTM overhead is <strong>eating more than 50%</strong> of newly generated ARR
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #457b9d', color: '#2a2a2a' }}>
              You need to <strong>accelerate the path to $10M ARR</strong> with a leaner team
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #4a5568', color: '#2a2a2a' }}>
              Your board wants <strong>capital efficiency</strong> on go-to-market spend
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              You want to <strong>embed AI-first GTM practices</strong> from day one
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              You're a <strong>VC looking to reduce burn rate</strong> across portfolio companies
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #4a5568', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#2a2a2a' }}>
          Ready to build a lean, AI-powered GTM engine?
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
          Let's Talk
        </a>
      </div>
    </main>
  );
}
