import { Cpu, Database, Cloud, Network } from 'lucide-react';

export function Architecture() {
  const architectureComponents = [
    {
      icon: Database,
      title: 'Data Pipeline',
      description: 'Real-time market data ingestion and preprocessing',
      details: [
        'Multi-source data feeds',
        'Real-time normalization',
        'Sentiment analysis integration',
        'Technical indicator computation',
      ],
    },
    {
      icon: Cpu,
      title: 'ML Processing',
      description: 'Distributed ensemble model execution',
      details: [
        'XGBoost gradient boosting',
        'LSTM neural networks',
        'LightGBM optimization',
        'Ensemble weighting algorithms',
      ],
    },
    {
      icon: Network,
      title: 'Risk Engine',
      description: 'Real-time risk assessment and control',
      details: [
        'Portfolio risk scoring',
        'Position sizing algorithms',
        'Volatility monitoring',
        'Automated kill switches',
      ],
    },
    {
      icon: Cloud,
      title: 'Execution Layer',
      description: 'Multi-broker execution with smart routing',
      details: [
        'Best execution algorithms',
        'Slippage minimization',
        'Multi-exchange connectivity',
        'Latency optimization',
      ],
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
          <span className="text-text-primary">System</span>
          <br />
          <span className="neon-text">Architecture</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          AlphaStrike's architecture is designed for scalability, reliability, and performance, 
          built on enterprise-grade infrastructure with military-grade security.
        </p>
      </div>

      {/* Architecture Diagram */}
      <div className="glass-panel p-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureComponents.map((component, index) => (
            <div key={index} className="relative">
              <div className="circuit-card h-full">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <component.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-text-primary">
                    {component.title}
                  </h3>
                  <p className="text-text-secondary text-sm mt-2">
                    {component.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {component.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-xs text-text-secondary">
                      <div className="w-1 h-1 bg-brand-tertiary rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Arrow to next component */}
              {index < architectureComponents.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <div className="w-6 h-0.5 bg-brand-primary"></div>
                  <div className="absolute right-0 top-0 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-l-4 border-l-brand-primary border-y-2 border-y-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="circuit-card text-center">
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
            Performance
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary">Latency</span>
              <span className="font-mono text-semantic-success">&lt;50ms</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Throughput</span>
              <span className="font-mono text-semantic-success">10M+ ops/sec</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Uptime</span>
              <span className="font-mono text-semantic-success">99.99%</span>
            </div>
          </div>
        </div>

        <div className="circuit-card text-center">
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
            Scalability
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary">Concurrent Users</span>
              <span className="font-mono text-brand-tertiary">100K+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Data Processing</span>
              <span className="font-mono text-brand-tertiary">Petabyte scale</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Auto-scaling</span>
              <span className="font-mono text-brand-tertiary">Enabled</span>
            </div>
          </div>
        </div>

        <div className="circuit-card text-center">
          <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">
            Security
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-text-secondary">Encryption</span>
              <span className="font-mono text-brand-secondary">AES-256</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Authentication</span>
              <span className="font-mono text-brand-secondary">Multi-factor</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Compliance</span>
              <span className="font-mono text-brand-secondary">SOC 2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="glass-panel p-8">
        <h3 className="font-heading font-semibold text-2xl text-text-primary mb-8 text-center">
          Technology Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold text-brand-primary mb-3">Machine Learning</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• TensorFlow/PyTorch</li>
              <li>• XGBoost</li>
              <li>• LightGBM</li>
              <li>• Scikit-learn</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary mb-3">Infrastructure</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• AWS/GCP</li>
              <li>• Kubernetes</li>
              <li>• Docker</li>
              <li>• Redis/PostgreSQL</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary mb-3">APIs & Integration</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• REST/GraphQL</li>
              <li>• WebSocket</li>
              <li>• FIX Protocol</li>
              <li>• OpenAPI</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-primary mb-3">Monitoring</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Prometheus</li>
              <li>• Grafana</li>
              <li>• ELK Stack</li>
              <li>• Custom Dashboards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
