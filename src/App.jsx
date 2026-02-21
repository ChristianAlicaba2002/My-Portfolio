import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaHeart } from "react-icons/fa";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

const SECTION_IDS = ["home", "dashboard", "aboutme", "projects", "contactme"];

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
};

const stagger = {
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
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
          if (SECTION_IDS.includes(id)) {
            setActiveSection(id);
            break;
          }
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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-screen min-h-screen bg-black">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main
        ref={mainRef}
        className="overflow-y-auto overflow-x-hidden h-screen pt-16 lg:pt-20 scroll-pt-16 lg:scroll-pt-20"
      >
        <section
          id="home"
          className="w-full min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-4 px-6 sm:px-8 relative overflow-hidden scroll-mt-16 lg:scroll-mt-20 bg-black"
        >
          {/* Bold vertical accent */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 sm:w-2 bg-white"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ transformOrigin: "top" }}
            aria-hidden
          />

          <motion.div
            className="welcome-container text-center sm:text-left max-w-4xl mx-auto relative z-10 pl-6 sm:pl-10"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div className="space-y-6" variants={stagger}>
              <motion.div
                className="flex justify-center sm:justify-start mb-6"
                variants={fadeInUp}
              >
                <motion.div
                  className="relative inline-flex"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="bg-white/10 p-2.5 rounded-2xl border border-white/20">
                    <FaCode className="text-3xl text-blue-400" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.p
                className="text-sm font-medium uppercase tracking-[0.2em] text-white/70"
                variants={fadeInUp}
              >
                Software Developer
              </motion.p>

              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]"
                style={{ fontFamily: "'Playfair Display', serif" }}
                variants={fadeInUp}
              >
                Christian
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                Crafting digital experiences with passion and precision.{" "}
                <span className="text-white font-medium">
                  Building the future, one line of code at a time.
                </span>
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 mb-8"
              variants={stagger}
            >
              {[
                { Icon: FaCode, color: "text-blue-400", title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
                { Icon: FaRocket, color: "text-emerald-400", title: "Innovation", desc: "Embracing cutting-edge technologies" },
                { Icon: FaHeart, color: "text-rose-400", title: "Passion", desc: "Creating with love and dedication" },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={fadeInUp}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-default"
                >
                  <card.Icon className={`text-2xl sm:text-3xl ${card.color} mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-base font-semibold text-white mb-1.5">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start items-center"
              variants={fadeInUp}
            >
              <motion.button
                type="button"
                onClick={() => scrollToSection("dashboard")}
                className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 text-white font-semibold text-base rounded-xl hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore My Work
              </motion.button>
              <motion.button
                type="button"
                onClick={() => scrollToSection("contactme")}
                className="w-full sm:w-auto px-7 py-3.5 bg-transparent border-2 border-emerald-400/80 text-emerald-400 font-semibold text-base rounded-xl hover:border-emerald-400 hover:bg-emerald-400/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="dashboard"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20 bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Dashboard onNavigate={scrollToSection} />
        </motion.section>

        <motion.section
          id="aboutme"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20 bg-zinc-950"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <AboutMe />
        </motion.section>

        <motion.section
          id="projects"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20 bg-black"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="contactme"
          className="min-h-screen scroll-mt-16 lg:scroll-mt-20 bg-zinc-950"
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
