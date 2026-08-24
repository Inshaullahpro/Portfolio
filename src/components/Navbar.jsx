import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-800 px-6 py-4 flex justify-between items-center text-white">
      <a href="#" className="text-xl font-bold text-cyan-400">
        Insha Ullah Kundi
      </a>
      <ul className="flex space-x-6 text-sm font-medium">
        <li><a href="#about" className="hover:text-cyan-400 transition">About</a></li>
        <li><a href="#skills" className="hover:text-cyan-400 transition">Skills</a></li>
        <li><a href="#projects" className="hover:text-cyan-400 transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;