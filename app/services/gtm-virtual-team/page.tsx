"use client";

import { useState } from "react";
import Link from "next/link";

export default function GTMVirtualTeam() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "sdrs",
      title: "Sales Development Reps",
      icon: "📞",
      description: "Prospect, qualify, and book meetings for your AE team",
      details: "AI writes personalized outreach at scale, enriches lead data, scores prospects, and suggests optimal call times"
    },
    {
      id: "aes",
      title: "Account Executives",
      icon: "💼",
      description: "Run discovery, demos, and close deals in your sales process",
      details: "AI drafts proposals, analyzes calls, surfaces coaching insights, and automates CRM updates"
    },
    {
      id: "csms",
      title: "Customer Success Managers",
      icon: "🎯",
      description: "Drive onboarding, adoption, retention, and expansion",
      details: "AI generates QBR decks, flags churn risk, identifies expansion opportunities, and drafts renewal emails"
    },
    {
      id: "demand-gen",
      title: "Demand Generation",
      icon: "📈",
      description: "Build and optimize campaigns, manage paid channels, drive pipeline",
      details: "AI generates ad copy and email sequences, powers audience segmentation, and automates A/B testing"
    },
    {
      id: "revops",
      title: "Revenue Operations",
      icon: "⚙️",
      description: "Build dashboards, manage CRM hygiene, optimize processes",
      details: "AI builds forecasts, detects data quality issues, and surfaces insights from sales and marketing data"
    },
    {
      id: "marketing-ops",
      title: "Marketing Operations",
      icon: "🔧",
      description: "Manage marketing automation, campaign ops, and lead routing",
      details: "AI optimizes workflows, automates campaign execution, and improves lead scoring"
    },
    {
      id: "content",
      title: "Content & Enablement",
      icon: "📝",
      description: "Create sales collateral, case studies, and training materials",
      details: "AI accelerates content creation, generates multiple variants, and maintains brand consistency"
    }
  ];

  const useCases = [
    {
      title: "Post-Assessment Execution",
      scenario: "You completed a GTM Assessment with a roadmap to launch ABM, build a sales playbook, and implement health scoring.",
      solution: "Deploy Demand Gen Specialist (20 hrs/week), Sales Enablement Specialist (10 hrs/week), and RevOps Analyst (15 hrs/week) for 3 months.",
      color: "var(--accent-red)"
    },
    {
      title: "Scaling Outbound While Hiring",
      scenario: "You're hiring a VP of Sales but need pipeline now. You don't want to hire SDRs until the VP is in place.",
      solution: "Deploy 2 fractional SDRs (40 hrs/week each) to generate pipeline while you recruit. Transition them once VP is hired.",
      color: "var(--accent-yellow)"
    },
    {
      title: "Seasonal Campaign Support",
      scenario: "You're launching a major product release with a multi-channel campaign. Your marketing team is slammed.",
      solution: "Deploy Demand Gen Specialist (40 hrs/week) for 8 weeks to plan, execute, and optimize the campaign.",
      color: "var(--accent-blue)"
    },
    {
      title: "Customer Success Backfill",
      scenario: "Your CSM just quit and you have 50 at-risk accounts with renewals in 60 days.",
      solution: "Deploy fractional CSM (40 hrs/week) to run renewals, QBRs, and manage escalations while you recruit.",
      color: "var(--slate)"
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        GTM Virtual Team
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        Highly specialized, AI-adept fractional resources to support execution across all GTM roles
      </p>

      {/* The Problem */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-red)]" />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            You Know What to Do. You Just Need Hands to Execute.
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            You've built the strategy, deployed the tools, and documented the processes. But you don't have enough hands to execute—or the budget to hire a full team.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            We provide <strong>AI-native fractional resources</strong> who embed with your team to drive execution across marketing, sales, customer success, and revenue operations. Think of us as an extension of your GTM org—without the overhead, onboarding lag, or long-term commitments.
          </p>
        </div>
      </div>

      {/* AI Productivity Advantage */}
      <div className="bg-[var(--black)] text-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider uppercase mb-4" style={{ color: 'var(--accent-yellow)' }}>
            2-3x Productivity Through AI
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', marginBottom: '1rem' }}>
            Traditional fractional resources operate at 1x productivity. Our team operates at <strong>2-3x</strong> because they're trained to leverage AI across every part of their workflow.
          </p>
          <Link
            href="/blog/ai-coding-tools-distribution"
            className="inline-block text-[var(--accent-yellow)] hover:underline"
            style={{ fontSize: '0.95rem', marginTop: '1rem' }}
          >
            Read: The AI Agent Is The New Buyer →
          </Link>
        </div>
      </div>

      {/* Available Roles */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          Available Roles
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {roles.map((role) => (
            <div
              key={role.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative cursor-pointer"
              onMouseEnter={() => setSelectedRole(role.id)}
              onMouseLeave={() => setSelectedRole(null)}
              style={{ padding: '1.5rem' }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{role.icon}</div>
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-2">
                {role.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', marginBottom: '1rem' }}>
                {role.description}
              </p>
              {selectedRole === role.id && (
                <p style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic', lineHeight: '1.5' }}>
                  {role.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Engagement Model */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          <div style={{ padding: '2rem', borderRight: '2px solid var(--black)' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              Commitment
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Month-to-month or project-based. No long-term contracts required.
            </p>
          </div>
          <div style={{ padding: '2rem', borderRight: '2px solid var(--black)' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              Onboarding
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              1-2 weeks to ramp into your tools, processes, and team.
            </p>
          </div>
          <div style={{ padding: '2rem', borderRight: '2px solid var(--black)' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              Management
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Resources report to you and embed with your team.
            </p>
          </div>
          <div style={{ padding: '2rem' }}>
            <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
              Pricing
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
              Transparent hourly or monthly rates based on role and commitment.
            </p>
          </div>
        </div>
      </div>

      {/* Example Use Cases */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          Example Use Cases
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative"
              style={{ padding: '2rem' }}
            >
              <div className="absolute top-0 left-0 w-full h-[5px]" style={{ backgroundColor: useCase.color }} />
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-3">
                {useCase.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--charcoal)', marginBottom: '1rem', lineHeight: '1.6' }}>
                <strong>Scenario:</strong> {useCase.scenario}
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: '1.6' }}>
                <strong>Solution:</strong> {useCase.solution}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* When to Use This */}
      <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem' }}>
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
        <div style={{ padding: '2.5rem' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-4">
            When to Use the GTM Virtual Team
          </h2>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem', paddingLeft: 0, listStyle: 'none' }}>
            <li style={{ padding: '1rem', borderLeft: '3px solid var(--accent-red)' }}>
              You've completed a <strong>GTM Assessment</strong> and need hands to execute the roadmap
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid var(--accent-yellow)' }}>
              You've deployed new platforms and need operators to run them
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid var(--accent-blue)' }}>
              You're between hires and need coverage while you recruit
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid var(--slate)' }}>
              You have seasonal demand spikes (launches, campaigns, end-of-quarter)
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid var(--accent-red)' }}>
              You need specialized skills your team doesn't have
            </li>
            <li style={{ padding: '1rem', borderLeft: '3px solid var(--accent-yellow)' }}>
              You want to test a new GTM motion before committing to full-time headcount
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--slate)', textAlign: 'center' }}>
        <p className="text-[var(--charcoal)]" style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Ready to augment your GTM team with AI-adept specialists?
        </p>
        <a
          href="mailto:charles@workdifferent.services"
          className="inline-block bg-[var(--accent-red)] text-white font-[var(--font-bebas)] text-lg tracking-wider uppercase px-8 py-4 border-3 border-[var(--black)] shadow-[4px_4px_0_var(--black)] hover:shadow-[6px_6px_0_var(--black)] transition-all"
        >
          Contact Us
        </a>
      </div>
    </main>
  );
}
