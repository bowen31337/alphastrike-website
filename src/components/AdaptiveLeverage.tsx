import { Scale, Activity, TrendingUp, ShieldCheck, Gauge } from 'lucide-react';

export function AdaptiveLeverage() {
  const leverageFeatures = [
    {
      icon: Gauge,
      title: 'Dynamic Leverage',
      description: 'Intelligent leverage scaling (1-20x) based on volatility and confidence.',
      features: ['Low Volatility: Up to 20x', 'High Volatility: Reduced to 1-5x', 'Confidence-based scaling'],
    },
    {
      icon: TrendingUp,
      title: 'Regime Adaptation',
      description: 'Strategy weighting adjusts automatically to changing market conditions.',
      features: ['Trending: Aggressive leverage', 'Ranging: Conservative scaling', 'Drawdown protection'],
    },
    {
      icon: Scale,
      title: 'Smart Sizing',
      description: 'Position sizes adjust inversely to leverage to maintain constant risk.',
      features: ['Constant risk exposure', 'Leverage-adjusted sizing', 'Portfolio heat limits'],
    },
    {
      icon: ShieldCheck,
      title: 'Adaptive Thresholds',
      description: 'Entry thresholds shift dynamically based on leverage and market state.',
      features: ['High Leverage: Stricter entry', 'Low Leverage: Wider opportunities', 'Optimized win-rate'],
    },
  ];

  return (
    <section className="py-24 bg-surface-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            <span className="text-text-primary">Adaptive</span>
            <br />
            <span className="neon-text">Leverage Strategy</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            AlphaStrike maximizes potential returns while strictly controlling risk using a 
            proprietary adaptive leverage engine that responds to market conditions in real-time.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {leverageFeatures.map((feature, index) => (
            <div key={index} className="circuit-card group hover:border-brand-primary/50 transition-colors">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-primary/20 transition-colors">
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

        {/* Visual Representation (Conceptual) */}
        <div className="glass-panel p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading font-semibold text-2xl text-text-primary mb-4">
                How It Works
              </h3>
              <p className="text-text-secondary mb-6">
                The leverage engine continuously monitors market volatility (ATR), trend strength (ADX), 
                and model confidence. When conditions align—low volatility, strong trend, high confidence—leverage 
                scales up to amplify gains. In uncertain or volatile markets, it automatically scales down to preserve capital.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                 <div className="px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-mono">
                    ATR Analysis
                 </div>
                 <div className="px-4 py-2 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-mono">
                    Regime Detection
                 </div>
                 <div className="px-4 py-2 rounded-full bg-brand-tertiary/10 border border-brand-tertiary/20 text-brand-tertiary text-sm font-mono">
                    Risk normalization
                 </div>
              </div>
            </div>
            
            {/* Simple Visual Element */}
            <div className="flex-1 flex justify-center items-center">
                 <div className="relative w-64 h-32 bg-surface-dark border border-brand-primary/30 rounded-lg flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 opacity-50"></div>
                     <div className="text-center z-10">
                        <div className="text-xs text-text-secondary uppercase tracking-wider mb-1">Current Leverage</div>
                        <div className="text-4xl font-mono font-bold text-brand-primary animate-pulse">
                           Dynamic
                        </div>
                     </div>
                     {/* Background Grid Effect */}
                     <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,136,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,136,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
