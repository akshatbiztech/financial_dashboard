/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          DEFAULT: "#5a189a",
          100: "#9d4edd",
          200: "#e0aaff",
        },
        white: "#FFFFFF",
        cream: "#E2DDC0",
        black: "#000000",
        green: {
          DEFAULT:"#127A1A",
        }
      },
      fontFamily: {
        tbold: ["Tiempos-Bold"],
        amedium: ["Avenir-Medium"],
      },
    },
  },
  plugins: [],
};
