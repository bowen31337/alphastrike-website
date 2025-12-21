import { Zap, Brain, Target, Shield, Cpu, Network } from 'lucide-react';

export function ValueProposition() {
  const features = [
    {
      icon: Zap,
      title: 'XGBoost Engine',
      description: 'Lightning-fast gradient boosting for structured data analysis, delivering superior speed and accuracy in market pattern recognition.',
      benefits: ['Real-time processing', 'High-frequency execution', 'Pattern detection'],
      color: 'text-brand-secondary',
    },
    {
      icon: Brain,
      title: 'LSTM Neural Network',
      description: 'Deep learning architecture specifically designed for time-series prediction, capturing long-term market trends and dependencies.',
      benefits: ['Sequential learning', 'Trend analysis', 'Memory retention'],
      color: 'text-brand-tertiary',
    },
    {
      icon: Target,
      title: 'LightGBM Precision',
      description: 'Advanced gradient boosting framework optimized for large-scale data, ensuring consistent performance across diverse market conditions.',
      benefits: ['Scalable performance', 'Consistent results', 'Market adaptation'],
      color: 'text-semantic-success',
    },
  ];

  const advantages = [
    {
      icon: Network,
      title: 'Ensemble Superiority',
      description: 'Combining multiple AI models reduces overfitting and improves prediction accuracy across all market conditions.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Built-in kill switches, pre-trade checks, and volatility controls protect your capital in real-time.',
    },
    {
      icon: Cpu,
      title: 'Dynamic Adaptation',
      description: 'Our AI continuously evaluates market regimes and adjusts model weights for optimal performance.',
    },
  ];

  return (
    <section className="py-24 bg-background-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            <span className="text-text-primary">The AlphaStrike</span>
            <br />
            <span className="neon-text">ML Ensemble Advantage</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Unlike single-model bots, our ensemble approach combines the strengths of 
            XGBoost, LightGBM, and LSTM to deliver superior adaptability and predictive accuracy.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="circuit-card group">
              <div className="flex items-center mb-4">
                <feature.icon className={`w-8 h-8 ${feature.color} mr-3`} />
                <h3 className="font-heading font-semibold text-xl text-text-primary">
                  {feature.title}
                </h3>
              </div>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-secondary">
                    <div className="w-1 h-1 bg-brand-primary rounded-full mr-3" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background-surface rounded-full border border-brand-primary/30 mb-4">
                <advantage.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                {advantage.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-panel p-8 max-w-2xl mx-auto">
            <h3 className="font-heading font-semibold text-2xl text-text-primary mb-4">
              Ready to Experience AI Trading Excellence?
            </h3>
            <p className="text-text-secondary mb-6">
              Join thousands of traders who have already discovered the power of ensemble machine learning.
            </p>
            <button className="glow-button">
              Explore Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
