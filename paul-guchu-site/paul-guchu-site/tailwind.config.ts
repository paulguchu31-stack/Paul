import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#0A0A0A",
        dark: "#0A0A0A",
        muted: "#5B5B5B",
        border: "#E7E7E5",
        accent: {
          DEFAULT: "#FF582B",
          dark: "#E14620",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.06)", opacity: "0.9" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(18px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "pulse-soft": "pulseSoft 2.6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out both",
        marquee: "marquee 22s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
