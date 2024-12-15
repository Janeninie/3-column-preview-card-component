import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          brightOrange: "hsl(31, 77%, 52%)",
          darkCyan: "hsl(184, 100%, 22%)",
          veryDarkCyan: "hsl(179, 100%, 13%)",
        },
        second: {
          transparentWhite: "hsla(0, 0%, 100%, 0.75)",
          veryLightGray: "hsl(0, 0%, 95%)",
        },
      },
      fontFamily: {
        "big-shoulders": ["Big Shoulders Display", "sans-serif"],
        "lexend-deca": ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
