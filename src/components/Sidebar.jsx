import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="flex flex-col lg:h-64 lg:flex-row">
      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="p-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
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

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          onClick={closeMobileMenu}
        />
      )}

      <nav
        className={`
          fixed lg:relative z-40
          w-80 h-full lg:h-screen lg:max-h-screen
          backdrop-blur-xl bg-white/10 border-r border-white/20
          transform transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          ${isMobileMenuOpen ? "top-0 left-0" : "lg:top-auto lg:left-auto"}
          shadow-2xl shadow-black/20
        `}
      >
        <div className="logo h-80 flex flex-col justify-center items-center pt-8 px-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full blur-lg opacity-40 animate-pulse"></div>
            <img
              className="relative w-36 h-36 rounded-full border-4 border-white/20 shadow-2xl shadow-white/20 hover:scale-105 transition-transform duration-300"
              src={logo}
              alt="Profile"
              width={144}
              height={144}
            />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white rounded-full border-4 border-white/20 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          <h1 className="text-white text-2xl font-bold text-center mt-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text leading-tight">
            Christian Dave Alicaba
          </h1>
          <p className="text-gray-300 text-sm mt-2 font-medium">Full Stack Developer</p>
          <div className="flex items-center gap-2 mt-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-white text-xs font-medium">Available for work</span>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="w-full h-auto px-6 py-6 flex flex-col justify-center">
          <ul className="flex flex-col justify-center items-start gap-3">
            <li className="w-full">
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-black bg-gradient-to-r from-white/80 to-gray-300/80 backdrop-blur-sm shadow-lg shadow-white/25 border border-white/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/10"
                  }`
                }
                to={"/"}
                onClick={closeMobileMenu}
              >
                <FaHome className="w-5 h-5" />
                Go to Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-black bg-gradient-to-r from-white/80 to-gray-300/80 backdrop-blur-sm shadow-lg shadow-white/25 border border-white/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/10"
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
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-black bg-gradient-to-r from-white/80 to-gray-300/80 backdrop-blur-sm shadow-lg shadow-white/25 border border-white/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/10"
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
                  `flex items-center gap-4 w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? "text-black bg-gradient-to-r from-white/80 to-gray-300/80 backdrop-blur-sm shadow-lg shadow-white/25 border border-white/20"
                      : "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm border border-transparent hover:border-white/10"
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
                      ? "text-black font-extrabold bg-gradient-to-r from-white to-gray-300 shadow-lg shadow-white/25"
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
          <div className="backdrop-blur-sm bg-white/10 rounded-xl p-4 border border-white/20 shadow-lg">
            <p className="text-gray-300 text-sm text-center font-medium">
              &copy; 2024 All rights reserved
            </p>
            <div className="flex justify-center mt-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse animation-delay-2000"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-4000"></div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-1 h-screen">
        <Outlet />
      </div>
    </div>
  );
}
