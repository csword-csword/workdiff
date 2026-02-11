"use client";

import { useState } from "react";
import Link from "next/link";

export default function AIPlatformDeployment() {
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const phases = [
    {
      id: "process-design",
      number: "01",
      title: "Process Design",
      duration: "Weeks 1-2",
      description: "Map ideal GTM workflows with AI as a first-class participant",
      details: "Design lead-to-opportunity flow, sales process, onboarding, renewal workflows, and identify where AI can auto-enrich leads, generate content, analyze calls, predict churn, and generate reports.",
      color: "#e63946"
    },
    {
      id: "platform-selection",
      number: "02",
      title: "Platform Selection",
      duration: "Weeks 3-4",
      description: "Select platforms based on workflow fit, not feature lists",
      details: "Evaluate CRM, marketing automation, sales engagement, customer success, and RevOps tools. Assess AI-native capabilities, integration quality, ease of adoption, and cost vs. value. No vendor bias.",
      color: "#f4a261"
    },
    {
      id: "implementation",
      number: "03",
      title: "Implementation",
      duration: "Weeks 5-10",
      description: "Full implementation, configuration, and integration",
      details: "Data migration, workflow automation, platform integrations, AI configuration, reporting dashboards, user permissions, and security settings. Not just advice—we do the work.",
      color: "#457b9d"
    },
    {
      id: "training",
      number: "04",
      title: "Training & Enablement",
      duration: "Weeks 11-12",
      description: "Comprehensive training so your team can hit the ground running",
      details: "Role-based training sessions, process documentation, AI tool training, admin training, and office hours during the first month post-launch.",
      color: "#4a5568"
    }
  ];

  const platformCategories = [
    { name: "CRM", examples: "Salesforce, HubSpot, Attio" },
    { name: "Marketing Automation", examples: "HubSpot, Marketo, Customer.io" },
    { name: "Sales Engagement", examples: "Outreach, Salesloft, Apollo" },
    { name: "Customer Success", examples: "Gainsight, Vitally, Planhat" },
    { name: "Revenue Operations", examples: "Clari, Gong, Chorus" },
    { name: "AI Tools", examples: "Clay, Lavender, 11x" }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-yellow)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        AI-First Platform Deployment
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        Select and implement the right platforms with an AI-first lens to boost productivity and enhance repeatability
      </p>

      {/* The Problem */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            Most Platform Deployments Fail Because Companies Pick Tools Before Designing Processes
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            Your CRM is a mess. Your marketing automation doesn't talk to sales. Your customer success team is flying blind. Data is scattered across 12 tools that don't integrate.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            The issue isn't the platforms. It's that most companies approach platform selection and deployment wrong: they pick tools based on features (not workflows), deploy without redesigning processes, ignore AI-native alternatives, don't train teams, and treat it as a one-time project.
          </p>
        </div>
      </div>

      {/* Our Approach Callout */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider uppercase mb-4" style={{ color: '#f4a261' }}>
            We Design Workflows First, Then Select Platforms
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', marginBottom: '1rem', color: '#ffffff' }}>
            We redesign your GTM workflows from the ground up with an <strong>AI-first lens</strong>, then select and deploy the platforms that best support those workflows.
          </p>
          <Link
            href="/services/gtm-assessment"
            style={{ display: 'inline-block', color: '#f4a261', fontSize: '0.95rem', marginTop: '1rem', textDecoration: 'underline' }}
          >
            Natural follow-on from GTM Assessment →
          </Link>
        </div>
      </div>

      {/* The 4 Phases */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          How It Works: 4 Phases
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {phases.map((phase) => (
            <div
              key={phase.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative cursor-pointer"
              onMouseEnter={() => setSelectedPhase(phase.id)}
              onMouseLeave={() => setSelectedPhase(null)}
              style={{ padding: '2rem', minHeight: '260px' }}
            >
              <div className="absolute top-0 left-0 w-full h-[5px]" style={{ backgroundColor: phase.color }} />
              <div className="font-[var(--font-bebas)] text-5xl tracking-wider mb-2" style={{ color: phase.color }}>
                {phase.number}
              </div>
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-2">
                {phase.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4a5568', marginBottom: '1rem', fontStyle: 'italic' }}>
                {phase.duration}
              </p>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', marginBottom: '1rem', lineHeight: '1.6' }}>
                {phase.description}
              </p>
              {selectedPhase === phase.id && (
                <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: '1.5', borderTop: '1px solid #4a5568', paddingTop: '1rem' }}>
                  {phase.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Platform Categories */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          Platform Categories We Cover
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {platformCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative"
              style={{ padding: '1.5rem', textAlign: 'center', minHeight: '120px' }}
            >
              <h3 className="font-[var(--font-bebas)] text-lg tracking-wider text-[var(--black)] uppercase mb-2">
                {category.name}
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#4a5568', lineHeight: '1.4' }}>
                {category.examples}
              </p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '0.9rem', color: '#4a5568', marginTop: '1.5rem', fontStyle: 'italic', textAlign: 'center' }}>
          No vendor partnerships or affiliate incentives. Recommendations based solely on what works best for your business.
        </p>
      </div>

      {/* What You Get */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            What You Get
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              <strong>Redesigned GTM workflows</strong> optimized for AI-first execution
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              <strong>Platform recommendations</strong> based on your specific needs (no vendor bias)
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #457b9d', color: '#2a2a2a' }}>
              <strong>Fully implemented platforms</strong> ready for your team to use
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #4a5568', color: '#2a2a2a' }}>
              <strong>AI-powered automations</strong> that amplify productivity across GTM
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              <strong>Integrated tech stack</strong> where data flows seamlessly
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              <strong>Custom dashboards and reports</strong> that surface metrics that matter
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #457b9d', color: '#2a2a2a' }}>
              <strong>Team training and documentation</strong> so teams can hit the ground running
            </div>
            <div style={{ padding: '1rem', borderLeft: '3px solid #4a5568', color: '#2a2a2a' }}>
              <strong>30 days of post-launch support</strong> to ensure smooth adoption
            </div>
          </div>
        </div>
      </div>

      {/* Timeline & Pricing */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem' }}>
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-red)]" />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Timeline
          </h3>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#2a2a2a' }}>
            <strong>Duration:</strong> 8-12 weeks
          </p>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            Varies based on complexity and number of platforms
          </p>
        </div>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem' }}>
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Pricing
          </h3>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#2a2a2a' }}>
            <strong>Model:</strong> Fixed-fee project pricing
          </p>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            Based on scope. Platform licensing costs billed directly by vendors.
          </p>
        </div>
      </div>

      {/* Who This Is For + Blog Link */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            Who This Is For
          </h2>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingLeft: 0, listStyle: 'none', marginBottom: '2rem' }}>
            <li style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              Companies that completed a <strong>GTM Assessment</strong> and need to implement recommended platforms
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              Migrating from one platform to another and want to do it right
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #457b9d', color: '#2a2a2a' }}>
              Launching a new GTM motion that needs supporting tech stack
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #4a5568', color: '#2a2a2a' }}>
              Platforms are underutilized or poorly configured
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #e63946', color: '#2a2a2a' }}>
              Want to adopt AI-native tools but don't know where to start
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid #f4a261', color: '#2a2a2a' }}>
              Scaling fast and current systems can't keep up
            </li>
          </ul>
          <div style={{ borderTop: '1px solid #4a5568', paddingTop: '1.5rem' }}>
            <Link
              href="/blog/scale-readiness-matrix"
              style={{ display: 'inline-block', color: '#457b9d', fontSize: '0.95rem', textDecoration: 'underline' }}
            >
              Related Reading: The Scale Readiness Matrix →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #4a5568', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#2a2a2a' }}>
          Ready to deploy platforms that actually drive productivity and growth?
        </p>
        <a
          href="mailto:charles@workdifferent.services"
          className="font-[var(--font-bebas)]"
          style={{
            display: 'inline-block',
            backgroundColor: '#f4a261',
            color: '#0a0a0a',
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
