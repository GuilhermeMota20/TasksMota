/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          800: "#141E33",
        },
      },
      screens: {
        "2xl": "1736px",
      },
    }
  },
  plugins: [],
  darkMode: "class",
}
