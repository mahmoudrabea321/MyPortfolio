import React from "react";

const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "TailwindCSS",
  "Git",
  "REST APIs",
  "HTML",
  "CSS",
  "VITE",
  "WordPress",
];

const Skills = () => {
  return (
    <section className="bg-gray-900 py-16" id="skills">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Skills</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg font-medium 
                         dark:bg-blue-900 dark:text-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
