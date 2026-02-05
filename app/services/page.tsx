export default function Services() {
  return (
    <main className="container mx-auto px-4 md:px-16 py-16">
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 animate-[expandLine_1s_ease-out_both]" />

      <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
        Our <span className="text-[var(--accent-blue)] italic">Services</span>
      </h1>

      <div className="max-w-4xl">
        <p className="text-lg text-[var(--charcoal)] leading-relaxed mb-8">
          Comprehensive go-to-market advisory services tailored to early-stage B2B technology companies.
        </p>

        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8">
          <p className="text-[var(--charcoal)]">
            Detailed services page content coming soon. Contact us to learn more about how we can help your company achieve its go-to-market goals.
          </p>
        </div>
      </div>
    </main>
  );
}
