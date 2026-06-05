import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaThLarge, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/myPicture.webp";

const NAV_ITEMS = [
  { id: "home",      label: "Home",      Icon: FaHome },
  { id: "dashboard", label: "Dashboard", Icon: FaThLarge },
  { id: "aboutme",   label: "About",     Icon: FaUser },
  { id: "projects",  label: "Projects",  Icon: FaFolderOpen },
  { id: "contactme", label: "Contact",   Icon: FaEnvelope },
];

export default function Navigation({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate?.(id);
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-2xl bg-[#020817]/90 border-b border-blue-800/30"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <motion.button
            type="button"
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-400/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src={logo}
                alt="Christian"
                className="relative w-9 h-9 rounded-full border-2 border-blue-500/30 object-cover group-hover:border-blue-300/70 transition-colors duration-300"
              />
            </div>
            <span className="text-white font-semibold text-sm hidden sm:block tracking-wide">
              Christian
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1 p-1 rounded-2xl bg-blue-900/40 border border-blue-700/30">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`
                      relative flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300
                      ${isActive
                        ? "text-white bg-blue-500 shadow-lg shadow-blue-500/40"
                        : "text-blue-300 hover:text-white hover:bg-blue-700/50"
                      }
                    `}
                  >
                    <item.Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </button>
                </motion.li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <motion.button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-blue-800/50 border border-blue-600/30 text-blue-300 hover:text-white hover:bg-blue-700/60 transition-all duration-200"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden border-t border-blue-800/30 backdrop-blur-2xl bg-[#020817]/98"
          >
            <ul className="px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNav(item.id)}
                      className={`
                        flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-sm font-medium transition-all duration-300
                        ${isActive
                          ? "text-white bg-blue-500 shadow-lg shadow-blue-500/30"
                          : "text-blue-300 hover:text-white hover:bg-blue-800/60"
                        }
                      `}
                    >
                      <item.Icon className="w-4 h-4 shrink-0" />
                      {item.label}
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
