import { EnsembleDiagram } from '../components/EnsembleDiagram';
import { AgentSelection } from '../components/AgentSelection';
import { RiskManagement } from '../components/RiskManagement';
import { Architecture } from '../components/Architecture';

export function TechnologyPage() {
  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
            <span className="text-text-primary">Advanced</span>
            <br />
            <span className="neon-text">ML Ensemble Technology</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Discover how AlphaStrike's sophisticated machine learning ensemble combines XGBoost, 
            LightGBM, and LSTM to deliver superior trading performance through dynamic adaptation.
          </p>
        </section>

        <EnsembleDiagram />
        <AgentSelection />
        <RiskManagement />
        <Architecture />
      </div>
    </main>
  );
}
