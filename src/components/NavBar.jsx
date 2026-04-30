import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiDownload, FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-scroll";
import resumeFile from "../assets/Dilina_Jayalath_Resume.pdf";

const NavBar = ({ theme, toggleTheme }) => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "Introduction" },
    { id: 3, link: "journal", label: "Journal" },
    { id: 4, link: "career", label: "Plan" },
    { id: 5, link: "cv", label: "CV" },
    { id: 6, link: "course", label: "Course" },
    { id: 7, link: "submission", label: "PDF" },
  ];

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="theme-nav-shell mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 backdrop-blur-xl">
        <div>
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <p className="theme-heading font-display text-2xl font-bold tracking-tight md:text-3xl">
              Dilina Jayalath
            </p>
            <p className="theme-eyebrow text-xs uppercase tracking-[0.35em]">
              PPW Portfolio
            </p>
          </Link>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="theme-nav-link rounded-full px-4 py-2 text-sm font-medium transition duration-200"
            >
              <Link
                to={link}
                smooth
                duration={500}
                offset={-80}
                className="cursor-pointer"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="theme-toggle relative inline-flex h-11 w-[5.25rem] items-center rounded-full px-2 transition duration-200"
          >
            <FiSun
              size={16}
              className={`theme-toggle-icon z-10 ${
                theme === "light" ? "theme-toggle-icon-active opacity-100" : "opacity-45"
              }`}
            />
            <FiMoon
              size={16}
              className={`theme-toggle-icon z-10 ml-auto ${
                theme === "dark" ? "theme-toggle-icon-active opacity-100" : "opacity-45"
              }`}
            />
            <span
              className={`theme-toggle-thumb absolute left-1 top-1 flex h-9 w-9 items-center justify-center rounded-full transition duration-300 ${
                theme === "dark" ? "translate-x-10" : "translate-x-0"
              }`}
            >
              {theme === "dark" ? <FiMoon size={15} /> : <FiSun size={15} />}
            </span>
          </button>

          <div className="hidden md:block">
            <a
              href={resumeFile}
              download
              className="theme-button-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition duration-200"
            >
              Download CV
              <FiDownload size={16} />
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setNav(!nav)}
          className="theme-icon-button z-10 rounded-full p-3 md:hidden"
          aria-label="Toggle navigation"
        >
          {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {nav && (
        <div className="theme-mobile-shell mx-auto mt-3 max-w-6xl rounded-[2rem] p-6 md:hidden">
          <ul className="space-y-2">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  className="theme-mobile-link block cursor-pointer rounded-2xl px-4 py-3 text-lg font-medium transition duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={resumeFile}
            download
            className="theme-button-primary mt-4 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
          >
            Download CV
            <FiDownload size={16} />
          </a>
        </div>
      )}
    </header>
  );
};

export default NavBar;
