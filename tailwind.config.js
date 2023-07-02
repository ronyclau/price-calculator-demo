/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{src,public}/**/*.{tsx,jsx,htm,html}"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        // Primary colors
        "cyan-soft": "hsl(174, 77%, 80%)",
        "cyan-strong": "hsl(174, 86%, 45%)",
        "red-grayish-light": "hsl(14, 92%, 95%)",
        "red-light": "hsl(15, 100%, 70%)",
        "blue-pale": "hsl(226, 100%, 87%)",

        // Neutral colors
        "blue-very-pale": "hsl(230, 100%, 99%)",
        "blue-grayish-pale": "hsl(224, 65%, 95%)",
        "blue-grayish-light": "hsl(223, 50%, 87%)",
        "blue-grayish": "hsl(225, 20%, 60%)",
        "blue-desat-dark": "hsl(227, 35%, 25%)",
        "blue-dark": "#2b3255",
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
    backgroundImage: {
      "calculator-pattern": "url(./images/bg-pattern.svg)",
      "circle-pattern": "url(./images/pattern-circles.svg)",
      "slider-thumb": "url(./images/icon-slider.svg)",
    },
    listStyleImage: {
      check: "url(./images/icon-check.svg)",
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Range thumb
      // N.B. don't merge these two, it doesn't work well on Chrome
      addVariant("range-thumb-moz", 'input[type="range"]&::-moz-range-thumb');
      addVariant(
        "range-thumb-wk",
        'input[type="range"]&::-webkit-slider-thumb'
      );
    }),
  ],
};
