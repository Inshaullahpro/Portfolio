import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaReact, 
  FaNodeJs, 
  FaBootstrap,
  FaDownload,
  FaChevronLeft,
  FaChevronRight,
  FaLinkedin,
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaFileCode,
  FaCogs,
  FaPaintBrush,
  FaChevronUp,
  FaChevronDown,
  FaExternalLinkAlt,
  FaCode
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiVite,
  SiUpwork,
  SiFrontendmentor,
  SiCodewars
} from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

function App() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-6xl" /> },
    { name: "React.js", icon: <FaReact className="text-cyan-400 text-6xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400 text-6xl" /> },
    { name: "Bootstrap5", icon: <FaBootstrap className="text-purple-500 text-6xl" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300 text-6xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-slate-300 text-6xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-6xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-400 text-6xl" /> }
  ];

  const services = [
    {
      title: "Expertise",
      icon: <FaFileCode className="text-4xl text-slate-200" />,
      items: [
        "Frontend Development",
        "Full-Stack Development",
        "MERN STACK",
        "Next.js + Grafbase Project Mgt",
        "Website Optimization & Efficiency"
      ]
    },
    {
      title: "Technical Support",
      icon: <FaCogs className="text-4xl text-slate-200" />,
      items: [
        "Frontend Technical Support",
        "Backend Technical Support",
        "MERN Stack + Next.js Support",
        "Deployment Management",
        "Maintaining Maintenance"
      ]
    },
    {
      title: "Design Conversion",
      icon: <FaPaintBrush className="text-4xl text-slate-200" />,
      items: [
        "Figma To HTML",
        "Design To Code",
        "User Requirements to Code",
        "Fully Responsive Web",
        "W3C Validated"
      ]
    }
  ];

  const projects = [
    {
      title: "CampusConnect",
      description: "A collaborative project management platform built for students with real-time updates and role-based access control.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://campusconnect.vercel.app",
      codeUrl: "https://github.com/inshaullahkundi/CampusConnect"
    },
    {
      title: "FlavorVerse",
      description: "An intuitive recipe discovery and meal planning web application with seamless UI and dynamic filtering.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Tailwind", "Vite"],
      liveUrl: "https://flavorverse.vercel.app",
      codeUrl: "https://github.com/inshaullahkundi/FlavorVerse"
    },
    {
      title: "E-Commerce Sneakers",
      description: "A sleek e-commerce product display page built with React, interactive image galleries, and responsive layout.",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Tailwind", "Vercel"],
      liveUrl: "https://sneakers-ecommerce.vercel.app",
      codeUrl: "https://github.com/inshaullahkundi/sneakers-ecommerce"
    },
    {
      title: "CandyCrush Game",
      description: "Developed an engaging Candy Crush-inspired game featuring dynamic candy-matching mechanics and progressive difficulty levels.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      tech: ["JavaScript", "CSS3", "HTML5"],
      liveUrl: "https://candycrush-game.vercel.app",
      codeUrl: "https://github.com/inshaullahkundi/CandyCrush-Game"
    }
  ];

  const platforms = [
    {
      title: "Codewars",
      subtitle: "Programmers Platform",
      description: "The world's most advanced coding assessment platform for organizations looking to scale their hiring, upskilling, and certification programs. I did gain a lot of problem-solving experience here.",
      icon: <SiCodewars className="text-red-500 text-2xl" />,
      link: "https://www.codewars.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Frontend Mentor",
      subtitle: "Developers Platform",
      description: "Create beautiful & aesthetic projects from beginners to guru level. A lot of frontend concepts & logics used here i.e design conversion, APIs integration & development etc.",
      icon: <SiFrontendmentor className="text-rose-400 text-2xl" />,
      link: "https://www.frontendmentor.io",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Upwork",
      subtitle: "Freelance Platform",
      description: "Upwork is the world's work marketplace. It connects businesses with independent professionals & agencies around the world. I work here as a front-end web developer.",
      icon: <SiUpwork className="text-emerald-400 text-2xl" />,
      link: "https://www.upwork.com",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "LinkedIn",
      subtitle: "Professional Networking Platform",
      description: "Actively networking, sharing web development projects, connecting with tech professionals, and discovering software development career opportunities.",
      icon: <FaLinkedin className="text-cyan-400 text-2xl" />,
      link: "https://linkedin.com",
      image: "https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "GitHub",
      subtitle: "Code Hosting & Version Control",
      description: "Managing project repositories, pushing MERN stack source code, tracking revisions, and building open-source projects.",
      icon: <FaGithub className="text-slate-300 text-2xl" />,
      link: "https://github.com",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(projects[(currentProjectIndex + i) % projects.length]);
    }
    return visible;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1b1c22] text-white font-sans selection:bg-cyan-500 selection:text-black relative scroll-smooth">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-8 max-w-7xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
            <span className="text-sm">💬</span>
          </div>
        </div>

        <ul className="flex gap-12 text-slate-400 font-medium text-lg tracking-wide">
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#home">Home</a></li>
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#services">Services</a></li>
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#skills">Skills</a></li>
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#experience">Experience</a></li>
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#projects">Projects</a></li>
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#platforms">Platforms</a></li>
          <li className="hover:text-white cursor-pointer transition-colors"><a href="#contact">Contact</a></li>
        </ul>

        <a 
          href="#contact" 
          className="px-8 py-3 border border-slate-600 rounded-full text-slate-200 hover:bg-white hover:text-black hover:border-white transition duration-300 font-medium"
        >
          Hire me
        </a>
      </nav>

      {/* Hero Section */}
      <section id="home" className="max-w-7xl mx-auto px-12 pt-16 pb-24 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-7xl font-serif font-extrabold leading-[1.1] tracking-tight">
            Hi I'm <br />
            <span className="text-slate-100">Insha Ullah</span> <br />
          </h1>
          <p className="text-2xl text-slate-500 font-medium tracking-wide">
            Frontend Developer
          </p>

          <div className="pt-2">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              download="Insha_Ullah_Kundi_Resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-slate-600 rounded-full text-lg font-medium text-slate-200 hover:bg-white hover:text-black hover:border-white transition duration-300 shadow-md group"
            >
              <span>Get Resume</span>
              <FaDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Hero Image Container */}
        <div className="md:w-1/2 flex justify-center items-end mt-12 md:mt-0">
          <img 
            src="/IMG-20251026-WA0031.jpg" 
            alt="Insha Ullah Kundi" 
            className="w-full max-w-sm h-auto object-contain max-h-[460px]"
          />
        </div>
      </section>

      {/* Services Offered Section */}
      <motion.section 
        id="services" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        className="bg-[#16171c] py-24 px-12 border-t border-slate-800/40"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <h2 className="text-6xl font-serif font-bold text-slate-100">
              Services Offered to Clients
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#212228] p-8 rounded-3xl border border-slate-800/80 hover:border-slate-500 transition duration-300 shadow-2xl space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#1b1c22] flex items-center justify-center border border-slate-700/60">
                  {service.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-100">{service.title}</h3>
                <ul className="space-y-3 text-slate-400 text-base font-medium">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-slate-500 font-bold">&gt;&gt;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        className="py-24 px-12 border-t border-slate-800/40"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold mb-14 text-slate-100">
            Skills I Use In Web Development
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-[#212228] p-6 rounded-2xl border border-slate-800 flex flex-col items-center justify-center gap-4 hover:border-slate-500 hover:bg-[#26272e] transition duration-300 shadow-xl"
              >
                <span className="text-xl font-medium text-slate-300">{skill.name}</span>
                <div className="my-2">{skill.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section 
        id="experience" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        className="bg-[#16171c] py-24 px-12 border-t border-slate-800/40"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-serif font-bold mb-12 text-slate-100">
            My Work Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
              <p>
                I'm a dedicated Frontend & MERN Stack developer proficient in creating clean, responsive, and performance-optimized web applications. My expertise encompasses full frontend layout engineering, API integrations, and robust database setups.
              </p>
              <p>
                Throughout my development journey, I have honed effective communication skills to seamlessly bridge requirements between frontend user interfaces and backend server architecture.
              </p>

              <div className="pt-4">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  download="Insha_Ullah_Kundi_Resume.pdf"
                  className="inline-flex items-center gap-3 px-8 py-3.5 border border-slate-600 rounded-full text-lg font-medium text-slate-200 hover:bg-white hover:text-black hover:border-white transition duration-300 shadow-md group"
                >
                  <span>Get Resume</span>
                  <FaDownload className="text-base group-hover:translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            <div className="space-y-8 bg-[#212228] p-8 rounded-2xl border border-slate-800">
              <div>
                <div className="flex justify-between text-lg font-medium text-slate-300 mb-2">
                  <span>Communication</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-slate-200 h-full rounded-full w-[85%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-lg font-medium text-slate-300 mb-2">
                  <span>Availability</span>
                  <span>95%</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-slate-200 h-full rounded-full w-[95%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-lg font-medium text-slate-300 mb-2">
                  <span>Flexibility</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-slate-200 h-full rounded-full w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Top Projects Section - Dynamic Carousel Active */}
      <motion.section 
        id="projects" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        className="py-24 px-12 border-t border-slate-800/40"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-6">
            <h2 className="text-6xl font-serif font-bold text-slate-100">My Top Projects</h2>
            
            <div className="flex gap-4">
              <button 
                onClick={prevProject} 
                className="w-14 h-14 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition duration-300 active:scale-95"
              >
                <FaChevronLeft className="text-lg" />
              </button>
              <button 
                onClick={nextProject} 
                className="w-14 h-14 rounded-full border border-slate-600 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition duration-300 active:scale-95"
              >
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {getVisibleProjects().map((project) => (
                <motion.div 
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative bg-[#212228] h-[360px] rounded-2xl overflow-hidden border border-slate-800 group transition duration-500 shadow-2xl flex flex-col justify-between"
                >
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:blur-sm transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16171c]/95 via-[#16171c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  <div className="absolute inset-x-0 bottom-6 z-10 flex items-center justify-center text-center px-4 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-white tracking-wide text-center w-full">
                      {project.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out z-20">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">{project.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed mb-5 font-light text-center">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-center gap-3 w-full">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2 rounded-full bg-[#2a2c36] hover:bg-white hover:text-black text-slate-200 text-xs font-medium transition duration-300 flex items-center gap-2 border border-slate-600 shadow-md"
                      >
                        <span>View Site</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                      <a 
                        href={project.codeUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="px-5 py-2 rounded-full bg-[#2a2c36] hover:bg-white hover:text-black text-slate-200 text-xs font-medium transition duration-300 flex items-center gap-2 border border-slate-600 shadow-md"
                      >
                        <span>View Code</span>
                        <FaCode className="text-[10px]" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* Platforms Section */}
      <motion.section 
        id="platforms" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        className="bg-[#16171c] py-24 px-12 border-t border-slate-800/40"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <p className="text-slate-400 tracking-widest text-lg font-medium">|| My Work</p>
            <h2 className="text-6xl font-serif font-bold text-slate-100">
              Platforms I Worked
            </h2>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {platforms.map((platform, idx) => (
              <div 
                key={idx} 
                className="bg-[#212228] p-8 rounded-3xl border border-slate-800/80 flex flex-col md:flex-row items-center gap-8 hover:border-slate-600 transition duration-300 shadow-2xl"
              >
                <div className="w-full md:w-2/5 h-60 rounded-2xl overflow-hidden">
                  <img 
                    src={platform.image} 
                    alt={platform.title} 
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="w-full md:w-3/5 space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-100">{platform.title}</h3>
                    <p className="text-slate-400 font-medium">{platform.subtitle}</p>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {platform.description}
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div>{platform.icon}</div>
                    <a 
                      href={platform.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="px-6 py-2.5 border border-slate-600 rounded-full text-slate-200 hover:bg-white hover:text-black transition duration-300 font-medium text-sm"
                    >
                      View Profile &gt;&gt;
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={fadeInUp}
        className="py-24 px-12 border-t border-slate-800/40"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-2">
            <p className="text-slate-400 tracking-widest text-lg font-medium">|| Get In Touch</p>
            <h2 className="text-6xl font-serif font-bold text-slate-100">
              Wanna say hello to me
            </h2>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-4 space-y-4">
              <div className="bg-[#212228] p-6 rounded-2xl border border-slate-800 space-y-1">
                <p className="text-slate-400 text-sm font-medium">Phone</p>
                <p className="text-slate-200 font-medium text-lg">+92 3404021737</p>
              </div>

              <div className="bg-[#212228] p-6 rounded-2xl border border-slate-800 space-y-1">
                <p className="text-slate-400 text-sm font-medium">Email</p>
                <p className="text-slate-200 font-medium text-lg">inshaullahkundi@gmail.com</p>
              </div>

              <div className="bg-[#212228] p-6 rounded-2xl border border-slate-800 space-y-1">
                <p className="text-slate-400 text-sm font-medium">GitHub</p>
                <p className="text-slate-200 font-medium text-lg">inshaullahkundi</p>
              </div>

              <div className="bg-[#212228] p-6 rounded-2xl border border-slate-800 space-y-3">
                <p className="text-slate-400 text-sm font-medium">Follow Me</p>
                <div className="flex gap-3">
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition">
                    <FaLinkedin />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition">
                    <FaFacebookF />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-white hover:text-black transition">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-8 bg-[#212228] p-8 rounded-3xl border border-slate-800">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-[#1b1c22] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-slate-500 transition"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full bg-[#1b1c22] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-slate-500 transition"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    placeholder="Phone" 
                    className="w-full bg-[#1b1c22] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-slate-500 transition"
                  />
                  <input 
                    type="text" 
                    placeholder="Subject" 
                    className="w-full bg-[#1b1c22] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-slate-500 transition"
                  />
                </div>

                <div>
                  <textarea 
                    rows="5" 
                    placeholder="Comment" 
                    className="w-full bg-[#1b1c22] border border-slate-800 rounded-xl px-5 py-4 text-slate-200 focus:outline-none focus:border-slate-500 transition resize-none"
                  ></textarea>
                </div>

                <div>
                  <button 
                    type="submit" 
                    className="px-10 py-4 border border-slate-600 rounded-full text-slate-100 hover:bg-white hover:text-black transition duration-300 font-medium text-lg"
                  >
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 px-12 border-t border-slate-800/60 bg-[#16171c] text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© 2026 Created By <span className="text-red-400">♥</span> Insha Ullah Kundi</p>
        </div>
      </footer>

      {/* Prominent Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <button 
          onClick={scrollToTop} 
          title="Scroll to Top"
          className="w-14 h-14 rounded-full bg-[#282a36] border-2 border-slate-300 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-all duration-300 cursor-pointer"
        >
          <FaChevronUp className="text-xl" />
        </button>
        <button 
          onClick={scrollToBottom} 
          title="Scroll to Bottom"
          className="w-14 h-14 rounded-full bg-[#282a36] border-2 border-slate-300 text-white flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 shadow-[0_10px_25px_rgba(0,0,0,0.8)] transition-all duration-300 cursor-pointer"
        >
          <FaChevronDown className="text-xl" />
        </button>
      </div>
    </div>
  );
}

export default App;