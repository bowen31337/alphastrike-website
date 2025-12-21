import { useState } from 'react';
import { Zap, Brain, Target, ArrowRight } from 'lucide-react';

export function EnsembleDiagram() {
  const [activeModel, setActiveModel] = useState<string | null>(null);

  const models = [
    {
      id: 'xgboost',
      name: 'XGBoost',
      icon: Zap,
      color: 'text-brand-secondary',
      bgColor: 'bg-brand-secondary/20',
      description: 'Gradient boosting framework optimized for speed and accuracy',
      features: ['Real-time processing', 'High-frequency execution', 'Pattern detection'],
      weight: 35,
      performance: 'Speed: 95%',
    },
    {
      id: 'lstm',
      name: 'LSTM',
      icon: Brain,
      color: 'text-brand-tertiary',
      bgColor: 'bg-brand-tertiary/20',
      description: 'Recurrent neural network for sequential pattern recognition',
      features: ['Sequential learning', 'Long-term dependencies', 'Trend analysis'],
      weight: 40,
      performance: 'Accuracy: 92%',
    },
    {
      id: 'lightgbm',
      name: 'LightGBM',
      icon: Target,
      color: 'text-semantic-success',
      bgColor: 'bg-semantic-success/20',
      description: 'Fast gradient boosting with superior scalability',
      features: ['Large-scale data', 'Consistent performance', 'Market adaptation'],
      weight: 25,
      performance: 'Scalability: 98%',
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          <span className="text-text-primary">ML Ensemble</span>
          <br />
          <span className="neon-text">Architecture</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Our ensemble combines three powerful AI models, each optimized for different aspects 
          of market analysis, working together to deliver superior predictions.
        </p>
      </div>

      {/* Interactive Diagram */}
      <div className="glass-panel p-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Input Data */}
          <div className="text-center">
            <div className="w-32 h-32 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-center">
                <div className="font-mono text-sm font-bold text-brand-primary mb-2">INPUT</div>
                <div className="text-xs text-text-secondary">
                  Market Data<br />
                  Price & Volume<br />
                  Sentiment<br />
                  Technical Indicators
                </div>
              </div>
            </div>
          </div>

          {/* Models */}
          <div className="space-y-4">
            {models.map((model, index) => (
              <div key={model.id} className="relative">
                <div 
                  className={`circuit-card cursor-pointer transition-all duration-200 ${
                    activeModel === model.id ? 'ring-2 ring-brand-primary' : ''
                  }`}
                  onMouseEnter={() => setActiveModel(model.id)}
                  onMouseLeave={() => setActiveModel(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 ${model.bgColor} rounded-full flex items-center justify-center mr-4`}>
                        <model.icon className={`w-5 h-5 ${model.color}`} />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold text-text-primary">
                          {model.name}
                        </h3>
                        <div className="text-sm text-text-secondary">
                          Weight: {model.weight}%
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-sm font-bold text-text-primary">
                        {model.performance}
                      </div>
                    </div>
                  </div>
                  
                  {activeModel === model.id && (
                    <div className="mt-4 pt-4 border-t border-brand-primary/20">
                      <p className="text-sm text-text-secondary mb-3">
                        {model.description}
                      </p>
                      <ul className="space-y-1">
                        {model.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-text-secondary">
                            <div className="w-1 h-1 bg-brand-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {/* Arrow to next section */}
                {index < models.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-brand-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Output */}
          <div className="text-center">
            <div className="w-32 h-32 bg-semantic-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-center">
                <div className="font-mono text-sm font-bold text-semantic-success mb-2">OUTPUT</div>
                <div className="text-xs text-text-secondary">
                  Trading Signal<br />
                  Risk Assessment<br />
                  Position Sizing<br />
                  Exit Strategy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ensemble Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="circuit-card text-center">
          <div className="w-12 h-12 bg-brand-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-6 h-6 text-brand-secondary" />
          </div>
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
            Reduced Overfitting
          </h3>
          <p className="text-text-secondary text-sm">
            Multiple models working together reduce the risk of overfitting to historical data, 
            making predictions more robust in live trading.
          </p>
        </div>

        <div className="circuit-card text-center">
          <div className="w-12 h-12 bg-brand-tertiary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-6 h-6 text-brand-tertiary" />
          </div>
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
            Regime Adaptation
          </h3>
          <p className="text-text-secondary text-sm">
            The ensemble automatically adjusts model weights based on current market conditions, 
            ensuring optimal performance across different market regimes.
          </p>
        </div>

        <div className="circuit-card text-center">
          <div className="w-12 h-12 bg-semantic-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-6 h-6 text-semantic-success" />
          </div>
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
            Enhanced Accuracy
          </h3>
          <p className="text-text-secondary text-sm">
            By combining the strengths of different algorithms, we achieve higher prediction 
            accuracy than any single model could provide independently.
          </p>
        </div>
      </div>
    </section>
  );
}
