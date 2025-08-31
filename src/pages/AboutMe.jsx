import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiPhp,
  SiLaravel,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiHono,
  SiExpress,
} from "react-icons/si";

export default function AboutMe() {
  return (
    <div className="w-full h-screen bg-gray-950 overflow-y-scroll p-4 lg:p-8">
      {/* Header Section */}
      <div className="whoiam-container text-center mb-8 lg:mb-12">
        <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
          About Me
        </h1>
        <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto px-4">
          Passionate Full-Stack Developer with a love for creating innovative
          solutions and turning ideas into reality through code.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Left Column */}
        <div className="space-y-6 lg:space-y-8">
          {/* Introduction */}
          <div className="whoiam-container bg-gray-900 rounded-xl p-4 lg:p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FaHeart className="text-red-500 text-xl lg:text-2xl mr-3" />
              <h2 className="text-xl lg:text-2xl font-semibold text-white">
                Who I Am
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base">
              I'm a dedicated software developer with a passion for building web
              applications that make a difference. With expertise in both
              frontend and backend technologies, I enjoy the challenge of
              creating seamless user experiences while ensuring robust, scalable
              backend systems.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4 text-sm lg:text-base">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying up-to-date with the latest industry trends.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-container bg-gray-900 rounded-xl p-4 lg:p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaCode className="text-blue-500 text-xl lg:text-2xl mr-3" />
              <h2 className="text-xl lg:text-2xl font-semibold text-white">
                Technical Skills
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2 text-sm lg:text-base">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiReact className="text-sky-400 mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      React
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiTypescript className="text-blue-600 mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiJavascript className="text-yellow-400 mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      Javascript
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiNextdotjs className="text-white mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2 text-sm lg:text-base">
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiLaravel className="text-red-800 mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiDjango className="text-green-900 mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      Django
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiExpress className="text-black mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      Express.js
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-800 px-2 lg:px-3 py-1 rounded-full">
                    <SiHono className="text-orange-500 mr-2 text-sm lg:text-base" />
                    <span className="text-gray-300 text-xs lg:text-sm">
                      Hono.js
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-white font-medium mb-2 text-sm lg:text-base">
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Git
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Docker
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Firebase
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Clerk
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Jira
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Trello
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    PostgreSQL
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Mysql
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Figma
                  </span>
                  <span className="bg-gray-800 px-2 lg:px-3 py-1 rounded-full text-gray-300 text-xs lg:text-sm">
                    Tailwindcss
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 lg:space-y-8">
          {/* Experience */}
          <div className="experience-container bg-gray-900 rounded-xl p-4 lg:p-6 shadow-lg">
            <div className="flex items-center mb-6">
              <FaLaptopCode className="text-green-500 text-xl lg:text-2xl mr-3" />
              <h2 className="text-xl lg:text-2xl font-semibold text-white">
                Experience
              </h2>
            </div>

            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h3 className="text-white font-medium text-sm lg:text-base">
                  Full-Stack Developer
                </h3>
                <p className="text-blue-400 text-xs lg:text-sm">
                  2025 - Present
                </p>
                <p className="text-gray-300 text-xs lg:text-sm mt-1">
                  Developing scalable web applications using React, Laravel,
                  Hono.js
                </p>
              </div>

              <div className="border-l-2 border-green-500 pl-4">
                <h3 className="text-white font-medium text-sm lg:text-base">
                  Frontend Developer
                </h3>
                <p className="text-green-400 text-xs lg:text-sm">2023 - 2025</p>
                <p className="text-gray-300 text-xs lg:text-sm mt-1">
                  Built responsive user interfaces and implemented modern web
                  development practices.
                </p>
              </div>

              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="text-white font-medium text-sm lg:text-base">
                  Hacktoberfest Bootcamp
                </h3>
                <p className="text-purple-400 text-xs lg:text-sm">2024</p>
                <p className="text-gray-300 text-xs lg:text-sm mt-1">
                  Coding Bootcamp • 2024
                </p>
              </div>

              <div className="border-l-2 border-cyan-500 pl-4">
                <h3 className="text-white font-medium text-sm lg:text-base">
                  Backend Developer
                </h3>
                <p className="text-cyan-400 text-xs lg:text-sm">2022 - 2024</p>
                <p className="text-gray-300 text-xs lg:text-sm mt-1">
                  Built responsive user interfaces and implemented modern web
                  development practices.
                </p>
              </div>

              <div className="border-l-2 border-orange-500 pl-4">
                <h3 className="text-white font-medium text-sm lg:text-base">
                  Java Competition
                </h3>
                <p className="text-orange-400 text-xs lg:text-sm">2023</p>
                <p className="text-gray-300 text-xs lg:text-sm mt-1">
                  Build a CRUD Job Offer
                </p>
              </div>

              <div className="border-l-2 border-yellow-500 pl-4">
                <h3 className="text-white font-medium text-sm lg:text-base">
                  Web Competition
                </h3>
                <p className="text-yellow-400 text-xs lg:text-sm">2023</p>
                <p className="text-gray-300 text-xs lg:text-sm mt-1">
                  Build a CRUD Job Offer
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="education-container bg-gray-900 rounded-xl p-4 lg:p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <FaRocket className="text-yellow-500 text-xl lg:text-2xl mr-3" />
              <h2 className="text-xl lg:text-2xl font-semibold text-white">
                Education
              </h2>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-white font-medium text-sm lg:text-base">
                  Bachelor's in Computer Science
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm">
                  ACLC College of Mandaue • 2023 - 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="connect-container bg-gray-900 rounded-xl p-4 lg:p-6 m-2 mt-6 shadow-lg">
        <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">
          Let's Connect
        </h2>
        <div className="space-y-3">
          <a
            href="mailto:christiandave120702@gmail.com"
            className="flex items-center text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
          >
            <FaEnvelope className="mr-3 text-blue-400" />
            <span className="break-all">christiandave120702@gmail.com</span>
          </a>

          <a
            href="https://github.com/ChristianAlicaba2002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-colors text-sm lg:text-base"
          >
            <FaGithub className="mr-3 text-gray-400" />
            <span className="break-all">github.com/ChristianAlicaba2002</span>
          </a>
        </div>
      </div>

      {/* Bottom Section - Personal Interests */}
      <div className="connect-container mt-6 lg:mt-8 bg-gray-900 rounded-xl p-4 lg:p-6 shadow-lg">
        <h2 className="text-xl lg:text-2xl font-semibold text-white mb-4">
          Beyond Coding
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-blue-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaRocket className="text-white text-sm lg:text-base" />
            </div>
            <h3 className="text-white font-medium text-sm lg:text-base">
              Innovation
            </h3>
            <p className="text-gray-300 text-xs lg:text-sm">
              Always exploring new technologies and approaches
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaHeart className="text-white text-sm lg:text-base" />
            </div>
            <h3 className="text-white font-medium text-sm lg:text-base">
              Open Source
            </h3>
            <p className="text-gray-300 text-xs lg:text-sm">
              Contributing to the developer community
            </p>
          </div>

          <div className="text-center sm:col-span-2 lg:col-span-1">
            <div className="bg-purple-500 w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <FaCode className="text-white text-sm lg:text-base" />
            </div>
            <h3 className="text-white font-medium text-sm lg:text-base">
              Problem Solving
            </h3>
            <p className="text-gray-300 text-xs lg:text-sm">
              Turning complex challenges into elegant solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
