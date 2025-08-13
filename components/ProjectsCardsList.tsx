import React from "react";
import projects from "@/public/projects.json";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsCardsList = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-transparent  scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Projects</h2>
        <p className="text-gray-700 dark:text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in
          various technologies and problem-solving approaches.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-md border border-gray-200 dark:border-gray-700 relative cursor-pointer"
            >
              <div className="h-48 relative bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Image
                  src={project.image}
                  fill
                  alt=""
                  className="object-cover"
                />
              </div>

              {project.isPrivate && (
                <span className="absolute bottom-2 right-2 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  🔒 Private
                </span>
              )}

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-auto">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Link>
                  )}

                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border border-gray-400 dark:border-gray-600 hover:border-blue-600 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-6 py-3 rounded-lg transition-colors">
            View More Projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCardsList;
