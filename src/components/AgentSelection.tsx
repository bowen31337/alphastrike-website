import { useState } from 'react';
import { Activity, TrendingUp, TrendingDown, Zap } from 'lucide-react';

export function AgentSelection() {
  const [selectedMarket, setSelectedMarket] = useState('bull');

  const marketRegimes = [
    {
      id: 'bull',
      name: 'Bull Market',
      description: 'Rising prices, high volatility',
      icon: TrendingUp,
      color: 'text-semantic-success',
      bgColor: 'bg-semantic-success/20',
      preferredModel: 'XGBoost',
      weight: 'XGBoost: 50%, LSTM: 30%, LightGBM: 20%',
    },
    {
      id: 'bear',
      name: 'Bear Market',
      description: 'Falling prices, defensive mode',
      icon: TrendingDown,
      color: 'text-semantic-error',
      bgColor: 'bg-semantic-error/20',
      preferredModel: 'LSTM',
      weight: 'LSTM: 50%, LightGBM: 30%, XGBoost: 20%',
    },
    {
      id: 'sideways',
      name: 'Sideways Market',
      description: 'Range-bound, low volatility',
      icon: Activity,
      color: 'text-brand-tertiary',
      bgColor: 'bg-brand-tertiary/20',
      preferredModel: 'LightGBM',
      weight: 'LightGBM: 45%, XGBoost: 35%, LSTM: 20%',
    },
    {
      id: 'volatile',
      name: 'High Volatility',
      description: 'Extreme price movements',
      icon: Zap,
      color: 'text-brand-secondary',
      bgColor: 'bg-brand-secondary/20',
      preferredModel: 'Ensemble',
      weight: 'Balanced: XGBoost: 35%, LSTM: 35%, LightGBM: 30%',
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          <span className="text-text-primary">Dynamic Agent</span>
          <br />
          <span className="neon-text">Selection</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          AlphaStrike continuously evaluates market conditions and automatically adjusts 
          model weights for optimal performance across different market regimes.
        </p>
      </div>

      {/* Market Regime Selector */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {marketRegimes.map((regime) => (
          <button
            key={regime.id}
            onClick={() => setSelectedMarket(regime.id)}
            className={`p-4 rounded-md border transition-all duration-200 ${
              selectedMarket === regime.id
                ? 'border-brand-primary bg-brand-primary/10'
                : 'border-brand-primary/30 hover:border-brand-primary/50'
            }`}
          >
            <div className="text-center">
              <regime.icon className={`w-8 h-8 mx-auto mb-2 ${regime.color}`} />
              <h3 className="font-heading font-semibold text-text-primary mb-1">
                {regime.name}
              </h3>
              <p className="text-xs text-text-secondary">
                {regime.description}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Dynamic Weight Display */}
      <div className="glass-panel p-8">
        <h3 className="font-heading font-semibold text mb-6 text-xl text-text-primary-center">
          Current Model Weights for {marketRegimes.find(r => r.id === selectedMarket)?.name}
        </h3>
        
        <div className="space-y-6">
          {marketRegimes.find(r => r.id === selectedMarket) && (
            <div className="text-center">
              <div className="text-lg text-text-secondary mb-4">
                Preferred Model: <span className="font-semibold text-brand-primary">
                  {marketRegimes.find(r => r.id === selectedMarket)?.preferredModel}
                </span>
              </div>
              
              <div className="font-mono text-text-primary text-lg">
                {marketRegimes.find(r => r.id === selectedMarket)?.weight}
              </div>
            </div>
          )}
        </div>

        {/* Performance Metrics */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-semantic-success mb-2">
              87.3%
            </div>
            <div className="text-text-secondary text-sm">
              Accuracy in Bull Markets
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-brand-tertiary mb-2">
              84.1%
            </div>
            <div className="text-text-secondary text-sm">
              Accuracy in Bear Markets
            </div>
          </div>
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-brand-secondary mb-2">
              91.7%
            </div>
            <div className="text-text-secondary text-sm">
              Overall Prediction Accuracy
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="circuit-card">
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
            Real-Time Adaptation
          </h3>
          <p className="text-text-secondary mb-4">
            Our system continuously monitors market volatility, trend strength, and trading volume 
            to automatically adjust model weights every 5 minutes.
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-center">
              <div className="w-1 h-1 bg-brand-primary rounded-full mr-3" />
              Volatility-adjusted weighting
            </li>
            <li className="flex items-center">
              <div className="w-1 h-1 bg-brand-primary rounded-full mr-3" />
              Trend strength analysis
            </li>
            <li className="flex items-center">
              <div className="w-1 h-1 bg-brand-primary rounded-full mr-3" />
              Volume-based confidence scoring
            </li>
          </ul>
        </div>

        <div className="circuit-card">
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
            Performance Optimization
          </h3>
          <p className="text-text-secondary mb-4">
            By adapting to market conditions, AlphaStrike maintains consistent performance 
            across different market environments, avoiding the pitfalls of static models.
          </p>
          <ul className="space-y-2 text-sm text-text-secondary">
            <li className="flex items-center">
              <div className="w-1 h-1 bg-brand-primary rounded-full mr-3" />
              Reduced drawdown in volatile periods
            </li>
            <li className="flex items-center">
              <div className="w-1 h-1 bg-brand-primary rounded-full mr-3" />
              Enhanced capture of trending moves
            </li>
            <li className="flex items-center">
              <div className="w-1 h-1 bg-brand-primary rounded-full mr-3" />
              Improved risk-adjusted returns
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
