/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": {transform: "translateX(8rem)"},
          "100%": {transform: "translateX(0)"},
        },
      },
    },
  },
  plugins: [],
};
