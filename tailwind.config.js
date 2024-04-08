/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
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
}
