import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "UPI + Credit Bridge App",
    description: "A React prototype that bridges UPI QR payments with credit cards using Razorpay APIs. Includes QR scan, manual entry, and transaction history.",
    tech: ["React", "Tailwind", "Razorpay", "MongoDB"],
    github: "#",
    demo: "#"
  },
  {
    title: "Student Performance Predictor",
    description: "ML-based app that predicts student exam outcomes using logistic regression and decision trees.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "A personal responsive portfolio built with React + Tailwind with theme toggle and animations.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#"
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.45, type: 'spring', stiffness: 120 } }),
  hover: { scale: 1.045, boxShadow: "0 8px 32px 0 rgba(99,102,241,0.18)" },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="glass-bg dark:glass-dark min-h-[80vh] py-20 px-4 max-w-6xl mx-auto my-10 overflow-hidden flex items-center justify-center"
    >
      <div className="relative z-10 w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent drop-shadow-lg"
          style={{ backgroundColor: 'rgba(255,255,255,0.55)', backdropFilter: 'blur(8px)' }}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/40 dark:bg-gray-800/40 rounded-3xl overflow-hidden shadow-2xl border border-blue-100 dark:border-blue-900/30 backdrop-blur-md transition-all duration-300 hover:shadow-3xl hover:-translate-y-2 group"
              style={{ backgroundColor: 'rgba(255,255,255,0.35)', backdropFilter: 'blur(12px)' }}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              custom={index}
              variants={cardVariants}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors drop-shadow-md">
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-100/60 dark:bg-blue-900/40 hover:bg-blue-200/80 dark:hover:bg-blue-700/60 transition-colors backdrop-blur"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="text-blue-700 dark:text-blue-300" />
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-blue-100/60 dark:bg-blue-900/40 hover:bg-blue-200/80 dark:hover:bg-blue-700/60 transition-colors backdrop-blur"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt className="text-blue-700 dark:text-blue-300" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 drop-shadow-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gradient-to-r from-pink-100 via-blue-100 to-purple-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-pink-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium shadow-sm backdrop-blur"
                      style={{ backgroundColor: 'rgba(255,255,255,0.45)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg tracking-wide backdrop-blur"
            style={{ backgroundColor: 'rgba(255,255,255,0.45)' }}
          >
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;