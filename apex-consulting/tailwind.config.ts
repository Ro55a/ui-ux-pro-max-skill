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
        "color-1": "hsl(var(--color-1))",
        "color-2": "hsl(var(--color-2))",
        "color-3": "hsl(var(--color-3))",
        "color-4": "hsl(var(--color-4))",
        "color-5": "hsl(var(--color-5))",
        accent: {
          50:  "#FAFAF8",
          100: "#F5F3EF",
          200: "#EAE6DF",
          300: "#DDD8CE",
          400: "#D0C9BC",
          500: "#C4BCAE",
          600: "#9E9890",
          700: "#7A7570",
          800: "#5A5651",
          900: "#3A3734",
        },
        catalyst: {
          deep:    "#0A0908",
          base:    "#0F0E0C",
          raised:  "#161512",
          surface: "#1C1A17",
          muted:   "#242220",
          border:  "rgba(255,255,255,0.06)",
        },
        stone: {
          950: "#0C0A09",
        },
        apex: {
          deep:    "#0A0908",
          base:    "#0F0E0C",
          raised:  "#161512",
          surface: "#1C1A17",
          muted:   "#242220",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #7A7570 0%, #C4BCAE 50%, #D0C9BC 100%)",
        "dark-gradient":   "linear-gradient(180deg, #0A0908 0%, #0F0E0C 100%)",
      },
      animation: {
        "fade-up":     "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":     "fadeIn 0.5s ease forwards",
        "slide-left":  "slideLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "glow-pulse":  "glowPulse 4s ease-in-out infinite",
        "float":       "float 7s ease-in-out infinite",
        "line-grow":   "lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        "shimmer":     "shimmer 4s linear infinite",
        "border-glow": "borderGlow 3s ease-in-out infinite",
        "ticker":      "ticker 24s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideLeft: {
          from: { opacity: "0", transform: "translateX(60px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.3", transform: "scale(1)" },
          "50%":     { opacity: "0.6", transform: "scale(1.04)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        lineGrow: {
          from: { width: "0%" },
          to:   { width: "100%" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to:   { backgroundPosition: "200% 0"  },
        },
        borderGlow: {
          "0%,100%": { boxShadow: "0 0 0 1px rgba(208,201,188,0.1)" },
          "50%":     { boxShadow: "0 0 0 1px rgba(208,201,188,0.25), 0 0 24px rgba(208,201,188,0.05)" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "gradient-border": {
          "0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
          "25%":      { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
          "50%":      { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
          "75%":      { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
        },
        "gradient-1": {
          "0%, 100%": { top: "0", right: "0" },
          "50%":      { top: "50%", right: "25%" },
          "75%":      { top: "25%", right: "50%" },
        },
        "gradient-2": {
          "0%, 100%": { top: "0", left: "0" },
          "60%":      { top: "75%", left: "25%" },
          "85%":      { top: "50%", left: "50%" },
        },
        "gradient-3": {
          "0%, 100%": { bottom: "0", left: "0" },
          "40%":      { bottom: "50%", left: "25%" },
          "65%":      { bottom: "25%", left: "50%" },
        },
        "gradient-4": {
          "0%, 100%": { bottom: "0", right: "0" },
          "50%":      { bottom: "25%", right: "40%" },
          "90%":      { bottom: "50%", right: "25%" },
        },
      },
      boxShadow: {
        "dark-lg": "0 24px 64px rgba(0,0,0,0.8)",
        "glass":   "0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
