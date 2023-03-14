/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    textShadow: {
      default: "0 2px 0 #000",
      md: "0 2px 2px #000",
      h2: "0 0 3px #FF0000, 0 0 5px #0000FF",
      h1: "0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/assets/images/paper-bg.jpg')",
      },
      textShadow: {
        event: "0 1px 1px rgb(255 255 255 / 50%)",
      },

      rotate: {
        25: "-25deg",
        15: "-15deg",
      },
      fontFamily: {
        hero: ["American Typewriter"],
        handwritten: ["ThrowMyHandsUpintheAir"],
        main: ["Al Bayan"],
      },
      colors: {
        sage: "#788866",
        offwhite: "#FBFAF6",
        beige: "#D9D1C0",
      },
      boxShadow: {
        polaroid: "12px 13px 4px 0px #5f6c51",
        event: "11px 9px 6px 0px #8f897e80;",
        border: "0px 6px 8px 8px #657155;",
      },
      height: {
        49: "490px",
      },
      width: {
        13: "13.666667%",
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addVariant }) {
      addVariant("third", "&:nth-child(3)");
    }),
  ],
};
