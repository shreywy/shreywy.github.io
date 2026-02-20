/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-bg': 'rgba(255, 255, 255, 0.05)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      backgroundImage: {
        'gradient-mesh': 'linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-mid) 50%, var(--gradient-end) 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 4s ease-in-out infinite',
        'float-fast': 'float 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'glow-slow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-soft': 'pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
        'orb': 'orb 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'blob2': 'blob2 7s infinite',
        'blob3': 'blob3 7s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        orb: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -20px) scale(1.1)' },
          '50%': { transform: 'translate(-10px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(-20px, -10px) scale(1.05)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        blob: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        blob2: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-25px, 50px) scale(0.9)' },
          '66%': { transform: 'translate(35px, -10px) scale(1.1)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
        blob3: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, 10px) scale(1.05)' },
          '66%': { transform: 'translate(-35px, -30px) scale(0.95)' },
          '100%': { transform: 'translate(0, 0) scale(1)' },
        },
      },
      spacing: {
        'glass': '0.5px',
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.1' }],
        'heading': ['2.5rem', { lineHeight: '1.2' }],
        'subheading': ['1.5rem', { lineHeight: '1.3' }],
      },
      transitionDuration: {
        'theme': '300ms',
      },
      transitionDelay: {
        '2s': '2s',
        '4s': '4s',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.glass': {
          '@apply backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl': {},
        },
        '.glass-dark': {
          '@apply backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl': {},
        },
      });
    },
  ],
}
