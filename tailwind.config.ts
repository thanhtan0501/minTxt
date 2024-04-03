import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "second-color": "var(--second-color)",
        "third-color": "var(--third-color)",
      },
      borderColor: {
        "third-color": "var(--third-color)",
      },
      spacing: {
        "margin-spacing": "var(--spacing)",
      },
      colors: {
        "text-color": "var(--text-color)",
        "third-color": "var(--third-color)",
      },
      borderRadius: { "button-rounded": "var(--spacing)" },
    },
  },
  plugins: [],
};
export default config;
