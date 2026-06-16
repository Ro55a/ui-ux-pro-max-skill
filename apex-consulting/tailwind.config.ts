import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  "#FAFAF8",
          100: "#F5F2EC",
          200: "#EBE6DC",
          300: "#DDD7CC",
          400: "#D0C9BC",
          500: "#C4BCAE",
          600: "#9E9890",
          700: "#7A7570",
          800: "#524F4C",
          900: "#2E2C2A",
        },
        catalyst: {
          deep:    "#0A0908",
          base:    "#0F0E0C",
          raised:  "#161512",
          surface: "#1C1A17",
          muted:   "#242220",
          border:  "rgba(255,255,255,0.06)",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up":  "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":  "fadeIn 0.5s ease forwards",
        "shimmer":  "shimmer 4s linear infinite",
        "ticker":   "ticker 24s linear infinite",
        "float":    "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:  { from: { opacity:"0", transform:"translateY(32px)" }, to: { opacity:"1", transform:"translateY(0)" } },
        fadeIn:  { from: { opacity:"0" }, to: { opacity:"1" } },
        shimmer: { from: { backgroundPosition:"-200% 0" }, to: { backgroundPosition:"200% 0" } },
        float:   { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-10px)" } },
        ticker:  { from: { transform:"translateX(0)" }, to: { transform:"translateX(-50%)" } },
      },
      boxShadow: {
        "accent-sm": "0 2px 8px rgba(200,195,185,0.1)",
        "accent-md": "0 4px 24px rgba(200,195,185,0.12)",
        "accent-lg": "0 8px 48px rgba(200,195,185,0.15)",
        "dark-lg":   "0 24px 64px rgba(0,0,0,0.8)",
        "glass":     "0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
