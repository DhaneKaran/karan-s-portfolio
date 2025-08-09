import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"

    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Resume
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                  <FaGraduationCap className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white ml-4">
                  Education
                </h3>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="border-l-4 border-blue-500 pl-4 py-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Finolex Academy of Management & Technology (FAMT)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    B.E. in Information Technology, University of Mumbai
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    2021 – 2026 | CGPA: 6.208/10 (up to 5th semester)
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 mt-2">
                    Coursework: Data Structures, Algorithms, Web Development, Machine Learning, Database Systems
                  </p>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-blue-500 pl-4 py-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                    Shrim Jr. College, Dhorjalgaon — HSC (Science)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    Pune University
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Jul 2021 – Mar 2022 | 81.67%
                  </div>

                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white mt-6">
                    Shri Sant Wamanbhau Vidyalay, Wadule Kh. — SSC
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    Pune University
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    Jul 2019 – Mar 2020 | 87%
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-6">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                  <FaBriefcase className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white ml-4">Experience</h3>
              </div>
              
              <div className="space-y-6">
                <motion.div 
                  className="border-l-4 border-purple-500 pl-4 py-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">IBM SkillsBuild — Data Insights & Business Analytics</h4>
                  <p className="text-gray-700 dark:text-gray-200">July 2025 – Present</p>
                  <ul className="mt-3 text-gray-700 dark:text-gray-200 space-y-2">
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      Transformed raw data into insights using IBM Cognos Analytics and Watson Studio
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      Developed predictive models achieving 85%+ accuracy for forecasting
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      Optimized ETL workflows (Pandas/NumPy), reducing processing time by 40%
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      Created interactive dashboards accelerating decisions by 60%
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      Identified KPIs driving 30%+ improvements in key business metrics
                    </li>
                  </ul>
                </motion.div>
                
                {/* Freelance Developer section removed as requested */}
              </div>
            </div>
          </motion.div>
        </div>
        
        {(() => {
          const [hovering, setHovering] = useState(false);
          return (
            <motion.div 
              className="mt-16 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div 
                className="relative inline-flex items-center gap-4"
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <a 
                  href={"/Karan's_Resume.pdf"} 
                  download
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Download Full Resume
                </a>
                <a 
                  href={"/Karan's_Resume.pdf"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-medium shadow hover:shadow-md transition-all transform hover:-translate-y-1"
                >
                  See in PDF
                </a>

                {/* Hover popup preview */}
                {hovering && (
                  <div 
                    className="absolute -top-[460px] left-1/2 -translate-x-1/2 w-[720px] max-w-[90vw] h-[440px] z-50 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-2xl bg-white dark:bg-gray-900"
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                  >
                    <iframe
                      title="Resume PDF Preview"
                      src={"/Karan's_Resume.pdf#view=FitH&toolbar=0"}
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
};

export default Resume;