import { ArrowRight, Play, Download } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background-surface to-background-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main CTA */}
          <div className="mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6">
              <span className="text-text-primary">Ready to Transform</span>
              <br />
              <span className="neon-text">Your Trading?</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Join the AI trading revolution and experience the power of machine learning ensemble technology. 
              Start with a free demo and see the difference advanced AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glow-button text-lg px-8 py-4 flex items-center justify-center">
                Start Free Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-brand-primary text-brand-primary px-8 py-4 rounded-sm font-heading font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-background-main transition-all duration-200 flex items-center justify-center">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo Video
              </button>
            </div>
          </div>

          {/* Secondary Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Download Whitepaper */}
            <div className="glass-panel p-6 text-center">
              <Download className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                Technical Whitepaper
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Deep dive into our ML ensemble architecture and performance metrics
              </p>
              <button className="text-brand-secondary font-semibold text-sm hover:underline">
                Download PDF →
              </button>
            </div>

            {/* API Documentation */}
            <div className="glass-panel p-6 text-center">
              <div className="w-8 h-8 bg-brand-primary rounded mx-auto mb-4 flex items-center justify-center">
                <span className="text-background-main font-mono text-sm font-bold">API</span>
              </div>
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                API Documentation
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Integrate AlphaStrike's AI engine into your existing systems
              </p>
              <button className="text-brand-secondary font-semibold text-sm hover:underline">
                View Docs →
              </button>
            </div>

            {/* Schedule Demo */}
            <div className="glass-panel p-6 text-center">
              <Play className="w-8 h-8 text-brand-primary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">
                Schedule Demo
              </h3>
              <p className="text-text-secondary text-sm mb-4">
                Book a personalized demo with our AI trading specialists
              </p>
              <button className="text-brand-secondary font-semibold text-sm hover:underline">
                Book Meeting →
              </button>
            </div>
          </div>

          {/* Final Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-mono text-3xl font-bold text-brand-secondary mb-2">
                5 min
              </div>
              <div className="text-text-secondary">
                Average setup time
              </div>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-semantic-success mb-2">
                24/7
              </div>
              <div className="text-text-secondary">
                AI monitoring & support
              </div>
            </div>
            <div>
              <div className="font-mono text-3xl font-bold text-brand-tertiary mb-2">
                $0
              </div>
              <div className="text-text-secondary">
                Free trial, no credit card
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
