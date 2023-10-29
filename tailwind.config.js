/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#b8b8b8",
        200: "#959595",
        300: "#656565",
        400: "#474747",
        500: "#191919",
        600: "#171717",
        700: "#121212",
        800: "#0e0e0e",
        900: "#0b0b0b",
      },
      secondary: {
        100: "#f8c8c1",
        200: "#f5aea3",
        300: "#f08979",
        400: "#ed725f",
        500: "#e94f37",
        600: "#d44832",
        700: "#a53827",
        800: "#802b1e",
        900: "#622117",
      },
      accent: {
        100: "#ebe3e2",
        200: "#e1d6d3",
        300: "#d3c3bf",
        400: "#cbb8b3",
        500: "#bea6a0",
        600: "#ad9792",
        700: "#877672",
        800: "#695b58",
        900: "#504643",
      },
    },
    fontFamily: {
      poppins: ["var(--font-poppins), sans-serif"],
      montserrat: ["var(--font-montserrat), sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
