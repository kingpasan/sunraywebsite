/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#e85c1b",
        primaryDark:"#D55418",
        secondary: "#00f6ff",
        themeTransOrange: "#e85c1bd8",
        whiteTrans: "#0000004d"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        satisfy: ["Satisfy"],
        tiltwarp: ["Tilt Warp"],
        orbitron: ["Orbitron"]
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