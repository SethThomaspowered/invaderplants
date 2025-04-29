/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#f0f9f0',
          100: '#dcefdc',
          200: '#bfe0bf',
          300: '#93cc93',
          400: '#68b568',
          500: '#4CAF50',
          600: '#3e9042',
          700: '#357238',
          800: '#2e5b30',
          900: '#274b29',
        },
        brown: {
          50: '#f8f5f4',
          100: '#f0e9e6',
          200: '#e0d0c9',
          300: '#c9b0a6',
          400: '#b18d7d',
          500: '#8D6E63',
          600: '#7d5f55',
          700: '#674c45',
          800: '#563f3a',
          900: '#493631',
        },
        amber: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#ff8f00',
          900: '#ff6f00',
        },
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui'],
        heading: ['Quicksand', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};