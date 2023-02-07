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
        darkBlue: {
          700: "#1F2029",
          800: "#181B23",
          900: "#0d1117",
        }
      },
      screens: {
        "2xl": "1736px",
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down .5s ease-out'
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
}
