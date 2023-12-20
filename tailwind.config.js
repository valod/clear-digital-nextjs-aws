/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        largedesktop: {min:"1920px", max: "2560px"},

        desktop: { min: "1281px", max: "1600px" },
        xl: { max: "1280px" },
        "xl-up": { min: "1281px" },

        laptop: { min: "992px", max: "1280px" },
        lg: { max: "991px" },
        "lg-up": { min: "992px" },

        tablet: { min: "768px", max: "991px" },
        md: { max: "767px" },
        "md-up": { min: "768px" },

        phablet: { min: "596px", max: "767px" },
        sm: { max: "595px" },
        "sm-up": { min: "596px" },

        phone: { min: "376px", max: "595px" },
        xs: { max: "375px" },
        "xs-up": { min: "376px" },
      },
      width: {
        mainRow: "calc(100% + 2rem)",
        threeCard: "calc(33.33% - 2rem)",
        halfWidth: "calc(50% - 2rem)",
      },
      colors: {
        black: "#000",
        white: "#FFF",
        pink: "#FA198C",
        gray: "#E5E4E7",
        darkGray: "#989898",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
};
