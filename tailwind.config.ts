import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        base: {
          bg: "#0B0E14",
          surface: "#12161F",
          surface2: "#181D29",
          border: "#242B3A",
        },
        ink: {
          DEFAULT: "#E4E7EC",
          muted: "#8A92A6",
          faint: "#5C6478",
        },
        signal: {
          amber: "#E8A33D",
          amberDim: "#7A5A22",
          teal: "#3DDC97",
          tealDim: "#1E5C42",
          red: "#E5654F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1a2030 1px, transparent 1px), linear-gradient(to bottom, #1a2030 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease-out both",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
