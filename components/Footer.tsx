import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 md:mb-0">
            AZ
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white cursor-pointer" />
            <Github className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white cursor-pointer" />
            <Mail className="w-5 h-5 text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white cursor-pointer" />
          </div>
        </div>
        <div className="text-center text-gray-700 dark:text-gray-400 text-sm mt-4">
          <p>© 2024 Aathif Zahir. All rights reserved.</p>
          <p className="mt-1">
            Crafting elegant digital solutions with a focus on user experience
            and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
