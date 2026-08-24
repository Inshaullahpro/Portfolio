import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-slate-900 text-white">
      <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
        Hi, I'm Insha Allah 👋
      </h1>
      <p className="text-xl text-slate-300 max-w-2xl mb-8">
        MERN Stack & Frontend Developer building scalable web applications.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 font-semibold rounded-lg text-slate-900 transition">
          View Work
        </a>
        <a href="#contact" className="px-6 py-3 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;