import {
  FaGithub, FaEnvelope, FaCode, FaLaptopCode, FaRocket, FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  SiReact, SiLaravel, SiTypescript, SiNextdotjs, SiFastapi, SiExpress,
  SiExpo,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SectionLabel, Card } from "../components/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function SkillPill({ icon, label }) {
  return (
    <div className="group flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 hover:border-foreground/20">
      {icon}
      <span className="text-xs font-medium text-muted transition-colors group-hover:text-foreground">{label}</span>
    </div>
  );
}

function TimelineItem({ title, period, description, isLast = false }) {
  return (
    <div className={`relative pl-6 ${!isLast ? "pb-6" : ""}`}>
      {!isLast && <div className="absolute top-4 bottom-0 left-[7px] w-px border-l border-dashed border-border" />}
      <div className="absolute top-1 left-0 h-3.5 w-3.5 rounded-full border-2 border-background bg-foreground" />
      <h3 className="mb-0.5 text-sm font-semibold text-foreground">{title}</h3>
      <p className="mb-1 font-mono text-xs text-muted">{period}</p>
      {description && <p className="text-xs leading-relaxed text-muted">{description}</p>}
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background p-4 sm:p-6 lg:p-10">
      <div className="relative z-10 mx-auto max-w-6xl">

        <motion.div
          className="whoiam-container mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel>Who I Am</SectionLabel>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            About Me
          </h1>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
            I thrive in collaborative environments where ideas turn into impactful products. Continuously
            learning new tools and best practices to build clean, maintainable solutions that deliver long-term value.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-px w-12 bg-border" />
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <div className="space-y-6">
            <motion.div variants={fadeUp}>
              <Card>
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl border border-border p-2.5">
                    <FaHeart className="text-lg text-foreground" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Who I Am</h2>
                </div>
                <p className="mb-3 text-sm leading-relaxed text-muted">
                  I&apos;m a dedicated software developer with a passion for building web
                  applications that make a difference. With expertise in both frontend and
                  backend technologies, I enjoy creating seamless user experiences while
                  ensuring robust, scalable backend systems.
                </p>
                <p className="text-sm leading-relaxed text-muted">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                  contributing to open-source projects, or sharing knowledge with the
                  developer community.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="skills-container">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl border border-border p-2.5">
                    <FaCode className="text-lg text-foreground" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Technical Skills</h2>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillPill icon={<SiReact className="text-sm text-sky-500" />} label="React.js" />
                      <SkillPill icon={<SiTypescript className="text-sm text-blue-600" />} label="TypeScript" />
                      <SkillPill icon={<SiNextdotjs className="text-sm text-foreground" />} label="Next.js" />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillPill icon={<SiExpo className="text-sm text-foreground" />} label="React Native (Expo)" />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      <SkillPill icon={<TbBrandCSharp className="text-sm text-violet-500" />} label="ASP.NET Core" />
                      <SkillPill icon={<SiLaravel className="text-sm text-red-500" />} label="Laravel" />
                      <SkillPill icon={<SiExpress className="text-sm text-foreground" />} label="Express.js" />
                      <SkillPill icon={<SiFastapi className="text-sm text-teal-600" />} label="FastAPI" />
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">Tools &amp; Databases</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Git", "GitHub", "Docker", "Firebase", "MySQL", "PostgreSQL", "Figma", "TanStack", "Tailwind CSS", "Trello", "Jira"].map((tool) => (
                        <span
                          key={tool}
                          className="cursor-default rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted hover:border-foreground/20 hover:text-foreground"
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

          <div className="space-y-6">
            <motion.div variants={fadeUp}>
              <Card className="experience-container">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl border border-border p-2.5">
                    <FaLaptopCode className="text-lg text-foreground" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Experience</h2>
                </div>

                <div>
                  <TimelineItem
                    title="Full-Stack Developer"
                    period="2026 – Present"
                    description="Developing scalable web applications using React, Laravel, and ASP.NET Core."
                  />
                  <TimelineItem
                    title="Hacktoberfest Bootcamp"
                    period="2025"
                    description="FDA Checker Product — Overall Projects Winner 🏆"
                  />
                  <TimelineItem
                    title="Hacktoberfest Bootcamp"
                    period="2024"
                    description="ViCo Spaces — Collaborative co-working space app."
                  />
                  <TimelineItem
                    title="Frontend Developer"
                    period="2023 – 2026"
                    description="Built responsive UIs and implemented modern web development practices."
                  />
                  <TimelineItem
                    title="Backend Developer"
                    period="2022 – 2026"
                    description="Built secure APIs, managed databases, and optimized server performance."
                  />
                  <TimelineItem
                    title="Java Competition"
                    period="2023"
                  />
                  <TimelineItem
                    title="Web Competition"
                    period="2023"
                    isLast
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Card className="education-container">
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-xl border border-border p-2.5">
                    <FaRocket className="text-lg text-foreground" />
                  </div>
                  <h2 className="text-lg font-bold text-foreground">Education</h2>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-border p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background">
                    <span className="text-xs font-bold text-foreground">BS</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Bachelor&apos;s in Computer Science</h3>
                    <p className="mt-0.5 text-xs text-muted">ACLC College of Mandaue</p>
                    <span className="mt-2 inline-block rounded-full border border-border px-2 py-0.5 font-mono text-[10px] font-medium text-muted">
                      2023 – 2027
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="connect-container mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger}
        >
          <motion.a
            variants={fadeUp}
            href="mailto:christiandave120702@gmail.com"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-foreground/20"
          >
            <div className="rounded-xl border border-border p-3 transition-transform duration-300 group-hover:scale-105">
              <FaEnvelope className="text-lg text-foreground" />
            </div>
            <div>
              <p className="mb-0.5 text-xs text-muted">Email</p>
              <span className="break-all text-sm font-medium text-foreground">christiandave120702@gmail.com</span>
            </div>
          </motion.a>

          <motion.a
            variants={fadeUp}
            href="https://github.com/ChristianAlicaba2002"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 hover:border-foreground/20"
          >
            <div className="rounded-xl border border-border p-3 transition-transform duration-300 group-hover:scale-105">
              <FaGithub className="text-lg text-foreground" />
            </div>
            <div>
              <p className="mb-0.5 text-xs text-muted">GitHub</p>
              <span className="text-sm font-medium text-foreground">github.com/ChristianAlicaba2002</span>
            </div>
          </motion.a>
        </motion.div>

        <motion.div
          className="connect-container mt-6 rounded-2xl border border-border bg-card p-6 lg:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="mb-6 text-lg font-bold text-foreground">Beyond Coding</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: <FaRocket className="text-xl text-foreground" />, title: "Innovation", desc: "Always exploring new technologies and approaches" },
              { icon: <FaHeart className="text-xl text-foreground" />, title: "Open Source", desc: "Contributing to the developer community" },
              { icon: <FaCode className="text-xl text-foreground" />, title: "Problem Solving", desc: "Turning complex challenges into elegant solutions" },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-xl border border-border p-4 hover:border-foreground/20"
              >
                <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">{item.icon}</div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
