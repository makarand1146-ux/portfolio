import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Surfaces
        paper: "#F2F3F5",
        "paper-raised": "#FFFFFF",
        ink: "#0A0E17",
        "ink-raised": "#10141F",

        // Text
        "ink-text": "#0E1116",
        "ink-text-muted": "#5B6470",
        "paper-text": "#E7E9ED",
        "paper-text-muted": "#9099A6",

        // Brand
        signal: {
          DEFAULT: "#2F5CFF",
          dim: "#1F3FBF",
          tint: "#E8EDFF",
        },
        amber: {
          DEFAULT: "#E8A33D",
          dim: "#B97E22",
        },

        // Hairlines
        "line-light": "#DCDFE4",
        "line-dark": "#1E232F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.18em",
      },
      maxWidth: {
        content: "1180px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ticker-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ticker-scroll": "ticker-scroll 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
