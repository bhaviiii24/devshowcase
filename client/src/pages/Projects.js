import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "Virtual Couture",
    description:
      "An immersive virtual fashion experience built using MERN stack and Unreal Engine 5. Features include a virtual runway, interactive outfits, and shopping integration.",
    technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "AWS"],
    repo: "https://github.com/Bhavika42/fashion-show-prototype"
  },
  {
    title: "VirtualR",
    description:
      "A sleek landing page for a virtual reality software platform. Built with interactive design principles and minimal UI using modern web technologies.",
    technologies: ["JavaScript", "ReactJS", "Tailwind CSS"],
    repo: "https://github.com/Bhavika42/Virtual-Reality"
  },
  {
    title: "Task Manager",
    description:
      "A productivity app to manage tasks with full CRUD functionality. It uses async programming with MongoDB Atlas integration.",
    technologies: ["NodeJS", "ExpressJS", "MongoDB Atlas"],
    repo: "" // Add the repo when it's ready
  },
  {
    title: "CPU Scheduler",
    description:
      "Simulator for CPU scheduling algorithms like FCFS, Round Robin, SPN, and SRT. Helps analyze algorithm efficiency.",
    technologies: ["C++", "Makefile"],
    repo: "https://github.com/Bhavika42/CPU-SCHEDULER"
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="repo-link"
              >
                View Repository
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
