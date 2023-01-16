/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      md:'540px',
      lg:'768px',
      xl:'976px',
    },
    extend: {},
  },
  plugins: [],
}
