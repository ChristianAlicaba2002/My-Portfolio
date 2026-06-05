import { motion } from "framer-motion";
import { Mail, Phone, Github, MapPin, Send, CheckCircle, XCircle, Loader } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const FORMSPREE = import.meta.env.VITE_FORMSPREE_ID;

export default function ContactMe() {
  const [state, handleSubmit] = useForm(FORMSPREE);

  return (
    <div className="min-h-screen bg-[#020817] p-4 lg:p-8 w-full relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-700/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-blue-600/5 rounded-full blur-[80px]" />
      </div>

      <div className="contact-container max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 lg:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            I'm always open to discussing new projects, ideas, or opportunities
            to collaborate.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Left: Info */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-white to-gray-300 rounded-full"></div>
              Where Can You Find Me
            </h2>
            <p className="text-gray-300 mb-8 text-sm lg:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
              Feel free to reach out through any of these channels. I'll get
              back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 group/contact hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10">
                <div className="p-3 bg-gradient-to-r from-white to-gray-300 rounded-xl group-hover/contact:scale-110 transition-transform duration-300">
                  <Mail size={20} className="text-orange-500" />
                </div>
                <span className="text-sm lg:text-base break-all font-medium">
                  christiandave120702@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group/contact hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10">
                <div className="p-3 bg-gradient-to-r from-gray-400 to-gray-600 rounded-xl group-hover/contact:scale-110 transition-transform duration-300">
                  <Phone size={20} className="text-sky-500" />
                </div>
                <span className="text-sm lg:text-base font-medium">+63 956 537 6522</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group/contact hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10">
                <div className="p-3 bg-gradient-to-r from-gray-500 to-gray-700 rounded-xl group-hover/contact:scale-110 transition-transform duration-300">
                  <Github size={20} className="text-white" />
                </div>
                <a
                  href="https://github.com/ChristianAlicaba2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm lg:text-base break-all font-medium"
                >
                  github.com/ChristianAlicaba2002
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-300 group/contact hover:text-white transition-all duration-300 p-3 rounded-xl hover:bg-white/10">
                <div className="p-3 bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl group-hover/contact:scale-110 transition-transform duration-300">
                  <MapPin size={20} className="text-green-500" />
                </div>
                <span className="text-sm lg:text-base font-medium">Philippines</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 lg:p-8 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 group">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
              Send a Message
            </h2>

            {/* Status banners */}
            {state.succeeded && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-green-500/15 border border-green-500/30 text-green-400"
              >
                <CheckCircle size={18} className="shrink-0" />
                <span className="text-sm font-medium">Message sent! I'll get back to you soon.</span>
              </motion.div>
            )}
            {state.errors && state.errors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400"
              >
                <XCircle size={18} className="shrink-0" />
                <span className="text-sm font-medium">Failed to send. Please try again or email me directly.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" method="post">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3.5 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 hover:bg-white/15"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3.5 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 hover:bg-white/15"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3.5 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 hover:bg-white/15"
                  required
                  disabled={state.submitting}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-2 group-hover:text-white transition-colors duration-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3.5 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 transition-all duration-300 hover:bg-white/15 resize-none"
                  required
                  disabled={state.submitting}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-700 text-white disabled:opacity-60 disabled:cursor-not-allowed font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/25"
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
