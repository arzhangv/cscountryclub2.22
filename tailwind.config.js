/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme')

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Libre Franklin' // <-- Roboto is a default sans font now

  // <-- you may provide more font fallbacks here
];

module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily:fontFamily,
    extend: {
      backgroundImage: {
        "gradient-botleft-to-topright":
          "linear-gradient(15deg, var(--tw-gradient-stops))",
        cscountryclub:
          "url('/src/assets/calabasas-country-club-home-photo.jpg')",
      },
    },
    colors: {
      "green-primary": "#68776E",
      "green-secondary": "#AFC8B9",
      "green-tertiary": "#C1DDCC",
      "green-button": "#1E7640"
    },
    gradientColorStops: (theme) => theme("colors"),
  },
  plugins: [],
};

module.exports = withMT(module.exports);
