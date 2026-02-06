export default function Investors() {
  const services = [
    {
      title: "Sales Process & Efficiency Assessment",
      description: "Evaluate the actual sales motion - cycle length, conversion rates at each stage, sales methodology being used, and whether it's repeatable. Look at whether they've found product-market fit in their sales approach or are still experimenting.",
      color: "var(--accent-red)"
    },
    {
      title: "AI Leverage & Automation Maturity",
      description: "Assess how effectively the company is using AI to scale GTM efforts - are they using AI for lead scoring, personalization, content generation, sales enablement, or customer success automation? Evaluate whether they're ahead or behind the curve in AI adoption compared to competitors, and identify opportunities where AI could dramatically improve efficiency or reduce CAC. Look at the tech stack and whether they're positioned to benefit from the AI acceleration in GTM.",
      color: "var(--accent-blue)"
    },
    {
      title: "Customer Quality & Cohort Analysis",
      description: "Deep dive into who's actually buying - interview reference customers, understand why they bought, assess retention and expansion patterns, identify if there are any concerning concentration issues or one-off deals that might not be repeatable.",
      color: "var(--accent-yellow)"
    },
    {
      title: "Pipeline Reality Check",
      description: "Forensic analysis of pipeline quality - are the deals real, properly qualified, and at the stages claimed? What's the historical win rate? Are sales cycles consistent with what management says?",
      color: "var(--accent-red)"
    },
    {
      title: "Unit Economics Validation",
      description: "Calculate true CAC including all GTM costs, validate LTV assumptions, understand payback periods, and assess whether the model can scale profitably. Look for hidden costs or optimistic assumptions.",
      color: "var(--accent-blue)"
    },
    {
      title: "Go-to-Market Strategy Evaluation",
      description: "Is the current GTM motion right for the target market? Evaluate channel strategy, positioning, ideal customer profile definition, and whether the approach will work at scale.",
      color: "var(--accent-yellow)"
    },
    {
      title: "Competitive Positioning Assessment",
      description: "How do they actually compete in live deals? Win/loss analysis, competitive differentiation that resonates with buyers, and whether their positioning is defensible.",
      color: "var(--accent-red)"
    },
    {
      title: "Team & Org Readiness",
      description: "Assess sales leadership quality, team composition, compensation structure, and whether they have the right talent to execute the growth plan. Identify key hiring needs.",
      color: "var(--accent-blue)"
    },
    {
      title: "Pricing & Packaging Analysis",
      description: "Is pricing optimal for the market? How does it compare to alternatives? Is there expansion revenue opportunity built in?",
      color: "var(--accent-yellow)"
    }
  ];

  return (
    <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 64px' }}>
      {/* Services stacked vertically for better readability */}
      <div className="space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 relative"
          >
            <div className="absolute top-0 left-0 w-full h-[5px]" style={{ backgroundColor: service.color }} />
            <h2 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-wider mb-4 text-[var(--black)] uppercase border-b-2 border-[var(--black)] pb-3">
              {service.title}
            </h2>
            <p className="text-base md:text-lg text-[var(--charcoal)] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
