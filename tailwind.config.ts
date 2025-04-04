import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class', // This enables .dark class-based dark mode
  theme: {
    extend: {
      colors: {
        // Base theme colors
        background: {
          DEFAULT: 'var(--background)',
          foreground: 'var(--foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary))',
          foreground: 'var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'var(--secondary))',
          foreground: 'var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: 'var(--tertiary))',
          foreground: 'var(--tertiary-foreground))',
        },

        // Custom colors with HSL
        powder: '#e3edfa',
        sky: '#2c97dd',
        azure: '#1453bb',
        blueberry: '#0d3086',
        midnight: '#0e2d7f',
        slate: '#242b4b',
        mist: {
          DEFAULT: 'var(--mist))',
        },
        graphite: {
          DEFAULT: 'var(--graphite))',
        },
        'deep-navy': {
          DEFAULT: 'var(--deep-navy)',
        },
        emerald: {
          600: '#2f855a',
          700: '#276749',
          800: '#22543d',
        },

        // Text colors
        'text-primary': {
          DEFAULT: 'var(--text-primary)',
          dark: 'var(--text-primary-dark)',
        },
        'text-secondary': {
          DEFAULT: 'var(--text-secondary)',
          dark: 'var(--text-secondary-dark)',
        },

        // Card and container backgrounds
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
      },
      // Add custom gradients
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(to bottom, var(--white), var(--slate-50))',
        'gradient-primary-dark':
          'linear-gradient(to bottom, var(--slate-900), var(--slate-800))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      maxWidth: {
        '7xl': '80rem',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)', 'sans-serif'],
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      textShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
