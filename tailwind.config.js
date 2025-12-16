/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F1592C',
        'primary-600': '#F47A56',
        bg: '#EAE1D4',
        surface: '#FFFFFF',
        text: '#242424',
        footer: '#161617',
      },
      fontFamily: {
        sans: ['"Noto Sans TC"', 'sans-serif'],
        serif: ['"Roboto Slab"', 'serif'],
      },
    },
  },
  plugins: [],
}
