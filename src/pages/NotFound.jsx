import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "../components/ThemeToggle";

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function NotFound() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.title = "404 — Christian Alicaba";
    return () => {
      document.title = "Christian Alicaba";
    };
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      setOffset({
        x: (e.clientX / window.innerWidth - 0.5) * 16,
        y: (e.clientY / window.innerHeight - 0.5) * 16,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_78%)]" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-8">
        <Link
          to="/"
          className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted hover:text-foreground"
        >
          Christian
        </Link>
        <ThemeToggle />
      </header>

      <main className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 pb-16">
        <motion.div
          className="relative mb-8 select-none"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div
            className="relative will-change-transform transition-transform duration-200 ease-out"
            style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
          >
            <span
              aria-hidden
              className="absolute inset-0 translate-x-1.5 -translate-y-1 font-sans text-[7.5rem] font-extrabold leading-none tracking-tighter text-foreground/10 sm:text-[10rem] lg:text-[12rem]"
            >
              404
            </span>
            <h1 className="relative font-sans text-[7.5rem] font-extrabold leading-none tracking-tighter text-foreground sm:text-[10rem] lg:text-[12rem]">
              4
              <span className="relative inline-block">
                0
                <span className="absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground">
                  <span className="absolute inset-0 animate-ping rounded-full bg-foreground/50" />
                </span>
              </span>
              4
            </h1>
          </div>
        </motion.div>

        <motion.span
          custom={1}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Page not found
        </motion.span>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="visible"
          className="mb-8 max-w-md text-center text-base leading-relaxed text-muted sm:text-lg"
        >
          This route doesn&apos;t exist. The page may have moved, or the URL is off by a character.
        </motion.p>

        <motion.div custom={3} variants={fade} initial="hidden" animate="visible">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg hover:opacity-90"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            Go back to continue
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
