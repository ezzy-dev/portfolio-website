import React from "react";
import ProjectCard from "../../components/project-card/ProjectCard";
import "./Projects.scss";
import showerhead from "../../assets/images/showerhead.png";
import canvas from "../../assets/images/canvas.png";
import ar_glasses from "../../assets/images/ar-glasses.jpg";

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

const project2: Project = {
  title: "Project 2 - Alterna-Canvas",
  router_link: "/projects/project-two",
  description:
    "This project tasked me and a partner to redesign the school website Canvas based on design requirements, prototype sketches, and user feedback along with the theme 'orgainzation and motivation'",
  img_path: canvas
};

const project3: Project = {
  title: "Project 3 - UC AR-Verse",
  router_link: "/projects/project-three",
  description:
    "This project tasked me and a partner to design and envision user interfaces and interactions with AR content using sketches, wire-framing, prototyping, and deomnstration",
  img_path: ar_glasses
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
        <ProjectCard
          title={project2.title}
          router_link={project2.router_link}
          description={project2.description}
          img_path={project2.img_path}
        />
        <ProjectCard
          title={project3.title}
          router_link={project3.router_link}
          description={project3.description}
          img_path={project3.img_path}
        />
      </div>
    </div>
  );
}

export default Projects;
