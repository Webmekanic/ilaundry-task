/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lightblue: "#E5ECF6",
      deepblue: "#A8C5DA",
      black: "#1C1C1C",
      ash: "rgba(0, 0, 0, 0.05)",
      red: "red",
      lightgray: "rgba(0, 0, 0, 0.4)",
      fadeblue: "#F7F9FB",
      skyblue: "#E3F5FF",
      lightpurple: "#E5ECF6",
      yellow: "yellow",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
