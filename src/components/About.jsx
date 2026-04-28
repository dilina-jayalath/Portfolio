import React from "react";
import { FiCode, FiCpu, FiSmartphone } from "react-icons/fi";

const About = () => {
  const focusAreas = [
    {
      title: "Product-minded frontend",
      icon: <FiCode size={20} />,
      text: "I care about layout, interaction, and clarity, not just getting a page to render. Recent work leans into React, TypeScript, Tailwind, and stronger UI structure.",
    },
    {
      title: "AI and systems experiments",
      icon: <FiCpu size={20} />,
      text: "My GitHub work also spans document chat, natural-language search, and TurtleBot simulation experiments that connect interface work to real problem solving.",
    },
    {
      title: "Mobile and coursework depth",
      icon: <FiSmartphone size={20} />,
      text: "Beyond the web stack, I keep shipping Kotlin and Java projects that strengthen software fundamentals, architecture thinking, and implementation discipline.",
    },
  ];

  return (
    <section name="about" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-[0_20px_70px_rgba(15,23,42,0.07)] backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
              About
            </p>
            <h2 className="font-display mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
              A portfolio that now reflects the way I actually build.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              <p>
                I am a software engineering student with a strong interest in
                building useful products, not just isolated assignments. My recent
                work spans modern frontend development, AI-backed experiences, and
                backend-driven application flows.
              </p>
              <p>
                Instead of presenting only a few older screenshots, this version
                of the portfolio pulls forward a broader range of work from my
                GitHub account, including marketplace interfaces,
                natural-language search tools, PDF chat experiments, robotics
                simulation, and mobile apps.
              </p>
              <p>
                I am most comfortable when a project needs both structure and
                polish: clear UX, sensible code organization, and features that can
                grow into something production-ready.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {focusAreas.map(({ title, icon, text }) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-950 p-3 text-white">
                    {icon}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-slate-950">
                    {title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
