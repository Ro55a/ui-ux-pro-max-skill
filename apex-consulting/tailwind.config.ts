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
          50:  "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        catalyst: {
          deep:    "#020B0A",
          base:    "#051210",
          raised:  "#0A1F1D",
          surface: "#0F2825",
          muted:   "#163330",
          border:  "rgba(255,255,255,0.07)",
        },
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #0F766E 0%, #14B8A6 50%, #5EEAD4 100%)",
        "dark-gradient":   "linear-gradient(180deg, #020B0A 0%, #051210 100%)",
        "glow-radial":     "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,184,166,0.12) 0%, transparent 70%)",
      },
      animation: {
        "fade-up":     "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":     "fadeIn 0.5s ease forwards",
        "slide-left":  "slideLeft 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "glow-pulse":  "glowPulse 3s ease-in-out infinite",
        "float":       "float 6s ease-in-out infinite",
        "line-grow":   "lineGrow 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        "shimmer":     "shimmer 2s linear infinite",
        "border-glow": "borderGlow 2s ease-in-out infinite",
        "ticker":      "ticker 20s linear infinite",
      },
      keyframes: {
        fadeUp:    { from: { opacity: "0", transform: "translateY(40px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:    { from: { opacity: "0" }, to: { opacity: "1" } },
        slideLeft: { from: { opacity: "0", transform: "translateX(60px)" }, to: { opacity: "1", transform: "translateX(0)" } },
        glowPulse: { "0%,100%": { opacity: "0.4", transform: "scale(1)" }, "50%": { opacity: "0.8", transform: "scale(1.05)" } },
        float:     { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
        lineGrow:  { from: { width: "0%" }, to: { width: "100%" } },
        shimmer:   { from: { backgroundPosition: "-200% 0" }, to: { backgroundPosition: "200% 0" } },
        borderGlow:{ "0%,100%": { boxShadow: "0 0 0 1px rgba(20,184,166,0.2)" }, "50%": { boxShadow: "0 0 0 2px rgba(20,184,166,0.5), 0 0 20px rgba(20,184,166,0.1)" } },
        ticker:    { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      boxShadow: {
        "accent-sm": "0 2px 8px rgba(20,184,166,0.15)",
        "accent-md": "0 4px 24px rgba(20,184,166,0.2)",
        "accent-lg": "0 8px 48px rgba(20,184,166,0.25)",
        "dark-lg":   "0 24px 64px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
