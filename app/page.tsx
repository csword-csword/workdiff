export default function Home() {
  const services = [
    {
      title: "Marketing",
      color: "red",
      items: [
        "ICP Definition",
        "Value Positioning",
        "Messaging",
        "Packaging and Pricing",
        "Collateral",
        "Demand Gen",
        "Metrics",
      ],
    },
    {
      title: "Sales",
      color: "blue",
      items: [
        "Sales Process",
        "Playbooks",
        "Pipeline Mgmt",
        "Team Development",
        "Forecasting",
        "Commercials",
        "Metrics",
      ],
    },
    {
      title: "CS",
      color: "yellow",
      items: [
        "Treatment Strategy",
        "QBR",
        "Cross-Sell",
        "Renewals",
        "Metrics",
      ],
    },
    {
      title: "Channels",
      color: "slate",
      items: ["Structure", "Priority", "Commercials", "Metrics"],
    },
  ];

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
    <main className="container mx-auto px-4 md:px-16 animate-[fadeIn_0.8s_ease-out]">
      {/* Decorative line */}
      <div className="h-1 w-40 bg-[var(--accent-red)] mt-4 animate-[expandLine_1s_ease-out_1s_both]" />

      {/* Hero */}
      <section className="mt-8 mb-16 animate-[slideUp_0.8s_ease-out_0.2s_both] max-w-7xl">
        <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
          Go-to-Market <span className="text-[var(--accent-red)] italic">Advisory</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--charcoal)] leading-relaxed max-w-5xl">
          <strong className="whitespace-nowrap">Investors:</strong> Comprehensive GTM due diligence services for prospective investments
          <br />
          <strong className="whitespace-nowrap">Portfolio Companies:</strong> Embedded operator expertise for early stage B2B technology companies
        </p>
      </section>

      {/* Main Layout: Grid + Sidebars */}
      <div className="relative pb-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Grid */}
          <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 animate-[fadeInGrid_1s_ease-out_0.4s_both]">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`service-card service-card-${service.color} relative p-7 bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] transition-all duration-300 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_var(--black)] flex flex-col`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-[5px] ${
                    service.color === "red"
                      ? "bg-[var(--accent-red)]"
                      : service.color === "blue"
                      ? "bg-[var(--accent-blue)]"
                      : service.color === "yellow"
                      ? "bg-[var(--accent-yellow)]"
                      : "bg-[var(--slate)]"
                  }`}
                />
                <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider mb-5 text-[var(--black)] uppercase leading-none border-b-2 border-[var(--black)] pb-3">
                  {service.title}
                </h2>
                <ul className="flex-1 space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className={`text-base leading-relaxed text-[var(--charcoal)] pl-5 relative font-medium before:content-['—'] before:absolute before:left-0 before:font-semibold ${
                        service.color === "red"
                          ? "before:text-[var(--accent-red)]"
                          : service.color === "blue"
                          ? "before:text-[var(--accent-blue)]"
                          : service.color === "yellow"
                          ? "before:text-[var(--accent-yellow)]"
                          : "before:text-[var(--slate)]"
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Sidebars */}
          <div className="lg:w-96 flex flex-col gap-8">
            {/* Recent Clients */}
            <aside className="bg-[var(--accent-blue)] text-white p-7 shadow-[8px_8px_0_rgba(0,0,0,0.3)] animate-[slideLeft_0.8s_ease-out_0.8s_both]">
              <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-4 text-white uppercase border-b-2 border-white pb-2">
                Recent Clients
              </h2>
              <ul className="space-y-2">
                {clients.map((client, idx) => (
                  <li
                    key={idx}
                    className={`pb-2 ${
                      idx !== clients.length - 1
                        ? "border-b border-white/30 mb-2"
                        : ""
                    }`}
                  >
                    <div className="font-semibold text-sm tracking-wide mb-1">
                      {client.name}
                    </div>
                    <div className="text-xs text-white/80 tracking-wide">
                      {client.category}
                    </div>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Target Market */}
            <aside className="bg-[var(--black)] text-[var(--cream)] p-7 shadow-[8px_8px_0_rgba(0,0,0,0.3)] animate-[slideLeft_0.8s_ease-out_0.6s_both]">
              <h2 className="font-[var(--font-bebas)] text-4xl tracking-wider mb-6 text-[var(--accent-yellow)] uppercase border-b-3 border-[var(--accent-yellow)] pb-2">
                Target Market
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                    Stage
                  </h3>
                  <p className="text-sm leading-snug">$0-20MM ARR</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                    Domain
                  </h3>
                  <p className="text-sm leading-snug">
                    SDLC, Infrastructure, Cybersecurity, AI, FinTech
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                    Market
                  </h3>
                  <p className="text-sm leading-snug">Enterprise</p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                    Verticals
                  </h3>
                  <p className="text-sm leading-snug">
                    Banking, Insurance, Financial Services, Pharma, Automotive
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                    Regions
                  </h3>
                  <p className="text-sm leading-snug">NA, EMEA, APAC</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
