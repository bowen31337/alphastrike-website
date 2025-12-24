import { Shield, AlertTriangle, Activity, Target } from 'lucide-react';

export function RiskManagement() {
  const riskFeatures = [
    {
      icon: Shield,
      title: 'Adaptive Sizing',
      description: 'Dynamic Kelly fraction adjustment (0.3-0.7) based on rolling performance',
      features: ['Win-rate calibration', 'Drawdown-aware sizing', 'Confidence-based weighting'],
    },
    {
      icon: AlertTriangle,
      title: 'Correlation Control',
      description: 'Real-time monitoring of pair correlations to manage portfolio exposure',
      features: ['BTC/ETH/LTC grouping', 'Combined exposure limits', 'Dynamic pair weighting'],
    },
    {
      icon: Activity,
      title: 'Exit Management',
      description: 'Sophisticated exit logic using ATR-based trailing stops and multi-level targets',
      features: ['ATR initial stop (2x)', 'Trail stop (1.5x)', 'Profit lock-in logic'],
    },
    {
      icon: Target,
      title: 'Regime Adaptation',
      description: 'Strategy-wide adaptation based on detected market regimes (trending/ranging)',
      features: ['ADX/ATR classification', 'Threshold optimization', 'Volatility screening'],
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          <span className="text-text-primary">Enterprise-Grade</span>
          <br />
          <span className="neon-text">Risk Management</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          AlphaStrike incorporates comprehensive risk controls to protect your capital, 
          inspired by institutional trading standards and best practices.
        </p>
      </div>

      {/* Risk Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {riskFeatures.map((feature, index) => (
          <div key={index} className="circuit-card">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mr-4">
                <feature.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-text-primary">
                {feature.title}
              </h3>
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              {feature.description}
            </p>
            <ul className="space-y-2">
              {feature.features.map((item, idx) => (
                <li key={idx} className="flex items-center text-sm text-text-secondary">
                  <div className="w-1 h-1 bg-brand-secondary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Risk Metrics */}
      <div className="glass-panel p-8">
        <h3 className="font-heading font-semibold text-2xl text-text-primary mb-8 text-center">
          Risk Control Performance
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-semantic-success mb-2">
              99.7%
            </div>
            <div className="text-text-secondary text-sm">
              Risk Control Accuracy
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-brand-tertiary mb-2">
              &lt;0.1s
            </div>
            <div className="text-text-secondary text-sm">
              Response Time
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-brand-primary mb-2">
              0
            </div>
            <div className="text-text-secondary text-sm">
              Major Incidents (2024)
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-3xl font-bold text-brand-secondary mb-2">
              24/7
            </div>
            <div className="text-text-secondary text-sm">
              Monitoring Coverage
            </div>
          </div>
        </div>
      </div>

      {/* Cost Benefits Chart */}
      <div className="mt-16">
        <h3 className="font-heading font-semibold text-xl text-text-primary mb-6 text-center">
          Cost-Benefit Analysis
        </h3>
        <div className="glass-panel p-6">
          <img 
            src="/charts/cost_benefits_summary.png" 
            alt="Cost Benefits Summary of Automated Trading Controls"
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
}
