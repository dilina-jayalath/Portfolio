import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import resumeFile from "../assets/Dilina_Jayalath_Resume.pdf";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "LinkedIn",
      icon: <FaLinkedin size={22} />,
      href: "https://linkedin.com/in/dilina-jayalath",
    },
    {
      id: 2,
      label: "GitHub",
      icon: <FaGithub size={22} />,
      href: "https://github.com/dilina-jayalath",
    },
    {
      id: 3,
      label: "Mail",
      icon: <HiOutlineMail size={22} />,
      href: "mailto:dspjayalath@gmail.com",
    },
    {
      id: 4,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={22} />,
      href: resumeFile,
      download: true,
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden lg:block">
      <ul className="flex flex-col gap-3">
        {links.map(({ id, label, icon, href, download }) => (
          <li key={id}>
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#0c1117]/90 text-slate-100 shadow-[0_16px_40px_rgba(0,0,0,0.3)] backdrop-blur transition duration-200 hover:-translate-y-1 hover:bg-emerald-400 hover:text-[#04130c]"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
