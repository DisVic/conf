export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontsDrops: ["FontsDrops", "sans-serif"],
      },
      screens: {
        vrsm: "320px",
        lm: "380px",
        sm: "640px",
        md: "768px",
        custom: "900px",
        xs: { max: "379px" },
        mobile: { max: "435px" },
        nemobile: { min: "436px" },
        lg: "1024px",
        ll: "1150px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1636px",
        cc: "379px",
        vv: "400px",
      },
    },
  },
  plugins: [],
};
