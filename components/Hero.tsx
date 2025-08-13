import { Briefcase, Code } from "lucide-react";
import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex-1 mb-8 lg:mb-0">
      <p className="text-gray-500 dark:text-gray-400 mb-2">Hello, I'm</p>
      <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
        Abdelghani{" "}
        <span className="text-blue-600 dark:text-blue-400">Adel</span>
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-2">
        Frontend Engineer
      </p>

      <div className="mb-8 space-y-5">
        <div className="flex items-start gap-2">
          <Briefcase className="w-7 h-7 mt-1 text-blue-600 dark:text-blue-400 shrink-0" />

          <div className="space-y-2">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Current Role
            </p>
            <p>
              <span className="font-bold">Senior Software Engineer</span> @{" "}
              <a
                href="http://lmx.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
              >
                LMX Touristik
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Code className="w-7 h-7 mt-1 text-blue-600 dark:text-blue-400 shrink-0" />

          <div className="space-y-2">
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Expertise
            </p>
            <p>
              I'm a passionate Frontend Engineer with a strong foundation in
              full-stack development—bridging pixel-perfect user experiences
              with robust backend understanding.
            </p>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300">
          Off the keyboard, you’ll likely find me on a digital
          chessboard—launching Queen’s Gambits with white, and countering with
          the King’s Indian or Caro-Kann as black. Love code? Love chess?
          Challenge me on{" "}
          <a
            href="https://lichess.org/"
            className="text-blue-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lichess
          </a>{" "}
          (username: <strong className="dark:text-white">AbdelghaniAdel</strong>
          )—but fair warning: I’ve trapped more kings than production bugs ♟️😄
        </p>
      </div>

      <div className="flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors text-white">
          <Link href="#contact">Contact Me</Link>
        </button>
        <button className="border border-gray-400 dark:border-gray-600 hover:border-blue-600 dark:hover:border-gray-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white px-6 py-3 rounded-lg transition-colors">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
