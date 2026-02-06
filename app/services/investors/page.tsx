export default function Investors() {
  return (
    <main className="min-h-screen px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 animate-[expandLine_1s_ease-out_both]" />
        <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
          Investor <span className="text-[var(--accent-blue)] italic">Services</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--charcoal)] leading-relaxed max-w-4xl">
          Comprehensive GTM due diligence services for prospective investments.
        </p>
      </div>
    </main>
  );
}
