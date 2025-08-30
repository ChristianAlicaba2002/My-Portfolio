import React from "react";
import logo from "../assets/images/logo.webp";
import { NavLink, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <nav className="relative w-72 h-[54rem] rounded-3xl bg-gradient-to-b from-gray-900 to-gray-950 shadow-2xl border border-gray-800">
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
          </ul>
        </div>

        {/* Footer Section */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
            <p className="text-gray-400 text-sm text-center">
            &copy; 2021 - 2025
            </p>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
