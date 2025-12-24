import { TrendingUp, Target, BarChart3, Activity } from 'lucide-react';

export function PerformancePage() {
  const performanceData = [
    {
      title: 'AI vs Manual Trading',
      image: '/charts/ai_vs_manual_performance.png',
      description: 'Comprehensive comparison showing AlphaStrike\'s superior performance across multiple metrics.',
    },
    {
      title: 'Asset Class Performance',
      image: '/charts/algo_trading_volume_by_asset_class.png',
      description: 'Detailed breakdown of algorithmic trading adoption and opportunity across different asset classes.',
    },
  ];

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="text-text-primary">Proven</span>
            <br />
            <span className="neon-text">Performance</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Real data from live trading demonstrates AlphaStrike's superior performance 
            compared to manual trading and single-model approaches.
          </p>
        </section>

        {/* Performance Charts */}
        <section className="py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {performanceData.map((data, index) => (
              <div key={index} className="glass-panel p-6">
                <h3 className="font-heading font-semibold text-xl text-text-primary mb-4">
                  {data.title}
                </h3>
                <img 
                  src={data.image} 
                  alt={data.title}
                  className="w-full h-auto rounded mb-4"
                />
                <p className="text-text-secondary text-sm">
                  {data.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-text-primary">Key Performance</span>
              <br />
              <span className="neon-text">Metrics</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="circuit-card text-center">
              <TrendingUp className="w-8 h-8 text-semantic-success mx-auto mb-4" />
              <div className="font-mono text-3xl font-bold text-semantic-success mb-2">
                +31.8%
              </div>
              <div className="text-text-secondary">
                Target Annual Return
              </div>
            </div>

            <div className="circuit-card text-center">
              <Target className="w-8 h-8 text-brand-tertiary mx-auto mb-4" />
              <div className="font-mono text-3xl font-bold text-brand-tertiary mb-2">
                2.65
              </div>
              <div className="text-text-secondary">
                Sharpe Ratio
              </div>
            </div>

            <div className="circuit-card text-center">
              <BarChart3 className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <div className="font-mono text-3xl font-bold text-brand-primary mb-2">
                2.15
              </div>
              <div className="text-text-secondary">
                Profit Factor
              </div>
            </div>

            <div className="circuit-card text-center">
              <Activity className="w-8 h-8 text-brand-secondary mx-auto mb-4" />
              <div className="font-mono text-3xl font-bold text-brand-secondary mb-2">
                8.4%
              </div>
              <div className="text-text-secondary">
                Maximum Drawdown
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
