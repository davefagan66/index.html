/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        bakery: {
          brown: '#8B4513',
          cream: '#F5F5DC',
          gold: '#FFD700',
          rose: '#F4A6B7',
          sage: '#9CAF88',
        }
      }
    },
  },
  plugins: [],
};