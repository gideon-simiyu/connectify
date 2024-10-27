/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

import flyonui0 from "flyonui";
import flyonui01 from "flyonui/plugin";

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      fontFamily : {
        primary: "Afacad Flux"
      }
    },
  },
// #171717
  flyonui: {
    themes: [
      {
        primary: {
          primary: colors.amber["700"],
          secondary: colors.emerald["600"],
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": colors.neutral["900"],
        }
      },
    ]
  },

  plugins: [
    flyonui0,
    flyonui01
  ],
}