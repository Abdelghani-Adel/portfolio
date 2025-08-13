import React from "react";
import skills from "@/public/skills.json";

const SkillsCardsList = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50  scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-gray-700 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          A comprehensive overview of my technical skills and expertise in
          various domains of software development.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 bg-yellow-500 rounded mr-3 flex items-center justify-center">
                <span className="text-sm">💻</span>
              </div>
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.programming.map((skill, index) => (
                <span
                  key={index}
                  className="bg-yellow-500/20 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded mr-3 flex items-center justify-center">
                <span className="text-sm">🎨</span>
              </div>
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-500/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded mr-3 flex items-center justify-center">
                <span className="text-sm">⚙️</span>
              </div>
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, index) => (
                <span
                  key={index}
                  className="bg-green-500/20 text-green-700 dark:text-green-400 px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 bg-purple-500 rounded mr-3 flex items-center justify-center">
                <span className="text-sm">🗄️</span>
              </div>
              Databases
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.databases.map((skill, index) => (
                <span
                  key={index}
                  className="bg-purple-500/20 text-purple-700 dark:text-purple-400 px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 bg-red-500 rounded mr-3 flex items-center justify-center">
                <span className="text-sm">🔧</span>
              </div>
              Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, index) => (
                <span
                  key={index}
                  className="bg-red-500/20 text-red-700 dark:text-red-400 px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 bg-pink-500 rounded mr-3 flex items-center justify-center">
                <span className="text-sm">🎯</span>
              </div>
              Design
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill, index) => (
                <span
                  key={index}
                  className="bg-pink-500/20 text-pink-700 dark:text-pink-400 px-3 py-1 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCardsList;
