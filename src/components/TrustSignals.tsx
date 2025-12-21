import { Shield, Award, Users, TrendingUp } from 'lucide-react';

export function TrustSignals() {
  const trustMetrics = [
    {
      icon: Shield,
      value: '99.9%',
      label: 'Uptime SLA',
      description: 'Enterprise-grade reliability',
    },
    {
      icon: Award,
      value: 'A+',
      label: 'Security Rating',
      description: 'Bank-level encryption',
    },
    {
      icon: Users,
      value: '10K+',
      label: 'Active Users',
      description: 'Trusted by traders worldwide',
    },
    {
      icon: TrendingUp,
      value: '23%',
      label: 'Avg. Performance',
      description: 'Higher returns vs manual',
    },
  ];

  const logos = [
    'TechCrunch', 'Forbes', 'Bloomberg', 'CoinDesk', 'Yahoo Finance', 'MarketWatch'
  ];

  const certifications = [
    'SOC 2 Compliant',
    'ISO 27001 Certified',
    'GDPR Compliant',
    'PCI DSS Level 1'
  ];

  return (
    <section className="py-24 bg-background-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
            <span className="text-text-primary">Trusted by</span>
            <br />
            <span className="neon-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of traders, institutions, and financial professionals who rely on AlphaStrike 
            for their automated trading needs.
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background-surface rounded-full border border-brand-primary/30 mb-4">
                <metric.icon className="w-8 h-8 text-brand-primary" />
              </div>
              <div className="font-mono text-3xl font-bold text-text-primary mb-2">
                {metric.value}
              </div>
              <div className="font-semibold text-text-secondary mb-1">
                {metric.label}
              </div>
              <div className="text-sm text-text-secondary/70">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Media Coverage */}
        <div className="mb-16">
          <h3 className="text-center font-heading font-semibold text-xl text-text-secondary mb-8">
            Featured In
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="text-text-secondary font-semibold text-lg tracking-wide"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="glass-panel p-8 text-center">
          <h3 className="font-heading font-semibold text-xl text-text-primary mb-6">
            Security & Compliance
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-background-surface border border-brand-primary/30 rounded-sm"
              >
                <span className="text-sm font-semibold text-text-secondary">
                  {cert}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-text-secondary/70 mt-6 max-w-2xl mx-auto">
            AlphaStrike maintains the highest standards of security and compliance, 
            ensuring your data and funds are protected by enterprise-grade security measures.
          </p>
        </div>

        {/* Testimonial Quote */}
        <div className="text-center mt-16">
          <div className="glass-panel p-8 max-w-4xl mx-auto">
            <blockquote className="text-2xl font-heading font-medium text-text-primary mb-6 italic">
              "AlphaStrike's ensemble approach to AI trading has transformed our portfolio performance. 
              The technology is sophisticated yet accessible."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-text-primary">Sarah Chen</div>
                <div className="text-sm text-text-secondary">Portfolio Manager, Alpha Capital</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
