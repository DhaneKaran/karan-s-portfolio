import React, { useState } from "react";
import { motion } from "framer-motion";

// Animated circular progress donut
const CircleProgress = ({ percent, label, gradientFrom, gradientTo }) => {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex flex-col items-center justify-center rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-4 shadow-sm">
      <svg width="120" height="120" viewBox="0 0 120 120" className="overflow-visible">
        <defs>
          <linearGradient id={`grad-${label.replace(/\W+/g, '')}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={gradientFrom} />
            <stop offset="100%" stopColor={gradientTo} />
          </linearGradient>
        </defs>
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke={"#e5e7eb"}
          className="dark:stroke-gray-700"
          strokeWidth="10"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="transparent"
          stroke={`url(#grad-${label.replace(/\W+/g, '')})`}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ transform: "rotate(-90deg)", transformOrigin: "60px 60px" }}
        />
      </svg>
      <div className="mt-2 text-center">
        <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">{label}</div>
        <div className="text-xs text-gray-600 dark:text-gray-400">{percent}%</div>
      </div>
    </div>
  );
};

const donutByCategory = {
  Frontend: [
    { label: "React.js", percent: 80, from: "#818cf8", to: "#4f46e5" },
    { label: "Next.js", percent: 70, from: "#94a3b8", to: "#0f172a" },
    { label: "JavaScript", percent: 78, from: "#fbbf24", to: "#f59e0b" },
    { label: "Tailwind CSS", percent: 78, from: "#14b8a6", to: "#0d9488" },
  ],
  Backend: [
    { label: "Node.js", percent: 72, from: "#34d399", to: "#059669" },
    { label: "Express.js", percent: 70, from: "#34d399", to: "#059669" },
    { label: "MongoDB", percent: 70, from: "#10b981", to: "#065f46" },
    { label: "PostgreSQL", percent: 65, from: "#60a5fa", to: "#2563eb" },
    { label: "Prisma ORM", percent: 62, from: "#e879f9", to: "#a21caf" },
  ],
  "Data & ML": [
    { label: "Python", percent: 75, from: "#38bdf8", to: "#0ea5e9" },
    { label: "NumPy", percent: 65, from: "#67e8f9", to: "#22d3ee" },
    { label: "Pandas", percent: 65, from: "#86efac", to: "#22c55e" },
    { label: "Scikit‑learn", percent: 55, from: "#f472b6", to: "#db2777" },
    { label: "Matplotlib", percent: 60, from: "#fb7185", to: "#e11d48" },
  ],
  Tools: [
    { label: "Git", percent: 75, from: "#f97316", to: "#ea580c" },
    { label: "GitHub", percent: 75, from: "#9ca3af", to: "#111827" },
    { label: "VS Code", percent: 80, from: "#60a5fa", to: "#2563eb" },
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
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
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Donut grid */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Core Skills</h3>

            {/* Tabs */}
            {(() => {
              const tabs = Object.keys(donutByCategory);
              const [activeTab, setActiveTab] = useState(tabs[0]);
              return (
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tabs.map((t) => (
                      <button
                        key={t}
                        onClick={() => setActiveTab(t)}
                        className={`px-3 py-1.5 rounded-full text-sm border transition-colors ${
                          activeTab === t
                            ? "bg-blue-600 text-white border-transparent"
                            : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {donutByCategory[activeTab].map((s) => (
                      <CircleProgress
                        key={s.label}
                        percent={s.percent}
                        label={s.label}
                        gradientFrom={s.from}
                        gradientTo={s.to}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>
          
          {/* Skills Categories */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              Skill Categories
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  title: "Frontend", 
                  skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5/CSS3", "Tailwind CSS", "Responsive Design"],
                  color: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300"
                },
                { 
                  title: "Backend", 
                  skills: ["Node.js", "Express.js", "REST APIs"],
                  color: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                },
                { 
                  title: "Data & ML", 
                  skills: ["NumPy", "Pandas", "Scikit‑learn", "Matplotlib"],
                  color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300"
                },
                { 
                  title: "Databases & ORM", 
                  skills: ["MongoDB (Mongoose)", "PostgreSQL", "Prisma"],
                  color: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300"
                },
                { 
                  title: "Tools", 
                  skills: ["Git", "GitHub", "VS Code", "Google Colab"],
                  color: "bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl ${category.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <h4 className="font-bold text-lg mb-3">{category.title}</h4>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-current mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;