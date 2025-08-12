import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800/50  scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="mb-8 space-y-3">
            <h3 className="text-2xl font-semibold">👨‍💻 Bio</h3>

            <p>
              Hi, I’m Abdelghani Adel—Senior Software Engineer at LMX Touristik.
              I build production-grade, performance-driven frontend applications
              (React, Next.js, TypeScript), backed by solid full‑stack
              experience in .NET Core and Java.
            </p>
            <p>
              I champion pixel‑perfect UIs and seamless user
              experiences—optimizing performance, accessibility, and
              cross‑functional collaboration. Whether working alone or guiding
              cross-stack delivery, I’m passionate about building scalable and
              maintainable web applications for travel tech.
            </p>
            <p>
              I'm also an active content creator on LinkedIn, where I share
              advanced frontend insights and real-world strategies tailored for
              senior engineers looking to deepen their craft.
            </p>
            <p>
              Outside of coding, I’m a devoted chess enthusiast (Lichess
              username: AbdelghaniAdel), always refining new strategies and
              tactics—traits I bring to frontend architecture and runtime
              optimization.
            </p>
            <p>
              Interested in working together or learning more? Feel free to
              reach out or check out my projects below.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-800 rounded-full overflow-hidden">
                  <img src="/avatar.jpg" alt="" className="h-64" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
