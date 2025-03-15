import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#2997FF",
        gray: {
          DEFAULT: "#86868B",
          100: "#94928D",
          200: "#AFAFAF",
          300: "#42424570",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
} satisfies Config;
