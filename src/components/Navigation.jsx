import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaThLarge, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/myPicture.webp";

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: FaHome },
  { id: "dashboard", label: "Dashboard", Icon: FaThLarge },
  { id: "aboutme", label: "About", Icon: FaUser },
  { id: "projects", label: "Projects", Icon: FaFolderOpen },
  { id: "contactme", label: "Contact", Icon: FaEnvelope },
];

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

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
      className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-xl bg-black/80 border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.button
            type="button"
            onClick={() => handleNav("home")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={logo}
              alt="Christian"
              className="w-10 h-10 rounded-full border-2 border-white/20 object-cover group-hover:border-white/50 transition-colors"
            />
            <span className="text-white font-bold text-lg hidden sm:block">
              Christian
            </span>
          </motion.button>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li
                  key={item.id}
                  custom={i}
                  variants={navVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300
                      ${isActive
                        ? "text-black bg-white"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <item.Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                </motion.li>
              );
            })}
          </ul>

          <motion.button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-white/10 border border-white/20 text-white"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:hidden overflow-hidden border-t border-white/10 backdrop-blur-xl bg-black/90"
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
                        flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left font-medium transition-all duration-300
                        ${isActive
                          ? "text-black bg-white"
                          : "text-gray-300 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      <item.Icon className="w-5 h-5 shrink-0" />
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
