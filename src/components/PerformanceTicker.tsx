import { useEffect, useState } from 'react';
import { TrendingUp, DollarSign, Activity, Zap } from 'lucide-react';

export function PerformanceTicker() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: DollarSign,
      label: 'Market Size',
      value: '$17.2B',
      change: '+147%',
      description: 'Algorithmic Trading Market 2024',
      color: 'text-semantic-success',
    },
    {
      icon: TrendingUp,
      label: 'Projected Growth',
      value: '$42.5B',
      change: 'by 2033',
      description: 'Market opportunity projection',
      color: 'text-brand-secondary',
    },
    {
      icon: Zap,
      label: 'AI Advantage',
      value: '+23%',
      change: 'higher returns',
      description: 'vs manual trading performance',
      color: 'text-semantic-success',
    },
    {
      icon: Activity,
      label: 'AI Adoption',
      value: '86%',
      change: 'of hedge funds',
      description: 'now use AI trading tools',
      color: 'text-brand-tertiary',
    },
  ];

  return (
    <section className="bg-background-surface border-y border-brand-primary/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading font-semibold text-lg text-text-primary">
            Live Market Intelligence
          </h2>
          <div className="font-mono text-sm text-text-secondary">
            {currentTime.toLocaleTimeString()} UTC
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-panel p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <span className={`font-mono text-sm font-bold ${stat.color}`}>
                  {stat.change}
                </span>
              </div>
              <div className="font-mono text-2xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-text-secondary/70">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Market Data */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="glass-panel p-3">
            <div className="text-text-secondary mb-1">DeFi Total Value Locked</div>
            <div className="font-mono font-bold text-brand-secondary">$133B+</div>
          </div>
          <div className="glass-panel p-3">
            <div className="text-text-secondary mb-1">DEX Daily Volume</div>
            <div className="font-mono font-bold text-semantic-success">$45.8B</div>
          </div>
          <div className="glass-panel p-3">
            <div className="text-text-secondary mb-1">AI Trading Platforms CAGR</div>
            <div className="font-mono font-bold text-brand-tertiary">~20%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
