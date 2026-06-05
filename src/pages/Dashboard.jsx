import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaLaravel, FaReact, FaPython, FaJava,
  FaSearch, FaPenFancy, FaCode, FaRocket, FaLayerGroup, FaBolt,
  FaHandshake, FaClipboardCheck,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPhp, SiFastapi } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi";

const techStack = [
  { Icon: FaHtml5,       name: "HTML5",       color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { Icon: FaCss3Alt,     name: "CSS3",         color: "text-blue-400",   bg: "bg-blue-500/10 border-blue-500/20" },
  { Icon: FaLaravel,     name: "Laravel",      color: "text-red-400",    bg: "bg-red-500/10 border-red-500/20" },
  { Icon: FaReact,       name: "React",        color: "text-sky-400",    bg: "bg-sky-500/10 border-sky-500/20" },
  { Icon: SiTypescript,  name: "TypeScript",   color: "text-blue-400",   bg: "bg-blue-500/10 border-blue-500/20" },
  { Icon: SiJavascript,  name: "JavaScript",   color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" },
  { Icon: FaPython,      name: "Python",       color: "text-green-400",  bg: "bg-green-500/10 border-green-500/20" },
  { Icon: SiPhp,         name: "PHP",          color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
  { Icon: FaJava,        name: "Java",         color: "text-orange-400", bg: "bg-orange-500/10 border-orange-500/20" },
  { Icon: RiNextjsFill,  name: "Next.js",      color: "text-white",      bg: "bg-white/5 border-white/10" },
  { Icon: SiFastapi,     name: "FastAPI",      color: "text-teal-400",   bg: "bg-teal-500/10 border-teal-500/20" },
  { Icon: TbBrandCSharp, name: "C#",           color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
];

const workflowSteps = [
  {
    step: "01", icon: FaSearch, title: "Discover",
    description: "Understand the problem, gather requirements, and define scope so we build the right thing.",
    accent: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
    iconBg: "bg-blue-500/15 text-blue-400",
    stepColor: "text-blue-500/40",
  },
  {
    step: "02", icon: FaPenFancy, title: "Design",
    description: "Plan architecture and UX — wireframes, structure, and tech choices before writing code.",
    accent: "from-violet-500/10 to-purple-500/10 border-violet-500/20",
    iconBg: "bg-violet-500/15 text-violet-400",
    stepColor: "text-violet-500/40",
  },
  {
    step: "03", icon: FaCode, title: "Build",
    description: "Clean, maintainable code with tests and best practices. Iterate with feedback.",
    accent: "from-emerald-500/10 to-green-500/10 border-emerald-500/20",
    iconBg: "bg-emerald-500/15 text-emerald-400",
    stepColor: "text-emerald-500/40",
  },
  {
    step: "04", icon: FaRocket, title: "Ship",
    description: "Deploy, monitor, and support. Keep things running smoothly and improve over time.",
    accent: "from-amber-500/10 to-orange-500/10 border-amber-500/20",
    iconBg: "bg-amber-500/15 text-amber-400",
    stepColor: "text-amber-500/40",
  },
];

const focusAreas = [
  { icon: FaLayerGroup,    title: "Full-Stack",    description: "Frontend to backend — React, Laravel, ASP.NET, and APIs.", color: "text-sky-400",    bg: "bg-sky-500/10 border-sky-500/20" },
  { icon: FaBolt,          title: "Performance",   description: "Fast, responsive UIs and optimized server-side logic.",      color: "text-amber-400",  bg: "bg-amber-500/10 border-amber-500/20" },
  { icon: FaHandshake,     title: "Collaboration", description: "Clear communication, Git workflows, and on-time delivery.",  color: "text-emerald-400",bg: "bg-emerald-500/10 border-emerald-500/20" },
  { icon: FaClipboardCheck,title: "Quality",       description: "Clean code, tests, and maintainable architecture.",           color: "text-rose-400",   bg: "bg-rose-500/10 border-rose-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
      {children}
    </span>
  );
}

export default function Dashboard({ onNavigate }) {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 lg:py-14 w-full min-h-screen relative overflow-hidden bg-[#020817]">

      {/* Ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-14">

        {/* ── Tech Stack ── */}
        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">Tech Stack</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8">Languages &amp; frameworks I work with</p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {techStack.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.06, y: -4 }}
                className={`group relative rounded-2xl p-4 border ${item.bg} hover:brightness-125 transition-all duration-300 cursor-default`}
              >
                <item.Icon className={`text-2xl sm:text-3xl ${item.color} mx-auto block mb-2 group-hover:drop-shadow-lg transition-all duration-300`} />
                <span className="text-gray-500 group-hover:text-gray-300 text-[11px] font-medium block text-center transition-colors duration-300">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── How I Work ── */}
        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>Process</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">How I Work</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8">My development process from idea to launch</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`relative rounded-2xl p-5 border bg-gradient-to-br ${item.accent} transition-all duration-300 group`}
              >
                <span className={`font-mono text-sm font-bold absolute top-4 right-4 ${item.stepColor} group-hover:opacity-60 transition-opacity`}>
                  {item.step}
                </span>
                <div className={`p-2.5 rounded-xl ${item.iconBg} w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-lg sm:text-xl" />
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-4 h-4 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                      <HiArrowRight className="text-white/30 text-xs" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Focus Areas ── */}
        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>Values</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">What I Bring</h2>
            <p className="text-gray-500 text-sm sm:text-base mb-8">Core values I bring to every project</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {focusAreas.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`rounded-2xl p-5 border ${item.bg} transition-all duration-300 group hover:brightness-125`}
              >
                <div className={`p-2.5 rounded-xl bg-white/5 w-fit mb-3 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="text-lg sm:text-xl" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── CTA ── */}
        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="relative rounded-3xl p-8 sm:p-12 text-center overflow-hidden border border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent"
          >
            <div className="relative z-10">
              <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">Ready to build?</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Let&apos;s Work Together</h2>
              <p className="text-gray-500 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Have a project in mind or want to chat? I&apos;d love to hear from you.
              </p>
              <motion.button
                type="button"
                onClick={() => onNavigate?.("contactme")}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm bg-blue-500 hover:bg-blue-600 text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
                <HiArrowRight />
              </motion.button>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}
