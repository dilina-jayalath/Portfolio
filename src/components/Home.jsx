import React from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLayers, FiMapPin } from "react-icons/fi";
import { Link } from "react-scroll";
import ME from "../assets/me2.jpg";
import resumeFile from "../assets/Dilina_Jayalath_Resume.pdf";
import { profileStats } from "../data/portfolioData";

const Home = () => {
  return (
    <section name="home" className="w-full pb-16 pt-28 md:pt-32">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 shadow-[0_16px_40px_rgba(0,0,0,0.18)] backdrop-blur">
            <FiMapPin className="text-emerald-400" />
            Building modern products from web apps to AI experiments
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
              Updated from GitHub activity
            </p>
            <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[0.95] text-slate-50 sm:text-6xl lg:text-7xl">
              I build sharp interfaces, practical AI tools, and full-stack products
              that feel ready to ship.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Software engineering student focused on React, TypeScript, Java,
              Python, and Kotlin. This portfolio now pulls forward the newer work
              from my GitHub profile instead of keeping older projects buried.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-80}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-[#04130c] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Explore projects
              <FiArrowRight size={18} />
            </Link>
            <a
              href={resumeFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Download resume
              <FiDownload size={18} />
            </a>
            <a
              href="https://github.com/dilina-jayalath"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:bg-white/10"
            >
              GitHub profile
              <FiGithub size={18} />
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {profileStats.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-[1.75rem] border border-white/10 bg-[#0c1117]/75 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur"
              >
                <p className="font-display text-2xl font-semibold text-slate-50">
                  {value}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 top-12 hidden h-24 w-24 rounded-[2rem] border border-white/10 bg-white/5 shadow-xl backdrop-blur md:block" />
          <div className="absolute -right-4 bottom-8 hidden h-32 w-32 rounded-full bg-cyan-500/25 blur-2xl md:block" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#07090d] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(52,211,153,0.22),_transparent_35%),radial-gradient(circle_at_bottom,_rgba(34,211,238,0.18),_transparent_35%)]" />
            <img
              src={ME}
              alt="Dilina Jayalath portrait"
              className="relative h-[28rem] w-full rounded-[2rem] object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-4 max-w-xs rounded-[1.75rem] border border-white/10 bg-[#0c1117]/90 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-200">
              <FiLayers size={14} />
              Current focus
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Commerce UI, AI-powered search, document chat, robotics simulations,
              and mobile product ideas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
