import type { Config } from "tailwindcss"

export default {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "350px",
      },
      colors: {
        main: "#1f29c7",
        ["main-dark"]: "#2B3081",
        ["bg-main"]: "#2232C4",
        secondary: "#F2A826",
        graph: "#FFAD01",
        blackish: "#04040D",
      },
      fontSize: {
        "radio-large": ["17px", "17px"],
        checkbox: ["0.8125rem", "1rem"],
        ["input"]: ["1.0625rem", "1.3125rem"],
        ["p-2xs"]: ["0.4375rem", "0.5625rem"],
        ["p-xs"]: ["0.625rem", "0.75rem"],
        ["p-sm"]: ["0.75rem", "0.9375rem"],
        ["p-md"]: ["1.1875rem", "1.4375rem"],
        ["p-lg"]: ["1.375rem", "1.6875rem"],
        ["p-xl"]: ["1.5625rem", "1.875rem"],
        ["h-xs"]: ["0.9375rem", "1.125rem"],
        ["h-md"]: ["1", "1.25rem"],
        ["h-lg"]: ["23px", "28px"],
        ["h-xl"]: ["2.125rem", "2.5625rem"],
        ["h-2xl"]: ["3.125rem", "3.8125rem"],
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
        13: "3.25rem",
        15: "3.75rem",
        18: "4.5rem",
      },
      backgroundImage: {
        clouds: "url('/victoria-bg.png')",
      },
      gridTemplateColumns: {
        dashboard:
          "minmax(5vw, calc((100% - 400px) / 2)), minmax(0, 1fr), minmax(5vw, calc((100% - 400px) / 2))",
      },
    },
  },
  plugins: [],
} satisfies Config
