/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red1: "#ff4d4d",
        orange1: "#ff9900",
      },
    },
  },
  plugins: [],
}