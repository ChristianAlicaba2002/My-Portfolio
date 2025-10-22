import { Mail, Phone, Github, MapPin } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_q78pj1h",
        "template_j2yw4y9",
        form.current,
        "TRDXb59UYZlFsDkVG"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="h-full bg-gradient-to-br from-black via-gray-900 to-black p-4 lg:w-screen lg:p-8 sm:w-full relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="contact-container max-w-6xl lg:ml-36 sm:mx-auto relative z-10">
        <div className="text-center mb-8 lg:mb-12">
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
              Contact Me
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-300 mb-3 group-hover:text-white transition-colors duration-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-white/15"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-300 mb-3 group-hover:text-white transition-colors duration-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-white/15"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-300 mb-3 group-hover:text-white transition-colors duration-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-4 backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:bg-white/15 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-white to-gray-300 hover:from-gray-200 hover:to-gray-400 text-black font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 group/btn"
              >
                <span className="group-hover/btn:scale-105 transition-transform duration-300 inline-block">
                  Send Message
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
