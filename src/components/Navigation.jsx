import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaThLarge, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

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
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.button
            type="button"
            onClick={() => handleNav("home")}
            className="group flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
              CA
            </span>
          </motion.button>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_ITEMS.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-foreground"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-full border border-border p-2.5 text-foreground lg:hidden"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="space-y-0.5 px-4 py-3">
              {NAV_ITEMS.map((item, i) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <button
                      type="button"
                      onClick={() => handleNav(item.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-foreground text-background"
                          : "text-muted hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.05]"
                      }`}
                    >
                      <item.Icon className="h-4 w-4 shrink-0" />
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
