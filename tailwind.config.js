const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,md,jsx,tsx,mdx}', // Updated path pattern
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        sky: {
          100: '#eaf5fd',
          200: '#d6ecfb',
          300: '#c2e3f9',
          400: '#aedaf7',
          500: '#9ad1f5',
          600: '#85c8f3',
          700: '#71bff1',
          800: '#5db6ef',
          900: '#35a4eb',
          DEFAULT: '#35a4eb', // Using the 900 shade as default
        },
        navy: {
          100: '#e7e8ef',
          200: '#cfd2e0',
          300: '#b7bcd1',
          400: '#9fa6c1',
          500: '#8890b2',
          600: '#7079a3',
          700: '#586393',
          800: '#404d84',
          900: '#112166',
          DEFAULT: '#112166', // Using the 900 shade as default
        },
        indigo: {
          100: '#e7edf8',
          200: '#d0dcf1',
          300: '#b9cbeb',
          400: '#a1bae4',
          500: '#8aa9de',
          600: '#7397d7',
          700: '#5b86d0',
          800: '#4475ca',
          900: '#1653bd',
          DEFAULT: '#1653bd', // Using the 900 shade as default
        },
        night: {
          100: '#e9e9ed',
          200: '#d3d4db',
          300: '#bdbfc9',
          400: '#a7aab7',
          500: '#9195a5',
          600: '#7b7f93',
          700: '#656a81',
          800: '#4f556e',
          900: '#242b4b',
          DEFAULT: '#242b4b', // Using the 900 shade as default
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-poppins)', ...fontFamily.sans],
        display: ['var(--font-poppins)', ...fontFamily.sans],
        title: ['var(--font-poppins)', ...fontFamily.sans],
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
