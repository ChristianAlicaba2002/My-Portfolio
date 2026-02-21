import { motion } from "framer-motion";
import Badges from "../components/Badges";
import { FaHtml5, FaCss3Alt, FaLaravel, FaReact, FaPython, FaJava, FaSearch, FaPenFancy, FaCode, FaRocket, FaLayerGroup, FaBolt, FaHandshake, FaClipboardCheck } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPhp, SiDjango, SiFastapi } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";

const techStack = [
  { Icon: FaHtml5, name: "HTML5", color: "text-red-500" },
  { Icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
  { Icon: FaLaravel, name: "Laravel", color: "text-red-500" },
  { Icon: FaReact, name: "React", color: "text-sky-400" },
  { Icon: SiTypescript, name: "TypeScript", color: "text-blue-500" },
  { Icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
  { Icon: FaPython, name: "Python", color: "text-green-600" },
  { Icon: SiPhp, name: "PHP", color: "text-indigo-400" },
  { Icon: FaJava, name: "Java", color: "text-orange-500" },
  { Icon: RiNextjsFill, name: "Next.js", color: "text-white" },
  { Icon: SiDjango, name: "Django", color: "text-green-500" },
  { Icon: SiFastapi, name: "FastAPI", color: "text-green-600" },
  { Icon: TbBrandCSharp, name: "C#", color: "text-blue-500" },
];

const workflowSteps = [
  {
    step: "01",
    icon: FaSearch,
    title: "Discover",
    description: "Understand the problem, gather requirements, and define scope so we build the right thing.",
    accent: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  },
  {
    step: "02",
    icon: FaPenFancy,
    title: "Design",
    description: "Plan architecture and UX—wireframes, structure, and tech choices before writing code.",
    accent: "from-violet-500/20 to-purple-500/20 border-violet-500/30",
  },
  {
    step: "03",
    icon: FaCode,
    title: "Build",
    description: "Clean, maintainable code with tests and best practices. Iterate with feedback.",
    accent: "from-emerald-500/20 to-green-500/20 border-emerald-500/30",
  },
  {
    step: "04",
    icon: FaRocket,
    title: "Ship",
    description: "Deploy, monitor, and support. Keep things running smoothly and improve over time.",
    accent: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  },
];

const focusAreas = [
  {
    icon: FaLayerGroup,
    title: "Full-Stack",
    description: "Frontend to backend—React, Laravel, ASP.NET, and APIs.",
    color: "text-sky-400",
  },
  {
    icon: FaBolt,
    title: "Performance",
    description: "Fast, responsive UIs and optimized server-side logic.",
    color: "text-amber-400",
  },
  {
    icon: FaHandshake,
    title: "Collaboration",
    description: "Clear communication, Git workflows, and on-time delivery.",
    color: "text-emerald-400",
  },
  {
    icon: FaClipboardCheck,
    title: "Quality",
    description: "Clean code, tests, and maintainable architecture.",
    color: "text-rose-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Dashboard({ onNavigate }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black py-6 lg:py-10 w-full min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gray-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-10 lg:space-y-14">
        <Badges />

        <motion.section
          className="dashbord-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-white/90 mb-1"
          >
            Tech stack
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base mb-6"
          >
            Languages & frameworks I work with
          </motion.p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
            {techStack.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative rounded-2xl p-4 sm:p-5 backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <item.Icon
                  className={`text-2xl sm:text-3xl lg:text-4xl ${item.color} group-hover:drop-shadow-lg transition-all duration-300 mx-auto block mb-2`}
                />
                <span className="text-gray-400 group-hover:text-white text-xs sm:text-sm font-medium block text-center truncate transition-colors duration-300">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How I work */}
        <motion.section
          className="dashbord-container overflow-hidden"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {workflowSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className={`relative rounded-2xl p-5 sm:p-6 border bg-gradient-to-br ${item.accent} backdrop-blur-sm bg-white/5 border-white/10 hover:border-white/20 transition-all duration-300 group`}
              >
                <span className="text-white/20 font-mono text-sm absolute top-4 right-4 group-hover:text-white/40 transition-colors">
                  {item.step}
                </span>
                <div className="p-2.5 rounded-xl bg-white/10 text-white/90 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="text-xl sm:text-2xl" />
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30" aria-hidden />
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Focus areas */}
        <motion.section
          className="dashbord-container overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-white/90 mb-1"
          >
            What I bring
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-sm sm:text-base mb-6"
          >
            Values I bring to every project
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="rounded-2xl p-5 backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`p-2.5 rounded-xl bg-white/10 w-fit mb-3 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-xl sm:text-2xl" />
                </div>
                <h3 className="text-white font-semibold text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="dashbord-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 sm:p-8 lg:p-10 text-center backdrop-blur-sm bg-white/5 border border-white/10"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-white/90 mb-2">
              Let&apos;s work together
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-xl mx-auto">
              Have a project in mind or want to chat? I&apos;d love to hear from you.
            </p>
            <motion.button
              type="button"
              onClick={() => onNavigate?.("contactme")}
              className="px-6 py-3 rounded-xl font-medium bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.button>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
