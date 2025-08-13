import BreifVariableBox from "../components/BreifVariableBox";
import Hero from "../components/Hero";

import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import ProjectsCardsList from "../components/ProjectsCardsList";
import SkillsCardsList from "../components/SkillsCardsList";

const Portfolio = () => {
  return (
    <>
      <section
        id="home"
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <Hero />

            <BreifVariableBox />
          </div>
        </div>
      </section>

      <AboutMe />

      <ProjectsCardsList />

      <SkillsCardsList />

      {/* <AcheivmentsCardsList /> */}

      <Contact />
    </>
  );
};

export default Portfolio;
