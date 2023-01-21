module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d1117",
        yellow: {
          400: "#F1C40F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
