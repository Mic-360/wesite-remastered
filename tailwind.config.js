/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#2c2747',
        accent: '#e0ff63',
        plume: '#998ae9',
      },
      fontFamily: {
        primary: 'Archivo, sans-serif', // Adds a new `font-display` class
      },
    },
  },
  plugins: [],
};
