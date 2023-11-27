/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8865B",
        secondary: "#F7EFEA",
        tertiary: "#727272"
      }
    },
  },
  plugins: [],
}