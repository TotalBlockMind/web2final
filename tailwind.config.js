/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nothing': ['Nothing You Could Do', 'cursive'],
        'neuton': ['Neuton', 'serif'],
        'montserrat-alt': ['Montserrat Alternates', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}