export default function PortfolioCompanies() {
  return (
    <main className="min-h-screen px-8 md:px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="h-1 w-40 bg-[var(--accent-red)] mb-8 animate-[expandLine_1s_ease-out_both]" />
          <h1 className="font-[var(--font-playfair)] text-6xl md:text-8xl font-black leading-none text-[var(--black)] mb-6 tracking-tight">
            Go-to-Market <span className="text-[var(--accent-red)] italic">Advisory</span>
          </h1>
          <div className="space-y-4 text-base md:text-lg text-[var(--charcoal)] max-w-4xl">
            <p>
              <strong>Investors:</strong> Comprehensive GTM due diligence services for prospective investments
            </p>
            <p>
              <strong>Portfolio Companies:</strong> Embedded operator expertise for early stage B2B technology companies
            </p>
          </div>
        </div>

        {/* Four-box grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Marketing */}
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 animate-[fadeInGrid_0.6s_ease-out_both] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_var(--black)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-red)]" />
            <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase">
              Marketing
            </h2>
            <ul className="space-y-3 text-[var(--charcoal)]">
              <li className="flex items-start">
                <span className="text-[var(--accent-red)] mr-3">—</span>
                <span>ICP Definition</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-red)] mr-3">—</span>
                <span>Value Positioning</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-red)] mr-3">—</span>
                <span>Messaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-red)] mr-3">—</span>
                <span>Packaging and Pricing</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-red)] mr-3">—</span>
                <span>Collateral</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-red)] mr-3">—</span>
                <span>Demand Gen</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-red)] mr-3">—</span>
                <span>Metrics</span>
              </li>
            </ul>
          </div>

          {/* Sales */}
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 animate-[fadeInGrid_0.6s_ease-out_0.1s_both] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_var(--black)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />
            <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase">
              Sales
            </h2>
            <ul className="space-y-3 text-[var(--charcoal)]">
              <li className="flex items-start">
                <span className="text-[var(--accent-blue)] mr-3">—</span>
                <span>Sales Process</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-blue)] mr-3">—</span>
                <span>Playbooks</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-blue)] mr-3">—</span>
                <span>Pipeline Mgmt</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-blue)] mr-3">—</span>
                <span>Team Development</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-blue)] mr-3">—</span>
                <span>Forecasting</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-blue)] mr-3">—</span>
                <span>Commercials</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-blue)] mr-3">—</span>
                <span>Metrics</span>
              </li>
            </ul>
          </div>

          {/* CS */}
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 animate-[fadeInGrid_0.6s_ease-out_0.2s_both] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_var(--black)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
            <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase">
              CS
            </h2>
            <ul className="space-y-3 text-[var(--charcoal)]">
              <li className="flex items-start">
                <span className="text-[var(--accent-yellow)] mr-3">—</span>
                <span>Treatment Strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-yellow)] mr-3">—</span>
                <span>QBR</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-yellow)] mr-3">—</span>
                <span>Cross-Sell</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-yellow)] mr-3">—</span>
                <span>Renewals</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--accent-yellow)] mr-3">—</span>
                <span>Metrics</span>
              </li>
            </ul>
          </div>

          {/* Channels */}
          <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 animate-[fadeInGrid_0.6s_ease-out_0.3s_both] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_var(--black)] transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--slate)]" />
            <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase">
              Channels
            </h2>
            <ul className="space-y-3 text-[var(--charcoal)]">
              <li className="flex items-start">
                <span className="text-[var(--slate)] mr-3">—</span>
                <span>Structure</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--slate)] mr-3">—</span>
                <span>Priority</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--slate)] mr-3">—</span>
                <span>Commercials</span>
              </li>
              <li className="flex items-start">
                <span className="text-[var(--slate)] mr-3">—</span>
                <span>Metrics</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar callouts - Recent Clients and Target Market */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Clients */}
          <div className="bg-[var(--accent-blue)] text-white p-8 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
            <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--accent-yellow)] uppercase">
              Recent Clients
            </h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h3 className="font-semibold mb-1">Othello</h3>
                <p className="text-xs opacity-90">Sales Productivity</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Temelio</h3>
                <p className="text-xs opacity-90">Grants Management</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Sigma360</h3>
                <p className="text-xs opacity-90">KYC/AML</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">ExecAtlas</h3>
                <p className="text-xs opacity-90">CRM Data Services</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Insait</h3>
                <p className="text-xs opacity-90">FinTech</p>
              </div>
            </div>
          </div>

          {/* Target Market */}
          <div className="bg-[var(--black)] text-[var(--cream)] p-8 shadow-[8px_8px_0_rgba(0,0,0,0.3)]">
            <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--accent-yellow)] uppercase">
              Target Market
            </h2>
            <div className="grid grid-cols-2 gap-6 text-sm">
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
              <div className="col-span-2">
                <h3 className="text-xs uppercase tracking-wider text-[var(--accent-yellow)] mb-2 font-semibold">
                  Regions
                </h3>
                <p className="leading-snug">NA, EMEA, APAC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
