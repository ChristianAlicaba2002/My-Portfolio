import { useState } from "react";
import logo from "../assets/images/myPicture.webp";
import { FaHome, FaThLarge, FaUser, FaFolderOpen, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home", Icon: FaHome },
  { id: "dashboard", label: "Dashboard", Icon: FaThLarge },
  { id: "aboutme", label: "About Me", Icon: FaUser },
  { id: "projects", label: "Projects", Icon: FaFolderOpen },
  { id: "contactme", label: "Contact Me", Icon: FaEnvelope },
];

export default function Sidebar({ activeSection = "home", onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const handleNav = (id) => {
    onNavigate?.(id);
    closeMobileMenu();
  };

  return (
    <div className="flex flex-col lg:h-64 lg:flex-row">
      <div className="fixed top-4 left-4 z-50 lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="rounded-xl border border-border bg-card p-3 text-foreground shadow-sm"
          aria-label="Toggle mobile menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <nav
        className={`
          fixed z-40 h-full w-80 border-r border-border bg-background
          transform transition-transform duration-500 ease-in-out
          lg:relative lg:h-screen lg:max-h-screen lg:translate-x-0
          ${isMobileMenuOpen ? "top-0 left-0 translate-x-0" : "-translate-x-full lg:top-auto lg:left-auto"}
        `}
      >
        <div className="flex h-80 flex-col items-center justify-center px-6 pt-8">
          <img
            className="h-32 w-32 rounded-full border border-border object-cover"
            src={logo}
            alt="Profile"
            width={128}
            height={128}
          />
          <h1 className="mt-6 text-center text-xl font-bold tracking-tight text-foreground">
            Christian Dave Alicaba
          </h1>
          <p className="mt-1 font-mono text-xs text-muted">Software Developer</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-muted">Available for work</span>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center px-6 py-6">
          <ul className="flex flex-col items-start gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="w-full">
                  <button
                    type="button"
                    onClick={() => handleNav(item.id)}
                    className={`
                      flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors
                      ${isActive
                        ? "bg-accent text-accent-fg"
                        : "text-muted hover:bg-black/[0.04] hover:text-foreground dark:hover:bg-white/[0.05]"
                      }
                    `}
                  >
                    <item.Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="absolute right-6 bottom-6 left-6 space-y-3">
          <div className="flex justify-center">
            <ThemeToggle />
          </div>
          <p className="text-center text-xs text-muted">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </nav>
    </div>
  );
}
