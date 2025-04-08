const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,md,tsx,mdx}',
    './src/components/**/*.{js,ts,md,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,md,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Simple brand colors
        powder: 'hsl(var(--powder))',
        sky: 'hsl(var(--sky))',
        azure: 'hsl(var(--azure))',
        blueberry: 'hsl(var(--blueberry))',
        midnight: 'hsl(var(--midnight))',
        slate: 'hsl(var(--slate))',
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
      // ...rest of your existing configuration
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
