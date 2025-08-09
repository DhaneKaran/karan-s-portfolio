import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-semibold text-gray-900 dark:text-gray-100">Karan Dhane</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Frontend Developer • React • Tailwind • Framer Motion</p>
            <p className="text-sm mt-1">
              <a href="mailto:karandhane0808@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">karandhane0808@gmail.com</a>
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
            <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="#blogs" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Blogs</a>
            <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Karan Dhane. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



