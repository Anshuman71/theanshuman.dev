module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        yellow: {
          400: "#F1C40F",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
