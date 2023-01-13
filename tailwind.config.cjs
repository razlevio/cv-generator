/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "sm": "576px",
      "md": "960px",
      "lg": "1440px",
      "2xl": "1700px"
    }
  },
  plugins: [],
}
