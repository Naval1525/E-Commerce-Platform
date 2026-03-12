import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2874f0",
          yellow: "#ffe11b",
          ink: "#172337"
        }
      },
      boxShadow: {
        soft: "0 10px 24px rgba(15, 23, 42, 0.06)",
        card: "0 16px 40px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
