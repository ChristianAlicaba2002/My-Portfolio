import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin, Send, CheckCircle, XCircle, Loader } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";
import { SectionLabel } from "../components/ui";

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ID;

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3.5 text-foreground placeholder:text-muted/70 outline-none transition-colors hover:border-foreground/20 focus:border-foreground disabled:opacity-60";

export default function ContactMe() {
  const [state, handleSubmit] = useForm(FORMSPREE);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background p-4 lg:p-8">
      <div className="contact-container relative z-10 mx-auto max-w-6xl">
        <motion.div
          className="mb-10 text-center lg:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionLabel>Contact</SectionLabel>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-muted lg:text-lg">
            I&apos;m always open to discussing new projects, ideas, or opportunities
            to collaborate.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h2 className="mb-3 text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              Where Can You Find Me
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-muted lg:text-base">
              Feel free to reach out through any of these channels. I&apos;ll get
              back to you as soon as possible.
            </p>

            <div className="space-y-2">
              {[
                { Icon: Mail, label: "christiandave120702@gmail.com" },
                { Icon: Phone, label: "+63 956 537 6522" },
                {
                  Icon: Github,
                  label: "github.com/ChristianAlicaba2002",
                  href: "https://github.com/ChristianAlicaba2002",
                },
                { Icon: MapPin, label: "Philippines" },
              ].map((item) => {
                const content = (
                  <>
                    <div className="rounded-xl border border-border p-3">
                      <item.Icon size={18} className="text-foreground" />
                    </div>
                    <span className="break-all text-sm font-medium text-foreground">{item.label}</span>
                  </>
                );
                const className =
                  "flex items-center gap-4 rounded-xl p-3 text-muted transition-colors hover:bg-black/[0.03] hover:text-foreground dark:hover:bg-white/[0.04]";
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label} className={className}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
            <h2 className="mb-6 text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              Send a Message
            </h2>

            {state.succeeded && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-emerald-700 dark:text-emerald-400"
              >
                <CheckCircle size={18} className="shrink-0" />
                <span className="text-sm font-medium">Message sent! I&apos;ll get back to you soon.</span>
              </motion.div>
            )}
            {state.errors && state.errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-600 dark:text-red-400"
              >
                <XCircle size={18} className="shrink-0" />
                <span className="text-sm font-medium">Failed to send. Please try again or email me directly.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" method="post">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className={inputClass}
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className={inputClass}
                  required
                  disabled={state.submitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className={`${inputClass} resize-none`}
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-xs text-red-500" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-accent py-3.5 font-semibold text-accent-fg hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
