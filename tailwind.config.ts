import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: ['class', '[data-theme="dark"]'],
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
        powder: {
          DEFAULT: 'var(--powder)',
          muted: 'rgba(227, 237, 250, 0.8)',
        },
        sky: {
          DEFAULT: 'var(--sky)',
          muted: 'rgba(44, 151, 221, 0.8)',
        },
        azure: {
          DEFAULT: 'var(--azure)',
          muted: 'rgba(20, 83, 187, 0.8)',
        },
        blueberry: {
          DEFAULT: 'var(--blueberry))',
        },
        midnight: {
          DEFAULT: 'var(--midnight))',
        },
        slate: {
          DEFAULT: 'var(--slate)',
          100: 'var(--slate-100)',
          200: 'var(--slate-200)',
          300: 'var(--slate-300)',
          400: 'var(--slate-400)',
          500: 'var(--slate-500)',
          600: 'var(--slate-600)',
          700: 'var(--slate-700)',
          800: 'var(--slate-800)',
          900: 'var(--slate-900)',
        },
        mist: {
          DEFAULT: 'var(--mist))',
        },
        graphite: {
          DEFAULT: 'var(--graphite))',
        },
        'deep-navy': {
          DEFAULT: 'var(--deep-navy)',
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
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
