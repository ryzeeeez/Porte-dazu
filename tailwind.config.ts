import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#23318E",
        azure: "#5B73F0",
        ice: "#E9EEFF",
        fog: "#F6F7FB",
        ink: "#0F172A"
      },
      borderRadius: {
        xl: "1.25rem"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        card: "0 12px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
