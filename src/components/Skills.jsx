import React from 'react';

const Skills = () => {
  const skillList = [
    "React.js", "Node.js", "Express.js", "MongoDB", 
    "JavaScript (ES6+)", "Tailwind CSS", "Vite", "Git & GitHub", "REST APIs"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-800 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-8">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skillList.map((skill, index) => (
            <span 
              key={index} 
              className="px-5 py-2 bg-slate-900 border border-slate-700 rounded-full text-slate-200 text-sm font-medium shadow-md"
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