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
      colors: {
        "darkBlue": "#0B1340",
        "darkBlue2": "#162780",
        "balanceBlue": "#213ABF",
        "lightBlue2": "#2746E6",
        "lightBlue": "#2B4EFF",
      },
    },
  },
  plugins: [],
};
