"use client";

import { useState } from "react";

export default function WhoWeServe() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);

  const targetAreas = [
    {
      id: "stage",
      title: "Stage: $0-20MM ARR",
      tagline: "Early-stage companies scaling from product-market fit to repeatable growth",
      description: "You've proven the product works. Now you need to prove the GTM motion works.",
      aiTransformation: "AI is compressing the timeline from founding to scale. Companies that once took 5-7 years to reach $10M ARR are doing it in 2-3. But speed creates new challenges: you need repeatable processes faster, you're hiring GTM talent in a market where AI is redefining roles, and you're competing against incumbents who are also AI-enabled. We help you build AI-first GTM infrastructure that scales with your growth.",
      color: "#e63946"
    },
    {
      id: "market",
      title: "Market: Enterprise B2B",
      tagline: "Complex sales cycles, multi-stakeholder deals, long-term customer relationships",
      description: "Selling to the enterprise requires different muscle than SMB or mid-market.",
      aiTransformation: "Enterprise buyers are using AI to research vendors, evaluate solutions, and negotiate contracts. Your competitors are using AI to personalize outreach, automate discovery, and scale account-based marketing. The enterprise sales playbook is being rewritten in real-time. We help you deploy AI where it matters most: qualification, personalization, deal acceleration, and customer expansion—without losing the human relationships that enterprise deals require.",
      color: "#f4a261"
    },
    {
      id: "sdlc",
      title: "Domain: SDLC & Developer Tools",
      tagline: "Products for engineering teams, DevOps, and software delivery",
      description: "Selling to developers is different. They want to try before they buy, they hate marketing speak, and they trust peers over vendors.",
      aiTransformation: "AI coding assistants like GitHub Copilot and Cursor are becoming the primary discovery channel for developer tools. If your product isn't discoverable through AI agents, you're invisible to the next generation of developers. We help you optimize for AI-driven distribution, build developer-led growth motions, and create adoption funnels that work in an AI-first world.",
      color: "#457b9d"
    },
    {
      id: "infrastructure",
      title: "Domain: Infrastructure & Cloud",
      tagline: "Platform tools, observability, data infrastructure, cloud-native services",
      description: "Infrastructure buyers are technical, skeptical, and intensely focused on operational risk.",
      aiTransformation: "AI is transforming infrastructure from 'set it and forget it' to 'intelligent and adaptive.' Buyers expect AI-powered automation, anomaly detection, and self-healing systems. Your competitors are embedding AI into their platforms. We help you articulate AI-driven value propositions, build technical GTM motions, and sell to infrastructure teams who are drowning in tool sprawl.",
      color: "#4a5568"
    },
    {
      id: "cybersecurity",
      title: "Domain: Cybersecurity",
      tagline: "Security tools, threat detection, compliance, identity management",
      description: "Security buyers face relentless threats, regulatory pressure, and budget scrutiny.",
      aiTransformation: "AI is both the threat and the solution. Attackers use AI to scale attacks; defenders use AI to detect threats faster. But security teams are skeptical of AI-washed products that promise magic without substance. We help you build credible AI narratives, demonstrate real-world efficacy, and navigate the unique compliance and trust requirements of security buyers.",
      color: "#e63946"
    },
    {
      id: "ai",
      title: "Domain: AI & Machine Learning",
      tagline: "AI platforms, MLOps, data science tools, LLM applications",
      description: "Selling AI to AI-savvy buyers is the ultimate challenge. They know what's hype and what's real.",
      aiTransformation: "The AI market is moving faster than any market in history. Models improve monthly, pricing collapses quarterly, and open-source alternatives emerge constantly. Buyers are overwhelmed, skeptical, and drowning in vendors. We help you differentiate in a crowded market, build GTM strategies that keep pace with model evolution, and sell to customers who are simultaneously your most informed and most skeptical audience.",
      color: "#f4a261"
    },
    {
      id: "fintech",
      title: "Domain: FinTech",
      tagline: "Financial services software, payments, banking infrastructure, compliance tools",
      description: "FinTech buyers operate in a regulated, high-stakes environment where trust is everything.",
      aiTransformation: "AI is transforming financial services—fraud detection, underwriting, personalization, trading. But financial institutions move cautiously, especially with AI. Regulators are scrutinizing AI-driven decisions, and customers demand explainability. We help you navigate regulatory complexity, build trust-based GTM motions, and sell AI-powered solutions to risk-averse financial institutions.",
      color: "#457b9d"
    },
    {
      id: "banking",
      title: "Vertical: Banking & Financial Services",
      tagline: "Retail banks, commercial banks, investment firms, wealth management",
      description: "Banks are conservative buyers with long sales cycles and intense regulatory oversight.",
      aiTransformation: "Banking is being disrupted by AI-native challengers while incumbents race to modernize legacy systems. Banks need AI to compete but face regulatory scrutiny of algorithmic decision-making. We help you build GTM strategies that address compliance concerns, demonstrate ROI in regulated environments, and navigate procurement processes that can take 12-18 months.",
      color: "#e63946"
    },
    {
      id: "insurance",
      title: "Vertical: Insurance",
      tagline: "P&C insurance, life insurance, health insurance, reinsurance",
      description: "Insurance companies are data-rich, process-heavy, and increasingly focused on AI-driven underwriting and claims.",
      aiTransformation: "AI is transforming every part of the insurance value chain: underwriting, pricing, claims processing, fraud detection. But insurance buyers are risk-averse and move slowly. We help you sell AI solutions to an industry that desperately needs innovation but fears change.",
      color: "#f4a261"
    },
    {
      id: "pharma",
      title: "Vertical: Pharma & Life Sciences",
      tagline: "Pharmaceutical companies, biotech, medical devices, clinical research",
      description: "Pharma operates under intense regulatory scrutiny, long development cycles, and high-stakes R&D investments.",
      aiTransformation: "AI is accelerating drug discovery, clinical trials, and regulatory submissions. But pharma buyers demand validated, explainable AI models that meet FDA standards. We help you navigate the unique compliance requirements, build trust with risk-averse stakeholders, and demonstrate clinical and commercial value.",
      color: "#457b9d"
    },
    {
      id: "automotive",
      title: "Vertical: Automotive",
      tagline: "Auto manufacturers, suppliers, dealerships, mobility services",
      description: "Automotive is undergoing simultaneous transformations: electric, autonomous, and software-defined vehicles.",
      aiTransformation: "AI is everywhere in automotive—autonomous driving, predictive maintenance, supply chain optimization, customer experience. But the industry is conservative, capital-intensive, and slow-moving. We help you sell to an industry in transition, where software and AI are becoming core competencies but legacy processes still dominate.",
      color: "#4a5568"
    }
  ];

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase mb-3" style={{ lineHeight: '1.1' }}>
        Who We Serve
      </h1>
      <p className="text-lg text-[var(--charcoal)] mb-12" style={{ lineHeight: '1.6' }}>
        We focus on early-stage B2B technology companies selling to enterprise buyers—where AI is fundamentally transforming how you compete, sell, and scale.
      </p>

      {/* Target Market Overview */}
      <div className="bg-[var(--black)] border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative" style={{ marginBottom: '3rem', overflow: 'hidden' }}>
        <div style={{ padding: '2.5rem', textAlign: 'center' }}>
          <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider uppercase mb-4" style={{ color: '#f4a261' }}>
            Our Sweet Spot
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.7', maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
            <strong>$0-20MM ARR</strong> • <strong>Enterprise B2B</strong> • <strong>SDLC, Infrastructure, Cybersecurity, AI, FinTech</strong> • <strong>Banking, Insurance, Pharma, Automotive</strong> • <strong>NA, EMEA, APAC</strong>
          </p>
        </div>
      </div>

      {/* Detailed Breakdown */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase mb-6">
          How AI Is Transforming Your Market
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {targetAreas.map((area) => (
            <div
              key={area.id}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] hover:shadow-[10px_10px_0_var(--black)] transition-all relative cursor-pointer"
              onMouseEnter={() => setSelectedArea(area.id)}
              onMouseLeave={() => setSelectedArea(null)}
              style={{ padding: '2rem', minHeight: '280px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', backgroundColor: area.color }} />
              <h3 className="font-[var(--font-bebas)] text-xl tracking-wider text-[var(--black)] uppercase mb-2">
                {area.title}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#4a5568', marginBottom: '1rem', fontStyle: 'italic' }}>
                {area.tagline}
              </p>

              {selectedArea !== area.id ? (
                <>
                  <p style={{ fontSize: '0.9rem', color: '#2a2a2a', lineHeight: '1.6', marginBottom: '1rem' }}>
                    {area.description}
                  </p>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginTop: 'auto',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e5e7eb',
                    fontSize: '0.8rem',
                    color: area.color,
                    fontWeight: 600
                  }}>
                    <span>Hover to see how AI is transforming this market</span>
                    <span style={{ fontSize: '1rem' }}>→</span>
                  </div>
                </>
              ) : (
                <div style={{ fontSize: '0.85rem', color: '#2a2a2a', lineHeight: '1.6', flex: 1 }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.5rem', color: area.color }}>
                    How AI Is Changing Everything:
                  </p>
                  <p>{area.aiTransformation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid #4a5568', textAlign: 'center' }}>
        <p style={{ fontStyle: 'italic', fontSize: '1.1rem', marginBottom: '1.5rem', color: '#2a2a2a' }}>
          Does this sound like you? Let's talk about how we can help.
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
