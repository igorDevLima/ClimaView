/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      "sunny": "#F1CC38",
      "clean": "#48AFCF",
      "rainy": "#32486C",
      'white': '#ffffff'
    },
    opacity: {
      "57": '.57'
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
};