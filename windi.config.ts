import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  attributify: {
    prefix: "w-",
  },
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    screens: {
      usm: "350px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        darkgray: "#282c34",
      },
      spacing: {
        "500px": "500px",
        "300px": "300px",
        "90vw": "90vw",
        "d-screen": "100dvh",
      },
    },
  },
  plugins: [formsPlugin],
});
