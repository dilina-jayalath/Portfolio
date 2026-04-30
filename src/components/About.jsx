import React from "react";
import { FiCompass, FiLayers, FiUser } from "react-icons/fi";
import { introductionCards } from "../data/academicPortfolioData";

const About = () => {
  const icons = [<FiUser size={20} />, <FiLayers size={20} />, <FiCompass size={20} />];

  return (
    <section name="about" className="page-section w-full py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="portfolio-panel rounded-[2rem] p-8">
            <p className="theme-eyebrow text-sm font-semibold uppercase tracking-[0.35em]">
              Introduction
            </p>
            <h2 className="theme-heading font-display mt-4 text-4xl font-semibold sm:text-5xl">
              Introduction to myself
            </h2>
            <div className="theme-copy mt-6 space-y-5 text-base leading-8 sm:text-lg">
              <p>
                I am Dilina Jayalath, a Software Engineering undergraduate at
                SLIIT with a strong interest in turning ideas into useful digital
                products. I am especially motivated by work that combines clear
                interface design, structured implementation, and practical value
                for users.
              </p>
              <p>
                My academic and personal projects have helped me develop
                confidence in Java, JavaScript, React, Python, PHP, Kotlin, and
                database-backed applications. Completing a one-year Software
                Engineering internship at Irusri Group also gave me valuable
                exposure to professional teamwork, delivery expectations, and
                applied software development beyond the classroom.
              </p>
              <p>
                I see myself as a learner who is becoming increasingly
                professional in the way I plan, present, and evaluate my work.
                This portfolio reflects not only what I have built so far, but
                also how I am preparing for the professional world.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {introductionCards.map(({ title, text }, index) => (
              <div key={title} className="portfolio-card rounded-[2rem] p-6">
                <div className="flex items-center gap-3">
                  <div className="theme-icon-accent rounded-2xl p-3">
                    {icons[index]}
                  </div>
                  <h3 className="theme-heading font-display text-2xl font-semibold">
                    {title}
                  </h3>
                </div>
                <p className="theme-copy mt-4 text-sm leading-7 sm:text-base">
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
