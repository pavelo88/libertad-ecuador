import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "!./node_modules/**",
    ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          500: "#10b981",
          600: "#059669",
        },
        gold: {
          400: "#f3cd68",
          500: "#e6b93e",
          600: "#d8a930",
        },
        navy: {
          800: "#0f172a",
          900: "#090e17",
          950: "#050810",
        },
      },
    },
  },
  plugins: [],
};
export default config;
