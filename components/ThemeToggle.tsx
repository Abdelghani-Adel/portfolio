"use client";

import { useTheme } from "./ThemeProvider";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-1 rounded-full bg-gray-300 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200 outline-none"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-12 h-6 flex items-center rounded-full bg-white dark:bg-gray-800 shadow-inner transition-colors duration-200">
        {/* Toggle circle */}
        <div
          className={`absolute transform transition-all duration-200 ease-out ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
          }`}
        >
          <div className="w-6 h-6 rounded-full bg-white dark:bg-gray-700 shadow-md flex items-center justify-center transition-all duration-200">
            {theme === "dark" ? (
              <Moon className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-gray-600 dark:text-gray-300" />
            )}
          </div>
        </div>
      </div>
    </button>
  );
}
