import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            AZ
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="/#home"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Home
            </a>
            <a
              href="/#about"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </a>
            <a
              href="/#projects"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="/#skills"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="/#achievements"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Achievements
            </a>
            <a
              href="/#contact"
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
