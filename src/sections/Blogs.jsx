import React from "react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "India's Language Identity: Can Our...",
    summary: "On language, identity, and the role of mother tongues in India.",
    date: "July 2025",
    link: "https://karanwrites6107.blogspot.com/2025/07/indias-language-identity-can-our.html",
  },
  {
    title: "The Silent Conqueror Is English, Not...",
    summary: "Reflections on English as a cultural force and its subtle dominance.",
    date: "July 2025",
    link: "https://karanwrites6107.blogspot.com/2025/07/the-silent-conqueror-is-english-not.html",
  },
  {
    title: "Can AI Be Truly Neutral?",
    summary: "Exploring bias, alignment, and the limits of neutrality in AI.",
    date: "July 2025",
    link: "https://karanwrites6107.blogspot.com/2025/07/can-ai-be-truly-neutral.html",
  },
  {
    title: "India's AI Dream: The Bitter Pill No One...",
    summary: "A reality check on ambitions, capabilities, and policy for India's AI future.",
    date: "July 2025",
    link: "https://karanwrites6107.blogspot.com/2025/07/indias-ai-dream-bitter-pill-no-one.html",
  },
  {
    title: "Digital Healthcare's Great Awakening",
    summary: "On the transformation of healthcare through data, access, and AI.",
    date: "July 2025",
    link: "https://karanwrites6107.blogspot.com/2025/07/digital-healthcares-great-awakening.html",
  },
  {
    title: "To Be Irreplaceable by AI, Don't Become...",
    summary: "Thoughts on career resilience, creativity, and avoiding commoditization.",
    date: "August 2025",
    link: "https://karanwrites6107.blogspot.com/2025/08/to-be-irreplaceable-by-ai-dont-become.html",
  },
];

const Blogs = () => {
  return (
    <section
      id="blogs"
      className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Latest Writings
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full">
                    {blog.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{blog.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-5">{blog.summary}</p>
                
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-medium text-blue-600 dark:text-blue-400 group"
                >
                  Read Article
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
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
            href="https://karanwrites6107.blogspot.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            Visit My Blog
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;