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
