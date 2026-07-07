import Image from "next/image";

const INSIGHTS = [
  {
    href: "/blog/early-stage-gtm-peril",
    eyebrow: "Strategy",
    title: "The $2M–10M Peril",
    body: "Why most startups fail to scale GTM—and they almost always fail in the same place: the race from $2M to $10M in ARR.",
  },
  {
    href: "/blog/ai-agents-rewriting-gtm-roles",
    eyebrow: "AI & GTM",
    title: "From Playbooks to Platforms",
    body: "AI agents are redefining BDR and AE roles—from individual contributors executing playbooks to operators overseeing fleets of digital workers.",
  },
  {
    href: "/blog/autonomous-agents-gtm-readiness",
    eyebrow: "Readiness",
    title: "Why Your GTM Team Isn’t Ready for Autonomous Agents",
    body: "The hype around autonomous AI agents is real—but most GTM teams lack the process maturity to deploy them successfully.",
  },
];

export default function V2Page() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="v2-hero">
        <div className="v2-hero-inner">
          <div className="v2-badge">
            <span className="v2-badge-dot" />
            GTM Advisory for Early-Stage B2B
          </div>

          <h1 className="v2-headline">
            Here&apos;s to the{" "}
            <span className="v2-headline-grad">crazy ones</span>
          </h1>

          <p className="v2-subhead">
            Apple&apos;s &ldquo;Think Different&rdquo; inspired Work Different in 2013.
            We help early-stage B2B technology companies scale go-to-market
            with bold thinking and AI-first strategy.
          </p>

          <div className="v2-hero-actions">
            <a href="/services" className="v2-btn-primary">
              Explore Services
            </a>
            <a href="/about" className="v2-btn-secondary">
              Our Story →
            </a>
          </div>
        </div>
      </section>

      <hr className="v2-divider" />

      {/* ── Insights ── */}
      <section className="v2-section">
        <p className="v2-section-label">Featured Insights</p>
        <h2 className="v2-section-title">What we&apos;re thinking about</h2>
        <p className="v2-section-sub">
          Perspectives on AI, go-to-market strategy, and the future of B2B growth.
        </p>

        <div className="v2-card-grid">
          {INSIGHTS.map((post) => (
            <a key={post.href} href={post.href} className="v2-card">
              <span className="v2-card-eyebrow">{post.eyebrow}</span>
              <span className="v2-card-title">{post.title}</span>
              <span className="v2-card-body">{post.body}</span>
              <span className="v2-card-arrow">Read more →</span>
            </a>
          ))}
        </div>
      </section>

      <hr className="v2-divider" />

      {/* ── Origin strip ── */}
      <div className="v2-poster-strip">
        <div className="v2-poster-text">
          <h2>Think Different. Work Different.</h2>
          <p>
            Founded in 2013 on the belief that scaling go-to-market requires
            creativity and a willingness to challenge conventional wisdom.
            Today, with AI transforming how businesses compete, thinking
            differently isn&apos;t just inspiring—it&apos;s imperative.
          </p>
        </div>
        <div className="v2-poster-img-wrap">
          <Image
            src="/images/IMG_0031.jpeg"
            alt="Think Different — Apple Campaign Poster"
            width={140}
            height={187}
            quality={90}
          />
        </div>
      </div>
    </>
  );
}
