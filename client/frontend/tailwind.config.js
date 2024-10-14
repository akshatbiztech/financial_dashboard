/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#663939",
        white: "#FFFFFF",
        cream: "#E2DDC0",
        black: "#000000",
      },
      fontFamily: {
        tbold: ["Tiempos-Bold"],
        amedium: ["Avenir-Medium"],
      },
    },
  },
  plugins: [],
};

