import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#EDEFE9",
        surface: "#FFFFFF",
        ink: "#14201C",
        "ink-soft": "#4B564F",
        line: "#D9DAD1",
        brass: "#A8763B",
        pine: "#3E6259",
        "pine-deep": "#2A4740",
        danger: "#A8442E",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-public-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
