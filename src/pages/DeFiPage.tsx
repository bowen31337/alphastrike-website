import { Coins, Zap, Shield, Globe } from 'lucide-react';

export function DeFiPage() {
  const defiStrategies = [
    {
      icon: Zap,
      title: 'Cross-Chain Arbitrage',
      description: 'Exploit price differences across multiple blockchains and Layer-2 solutions',
      volume: '$868.64M',
      apy: '15-45%',
    },
    {
      icon: Coins,
      title: 'Yield Farming',
      description: 'Automated yield optimization across DeFi protocols with dynamic rebalancing',
      volume: '$133B+',
      apy: '5-200%',
    },
    {
      icon: Shield,
      title: 'MEV Protection',
      description: 'Protect against MEV extraction while capitalizing on arbitrage opportunities',
      volume: '$2.3B',
      apy: '8-25%',
    },
  ];

  const layer2Networks = [
    { name: 'Arbitrum', tvl: '$15.2B', volume: '$2.1B', color: 'text-blue-400' },
    { name: 'Optimism', tvl: '$8.7B', volume: '$1.3B', color: 'text-red-400' },
    { name: 'Polygon', tvl: '$1.2B', volume: '$890M', color: 'text-purple-400' },
    { name: 'Base', tvl: '$3.8B', volume: '$650M', color: 'text-blue-300' },
  ];

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="text-text-primary">DeFi & Web3</span>
            <br />
            <span className="neon-text">Trading</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            AlphaStrike extends beyond traditional markets to capture opportunities 
            in the $133B+ DeFi ecosystem with advanced cross-chain strategies.
          </p>
          
          {/* Key DeFi Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="glass-panel p-4">
              <div className="font-mono text-2xl font-bold text-semantic-success mb-1">
                $133B+
              </div>
              <div className="text-text-secondary text-sm">
                Total Value Locked
              </div>
            </div>
            <div className="glass-panel p-4">
              <div className="font-mono text-2xl font-bold text-brand-tertiary mb-1">
                $45.8B
              </div>
              <div className="text-text-secondary text-sm">
                Daily DEX Volume
              </div>
            </div>
            <div className="glass-panel p-4">
              <div className="font-mono text-2xl font-bold text-brand-primary mb-1">
                37%
              </div>
              <div className="text-text-secondary text-sm">
                DEX vs CEX Share
              </div>
            </div>
            <div className="glass-panel p-4">
              <div className="font-mono text-2xl font-bold text-brand-secondary mb-1">
                200+
              </div>
              <div className="text-text-secondary text-sm">
                Supported Protocols
              </div>
            </div>
          </div>
        </section>

        {/* DeFi Strategies */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-text-primary">Advanced DeFi</span>
              <br />
              <span className="neon-text">Strategies</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {defiStrategies.map((strategy, index) => (
              <div key={index} className="circuit-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mr-4">
                    <strategy.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-text-primary">
                    {strategy.title}
                  </h3>
                </div>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {strategy.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono text-lg font-bold text-semantic-success">
                      {strategy.volume}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Market Volume
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-lg font-bold text-brand-secondary">
                      {strategy.apy}
                    </div>
                    <div className="text-xs text-text-secondary">
                      Typical APY
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Layer 2 Integration */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-text-primary">Layer-2</span>
              <br />
              <span className="neon-text">Integration</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              AlphaStrike optimizes for low-cost, high-throughput Layer-2 solutions, 
              enabling sophisticated strategies previously impossible on mainnet.
            </p>
          </div>

          <div className="glass-panel p-8 mb-12">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-6 text-center">
              Layer 2 Network Comparison
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {layer2Networks.map((network, index) => (
                <div key={index} className="text-center">
                  <h4 className={`font-heading font-semibold text-lg mb-3 ${network.color}`}>
                    {network.name}
                  </h4>
                  <div className="space-y-2">
                    <div>
                      <div className="font-mono text-lg font-bold text-text-primary">
                        {network.tvl}
                      </div>
                      <div className="text-xs text-text-secondary">
                        TVL
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-sm font-bold text-text-secondary">
                        {network.volume}
                      </div>
                      <div className="text-xs text-text-secondary">
                        Daily Volume
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Chart */}
          <div className="glass-panel p-6">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-4 text-center">
              Gas Fees & Throughput Comparison
            </h3>
            <img 
              src="/charts/layer2_comparison.png" 
              alt="Layer 2 Gas Fees and Throughput Comparison"
              className="w-full h-auto rounded"
            />
          </div>
        </section>

        {/* DEX Protocols */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              <span className="text-text-primary">Supported</span>
              <br />
              <span className="neon-text">DEX Protocols</span>
            </h2>
          </div>

          <div className="glass-panel p-8">
            <img 
              src="/charts/top_dex_protocols.png" 
              alt="Top DEX Protocols by Trading Volume"
              className="w-full h-auto rounded mb-6"
            />
            <div className="text-center">
              <p className="text-text-secondary">
                AlphaStrike integrates with all major decentralized exchanges, providing 
                access to the deepest liquidity pools and most efficient trading routes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 text-center">
          <div className="glass-panel p-8 max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl mb-6">
              <span className="text-text-primary">Ready to Trade</span>
              <br />
              <span className="neon-text">DeFi?</span>
            </h2>
            <p className="text-text-secondary mb-8">
              Start exploring the future of automated trading with AlphaStrike's 
              comprehensive DeFi integration and cross-chain capabilities.
            </p>
            <button className="glow-button">
              Get DeFi Access
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
