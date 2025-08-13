"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
  Zap,
  Video,
  BarChart3,
  Code,
  Clock,
  Users,
  Server,
  Calendar,
  Target,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Trophy,
  ArrowLeft,
  Github,
  Play,
} from "lucide-react";

const ProjectDetails = () => {
  type MetricLabel =
    | "Load Time Improvement"
    | "Bundle Size Reduction"
    | "Team Size"
    | "Incident Response Time Reduction"
    | "Video Latency"
    | "Report Generation Speed Increase"
    | "Code Duplication Reduction"
    | "Master List Update Propagation"
    | "API Calls Reduced";

  interface Metric {
    label: MetricLabel;
    value: string;
  }

  const project = {
    title: "Fleet GPS Tracking",
    subtitle: "Enterprise-Grade Real-Time Fleet Management System",
    description:
      "A real-time advanced, enterprise-grade fleet tracking system that provides live location updates, trip history, and performance analytics using integrated GPS and server-side APIs — empowering teams to respond to incidents more efficiently and make data-driven decisions with confidence.",
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
    duration: "6 months",
    role: "Frontend Developer",
    teamSize: "4 Engineers",
    contributions: [
      "Integrated a new GPS device support for real-time video streaming within the dashboard.",
      "Collaborated with the backend team to define and implement the stream consumption protocol.",
      "Designed and implemented a device grouping feature, enabling multiple GPS devices to be organized into logical groups and integrated these groups into the reporting module for aggregated analytics.",
      "Redesigned the application's master lists with real-time update capabilities.",
      "Developed reusable hooks to transform these lists into various data structures for multiple use cases, such as populating select elements.",
    ],
    screenshots: [
      "/projects/gps/dashboard.png",
      "/projects/gps/reports.png",
      "/projects/gps/settings.png",
      "/projects/gps/settings2.png",
    ],
    metrics: [
      { label: "Team Size", value: "4 Engineers" },
      { label: "Master List Update Propagation", value: "<1s" },
      { label: "Load Time Improvement", value: "15%" },
      { label: "Incident Response Time Reduction", value: "40%" },
      { label: "API Calls Reduced", value: "10%" },
      { label: "Code Duplication Reduction", value: "35%" },
    ] as Metric[],
    challenges: [
      {
        title: "Real-time Data Synchronization",
        description:
          "Managing live GPS data updates across multiple devices while maintaining performance",
        solution:
          "Implemented efficient WebSocket connections with data throttling and selective updates",
      },
      {
        title: "Video Stream Integration",
        description:
          "Integrating live video streaming from GPS devices into the web dashboard",
        solution:
          "Collaborated with backend team to establish streaming protocols and built adaptive video components",
      },
      {
        title: "Complex State Management",
        description:
          "Managing complex application state across multiple interconnected features",
        solution:
          "Developed custom hooks and context providers for efficient state management",
      },
    ],
    features: [
      "Real-time GPS tracking and location updates",
      "Live video streaming from devices",
      "Advanced reporting and analytics",
      "Device grouping and management",
      "Trip history and route optimization",
      "Incident response dashboard",
      "Master data management",
      "Multi-device support",
    ],
    learnings: [
      "Advanced real-time data handling techniques",
      "WebSocket optimization for live updates",
      "Video streaming integration patterns",
      "Enterprise-scale state management",
      "Cross-team collaboration best practices",
    ],
    liveUrl: null,
    repoUrl: null,
  };

  const iconMap: Record<MetricLabel, React.ReactNode> = {
    "Load Time Improvement": <Zap className="w-6 h-6 text-blue-500" />,
    "Bundle Size Reduction": <BarChart3 className="w-6 h-6 text-green-500" />,
    "Team Size": <Users className="w-6 h-6 text-purple-500" />,
    "Incident Response Time Reduction": (
      <Clock className="w-6 h-6 text-red-500" />
    ),
    "Video Latency": <Video className="w-6 h-6 text-orange-500" />,
    "Report Generation Speed Increase": (
      <BarChart3 className="w-6 h-6 text-teal-500" />
    ),
    "Code Duplication Reduction": <Code className="w-6 h-6 text-pink-500" />,
    "Master List Update Propagation": (
      <Clock className="w-6 h-6 text-yellow-500" />
    ),
    "API Calls Reduced": <Server className="w-6 h-6 text-indigo-500" />,
  };

  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImagePreview = (imageSrc: string) => {
    const index = project.screenshots.indexOf(imageSrc);
    setCurrentImageIndex(index);
    setPreviewImage(imageSrc);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % project.screenshots.length
        : (currentImageIndex - 1 + project.screenshots.length) %
          project.screenshots.length;

    setCurrentImageIndex(newIndex);
    setPreviewImage(project.screenshots[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <button className="flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-blue-100 mb-6">{project.subtitle}</p>
              <p className="text-lg leading-relaxed text-blue-50 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl && (
                  <button className="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                    <Play className="w-4 h-4 mr-2" />
                    View Live
                  </button>
                )}
                {project.repoUrl && (
                  <button className="flex items-center border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </button>
                )}
                {project.isPrivate && (
                  <span className="flex items-center text-blue-100 px-4 py-3">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Private Repository
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <Calendar className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Duration
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.duration}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <Users className="w-8 h-8 text-green-500 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {project.teamSize}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
            <Target className="w-8 h-8 text-purple-500 mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Role
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
          </div>
        </div>

        {/* Screenshots Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <BarChart3 className="w-8 h-8 text-blue-500 mr-3" />
            Screenshots & Gallery
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {project.screenshots.map((src, idx) => (
              <div
                key={idx}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => openImagePreview(src)}
              >
                <img
                  src={src}
                  alt={`Screenshot ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
            Success Metrics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-4">
                  {iconMap[metric.label]}
                </div>
                <div className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm text-center font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <CheckCircle2 className="w-8 h-8 text-green-500 mr-3" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* My Contributions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <Code className="w-8 h-8 text-blue-500 mr-3" />
            My Contributions
          </h2>
          <div className="space-y-4">
            {project.contributions.map((contribution, idx) => (
              <div
                key={idx}
                className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border-l-4 border-blue-500"
              >
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                    {idx + 1}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {contribution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <AlertTriangle className="w-8 h-8 text-orange-500 mr-3" />
            Challenges & Solutions
          </h2>
          <div className="space-y-6">
            {project.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-orange-500 mr-2" />
                  {challenge.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {challenge.description}
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <p className="text-green-800 dark:text-green-200 font-medium">
                    <strong>Solution:</strong> {challenge.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 flex items-center">
            <Lightbulb className="w-8 h-8 text-yellow-500 mr-3" />
            Key Learnings
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.learnings.map((learning, idx) => (
              <div
                key={idx}
                className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800"
              >
                <Lightbulb className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {learning}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setPreviewImage(null)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 z-10 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image container */}
          <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
            {currentImageIndex + 1} / {project.screenshots.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
