export default function AutonomousAgentsGTMReadiness() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 32px' }}>
      <div className="h-1 w-40 bg-[var(--accent-blue)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <article className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] relative" style={{ padding: '3rem', paddingTop: '3.5rem', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px',
            backgroundColor: '#457b9d'
          }}
        />

        <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase" style={{ marginBottom: '1rem', lineHeight: '1.1' }}>
          Why Your GTM Team Isn't Ready for Autonomous Agents (Yet)
        </h1>

        <p className="text-[var(--slate)] text-sm mb-8">By Charles Sword</p>

        <div className="text-[var(--charcoal)]" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            OpenAI's new autonomous agent capabilities are generating massive excitement. The promise is intoxicating: AI agents that can execute complex GTM workflows without constant human supervision. Deploy an agent to run outbound campaigns. Let AI handle customer onboarding. Automate your entire demand generation engine.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            But here's the uncomfortable truth: <strong>most early-stage GTM organizations are nowhere near ready to deploy autonomous agents</strong>. And rushing to adopt them anyway is a recipe for expensive failure.
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            The Problem: Process Maturity, Not Technology
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The limiting factor isn't the AI. It's your organization.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Most GTM teams struggle to create repeatable motions even when they're closely managed by experienced operators. When you remove human oversight and hand execution to an autonomous agent, those problems don't disappear—they amplify.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            An autonomous agent can only be as good as the playbooks, processes, and systems it's working from. And in most early-stage companies, those foundations are either missing or woefully underdocumented.
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            What's Missing in Most GTM Organizations
          </h2>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            1. Documented Playbooks
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Your top sales rep closes deals at 40%. Your newest rep closes at 15%. The difference? The top rep has internalized a discovery process, objection handling framework, and qualification criteria that exist only in their head.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            An autonomous agent can't read minds. It needs explicit, documented playbooks that define:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>What questions to ask in discovery and when</li>
            <li style={{ marginBottom: '0.5rem' }}>How to qualify deals (and disqualify bad fits)</li>
            <li style={{ marginBottom: '0.5rem' }}>What objections mean "not now" vs. "not ever"</li>
            <li style={{ marginBottom: '0.5rem' }}>When to escalate and to whom</li>
            <li style={{ marginBottom: '0.5rem' }}>What constitutes a successful handoff between stages</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            If your best practices live in Slack messages and tribal knowledge, you're not ready for autonomous agents.
          </p>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            2. Clear ICP Definition
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            "We sell to B2B SaaS companies" is not an ICP. An autonomous agent needs precision:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Company size (ARR, employees, customers)</li>
            <li style={{ marginBottom: '0.5rem' }}>Growth stage and funding profile</li>
            <li style={{ marginBottom: '0.5rem' }}>Tech stack and platform dependencies</li>
            <li style={{ marginBottom: '0.5rem' }}>Buyer personas and decision-making structure</li>
            <li style={{ marginBottom: '0.5rem' }}>Budget authority and procurement process</li>
            <li style={{ marginBottom: '0.5rem' }}>Pain points that create urgency to buy</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            Without this clarity, your agent will waste cycles (and your money) prospecting into accounts that will never convert.
          </p>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            3. Repeatable Workflows
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            Your demand gen process shouldn't be "try a bunch of stuff and see what works." Your customer onboarding shouldn't be "get them on a call and improvise."
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            Autonomous agents thrive on repeatable workflows with clear inputs, outputs, decision points, and success criteria. If your current process is "it depends" and "use your judgment," you're asking an AI to fill in gaps that even your human team can't articulate.
          </p>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            4. Data Quality and System Integration
          </h3>

          <p style={{ marginBottom: '1.5rem' }}>
            An autonomous agent is only as good as the data it can access. If your CRM is a mess, your marketing automation is disconnected from sales, and customer success data lives in spreadsheets, the agent will make decisions based on incomplete or contradictory information.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            You need:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Clean, deduplicated contact and account data</li>
            <li style={{ marginBottom: '0.5rem' }}>Integrated systems where data flows seamlessly</li>
            <li style={{ marginBottom: '0.5rem' }}>Consistent field definitions and data standards</li>
            <li style={{ marginBottom: '0.5rem' }}>Reliable engagement and behavioral tracking</li>
            <li style={{ marginBottom: '0.5rem' }}>Historical data to train pattern recognition</li>
          </ul>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            The Risk of Premature Deployment
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            What happens when you deploy autonomous agents before you're ready?
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Garbage in, garbage out—at scale.</strong> The agent will execute flawed processes faster and more consistently than any human ever could. You'll generate bad leads, send generic outreach, misqualify deals, and deliver inconsistent customer experiences—all with AI-powered efficiency.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Loss of control without visibility.</strong> When a human makes a bad call, you can course-correct in real time. When an autonomous agent goes off the rails, you might not notice until it's burned through your pipeline or damaged customer relationships.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Expensive experimentation.</strong> These agents aren't free. Compute costs, API calls, and tool integrations add up fast. If you're using AI to execute broken processes, you're just spending more money to fail faster.
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            The Path Forward: Process First, Automation Second
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The good news? You don't have to choose between autonomous agents and GTM effectiveness. You just have to get the order right.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Step 1: Build the foundation.</strong> Document your playbooks. Define your ICP with precision. Create repeatable workflows that produce consistent results when executed by humans.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Step 2: Clean your systems.</strong> Integrate your GTM stack. Establish data quality standards. Create dashboards that surface the metrics that matter. Make sure information flows where it needs to go.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Step 3: Deploy AI strategically.</strong> Start with assistive AI, not autonomous AI. Use AI to augment human decision-making—call analysis, email drafting, lead scoring—before you hand over execution.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Step 4: Scale what works.</strong> Once your processes are documented, your systems are clean, and AI is successfully assisting your team, then you're ready to experiment with autonomous agents in controlled, low-risk workflows.
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            How We Help
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            This is exactly what our <strong>AI-First Platform Deployment</strong> offering addresses. We help you:
          </p>

          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Redesign GTM workflows</strong> with AI-first principles from the ground up</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Select and implement platforms</strong> that support AI-enhanced execution</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Document playbooks and processes</strong> that create repeatability</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Integrate your tech stack</strong> so data flows seamlessly</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Deploy AI strategically</strong> where it drives the most value</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            We don't just help you adopt AI. We help you build the process maturity and system infrastructure that makes AI adoption successful.
          </p>

          <div style={{ background: 'var(--cream)', padding: '1.5rem', borderLeft: '3px solid #457b9d', marginTop: '2.5rem' }}>
            <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Ready to build the foundation for AI-powered GTM?</p>
            <p style={{ marginBottom: '1rem' }}>
              Learn more about our <a href="/services/ai-platform-deployment" className="text-[var(--accent-blue)] hover:underline">AI-First Platform Deployment</a> offering.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#4a5568', fontStyle: 'italic' }}>
              Don't deploy autonomous agents on broken processes. Build the repeatability first, then scale with AI.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
