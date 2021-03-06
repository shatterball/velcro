const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.lightBlue,
      green: colors.green,
    },
    extend: {
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },
      animation: {
        "spin-slow": "spin 1s ease-in-out infinite",
      },
      spacing: {
        60: "15rem",
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
        156: "39rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      textColor: ["disabled", "active"],
    },
  },

  plugins: [],
};
