import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "home", label: "Home" },
    { id: 2, link: "about", label: "About" },
    { id: 3, link: "portfolio", label: "Projects" },
    { id: 4, link: "experience", label: "Stack" },
    { id: 5, link: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0c1117]/80 px-5 py-3 text-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div>
          <Link to="home" smooth duration={500} className="cursor-pointer">
            <p className="font-signature text-2xl font-bold tracking-tight text-slate-50 md:text-3xl">
              Dilina Jayalath
            </p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
              Software Portfolio
            </p>
          </Link>
        </div>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, link, label }) => (
            <li
              key={id}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition duration-200 hover:bg-white/10 hover:text-white"
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

        <div className="hidden md:block">
          <a
            href="https://github.com/dilina-jayalath"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400 px-4 py-2 text-sm font-semibold text-[#04130c] transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-300"
          >
            GitHub
            <FiGithub size={16} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setNav(!nav)}
          className="z-10 rounded-full border border-white/10 bg-white/5 p-3 text-slate-200 md:hidden"
          aria-label="Toggle navigation"
        >
          {nav ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {nav && (
        <div className="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/10 bg-[#0c1117]/95 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:hidden">
          <ul className="space-y-2">
            {links.map(({ id, link, label }) => (
              <li key={id}>
                <Link
                  onClick={() => setNav(false)}
                  to={link}
                  smooth
                  duration={500}
                  offset={-80}
                  className="block cursor-pointer rounded-2xl bg-white/5 px-4 py-3 text-lg font-medium text-slate-200 transition duration-200 hover:bg-emerald-400 hover:text-[#04130c]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
