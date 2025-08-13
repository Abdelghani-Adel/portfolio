"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ProjectDetails = () => {
  // Dummy data
  const project = {
    title: "Parking Management System",
    description:
      "A scalable, responsive dashboard for visualizing and interacting with complex business analytics in real-time. Built for enterprise clients needing secure, role-based data access.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn",
      "Chart.js",
    ],
    image: "/projects/gps/dashboard.png",
    isPrivate: true,
    contributions: [
      "Designed and developed a reusable React component library with full accessibility support.",
      "Implemented real-time data fetching with WebSockets, improving update latency by 70%.",
      "Led the performance optimization effort, reducing initial load time from 4.2s to 1.8s.",
      "Collaborated with backend team to define GraphQL schema for analytics queries.",
    ],
    screenshots: [
      "/projects/gps/dashboard.png",
      "/projects/gps/reports.png",
      "/projects/gps/settings.png",
      "/projects/gps/settings2.png",
    ],
    metrics: [
      { label: "Load Time Improvement", value: "57%" },
      { label: "Bundle Size Reduction", value: "45%" },
      { label: "Team Size", value: "6 Engineers" },
    ],
    liveUrl: null, // No live URL since it's private
    repoUrl: null,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true });
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="relative h-64 w-full mb-8 rounded-xl overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
          {project.isPrivate && (
            <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              🔒 Private Project
            </span>
          )}
        </div>

        {/* Title & Tech Stack */}
        <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-blue-600/20 text-blue-600 dark:text-blue-400 px-2 py-1 rounded text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          {project.description}
        </p>

        {/* Screenshots */}
        <h2 className="text-2xl font-semibold mb-4">Screenshots</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {project.screenshots.map((src, idx) => (
            <div
              key={idx}
              className="relative h-40 w-full rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setPreviewImage(src)}
            >
              <Image
                src={src}
                alt={"Screenshot " + (idx + 1)}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mb-10">
          {!project.isPrivate && project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live</span>
            </Link>
          )}
          {!project.isPrivate && project.repoUrl && (
            <Link
              href={project.repoUrl}
              target="_blank"
              className="flex items-center space-x-2 border border-gray-400 hover:border-blue-600 text-gray-700 dark:text-gray-300 hover:text-blue-600 px-4 py-2 rounded-md transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Code</span>
            </Link>
          )}
        </div>

        {/* Contributions */}
        <h2 className="text-2xl font-semibold mb-4">My Contributions</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-8 space-y-2">
          {project.contributions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Metrics */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {metric.value}
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        <Dialog
          open={!!previewImage}
          onOpenChange={(open) => !open && setPreviewImage(null)}
        >
          <DialogContent className="!fixed !inset-0 !p-0 !m-0 !bg-black !border-none !shadow-none !max-w-none !w-screen !h-screen !flex !items-center !justify-center !transform-none !translate-x-0 !translate-y-0">
            <DialogTitle className="sr-only">Image Preview</DialogTitle>
            {previewImage && (
              <>
                {/* Close button */}
                <button
                  onClick={() => setPreviewImage(null)}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                >
                  <X size={28} />
                </button>

                {/* Prev button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex =
                      project.screenshots.indexOf(previewImage);
                    const prevIndex =
                      (currentIndex - 1 + project.screenshots.length) %
                      project.screenshots.length;
                    setPreviewImage(project.screenshots[prevIndex]);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronLeft size={36} />
                </button>

                {/* Image container */}
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Next button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex =
                      project.screenshots.indexOf(previewImage);
                    const nextIndex =
                      (currentIndex + 1) % project.screenshots.length;
                    setPreviewImage(project.screenshots[nextIndex]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronRight size={36} />
                </button>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProjectDetails;
