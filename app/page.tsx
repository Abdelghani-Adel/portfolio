import BreifVariableBox from "./components/BreifVariableBox";
import Hero from "./components/Hero";

import AboutMe from "./components/AboutMe";
import AcheivmentsCardsList from "./components/AcheivmentsCardsList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsCardsList from "./components/ProjectsCardsList";
import SkillsCardsList from "./components/SkillsCardsList";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />

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

      <Footer />
    </div>
  );
};

export default Portfolio;
