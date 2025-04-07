import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Simple brand colors
        powder: "#E8F1FF",
        sky: "#3B82F6",
        azure: "#2563EB",
        blueberry: "#1E40AF",
        midnight: "#1E3A8A",
        border: {
          DEFAULT: "hsl(var(--border",
        },
        input: {
          DEFAULT: "hsl(var(--input)",
        },
        ring: {
          DEFAULT: "hsl(var(--ring",
        },
        background: {
          DEFAULT: "hsl(var(--background)",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary)",
          foreground: "hsl(var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary)",
          foreground: "hsl(var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive)",
          foreground: "hsl(var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted)",
          foreground: "hsl(var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent)",
          foreground: "hsl(var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover)",
          foreground: "hsl(var(--popover-foreground)",
        },
        card: {
          DEFAULT: "hsl(var(--card)",
          foreground: "hsl(var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        title: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        none: "none",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-slow": "pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

export default config;
