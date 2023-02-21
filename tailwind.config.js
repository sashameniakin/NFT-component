/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainBG: "hsl(217, 54%, 11%)",
      cardBG: "hsl(216, 50%, 16%)",
      line: "hsl(215, 32%, 27%)",
      white: "hsl(0, 0%, 100%)",
    },
    fontSize: {
      base: ["22px", "27.72px"],
    },
    extend: {},
  },
  plugins: [],
};
