export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        charcoal: '#111111',
        ash: '#1A1A1A',
        silver: '#888888',
      },
      boxShadow: {
        glow: '0 30px 120px rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        radial: 'radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 45%), radial-gradient(circle at bottom, rgba(255,255,255,0.04), transparent 30%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
