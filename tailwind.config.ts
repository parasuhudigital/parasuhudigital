import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Para Suhu Digital Color System
        suhu: {
          // Primary - Emerald
          emerald: "#00C896",
          "emerald-dark": "#064E3B",
          "emerald-light": "#10D9A6",
          // Accent - Neon
          neon: "#00FF94",
          // Black foundation
          black: "#0A0A0A",
          "black-card": "#1A1A1A",
          "black-elevated": "#242424",
          // Neutrals
          white: "#FFFFFF",
          gray: "#A1A1AA",
          "gray-dark": "#52525B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 255, 148, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 255, 148, 0.6)" },
        },
      },
      backgroundImage: {
        "gradient-emerald": "linear-gradient(135deg, #00C896 0%, #064E3B 100%)",
        "gradient-neon": "linear-gradient(135deg, #00FF94 0%, #00C896 100%)",
        "gradient-radial-emerald":
          "radial-gradient(circle at center, rgba(0, 200, 150, 0.15) 0%, transparent 70%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
