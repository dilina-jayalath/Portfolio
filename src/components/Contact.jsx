import React from "react";
import { FiFileText, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import resumeFile from "../assets/Dilina_Jayalath_Resume.pdf";

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
    {
      id: 4,
      title: "Resume",
      value: "Download PDF",
      href: resumeFile,
      icon: <FiFileText size={18} />,
      download: true,
    },
  ];

  return (
    <section name="contact" className="w-full px-4 pb-20 pt-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/75 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Contact
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
            Let&apos;s build something useful.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            If you want to talk about product ideas, software engineering work,
            internships, or collaboration, use the form or reach me directly
            through any of the links below.
          </p>

          <div className="mt-8 space-y-4">
            {directLinks.map(({ id, title, value, href, icon, download }) => (
              <a
                key={id}
                href={href}
                target={download ? "_self" : "_blank"}
                rel="noreferrer"
                download={download}
                className="flex items-center gap-4 rounded-[1.5rem] bg-[#f8fafc] px-5 py-4 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="rounded-2xl bg-slate-950 p-3 text-white">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    {title}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700 sm:text-base">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-[0_25px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-8">
          <form
            action="https://getform.io/f/lbjkzlpa"
            method="POST"
            className="flex w-full flex-col"
          >
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Send a message
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                The form is still active. Drop your details and a short note
                about what you want to discuss.
              </p>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-slate-400"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-slate-400"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4 text-slate-900 outline-none transition duration-200 placeholder:text-slate-400 focus:border-slate-400"
            />

            <button className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 sm:w-fit">
              Let&apos;s talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
