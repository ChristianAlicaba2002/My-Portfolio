import {
  FaGithub, FaEnvelope, FaCode, FaLaptopCode, FaRocket, FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiReact, SiLaravel, SiTypescript, SiNextdotjs, SiFastapi, SiExpress,
  SiExpo,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
      {children}
    </span>
  );
}

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl p-6 lg:p-8 border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.055] transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

function SkillPill({ icon, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-white/[0.07] bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 group">
      {icon}
      <span className="text-gray-400 group-hover:text-gray-200 text-xs font-medium transition-colors duration-300">{label}</span>
    </div>
  );
}

function TimelineItem({ title, period, description, dotColor = "bg-indigo-500", lineColor = "border-indigo-500/30", isLast = false }) {
  return (
    <div className={`relative pl-6 ${!isLast ? "pb-6" : ""}`}>
      {!isLast && <div className={`absolute left-[7px] top-4 bottom-0 w-px ${lineColor} border-l border-dashed`} />}
      <div className={`absolute left-0 top-1 w-3.5 h-3.5 rounded-full ${dotColor} border-2 border-[#020817] shadow-lg`} />
      <h3 className="text-white font-semibold text-sm mb-0.5">{title}</h3>
      <p className="text-indigo-400/80 text-xs font-mono mb-1">{period}</p>
      {description && <p className="text-gray-500 text-xs leading-relaxed">{description}</p>}
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-[#020817] p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="whoiam-container text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>Who I Am</SectionLabel>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            I thrive in collaborative environments where ideas turn into impactful products. Continuously
            learning new tools and best practices to build clean, maintainable solutions that deliver long-term value.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          </div>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          {/* ── Left Column ── */}
          <div className="space-y-6">

            {/* Who I Am */}
            <motion.div variants={fadeUp}>
              <Card>
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/20">
                    <FaHeart className="text-rose-400 text-lg" />
                  </div>
                  <h2 className="text-lg font-bold text-white">Who I Am</h2>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  I'm a dedicated software developer with a passion for building web
                  applications that make a difference. With expertise in both frontend and
                  backend technologies, I enjoy creating seamless user experiences while
                  ensuring robust, scalable backend systems.
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the
                  developer community.
                </p>
              </Card>
            </motion.div>

            {/* Technical Skills */}
            <motion.div variants={fadeUp}>
              <Card className="skills-container">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                    <FaCode className="text-blue-400 text-lg" />
                  </div>
                  <h2 className="text-lg font-bold text-white">Technical Skills</h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillPill icon={<SiReact className="text-sky-400 text-sm" />} label="React.js" />
                      <SkillPill icon={<SiTypescript className="text-blue-400 text-sm" />} label="TypeScript" />
                      <SkillPill icon={<SiNextdotjs className="text-white text-sm" />} label="Next.js" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillPill icon={<SiExpo className="text-sky-400 text-sm" />} label="React Native (Expo)" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillPill icon={<TbBrandCSharp className="text-violet-400 text-sm" />} label="ASP.NET Core" />
                      <SkillPill icon={<SiLaravel className="text-red-400 text-sm" />} label="Laravel" />
                      <SkillPill icon={<SiExpress className="text-gray-300 text-sm" />} label="Express.js" />
                      <SkillPill icon={<SiFastapi className="text-teal-400 text-sm" />} label="FastAPI" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">Tools &amp; Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "Docker", "Firebase", "MySQL", "PostgreSQL", "Figma", "TanStack", "Tailwind CSS", "Trello", "Jira"].map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1.5 rounded-xl border border-white/[0.07] bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-gray-200 text-xs font-medium transition-all duration-300 cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

          </div>

          {/* ── Right Column ── */}
          <div className="space-y-6">

            {/* Experience */}
            <motion.div variants={fadeUp}>
              <Card className="experience-container">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <FaLaptopCode className="text-emerald-400 text-lg" />
                  </div>
                  <h2 className="text-lg font-bold text-white">Experience</h2>
                </div>

                <div>
                  <TimelineItem
                    title="Full-Stack Developer"
                    period="2026 – Present"
                    description="Developing scalable web applications using React, Laravel, and ASP.NET Core."
                    dotColor="bg-indigo-500"
                  />
                  <TimelineItem
                    title="Hacktoberfest Bootcamp"
                    period="2025"
                    description="FDA Checker Product — Overall Projects Winner 🏆"
                    dotColor="bg-amber-400"
                  />
                  <TimelineItem
                    title="Hacktoberfest Bootcamp"
                    period="2024"
                    description="ViCo Spaces — Collaborative co-working space app."
                    dotColor="bg-violet-400"
                  />
                  <TimelineItem
                    title="Frontend Developer"
                    period="2023 – 2026"
                    description="Built responsive UIs and implemented modern web development practices."
                    dotColor="bg-sky-400"
                  />
                  <TimelineItem
                    title="Backend Developer"
                    period="2022 – 2026"
                    description="Built secure APIs, managed databases, and optimized server performance."
                    dotColor="bg-emerald-400"
                  />
                  <TimelineItem
                    title="Java Competition"
                    period="2023"
                    dotColor="bg-orange-400"
                    isLast={false}
                  />
                  <TimelineItem
                    title="Web Competition"
                    period="2023"
                    dotColor="bg-rose-400"
                    isLast
                  />
                </div>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeUp}>
              <Card className="education-container">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    <FaRocket className="text-amber-400 text-lg" />
                  </div>
                  <h2 className="text-lg font-bold text-white">Education</h2>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center shrink-0">
                    <span className="text-indigo-400 text-xs font-bold">BS</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">Bachelor's in Computer Science</h3>
                    <p className="text-gray-500 text-xs mt-0.5">ACLC College of Mandaue</p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-semibold">
                      2023 – 2027
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>

          </div>
        </motion.div>

        {/* Connect */}
        <motion.div
          className="connect-container mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.a
            variants={fadeUp}
            href="mailto:christiandave120702@gmail.com"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-orange-500/5 hover:border-orange-500/20 transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:scale-110 transition-transform duration-300">
              <FaEnvelope className="text-orange-400 text-lg" />
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-0.5">Email</p>
              <span className="text-white text-sm font-medium break-all">christiandave120702@gmail.com</span>
            </div>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://github.com/ChristianAlicaba2002"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.055] hover:border-white/10 transition-all duration-300"
          >
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
              <FaGithub className="text-white text-lg" />
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-0.5">GitHub</p>
              <span className="text-white text-sm font-medium">github.com/ChristianAlicaba2002</span>
            </div>
          </motion.a>
        </motion.div>

        {/* Beyond Coding */}
        <motion.div
          className="connect-container mt-6 rounded-2xl p-6 lg:p-8 border border-white/[0.07] bg-white/[0.03]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-lg font-bold text-white mb-6">Beyond Coding</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: <FaRocket className="text-emerald-400 text-xl" />, bg: "bg-emerald-500/10 border-emerald-500/20", title: "Innovation", desc: "Always exploring new technologies and approaches" },
              { icon: <FaHeart className="text-rose-400 text-xl" />, bg: "bg-rose-500/10 border-rose-500/20", title: "Open Source", desc: "Contributing to the developer community" },
              { icon: <FaCode className="text-blue-400 text-xl" />, bg: "bg-blue-500/10 border-blue-500/20", title: "Problem Solving", desc: "Turning complex challenges into elegant solutions" },
            ].map((item) => (
              <div
                key={item.title}
                className={`group flex items-start gap-4 p-4 rounded-xl border ${item.bg} hover:brightness-125 transition-all duration-300`}
              >
                <div className="shrink-0 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
