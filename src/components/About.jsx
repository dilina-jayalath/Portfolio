import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-20 text-xl">
        Highly motivated and ambitious, I am an undergraduate in Software Engineering and deeply passionate about programming and technology. 
        Eager to apply my academic knowledge and coursework experience, I possess a solid foundation in computer 
        science and programming concepts. As an enthusiastic learner, I have completed various courses to expand my 
        skill set and gain practical expertise in programming languages and software development methodologies.
        </p>

        <br />

        <p className="text-xl">
        Seeking opportunities to gain real-world experience and further develop my abilities, 
        I am ready to embrace challenges and grow as a professional software engineer. My dedication, 
        adaptability, and collaboration make me a valuable asset to any software development project. 
        With a solid commitment to contributing effectively to dynamic teams, 
        I am prepared to leverage my skills and enthusiasm to drive innovation and excellence in software engineering.
        </p>
      </div>
    </div>
  );
};

export default About;
