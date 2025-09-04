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
    <div className="h-full bg-gray-800 p-4 lg:w-screen lg:p-8 sm:w-full">
      <div className="contact-container max-w-6xl lg:ml-36 sm:mx-auto">
        <div className="text-center mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto px-4">
            I'm always open to discussing new projects, ideas, or opportunities
            to collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Info */}
          <div className="bg-gray-900 rounded-xl p-6 lg:p-8 shadow-lg">
            <h2 className="text-xl lg:text-3xl font-bold mb-4 text-white">
              Where Can You Find Me
            </h2>
            <p className="text-gray-400 mb-6 text-sm lg:text-base">
              Feel free to reach out through any of these channels. I'll get
              back to you as soon as possible.
            </p>

            <div className="space-y-4 lg:space-y-5">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-blue-400" />
                <span className="text-sm lg:text-base break-all">
                  christiandave120702@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-green-400" />
                <span className="text-sm lg:text-base">+63 956 537 6522</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Github size={20} className="text-gray-400" />
                <a
                  href="https://github.com/ChristianAlicaba2002"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-sm lg:text-base break-all"
                >
                  github.com/ChristianAlicaba2002
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-red-400" />
                <span className="text-sm lg:text-base">Philippines</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-gray-900 rounded-xl p-6 lg:p-8 shadow-lg">
            <h2 className="text-xl lg:text-3xl font-bold mb-4 text-white">
              Contact Me
            </h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-4 lg:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-200 to-gray-600 hover:from-blue-300 hover:to-gray-700 text-white font-semibold py-3 rounded-lg transition duration-300 transform hover:scale-102"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
