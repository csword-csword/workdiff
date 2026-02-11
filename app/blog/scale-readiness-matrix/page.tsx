import Image from "next/image";

export default function ScaleReadinessMatrix() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 32px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <article className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] relative" style={{ padding: '3rem', paddingTop: '3.5rem' }}>
        <div
          className="bg-[var(--accent-yellow)]"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '5px'
          }}
        />

        <h1 className="font-[var(--font-bebas)] text-5xl tracking-wider text-[var(--black)] uppercase" style={{ marginBottom: '1rem', lineHeight: '1.1' }}>
          The Scale Readiness Matrix: Why Most Companies Invest in Growth at Exactly the Wrong Time
        </h1>

        <p className="text-[var(--slate)] text-sm mb-8">By Charles Sword</p>

        <div className="text-[var(--charcoal)] blog-content" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            Most early-stage companies fail to scale not because they lack ambition, capital, or talent. They fail because they don't understand where they actually are in their journey — and what that means for how they should invest in growth.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The mistake is almost always the same: <strong>premature scaling</strong>. They see some early traction, raise a Series A, and immediately start hiring a VP of Sales, building out a demand gen team, and ramping spend on paid channels. Six months later, pipeline is weak, conversion rates are terrible, CAC is out of control, and the board is asking hard questions.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The problem isn't execution. It's diagnosis. They invested in <strong>scaling</strong> when they should have been <strong>fixing</strong> or <strong>building repeatability</strong>.
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            The Two Dimensions That Matter
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Before you invest heavily in growth, you need to honestly assess where you stand on two critical dimensions:
          </p>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            1. Product Adoption (Vertical Axis)
          </h3>

          <p style={{ marginBottom: '1rem' }}>
            Is your product ready to scale? Do customers actually adopt it, get value from it, and stick around?
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>High Product Adoption</strong> means:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Strong retention and low churn</li>
            <li style={{ marginBottom: '0.5rem' }}>Clear product-market fit with a well-defined ICP</li>
            <li style={{ marginBottom: '0.5rem' }}>Customers are getting to value quickly (strong time-to-value)</li>
            <li style={{ marginBottom: '0.5rem' }}>Usage patterns show the product is solving a real problem</li>
            <li style={{ marginBottom: '0.5rem' }}>Net retention is solid (ideally &gt;100%)</li>
          </ul>

          <p style={{ marginBottom: '0.5rem' }}><strong>Low Product Adoption</strong> means:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>High churn or weak retention signals</li>
            <li style={{ marginBottom: '0.5rem' }}>Customers struggle to get value or reach "aha moments"</li>
            <li style={{ marginBottom: '0.5rem' }}>Product-market fit is unclear or unproven</li>
            <li style={{ marginBottom: '0.5rem' }}>Your ICP is still a hypothesis, not a validated segment</li>
            <li style={{ marginBottom: '0.5rem' }}>You're still iterating on core functionality</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            2. GTM Repeatability (Horizontal Axis)
          </h3>

          <p style={{ marginBottom: '1rem' }}>
            Can you predictably generate demand and convert it into revenue?
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>High GTM Repeatability</strong> means:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Consistent pipeline generation from repeatable channels</li>
            <li style={{ marginBottom: '0.5rem' }}>Predictable conversion rates across the funnel</li>
            <li style={{ marginBottom: '0.5rem' }}>Clear understanding of what works (and what doesn't) in demand gen</li>
            <li style={{ marginBottom: '0.5rem' }}>Sales processes are documented, measurable, and scalable</li>
            <li style={{ marginBottom: '0.5rem' }}>You know your unit economics and they're healthy</li>
          </ul>

          <p style={{ marginBottom: '0.5rem' }}><strong>Low GTM Repeatability</strong> means:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Pipeline is unpredictable or heavily founder-led</li>
            <li style={{ marginBottom: '0.5rem' }}>Conversion rates are inconsistent or poorly understood</li>
            <li style={{ marginBottom: '0.5rem' }}>You're still experimenting with channels and messaging</li>
            <li style={{ marginBottom: '0.5rem' }}>Sales process is ad hoc and varies by rep</li>
            <li style={{ marginBottom: '0.5rem' }}>Unit economics are uncertain or unattractive</li>
          </ul>

          <Image
            src="/images/blog/scale-readiness-matrix.png"
            alt="Scale Readiness Matrix showing four quadrants based on Product Adoption and GTM Repeatability"
            width={1200}
            height={900}
            className="w-full h-auto border-2 border-[var(--black)]"
            style={{ marginTop: '2rem', marginBottom: '2rem' }}
          />

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            The Four Quadrants: What to Do in Each
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Where you land in this matrix should dictate your investment strategy. Get this wrong, and you'll burn cash trying to scale something that isn't ready.
          </p>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>
            Quadrant 1: GTM Risk (Low Adoption, Low Repeatability)
          </h3>

          <p style={{ marginBottom: '1rem' }}>
            <strong>Reality Check</strong>: Your product isn't proven, and neither is your go-to-market motion. You're in the highest-risk zone.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>What to Do</strong>:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Do not scale</strong>. Resist the pressure to hire aggressively or ramp spend.</li>
            <li style={{ marginBottom: '0.5rem' }}>Focus on <strong>product iteration</strong> and finding real product-market fit.</li>
            <li style={{ marginBottom: '0.5rem' }}>Run small, scrappy GTM experiments to learn what resonates.</li>
            <li style={{ marginBottom: '0.5rem' }}>Keep your team lean. Use founders, early employees, or fractional talent.</li>
            <li style={{ marginBottom: '0.5rem' }}>Prioritize learning velocity over growth metrics.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Investment Approach</strong>: Minimal. Spend only what's needed to test hypotheses and iterate quickly. Preserve runway.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>Danger Signs You're Here</strong>:</p>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Customers sign up but don't use the product</li>
            <li style={{ marginBottom: '0.5rem' }}>Churn is high and unpredictable</li>
            <li style={{ marginBottom: '0.5rem' }}>Every deal feels like a one-off</li>
            <li style={{ marginBottom: '0.5rem' }}>You're still changing your pitch and ICP regularly</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>
            Quadrant 2: Fix It (High Adoption, Low Repeatability)
          </h3>

          <p style={{ marginBottom: '1rem' }}>
            <strong>Reality Check</strong>: Your product is strong — customers love it, use it, and renew. But your GTM engine is broken or non-existent. You're leaving revenue on the table.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>What to Do</strong>:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Build GTM repeatability before scaling</strong>. Figure out how to consistently generate and convert pipeline.</li>
            <li style={{ marginBottom: '0.5rem' }}>Invest in demand generation experimentation: test channels, messaging, and offers.</li>
            <li style={{ marginBottom: '0.5rem' }}>Formalize your sales process: document what works, measure conversion rates, and train reps on a consistent methodology.</li>
            <li style={{ marginBottom: '0.5rem' }}>Hire for <strong>GTM operations and experimentation</strong>, not just quota-carrying reps.</li>
            <li style={{ marginBottom: '0.5rem' }}>Get your unit economics dialed in. Understand CAC, payback period, and LTV.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Investment Approach</strong>: Moderate. Invest in building repeatable GTM systems and learning what drives efficient growth. Don't overhire sales or marketing yet.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>You're Here If</strong>:</p>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Customers who use your product stick around and expand</li>
            <li style={{ marginBottom: '0.5rem' }}>But pipeline is inconsistent, founder-dependent, or driven by referrals</li>
            <li style={{ marginBottom: '0.5rem' }}>You're not sure which marketing channels actually work</li>
            <li style={{ marginBottom: '0.5rem' }}>Sales process feels chaotic and success is rep-dependent</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>
            Quadrant 3: Churn Risk (Low Adoption, High Repeatability)
          </h3>

          <p style={{ marginBottom: '1rem' }}>
            <strong>Reality Check</strong>: You've figured out how to generate demand and close deals. But customers aren't sticking around. You're a leaky bucket.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>What to Do</strong>:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Do not pour more into top-of-funnel</strong>. You'll just accelerate churn and destroy unit economics.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Fix the product and onboarding experience</strong> so customers actually get value.</li>
            <li style={{ marginBottom: '0.5rem' }}>Invest in customer success to improve activation, adoption, and time-to-value.</li>
            <li style={{ marginBottom: '0.5rem' }}>Revisit your ICP. You may be selling to the wrong customers — people who buy but don't get value.</li>
            <li style={{ marginBottom: '0.5rem' }}>Pause aggressive scaling until retention improves.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Investment Approach</strong>: Defensive. Pull back on demand gen spend. Redirect budget toward product, onboarding, and customer success.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>You're Here If</strong>:</p>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>You can predictably generate pipeline and close deals</li>
            <li style={{ marginBottom: '0.5rem' }}>But customers churn quickly or don't renew</li>
            <li style={{ marginBottom: '0.5rem' }}>Usage drops off after onboarding</li>
            <li style={{ marginBottom: '0.5rem' }}>NRR is below 100% and declining</li>
          </ul>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '2rem', marginBottom: '0.75rem' }}>
            Quadrant 4: Scale It (High Adoption, High Repeatability)
          </h3>

          <p style={{ marginBottom: '1rem' }}>
            <strong>Reality Check</strong>: Congratulations. Your product works, customers love it, and your GTM motion is repeatable. This is the <strong>only</strong> quadrant where aggressive scaling makes sense.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>What to Do</strong>:</p>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Invest big in growth</strong>. Hire aggressively in sales, marketing, and customer success.</li>
            <li style={{ marginBottom: '0.5rem' }}>Pour budget into your proven channels and double down on what's working.</li>
            <li style={{ marginBottom: '0.5rem' }}>Build out your GTM org with experienced leaders who can scale systems and teams.</li>
            <li style={{ marginBottom: '0.5rem' }}>Expand into adjacent segments or geographies if unit economics support it.</li>
            <li style={{ marginBottom: '0.5rem' }}>Accelerate. You've earned the right to step on the gas.</li>
          </ul>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Investment Approach</strong>: Aggressive. This is where you deploy capital to capture market share and build category leadership.
          </p>

          <p style={{ marginBottom: '0.5rem' }}><strong>You're Here If</strong>:</p>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Retention is strong (NRR &gt; 100%)</li>
            <li style={{ marginBottom: '0.5rem' }}>Pipeline is predictable and driven by repeatable channels</li>
            <li style={{ marginBottom: '0.5rem' }}>Conversion rates are consistent and healthy</li>
            <li style={{ marginBottom: '0.5rem' }}>Unit economics are attractive (reasonable CAC payback, strong LTV)</li>
            <li style={{ marginBottom: '0.5rem' }}>You have documented, scalable sales and marketing processes</li>
          </ul>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            Why Most Companies Get This Wrong
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The typical mistake is moving from <strong>Quadrant 1 (GTM Risk)</strong> or <strong>Quadrant 2 (Fix It)</strong> directly to behaving like you're in <strong>Quadrant 4 (Scale It)</strong>.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            You raise a Series A. The board expects growth. You feel pressure to "act like a real company." So you hire a VP of Sales who builds a team of AEs. You hire a demand gen lead who ramps paid spend. You invest in Salesforce, Outreach, 6sense, and a full martech stack.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            But if you haven't proven product adoption <strong>and</strong> GTM repeatability, all you've done is <strong>scale your inefficiencies</strong>. You burn through cash faster, churn accelerates, CAC skyrockets, and the math breaks.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            <strong>Scaling is not a strategy. It's a consequence of having the right foundation.</strong>
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            How to Assess Where You Really Are
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            Be brutally honest. Here are the questions to ask:
          </p>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            Product Adoption Assessment
          </h3>

          <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>What's our gross retention rate? (If it's below 85%, you have a product problem.)</li>
            <li style={{ marginBottom: '0.5rem' }}>What's our net retention rate? (If it's below 100%, customers aren't expanding.)</li>
            <li style={{ marginBottom: '0.5rem' }}>What % of customers reach our "aha moment" or activate within 30 days?</li>
            <li style={{ marginBottom: '0.5rem' }}>How long does it take for customers to see measurable value?</li>
            <li style={{ marginBottom: '0.5rem' }}>Do customers renew <strong>and expand</strong>, or do they churn quietly?</li>
          </ol>

          <h3 className="font-bold text-[var(--black)]" style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>
            GTM Repeatability Assessment
          </h3>

          <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Can we predictably generate pipeline without founder involvement?</li>
            <li style={{ marginBottom: '0.5rem' }}>Do we know which channels drive qualified leads and at what cost?</li>
            <li style={{ marginBottom: '0.5rem' }}>Are our conversion rates consistent across reps and over time?</li>
            <li style={{ marginBottom: '0.5rem' }}>Do we have a documented, repeatable sales process?</li>
            <li style={{ marginBottom: '0.5rem' }}>Can we confidently forecast revenue three months out?</li>
          </ol>

          <p style={{ marginBottom: '1.5rem' }}>
            If you can't answer these questions with data, <strong>you're not ready to scale.</strong>
          </p>

          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider text-[var(--black)] uppercase" style={{ marginTop: '2.5rem', marginBottom: '1rem' }}>
            Final Thoughts: Timing Is Everything
          </h2>

          <p style={{ marginBottom: '1.5rem' }}>
            The companies that scale successfully don't do it because they're smarter or better funded. They do it because they <strong>invested in the right things at the right time</strong>.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            If your product isn't ready, <strong>fix it before you scale GTM</strong>.<br />
            If your GTM motion isn't repeatable, <strong>build repeatability before you hire aggressively</strong>.<br />
            And if both are ready, <strong>scale hard and fast</strong> before your competitors do.
          </p>

          <p style={{ marginBottom: '1.5rem' }}>
            The Scale Readiness Matrix isn't just a framework. It's a forcing function for honest self-assessment. Most companies lie to themselves about where they are because the truth is uncomfortable. But discomfort now is better than a death spiral later.
          </p>

          <p style={{ marginBottom: '1.5rem', fontWeight: 'bold' }}>
            Know where you are. Invest accordingly. Scale when you're ready — not before.
          </p>

          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '2px solid var(--slate)' }}>
            <p className="text-[var(--charcoal)]" style={{ fontStyle: 'italic' }}>
              Want help diagnosing where you stand and building the right growth strategy for your stage? That's what we do. <a href="/services/portfolio-companies" className="text-[var(--accent-yellow)] hover:underline">Learn more about our advisory services</a>.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
