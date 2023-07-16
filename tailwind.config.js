/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-50": "#f1f9f6",
        "green-100": "#ebf5f1",
        "green-200": "#d5ebe2",
        "green-300": "#77bfa3",
        "green-400": "#6bac93",
        "green-500": "#5f9982",
        "green-600": "#598f7a",
        "green-700": "#477362",
        "green-800": "#365649",
        "green-900": "#2a4339",
      },
      fontFamily: {
        robotoSlab: '"Roboto Slab", sans-serif',
        roboto: '"Roboto" sans-serif',
      },
    },
  },
  plugins: [],
};
