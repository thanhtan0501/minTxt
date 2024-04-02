import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        "second-color": "var(--second-color)",
        "third-color": "var(--third-color)",
      },
      spacing: {
        "margin-spacing": "var(--spacing)",
      },
      colors: {
        "text-color": "var(--text-color)",
      },
      borderRadius: { "button-rounded": "var(--spacing)" },
    },
  },
  plugins: [],
};
export default config;
