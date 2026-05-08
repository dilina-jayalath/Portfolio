import { useEffect, useState } from "react";
import About from "./components/About";
import CareerDevelopment from "./components/CareerDevelopment";
import Contact from "./components/Contact";
import CourseEvidence from "./components/CourseEvidence";
import CurriculumVitae from "./components/CurriculumVitae";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PrintablePortfolio from "./components/PrintablePortfolio";
import ReflectiveJournal from "./components/ReflectiveJournal";
import SocialLinks from "./components/SocialLinks";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    return window.localStorage.getItem("portfolio-theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("portfolio-theme", theme);

    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) {
      themeMeta.setAttribute("content", theme === "dark" ? "#071018" : "#f4efe6");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <div className="portfolio-shell relative overflow-x-hidden">
        <div className="no-print pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="theme-orb-primary absolute left-[6%] top-12 h-80 w-80 rounded-full blur-3xl" />
          <div className="theme-orb-secondary absolute right-[8%] top-36 h-[24rem] w-[24rem] rounded-full blur-3xl" />
          <div className="theme-orb-tertiary absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl" />
          <div className="theme-backdrop-gradient absolute inset-0" />
          <div className="theme-backdrop-grid absolute inset-0" />
        </div>

        <NavBar theme={theme} toggleTheme={toggleTheme} />

        <main className="relative z-10">
          <Home />
          <About />
          <ReflectiveJournal />
          <CareerDevelopment />
          <CurriculumVitae />
          <CourseEvidence />
          <Contact />
        </main>

        <SocialLinks />
      </div>
      <PrintablePortfolio />
    </>
  );
}

export default App;
