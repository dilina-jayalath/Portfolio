import React from "react";
import { FiCheckCircle, FiGithub, FiLinkedin, FiMail, FiPrinter } from "react-icons/fi";
import { submissionChecklist } from "../data/academicPortfolioData";

const Contact = () => {
  const directLinks = [
    {
      id: 1,
      title: "Email",
      value: "dspjayalath@gmail.com",
      href: "mailto:dspjayalath@gmail.com",
      icon: <FiMail size={18} />,
    },
    {
      id: 2,
      title: "GitHub",
      value: "github.com/dilina-jayalath",
      href: "https://github.com/dilina-jayalath",
      icon: <FiGithub size={18} />,
    },
    {
      id: 3,
      title: "LinkedIn",
      value: "linkedin.com/in/dilina-jayalath",
      href: "https://linkedin.com/in/dilina-jayalath",
      icon: <FiLinkedin size={18} />,
    },
  ];

  return (
    <section name="submission" className="page-section w-full px-4 pb-20 pt-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="portfolio-panel rounded-[2rem] p-8 backdrop-blur">
          <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
            PDF submission
          </p>
          <h2 className="theme-heading font-display mt-4 text-4xl font-semibold sm:text-5xl">
            Final export and submission guide
          </h2>
          <p className="theme-copy mt-5 text-base leading-8 sm:text-lg">
            This page is designed so the browser print dialog can be used to
            generate the final PDF. Before exporting, add the actual course
            certificate file to the evidence panel so the portfolio fully matches
            the marking rubric.
          </p>

          <div className="mt-8 space-y-4">
            {submissionChecklist.map((item) => (
              <div
                key={item}
                className="theme-link-card flex items-start gap-4 rounded-[1.5rem] px-5 py-4"
              >
                <div className="theme-icon-accent rounded-2xl p-3">
                  <FiCheckCircle size={18} />
                </div>
                <p className="theme-copy text-sm leading-7 sm:text-base">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => window.print()}
            className="theme-button-primary no-print mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200"
          >
            Export portfolio as PDF
            <FiPrinter size={18} />
          </button>
        </div>

        <div className="space-y-6">
          <div className="theme-contrast-panel rounded-[2rem] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-current">
              Export tips
            </p>
            <div className="theme-contrast-copy mt-5 space-y-4 text-sm leading-7 sm:text-base">
              <p>Choose Save as PDF in the print dialog.</p>
              <p>Use portrait layout for a more traditional report style.</p>
              <p>Keep margins at default or minimum depending on readability.</p>
              <p>Enable background graphics if you want the full visual styling.</p>
            </div>
          </div>

          <div className="portfolio-panel rounded-[2rem] p-8">
            <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
              Professional links
            </p>
            <div className="mt-6 space-y-4">
              {directLinks.map(({ id, title, value, href, icon }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="theme-link-card flex items-center gap-4 rounded-[1.5rem] px-5 py-4 transition duration-200"
                >
                  <div className="theme-icon-warm rounded-2xl p-3">
                    {icon}
                  </div>
                  <div>
                    <p className="theme-eyebrow text-xs font-semibold uppercase tracking-[0.22em]">
                      {title}
                    </p>
                    <p className="theme-heading mt-1 text-sm font-medium sm:text-base">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
