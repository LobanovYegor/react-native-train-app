/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
const colors = require("./constants/_colors.js");

/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require('nativewind/preset')],
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PrimaryMedium: ["PrimaryMedium"],
        PrimaryText: ["PrimaryText"],
      },
      colors: colors,
    },
  },
  plugins: [],
};