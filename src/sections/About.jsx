// src/sections/About.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-800 dark:text-gray-100 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Karan Dhane</span>, an IT engineering student at FAMT (University of Mumbai). I’ve built 10+ industry‑aligned projects covering most real‑world requirements, delivering 30–60% efficiency improvements across healthcare, finance, and e‑commerce. I’m seeking a Software Engineering role to apply AI, data analytics, and agile methods to impactful products.
        </motion.p>

        {(() => {
          const principles = [
            "Performance-first",
            "Motion + Micro‑interactions",
            "Clean, scalable UI",
          ];
          const [hovered, setHovered] = useState(null);
          const descriptions = {
            "Performance-first":
              "I optimize for Core Web Vitals, code-split where needed, and prefer lightweight patterns to keep UX fast across devices.",
            "Motion + Micro‑interactions":
              "Meaningful animations using Framer Motion: hover/tap states, staggered reveals, and scroll‑bound effects that guide attention.",
            "Clean, scalable UI":
              "Accessible, component‑driven design with Tailwind and sensible tokens; clear naming, predictable spacing, and consistent states.",
          };

          return (
            <div>
              <motion.div
                className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                {principles.map((pill) => (
                  <motion.button
                    key={pill}
                    type="button"
                    onMouseEnter={() => setHovered(pill)}
                    onMouseLeave={() => setHovered(null)}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full rounded-xl px-4 py-3 text-center backdrop-blur border transition-colors
                      ${hovered === pill
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-transparent"
                        : "bg-white/70 dark:bg-gray-800/50 text-gray-800 dark:text-gray-100 border-gray-200 dark:border-gray-700"}
                    `}
                  >
                    {pill}
                  </motion.button>
                ))}
              </motion.div>

              {hovered && (
                <motion.div
                  key={hovered}
                  className="mt-4 md:mt-6 mx-auto max-w-3xl"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="rounded-xl border bg-white/80 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700 p-4 md:p-5 text-gray-800 dark:text-gray-100">
                    <p className="text-sm md:text-base">
                      {descriptions[hovered]}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })()}
      </div>
    </section>
  );
};

export default About;