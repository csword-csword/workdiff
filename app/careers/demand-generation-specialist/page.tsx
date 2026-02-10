"use client";

import { useState } from "react";

export default function DemandGenSpecialist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    resume: null as File | null,
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (you'll need to implement actual backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1000);
  };

  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 32px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <article className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] relative" style={{ padding: '3rem', paddingTop: '3.5rem' }}>
        <div
          className="bg-[var(--accent-blue)]"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px'
          }}
        />

        <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase" style={{ marginBottom: '1rem', lineHeight: '1.1' }}>
          Demand Generation Specialist
        </h1>

        <div style={{ marginBottom: '2rem' }}>
          <p className="text-[var(--charcoal)] mb-1"><strong>Team:</strong> GTM Advisory</p>
          <p className="text-[var(--charcoal)] mb-1"><strong>Reports to:</strong> Managing Director / Engagement Lead</p>
          <p className="text-[var(--charcoal)] mb-1"><strong>Location:</strong> Remote</p>
          <p className="text-[var(--charcoal)]"><strong>Employment Type:</strong> Contract / Consulting</p>
        </div>

        <div className="text-[var(--charcoal)]" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2rem', marginBottom: '1rem' }}>
            About the Role
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            We're looking for a Demand Generation Specialist to join our GTM advisory practice. In this consulting role, you'll work across multiple client engagements — helping B2B SaaS companies build, optimize, and scale their demand generation engines. You'll bring both strategic thinking and hands-on execution, and you'll differentiate our practice by putting the latest AI tools to work across every stage of the funnel.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            This is a role for someone who thrives in a client-facing, fast-paced consulting environment. You'll manage competing priorities across engagements, ramp quickly into new industries and tech stacks, and deliver high-quality work under tight timelines. You'll partner with our advisory team and embed directly with client marketing, sales, and revenue operations teams to turn strategy into measurable pipeline impact.
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            What You'll Do
          </h2>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Client Engagement & Advisory
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Manage multiple concurrent client engagements, each with distinct goals, timelines, and stakeholders.</li>
            <li style={{ marginBottom: '0.5rem' }}>Serve as a trusted demand gen advisor to client marketing leaders — diagnosing gaps, recommending strategies, and driving execution.</li>
            <li style={{ marginBottom: '0.5rem' }}>Ramp quickly into new client environments, learning their ICP, tech stack, and competitive landscape to deliver value fast.</li>
            <li style={{ marginBottom: '0.5rem' }}>Deliver polished, client-ready work products including campaign plans, performance reports, and strategic recommendations under tight deadlines.</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Campaign Strategy & Execution
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Plan, launch, and optimize integrated demand generation campaigns across paid media, email, content syndication, SEO/SEM, webinars, and ABM programs on behalf of clients.</li>
            <li style={{ marginBottom: '0.5rem' }}>Build and manage full-funnel nurture sequences that move prospects from awareness through to sales-qualified pipeline.</li>
            <li style={{ marginBottom: '0.5rem' }}>Advise on campaign budgets and allocate spend based on performance data and pipeline contribution.</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            AI-Powered Marketing Operations
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Evaluate, implement, and champion AI tools across the demand gen stack — including generative AI for content creation, AI-driven audience segmentation, predictive lead scoring, and automated campaign optimization.</li>
            <li style={{ marginBottom: '0.5rem' }}>Use AI-assisted analytics to surface insights from campaign data, identify high-intent signals, and recommend next-best actions.</li>
            <li style={{ marginBottom: '0.5rem' }}>Build and refine AI-augmented workflows for ad copy generation, A/B testing, personalization at scale, and lead enrichment.</li>
            <li style={{ marginBottom: '0.5rem' }}>Stay current on the rapidly evolving AI landscape and proactively bring new tools and techniques to both the advisory team and clients.</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Performance Analysis & Optimization
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Track and report on key demand gen metrics: MQLs, SQLs, pipeline generated, cost-per-lead, conversion rates, and campaign ROI.</li>
            <li style={{ marginBottom: '0.5rem' }}>Design and run experiments (A/B and multivariate) to continuously improve channel performance.</li>
            <li style={{ marginBottom: '0.5rem' }}>Partner with client Revenue Operations teams to ensure clean data flow between marketing automation platforms, CRM, and reporting tools.</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Cross-Functional Collaboration
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Embed with client teams and align closely with their Sales, Product Marketing, and RevOps stakeholders.</li>
            <li style={{ marginBottom: '0.5rem' }}>Translate client positioning and messaging into high-converting campaign assets.</li>
            <li style={{ marginBottom: '0.5rem' }}>Collaborate with internal advisory colleagues to share best practices, refine playbooks, and elevate the firm's demand gen methodology.</li>
          </ul>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            What We're Looking For
          </h2>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Experience
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>3–5 years of experience in demand generation, growth marketing, or digital marketing — ideally with exposure to multiple B2B SaaS companies, whether through consulting, agency work, or in-house roles across different organizations.</li>
            <li style={{ marginBottom: '0.5rem' }}>Prior consulting, agency, or client services experience strongly preferred — you know how to manage stakeholder expectations, context-switch between engagements, and deliver high-quality work under time pressure.</li>
            <li style={{ marginBottom: '0.5rem' }}>Demonstrated track record of building campaigns that directly contributed to pipeline and revenue targets.</li>
            <li style={{ marginBottom: '0.5rem' }}>Hands-on experience with marketing automation platforms (e.g., HubSpot, Marketo, Pardot) and CRM systems (e.g., Salesforce).</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            AI & Technology Skills
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Practical, working experience with AI-powered marketing tools — not just awareness, but actual hands-on usage in day-to-day workflows.</li>
            <li style={{ marginBottom: '0.5rem' }}>Familiarity with generative AI platforms (e.g., ChatGPT, Claude, Jasper, Midjourney) for content creation, ideation, and campaign development.</li>
            <li style={{ marginBottom: '0.5rem' }}>Experience using AI for at least two of the following: predictive analytics, audience segmentation, lead scoring, ad optimization, or personalization.</li>
            <li style={{ marginBottom: '0.5rem' }}>Comfort with prompt engineering and an ability to evaluate new AI tools critically — understanding both their potential and their limitations.</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Core Skills
          </h3>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Strong analytical mindset with the ability to translate data into actionable campaign decisions.</li>
            <li style={{ marginBottom: '0.5rem' }}>Proficiency with paid media platforms (Google Ads, LinkedIn Ads, Meta) and SEO/SEM fundamentals.</li>
            <li style={{ marginBottom: '0.5rem' }}>Working knowledge of leading AI platforms and how they integrate into the marketing stack — including OpenAI (ChatGPT), Anthropic (Claude), Google Gemini, Perplexity, and emerging tools like Copilot, Jasper, and Synthesia.</li>
            <li style={{ marginBottom: '0.5rem' }}>Experience with ABM tools and strategies (e.g., Demandbase, 6sense, Terminus) is a strong plus.</li>
            <li style={{ marginBottom: '0.5rem' }}>Excellent project management skills — you can juggle multiple clients, campaigns, and deadlines simultaneously without dropping the ball.</li>
            <li style={{ marginBottom: '0.5rem' }}>Clear, concise communicator who can present results and recommendations to client executives and internal leadership with equal confidence.</li>
            <li style={{ marginBottom: '0.5rem' }}>Comfortable operating with ambiguity — you can step into a new client engagement with limited context and quickly get oriented.</li>
          </ul>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            Nice to Have
          </h2>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Experience with intent data platforms and buyer signal tools.</li>
            <li style={{ marginBottom: '0.5rem' }}>Familiarity with data enrichment tools (e.g., ZoomInfo, Clearbit, Apollo).</li>
            <li style={{ marginBottom: '0.5rem' }}>Background in building or managing webinar and virtual event programs.</li>
            <li style={{ marginBottom: '0.5rem' }}>Exposure to product-led growth motions alongside traditional demand gen.</li>
            <li style={{ marginBottom: '0.5rem' }}>Understanding of Generative Engine Optimization (GEO) — optimizing content and brand presence for visibility within AI-powered search engines and answer engines (e.g., Perplexity, Google AI Overviews, ChatGPT search).</li>
            <li style={{ marginBottom: '0.5rem' }}>Basic proficiency in SQL, Python, or BI tools (e.g., Looker, Tableau) for self-serve reporting.</li>
          </ul>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            Why Work With Us
          </h2>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Variety and growth.</strong> Work across multiple clients, industries, and GTM challenges — no two engagements are the same.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Shape the playbook.</strong> You won't just run campaigns — you'll help define how our advisory practice uses AI to build next-generation demand engines for clients.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Real impact.</strong> Your work directly drives pipeline and revenue for the companies we advise. Results are visible and measurable.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Continuous learning.</strong> Exposure to diverse tech stacks, team structures, and go-to-market models accelerates your professional growth faster than any single in-house role.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Great people.</strong> A collaborative, low-ego advisory team that values sharp thinking and high-quality execution.</li>
          </ul>
        </div>

        {/* Application Form */}
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '3px solid var(--black)' }}>
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginBottom: '1.5rem' }}>
            Apply for This Position
          </h2>

          {submitSuccess ? (
            <div className="bg-[var(--accent-blue)] text-white p-6 border-2 border-[var(--black)]">
              <p className="text-lg font-semibold mb-2">Thank you for your application!</p>
              <p>We've received your submission and will be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label className="block text-[var(--charcoal)] font-semibold mb-2" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full border-2 border-[var(--black)] p-3 text-[var(--charcoal)]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label className="block text-[var(--charcoal)] font-semibold mb-2" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full border-2 border-[var(--black)] p-3 text-[var(--charcoal)]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label className="block text-[var(--charcoal)] font-semibold mb-2" htmlFor="linkedin">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  id="linkedin"
                  className="w-full border-2 border-[var(--black)] p-3 text-[var(--charcoal)]"
                  placeholder="https://linkedin.com/in/yourprofile"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label className="block text-[var(--charcoal)] font-semibold mb-2" htmlFor="resume">
                  Resume / CV *
                </label>
                <input
                  type="file"
                  id="resume"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full border-2 border-[var(--black)] p-3 text-[var(--charcoal)]"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                />
                <p className="text-sm text-[var(--slate)] mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label className="block text-[var(--charcoal)] font-semibold mb-2" htmlFor="coverLetter">
                  Cover Letter / Note on AI Experience *
                </label>
                <textarea
                  id="coverLetter"
                  required
                  rows={6}
                  className="w-full border-2 border-[var(--black)] p-3 text-[var(--charcoal)]"
                  placeholder="Tell us about your experience with AI tools in marketing contexts and share a campaign you're proud of..."
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--accent-blue)] text-white font-[var(--font-bebas)] text-xl tracking-wider uppercase px-8 py-4 border-3 border-[var(--black)] shadow-[4px_4px_0_var(--black)] hover:shadow-[6px_6px_0_var(--black)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px solid var(--slate)' }}>
          <p className="text-[var(--slate)] text-sm" style={{ fontStyle: 'italic' }}>
            We are an equal opportunity employer and value diversity. We do not discriminate on the basis of race, religion, color, national origin, gender, sexual orientation, age, marital status, veteran status, or disability status.
          </p>
        </div>
      </article>
    </main>
  );
}
