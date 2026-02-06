export default function About() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 64px' }}>
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-12 animate-[expandLine_1s_ease-out_0.5s_both]" />

      <div className="bg-white border-3 border-[var(--black)] shadow-[8px_8px_0_var(--black)] p-16 relative">
        <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />

        <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider mb-12 text-[var(--black)] uppercase">
          About Work Different
        </h2>

        <div className="space-y-8 text-lg text-[var(--charcoal)] leading-relaxed">
          <p>
            WORK DIFFERENT provides strategic go-to-market advisory services to private equity and venture capital investors as well as their portfolio companies to drive ARR growth and successful outcomes.
          </p>

          <p className="pt-6">
            WORK DIFFERENT has helped organizations establish scalable GTM strategies and execution that have allowed them to:
          </p>

          <ul className="space-y-5 pl-6">
            <li className="flex items-start">
              <span className="text-[var(--accent-red)] mr-4 text-2xl flex-shrink-0">—</span>
              <span>Achieve successful exits totalling over $1.7B</span>
            </li>
            <li className="flex items-start">
              <span className="text-[var(--accent-red)] mr-4 text-2xl flex-shrink-0">—</span>
              <span>Raise over $500M in capital to support their growth</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
