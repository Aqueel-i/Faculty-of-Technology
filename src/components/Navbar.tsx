import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  EllipsisVerticalIcon as MenuIcon,
  XMarkIcon as XIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Staff", path: "/staff" },
    { name: "Announcements", path: "/announcements" },
    { name: "Gallery", path: "/gallery" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* === Logo === */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">ZC</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              A/L Technology
            </span>

            <p className="text-lg font-semibold text-teal-600 dark:text-teal-400">
              Zahira College
            </p>
          </div>
        </Link>

        {/* === Desktop Nav === */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-semibold transition-colors duration-200 hover:text-teal-600 dark:hover:text-teal-400 ${location.pathname === link.path
                ? "text-teal-600 dark:text-teal-400"
                : "text-navy-700 dark:text-gray-200"
                }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Theme toggle with glow */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${darkMode
              ? "bg-navy-800 hover:bg-navy-700 shadow-[0_0_12px_#facc15]"
              : "bg-gray-100 hover:bg-gray-200 shadow-[0_0_12px_#38bdf8]"
              }`}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-navy-700" />
            )}
          </motion.button>
        </nav>

        {/* === Mobile Menu Buttons === */}
        <div className="flex items-center md:hidden space-x-3">
          {/* Theme toggle with glow */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 180 }}
            onClick={toggleTheme}
            className={`p-2 rounded-full shadow-md transition-all duration-300 ${darkMode
              ? "bg-navy-800 hover:bg-navy-700 shadow-[0_0_12px_#facc15]"
              : "bg-gray-100 hover:bg-gray-200 shadow-[0_0_12px_#38bdf8]"
              }`}
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-navy-700" />
            )}
          </motion.button>

          {/* New minimal menu icon */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-navy-800 shadow-md hover:bg-gray-200 dark:hover:bg-navy-700 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6 text-teal-500" />
            ) : (
              <MenuIcon className="w-6 h-6 text-navy-900 dark:text-gray-200" />
            )}
          </motion.button>
        </div>
      </div>

      {/* === Floating Mobile Menu Card === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-card"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute right-4 top-[70px] w-56 bg-white/80 dark:bg-navy-900/80 backdrop-blur-2xl border border-gray-200/30 dark:border-navy-700/50 rounded-2xl shadow-2xl p-4"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to={link.path}
                  className={`block text-base font-semibold px-3 py-2 rounded-lg transition-all duration-200 hover:bg-teal-50 dark:hover:bg-navy-800 hover:text-teal-600 dark:hover:text-teal-400 ${location.pathname === link.path
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-navy-800 dark:text-gray-200"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
