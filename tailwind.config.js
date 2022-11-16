module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "7.5rem",
        "2xl": "7.5rem",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    maxWidth: {
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "54rem",
      "5xl": "60rem",
    },
    fontSize: {
      xs: ".75rem",
      min: "0.8125rem", //13
      sm: ".875rem",
      tiny: ".875rem",
      base: "1.0625rem", // 17
      lg: "1.125rem", // 18
      xl: "1.375rem", // 22
      "2xl": "2rem", // 32
      "3xl": "2.25rem", // 36
      "4xl": "2.5rem", // 40
      "5xl": "3rem", // 48
      "6xl": "3.5rem", // 56
      "7xl": "3.875rem", // 62
      "8xl": "4.5rem", // 72
    },
    colors: {
      transparent: "transparent",
      lightBlue: "#9CC9FF",
      lightBlack: "#3F3F3F",
      pink: "#FF6CA5",
      black: "#000000",
      white: "#FFFFFF",
      gray: "#F5F5F5",
      darkGray: "#BCBCBC",
    },
    borderRadius: {
      none: "0",
      sm: "3px",
      DEFAULT: "3px",
      md: "10px",
      xl: "16px",
      lg: "20px",
      full: "9999px",
    },
    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
    },
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("autoprefixer")],
};
