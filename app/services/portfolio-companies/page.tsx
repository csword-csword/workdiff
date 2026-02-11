"use client";

import { useState } from "react";

export default function PortfolioCompanies() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "marketing",
      title: "Marketing",
      icon: "ICP, Messaging, Demand Gen",
      description: "Build scalable marketing engines from positioning to pipeline generation",
      services: ["ICP Definition", "Value Positioning", "Messaging", "Packaging & Pricing", "Collateral", "Demand Gen", "Metrics"],
      color: "#e63946"
    },
    {
      id: "sales",
      title: "Sales",
      icon: "Process, Playbooks, Pipeline",
      description: "Create repeatable sales motions that drive predictable revenue growth",
      services: ["Sales Process", "Playbooks", "Pipeline Mgmt", "Team Development", "Forecasting", "Commercials", "Metrics"],
      color: "#457b9d"
    },
    {
      id: "cs",
      title: "Customer Success",
      icon: "Adoption, Retention, Expansion",
      description: "Drive customer adoption, retention, and net revenue retention",
      services: ["Treatment Strategy", "QBR", "Cross-Sell", "Renewals", "Metrics"],
      color: "#f4a261"
    },
    {
      id: "channels",
      title: "Channels & Partnerships",
      icon: "Structure, Priority, Metrics",
      description: "Design and scale partner programs that drive incremental revenue",
      services: ["Structure", "Priority", "Commercials", "Metrics"],
      color: "#4a5568"
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-blue)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        Portfolio Services
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        À la carte operator expertise for early stage B2B technology companies. Pick the areas where you need help most.
      </p>

      {/* The Problem */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            Embedded Operator Expertise Without the Overhead
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            You don't need a full-time CMO, VP of Sales, or Head of Customer Success. You need specific GTM capabilities delivered by operators who've done it before—and who know how to leverage AI to work faster.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            Whether you need help defining your ICP, building a sales playbook, designing a customer success program, or launching a partner channel, we embed with your team to design, build, and implement—then hand it off for you to run.
          </p>
        </div>
      </div>

      {/* Service Categories */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          Service Areas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative cursor-pointer"
              onMouseEnter={() => setSelectedCategory(category.id)}
              onMouseLeave={() => setSelectedCategory(null)}
              style={{ padding: '2rem', minHeight: '240px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: category.color }} />
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-2">
                {category.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4a5568', marginBottom: '1rem', fontStyle: 'italic' }}>
                {category.icon}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', marginBottom: '1rem', lineHeight: '1.6' }}>
                {category.description}
              </p>
              {selectedCategory === category.id && (
                <div style={{ borderTop: '1px solid #4a5568', paddingTop: '1rem', marginTop: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: '#4a5568', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Services Include:
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#2a2a2a', lineHeight: '1.5' }}>
                    {category.services.join(' • ')}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            How It Works
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              <strong>1. Scope</strong><br />
              Pick the areas where you need help (à la carte)
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              <strong>2. Embed</strong><br />
              We work alongside your team to design and build
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #457b9d', color: '#2a2a2a' }}>
              <strong>3. Deliver</strong><br />
              You get working systems, playbooks, and processes
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #4a5568', color: '#2a2a2a' }}>
              <strong>4. Handoff</strong><br />
              We train your team to run it independently
            </div>
          </div>
        </div>
      </div>

      {/* AI-First Approach */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider uppercase mb-4" style={{ color: '#f4a261' }}>
            Every Engagement Is AI-First
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
            We don't just build processes—we build <strong>AI-enhanced processes</strong> that amplify productivity and drive better outcomes. From AI-powered lead scoring to automated QBR generation, every deliverable includes AI leverage.
          </p>
        </div>
      </div>

      {/* Engagement Model */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Engagement Model
          </h3>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#2a2a2a' }}>
            <strong>Format:</strong> Project-based or retainer
          </p>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            Choose specific projects or ongoing support across multiple areas
          </p>
        </div>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Who This Is For
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            <strong>Portfolio companies</strong> that need specific GTM capabilities built but don't need full-time leadership hires
          </p>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #4a5568', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#2a2a2a' }}>
          Ready to build specific GTM capabilities without the overhead?
        </p>
        <a
          href="mailto:charles@workdifferent.services"
          className="font-[var(--font-bebas)]"
          style={{
            display: 'inline-block',
            backgroundColor: '#457b9d',
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
