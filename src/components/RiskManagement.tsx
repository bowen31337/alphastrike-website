import { Shield, AlertTriangle, Activity, Target } from 'lucide-react';

export function RiskManagement() {
  const riskFeatures = [
    {
      icon: Shield,
      title: 'Kill Switches',
      description: 'Automatic position closure when losses exceed predefined thresholds',
      features: ['Real-time monitoring', 'Instant execution', 'Configurable limits'],
    },
    {
      icon: AlertTriangle,
      title: 'Pre-Trade Checks',
      description: 'Validation of market conditions before executing any trades',
      features: ['Volatility screening', 'Liquidity validation', 'Spread analysis'],
    },
    {
      icon: Activity,
      title: 'Volatility Control',
      description: 'Dynamic position sizing based on current market volatility',
      features: ['ATR-based sizing', 'Correlation monitoring', 'Exposure limits'],
    },
    {
      icon: Target,
      title: 'Risk Scoring',
      description: 'Continuous assessment of portfolio risk levels',
      features: ['Real-time scoring', 'Historical backtesting', 'Stress testing'],
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
