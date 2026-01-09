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
  FaCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

export default function Dashboard() {
  const skillsData = [
    {
      category: "Frontend Development",
      icon: <FaCode className="text-2xl text-blue-500" />,
      skills: [
        { name: "React/Next.js", level: 100 },
        { name: "TypeScript", level: 100 },
        { name: "Tailwind CSS", level: 100 },
      ],
    },
    {
      category: "Backend Development",
      icon: <FaCode className="text-2xl text-green-500" />,
      skills: [
        { name: "PHP ( Laravel )", level: 100 },
        { name: "C# ( ASP.NET Core)", level: 100 },
      ],
    },
    {
      category: "Tools & Software",
      icon: <FaTools className="text-2xl text-red-500" />,
      skills: [
        { name: "Git/GitHub", level: 100 },
        { name: "Firebase", level: 100 },
        { name: "Figma", level: 100 },
        { name: "Trello", level: 100 },
      ],
    },
    {
      category: "Databases",
      icon: <FaDatabase className="text-2xl text-yellow-500" />,
      skills: [{ name: "MySQL", level: 100 }],
    },
  ];

  return (
    <div className="px-5 bg-gradient-to-br from-black via-gray-900 to-black p-4 lg:p-6 lg:w-[82%] sm:w-screen sm:h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <header className="z-10">
        <Badges />
        <div className="dashbord-container w-screen mt-6 lg:mt-8 backdrop-blur-sm bg-white/5 rounded-2xl p-4 lg:p-6 border border-white/10 relative z-10 overflow-hidden">
          <div className="flex gap-6 lg:gap-12 whitespace-nowrap animate-scroll">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 lg:gap-12">
                <div className="group">
                  <FaHtml5 className="text-3xl lg:text-7xl text-red-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <FaCss3Alt className="text-3xl lg:text-7xl text-blue-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <FaLaravel className="text-3xl lg:text-7xl text-red-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <FaReact className="text-3xl lg:text-7xl text-sky-400 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <SiTypescript className="text-3xl lg:text-7xl text-blue-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <SiJavascript className="text-3xl lg:text-7xl text-yellow-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <FaPython className="text-3xl lg:text-7xl text-red-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <SiPhp className="text-3xl lg:text-7xl text-purple-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <FaJava className="text-3xl lg:text-7xl text-orange-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <RiNextjsFill className="text-3xl lg:text-7xl text-white group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <SiDjango className="text-3xl lg:text-7xl text-green-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
                <div className="group">
                  <TbBrandCSharp className="text-3xl lg:text-7xl text-blue-500 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
      {/* <section className="dashbord-container overflow-y-scroll h-[65vh] mt-6 mx-2 backdrop-blur-sm bg-white/5 rounded-2xl p-4 lg:p-6 lg:mt-8 lg:mx-4 border border-white/10 relative z-10">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20">
          <div className="flex items-center justify-between mb-6 lg:mb-8">
            <h2 className="text-white text-xl lg:text-3xl font-bold flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-white to-gray-300 rounded-xl">
                <FaCode className="text-blue-500 text-xl lg:text-2xl" />
              </div>
              Skills & Expertise
            </h2>
            <div className="w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {skillsData.map((category, idx) => (
              <div key={idx} className="group backdrop-blur-sm bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-white font-bold text-base lg:text-lg">
                    {category.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills
                    .sort((a, b) => b.level - a.level)
                    .map((skill, skillIdx) => (
                      <div key={skillIdx} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-300 text-sm lg:text-base font-medium group-hover/skill:text-white transition-colors duration-300">
                            {skill.name}
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg group-hover/skill:shadow-white/50"
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
      </section> */}
    </div>
  );
}
