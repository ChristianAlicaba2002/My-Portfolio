import React from "react";
import {
  FaGithub,
  FaEnvelope,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaHeart,
} from "react-icons/fa";
import {
  SiReact,
  SiLaravel,
  SiTypescript,
  SiNextdotjs,
  SiHono,
} from "react-icons/si";

export default function AboutMe() {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-y-scroll p-4 lg:p-8 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <div className="whoiam-container text-center mb-8 lg:mb-12 relative z-10">
        <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
          About Me
        </h1>
        <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
          Passionate Full-Stack Developer with a love for creating innovative
          solutions and turning ideas into reality through code.
        </p>
        <div className="flex justify-center mt-6">
          <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 relative z-10">
        {/* Left Column */}
        <div className="space-y-6 lg:space-y-8">
          {/* Introduction */}
          <div className="whoiam-container backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/30 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaHeart className="text-red-500 text-xl lg:text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                Who I Am
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base mb-4 group-hover:text-white transition-colors duration-300">
              I'm a dedicated software developer with a passion for building web
              applications that make a difference. With expertise in both
              frontend and backend technologies, I enjoy the challenge of
              creating seamless user experiences while ensuring robust, scalable
              backend systems.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm lg:text-base group-hover:text-white transition-colors duration-300">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community. I believe in continuous learning and
              staying up-to-date with the latest industry trends.
            </p>
          </div>

          {/* Skills */}
          <div className="skills-container backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/30 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaCode className="text-blue-500 text-xl lg:text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                Technical Skills
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium mb-2 text-sm lg:text-base">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  <div className="flex items-center backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group/skill">
                    <SiReact className="text-sky-500 mr-2 text-sm lg:text-base group-hover/skill:scale-110 transition-transform duration-300" />
                    <span className="text-white text-xs lg:text-sm font-medium">
                      React.js
                    </span>
                  </div>
                  <div className="flex items-center backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group/skill">
                    <SiTypescript className="text-blue-500 mr-2 text-sm lg:text-base group-hover/skill:scale-110 transition-transform duration-300" />
                    <span className="text-white text-xs lg:text-sm font-medium">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex items-center backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group/skill">
                    <SiNextdotjs className="text-white mr-2 text-sm lg:text-base group-hover/skill:scale-110 transition-transform duration-300" />
                    <span className="text-white text-xs lg:text-sm font-medium">
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
                  <div className="flex items-center backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group/skill">
                    <SiLaravel className="text-red-500 mr-2 text-sm lg:text-base group-hover/skill:scale-110 transition-transform duration-300" />
                    <span className="text-white text-xs lg:text-sm font-medium">
                      Laravel
                    </span>
                  </div>
                  <div className="flex items-center backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group/skill">
                    <SiHono className="text-orange-500 mr-2 text-sm lg:text-base group-hover/skill:scale-110 transition-transform duration-300" />
                    <span className="text-white text-xs lg:text-sm font-medium">
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
                  <span className="backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300 group/skill">
                    Git
                  </span>
                  <span className="backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300 group/skill">
                    Firebase
                  </span>
                  <span className="backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300 group/skill">
                    Clerk
                  </span>
                  <span className="backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300 group/skill">
                    Trello
                  </span>
                  <span className="backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300 group/skill">
                    MySQL
                  </span>
                  <span className="backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300 group/skill">
                    Figma
                  </span>
                  <span className="backdrop-blur-sm bg-white/10 px-3 lg:px-4 py-2 rounded-full border border-white/20 text-white text-xs lg:text-sm font-medium hover:bg-white/20 transition-all duration-300 group/skill">
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
          <div className="experience-container backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/30 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaLaptopCode className="text-green-500 text-xl lg:text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                Experience
              </h2>
            </div>

            <div className="space-y-6">
              <div className="relative border-l-2 border-white pl-6 group/exp">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full group-hover/exp:scale-125 transition-transform duration-300"></div>
                <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                  Full-Stack Developer
                </h3>
                <p className="text-white text-xs lg:text-sm font-semibold mb-2">
                  2025 - Present
                </p>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed group-hover/exp:text-white transition-colors duration-300">
                  Developing scalable web applications using React, Laravel,
                  Hono.js
                </p>
              </div>

              <div className="relative border-l-2 border-gray-400 pl-6 group/exp">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full group-hover/exp:scale-125 transition-transform duration-300"></div>
                <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                  Hacktoberfest Bootcamp
                </h3>
                <p className="text-gray-300 text-xs lg:text-sm font-semibold mb-2">2025</p>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed group-hover/exp:text-white transition-colors duration-300">
                  FDA Checker Product
                </p>
              </div>

              <div className="relative border-l-2 border-gray-400 pl-6 group/exp">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-400 rounded-full group-hover/exp:scale-125 transition-transform duration-300"></div>
                <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                  Hacktoberfest Bootcamp
                </h3>
                <p className="text-gray-300 text-xs lg:text-sm font-semibold mb-2">2024</p>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed group-hover/exp:text-white transition-colors duration-300">
                  ViCo Spaces
                </p>
              </div>

              <div className="relative border-l-2 border-gray-500 pl-6 group/exp">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-500 rounded-full group-hover/exp:scale-125 transition-transform duration-300"></div>
                <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                  Java Competition
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm font-semibold">2023</p>
              </div>

              <div className="relative border-l-2 border-gray-600 pl-6 group/exp">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-600 rounded-full group-hover/exp:scale-125 transition-transform duration-300"></div>
                <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                  Web Competition
                </h3>
                <p className="text-gray-500 text-xs lg:text-sm font-semibold">2023</p>
              </div>

              <div className="relative border-l-2 border-white pl-6 group/exp">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full group-hover/exp:scale-125 transition-transform duration-300"></div>
                <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                  Frontend Developer
                </h3>
                <p className="text-white text-xs lg:text-sm font-semibold mb-2">2023 - 2025</p>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed group-hover/exp:text-white transition-colors duration-300">
                  Built responsive user interfaces and implemented modern web
                  development practices.
                </p>
              </div>

              <div className="relative border-l-2 border-gray-300 pl-6 group/exp">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-300 rounded-full group-hover/exp:scale-125 transition-transform duration-300"></div>
                <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                  Backend Developer
                </h3>
                <p className="text-gray-300 text-xs lg:text-sm font-semibold mb-2">2022 - 2025</p>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed group-hover/exp:text-white transition-colors duration-300">
                  Experienced Backend Developer skilled in building secure APIs,
                  managing databases, and optimizing server performance to
                  support scalable applications.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="education-container backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white/30 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <FaRocket className="text-orange-500 text-xl lg:text-2xl" />
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-white">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              <div className="group/edu">
                <h3 className="text-white font-bold text-sm lg:text-base mb-2 group-hover/edu:text-gray-300 transition-colors duration-300">
                  Bachelor's in Computer Science
                </h3>
                <p className="text-gray-400 text-xs lg:text-sm group-hover/edu:text-white transition-colors duration-300">
                  ACLC College of Mandaue • 2023 - 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="connect-container backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 m-2 mt-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group relative z-10">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">
          Let's Connect
        </h2>
        <div className="space-y-4">
          <a
            href="mailto:christiandave120702@gmail.com"
            className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm lg:text-base group/link p-3 rounded-xl hover:bg-white/10"
          >
            <div className="p-2 bg-white/30 to-gray-300 rounded-lg mr-4 group-hover/link:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-orange-500" />
            </div>
            <span className="break-all font-medium">christiandave120702@gmail.com</span>
          </a>

          <a
            href="https://github.com/ChristianAlicaba2002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-300 hover:text-white transition-all duration-300 text-sm lg:text-base group/link p-3 rounded-xl hover:bg-white/10"
          >
            <div className="p-2 bg-white/30 to-gray-600 rounded-lg mr-4 group-hover/link:scale-110 transition-transform duration-300">
              <FaGithub className="text-black" />
            </div>
            <span className="break-all font-medium">github.com/ChristianAlicaba2002</span>
          </a>
        </div>
      </div>

      {/* Bottom Section - Personal Interests */}
      <div className="connect-container mt-6 lg:mt-8 backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group relative z-10">
        <h2 className="text-xl lg:text-2xl font-bold text-white mb-6">
          Beyond Coding
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center group/interest">
            <div className="bg-gradient-to-r from-white to-gray-300 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/interest:scale-110 transition-transform duration-300 shadow-lg">
              <FaRocket className="text-green-500 text-lg lg:text-3xl" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base mb-2">
              Innovation
            </h3>
            <p className="text-gray-300 text-xs lg:text-sm group-hover/interest:text-white transition-colors duration-300">
              Always exploring new technologies and approaches
            </p>
          </div>

          <div className="text-center group/interest">
            <div className="bg-gradient-to-r from-gray-400 to-gray-600 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/interest:scale-110 transition-transform duration-300 shadow-lg">
              <FaHeart className="text-red-500 text-lg lg:text-3xl" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base mb-2">
              Open Source
            </h3>
            <p className="text-gray-300 text-xs lg:text-sm group-hover/interest:text-white transition-colors duration-300">
              Contributing to the developer community
            </p>
          </div>

          <div className="text-center sm:col-span-2 lg:col-span-1 group/interest">
            <div className="bg-gradient-to-r from-gray-500 to-gray-700 w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover/interest:scale-110 transition-transform duration-300 shadow-lg">
              <FaCode className="text-blue-500 text-lg lg:text-3xl" />
            </div>
            <h3 className="text-white font-bold text-sm lg:text-base mb-2">
              Problem Solving
            </h3>
            <p className="text-gray-300 text-xs lg:text-sm group-hover/interest:text-white transition-colors duration-300">
              Turning complex challenges into elegant solutions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
