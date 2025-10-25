/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dojo-dark': '#0a091a',
        'dojo-dark-blue': '#101a35',
        'dojo-light-blue': '#a8cfff',
        'dojo-purple': '#7e57c2',
        'dojo-neon-blue': '#00f6ff',
        'dojo-neon-pink': '#ff00aa',
        'dojo-gold': '#ffd700',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00f6ff, 0 0 10px #00f6ff, 0 0 15px #00f6ff' },
          '50%': { boxShadow: '0 0 10px #00f6ff, 0 0 20px #00f6ff, 0 0 30px #00f6ff' },
        },
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
        pulse: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon-blue': '0 0 8px #00f6ff, 0 0 12px #00f6ff, 0 0 20px #00f6ff',
        'neon-pink': '0 0 8px #ff00aa, 0 0 12px #ff00aa, 0 0 20px #ff00aa',
      },
    },
  },
  plugins: [],
};
