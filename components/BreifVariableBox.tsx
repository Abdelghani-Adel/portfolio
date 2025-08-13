"use client";
import React, { useState, useEffect, JSX } from "react";

interface CodeLine {
  text: string;
  color: string;
  indent: number;
}

const BreifVariableBox: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<CodeLine[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);

  const codeLines: CodeLine[] = [
    {
      text: "const developer = {",
      color: "text-blue-600 dark:text-blue-400",
      indent: 0,
    },
    {
      text: '    name: "Abdelghani Adel",',
      color: "text-green-600 dark:text-green-400",
      indent: 8,
    },
    {
      text: '    role: "Frontend Engineer",',
      color: "text-green-600 dark:text-green-400",
      indent: 8,
    },
    {
      text: "    experience: 3,",
      color: "text-green-600 dark:text-green-400",
      indent: 8,
    },
    {
      text: "    skills: [",
      color: "text-green-600 dark:text-green-400",
      indent: 8,
    },
    {
      text: '      "React", "TypeScript", "Next.js",',
      color: "text-amber-600 dark:text-yellow-400",
      indent: 12,
    },
    {
      text: '      "Node.js", "Python", "AWS",',
      color: "text-amber-600 dark:text-yellow-400",
      indent: 12,
    },
    {
      text: '      "Docker", "PostgreSQL", "Redis"',
      color: "text-amber-600 dark:text-yellow-400",
      indent: 12,
    },
    { text: "    ],", color: "text-amber-600 dark:text-yellow-400", indent: 8 },
    {
      text: "    specialties: [",
      color: "text-green-600 dark:text-green-400",
      indent: 8,
    },
    {
      text: '      "Performance Optimization",',
      color: "text-amber-600 dark:text-yellow-400",
      indent: 12,
    },
    {
      text: '      "Scalable Architecture",',
      color: "text-amber-600 dark:text-yellow-400",
      indent: 12,
    },
    {
      text: '      "Code Refactoring"',
      color: "text-amber-600 dark:text-yellow-400",
      indent: 12,
    },
    { text: "    ],", color: "text-amber-600 dark:text-yellow-400", indent: 8 },
    {
      text: "    achievements: {",
      color: "text-green-600 dark:text-green-400",
      indent: 8,
    },
    {
      text: "      projectsDelivered: 25,",
      color: "text-cyan-600 dark:text-cyan-400",
      indent: 12,
    },
    {
      text: "      performanceBoost: 40,",
      color: "text-cyan-600 dark:text-cyan-400",
      indent: 12,
    },
    {
      text: "      costSavings: 50000",
      color: "text-cyan-600 dark:text-cyan-400",
      indent: 12,
    },
    { text: "    },", color: "text-amber-600 dark:text-yellow-400", indent: 8 },
    {
      text: '    availability: "Open to opportunities"',
      color: "text-green-600 dark:text-green-400",
      indent: 8,
    },
    { text: "  }", color: "text-blue-600 dark:text-blue-400", indent: 4 },
  ];

  useEffect(() => {
    if (currentLineIndex >= codeLines.length) return;

    const currentLine = codeLines[currentLineIndex];
    const timer = setTimeout(() => {
      if (currentCharIndex < currentLine.text.length) {
        setCurrentCharIndex((prev) => prev + 1);
      } else {
        // Line is complete, move to next line
        setDisplayedLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }
    }, 15); // Adjust speed here (lower = faster)

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, codeLines]);

  const renderLine = (
    line: CodeLine,
    isCurrentLine: boolean = false,
    partialText: string = ""
  ): JSX.Element => {
    const indentStyle: React.CSSProperties = {
      marginLeft: `${line.indent * 4}px`,
    };

    return (
      <div
        key={`${line.text}-${Math.random()}`}
        className={line.color}
        style={indentStyle}
      >
        {isCurrentLine ? partialText : line.text}
        {isCurrentLine && <span className="animate-pulse">|</span>}
      </div>
    );
  };

  return (
    <div className="flex-1 flex justify-center lg:justify-end shrink-0">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full border border-gray-200 dark:border-gray-700">
        <div className="flex space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm font-mono min-h-[400px]">
          {displayedLines.map((line: CodeLine, index: number) =>
            renderLine(line)
          )}
          {currentLineIndex < codeLines.length &&
            renderLine(
              codeLines[currentLineIndex],
              true,
              codeLines[currentLineIndex].text.substring(0, currentCharIndex)
            )}
        </div>
      </div>
    </div>
  );
};

export default BreifVariableBox;
