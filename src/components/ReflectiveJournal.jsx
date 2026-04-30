import React from "react";
import { FiBookOpen, FiCornerDownRight } from "react-icons/fi";
import { reflectionEntries } from "../data/academicPortfolioData";

const ReflectiveJournal = () => {
  return (
    <section name="journal" className="page-section w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
            Reflective journal
          </p>
          <h2 className="theme-heading font-display mt-4 text-4xl font-semibold sm:text-5xl">
            What I learned from IT4070 - Preparing for Professional World
          </h2>
          <p className="theme-copy mt-5 text-lg leading-8">
            PPW helped me connect academic learning with professional readiness.
            The most important lesson was that career development is not only
            about technical knowledge, but also about reflection, communication,
            self-awareness, and consistent professional habits.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {reflectionEntries.map(({ id, title, reflection, impact }) => (
            <article key={id} className="portfolio-panel rounded-[2rem] p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="theme-badge-accent inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em]">
                  <FiBookOpen size={14} />
                  Entry {id}
                </div>
              </div>

              <h3 className="theme-heading font-display mt-5 text-3xl font-semibold">
                {title}
              </h3>

              <p className="theme-copy mt-5 text-sm leading-7 sm:text-base">
                {reflection}
              </p>

              <div className="theme-soft-panel mt-6 rounded-[1.5rem] p-5">
                <div className="theme-warm-text flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em]">
                  <FiCornerDownRight size={15} />
                  How this changed me
                </div>
                <p className="theme-copy mt-3 text-sm leading-7 sm:text-base">
                  {impact}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReflectiveJournal;
