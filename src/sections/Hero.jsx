import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutFallback from "../assets/About.png";

const Hero = () => {
  const [imgSrc, setImgSrc] = useState(aboutFallback);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const candidates = [
      "/profile.jpg",
      "/profile.jpeg",
      "/profile.png",
      "/profile.webp",
      "/professional%20image.jpg",
      "/professional image.jpg",
    ];
    const tryCandidate = (index) => {
      if (index >= candidates.length || cancelled) return;
      const url = `${candidates[index]}?v=${Date.now()}`; // cache bust
      const testImg = new Image();
      testImg.onload = () => {
        if (!cancelled) setImgSrc(candidates[index]);
      };
      testImg.onerror = () => tryCandidate(index + 1);
      testImg.src = url;
    };
    tryCandidate(0);
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hi, I’m Karan Dhane
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            IT engineering student at FAMT (University of Mumbai) building full‑stack, AI‑assisted products. Seeking a Software Engineering role to apply AI, data analytics, and agile delivery.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 shadow hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative h-[320px] md:h-[420px] lg:h-[520px] rounded-3xl overflow-hidden border border-blue-100 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/60 to-indigo-50/60 dark:from-gray-800/40 dark:to-gray-900/40 backdrop-blur flex items-center justify-center"
          whileHover={{ rotateX: 6, rotateY: -6 }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-500 shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open profile image"
          >
            <img
              src={imgSrc}
              alt="Karan Dhane"
              className="h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 object-cover rounded-full border-4 border-white dark:border-gray-900"
            />
          </button>
        </motion.div>

        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Profile image modal"
          >
            <div
              className="relative max-w-[92vw] max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imgSrc}
                alt="Karan Dhane"
                className="max-w-full max-h-[92vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-3 -right-3 md:-top-4 md:-right-4 h-9 w-9 md:h-10 md:w-10 rounded-full bg-white text-gray-800 shadow ring-1 ring-gray-200 flex items-center justify-center hover:shadow-md"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;


