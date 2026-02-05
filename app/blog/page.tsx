export default function Blog() {
  return (
    <main className="container mx-auto px-4 md:px-16 py-16">
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 animate-[expandLine_1s_ease-out_both]" />

      <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
        Insights & <span className="text-[var(--accent-yellow)] italic">Analysis</span>
      </h1>

      <div className="max-w-4xl">
        <p className="text-lg text-[var(--charcoal)] leading-relaxed mb-8">
          Expert perspectives on go-to-market strategy, sales, marketing, and customer success.
        </p>

        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8">
          <p className="text-[var(--charcoal)]">
            Blog content coming soon. Check back for insights and best practices from our team.
          </p>
        </div>
      </div>
    </main>
  );
}
