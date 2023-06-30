/* eslint-env node */
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
      },
    },
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },
  },
  plugins: [],
};
