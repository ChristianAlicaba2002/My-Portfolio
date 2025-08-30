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
    <div className="about-container ml-80 fixed w-[80%] h-[94vh] bg-gray-950 rounded-2xl shadow-[0px_0px_3px_gray] overflow-y-auto">
      <div className="p-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Passionate Full-Stack Developer with a love for creating innovative
            solutions and turning ideas into reality through code.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <FaHeart className="text-red-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-white">Who I Am</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a dedicated software developer with a passion for building
                web applications that make a difference. With expertise in both
                frontend and backend technologies, I enjoy the challenge of
                creating seamless user experiences while ensuring robust,
                scalable backend systems.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community. I believe in continuous learning and
                staying up-to-date with the latest industry trends.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <FaCode className="text-blue-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Technical Skills
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-medium mb-2">
                    Frontend Development
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiReact className="text-sky-400 mr-2" />
                      <span className="text-gray-300 text-sm">React</span>
                    </div>
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiTypescript className="text-blue-600 mr-2" />
                      <span className="text-gray-300 text-sm">TypeScript</span>
                    </div>
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiJavascript className="text-yellow-400 mr-2" />
                      <span className="text-gray-300 text-sm">Javascript</span>
                    </div>
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiNextdotjs className="text-white mr-2" />
                      <span className="text-gray-300 text-sm">Next.js</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">
                    Backend Development
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiLaravel className="text-red-800 mr-2" />
                      <span className="text-gray-300 text-sm">Laravel</span>
                    </div>
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiDjango className="text-green-900 mr-2" />
                      <span className="text-gray-300 text-sm">Django</span>
                    </div>
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiExpress className="text-black mr-2" />
                      <span className="text-gray-300 text-sm">Express.js</span>
                    </div>
                    <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                      <SiHono className="text-orange-500 mr-2" />
                      <span className="text-gray-300 text-sm">Hono.js</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-medium mb-2">
                    Tools & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Git
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Docker
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Firebase
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Clerk
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Jira
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Trello
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      PostgreSQL
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Mysql
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Figma
                    </span>
                    <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300 text-sm">
                      Tailwindcss
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <FaLaptopCode className="text-green-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-white">
                  Experience
                </h2>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <h3 className="text-white font-medium">
                    Full-Stack Developer
                  </h3>
                  <p className="text-blue-400 text-sm">2025 - Present</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Developing scalable web applications using React, Laravel,
                    Hono.js
                  </p>
                </div>

                <div className="border-l-2 border-green-500 pl-4">
                  <h3 className="text-white font-medium">Frontend Developer</h3>
                  <p className="text-green-400 text-sm">2021 - 2025</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Built responsive user interfaces and implemented modern web
                    development practices.
                  </p>
                </div>

                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-white font-medium">
                    Hacktoberfest Bootcamp
                  </h3>
                  <p className="text-purple-400 text-sm">2024</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Coding Bootcamp • 2024
                  </p>
                </div>

                <div className="border-l-2 border-orange-500 pl-4">
                  <h3 className="text-white font-medium">Java Competition</h3>
                  <p className="text-orange-400 text-sm">2023</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Build a CRUD Job Offer
                  </p>
                </div>

                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="text-white font-medium">Web Competition</h3>
                  <p className="text-purple-400 text-sm">2023</p>
                  <p className="text-gray-300 text-sm mt-1">
                    Build a CRUD Job Offer
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-900 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <FaRocket className="text-yellow-500 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold text-white">Education</h2>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-white font-medium">
                    Bachelor's in Computer Science
                  </h3>
                  <p className="text-gray-400 text-sm">
                    ACLC College of Mandaue • 2023 - 2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 m-2 mt-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Let's Connect
          </h2>
          <div className="space-y-3">
            <a
              href="mailto:christiandave120702@gmail.com"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <FaEnvelope className="mr-3 text-blue-400" />
              <span>christiandave120702@gmail.com</span>
            </a>

            <a
              href="https://github.com/ChristianAlicaba2002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub className="mr-3 text-gray-400" />
              <span>github.com/ChristianAlicaba2002</span>
            </a>
          </div>
        </div>

        {/* Bottom Section - Personal Interests */}
        <div className="mt-8 bg-gray-900 rounded-xl p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <FaRocket className="text-white" />
              </div>
              <h3 className="text-white font-medium">Innovation</h3>
              <p className="text-gray-300 text-sm">
                Always exploring new technologies and approaches
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <FaHeart className="text-white" />
              </div>
              <h3 className="text-white font-medium">Open Source</h3>
              <p className="text-gray-300 text-sm">
                Contributing to the developer community
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <FaCode className="text-white" />
              </div>
              <h3 className="text-white font-medium">Problem Solving</h3>
              <p className="text-gray-300 text-sm">
                Turning complex challenges into elegant solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
