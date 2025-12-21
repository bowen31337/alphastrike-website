import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/technology', label: 'Technology' },
    { path: '/performance', label: 'Performance' },
    { path: '/defi', label: 'DeFi' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-main/95 backdrop-blur-sm border-b border-brand-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/alphastrike-logo.png" 
              alt="AlphaStrike" 
              className="h-8 w-auto"
            />
            <span className="font-heading font-bold text-xl text-text-primary">
              AlphaStrike
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-brand-secondary neon-text'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button className="glow-button">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text-primary hover:text-brand-secondary transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-surface border-t border-brand-primary/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-brand-secondary neon-text'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <button className="glow-button w-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
