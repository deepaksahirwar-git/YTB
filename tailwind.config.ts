import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        ink: "#090B1A",
        glass: "rgba(255,255,255,0.08)",
        cyanBeam: "#22D3EE",
        violetBeam: "#8B5CF6",
        blueBeam: "#38BDF8",
        mintBeam: "#34D399",
        roseBeam: "#FB7185",
        goldBeam: "#FBBF24"
      },
      boxShadow: {
        glow: "0 0 42px rgba(34, 211, 238, 0.18)",
        violet: "0 0 54px rgba(139, 92, 246, 0.20)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      keyframes: {
        floatPulse: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.72" },
          "50%": { transform: "translateY(-10px)", opacity: "1" }
        },
        scan: {
          "0%": { transform: "translateX(-35%)" },
          "100%": { transform: "translateX(135%)" }
        }
      },
      animation: {
        floatPulse: "floatPulse 5s ease-in-out infinite",
        scan: "scan 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
