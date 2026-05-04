const colors = require("tailwindcss/colors");

const linkHeadingStyles = {
  color: colors.gray[100],
  borderBottomColor: "transparent !important",
  "&:hover": {
    color: `${colors.gray[900]} !important`,
  },
};

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d1117",
        yellow: {
          400: "#F1C40F",
        },
        background: "#f9f9f9",
        "on-background": "#1b1b1b",
        primary: "#705d00",
        "primary-container": "#ffd700",
        "on-primary": "#ffffff",
        "on-primary-container": "#705e00",
        "on-primary-fixed": "#221b00",
        "on-primary-fixed-variant": "#544600",
        "primary-fixed": "#ffe16d",
        "primary-fixed-dim": "#e9c400",
        secondary: "#745853",
        "secondary-container": "#fed7d0",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#795c57",
        "on-secondary-fixed": "#2b1613",
        "on-secondary-fixed-variant": "#5b403c",
        "secondary-fixed": "#ffdad4",
        "secondary-fixed-dim": "#e3beb8",
        tertiary: "#006e1c",
        "tertiary-container": "#8bf088",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#006e1c",
        "on-tertiary-fixed": "#002204",
        "on-tertiary-fixed-variant": "#005313",
        "tertiary-fixed": "#94f990",
        "tertiary-fixed-dim": "#78dc77",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a",
        surface: "#f9f9f9",
        "surface-dim": "#dadada",
        "surface-bright": "#f9f9f9",
        "surface-container": "#eeeeee",
        "surface-container-low": "#f3f3f3",
        "surface-container-high": "#e8e8e8",
        "surface-container-highest": "#e2e2e2",
        "surface-container-lowest": "#ffffff",
        "surface-variant": "#e2e2e2",
        "on-surface": "#1b1b1b",
        "on-surface-variant": "#4d4732",
        "inverse-surface": "#303030",
        "inverse-on-surface": "#f1f1f1",
        "inverse-primary": "#e9c400",
        outline: "#7e775f",
        "outline-variant": "#d0c6ab",
        "surface-tint": "#705d00",
      },
      fontFamily: {
        "headline-md": ["var(--font-epilogue)", "sans-serif"],
        "label-bold": ["var(--font-epilogue)", "sans-serif"],
        "headline-lg": ["var(--font-epilogue)", "sans-serif"],
        "body-lg": ["var(--font-epilogue)", "sans-serif"],
        "display-lg": ["var(--font-epilogue)", "sans-serif"],
        "body-md": ["var(--font-epilogue)", "sans-serif"],
      },
      fontSize: {
        "headline-md": [
          "32px",
          { lineHeight: "1.2", fontWeight: "800" },
        ],
        "label-bold": [
          "14px",
          { lineHeight: "1.0", fontWeight: "700" },
        ],
        "headline-lg": [
          "40px",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" },
        ],
        "body-lg": [
          "18px",
          { lineHeight: "1.6", fontWeight: "500" },
        ],
        "display-lg": [
          "72px",
          { lineHeight: "1.0", letterSpacing: "-0.04em", fontWeight: "900" },
        ],
        "body-md": [
          "16px",
          { lineHeight: "1.6", fontWeight: "400" },
        ],
      },
      typography: {
        xl: {
          css: {
            pre: {
              padding: "0.75rem 0",
              lineHeight: "2.25",
              fontSize: "1rem",
            },
          },
        },
        lg: {
          css: {
            code: {
              "> .line": {
                borderLeft: `2px solid transparent`,
              },
            },
          },
        },
        DEFAULT: {
          css: {
            "h1,h2,h3,h4,h5,h6": { color: colors.white },
            "h2 a": linkHeadingStyles,
            "h3 a": linkHeadingStyles,
            "h4 a": linkHeadingStyles,
            "h5 a": linkHeadingStyles,
            "h6 a": linkHeadingStyles,
            blockquote: {
              fontSize: "90%",
              color: colors.zinc[400],
              borderLeftColor: colors.zinc[600],
              "p::before": {
                display: "none",
              },
              "p::after": {
                display: "none",
              },
            },
            a: {
              textDecoration: "none",
              borderBottom: `2px solid ${colors.blue[400]}`,
              color: colors.blue[400],
              transition:
                "color 0.2s ease, border-color 0.2s ease, background 0.2s ease",
              "&:hover": {
                color: `${colors.zinc[900]} !important`,
                borderBottomColor: `${colors.blue[400]} !important`,
                background: colors.blue[400],
              },
            },
            code: {
              color: "#86e1fc",
              "&::before": {
                content: `"" !important`,
              },
              "&::after": {
                content: `"" !important`,
              },
              fontWeight: "normal",
            },
            "[data-rehype-pretty-code-fragment]:nth-of-type(2) pre": {
              ".line::before": {
                content: "counter(line)",
                counterIncrement: "line",
                display: "inline-block",
                width: "1rem",
                marginRight: "1rem",
                textAlign: "right",
                color: colors.slate[600],
              },

              ".line--highlighted::before": {
                color: colors.slate[400],
              },
            },
            pre: {
              opacity: 0.98,
              background: "rgba(200,200,255,0.05)",
              padding: "0.75rem 0",
              lineHeight: 2,

              "> code": {
                display: "grid",
                counterReset: "line",

                ".word": {
                  background: "rgba(200,200,255,0.15)",
                  padding: "0.25rem",
                  borderRadius: "0.25rem",
                },
                "> .line": {
                  padding: "0 1.25rem",
                  borderLeft: `2px solid transparent`,
                },
                "> .line.line--highlighted": {
                  background: "rgba(200,200,255,0.1)",
                  borderLeftColor: colors.blue[400],
                },
              },
            },
            ":not(pre) > code": {
              background: "rgba(200,200,255,0.1)",
              padding: "0.25rem",
              fontSize: "0.95rem !important",
              borderRadius: "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};