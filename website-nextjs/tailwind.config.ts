import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "columnbia-blue": "#BFDBF7",
        "dark-green": "#4C5C51",
        "dark-grey": "#8C8C8C",
        "green-pop": "#6B9080",
        "grey": "#E4E2DF",
        "gunmetal": "#022B3A",
        "lavender": "#E1E5F2",
        "navy": "#022B3B",
        "neutral": "##BFD8C7",
        "olive": "#7C9885",
        "stroke": "#EBEFF2",
        "teal": "#1F7A8C",
        "white": "#ffffff",
      },
      fontFamily: {
        league: ["var(--font-league-spartan)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config