import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Resume", id: "resume" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Blogs", id: "blogs" },
  { name: "Contact", id: "contact" },
];

const Navbar = ({ darkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Scroll detection and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = document.querySelectorAll('section');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);

      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm" 
        : "bg-transparent border-transparent"
    }`}>
      {/* Scroll progress bar */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-transparent">
        <div
          className="h-0.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500"
          style={{ width: `${progress}%` }}
        />
      </div>
      <nav
        className={`mx-auto mt-4 max-w-6xl sticky top-2 z-[100] px-4 md:px-6 lg:px-8 py-2.5 md:py-3 rounded-2xl border shadow-sm flex items-center justify-between transition-all
          bg-white/70 dark:bg-gray-900/60 backdrop-blur supports-[backdrop-filter]:backdrop-blur
          border-gray-200 dark:border-gray-800`}
        data-aos="fade-down"
      >
        <div className="flex w-full items-center justify-between gap-3">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Karan
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 md:gap-9 lg:gap-12 ml-4 md:ml-6 lg:ml-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group font-medium text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] relative transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-800 dark:text-gray-100"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
                <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </motion.button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-gray-700 dark:text-gray-300 text-lg" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.96 }}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition duration-300 ${
                  isMenuOpen ? "rotate-45 -translate-y-1/2" : "-translate-y-2"
                }`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}></span>
                <span className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform transition duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-1/2" : "translate-y-1"
                }`}></span>
              </div>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96 pt-4" : "max-h-0"
        }`}>
          <div className="flex flex-col space-y-1.5 pb-3 bg-white/80 dark:bg-gray-900/70 rounded-xl border border-gray-200 dark:border-gray-800 px-2.5 py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`py-2.5 px-4 rounded-lg text-left transition-colors text-[0.98rem] ${
                  activeSection === item.id
                    ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;