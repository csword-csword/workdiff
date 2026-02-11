"use client";

import { useState } from "react";
import Link from "next/link";

export default function GTMAssessment() {
  const [selectedDimension, setSelectedDimension] = useState<string | null>(null);

  const dimensions = [
    {
      id: "customer",
      title: "Customer Adoption & Value Realization",
      description: "Are customers actually using your product and getting value?",
      details: "Adoption and engagement, executive sponsorship, value articulation, business reviews, and expansion playbook. If customers don't adopt, expand, and renew, scaling demand just accelerates churn.",
      color: "#e63946"
    },
    {
      id: "demand",
      title: "Demand Generation & Messaging",
      description: "Can you predictably generate qualified pipeline?",
      details: "Messaging effectiveness, ICP targeting, campaign automation, channel mix, and Generative Engine Optimization (GEO). We validate whether your demand engine is ready or still experimental.",
      color: "#f4a261"
    },
    {
      id: "sales",
      title: "Sales Process & Conversion",
      description: "Is there a documented, repeatable sales process?",
      details: "Playbook definition, pipeline health, qualification adherence, and prescriptive selling. A great demand engine fails without a conversion engine that can scale.",
      color: "#457b9d"
    }
  ];

  const deliverables = [
    {
      title: "GTM Health Scorecard",
      description: "Data-driven assessment across Customer, Demand Gen, and Sales dimensions",
      color: "#e63946"
    },
    {
      title: "Scale Readiness Diagnosis",
      description: "Map to the Scale Readiness Matrix: GTM Risk, Fix It, Churn Risk, or Scale It",
      color: "#f4a261"
    },
    {
      title: "GTM Recommendation Roadmap",
      description: "Prioritized recommendations for strategy, processes, tools, org model, and targets",
      color: "#457b9d"
    },
    {
      title: "AI Leverage Analysis",
      description: "Where you're under-leveraging AI and the ROI of AI adoption in GTM functions",
      color: "#4a5568"
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-blue)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        GTM Assessment
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        Diagnose before you scale. Understand where your GTM engine is strong, where it's broken, and what to fix first.
      </p>

      {/* The Problem */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            Most GTM Problems Aren't Execution Problems—They're Diagnosis Problems
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            You can't fix what you don't understand. Most companies in the $2M-$10M ARR range fail to scale not because they lack ambition or capital, but because they don't know where they actually are in their GTM journey.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            Our GTM Assessment gives you a complete, honest picture across three critical dimensions: <strong>Customer Adoption & Retention</strong>, <strong>Demand Generation</strong>, and <strong>Sales Conversion</strong>. Then we map your current state against the Scale Readiness Matrix to tell you whether you should be fixing, building repeatability, or scaling.
          </p>
        </div>
      </div>

      {/* What We Assess */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          What We Assess
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {dimensions.map((dimension) => (
            <div
              key={dimension.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative cursor-pointer"
              onMouseEnter={() => setSelectedDimension(dimension.id)}
              onMouseLeave={() => setSelectedDimension(null)}
              style={{ padding: '2rem', minHeight: '220px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: dimension.color }} />
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-2">
                {dimension.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', marginBottom: '1rem' }}>
                {dimension.description}
              </p>
              {selectedDimension === dimension.id && (
                <p style={{ fontSize: '0.85rem', color: '#4a5568', lineHeight: '1.5', fontStyle: 'italic' }}>
                  {dimension.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scale Readiness Matrix */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider uppercase mb-4" style={{ color: '#f4a261' }}>
            We Map You to the Scale Readiness Matrix
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', marginBottom: '1rem', color: '#ffffff' }}>
            Every company falls into one of four quadrants. We tell you exactly where you stand and what to do next: <strong>GTM Risk</strong>, <strong>Fix It</strong>, <strong>Churn Risk</strong>, or <strong>Scale It</strong>.
          </p>
          <Link
            href="/blog/scale-readiness-matrix"
            style={{ display: 'inline-block', color: '#f4a261', fontSize: '0.95rem', marginTop: '1rem', textDecoration: 'underline' }}
          >
            Learn about the Scale Readiness Matrix →
          </Link>
        </div>
      </div>

      {/* What You Get */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          What You Get
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {deliverables.map((deliverable, index) => (
            <div
              key={index}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative"
              style={{ padding: '2rem', minHeight: '180px', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: deliverable.color }} />
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
                {deliverable.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
                {deliverable.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline & Who This Is For */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#e63946' }} />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Timeline
          </h3>
          <p style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#2a2a2a' }}>
            <strong>Duration:</strong> 30 days
          </p>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            Remote engagement with stakeholder interviews, data analysis, and working sessions
          </p>
        </div>
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ padding: '2rem', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#f4a261' }} />
          <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-3">
            Who This Is For
          </h3>
          <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6' }}>
            <strong>Seed and Series A companies</strong> in the $2M-$10M ARR danger zone who need an objective diagnosis before making big hiring or spending decisions
          </p>
        </div>
      </div>

      {/* Why Work Different */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: '#457b9d' }} />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            Why Work Different
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            We don't do generic frameworks or cookie-cutter assessments. We dig into your data, talk to your team, and give you the truth—even when it's uncomfortable.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2a2a2a' }}>
            And we're AI-native. Every recommendation we make includes a point of view on how AI can amplify your GTM motion—not as hype, but as a practical lever for efficiency and growth.
          </p>
          <div style={{ marginTop: '2rem', borderTop: '1px solid #4a5568', paddingTop: '1.5rem' }}>
            <Link
              href="/blog/early-stage-gtm-peril"
              style={{ display: 'inline-block', color: '#457b9d', fontSize: '0.95rem', textDecoration: 'underline' }}
            >
              Related Reading: The $2M-$10M Peril →
            </Link>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #4a5568', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#2a2a2a' }}>
          Ready to understand where you really are and what to fix first?
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
