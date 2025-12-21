import { Zap, TrendingUp } from 'lucide-react';
import { HeroVideoBackground } from './HeroVideoBackground';

export function HeroSection() {

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Video Background */}
      <HeroVideoBackground />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background-main/80" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Logo Animation */}
        <div className="mb-8 animate-pulse-glow">
          <img 
            src="/alphastrike-logo.png" 
            alt="AlphaStrike" 
            className="h-16 w-auto mx-auto mb-4"
          />
        </div>

        {/* Main Headline */}
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
          <span className="text-text-primary">The Future of</span>
          <br />
          <span className="neon-text">AI-Powered Trading</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
          Harness the power of machine learning ensemble technology to achieve 
          <span className="text-brand-secondary font-semibold"> 23% higher returns</span> than manual trading
        </p>

        {/* Feature Icons */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <div className="flex items-center space-x-2 text-brand-tertiary">
            <Zap className="w-5 h-5" />
            <span className="font-mono text-sm">XGBoost</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-tertiary">
            <TrendingUp className="w-5 h-5" />
            <span className="font-mono text-sm">LSTM</span>
          </div>
          <div className="flex items-center space-x-2 text-brand-tertiary">
            <div className="w-5 h-5 bg-brand-primary rounded-full" />
            <span className="font-mono text-sm">LightGBM</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="glow-button text-lg px-8 py-4">
            Start Automated Trading
          </button>
          <button className="border border-brand-primary text-brand-primary px-8 py-4 rounded-sm font-heading font-semibold uppercase tracking-wide hover:bg-brand-primary hover:text-background-main transition-all duration-200">
            View Live Demo
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-brand-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
