// /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'infinite-scroll': {
          'to': {
            left: '-20vw',
          },
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s infinite linear',
      },
    },
  },
  plugins: [],
};