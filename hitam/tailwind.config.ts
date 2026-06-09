import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Para Suhu — shared brand (continuity with parasuhudigital.com)
        suhu: {
          emerald: "#00C896",
          "emerald-dark": "#064E3B",
          "emerald-light": "#10D9A6",
          neon: "#00FF94",
        },
        // Hitam — the black-hat division identity
        hitam: {
          void: "#050506",
          black: "#0A0A0B",
          card: "#111113",
          elevated: "#18181B",
          border: "#26262C",
          // Signature danger accent
          blood: "#FF2D4A",
          "blood-dark": "#9B0E22",
          "blood-light": "#FF5C72",
          // Premium / value accent (aged domains)
          gold: "#F5C542",
          // Neutrals
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
        "spin-slow": "spin 24s linear infinite",
        "pulse-glow": "pulseGlow 2.4s ease-in-out infinite",
        "slide-in-left": "slideInLeft 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
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
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 45, 74, 0.30)" },
          "50%": { boxShadow: "0 0 44px rgba(255, 45, 74, 0.60)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-blood": "linear-gradient(135deg, #FF2D4A 0%, #9B0E22 100%)",
        "gradient-emerald": "linear-gradient(135deg, #00C896 0%, #064E3B 100%)",
        "gradient-radial-blood":
          "radial-gradient(circle at center, rgba(255, 45, 74, 0.16) 0%, transparent 70%)",
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
