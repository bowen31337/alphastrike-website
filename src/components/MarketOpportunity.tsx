import { TrendingUp, Globe, Users, Zap } from 'lucide-react';

export function MarketOpportunity() {
  const metrics = [
    {
      icon: TrendingUp,
      value: '$17.2B',
      label: 'Current Market Size',
      description: 'Algorithmic trading market value in 2024',
      growth: '+147%',
    },
    {
      icon: Globe,
      value: '$42.5B',
      label: 'Projected by 2033',
      description: 'Expected market size with 9.49% CAGR',
      growth: '+147%',
    },
    {
      icon: Users,
      value: '86%',
      label: 'AI Adoption Rate',
      description: 'of hedge funds already using AI tools',
      growth: '+23%',
    },
    {
      icon: Zap,
      value: '20%',
      label: 'AI Platform Growth',
      description: 'CAGR for AI trading platform submarket',
      growth: '+147%',
    },
  ];

  return (
    <section className="py-24 bg-background-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            <span className="text-text-primary">Massive Market</span>
            <br />
            <span className="neon-text">Growth Opportunity</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            The algorithmic trading market is experiencing explosive growth, with AI-powered 
            platforms leading the charge. AlphaStrike is positioned to capture significant market share.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Chart Section */}
          <div className="order-2 lg:order-1">
            <div className="glass-panel p-6">
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-4">
                Market Growth Projections
              </h3>
              <div className="relative">
                <img 
                  src="/charts/market_growth_projections.png" 
                  alt="Market Growth Projections 2024-2033"
                  className="w-full h-auto rounded"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-surface/20 to-transparent rounded" />
              </div>
              <div className="mt-4 text-sm text-text-secondary">
                <p>Source: IMARC Group, Grand View Research, Forbes Market Analysis</p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="circuit-card">
                  <div className="flex items-center justify-between mb-3">
                    <metric.icon className="w-6 h-6 text-brand-primary" />
                    <span className="font-mono text-sm font-bold text-semantic-success">
                      {metric.growth}
                    </span>
                  </div>
                  <div className="font-mono text-2xl font-bold text-text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-text-secondary mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-text-secondary/70 leading-relaxed">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Key Insights */}
            <div className="mt-8 glass-panel p-6">
              <h4 className="font-heading font-semibold text-lg text-text-primary mb-4">
                Key Market Insights
              </h4>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start">
                  <div className="w-1 h-1 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  AI trading platform submarket growing at 20% CAGR vs 9.49% overall market
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Retail segment fastest-growing, exceeding $11B annually in algorithmic spending
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  70-80% of US equity volume already algorithmic, significant growth in other assets
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 bg-brand-secondary rounded-full mt-2 mr-3 flex-shrink-0" />
                  Only 40% of options trading is algorithmic - major opportunity gap
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-panel p-8 max-w-3xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl text-text-primary mb-4">
              Be Part of the AI Trading Revolution
            </h3>
            <p className="text-text-secondary mb-6">
              The numbers don't lie. AI-powered trading is not just the future—it's the present. 
              Position yourself at the forefront of this $42.5 billion market opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button">
                View Performance Data
              </button>
              <button className="border border-brand-primary text-brand-primary px-6 py-3 rounded-sm font-heading font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-background-main transition-all duration-200">
                Read Market Analysis
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
