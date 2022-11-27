/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: "#f5f3f4",
      lightGreen: "#84dcc6",
      green: "#3ab4b3",
      darkGreen: "#0ead69",
      yellow: "#fdaf1d",
      red: "#ee4266",
      black: "#0a0908",
    },
    screens: {
      mobile: "320px",
      // => @media (min-width: 320px) { ... }
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
