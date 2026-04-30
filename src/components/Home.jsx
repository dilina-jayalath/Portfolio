import React from "react";
import {
  FiArrowRight,
  FiDownload,
  FiFileText,
  FiMapPin,
  FiPrinter,
} from "react-icons/fi";
import { Link } from "react-scroll";
import ME from "../assets/me2.jpg";
import resumeFile from "../assets/Dilina_Jayalath_Resume.pdf";
import { heroStats } from "../data/academicPortfolioData";

const Home = () => {
  return (
    <section name="home" className="page-section w-full pb-16 pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="theme-badge-accent inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur">
            <FiMapPin />
            IT4070 - Preparing for Professional World
          </div>

          <div className="space-y-5">
            <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
              Professional portfolio
            </p>
            <h1 className="theme-heading font-display max-w-3xl text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl">
              Dilina Jayalath
              <span className="theme-accent-text mt-3 block">
                Academic and Career Portfolio
              </span>
            </h1>
            <p className="theme-copy max-w-2xl text-lg leading-8">
              This portfolio brings together my self-introduction, reflective
              journal for PPW, career development plan, curriculum vitae, and
              course-evidence section in a format prepared for final PDF export.
            </p>
          </div>

          <div className="no-print flex flex-wrap gap-4">
            <Link
              to="journal"
              smooth
              duration={500}
              offset={-80}
              className="theme-button-primary inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200"
            >
              Read reflection
              <FiArrowRight size={18} />
            </Link>
            <a
              href={resumeFile}
              download
              className="theme-button-secondary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200"
            >
              Download CV
              <FiDownload size={18} />
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="theme-button-warm inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200"
            >
              Export PDF
              <FiPrinter size={18} />
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {heroStats.map(({ value, label }) => (
              <div
                key={label}
                className="portfolio-card rounded-[1.75rem] p-5"
              >
                <p className="theme-heading font-display text-2xl font-semibold">
                  {value}
                </p>
                <p className="theme-copy-soft mt-2 text-sm leading-6">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="theme-float-block no-print absolute -left-6 top-12 hidden h-24 w-24 rounded-[2rem] md:block" />
          <div className="theme-orb-secondary no-print absolute -right-4 bottom-8 hidden h-32 w-32 rounded-full blur-2xl md:block" />

          <div className="portfolio-panel relative overflow-hidden rounded-[2.5rem] p-4">
            <div className="theme-hero-overlay no-print absolute inset-0" />
            <img
              src={ME}
              alt="Dilina Jayalath portrait"
              className="relative h-[28rem] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="portfolio-card theme-soft-panel no-print absolute -bottom-5 left-4 max-w-xs rounded-[1.75rem] p-4">
            <div className="theme-badge-accent mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
              <FiFileText size={14} />
              Portfolio scope
            </div>
            <p className="theme-copy text-sm leading-6">
              Introduction, reflection, career planning, CV evidence, and a
              certificate slot prepared for final PDF submission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
