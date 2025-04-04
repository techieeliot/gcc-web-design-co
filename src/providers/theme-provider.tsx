'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'light',
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'light',
}: ThemeProviderProps) {
  // Initialize state with defaultTheme - fix for useState undefined error
  const [theme, setTheme] = useState<Theme>(
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme') as Theme) || defaultTheme
      : defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('dark', 'light')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const value = {
    theme,
    setTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
