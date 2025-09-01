import Badges from "../components/Badges";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import {
  FaGraduationCap,
  FaAward,
  FaBriefcase,
  FaCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

export default function Dashboard() {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <FaCode className="text-2xl text-blue-500" />,
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "CSS", level: 77 },
      ],
    },
    {
      category: "Backend Development",
      icon: <FaCode className="text-2xl text-green-500" />,
      skills: [
        { name: "Laravel/PHP", level: 95 },
        { name: "Python/Django", level: 70 },
        { name: "Express/Node.js", level: 65 },
        { name: "Hono/Node.js", level: 75 },
      ],
    },
    {
      category: "Tools & Software",
      icon: <FaTools className="text-2xl text-orange-500" />,
      skills: [
        { name: "Git/GitHub", level: 100 },
        { name: "Firebase", level: 50 },
        { name: "Docker", level: 45 },
        { name: "Figma", level: 90 },
        { name: "Jira", level: 60 },
        { name: "Trello", level: 95 },
      ],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="text-2xl text-orange-500" />,
      skills: [
        { name: "MySQL", level: 95 },
        { name: "PostgreSQL", level: 75 },
      ],
    },
  ];

  // const achievements = [
  //   {
  //     icon: <FaGraduationCap className="text-3xl text-blue-600" />,
  //     title: "Computer Science Degree",
  //     description:
  //       "Bachelor's in Computer Science with focus on Software Engineering",
  //     year: "2024",
  //   },
  //   {
  //     icon: <FaAward className="text-3xl text-yellow-500" />,
  //     title: "Full-Stack Certification",
  //     description:
  //       "Certified in modern web development technologies and best practices",
  //     year: "2023",
  //   },
  //   {
  //     icon: <FaBriefcase className="text-3xl text-green-600" />,
  //     title: "Freelance Projects",
  //     description:
  //       "Successfully delivered 15+ web applications for various clients",
  //     year: "2023-2024",
  //   },
  // ];

  return (
    <div className="lg:w-[82%] h-screen px-5 bg-gray-950 p-4 lg:p-6 sm:w-screen">
      <header>
        <Badges />
        <div className="dashbord-container lg:w-screen h-16 lg:h-20 overflow-hidden p-6">
          <div className="w-screen mx-auto flex gap-4 lg:gap-10 whitespace-nowrap animate-scroll">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4 lg:gap-10">
                <FaHtml5 className="text-2xl lg:text-6xl text-red-800" />
                <FaCss3Alt className="text-2xl lg:text-6xl text-blue-800" />
                <FaLaravel className="text-2xl lg:text-6xl text-red-800" />
                <FaReact className="text-2xl lg:text-6xl text-sky-400" />
                <SiTypescript className="text-2xl lg:text-6xl text-blue-600" />
                <SiJavascript className="text-2xl lg:text-6xl text-yellow-300" />
                <FaPython className="text-2xl lg:text-6xl text-blue-300" />
                <SiPhp className="text-2xl lg:text-6xl text-purple-900" />
                <FaJava className="text-2xl lg:text-6xl text-red-400" />
                <RiNextjsFill className="text-2xl lg:text-6xl text-white rounded-full" />
                <SiDjango className="text-2xl lg:text-6xl text-green-900" />
              </div>
            ))}
          </div>
        </div>
      </header>
      <section className="dashbord-container overflow-y-scroll h-[65vh] mt-6 lg:mt-8 mx-2 lg:mx-4 bg-gray-900 rounded-2xl p-4 lg:p-6">
        {/* Skills & Expertise Section */}
        <div className="bg-gray-900 rounded-2xl p-4 lg:p-6">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="text-gray-200 text-lg lg:text-2xl font-semibold flex items-center gap-3">
              <FaCode className="text-blue-500" />
              Skills & Expertise
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {skillsData.map((category, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-white font-semibold text-sm lg:text-base">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills
                    .sort((a, b) => b.level - a.level)
                    .map((skill, skillIdx) => (
                      <div key={skillIdx}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-gray-300 text-xs lg:text-sm">
                            {skill.name}
                          </span>
                          <span className="text-gray-400 text-xs">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        {/* <div className="bg-gray-900 rounded-2xl p-4 lg:p-6 mt-4 lg:mt-6">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="text-gray-200 text-lg lg:text-2xl font-semibold flex items-center gap-3">
              <FaAward className="text-yellow-500" />
              Achievements & Education
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {achievements.map((achievement, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-4 lg:p-6 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{achievement.icon}</div>
                  <h3 className="text-white font-bold text-sm lg:text-base mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 text-xs lg:text-sm mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {achievement.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </div>
  );
}
