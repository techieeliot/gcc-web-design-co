"use client";

import { Moon, Sun } from "@/lib/icons";
import { useTheme } from "providers/theme-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
      }}
      className="p-2 rounded-md hover:bg-azure/10 text-slate-700 hover:text-azure dark:text-powder dark:hover:text-sky transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 transition-transform duration-300" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-300" />
      )}
    </button>
  );
}
