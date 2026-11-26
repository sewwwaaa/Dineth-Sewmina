import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#020604",
          900: "#050c08",
          800: "#0a1610",
          700: "#102219",
        },
        navy: {
          600: "#0e5566",
          500: "#0ea5c4",
          400: "#22d3ee",
        },
        accent: {
          500: "#00e07a",
          400: "#39ff9f",
          300: "#9dffcf",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(57,255,159,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,159,0.05) 1px, transparent 1px)",
      },
      backgroundSize: { grid: "56px 56px" },
      keyframes: {
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(650%)" } },
        blink: { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
      },
    },
  },
  plugins: [],
};

export default config;
