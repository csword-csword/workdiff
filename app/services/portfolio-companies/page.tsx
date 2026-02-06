"use client";

import { useState } from "react";

export default function PortfolioCompanies() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = {
    marketing: [
      {
        title: "ICP Definition",
        description: "Define your ideal customer profile using AI-powered market analysis and customer data patterns to identify the highest-value segments for your GTM motion.",
        color: "var(--accent-red)"
      },
      {
        title: "Value Positioning",
        description: "Craft differentiated positioning that resonates with buyers, leveraging AI insights to understand competitive gaps and customer pain points at scale.",
        color: "var(--accent-red)"
      },
      {
        title: "Messaging",
        description: "Develop compelling messaging frameworks and use AI to test, optimize, and personalize content across channels for maximum conversion impact.",
        color: "var(--accent-red)"
      },
      {
        title: "Packaging and Pricing",
        description: "Design pricing models that drive expansion revenue, using AI-driven analytics to optimize packaging tiers and price points for your market.",
        color: "var(--accent-red)"
      },
      {
        title: "Collateral",
        description: "Create high-impact sales and marketing materials, accelerated by AI tools for content generation, design, and personalization at scale.",
        color: "var(--accent-red)"
      },
      {
        title: "Demand Gen",
        description: "Build scalable demand generation engines using AI for targeting, campaign optimization, lead scoring, and attribution across your marketing funnel.",
        color: "var(--accent-red)"
      },
      {
        title: "Metrics",
        description: "Establish data-driven marketing measurement frameworks with AI-powered dashboards to track pipeline contribution, ROI, and leading indicators.",
        color: "var(--accent-red)"
      }
    ],
    sales: [
      {
        title: "Sales Process",
        description: "Design repeatable sales methodologies enhanced by AI for deal qualification, next-best-action recommendations, and cycle acceleration.",
        color: "var(--accent-blue)"
      },
      {
        title: "Playbooks",
        description: "Create battle-tested sales playbooks with AI-assisted content for objection handling, competitive positioning, and discovery questions.",
        color: "var(--accent-blue)"
      },
      {
        title: "Pipeline Mgmt",
        description: "Implement rigorous pipeline management with AI-powered forecasting, risk analysis, and deal health scoring to improve win rates.",
        color: "var(--accent-blue)"
      },
      {
        title: "Team Development",
        description: "Build high-performing sales teams using AI tools for coaching, skill gap analysis, call analysis, and personalized training programs.",
        color: "var(--accent-blue)"
      },
      {
        title: "Forecasting",
        description: "Develop accurate revenue forecasting models leveraging AI to analyze historical patterns, pipeline velocity, and external signals.",
        color: "var(--accent-blue)"
      },
      {
        title: "Commercials",
        description: "Structure deals and commercial terms that accelerate closes and drive expansion, using AI insights on pricing and packaging optimization.",
        color: "var(--accent-blue)"
      },
      {
        title: "Metrics",
        description: "Define sales KPIs and performance dashboards with AI-driven analytics to identify top performers, coaching opportunities, and process bottlenecks.",
        color: "var(--accent-blue)"
      }
    ],
    cs: [
      {
        title: "Treatment Strategy",
        description: "Design customer segmentation and treatment models using AI to predict risk, identify expansion opportunities, and optimize resource allocation.",
        color: "var(--accent-yellow)"
      },
      {
        title: "QBR",
        description: "Create impactful quarterly business reviews enhanced by AI-generated insights on usage patterns, value realization, and growth opportunities.",
        color: "var(--accent-yellow)"
      },
      {
        title: "Cross-Sell",
        description: "Identify and execute cross-sell opportunities using AI to analyze product fit, usage signals, and optimal timing for expansion conversations.",
        color: "var(--accent-yellow)"
      },
      {
        title: "Renewals",
        description: "Build proactive renewal processes with AI-powered health scoring, churn prediction, and automated early warning systems for at-risk accounts.",
        color: "var(--accent-yellow)"
      },
      {
        title: "Metrics",
        description: "Establish customer success KPIs including NRR, GRR, and customer health scores, powered by AI analytics to predict and prevent churn.",
        color: "var(--accent-yellow)"
      }
    ],
    channels: [
      {
        title: "Structure",
        description: "Design partner and channel programs optimized for scale, using AI to identify ideal partner profiles and predict program performance.",
        color: "var(--slate)"
      },
      {
        title: "Priority",
        description: "Prioritize channel investments using AI-driven analysis of partner performance, market coverage, and revenue potential by segment.",
        color: "var(--slate)"
      },
      {
        title: "Commercials",
        description: "Create partner commercial models and compensation structures that drive the right behaviors, informed by AI benchmarking and performance data.",
        color: "var(--slate)"
      },
      {
        title: "Metrics",
        description: "Implement channel performance tracking with AI-powered analytics on partner productivity, pipeline contribution, and program ROI.",
        color: "var(--slate)"
      }
    ]
  };

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
        {/* Marketing */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative portfolio-box">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-red)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase portfolio-box-header">
            Marketing
          </h2>
          <div className="portfolio-box-content">
            <div className="portfolio-box-list">
              {services.marketing.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start"
                  onMouseEnter={() => setHoveredService(`marketing-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <span style={{ color: service.color }} className="mr-4 text-xl flex-shrink-0">—</span>
                  <span className={`text-base transition-colors cursor-pointer ${hoveredService === `marketing-${index}` ? 'text-[var(--black)] font-semibold' : 'text-[var(--charcoal)]'}`}>
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="portfolio-box-description">
              {hoveredService?.startsWith('marketing-') ? (
                <p className="text-[var(--charcoal)] text-sm leading-relaxed">
                  {services.marketing[parseInt(hoveredService.split('-')[1])].description}
                </p>
              ) : (
                <p className="text-[var(--slate)] text-sm italic">
                  Hover over a service to see details
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Sales */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative portfolio-box">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase portfolio-box-header">
            Sales
          </h2>
          <div className="portfolio-box-content">
            <div className="portfolio-box-list">
              {services.sales.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start"
                  onMouseEnter={() => setHoveredService(`sales-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <span style={{ color: service.color }} className="mr-4 text-xl flex-shrink-0">—</span>
                  <span className={`text-base transition-colors cursor-pointer ${hoveredService === `sales-${index}` ? 'text-[var(--black)] font-semibold' : 'text-[var(--charcoal)]'}`}>
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="portfolio-box-description">
              {hoveredService?.startsWith('sales-') ? (
                <p className="text-[var(--charcoal)] text-sm leading-relaxed">
                  {services.sales[parseInt(hoveredService.split('-')[1])].description}
                </p>
              ) : (
                <p className="text-[var(--slate)] text-sm italic">
                  Hover over a service to see details
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CS */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative portfolio-box">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase portfolio-box-header">
            CS
          </h2>
          <div className="portfolio-box-content">
            <div className="portfolio-box-list">
              {services.cs.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start"
                  onMouseEnter={() => setHoveredService(`cs-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <span style={{ color: service.color }} className="mr-4 text-xl flex-shrink-0">—</span>
                  <span className={`text-base transition-colors cursor-pointer ${hoveredService === `cs-${index}` ? 'text-[var(--black)] font-semibold' : 'text-[var(--charcoal)]'}`}>
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="portfolio-box-description">
              {hoveredService?.startsWith('cs-') ? (
                <p className="text-[var(--charcoal)] text-sm leading-relaxed">
                  {services.cs[parseInt(hoveredService.split('-')[1])].description}
                </p>
              ) : (
                <p className="text-[var(--slate)] text-sm italic">
                  Hover over a service to see details
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Channels */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] relative portfolio-box">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--slate)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase portfolio-box-header">
            Channels
          </h2>
          <div className="portfolio-box-content">
            <div className="portfolio-box-list">
              {services.channels.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start"
                  onMouseEnter={() => setHoveredService(`channels-${index}`)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <span style={{ color: service.color }} className="mr-4 text-xl flex-shrink-0">—</span>
                  <span className={`text-base transition-colors cursor-pointer ${hoveredService === `channels-${index}` ? 'text-[var(--black)] font-semibold' : 'text-[var(--charcoal)]'}`}>
                    {service.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="portfolio-box-description">
              {hoveredService?.startsWith('channels-') ? (
                <p className="text-[var(--charcoal)] text-sm leading-relaxed">
                  {services.channels[parseInt(hoveredService.split('-')[1])].description}
                </p>
              ) : (
                <p className="text-[var(--slate)] text-sm italic">
                  Hover over a service to see details
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
