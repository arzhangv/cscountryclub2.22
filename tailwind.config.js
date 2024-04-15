/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-botleft-to-topright':
            'linear-gradient(15deg, var(--tw-gradient-stops))',
        cscountryclub: "url('/src/assets/calabasas-country-club-home-photo.jpg')",
      }
    },
    colors: {
      "green-primary": "#68776E",
      "green-secondary": "#AFC8B9",
      "green-tertiary": "#C1DDCC",
    },
    gradientColorStops: (theme) => theme("colors"),
  },
  plugins: [],
};
