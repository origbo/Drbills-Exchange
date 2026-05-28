/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050816",
        "bg-2": "#0A0B1E",
        card: "rgba(255,255,255,0.05)",
        neon: "#7C3AED",
        electric: "#2563EB",
        cyan: "#06B6D4",
        "text-soft": "#94A3B8",
        "border-glow": "rgba(124,58,237,0.35)",
      },
      fontFamily: {
        display: [
          "Clash Display",
          "Satoshi",
          "General Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
        ],
        heading: [
          "Satoshi",
          "Clash Display",
          "General Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
        ],
        sans: [
          "Inter",
          "Manrope",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        body: ["Inter", "Manrope", "ui-sans-serif", "system-ui"],
        mono: ["Space Grotesk", "ui-monospace", "monospace"],
        numbers: ["Space Grotesk", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #7C3AED 0%, #2563EB 50%, #06B6D4 100%)",
        "brand-gradient-soft":
          "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.18) 50%, rgba(6,182,212,0.18) 100%)",
        "grid-light":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        neon: "0 0 40px rgba(124,58,237,0.45), 0 0 80px rgba(37,99,235,0.35)",
        "neon-soft":
          "0 0 24px rgba(124,58,237,0.25), 0 0 48px rgba(37,99,235,0.15)",
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 10px 40px -10px rgba(0,0,0,0.6)",
        "cyan-glow":
          "0 0 30px rgba(6,182,212,0.45), 0 0 60px rgba(6,182,212,0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-18px,0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow:
              "0 0 30px rgba(124,58,237,0.35), 0 0 60px rgba(37,99,235,0.2)",
          },
          "50%": {
            boxShadow:
              "0 0 50px rgba(124,58,237,0.6), 0 0 90px rgba(37,99,235,0.35)",
          },
        },
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        sweep: {
          "0%": { transform: "translateX(-120%) skewX(-20deg)" },
          "100%": { transform: "translateX(220%) skewX(-20deg)" },
        },
        spinSlow: {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 9s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        "gradient-move": "gradientMove 10s ease-in-out infinite",
        ticker: "ticker 35s linear infinite",
        sweep: "sweep 5s ease-in-out infinite",
        "spin-slow": "spinSlow 30s linear infinite",
      },
      backgroundSize: {
        "grid-32": "32px 32px",
        "grid-48": "48px 48px",
      },
    },
  },
  plugins: [],
};
