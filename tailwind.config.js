module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        teal: "#00CED1", // add your custom teal here
      },
      fontFamily: {
        sans: [
          "Host Grotesk",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        "host-grotesk": [
          "Host Grotesk",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
        ],
        helvetica: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        "white-glow": "0 4px 15px rgba(255, 255, 255, 0.4)",
        "teal-glow": "0 4px 15px rgba(0, 206, 209, 0.4)",
        "orange-glow": "0 4px 15px rgba(251, 146, 60, 0.4)",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
