import taskMaster from "../assets/images/TaskMaster.webp";
import Technical from "../assets/images/aclc-technical.webp";
import poke from "../assets/images/poke.webp";
import CrustyBytes from "../assets/images/CrustyBytes.webp";
import QuanTum from "../assets/images/QuantumOrder.webp";
import Waste from "../assets/images/Waste.webp";
import Veteririan from "../assets/images/Veteririan.webp";
import Accounting from "../assets/images/Accounting.webp";
import Basketball from "../assets/images/Basketball_Tournament.webp";
import { FaGithub, FaRocket } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quantum Ordering",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image: QuanTum,
      technologies: ["Laravel", "Mysql"],
      github: "https://github.com/ChristianAlicaba2002/Quantum_Order",
      featured: true,
    },
    {
      id: 2,
      title: "Task Master Management",
      description:
        "Task Master: To-Do List Take control of your day with Task Master, the ultimate to-do list app designed for simplicity, focus, and productivity.",
      image: taskMaster,
      technologies: [
        "React.js",
        "Firebase",
        "Tailwind CSS",
        "Hono.js",
        "PostgreSql",
      ],
      github: "https://github.com/ChristianAlicaba2002/Task-Master",
      featured: true,
    },
    {
      id: 3,
      title: "CrustyBytes",
      description:
        "CrustyBytes is a full-featured web-based pizza ordering system designed to streamline the digital operations of a pizza restaurant. It allows customers to browse a delicious menu of pizzas, drinks, and sides, customize their orders, and place them online with ease.",
      image: CrustyBytes,
      technologies: ["React.js", "TypeScript", "Firebase", "MySQL"],
      github: "https://github.com/ChristianAlicaba2002/CrustyBytes",
      featured: false,
    },
    {
      id: 4,
      title: "QuickBuy",
      description:
        "QuickBuy Application is a modern and user-friendly ordering system designed for fast, efficient, and seamless transactions. It allows users to browse products, manage orders, and process purchases with ease.",
      image:
        "https://d6xcmfyh68wv8.cloudfront.net/learn-content/uploads/2024/09/Quick-Buy-banner-e-commerce-trends-1024x576.jpg",
      technologies: ["React.js", "TypeScript", "Laravel", "MySQL"],
      github: "https://github.com/ChristianAlicaba2002/QuickBuy",
      featured: false,
    },
    {
      id: 5,
      title: "Veterinanian System",
      description:
        "The Veterinarian Management System is a comprehensive web-based platform designed to help veterinary clinics streamline their daily operations. This system enables vets, staff, and pet owners to manage appointments, medical records, and pet information efficiently. With a clean interface and role-based access",
      image: Veteririan,
      technologies: ["Next.js", "TypeScript", "MySQL"],
      github: "#",
      featured: false,
    },
    {
      id: 6,
      title: "Waste Segregation",
      description:
        "A Waste Segregation System is a structured method of managing waste by separating it into different categories to ensure proper disposal, recycling, and treatment. Its main purpose is to reduce environmental impact, improve recycling efficiency, and promote public health. The system typically classifies waste into biodegradable, recyclable, non-recyclable, and hazardous categories.",
      image: Waste,
      technologies: ["Laravel", "MySQL"],
      github: "https://github.com/ChristianAlicaba2002/Waste_Segregation",
      featured: false,
    },
    {
      id: 7,
      title: "Accounting System",
      description:
        "An Accounting System is a structured process for recording, managing, and analyzing financial transactions of a business or organization. It provides a systematic way to track income, expenses, assets, liabilities, and equity, ensuring that financial data is accurate and organized.",
      image: Accounting,
      technologies: ["Laravel", "MySQL"],
      github: "https://github.com/ChristianAlicaba2002/Accounting_System",
      featured: false,
    },
    {
      id: 8,
      title: "ViCo Spaces",
      description:
        "ViCoSpaces, a new and user-friendly collaborative co-working space application designed to enhance productivity and foster seamless collaboration among individuals. Built with the Vue 3 Composition API and Firebase, ViCo provides a robust platform for students, individuals and teams to work together in real-time and visualize ideas.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      technologies: ["Vue.js", "Firebase", "Pinia", "Fabric.js"],
      github: "https://github.com/Neil-urk12/ViCoSpaces",
      featured: true,
    },
    {
      id: 9,
      title: "PokeVault",
      description:
        "PokeVault is a fun and interactive web app that lets users explore the Pokémon world by fetching real-time data from the Pokémon API. It serves as a digital vault where users can search, view, and collect information about their favorite Pokémon. With features like detailed Pokémon stats, abilities, types, and evolutions",
      image: poke,
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/ChristianAlicaba2002/PokeVault",
      featured: true,
      live: "https://pokevault2024.netlify.app"
    },
    {
      id: 10,
      title: "Aclc Mandaue Technical System",
      description:
        "A simple and efficient web application designed to help schools or organizations manage their technical equipment — such as HDMI cables, projectors, laptops, microphones, and other storage items.This system allows users to easily add, track, and manage borrowed and returned assets for various events or classroom needs",
      image: Technical,
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "C# ASP.NET"],
      github: "https://github.com/Technical-Assets-Management-CS31A",
      featured: true,
      live: "https://aclc-mandaue-technical-system.pages.dev/",
    },
    {
      id: 11,
      title: "Basketball Tournament",
      description: "Basketball Tournament Management SystemThis project is a Basketball Tournament Management System designed to organize and manage tournaments with multiple categories, teams, and bracket-based matchups. It provides a clear structure for tracking team progression from early rounds to the finals.",
      image: Basketball,
      technologies: ["React.js","TanStack Query","Tailwindcss","C# ASP.NET","Microsoft SQL Server"],
      github: "https://github.com/ChristianAlicaba2002/Basketball_Tournament-Frontend",
      featured: true,
    }
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-y-scroll lg:w-screen p-4 lg:p-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl lg:ml-36 sm:mx-auto relative z-10">
        <div className="projects-container text-center mb-8 lg:mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            My Projects
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
            A collection of projects showcasing my skills in web development,
            from full-stack applications to interactive user interfaces.
          </p>
          <div className="flex justify-center mt-6">
            <div className="w-16 h-1 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="feature-container mb-8 lg:mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 px-4 lg:px-0 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-white to-gray-300 rounded-full"></div>
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4 lg:px-0">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={project.id}
                  className="group backdrop-blur-sm bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-500 hover:scale-102 hover:shadow-2xl hover:shadow-white/25"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-48 lg:h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-white to-gray-300 text-black px-3 py-1 rounded-full text-xs lg:text-sm font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white text-xl lg:text-2xl font-bold mb-2 drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <p className="text-gray-300 mb-6 text-sm lg:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="backdrop-blur-sm bg-white/10 text-white px-3 py-1 rounded-full text-xs lg:text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-white to-gray-300 text-black text-center py-3 px-4 rounded-xl hover:from-gray-200 hover:to-gray-400 transition-all duration-300 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl group/btn"
                      >
                        <FaGithub className="inline text-lg mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                        View Code
                      </a>
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-white to-gray-300 text-black text-center py-3 px-4 rounded-xl hover:from-gray-200 hover:to-gray-400 transition-all duration-300 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl group/btn">
                          <FaRocket className="inline text-lg mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="allProjects-container">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8 px-4 lg:px-0 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
            All Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 px-4 lg:px-0">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="group backdrop-blur-sm bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-xl hover:bg-white/15 transition-all duration-500 hover:scale-102 hover:shadow-2xl hover:shadow-gray-500/25"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative h-40 lg:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gradient-to-r from-gray-500 to-gray-700 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 lg:p-6">
                  <h3 className="text-base lg:text-lg font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs lg:text-sm mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="backdrop-blur-sm bg-white/10 text-white px-2 py-1 rounded-full text-xs font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="backdrop-blur-sm bg-white/10 text-white px-2 py-1 rounded-full text-xs font-medium border border-white/20">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-gray-500 to-gray-700 text-white text-center py-2 px-3 rounded-xl text-xs lg:text-sm font-semibold hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                    >
                      <FaGithub className="inline text-sm mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-gray-500 to-gray-700 text-white text-center py-2 px-3 rounded-xl text-xs lg:text-sm font-semibold hover:from-gray-600 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                      >
                        <FaRocket className="inline text-sm mr-1 group-hover/btn:scale-110 transition-transform duration-300" />
                        Demo
                      </a>
                    ) : null}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
