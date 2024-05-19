import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--text-color)",
        background: "var(--background-color)",
        "dark-text": "var(--dark-text-color)",
        "dark-background": "var(--dark-background-color)",
      },
      borderWidth: {
        1: "1px",
      },
      fontSize: {
        "4.5xl": "2.75rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
