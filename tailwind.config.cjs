/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#e85c1b",
        secondary: "#00f6ff",
        themeTransOrange: "#e85c1bd8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        satisfy: ["Satisfy"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};