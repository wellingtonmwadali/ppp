import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        sans: ["Sora", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "#080810",
        card: "#0e0e1a",
        surface: "#12121e",
        indigo: {
          DEFAULT: "#6366f1",
          light: "#818cf8",
        },
        cyan: "#22d3ee",
        muted: "#64748b",
        "muted-light": "#94a3b8",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        blink: "blink 1s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(99,102,241,0.5)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
