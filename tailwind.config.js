/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Washi paper — warm off-white backgrounds
        washi: {
          DEFAULT: "#FAF9F6",
          50: "#FDFDFB",
          100: "#FAF9F6",
          200: "#F2F0E9",
        },
        // Sumi — ink, for text
        sumi: {
          DEFAULT: "#2E2E2E",
          light: "#4A4A48",
          muted: "#76746E",
        },
        // Matcha / sage — the light-green brand accent
        matcha: {
          50: "#F1F5F0",
          100: "#E1EADF",
          200: "#C6D7C2",
          300: "#A9C2A4",
          400: "#8AA983",
          500: "#7C9A84", // primary accent
          600: "#5F7A6B",
          700: "#4C6356",
          800: "#3B4D43",
          900: "#2C3A33",
        },
      },
      fontFamily: {
        serif: ['"Zen Old Mincho"', "Georgia", "serif"],
        sans: ['"Zen Kaku Gothic New"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        zen: "0.18em",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "draw-enso": {
          "0%": { strokeDashoffset: "760" },
          "100%": { strokeDashoffset: "120" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        "draw-enso": "draw-enso 2.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};
