import React from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import "./Projects.scss";
import showerhead from "../../assets/images/showerhead.png";

interface Project {
  title: string;
  img_path?: string;
  router_link: string;
  description: string;
}

const project1: Project = {
  title: "Project 1 - Designing a Smart Object UI",
  router_link: "/projects/project-one",
  description:
    "This project tasked me to develop a user interface for a smart shower based on design requirements, prototype sketches, and user feedback",
  img_path: showerhead
};

function Projects(): JSX.Element {
  return (
    <div className="projects">
      <h1 className="projects__header">Projects</h1>
      <div className="projects__grid">
        <ProjectCard
          title={project1.title}
          router_link={project1.router_link}
          description={project1.description}
          img_path={project1.img_path}
        />
      </div>
    </div>
  );
}

export default Projects;
