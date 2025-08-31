import Badges from "../components/Badges";
import Sidebar from "../components/Sidebar";
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

export default function Dashboard() {
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
      <div className="dashbord-container mt-6 lg:mt-8 mx-2 lg:mx-4 bg-gray-900 rounded-2xl">
        <h2 className="text-gray-500 text-center p-6 lg:p-12 text-sm lg:text-base">
          This section is under development...
        </h2>
      </div>
    </div>
  );
}
