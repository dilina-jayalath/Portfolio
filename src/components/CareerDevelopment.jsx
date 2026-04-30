import React from "react";
import { FiCheckCircle, FiTarget, FiTrendingUp } from "react-icons/fi";
import {
  careerTimeline,
  developmentPriorities,
} from "../data/academicPortfolioData";

const CareerDevelopment = () => {
  return (
    <section name="career" className="page-section w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
              Career development plan
            </p>
            <h2 className="theme-heading font-display mt-4 text-4xl font-semibold sm:text-5xl">
              A structured path from student to professional engineer
            </h2>
            <p className="theme-copy mt-5 max-w-3xl text-lg leading-8">
              My goal is to grow into a software engineer who combines strong
              implementation skills with clear communication, reliability, and
              continuous learning. The plan below breaks that ambition into
              realistic stages.
            </p>

            <div className="mt-10 space-y-6">
              {careerTimeline.map(({ phase, title, goals, metric }) => (
                <article key={phase} className="portfolio-panel rounded-[2rem] p-7">
                  <div className="theme-badge-accent inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em]">
                    {phase}
                  </div>
                  <h3 className="theme-heading font-display mt-4 text-3xl font-semibold">
                    {title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    {goals.map((goal) => (
                      <div key={goal} className="flex gap-3">
                        <FiCheckCircle className="theme-accent-text mt-1 shrink-0" />
                        <p className="theme-copy text-sm leading-7 sm:text-base">
                          {goal}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="theme-soft-panel theme-copy mt-6 rounded-[1.5rem] p-5 text-sm leading-7 sm:text-base">
                    {metric}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="theme-contrast-panel rounded-[2rem] p-7">
              <div className="theme-badge-contrast inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
                <FiTarget size={14} />
                Career target
              </div>
              <h3 className="font-display mt-5 text-3xl font-semibold">
                Associate Software Engineer leading toward full-stack growth
              </h3>
              <p className="theme-contrast-copy mt-4 text-sm leading-7 sm:text-base">
                I want to begin in a role where I can contribute to real product
                work, sharpen engineering discipline, and build from strong
                foundations rather than rushing toward titles without experience.
              </p>
            </div>

            {developmentPriorities.map(({ title, items }) => (
              <div key={title} className="portfolio-card rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="theme-icon-warm rounded-2xl p-3">
                    <FiTrendingUp size={18} />
                  </div>
                  <h3 className="theme-heading font-display text-2xl font-semibold">
                    {title}
                  </h3>
                </div>

                <div className="mt-5 space-y-3">
                  {items.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="theme-bullet mt-[10px] h-2 w-2 shrink-0 rounded-full" />
                      <p className="theme-copy text-sm leading-7 sm:text-base">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDevelopment;
