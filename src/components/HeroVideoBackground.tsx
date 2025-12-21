import { useEffect, useState } from 'react';

export function HeroVideoBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  // Generate particles with dynamic positioning
  const particles = Array.from({ length: 60 }, (_, i) => {
    const baseX = (Math.sin(time * 0.02 + i * 0.5) + 1) * 50;
    const baseY = (Math.cos(time * 0.015 + i * 0.3) + 1) * 50;
    const variationX = Math.sin(time * 0.01 + i) * 20;
    const variationY = Math.cos(time * 0.012 + i * 1.5) * 20;
    
    return {
      id: i,
      x: baseX + variationX,
      y: baseY + variationY,
      size: 1 + Math.sin(time * 0.03 + i) * 0.5,
      opacity: 0.3 + Math.sin(time * 0.02 + i * 2) * 0.2,
    };
  });

  // Generate flowing data lines
  const dataLines = Array.from({ length: 8 }, (_, i) => {
    const angle = (time * 0.5 + i * 45) % 360;
    const radius = 30 + Math.sin(time * 0.01 + i) * 20;
    const x1 = 50 + Math.cos(angle * Math.PI / 180) * radius;
    const y1 = 50 + Math.sin(angle * Math.PI / 180) * radius;
    const x2 = 50 + Math.cos((angle + 180) * Math.PI / 180) * radius;
    const y2 = 50 + Math.sin((angle + 180) * Math.PI / 180) * radius;
    
    return {
      id: i,
      x1,
      y1,
      x2,
      y2,
      opacity: 0.1 + Math.sin(time * 0.03 + i) * 0.05,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 102, 204, 0.15) 0%, transparent 50%),
            radial-gradient(800px circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(255, 255, 0, 0.08) 0%, transparent 60%),
            linear-gradient(${45 + time * 0.1}deg, rgba(0, 240, 255, 0.05) 0%, transparent 50%, rgba(0, 102, 204, 0.05) 100%)
          `,
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-brand-tertiary"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
              animation: `pulse-glow ${2 + Math.random() * 2}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Flowing data lines */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {dataLines.map((line) => (
          <line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="url(#lineGradient)"
            strokeWidth="0.1"
            opacity={line.opacity}
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 102, 204, 0)" />
            <stop offset="50%" stopColor="rgba(0, 240, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(0, 102, 204, 0)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Neural network nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (time * 0.8 + i * 30) % 360;
          const radius = 40 + Math.sin(time * 0.02 + i) * 15;
          const x = 50 + Math.cos(angle * Math.PI / 180) * radius;
          const y = 50 + Math.sin(angle * Math.PI / 180) * radius;
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-brand-primary rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                opacity: 0.4 + Math.sin(time * 0.04 + i) * 0.3,
                transform: 'translate(-50%, -50%)',
                animation: `pulse-glow ${1.5 + Math.random()}s ease-in-out infinite alternate`,
              }}
            />
          );
        })}
      </div>

      {/* Circuit board pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 102, 204, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 102, 204, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
          animation: 'circuit-flow 20s linear infinite',
        }}
      />

      {/* Subtle scan lines effect */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 102, 204, 0.3) 2px, rgba(0, 102, 204, 0.3) 4px)',
          animation: 'scan 8s linear infinite',
        }}
      />
    </div>
  );
}
