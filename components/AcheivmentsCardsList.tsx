import React from "react";
import achievements from "@/public/acheivments.json";

const AcheivmentsCardsList = () => {
  return (
    <section
      id="achievements"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-transparent  scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Achievements</h2>
        <p className="text-gray-700 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          A collection of my professional accomplishments, awards, and
          certifications earned throughout my journey.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{achievement.icon}</div>
              <h3 className="text-lg font-semibold mb-2">
                {achievement.title}
              </h3>
              <p className="text-blue-400 text-sm mb-2">{achievement.issuer}</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
                {achievement.date}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcheivmentsCardsList;
