import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { TechnologyPage } from './pages/TechnologyPage';
import { PerformancePage } from './pages/PerformancePage';
import { DeFiPage } from './pages/DeFiPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background-main circuit-grid">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/performance" element={<PerformancePage />} />
          <Route path="/defi" element={<DeFiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
