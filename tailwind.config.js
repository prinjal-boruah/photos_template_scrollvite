/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F0',
        gold: '#D4AF37',
        'soft-brown': '#8B7355',
        'dark-brown': '#3E2723',
        'warm-gray': '#E0D8D0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
