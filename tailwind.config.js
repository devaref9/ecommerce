/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#273852",
        secondary: "#e56c1b",
      },
      fontFamily: {
        vazir: ["Vazir"],
        kalamehNum: ["kalamehNum"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
