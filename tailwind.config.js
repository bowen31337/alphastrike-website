/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				// AlphaStrike Design System
				brand: {
					primary: '#0066CC', // Electric Blue
					secondary: '#FFFF00', // Neon Yellow  
					tertiary: '#00F0FF', // Cyan
				},
				background: {
					main: '#020408', // Deep Void
					surface: '#0B1221', // Circuit Board Blue-Black
					overlay: 'rgba(2, 4, 8, 0.8)',
				},
				text: {
					primary: '#F8FAFC', // White/Slate-50
					secondary: '#94A3B8', // Slate-400
					accent: '#FFFF00', // Yellow Text
					inverse: '#000000', // Black on Yellow
				},
				semantic: {
					success: '#10B981',
					warning: '#F59E0B', 
					error: '#EF4444',
					info: '#0066CC',
				},
				// Keep existing shadcn colors for compatibility
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0066CC',
					foreground: '#F8FAFC',
				},
				secondary: {
					DEFAULT: '#FFFF00',
					foreground: '#000000',
				},
				accent: {
					DEFAULT: '#00F0FF',
					foreground: '#020408',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			fontFamily: {
				heading: ['Space Grotesk', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			fontSize: {
				'xs': '12px',
				'sm': '14px', 
				'base': '16px',
				'lg': '20px',
				'xl': '24px',
				'2xl': '32px',
				'3xl': '48px',
				'4xl': '64px',
			},
			spacing: {
				'1': '4px',
				'2': '8px',
				'3': '12px', 
				'4': '16px',
				'6': '24px',
				'8': '32px',
				'12': '48px',
				'16': '64px',
				'24': '96px',
				'32': '128px',
			},
			boxShadow: {
				'glow-blue': '0 0 15px rgba(0, 102, 204, 0.3)',
				'glow-yellow': '0 0 25px rgba(255, 255, 0, 0.4)',
			},
			transitionTimingFunction: {
				'fast': '200ms ease-out',
				'medium': '300ms ease-out',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px rgba(0, 102, 204, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 102, 204, 0.6)' },
				},
				'circuit-flow': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'scan': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'circuit-flow': 'circuit-flow 2s linear infinite',
				'scan': 'scan 8s linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}
