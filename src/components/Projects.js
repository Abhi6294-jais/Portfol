import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
 FaHome,
  FaServer,
} from "react-icons/fa";
import { GiChefToque } from 'react-icons/gi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RealEstate",
      description:
        " Designed and developed a fully responsive real estate website showcasing premium properties with smooth UI and engaging layout.",
      technologies: ["HTML","CSS", "React"],
      icon: <FaHome size={40} />,
      code: "https://github.com/Abhi6294-jais/RealEstate",
      demo: "https://github.com/Abhi6294-jais/RealEstate",
    },
    {
      id: 2,
      title: "Mern App",
      description:
        "Built a responsive web application with full user authentication including Signup, Login, and Logout functionality.Implemented secure password handling using bcrypt.js for encryption and JWT for session management",
      technologies: ["MERN Stack", "MongoDB", "JWT Auth"],
      icon: <FaServer size={40} />,
      code: "https://github.com/Abhi6294-jais/deploy-app-1",
      demo: "https://deploy-app-1-ui.vercel.app",
    },
    {
      id: 3,
      title: "Chefkart Webapp",
      description:
        "Recreated the ChefKart service matching platform using a client-server architecture for dynamic chef listings.  Built React front-end with responsive components for homepage, service highlights, gallery, how-it-works flow, booking & contact sections.",
      technologies: ["HTML",'Tailwind Css','React'],
      icon: <GiChefToque size={40} />,
      code: "https://github.com/Abhi6294-jais/Chefkart",
      demo: "https://chefkart-seven.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#f9f9ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
          My Projects
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const bgColor =
              index === 0
                ? "from-indigo-600"
                : index === 1
                ? "from-purple-600"
                : "from-blue-600";

            return (
              <div
                key={project.id}
                className={`
                  group relative bg-white rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden
                `}
              >
                <div
                  className={`h-48 flex items-center justify-center bg-gradient-to-br ${bgColor} to-indigo-400 relative`}
                >
                  {/* Glow Effect */}
                  <div className="absolute w-40 h-40 bg-white rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition duration-300" />
                  <div className="relative text-white">{project.icon}</div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4 text-sm">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-600 hover:text-indigo-800 transition"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;