import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaHeart } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

const SECTION_IDS = ["home", "dashboard", "aboutme", "projects", "contactme"];

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function App() {
  const mainRef = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (SECTION_IDS.includes(id)) { setActiveSection(id); break; }
        }
      },
      { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-screen bg-background font-sans text-foreground">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main
        ref={mainRef}
        className="h-screen overflow-x-hidden overflow-y-auto scroll-pt-16 pt-16 lg:scroll-pt-20 lg:pt-20"
      >
        <section
          id="home"
          className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col items-center justify-center overflow-hidden scroll-mt-16 bg-background px-6 py-12 sm:px-10 lg:min-h-[calc(100vh-5rem)] lg:scroll-mt-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
          </div>

          <motion.div
            className="welcome-container relative z-10 mx-auto max-w-4xl text-center"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="mb-5 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-8xl"
            >
              Hi, I&apos;m Christian
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mb-5 font-mono text-xs font-medium uppercase tracking-[0.28em] text-muted"
            >
              Full-Stack Software Developer
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
            >
              Passionate about building beautiful, performant web applications
              that turn complex ideas into elegant digital experiences.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <motion.button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition-opacity hover:opacity-90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <HiArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </motion.button>

              <motion.a
                href="/"
                download="/Christian Dave L Alicaba ( Resume ).pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-semibold text-foreground hover:border-foreground/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                <HiDownload className="text-base" />
                Download CV
              </motion.a>

              <motion.button
                type="button"
                onClick={() => scrollToSection("contactme")}
                className="inline-flex items-center gap-2 rounded-full border border-transparent px-7 py-3.5 text-sm font-semibold text-muted hover:text-foreground"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { Icon: FaCode, title: "Clean Code", desc: "Maintainable, scalable solutions" },
                { Icon: FaRocket, title: "Innovation", desc: "Embracing cutting-edge technologies" },
                { Icon: FaHeart, title: "Passion", desc: "Creating with love and dedication" },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="group cursor-default rounded-2xl border border-border bg-card p-5 text-left hover:border-foreground/20"
                >
                  <card.Icon className="mb-3 text-xl text-foreground transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-1 text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="text-xs text-muted">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="dashboard"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Dashboard onNavigate={scrollToSection} />
        </motion.section>

        <motion.section
          id="aboutme"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <AboutMe />
        </motion.section>

        <motion.section
          id="projects"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="contactme"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <ContactMe />
        </motion.section>
      </main>
    </div>
  );
}

export default App;
