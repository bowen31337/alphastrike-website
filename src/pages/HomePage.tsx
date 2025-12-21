import { HeroSection } from '../components/HeroSection';
import { PerformanceTicker } from '../components/PerformanceTicker';
import { ValueProposition } from '../components/ValueProposition';
import { MarketOpportunity } from '../components/MarketOpportunity';
import { TrustSignals } from '../components/TrustSignals';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <main className="pt-16">
      <HeroSection />
      <PerformanceTicker />
      <ValueProposition />
      <MarketOpportunity />
      <TrustSignals />
      <CTASection />
    </main>
  );
}
