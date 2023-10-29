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
    fontSize: {
      d1: [
        "57px",
        {
          lineHeight: "64px",
          letterSpacing: "-0.25px",
          fontWeight: "800",
        },
      ],
      d2: [
        "45px",
        {
          lineHeight: "52px",
          fontWeight: "700",
        },
      ],
      d3: [
        "36px",
        {
          lineHeight: "44px",
          fontWeight: "700",
        },
      ],
      h1: [
        "32px",
        {
          lineHeight: "40px",
          fontWeight: "600",
        },
      ],
      h2: [
        "28px",
        {
          lineHeight: "36px",
          fontWeight: "500",
        },
      ],
      h3: [
        "24px",
        {
          lineHeight: "32px",
          fontWeight: "500",
        },
      ],
      body_lg: [
        "20px",
        {
          lineHeight: "34px",
          fontWeight: "400",
          letterSpacing: "0.75px",
        },
      ],
      body_uppercase: [
        "16px",
        {
          lineHeight: "20px",
          fontWeight: "400",
          letterSpacing: "0.25px",
        },
      ],
      body_md: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
          letterSpacing: "0.5px",
        },
      ],
      body_sm: [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "400",
          letterSpacing: "0.25px",
        },
      ],
      label_lg: [
        "20px",
        {
          lineHeight: "32px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        },
      ],
      label_md: [
        "16px",
        {
          lineHeight: "24px",
          fontWeight: "400",
          letterSpacing: "0.25px",
        },
      ],
      label_sm: [
        "14px",
        {
          lineHeight: "20px",
          fontWeight: "500",
          letterSpacing: "0.1px",
        },
      ],
    },
    screens: {
      mobile_md: "375px",
      tablet: "768px",
      desktop_md: "1024px",
      desktop_lg: "1440px",
      desktop_xl: "1920px",
    },
    extend: {},
  },
  plugins: [],
};
