// About page with company information and achievements
export default function About() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <div
        className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] relative"
        style={{ padding: '2rem', paddingTop: '2.5rem' }}
      >
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

        <h2
          className="font-[var(--font-bebas)] text-4xl tracking-wider text-[var(--black)] uppercase"
          style={{ marginBottom: '1.5rem' }}
        >
          About Work Different
        </h2>

        <div
          className="text-[var(--charcoal)]"
          style={{ fontSize: '1rem', lineHeight: '1.6' }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            WORK DIFFERENT provides strategic go-to-market advisory services to private equity and venture capital investors as well as their portfolio companies to drive ARR growth and successful outcomes.
          </p>

          <p style={{ marginBottom: '1rem' }}>
            WORK DIFFERENT has helped organizations establish scalable GTM strategies and execution that have allowed them to:
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: 0 }}>
              <span style={{ color: 'var(--accent-red)', marginRight: '1rem', fontSize: '1.5rem', flexShrink: 0, lineHeight: '1' }}>—</span>
              <span>Achieve successful exits totalling over $1.7B</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', paddingLeft: 0 }}>
              <span style={{ color: 'var(--accent-red)', marginRight: '1rem', fontSize: '1.5rem', flexShrink: 0, lineHeight: '1' }}>—</span>
              <span>Raise over $500M in capital to support their growth</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
