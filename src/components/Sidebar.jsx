import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { NavLink, Outlet } from "react-router-dom";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-2 rounded-lg bg-gray-800/90 backdrop-blur-sm border border-gray-700 text-white hover:bg-gray-700/90 transition-colors shadow-lg"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={closeMobileMenu}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`
          fixed lg:relative z-40
          w-80 h-full lg:h-screen lg:max-h-screen
          bg-gradient-to-b from-gray-900 to-gray-950
          transform transition-transform duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          ${isMobileMenuOpen ? "top-0 left-0" : "lg:top-auto lg:left-auto"}
        `}
      >
        {/* Logo Section */}
        <div className="logo h-72 flex flex-col justify-center items-center pt-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-30"></div>
            <img
              className="relative w-32 h-32 rounded-full border-4 border-gray-700 shadow-xl"
              src={logo}
              alt="Profile"
              width={128}
              height={128}
            />
          </div>
          <h1 className="text-white text-xl font-semibold text-center mt-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
            Christian Dave Alicaba
          </h1>
          <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
        </div>

        {/* Navigation Section */}
        <div className="w-full h-auto px-6 py-6 flex flex-col justify-center">
          <ul className="flex flex-col justify-center items-start gap-2">
            <li className="w-full">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`
                }
                to={"dashboard"}
                onClick={closeMobileMenu}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                Dashboard
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`
                }
                to={"aboutme"}
                onClick={closeMobileMenu}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                About Me
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`
                }
                to={"projects"}
                onClick={closeMobileMenu}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                </svg>
                Projects
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`
                }
                to={"contactme"}
                onClick={closeMobileMenu}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <p className="text-gray-400 text-sm text-center">
              &copy; 2024 All rights reserved
            </p>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
}
