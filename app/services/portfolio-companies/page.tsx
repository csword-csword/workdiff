export default function PortfolioCompanies() {
  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 64px' }}>
      {/* Four boxes in 2x2 grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Marketing */}
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-red)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase border-b-2 border-[var(--black)] pb-2">
            Marketing
          </h2>
          <ul className="space-y-2 text-[var(--charcoal)]">
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
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-blue)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase border-b-2 border-[var(--black)] pb-2">
            Sales
          </h2>
          <ul className="space-y-2 text-[var(--charcoal)]">
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
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--accent-yellow)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase border-b-2 border-[var(--black)] pb-2">
            CS
          </h2>
          <ul className="space-y-2 text-[var(--charcoal)]">
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
        <div className="bg-white border-3 border-[var(--black)] shadow-[6px_6px_0_var(--black)] p-8 relative">
          <div className="absolute top-0 left-0 w-full h-[5px] bg-[var(--slate)]" />
          <h2 className="font-[var(--font-bebas)] text-3xl tracking-wider mb-6 text-[var(--black)] uppercase border-b-2 border-[var(--black)] pb-2">
            Channels
          </h2>
          <ul className="space-y-2 text-[var(--charcoal)]">
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
    </main>
  );
}
