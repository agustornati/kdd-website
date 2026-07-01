import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta sobria tipo consultora enterprise.
        navy: {
          DEFAULT: "#0B2545",
          950: "#061423",
          900: "#0B2545",
          800: "#13315C",
          700: "#1B4171",
          600: "#2A5A8C",
        },
        accent: {
          DEFAULT: "#2563EB",
          600: "#2563EB",
          700: "#1D4ED8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(11 37 69 / 0.06), 0 8px 24px -8px rgb(11 37 69 / 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
