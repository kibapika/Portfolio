/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {    
      screens: {
      s: "390px",
      md: "768px",
      lg: "1060px"
    }},
  },
  plugins: [],
}