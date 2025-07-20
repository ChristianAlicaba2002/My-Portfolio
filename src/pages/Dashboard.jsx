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

export default function Dashboard() {
  return (
    <div className="ml-80 fixed w-[80%] h-[94vh] bg-gray-950 rounded-2xl shadow-[0px_0px_3px_gray]">
      <header>
        <Badges />
        <div className="programming-languages relative m-6 w-[97%] h-20 overflow-hidden">
          <div className="categories flex gap-16 whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-10">
                <FaHtml5 className="text-6xl text-red-800" />
                <FaCss3Alt className="text-6xl text-blue-800" />
                <FaLaravel className="text-6xl text-red-800" />
                <FaReact className="text-6xl text-sky-400" />
                <SiTypescript className="text-6xl text-blue-600" />
                <SiJavascript className="text-6xl text-yellow-300" />
                <FaPython className="text-6xl text-blue-300" />
                <SiPhp className="text-6xl text-purple-900" />
                <FaJava className="text-6xl text-red-400" />
                <RiNextjsFill className="text-6xl text-white rounded-full" />
                <SiDjango className="text-6xl text-green-900" />
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
