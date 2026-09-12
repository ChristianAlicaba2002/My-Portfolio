import { motion } from "framer-motion";
import taskMaster from "../assets/images/TaskMaster.webp";
import Technical from "../assets/images/aclc_mandaue.webp";
import poke from "../assets/images/pokevault.webp";
import CrustyBytes from "../assets/images/CrustyBytes.webp";
import QuanTum from "../assets/images/QuantumOrder.webp";
import Waste from "../assets/images/Waste.webp";
import Veteririan from "../assets/images/Veteririan.webp";
import Accounting from "../assets/images/Accounting.webp";
import Basketball from "../assets/images/Basketball_Tournament.webp";
import { FaGithub, FaRocket } from "react-icons/fa";
import { SectionLabel } from "../components/ui";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quantum Ordering",
      description:
        "A full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      image: QuanTum,
      technologies: ["Laravel", "Mysql", "Sanctum"],
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
      github: "https://github.com/ChristianAlicaba2002/Veterinarian_System_FrontEnd",
      featured: false,
    },
    {
      id: 6,
      title: "Waste Segregation",
      description:
        "A Waste Segregation System is a structured method of managing waste by separating it into different categories to ensure proper disposal, recycling, and treatment. Its main purpose is to reduce environmental impact, improve recycling efficiency, and promote public health. The system typically classifies waste into biodegradable, recyclable, non-recyclable, and hazardous categories.",
      image: Waste,
      technologies: ["Laravel", "MySQL", "Sanctum"],
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
      technologies: ["React.js", "TanStack", "TypeScript", "Tailwind CSS", "C# ASP.NET"],
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
    <div className="relative min-h-screen w-full bg-background p-4 lg:p-6">
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="projects-container mb-10 text-center lg:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SectionLabel>Work</SectionLabel>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-5xl">
            My Projects
          </h1>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-muted lg:text-lg">
            A collection of projects showcasing my skills in web development,
            from full-stack applications to interactive user interfaces.
          </p>
        </motion.div>

        <div className="feature-container mb-12 lg:mb-16">
          <h2 className="mb-6 flex items-center gap-3 px-4 text-xl font-bold tracking-tight text-foreground lg:mb-8 lg:px-0 lg:text-2xl">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 px-4 lg:grid-cols-2 lg:gap-8 lg:px-0">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                  className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-foreground/20"
                >
                  <div className="relative h-48 overflow-hidden lg:h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 rounded-full border border-border bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                      Featured
                    </span>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-muted lg:text-base">
                      {project.description}
                    </p>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
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
                        className="flex-1 rounded-full bg-accent py-3 text-center text-sm font-semibold text-accent-fg hover:opacity-90"
                      >
                        <FaGithub className="mr-2 inline text-base" />
                        View Code
                      </a>
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 rounded-full border border-border py-3 text-center text-sm font-semibold text-foreground hover:border-foreground/30"
                        >
                          <FaRocket className="mr-2 inline text-base" />
                          Live Demo
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        <div className="allProjects-container">
          <h2 className="mb-6 flex items-center gap-3 px-4 text-xl font-bold tracking-tight text-foreground lg:mb-8 lg:px-0 lg:text-2xl">
            All Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-0 xl:grid-cols-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03, duration: 0.35 }}
                className="group overflow-hidden rounded-2xl border border-border bg-card hover:border-foreground/20"
              >
                <div className="relative h-40 overflow-hidden lg:h-44">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.featured && (
                    <span className="absolute top-3 right-3 rounded-full border border-border bg-background/90 px-2 py-0.5 text-[10px] font-medium text-foreground backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                </div>
                <div className="p-4 lg:p-5">
                  <h3 className="mb-2 text-base font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-xs text-muted lg:text-sm">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full border border-border px-2 py-0.5 text-[11px] font-medium text-muted">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-full border border-border py-2 text-center text-xs font-semibold text-foreground hover:border-foreground/30"
                    >
                      <FaGithub className="mr-1 inline text-sm" />
                      Code
                    </a>
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 rounded-full bg-accent py-2 text-center text-xs font-semibold text-accent-fg hover:opacity-90"
                      >
                        <FaRocket className="mr-1 inline text-sm" />
                        Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
