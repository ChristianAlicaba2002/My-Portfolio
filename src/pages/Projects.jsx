import React from "react";
import taskMaster from "../assets/images/TaskMaster.webp";
import Technical from "../assets/images/Technical.webp";
import CrustyBytes from "../assets/images/CrustyBytes.webp";
import QuanTum from "../assets/images/QuantumOrder.webp";
import Waste from "../assets/images/Waste.webp";
import Veteririan from "../assets/images/Veteririan.webp";
import Accounting from "../assets/images/Accounting.webp";

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
      title: "Techinical Assets Management",
      description:
        "Technical Assets Management refers to the systematic approach of overseeing and managing the lifecycle of an organization's technical assets. This includes hardware, software, networks, and other IT-related resources that are essential for the company's day-to-day operations. The main goals of technical asset management are to ensure that these assets are used effectively, are properly maintained, and provide value throughout their entire lifespan.",
      image: Technical,
      technologies: ["React.js", "TypeScript", "SQL", "ASP.NET"],
      github: "https://github.com/Neil-urk12/ViCoSpaces",
      featured: true,
    },
  ];

  return (
    <div className="h-screen bg-gradient-to-br from-gray-800 to-black overflow-y-scroll lg:w-screen p-4 lg:p-6">
      <div className="max-w-7xl lg:ml-36 sm:mx-auto">
        <div className="projects-container text-center mb-8 lg:mb-12">
          <h1 className="text-2xl lg:text-4xl font-bold text-gray-200 mb-3 lg:mb-4">
            My Projects
          </h1>
          <p className="text-sm lg:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            A collection of projects showcasing my skills in web development,
            from full-stack applications to interactive user interfaces.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="feature-container mb-8 lg:mb-12">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-4 lg:mb-6 px-4 lg:px-0">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 px-4 lg:px-0">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-40 lg:h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 lg:top-4 right-3 lg:right-4">
                      <span className="bg-blue-500 text-white px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm lg:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium"
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
                        className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm lg:text-base"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="allProjects-container">
          <h2 className="text-xl lg:text-2xl font-semibold text-gray-200 mb-4 lg:mb-6 px-4 lg:px-0">
            All Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 px-4 lg:px-0">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-32 lg:h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 lg:p-4">
                  <h3 className="text-base lg:text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs lg:text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-800 text-white text-center py-2 px-3 rounded text-xs lg:text-sm hover:bg-gray-700 transition-colors duration-200"
                    >
                      Code
                    </a>
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
