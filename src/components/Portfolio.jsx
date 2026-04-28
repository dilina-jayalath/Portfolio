import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { additionalProjects, featuredProjects } from "../data/portfolioData";

const Portfolio = () => {
  return (
    <section name="portfolio" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              Selected work
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              Recent projects pulled forward from{" "}
              <span className="text-slate-500">dilina-jayalath</span>.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The old gallery has been expanded into richer cards with actual
              project context, newer repositories, and links to both code and
              live demos where they exist.
            </p>
          </div>

          <a
            href="https://github.com/dilina-jayalath"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-slate-900/10 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5"
          >
            Browse GitHub
            <FiGithub size={18} />
          </a>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {featuredProjects.map(
            ({
              id,
              title,
              category,
              year,
              language,
              summary,
              stack,
              highlights,
              image,
              codeLink,
              liveLink,
              liveLabel,
            }) => (
              <article
                key={id}
                className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={image}
                    alt={`Preview for ${title}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    {stack.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-700">
                    {category}
                  </div>
                </div>

                <div className="space-y-5 p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                        {year}
                      </p>
                      <h3 className="font-display mt-2 text-3xl font-semibold text-slate-950">
                        {title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                      {language}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-slate-600 sm:text-base">
                    {summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#f4efe8] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                    >
                      Code
                      <FiGithub size={17} />
                    </a>
                    {liveLink && (
                      <a
                        href={liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5"
                      >
                        {liveLabel}
                        <FiExternalLink size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.06)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                More from GitHub
              </p>
              <h3 className="font-display mt-3 text-3xl font-semibold text-slate-950">
                Extra work beyond the featured six
              </h3>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Additional coursework, mobile apps, and Java projects that round
              out the portfolio and show range beyond the main showcase.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {additionalProjects.map(({ id, title, year, type, summary, codeLink }) => (
              <div
                key={id}
                className="rounded-[1.75rem] border border-slate-900/8 bg-[#f8fafc] p-5 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      {year}
                    </p>
                    <h4 className="mt-2 font-display text-2xl font-semibold text-slate-950">
                      {title}
                    </h4>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                    {type}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {summary}
                </p>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition duration-200 hover:text-slate-600"
                >
                  View repository
                  <FiExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
