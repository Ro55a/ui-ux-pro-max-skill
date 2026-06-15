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
        gold: {
          50:  "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        stone: { 950: "#0C0A09" },
        apex: {
          deep:    "#080705",
          base:    "#0C0A09",
          raised:  "#161412",
          surface: "#1C1917",
          muted:   "#292524",
          border:  "rgba(255,255,255,0.07)",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #B45309 0%, #F59E0B 50%, #FCD34D 100%)",
        "dark-gradient": "linear-gradient(180deg, #080705 0%, #0C0A09 100%)",
        "glow-radial":   "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245,158,11,0.15) 0%, transparent 70%)",
      },
      animation: {
        "fade-up":    "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "slide-left": "slideLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "float":      "float 6s ease-in-out infinite",
        "line-grow":  "lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        "shimmer":    "shimmer 2s linear infinite",
        "border-glow":"borderGlow 2s ease-in-out infinite",
        "ticker":     "ticker 20s linear infinite",
      },
      keyframes: {
        fadeUp:     { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:     { from: { opacity: "0" }, to: { opacity: "1" } },
        slideLeft:  { from: { opacity: "0", transform: "translateX(60px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        glowPulse:  { "0%,100%": { opacity: "0.4", transform: "scale(1)" }, "50%": { opacity: "0.8", transform: "scale(1.05)" } },
        float:      { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        lineGrow:   { from: { width: "0%" }, to: { width: "100%" } },
        shimmer:    { from: { backgroundPosition: "-200% 0" }, to: { backgroundPosition: "200% 0" } },
        ticker:     { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        borderGlow: { "0%,100%": { boxShadow: "0 0 0 1px rgba(245,158,11,0.2)" }, "50%": { boxShadow: "0 0 0 2px rgba(245,158,11,0.5), 0 0 20px rgba(245,158,11,0.1)" } },
      },
      boxShadow: {
        "gold-sm": "0 2px 8px rgba(245,158,11,0.15)",
        "gold-md": "0 4px 24px rgba(245,158,11,0.2)",
        "gold-lg": "0 8px 48px rgba(245,158,11,0.25)",
        "dark-lg": "0 24px 64px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
