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
    <section
      id="contact"
      className="w-full flex items-center justify-center bg-black px-4 py-20"
    >
      <div className="absolute w-full ml-[90%] -mt-[55%] max-w-5xl grid md:grid-cols-2 gap-10 bg-[#111111] border border-gray-800 shadow-xl rounded-2xl p-8 md:p-12 text-white">
        {/* Left: Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Where Can You Find Me</h2>
          <p className="text-gray-400 mb-6">
            I'm always open to discussing new projects, ideas, or opportunities
            to collaborate.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail size={20} />
              <span>christiandave120702@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone size={20} />
              <span>+63 956 537 6522</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Github size={20} />
              <a
                href="https://github.com/ChristianAlicaba2002"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/ChristianAlicaba2002
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin size={20} />
              <span>Philippines</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Your message..."
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
