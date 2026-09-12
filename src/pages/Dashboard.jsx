import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaLaravel, FaReact, FaPython,
  FaSearch, FaPenFancy, FaCode, FaRocket, FaLayerGroup, FaBolt,
  FaHandshake, FaClipboardCheck,
} from "react-icons/fa";
import { SiTypescript, SiJavascript, SiPhp, SiFastapi, SiExpo } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { HiArrowRight } from "react-icons/hi";
import { SectionLabel } from "../components/ui";

const techStack = [
  { Icon: FaHtml5,       name: "HTML5",             color: "text-orange-500" },
  { Icon: FaCss3Alt,     name: "CSS3",              color: "text-blue-500" },
  { Icon: FaLaravel,     name: "Laravel",           color: "text-red-500" },
  { Icon: FaReact,       name: "React",             color: "text-sky-500" },
  { Icon: SiTypescript,  name: "TypeScript",        color: "text-blue-600" },
  { Icon: SiJavascript,  name: "JavaScript",        color: "text-yellow-500" },
  { Icon: FaPython,      name: "Python",            color: "text-green-600" },
  { Icon: SiPhp,         name: "PHP",               color: "text-indigo-500" },
  { Icon: SiExpo,        name: "React Native Expo", color: "text-neutral-700 dark:text-neutral-200" },
  { Icon: RiNextjsFill,  name: "Next.js",           color: "text-foreground" },
  { Icon: SiFastapi,     name: "FastAPI",           color: "text-teal-600" },
  { Icon: TbBrandCSharp, name: "C#",                color: "text-violet-500" },
];

const workflowSteps = [
  {
    step: "01", icon: FaSearch, title: "Discover",
    description: "Understand the problem, gather requirements, and define scope so we build the right thing.",
  },
  {
    step: "02", icon: FaPenFancy, title: "Design",
    description: "Plan architecture and UX — wireframes, structure, and tech choices before writing code.",
  },
  {
    step: "03", icon: FaCode, title: "Build",
    description: "Clean, maintainable code with tests and best practices. Iterate with feedback.",
  },
  {
    step: "04", icon: FaRocket, title: "Ship",
    description: "Deploy, monitor, and support. Keep things running smoothly and improve over time.",
  },
];

const focusAreas = [
  { icon: FaLayerGroup,     title: "Full-Stack",    description: "Frontend to backend — React, Laravel, ASP.NET, and APIs." },
  { icon: FaBolt,           title: "Performance",   description: "Fast, responsive UIs and optimized server-side logic." },
  { icon: FaHandshake,      title: "Collaboration", description: "Clear communication, Git workflows, and on-time delivery." },
  { icon: FaClipboardCheck, title: "Quality",       description: "Clean code, tests, and maintainable architecture." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Dashboard({ onNavigate }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="relative z-10 mx-auto max-w-6xl space-y-16">

        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mb-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Tech Stack</h2>
            <p className="mb-8 text-sm text-muted sm:text-base">Languages &amp; frameworks I work with</p>
          </motion.div>

          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
            {techStack.map((item) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -3 }}
                className="group cursor-default rounded-2xl border border-border bg-card p-4 hover:border-foreground/20"
              >
                <item.Icon className={`mx-auto mb-2 block text-2xl sm:text-3xl ${item.color}`} />
                <span className="block text-center text-[11px] font-medium text-muted transition-colors group-hover:text-foreground">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>Process</SectionLabel>
            <h2 className="mb-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">How I Work</h2>
            <p className="mb-8 text-sm text-muted sm:text-base">My development process from idea to launch</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((item, idx) => (
              <motion.div
                key={item.step}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border bg-card p-5 hover:border-foreground/20"
              >
                <span className="absolute top-4 right-4 font-mono text-xs font-medium text-muted">
                  {item.step}
                </span>
                <div className="mb-4 w-fit rounded-xl border border-border p-2.5 text-foreground transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="text-lg sm:text-xl" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted sm:text-sm">{item.description}</p>
                {idx < workflowSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-2 z-10 hidden -translate-y-1/2 lg:block">
                    <div className="flex h-4 w-4 items-center justify-center rounded-full border border-border bg-background">
                      <HiArrowRight className="text-[10px] text-muted" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <SectionLabel>Values</SectionLabel>
            <h2 className="mb-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">What I Bring</h2>
            <p className="mb-8 text-sm text-muted sm:text-base">Core values I bring to every project</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border bg-card p-5 hover:border-foreground/20"
              >
                <div className="mb-3 w-fit rounded-xl border border-border p-2.5 text-foreground transition-transform duration-300 group-hover:scale-105">
                  <item.icon className="text-lg sm:text-xl" />
                </div>
                <h3 className="mb-1.5 text-sm font-semibold text-foreground">{item.title}</h3>
                <p className="text-xs leading-relaxed text-muted sm:text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="dashbord-container"
          initial="hidden" whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 text-center sm:p-12"
          >
            <p className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted">Ready to build?</p>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Let&apos;s Work Together</h2>
            <p className="mx-auto mb-8 max-w-xl text-sm text-muted sm:text-base">
              Have a project in mind or want to chat? I&apos;d love to hear from you.
            </p>
            <motion.button
              type="button"
              onClick={() => onNavigate?.("contactme")}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg hover:opacity-90"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in touch
              <HiArrowRight />
            </motion.button>
          </motion.div>
        </motion.section>

      </div>
    </div>
  );
}
