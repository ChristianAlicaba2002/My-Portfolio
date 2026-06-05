import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaHeart } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";
import Badges from "./components/Badges";

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
    <div className="w-screen min-h-screen bg-[#020817]">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main
        ref={mainRef}
        className="overflow-y-auto overflow-x-hidden h-screen pt-16 lg:pt-20 scroll-pt-16 lg:scroll-pt-20"
      >
        {/* ── HOME ── */}
        <section
          id="home"
          className="w-full min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-12 px-6 sm:px-10 relative overflow-hidden scroll-mt-16 lg:scroll-mt-20 bg-[#020817]"
        >
          {/* Ambient background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-400/15 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          </div>

          <motion.div
            className="welcome-container text-center max-w-4xl mx-auto relative z-10"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/20 border border-blue-400/40 text-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-6"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent">
                Christian
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300/70 mb-5"
            >
              Full-Stack Software Developer
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Passionate about building beautiful, performant web applications
              that turn complex ideas into elegant digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16"
            >
              <motion.button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-blue-500/40 hover:shadow-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-950"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
                <HiArrowRight className="group-hover:translate-x-0.5 transition-transform" />
              </motion.button>

              {/* Download CV */}
              <motion.a
                href="/"
                download="/Christian_Dave_Alicaba_( Resume ).pdf"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 font-semibold text-sm rounded-xl overflow-hidden border border-blue-400/50 text-blue-200 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-[#020817]"
                style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(37,99,235,0.08) 100%)" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Shimmer layer */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
                <HiDownload className="text-base group-hover:animate-bounce" />
                Download CV
              </motion.a>

              <motion.button
                type="button"
                onClick={() => scrollToSection("contactme")}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-800/50 border border-blue-500/40 hover:bg-blue-700/60 hover:border-blue-400/60 text-blue-100 font-semibold text-sm rounded-xl transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Trait cards */}
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { Icon: FaCode,   color: "text-blue-300", bg: "bg-blue-800/40 border-blue-600/40", title: "Clean Code",  desc: "Maintainable, scalable solutions" },
                { Icon: FaRocket, color: "text-blue-200", bg: "bg-blue-700/40 border-blue-500/40", title: "Innovation",  desc: "Embracing cutting-edge technologies" },
                { Icon: FaHeart,  color: "text-blue-300", bg: "bg-blue-800/40 border-blue-600/40", title: "Passion",     desc: "Creating with love and dedication" },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`${card.bg} border rounded-2xl p-5 hover:brightness-125 transition-all duration-300 group cursor-default text-left`}
                >
                  <card.Icon className={`text-2xl ${card.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-sm font-semibold text-white mb-1">{card.title}</h3>
                  <p className="text-blue-300/60 text-xs">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            {/* <Badges /> */}
          </motion.div>
        </section>

        {/* ── DASHBOARD ── */}
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

        {/* ── ABOUT ── */}
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

        {/* ── PROJECTS ── */}
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

        {/* ── CONTACT ── */}
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
