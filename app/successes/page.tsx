export default function Successes() {
  const clients = [
    { name: "Othello", category: "Sales Productivity" },
    { name: "Control Plane", category: "Cloud Management" },
    { name: "Temelio", category: "Grants Management" },
    { name: "Sedai", category: "Cloud Management" },
    { name: "Sigma360", category: "KYC/AML" },
    { name: "ExecAtlas", category: "CRM Data Services" },
    { name: "Insait", category: "FinTech" },
  ];

  return (
    <main className="container mx-auto px-4 md:px-16 py-16">
      <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 animate-[expandLine_1s_ease-out_both]" />

      <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
        Client <span className="text-[var(--accent-yellow)] italic">Successes</span>
      </h1>

      <div className="max-w-4xl">
        <p className="text-lg text-[var(--charcoal)] leading-relaxed mb-12">
          We've partnered with leading B2B technology companies to drive go-to-market excellence and accelerate growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-6 transition-all duration-300 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_var(--black)]"
            >
              <div
                className={`absolute top-0 left-0 w-full h-[5px] ${
                  idx % 4 === 0
                    ? "bg-[var(--accent-red)]"
                    : idx % 4 === 1
                    ? "bg-[var(--accent-blue)]"
                    : idx % 4 === 2
                    ? "bg-[var(--accent-yellow)]"
                    : "bg-[var(--slate)]"
                }`}
              />
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-wider text-[var(--black)] uppercase mb-2">
                {client.name}
              </h3>
              <p className="text-sm text-[var(--slate)] tracking-wide">
                {client.category}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--black)] text-[var(--cream)] p-8 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-4 text-[var(--accent-yellow)] uppercase">
            Target Market
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Stage
              </h3>
              <p className="leading-snug">$0-20MM ARR</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Market
              </h3>
              <p className="leading-snug">Enterprise</p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Domain
              </h3>
              <p className="leading-snug">
                SDLC, Infrastructure, Cybersecurity, AI, FinTech
              </p>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Verticals
              </h3>
              <p className="leading-snug">
                Banking, Insurance, Financial Services, Pharma, Automotive
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                Regions
              </h3>
              <p className="leading-snug">NA, EMEA, APAC</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
