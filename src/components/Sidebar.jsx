import React from "react";
import logo from "../assets/images/logo.webp";
import { NavLink, Outlet } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col">
      <nav className="relative w-72 h-[54rem] rounded-2xl bg-gray-950 shadow-[0px_0px_3px_gray]">
        <div className="logo h-62 flex flex-col justify-center items-center">
          <img
            className="w-40 h-42 rounded-full"
            src={logo}
            alt="Image"
            width={30}
            height={30}
            srcset=""
          />
          {/* <h1 className='text-white text-center mt-2'>Christian Dave Alicaba</h1> */}
        </div>
        <div className="w-full h-auto px-auto py-4 flex flex-col justify-center">
          <ul className="flex flex-col justify-center items-center gap-10">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-lg ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300 "
                  }`
                }
                to={"/dashboard"}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-lg ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300 "
                  }`
                }
                to={"/aboutme"}
              >
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-lg  ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300 "
                  }`
                }
                to={"/projects"}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `text-lg ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300 "
                  }`
                }
                to={"/contactme"}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
