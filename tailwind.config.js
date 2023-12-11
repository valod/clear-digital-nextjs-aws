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
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "xl-up": { min: "1280px" },
        // => @media (min-width: 1280px) { ... }

        "c-up": { min: "1205px" },
        // => @media (min-width: 1280px) { ... }  container up

        "c-down": { max: "1205px" },
        // => @media (max-width: 1280px) { ... } container down

        desktop: { min: "992px", max: "1279px" },
        // => @media (min-width: 992px and max-width: 1279px) { ... }

        lg: { max: "991px" },
        // => @media (max-width: 991px) { ... }

        "lg-up": { min: "992px" },
        // => @media (min-width: 1280px) { ... }

        tablet: { min: "768px", max: "991px" },
        // => @media (min-width: 768px and max-width: 991px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "md-up": { min: "768px" },
        // => @media (min-width: 768px) { ... }

        phablet: { min: "596px", max: "767px" },
        // => @media (min-width: 596px and max-width: 767px) { ... }

        sm: { max: "595px" },
        // => @media (max-width: 595px) { ... }

        "sm-up": { min: "596px" },
        // => @media (min-width: 596px) { ... }

        xs: { max: "480px" },
        // => @media (max-width: 480px) { ... }
      },
      width: {
        mainRow: "calc(100% + 20px)",
        threeCard: "calc(33.33% - 20px)",
        halfWidth: "calc(50% - 20px)",
      },
      colors: {
        black: "#000",
        white: "#FFF",
        pink: "#FA198C",
        gray: "#E5E4E7",
      },
    },
  },
  plugins: [],
};
