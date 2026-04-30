import React from "react";
import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";
import resumeFile from "../assets/Dilina_Jayalath_Resume.pdf";
import { cvSections } from "../data/academicPortfolioData";

const CurriculumVitae = () => {
  const {
    summary,
    contacts,
    education,
    experience,
    skillGroups,
    projects,
    certifications,
  } = cvSections;

  return (
    <section name="cv" className="page-section w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
              Curriculum vitae
            </p>
            <h2 className="theme-heading font-display mt-4 text-4xl font-semibold sm:text-5xl">
              Curriculum vitae summary
            </h2>
            <p className="theme-copy mt-5 text-lg leading-8">
              This section summarizes the key information from my CV, while the
              full resume remains available as a downloadable PDF.
            </p>
          </div>

          <a
            href={resumeFile}
            download
            className="theme-button-secondary no-print inline-flex items-center gap-2 self-start rounded-full px-5 py-3 text-sm font-semibold transition duration-200"
          >
            Download full CV
            <FiDownload size={17} />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <article className="portfolio-panel rounded-[2rem] p-7">
              <div className="flex items-center gap-3">
                <div className="theme-icon-accent rounded-2xl p-3">
                  <FiFileText size={18} />
                </div>
                <h3 className="theme-heading font-display text-3xl font-semibold">
                  Profile
                </h3>
              </div>
              <p className="theme-copy mt-5 text-sm leading-7 sm:text-base">
                {summary}
              </p>
            </article>

            <article className="portfolio-panel rounded-[2rem] p-7">
              <h3 className="theme-heading font-display text-3xl font-semibold">
                Contact
              </h3>
              <div className="mt-5 space-y-4">
                {contacts.map(({ label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="theme-link-card flex items-center justify-between gap-4 rounded-[1.5rem] px-5 py-4 transition duration-200"
                  >
                    <div>
                      <p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.22em]">
                        {label}
                      </p>
                      <p className="theme-heading mt-1 text-sm font-medium sm:text-base">
                        {value}
                      </p>
                    </div>
                    <FiExternalLink className="theme-accent-text shrink-0" />
                  </a>
                ))}
              </div>
            </article>

            <article className="portfolio-panel rounded-[2rem] p-7">
              <h3 className="theme-heading font-display text-3xl font-semibold">
                Education
              </h3>
              <div className="mt-5 space-y-4">
                {education.map(({ title, subtitle, detail }) => (
                  <div key={title} className="theme-soft-panel rounded-[1.5rem] p-5">
                    <h4 className="theme-heading text-lg font-semibold">{title}</h4>
                    <p className="theme-copy mt-2 text-sm">{subtitle}</p>
                    <p className="theme-copy-soft mt-2 text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="portfolio-panel rounded-[2rem] p-7">
              <h3 className="theme-heading font-display text-3xl font-semibold">
                Experience
              </h3>
              <div className="mt-5 space-y-4">
                {experience.map(({ title, subtitle, detail, link }) => (
                  <div key={title} className="theme-soft-panel rounded-[1.5rem] p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="theme-heading text-lg font-semibold">
                          {title}
                        </h4>
                        <p className="theme-copy mt-2 text-sm">{subtitle}</p>
                      </div>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="theme-chip-link inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em]"
                      >
                        Company site
                        <FiExternalLink size={14} />
                      </a>
                    </div>
                    <p className="theme-copy mt-3 text-sm leading-7 sm:text-base">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <div className="space-y-6">
            <article className="portfolio-panel rounded-[2rem] p-7">
              <h3 className="theme-heading font-display text-3xl font-semibold">
                Skills
              </h3>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                {skillGroups.map(({ title, items }) => (
                  <div key={title} className="theme-soft-panel rounded-[1.5rem] p-5">
                    <p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.24em]">
                      {title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="theme-chip rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="portfolio-panel rounded-[2rem] p-7">
              <h3 className="theme-heading font-display text-3xl font-semibold">
                Selected projects
              </h3>
              <div className="mt-6 space-y-4">
                {projects.map(({ title, description }) => (
                  <div key={title} className="theme-soft-panel rounded-[1.5rem] p-5">
                    <h4 className="theme-heading text-lg font-semibold">{title}</h4>
                    <p className="theme-copy mt-3 text-sm leading-7 sm:text-base">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="portfolio-panel rounded-[2rem] p-7">
              <h3 className="theme-heading font-display text-3xl font-semibold">
                Certifications and courses
              </h3>
              <div className="mt-5 space-y-3">
                {certifications.map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="theme-bullet-warm mt-[10px] h-2 w-2 shrink-0 rounded-full" />
                    <p className="theme-copy text-sm leading-7 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <p className="theme-copy-soft mt-6 text-sm leading-7">
                Detailed references remain in the attached CV PDF rather than
                being displayed publicly on the portfolio page.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumVitae;
