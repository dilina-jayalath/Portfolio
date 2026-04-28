import React from "react";
import css from "../assets/css.png";
import dialogflow from "../assets/dialogflow.png";
import firebase from "../assets/firebase.png";
import github from "../assets/github.png";
import graphql from "../assets/graphql.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.png";
import mongo from "../assets/mongo.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.png";
import node from "../assets/node.png";
import python from "../assets/python.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const skillGroups = [
    {
      title: "Frontend",
      description:
        "UI systems, responsive layouts, and component-based product work.",
      items: [
        { id: 1, src: reactImage, title: "React" },
        { id: 2, src: javascript, title: "JavaScript" },
        { id: 3, src: tailwind, title: "Tailwind" },
        { id: 4, src: nextjs, title: "Next.js" },
        { id: 5, src: html, title: "HTML" },
        { id: 6, src: css, title: "CSS" },
      ],
    },
    {
      title: "Backend and Data",
      description:
        "Application logic, APIs, databases, and service integrations.",
      items: [
        { id: 7, src: node, title: "Node.js" },
        { id: 8, src: java, title: "Java" },
        { id: 9, src: python, title: "Python" },
        { id: 10, src: mysql, title: "MySQL" },
        { id: 11, src: mongo, title: "MongoDB" },
        { id: 12, src: firebase, title: "Firebase" },
      ],
    },
    {
      title: "Workflow and AI",
      description:
        "Version control, APIs, and tools that support experimentation.",
      items: [
        { id: 13, src: github, title: "GitHub" },
        { id: 14, src: graphql, title: "GraphQL" },
        { id: 15, src: dialogflow, title: "Dialogflow" },
      ],
    },
  ];

  return (
    <section name="experience" className="w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            Stack
          </p>
          <h2 className="font-display mt-4 text-4xl font-semibold text-slate-50 sm:text-5xl">
            The tools behind the projects.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A mix of frontend UI work, backend implementation, database handling,
            and AI-adjacent tooling drawn from the projects featured above and the
            wider GitHub archive.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {skillGroups.map(({ title, description, items }) => (
            <div
              key={title}
              className="rounded-[2rem] border border-white/10 bg-[#0c1117]/78 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur"
            >
              <h3 className="font-display text-2xl font-semibold text-slate-50">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {description}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {items.map(({ id, src, title: itemTitle }) => (
                  <div
                    key={id}
                    className="flex items-center gap-3 rounded-[1.25rem] border border-white/8 bg-[#0a0f14] px-4 py-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(0,0,0,0.3)]"
                  >
                    <img src={src} alt={itemTitle} className="h-10 w-10 object-contain" />
                    <p className="text-sm font-semibold text-slate-200">
                      {itemTitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
