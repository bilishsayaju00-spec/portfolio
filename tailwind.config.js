/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#E3EDE5',
          glass: '#EDF5F0',
          glassDark: '#09150E',
          border: '#B4D5BF',
          borderDark: '#1D472D',
          emerald: '#059669',
          brightGreen: '#10B981',
          mint: '#34D399',
          teal: '#0D9488',
          textDark: '#0D2318',
          textMuted: '#2B543D',
          textSubtle: '#4F7D63',
          badgeText: '#F4FAF6',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        space: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cyber-sm': '0 2px 8px -2px rgba(5, 150, 105, 0.08)',
        'cyber-md': '0 8px 24px -4px rgba(5, 150, 105, 0.12)',
        'cyber-lg': '0 12px 40px -4px rgba(5, 150, 105, 0.16)',
        'cyber-glow': '0 0 16px rgba(16, 185, 129, 0.35)',
      }
    },
  },
  plugins: [],
}
